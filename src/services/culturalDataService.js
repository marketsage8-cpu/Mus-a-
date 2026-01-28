/**
 * Service de récupération DIRECTE des données culturelles
 * depuis les APIs publiques gratuites :
 *   - data.culture.gouv.fr (musées, monuments historiques)
 *   - OpenStreetMap Overpass (châteaux, musées, églises)
 *   - Wikidata SPARQL (musées, châteaux, églises)
 *
 * UNIQUEMENT 4 types : musée, château, exposition, église
 *
 * Le navigateur de l'utilisateur appelle directement les APIs.
 * Les données sont mises en cache dans IndexedDB (7 jours).
 */

const CACHE_KEY = 'muzea_all_places';
const CACHE_VERSION_KEY = 'muzea_cache_version';
// Version 6: Ajout des champs enrichis pour musées (adresse, URL, téléphone, thèmes)
// et géocodage via API BAN pour musées sans coordonnées GPS
const CACHE_VERSION = 6;
const CACHE_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 jours

// ─── Helpers ─────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJSON(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn(`[Muzea] Tentative ${i + 1}/${retries} échouée:`, err.message);
      if (i < retries - 1) await sleep(1500 * (i + 1));
    }
  }
  return null;
}

async function fetchPOST(url, body, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn(`[Muzea] POST tentative ${i + 1}/${retries} échouée:`, err.message);
      if (i < retries - 1) await sleep(2000 * (i + 1));
    }
  }
  return null;
}

// ─── Département → Région ────────────────────────────────

const deptToRegion = {
  '01':'Auvergne-Rhône-Alpes','03':'Auvergne-Rhône-Alpes','07':'Auvergne-Rhône-Alpes',
  '15':'Auvergne-Rhône-Alpes','26':'Auvergne-Rhône-Alpes','38':'Auvergne-Rhône-Alpes',
  '42':'Auvergne-Rhône-Alpes','43':'Auvergne-Rhône-Alpes','63':'Auvergne-Rhône-Alpes',
  '69':'Auvergne-Rhône-Alpes','73':'Auvergne-Rhône-Alpes','74':'Auvergne-Rhône-Alpes',
  '21':'Bourgogne-Franche-Comté','25':'Bourgogne-Franche-Comté','39':'Bourgogne-Franche-Comté',
  '58':'Bourgogne-Franche-Comté','70':'Bourgogne-Franche-Comté','71':'Bourgogne-Franche-Comté',
  '89':'Bourgogne-Franche-Comté','90':'Bourgogne-Franche-Comté',
  '22':'Bretagne','29':'Bretagne','35':'Bretagne','56':'Bretagne',
  '18':'Centre-Val de Loire','28':'Centre-Val de Loire','36':'Centre-Val de Loire',
  '37':'Centre-Val de Loire','41':'Centre-Val de Loire','45':'Centre-Val de Loire',
  '08':'Grand Est','10':'Grand Est','51':'Grand Est','52':'Grand Est',
  '54':'Grand Est','55':'Grand Est','57':'Grand Est','67':'Grand Est','68':'Grand Est','88':'Grand Est',
  '02':'Hauts-de-France','59':'Hauts-de-France','60':'Hauts-de-France',
  '62':'Hauts-de-France','80':'Hauts-de-France',
  '75':'Île-de-France','77':'Île-de-France','78':'Île-de-France','91':'Île-de-France',
  '92':'Île-de-France','93':'Île-de-France','94':'Île-de-France','95':'Île-de-France',
  '14':'Normandie','27':'Normandie','50':'Normandie','61':'Normandie','76':'Normandie',
  '16':'Nouvelle-Aquitaine','17':'Nouvelle-Aquitaine','19':'Nouvelle-Aquitaine',
  '23':'Nouvelle-Aquitaine','24':'Nouvelle-Aquitaine','33':'Nouvelle-Aquitaine',
  '40':'Nouvelle-Aquitaine','47':'Nouvelle-Aquitaine','64':'Nouvelle-Aquitaine',
  '79':'Nouvelle-Aquitaine','86':'Nouvelle-Aquitaine','87':'Nouvelle-Aquitaine',
  '09':'Occitanie','11':'Occitanie','12':'Occitanie','30':'Occitanie',
  '31':'Occitanie','32':'Occitanie','34':'Occitanie','46':'Occitanie',
  '48':'Occitanie','65':'Occitanie','66':'Occitanie','81':'Occitanie','82':'Occitanie',
  '44':'Pays de la Loire','49':'Pays de la Loire','53':'Pays de la Loire',
  '72':'Pays de la Loire','85':'Pays de la Loire',
  '04':'Provence-Alpes-Côte d\'Azur','05':'Provence-Alpes-Côte d\'Azur',
  '06':'Provence-Alpes-Côte d\'Azur','13':'Provence-Alpes-Côte d\'Azur',
  '83':'Provence-Alpes-Côte d\'Azur','84':'Provence-Alpes-Côte d\'Azur',
  '2A':'Corse','2B':'Corse','20':'Corse',
};

