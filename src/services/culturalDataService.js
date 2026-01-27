/**
 * Service de récupération DIRECTE des données culturelles
 * depuis les APIs publiques gratuites :
 *   - data.culture.gouv.fr (musées, monuments historiques, festivals)
 *   - OpenStreetMap Overpass (châteaux, musées, monuments, ruines, forts)
 *   - Wikidata SPARQL (musées, châteaux, monuments avec coordonnées)
 *
 * Le navigateur de l'utilisateur appelle directement les APIs.
 * Les données sont mises en cache dans IndexedDB (7 jours).
 */

const CACHE_KEY = 'muzea_all_places';
const CACHE_VERSION_KEY = 'muzea_cache_version';
const CACHE_VERSION = 4;
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

// ─── Source 1 : Musées de France ─────────────────────────

async function fetchMuseums(onProgress) {
  return fetchAllPages(
    'musees-de-france-base-museofile',
    (r) => {
      const geo = r.geolocalisation || r.coordonnees_finales;
      if (!geo) return null;
      const lat = geo.lat || geo.latitude;
      const lng = geo.lon || geo.lng || geo.longitude;
      if (!lat || !lng) return null;
      const name = r.nomoff || r.nomusage || r.nom_officiel || '';
      if (!name) return null;
      const city = r.ville_m || r.commune || '';
      const dept = r.dpt || r.departement || '';
      const region = r.region || getRegion(dept);
      const themes = r.dompal || r.themes || '';
      return {
        name: name.trim(), type: 'musée',
        description: themes ? `Musée spécialisé en ${themes.toLowerCase()}.` : `Musée de France situé à ${city}.`,
        location: `${city}, ${region}`.replace(/^, |, $/g, ''),
        coordinates: { lat: +lat, lng: +lng },
        price: 'Se renseigner', hours: '10h - 18h (se renseigner)',
        period: themes || 'Collections permanentes',
        highlights: themes ? themes.split(';').map(t => t.trim()).filter(Boolean).slice(0, 3) : [],
      };
    },
    onProgress
  );
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
    const siecle = r.scle || '';
    return {
      name: name.trim(), type: isChateau ? 'château' : 'monument',
      description: `Monument historique${siecle ? ` (${siecle})` : ''} situé à ${city}.`,
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

    let type = 'monument';
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
    } else {
      desc = `${historic || 'Monument'}${city ? ` à ${city}` : ''}, France.`;
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

// ─── Source 4 : Festivals ────────────────────────────────

async function fetchFestivals(onProgress) {
  return fetchAllPages(
    'panorama-des-festivals',
    (r) => {
      const geo = r.geocodage_xy || r.geolocalisation || r.coordonnees;
      if (!geo) return null;
      const lat = geo.lat || geo.latitude;
      const lng = geo.lon || geo.lng || geo.longitude;
      if (!lat || !lng) return null;
      const name = r.nom_du_festival || r.nom_manifestation || '';
      if (!name) return null;
      const city = r.commune_principale_de_deroulement || r.commune || r.ville || '';
      const dept = r.departement_principal_de_deroulement || r.departement || '';
      const region = r.region_principale_de_deroulement || r.region || getRegion(dept);
      const discipline = r.discipline_dominante || r.discipline || '';
      return {
        name: name.trim(), type: 'exposition',
        description: discipline
          ? `Festival de ${discipline.toLowerCase()}${city ? ` à ${city}` : ''}.`
          : `Festival culturel${city ? ` à ${city}` : ''}.`,
        location: `${city}, ${region}`.replace(/^, |, $/g, ''),
        coordinates: { lat: +lat, lng: +lng },
        price: 'Se renseigner', hours: 'Se renseigner',
        period: r.periode_principale_de_deroulement || discipline || 'Événement culturel',
        highlights: discipline ? [discipline] : [],
      };
    },
    onProgress
  );
}

// ─── Source 5 : Wikidata SPARQL (musées + châteaux + monuments) ──

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

    let type = 'monument';
    if (/mus[ée]/i.test(typeLabel) || /gallery|galerie/i.test(typeLabel)) {
      type = 'musée';
    } else if (/ch[âa]teau|castle|fort/i.test(typeLabel)) {
      type = 'château';
    } else if (/exposition|festival|galerie/i.test(typeLabel)) {
      type = 'exposition';
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

// ─── Source 6 : Architecture remarquable (Mérimée via data.culture.gouv.fr) ──

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
        type: 'monument',
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

  // 2. Charger toutes les sources en parallèle (6 sources)
  const [museums, monuments, osmPlaces, festivals, wikidata, architecture] = await Promise.all([
    fetchMuseums(onProgress).catch((e) => { console.warn('[Muzea] Musées:', e.message); return []; }),
    fetchMonuments(onProgress).catch((e) => { console.warn('[Muzea] Monuments:', e.message); return []; }),
    fetchOSMPlaces(onProgress).catch((e) => { console.warn('[Muzea] OSM:', e.message); return []; }),
    fetchFestivals(onProgress).catch((e) => { console.warn('[Muzea] Festivals:', e.message); return []; }),
    fetchWikidataPlaces(onProgress).catch((e) => { console.warn('[Muzea] Wikidata:', e.message); return []; }),
    fetchArchitecture(onProgress).catch((e) => { console.warn('[Muzea] Architecture:', e.message); return []; }),
  ]);

  console.log(`[Muzea] Sources: musées=${museums.length}, monuments=${monuments.length}, OSM=${osmPlaces.length}, festivals=${festivals.length}, wikidata=${wikidata.length}, archi=${architecture.length}`);

  const allRaw = [...museums, ...monuments, ...osmPlaces, ...festivals, ...wikidata, ...architecture];
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
