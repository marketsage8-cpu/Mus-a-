/**
 * Service de chargement DYNAMIQUE des lieux culturels
 *
 * ARCHITECTURE: Interface d'agrégation de 3 APIs en temps réel
 * - Aucun stockage local (pas de cache persistant)
 * - Chargement à la demande selon la zone visible
 * - Données toujours fraîches
 *
 * SOURCES:
 *   1. data.culture.gouv.fr - Musées officiels (Muséofile)
 *   2. OpenStreetMap Overpass - Musées, châteaux, églises
 *   3. Wikipedia - Images et informations complémentaires
 */

// ─── Configuration ───────────────────────────────────────

const CONFIG = {
  // Délai minimum entre deux chargements (debounce)
  DEBOUNCE_MS: 500,
  // Distance max pour dédoublonnage (en degrés, ~50m)
  DEDUP_THRESHOLD: 0.0005,
  // Timeout des requêtes
  TIMEOUT_MS: 15000,
  // Limite de résultats par API
  LIMIT_CULTURE: 100,
  LIMIT_OSM: 500,
};

// ─── Cache mémoire temporaire (session uniquement) ───────

const memoryCache = {
  // Cache des zones déjà chargées: "latMin_lonMin_latMax_lonMax" -> places[]
  zones: new Map(),
  // Cache des images Wikipedia: "nom_lieu" -> image_url
  images: new Map(),
  // Places actuellement affichées (pour éviter les doublons)
  currentPlaces: new Map(),
};

// ─── Helpers ─────────────────────────────────────────────

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

/**
 * Fetch avec timeout
 */
async function fetchWithTimeout(url, options = {}, timeout = CONFIG.TIMEOUT_MS) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

/**
 * Fetch JSON avec retry
 */
async function fetchJSON(url, retries = 2) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetchWithTimeout(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await sleep(500 * (i + 1));
    }
  }
  return null;
}

/**
 * Normalise un nom pour comparaison
 */