function getRegion(dept) {
  if (!dept) return '';
  return deptToRegion[dept.toString().padStart(2, '0')] || '';
}

// ─── Pagination générique data.culture.gouv.fr ───────────

async function fetchAllPages(datasetId, processRecord, onProgress, options = {}) {
  const { refine = '' } = options;
  const LIMIT = 100;
  let offset = 0;
  let total = null;
  const results = [];

  while (total === null || offset < total) {
    let url = `https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/${datasetId}/records?limit=${LIMIT}&offset=${offset}`;
    if (refine) url += `&refine=${encodeURIComponent(refine)}`;

    const data = await fetchJSON(url);
    if (!data || !data.results) break;

    if (total === null) total = data.total_count || 0;

    for (const r of data.results) {
      const place = processRecord(r);
      if (place) results.push(place);
    }

    offset += LIMIT;
    onProgress?.({ source: datasetId, loaded: Math.min(offset, total), total });
    await sleep(150);
  }

  return results;
}

// ─── Source 1 : Musées de France (enrichi) ───────────────
// API: data.culture.gouv.fr - Dataset: musees-de-france-base-museofile
// Documentation: https://data.culture.gouv.fr/explore/dataset/musees-de-france-base-museofile/api/
// Champs utilisés: NOMOFF, AUTNOM, ADRL1_M, LIEU_M, CP_M, VILLE_M, DPT, REGION, URL_M, TEL_M, DOMPAL, THEMES, HIST, ATOUT
// Ce dataset contient ~1200 musées labellisés "Musée de France"

// File d'attente pour géocodage des musées sans coordonnées
const geocodeQueue = [];
let isGeocoding = false;

/**
 * Géocode une adresse via l'API BAN (Base Adresse Nationale)
 * API gratuite, sans clé, limite de 50 req/sec
 * https://adresse.data.gouv.fr/api-doc/adresse
 */
async function geocodeAddress(address, city, postcode) {
  if (!address && !city) return null;

  const query = [address, postcode, city].filter(Boolean).join(' ').trim();
  if (!query) return null;

  try {
    const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=1`;
    const res = await fetch(url);
    if (!res.ok) return null;

    const data = await res.json();
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].geometry.coordinates;
      return { lat, lng };
    }
  } catch (err) {
    console.warn(`[Muzea] Géocodage échoué pour "${query}":`, err.message);
  }
  return null;
}

/**
 * Traite la file de géocodage avec rate limiting (50ms entre chaque requête)
 */
async function processGeocodeQueue(onProgress) {
  if (isGeocoding || geocodeQueue.length === 0) return [];
  isGeocoding = true;

  const results = [];
  const total = geocodeQueue.length;
  let processed = 0;

  console.log(`[Muzea] Géocodage de ${total} musées sans coordonnées via API BAN...`);

  while (geocodeQueue.length > 0) {
    const item = geocodeQueue.shift();
    const coords = await geocodeAddress(item.address, item.city, item.postcode);

    if (coords) {
      results.push({ ...item.museum, coordinates: coords });
    } else {
      console.warn(`[Muzea] GPS manquant pour: ${item.museum.name} (${item.city})`);
    }

    processed++;
    if (processed % 10 === 0) {
      onProgress?.({ source: 'Géocodage BAN', loaded: processed, total });
    }

    // Rate limiting: 50ms entre chaque requête (20 req/sec max, bien sous la limite de 50)
    await sleep(50);
  }

  isGeocoding = false;
  console.log(`[Muzea] Géocodage terminé: ${results.length}/${total} musées géocodés`);
  return results;
}

async function fetchMuseums(onProgress) {
  const museumsWithCoords = [];
  const museumsWithoutCoords = [];

  await fetchAllPages(
    'musees-de-france-base-museofile',
    (r) => {
      // Nom du musée (priorité: nom officiel > nom d'usage)
      const name = (r.nomoff || r.autnom || r.nomusage || r.nom_officiel || '').trim();
      if (!name) return null;

      // Adresse complète
      const address1 = (r.adrl1_m || r.adr || '').trim();
      const address2 = (r.lieu_m || '').trim();
      const fullAddress = [address1, address2].filter(Boolean).join(', ');

      // Localisation
      const city = (r.ville_m || r.commune || '').trim();
      const postcode = (r.cp_m || r.cp || '').toString().trim();
      const dept = (r.dpt || r.departement || '').toString().trim();
      const region = r.region || getRegion(dept);

      // Informations complémentaires
      const url = (r.url_m || r.siteweb || '').trim();
      const phone = (r.tel_m || r.telephone || '').trim();
      const themes = (r.dompal || r.themes || '').trim();
      const history = (r.hist || '').trim();
      const highlights = (r.atout || '').trim();

      // Construire la description enrichie
      let description = '';
      if (themes) {
        description = `Musée spécialisé en ${themes.toLowerCase()}.`;
      } else {
        description = `Musée de France situé à ${city || 'France'}.`;
      }
      if (history && history.length < 200) {
        description += ` ${history}`;
      }

      // Structure du musée normalisée
      const museum = {
        name,
        type: 'musée',
        description,
        location: `${city}, ${region}`.replace(/^, |, $/g, '') || 'France',
        // Champs enrichis pour les popups
        address: fullAddress,
        city,
        postcode,
        url: url.startsWith('http') ? url : (url ? `https://${url}` : ''),
        phone,
        themes,
        highlights: highlights || (themes ? themes.split(';').map(t => t.trim()).filter(Boolean).slice(0, 3) : []),
        price: 'Se renseigner',
        hours: '10h - 18h (se renseigner)',
        period: themes || 'Collections permanentes',
        source: 'data.culture.gouv.fr'
      };

      // Coordonnées GPS
      const geo = r.geolocalisation || r.coordonnees_finales || r.coordonnees;
      if (geo) {
        const lat = geo.lat || geo.latitude;
        const lng = geo.lon || geo.lng || geo.longitude;
        if (lat && lng && !isNaN(+lat) && !isNaN(+lng)) {
          museum.coordinates = { lat: +lat, lng: +lng };
          museumsWithCoords.push(museum);
          return null; // On retourne null car on gère manuellement
        }
      }

      // Si pas de GPS, ajouter à la file de géocodage
      museumsWithoutCoords.push({
        museum,
        address: fullAddress,
        city,
        postcode
      });

      return null;
    },
    onProgress
  );

  // Ajouter les musées sans coords à la file de géocodage
  geocodeQueue.push(...museumsWithoutCoords);

  // Traiter le géocodage
  const geocodedMuseums = await processGeocodeQueue(onProgress);

  console.log(`[Muzea] Musées de France: ${museumsWithCoords.length} avec GPS, ${geocodedMuseums.length} géocodés, ${museumsWithoutCoords.length - geocodedMuseums.length} sans GPS`);

  return [...museumsWithCoords, ...geocodedMuseums];
}

// ─── Source 2 : Monuments historiques (classés + inscrits) ──

async function fetchMonuments(onProgress) {
  const process = (r) => {
    const geo = r.coordonnees || r.geolocalisation;
    if (!geo) return null;
    const lat = geo.lat || geo.latitude;
    const lng = geo.lon || geo.lng || geo.longitude;
    if (!lat || !lng) return null;
    const name = r.tico || r.appellation_courante || r.denominationp || '';
    if (!name) return null;
    const city = r.commune || r.com || '';
    const dept = r.dpt || r.departement || '';
    const region = r.reg || r.region || getRegion(dept);
    const isChateau = /ch[âa]teau/i.test(name);
    const isEglise = /[ée]glise|cath[ée]drale|basilique|abbaye|chapelle|prieur[ée]|coll[ée]giale|clo[iî]tre|notre.?dame/i.test(name);
    if (!isChateau && !isEglise) return null; // On ne garde que châteaux et églises
    const siecle = r.scle || '';
    return {
      name: name.trim(), type: isChateau ? 'château' : 'église',
      description: `${isChateau ? 'Château' : 'Édifice religieux'} historique${siecle ? ` (${siecle})` : ''} situé à ${city}.`,
      location: `${city}, ${region}`.replace(/^, |, $/g, ''),
      coordinates: { lat: +lat, lng: +lng },
      price: 'Se renseigner', hours: 'Se renseigner',
      period: siecle || 'Historique', highlights: [],
    };
  };

  const [classes, inscrits] = await Promise.all([
    fetchAllPages('liste-des-immeubles-proteges-au-titre-des-monuments-historiques', process, onProgress, { refine: 'dpro:classé' }),
    fetchAllPages('liste-des-immeubles-proteges-au-titre-des-monuments-historiques', process, onProgress, { refine: 'dpro:inscrit' }),
  ]);
  return [...classes, ...inscrits];
}