function normalizeName(name) {
  return name.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Calcule la distance entre deux points (approximation rapide)
 */
function distance(p1, p2) {
  const dlat = Math.abs(p1.lat - p2.lat);
  const dlng = Math.abs(p1.lng - p2.lng);
  return Math.sqrt(dlat * dlat + dlng * dlng);
}

// ─── API 1: DATA.CULTURE.GOUV.FR (Musées officiels) ──────

/**
 * Récupère les musées officiels depuis data.culture.gouv.fr
 * Utilise la recherche géographique avec within_distance
 */
async function fetchCultureMuseums(bounds) {
  const { latMin, latMax, lonMin, lonMax } = bounds;

  // Centre de la zone et rayon approximatif
  const centerLat = (latMin + latMax) / 2;
  const centerLon = (lonMin + lonMax) / 2;
  const radiusKm = Math.max(
    Math.abs(latMax - latMin) * 111,  // 1 degré ≈ 111km
    Math.abs(lonMax - lonMin) * 85    // à la latitude France
  ) / 2 + 5; // +5km de marge

  const url = `https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/musees-de-france-base-museofile/records?limit=${CONFIG.LIMIT_CULTURE}&where=within_distance(geolocalisation,geom'POINT(${centerLon} ${centerLat})',${Math.min(radiusKm, 50)}km)`;

  try {
    const data = await fetchJSON(url);
    if (!data?.results) return [];

    return data.results.map(r => {
      const geo = r.geolocalisation || r.coordonnees_finales;
      if (!geo) return null;

      const lat = geo.lat || geo.latitude;
      const lng = geo.lon || geo.lng || geo.longitude;
      if (!lat || !lng) return null;

      const name = (r.nomoff || r.autnom || r.nomusage || '').trim();
      if (!name) return null;

      const city = (r.ville_m || r.commune || '').trim();
      const address = [r.adrl1_m, r.lieu_m].filter(Boolean).join(', ');

      return {
        id: `culture_${r.ref || Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        name,
        type: 'musée',
        description: r.dompal ? `Musée spécialisé en ${r.dompal.toLowerCase()}.` : `Musée de France à ${city}.`,
        location: city || 'France',
        city,
        address,
        postcode: r.cp_m || '',
        coordinates: { lat: +lat, lng: +lng },
        url: r.url_m ? (r.url_m.startsWith('http') ? r.url_m : `https://${r.url_m}`) : '',
        phone: r.tel_m || '',
        themes: r.dompal || '',
        price: 'Se renseigner',
        hours: '10h - 18h (se renseigner)',
        image: '', // Sera chargé via Wikipedia
        source: 'data.culture.gouv.fr',
        official: true
      };
    }).filter(Boolean);

  } catch (err) {
    console.warn('[Live] data.culture.gouv.fr error:', err.message);
    return [];
  }
}

// ─── API 2: OPENSTREETMAP / OVERPASS ─────────────────────

/**
 * Récupère les lieux depuis OpenStreetMap via Overpass API
 * Types: musées, châteaux, églises/lieux de culte
 */
async function fetchOSMPlaces(bounds) {
  const { latMin, latMax, lonMin, lonMax } = bounds;

  // Requête Overpass optimisée pour la zone visible
  const query = `
[out:json][timeout:30];
(
  node["tourism"="museum"](${latMin},${lonMin},${latMax},${lonMax});
  way["tourism"="museum"](${latMin},${lonMin},${latMax},${lonMax});
  node["historic"="castle"](${latMin},${lonMin},${latMax},${lonMax});
  way["historic"="castle"](${latMin},${lonMin},${latMax},${lonMax});
  node["tourism"="gallery"](${latMin},${lonMin},${latMax},${lonMax});
  node["amenity"="arts_centre"](${latMin},${lonMin},${latMax},${lonMax});
);
out center tags;
`.trim();

  try {
    const res = await fetchWithTimeout(
      'https://overpass-api.de/api/interpreter',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `data=${encodeURIComponent(query)}`
      },
      CONFIG.TIMEOUT_MS
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!data?.elements) return [];

    return data.elements.map(el => {
      const lat = el.lat || el.center?.lat;
      const lng = el.lon || el.center?.lon;
      if (!lat || !lng) return null;

      const tags = el.tags || {};
      const name = tags.name || tags['name:fr'] || '';
      if (!name) return null;

      const city = tags['addr:city'] || tags['addr:municipality'] || '';
      const tourism = tags.tourism || '';
      const historic = tags.historic || '';
      const amenity = tags.amenity || '';

      // Déterminer le type
      let type = 'musée';
      if (historic === 'castle' || tags.castle_type) {
        type = 'château';
      } else if (tourism === 'gallery' || amenity === 'arts_centre') {
        type = 'exposition';
      }

      // Image depuis wikimedia_commons si disponible
      let image = '';
      if (tags.image) {
        image = tags.image;
      } else if (tags.wikimedia_commons) {
        const filename = tags.wikimedia_commons.replace('File:', '').replace(/ /g, '_');
        image = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=400`;
      }

      return {
        id: `osm_${el.id}`,
        name: name.trim(),
        type,
        description: `${type.charAt(0).toUpperCase() + type.slice(1)}${city ? ` à ${city}` : ''}, France.`,
        location: city || 'France',
        city,
        address: [tags['addr:housenumber'], tags['addr:street']].filter(Boolean).join(' '),
        postcode: tags['addr:postcode'] || '',
        coordinates: { lat: +lat, lng: +lng },
        url: tags.website || tags['contact:website'] || '',
        phone: tags.phone || '',
        themes: tags.museum || tags.subject || '',
        price: tags.fee === 'no' ? 'Gratuit' : (tags.charge || 'Se renseigner'),
        hours: tags.opening_hours || 'Se renseigner',
        image,
        source: 'OpenStreetMap',
        wikidataId: tags.wikidata || ''
      };
    }).filter(Boolean);

  } catch (err) {
    console.warn('[Live] OpenStreetMap error:', err.message);
    return [];
  }
}

// ─── API 3: WIKIPEDIA (Images + infos) ───────────────────

/**
 * Récupère l'image d'un lieu depuis Wikipedia
 * Appelé en lazy loading (au clic ou survol)
 */
export async function fetchWikipediaImage(placeName) {
  // Vérifier le cache mémoire
  if (memoryCache.images.has(placeName)) {
    return memoryCache.images.get(placeName);
  }

  try {
    const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(placeName)}`;
    const res = await fetchWithTimeout(url, {
      headers: { 'Accept': 'application/json' }
    }, 5000);

    if (!res.ok) {
      // Essayer avec le nom simplifié (sans "Musée")
      const simpleName = placeName.replace(/^(musée|museum|château)\s+/i, '').trim();
      if (simpleName !== placeName) {
        const res2 = await fetchWithTimeout(
          `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(simpleName)}`,
          { headers: { 'Accept': 'application/json' } },
          5000
        );
        if (res2.ok) {
          const data2 = await res2.json();
          const image = data2.thumbnail?.source || data2.originalimage?.source || null;
          if (image) memoryCache.images.set(placeName, image);
          return image;
        }
      }
      return null;
    }

    const data = await res.json();
    const image = data.thumbnail?.source || data.originalimage?.source || null;
    if (image) memoryCache.images.set(placeName, image);
    return image;

  } catch {
    return null;
  }
}

/**
 * Récupère les images pour plusieurs lieux en batch
 */
export async function fetchImagesForPlaces(places, limit = 20) {
  const placesWithoutImage = places.filter(p => !p.image).slice(0, limit);

  const results = await Promise.allSettled(
    placesWithoutImage.map(async p => {
      const image = await fetchWikipediaImage(p.name);
      if (image) {
        p.image = image;
      }
      return p;
    })
  );

  return places;
}

// ─── Fusion et dédoublonnage ─────────────────────────────

/**
 * Fusionne les résultats des 3 APIs et dédoublonne
 * Priorité: data.culture.gouv (officiel) > OSM
 */
function mergeAndDedupe(culturePlaces, osmPlaces) {
  const all = [...culturePlaces, ...osmPlaces];
  const unique = [];
  const grid = new Map();

  for (const p of all) {
    if (!p.coordinates?.lat || !p.coordinates?.lng) continue;

    const key = normalizeName(p.name) + '_' + p.type;

    // Vérifier les doublons par proximité GPS
    const cx = Math.floor(p.coordinates.lat / CONFIG.DEDUP_THRESHOLD);
    const cy = Math.floor(p.coordinates.lng / CONFIG.DEDUP_THRESHOLD);
    let foundDupe = false;

    for (let dx = -1; dx <= 1 && !foundDupe; dx++) {
      for (let dy = -1; dy <= 1 && !foundDupe; dy++) {
        const gk = `${cx + dx}_${cy + dy}`;
        for (const ex of (grid.get(gk) || [])) {
          if (ex.type === p.type && distance(ex.coordinates, p.coordinates) < CONFIG.DEDUP_THRESHOLD) {
            // Fusionner: garder les données les plus complètes
            if (p.official && !ex.official) {
              // Remplacer par la version officielle
              Object.assign(ex, p);
            } else {
              // Compléter les champs manquants
              ex.image = ex.image || p.image;
              ex.url = ex.url || p.url;
              ex.address = ex.address || p.address;
              ex.phone = ex.phone || p.phone;
            }
            foundDupe = true;
            break;
          }
        }
      }
    }

    if (!foundDupe) {
      unique.push(p);
      const gk = `${cx}_${cy}`;
      if (!grid.has(gk)) grid.set(gk, []);
      grid.get(gk).push(p);
    }
  }

  return unique;
}

// ─── API Publique ────────────────────────────────────────

let pendingRequest = null;
let lastBounds = null;

/**
 * Charge les lieux pour une zone visible de la carte
 * Appelle les 3 APIs en parallèle et fusionne les résultats
 *
 * @param {Object} bounds - { latMin, latMax, lonMin, lonMax }
 * @param {Function} onProgress - callback({ phase, count })
 * @returns {Promise<Array>} Liste des lieux dans la zone
 */
export async function loadPlacesForBounds(bounds, onProgress) {
  const { latMin, latMax, lonMin, lonMax } = bounds;

  // Créer une clé pour cette zone
  const zoneKey = `${latMin.toFixed(3)}_${lonMin.toFixed(3)}_${latMax.toFixed(3)}_${lonMax.toFixed(3)}`;

  // Vérifier le cache mémoire
  if (memoryCache.zones.has(zoneKey)) {
    const cached = memoryCache.zones.get(zoneKey);
    onProgress?.({ phase: 'cached', count: cached.length });
    return cached;
  }

  // Annuler la requête précédente si elle existe
  if (pendingRequest) {
    pendingRequest.cancelled = true;
  }

  const request = { cancelled: false };
  pendingRequest = request;

  onProgress?.({ phase: 'loading', status: 'Chargement des données...' });

  try {
    // Charger les 2 APIs principales en parallèle
    const [culturePlaces, osmPlaces] = await Promise.all([
      fetchCultureMuseums(bounds),
      fetchOSMPlaces(bounds)
    ]);

    // Vérifier si la requête a été annulée
    if (request.cancelled) return [];

    console.log(`[Live] Reçu: ${culturePlaces.length} officiels, ${osmPlaces.length} OSM`);
    onProgress?.({ phase: 'merging', status: 'Fusion des données...' });

    // Fusionner et dédoublonner
    const merged = mergeAndDedupe(culturePlaces, osmPlaces);

    console.log(`[Live] ${merged.length} lieux uniques après fusion`);

    // Mettre en cache mémoire (limité à 50 zones)
    if (memoryCache.zones.size > 50) {
      const firstKey = memoryCache.zones.keys().next().value;
      memoryCache.zones.delete(firstKey);
    }
    memoryCache.zones.set(zoneKey, merged);

    onProgress?.({ phase: 'done', count: merged.length });
    return merged;

  } catch (err) {
    console.error('[Live] Error loading places:', err);
    onProgress?.({ phase: 'error', error: err.message });
    return [];
  }
}

/**
 * Vide le cache mémoire
 */
export function clearMemoryCache() {
  memoryCache.zones.clear();
  memoryCache.images.clear();
  memoryCache.currentPlaces.clear();
}

/**
 * Récupère le nombre de lieux en cache
 */
export function getCacheStats() {
  return {
    zones: memoryCache.zones.size,
    images: memoryCache.images.size,
    totalPlaces: Array.from(memoryCache.zones.values()).reduce((sum, places) => sum + places.length, 0)
  };
}