// ─── Source 3 : Châteaux + Musées + Monuments OSM ────────

async function fetchOSMPlaces(onProgress) {
  const query = `
    [out:json][timeout:180];
    area["ISO3166-1"="FR"]->.fr;
    (
      nwr["historic"="castle"](area.fr);
      nwr["castle_type"](area.fr);
      nwr["tourism"="museum"](area.fr);
      nwr["tourism"="gallery"](area.fr);
      nwr["amenity"="arts_centre"](area.fr);
      nwr["historic"="monument"](area.fr);
      nwr["historic"="memorial"](area.fr);
      nwr["historic"="ruins"](area.fr);
      nwr["historic"="fort"](area.fr);
    );
    out center;
  `;

  onProgress?.({ source: 'OpenStreetMap', loaded: 0, total: 1, status: 'Chargement OSM…' });

  const data = await fetchPOST(
    'https://overpass-api.de/api/interpreter',
    `data=${encodeURIComponent(query.trim())}`
  );

  if (!data || !data.elements) return [];

  onProgress?.({ source: 'OpenStreetMap', loaded: 1, total: 1 });

  const places = [];
  for (const el of data.elements) {
    const lat = el.lat || el.center?.lat;
    const lng = el.lon || el.center?.lon;
    if (!lat || !lng) continue;
    const tags = el.tags || {};
    const name = tags.name || tags['name:fr'] || '';
    if (!name) continue;

    const city = tags['addr:city'] || tags['addr:municipality'] || '';
    const historic = tags.historic || '';
    const tourism = tags.tourism || '';
    const amenity = tags.amenity || '';

    let type = null;
    let desc = '';
    if (historic === 'castle' || tags.castle_type) {
      type = 'château';
      desc = `Château${city ? ` situé à ${city}` : ''}, France.`;
    } else if (tourism === 'museum') {
      type = 'musée';
      desc = `Musée${city ? ` à ${city}` : ''}, France.`;
    } else if (tourism === 'gallery' || amenity === 'arts_centre') {
      type = 'exposition';
      desc = `Galerie / Centre d'art${city ? ` à ${city}` : ''}, France.`;
    } else if (/church|cathedral|abbey|chapel|monastery/i.test(tags.building || '') ||
               /[ée]glise|cath[ée]drale|basilique|abbaye|chapelle|notre.?dame/i.test(name)) {
      type = 'église';
      desc = `Édifice religieux${city ? ` à ${city}` : ''}, France.`;
    } else {
      continue; // Skip: on ne veut pas de "monument" générique
    }

    places.push({
      name: name.trim(), type,
      description: tags.description || desc,
      location: city || 'France',
      coordinates: { lat: +lat, lng: +lng },
      price: tags.fee === 'no' ? 'Gratuit' : 'Se renseigner',
      hours: tags.opening_hours || 'Se renseigner',
      period: tags.start_date || 'Historique',
      highlights: [],
    });
  }
  return places;
}

// ─── Source 4 : Wikidata SPARQL (musées + châteaux + églises) ──

async function fetchWikidataPlaces(onProgress) {
  onProgress?.({ source: 'Wikidata', loaded: 0, total: 1, status: 'Chargement Wikidata…' });

  // SPARQL query: museums, castles, monuments in France with coordinates
  const sparql = `
SELECT ?item ?itemLabel ?lat ?lon ?typeLabel ?communeLabel ?image WHERE {
  VALUES ?type { wd:Q33506 wd:Q23413 wd:Q811979 wd:Q16970 wd:Q839954 wd:Q4989906 wd:Q207694 wd:Q57821 wd:Q3395121 }
  ?item wdt:P17 wd:Q142 ;
        wdt:P31 ?type ;
        wdt:P625 ?coord .
  BIND(geof:latitude(?coord) AS ?lat)
  BIND(geof:longitude(?coord) AS ?lon)
  OPTIONAL { ?item wdt:P131 ?commune . }
  OPTIONAL { ?item wdt:P18 ?image . }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en" . }
}
LIMIT 10000
`.trim();

  const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`;

  const data = await fetchJSON(url);
  if (!data?.results?.bindings) return [];

  onProgress?.({ source: 'Wikidata', loaded: 1, total: 1 });

  const places = [];
  const seen = new Set();

  for (const b of data.results.bindings) {
    const lat = parseFloat(b.lat?.value);
    const lng = parseFloat(b.lon?.value);
    if (!lat || !lng || isNaN(lat) || isNaN(lng)) continue;

    const name = b.itemLabel?.value || '';
    if (!name || name.startsWith('Q')) continue; // skip unnamed items

    const itemId = b.item?.value || '';
    if (seen.has(itemId)) continue;
    seen.add(itemId);

    const typeLabel = (b.typeLabel?.value || '').toLowerCase();
    const city = b.communeLabel?.value || '';

    let type = null;
    if (/mus[ée]/i.test(typeLabel) || /gallery|galerie/i.test(typeLabel)) {
      type = 'musée';
    } else if (/ch[âa]teau|castle|fort/i.test(typeLabel)) {
      type = 'château';
    } else if (/[ée]glise|church|cath[ée]drale|basilique|abbaye|chapelle|prieur[ée]/i.test(typeLabel)) {
      type = 'église';
    } else if (/exposition|galerie/i.test(typeLabel)) {
      type = 'exposition';
    } else {
      continue; // Skip: on ne veut que musée, château, église, exposition
    }

    places.push({
      name: name.trim(),
      type,
      description: `${typeLabel ? typeLabel.charAt(0).toUpperCase() + typeLabel.slice(1) : 'Lieu culturel'}${city ? ` à ${city}` : ''}, France.`,
      location: city || 'France',
      coordinates: { lat, lng },
      price: 'Se renseigner',
      hours: 'Se renseigner',
      period: 'Historique',
      highlights: [],
    });
  }
  return places;
}

// ─── Source 5 : Architecture remarquable (Mérimée via data.culture.gouv.fr) ──

async function fetchArchitecture(onProgress) {
  return fetchAllPages(
    'liste-des-edifices-labellises-architecture-contemporaine-remarquable-acr',
    (r) => {
      const geo = r.coordonnees || r.geolocalisation;
      if (!geo) return null;
      const lat = geo.lat || geo.latitude;
      const lng = geo.lon || geo.lng || geo.longitude;
      if (!lat || !lng) return null;
      const name = r.titre || r.appellation || r.denomination || '';
      if (!name) return null;
      const city = r.commune || '';
      const dept = r.departement || '';
      const region = getRegion(dept);
      return {
        name: name.trim(),
        type: 'exposition',
        description: `Architecture contemporaine remarquable${city ? ` à ${city}` : ''}.`,
        location: `${city}, ${region}`.replace(/^, |, $/g, ''),
        coordinates: { lat: +lat, lng: +lng },
        price: 'Se renseigner',
        hours: 'Se renseigner',
        period: 'Architecture contemporaine',
        highlights: [],
      };
    },
    onProgress
  );
}

// ─── Dédoublonnage rapide ────────────────────────────────

function deduplicate(allPlaces) {
  const nameIndex = new Set();
  const CELL = 0.001;
  const grid = new Map();

  const unique = [];
  for (const p of allPlaces) {
    const key = p.name.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '') + '_' + p.type;
    if (nameIndex.has(key)) continue;

    const cx = Math.floor(p.coordinates.lat / CELL);
    const cy = Math.floor(p.coordinates.lng / CELL);
    let tooClose = false;
    for (let dx = -1; dx <= 1 && !tooClose; dx++) {
      for (let dy = -1; dy <= 1 && !tooClose; dy++) {
        const gk = `${cx + dx}_${cy + dy}`;
        for (const ex of (grid.get(gk) || [])) {
          if (ex.type === p.type &&
            Math.abs(ex.coordinates.lat - p.coordinates.lat) < CELL &&
            Math.abs(ex.coordinates.lng - p.coordinates.lng) < CELL) {
            tooClose = true;
            break;
          }
        }
      }
    }
    if (tooClose) continue;

    nameIndex.add(key);
    unique.push(p);
    const gk = `${cx}_${cy}`;
    if (!grid.has(gk)) grid.set(gk, []);
    grid.get(gk).push(p);
  }
  return unique;
}

// ─── Cache IndexedDB ─────────────────────────────────────

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('muzea_db', 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('places')) {
        db.createObjectStore('places', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('meta')) {
        db.createObjectStore('meta', { keyPath: 'key' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getCachedPlaces() {
  try {
    const db = await openDB();
    const version = await new Promise((resolve) => {
      const tx = db.transaction('meta', 'readonly');
      const req = tx.objectStore('meta').get('version');
      req.onsuccess = () => resolve(req.result?.value);
      req.onerror = () => resolve(null);
    });
    if (version !== CACHE_VERSION) return null;

    const date = await new Promise((resolve) => {
      const tx = db.transaction('meta', 'readonly');
      const req = tx.objectStore('meta').get('date');
      req.onsuccess = () => resolve(req.result?.value);
      req.onerror = () => resolve(null);
    });
    if (!date || Date.now() - date > CACHE_MAX_AGE) return null;

    return new Promise((resolve) => {
      const tx = db.transaction('places', 'readonly');
      const req = tx.objectStore('places').getAll();
      req.onsuccess = () => resolve(req.result?.length > 0 ? req.result : null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function setCachedPlaces(places) {
  try {
    const db = await openDB();
    const tx = db.transaction(['places', 'meta'], 'readwrite');
    const store = tx.objectStore('places');
    store.clear();
    for (const p of places) {
      store.put(p);
    }
    const meta = tx.objectStore('meta');
    meta.put({ key: 'version', value: CACHE_VERSION });
    meta.put({ key: 'date', value: Date.now() });
    meta.put({ key: 'count', value: places.length });
  } catch (err) {
    console.warn('[Muzea] Erreur cache:', err);
  }
}

// ─── API publique ────────────────────────────────────────

/**
 * Charge TOUS les lieux culturels depuis les APIs.
 * Retourne les données du cache si disponible,
 * sinon lance le chargement complet.
 *
 * @param {Function} onProgress - callback({ source, loaded, total, phase })
 * @returns {Promise<Array>} Liste de tous les lieux
 */
export async function loadAllCulturalPlaces(onProgress) {
  // 1. Essayer le cache
  const cached = await getCachedPlaces();
  if (cached) {
    console.log(`[Muzea] ${cached.length} lieux chargés depuis le cache`);
    onProgress?.({ phase: 'done', total: cached.length });
    return cached;
  }

  console.log('[Muzea] Pas de cache — chargement depuis les APIs…');
  onProgress?.({ phase: 'loading', status: 'Connexion aux APIs…' });

  // 2. Charger toutes les sources en parallèle (5 sources — pas de festivals)
  const [museums, monuments, osmPlaces, wikidata, architecture] = await Promise.all([
    fetchMuseums(onProgress).catch((e) => { console.warn('[Muzea] Musées:', e.message); return []; }),
    fetchMonuments(onProgress).catch((e) => { console.warn('[Muzea] Monuments:', e.message); return []; }),
    fetchOSMPlaces(onProgress).catch((e) => { console.warn('[Muzea] OSM:', e.message); return []; }),
    fetchWikidataPlaces(onProgress).catch((e) => { console.warn('[Muzea] Wikidata:', e.message); return []; }),
    fetchArchitecture(onProgress).catch((e) => { console.warn('[Muzea] Architecture:', e.message); return []; }),
  ]);

  console.log(`[Muzea] Sources: musées=${museums.length}, monuments=${monuments.length}, OSM=${osmPlaces.length}, wikidata=${wikidata.length}, archi=${architecture.length}`);

  const allRaw = [...museums, ...monuments, ...osmPlaces, ...wikidata, ...architecture];
  console.log(`[Muzea] ${allRaw.length} lieux bruts récupérés au total`);

  if (allRaw.length === 0) return null;

  // 3. Dédoublonnage
  onProgress?.({ phase: 'dedup', status: 'Dédoublonnage…' });
  const unique = deduplicate(allRaw);

  // 4. Assigner IDs
  const places = unique.map((p, i) => ({
    ...p,
    id: i + 1,
    image: '',
    rating: +(4.0 + Math.random() * 0.9).toFixed(1),
    visited: false,
    favorite: false,
  }));

  console.log(`[Muzea] ${places.length} lieux uniques prêts`);

  // 5. Mettre en cache
  onProgress?.({ phase: 'caching', status: 'Mise en cache…' });
  await setCachedPlaces(places);

  onProgress?.({ phase: 'done', total: places.length });
  return places;
}

/**
 * Vide le cache pour forcer un rechargement
 */
export async function clearCache() {
  try {
    const db = await openDB();
    const tx = db.transaction(['places', 'meta'], 'readwrite');
    tx.objectStore('places').clear();
    tx.objectStore('meta').clear();
  } catch {
    // ignore
  }
}
