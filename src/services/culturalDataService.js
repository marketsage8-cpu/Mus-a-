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
// Version 8: Filtrage strict - uniquement musées, châteaux, églises
// Exclusion des faux positifs (écoles, institutions, festivals, etc.)
const CACHE_VERSION = 8;
const CACHE_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 jours

// Image placeholder pour les musées sans image
const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop';

// ─── Filtre des faux positifs ────────────────────────────
// Mots-clés qui indiquent que ce n'est PAS un vrai musée/château/église
const EXCLUDED_KEYWORDS = [
  // Établissements scolaires
  'école', 'ecole', 'lycée', 'lycee', 'collège', 'college', 'université', 'universite',
  'faculté', 'faculte', 'institut', 'iut', 'campus', 'académie', 'academie',
  'conservatoire', 'école primaire', 'école maternelle', 'groupe scolaire',
  // Institutions / Administration
  'mairie', 'hôtel de ville', 'hotel de ville', 'préfecture', 'prefecture',
  'conseil', 'administration', 'centre administratif', 'tribunal', 'palais de justice',
  'commissariat', 'gendarmerie', 'pompiers', 'caserne',
  // Santé
  'hôpital', 'hopital', 'clinique', 'ehpad', 'maison de retraite', 'dispensaire',
  // Commerce / Entreprises
  'supermarché', 'supermarche', 'magasin', 'boutique', 'centre commercial',
  'restaurant', 'café', 'bar', 'hôtel', 'hotel', 'auberge', 'gîte', 'camping',
  // Événements / Festivals
  'festival', 'fête', 'fete', 'salon', 'foire', 'brocante', 'marché', 'marche',
  'concert', 'spectacle', 'événement', 'evenement',
  // Sport / Loisirs
  'stade', 'gymnase', 'piscine', 'tennis', 'golf', 'bowling', 'cinéma', 'cinema',
  'théâtre', 'theatre', 'opéra', 'opera', 'salle de sport', 'fitness',
  // Transport
  'gare', 'aéroport', 'aeroport', 'station', 'parking', 'péage', 'autoroute',
  // Autres faux positifs
  'association', 'club', 'comité', 'comite', 'syndicat', 'fédération', 'federation',
  'office de tourisme', 'point info', 'accueil', 'bibliothèque', 'bibliotheque',
  'médiathèque', 'mediatheque', 'ludothèque', 'ludotheque', 'archives',
  'cimetière', 'cimetiere', 'funérarium', 'funerarium', 'crématorium', 'crematorium',
  'déchèterie', 'decheterie', 'station d\'épuration', 'usine', 'entrepôt', 'entrepot',
  'lotissement', 'résidence', 'residence', 'immeuble', 'appartement',
  'banque', 'caisse', 'assurance', 'notaire', 'avocat', 'cabinet',
  'coiffeur', 'salon de', 'garage', 'carrosserie', 'pressing', 'laverie',
  'boulangerie', 'pâtisserie', 'patisserie', 'pharmacie', 'opticien', 'dentiste',
  'vétérinaire', 'veterinaire', 'animalerie', 'jardinerie', 'bricolage',
  'zone industrielle', 'zone artisanale', 'zone commerciale', 'parc d\'activités',
];

/**
 * Vérifie si un nom de lieu est un faux positif (pas un vrai musée/château/église)
 */
function isFalsePositive(name) {
  if (!name) return true;
  const normalized = name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return EXCLUDED_KEYWORDS.some(keyword => normalized.includes(keyword));
}

// ─── Helpers ─────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Récupère l'image d'un musée depuis Wikipedia (fallback si pas d'image Wikidata)
 * API: https://fr.wikipedia.org/api/rest_v1/page/summary/{title}
 */
async function getWikipediaImage(museumName) {
  if (!museumName) return null;

  try {
    // Normaliser le nom pour la recherche Wikipedia
    const searchName = museumName
      .replace(/^(musée|museum)\s+/i, '')
      .trim();

    const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(museumName)}`;
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' }
    });

    if (!res.ok) {
      // Essayer avec le nom simplifié
      const url2 = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchName)}`;
      const res2 = await fetch(url2, { headers: { 'Accept': 'application/json' } });
      if (!res2.ok) return null;
      const data2 = await res2.json();
      return data2.thumbnail?.source || data2.originalimage?.source || null;
    }

    const data = await res.json();
    return data.thumbnail?.source || data.originalimage?.source || null;
  } catch {
    return null;
  }
}

/**
 * Cache en mémoire pour les images Wikipedia (évite les appels répétés)
 */
const imageCache = new Map();

/**
 * Récupère les images en batch pour les musées sans image
 * Limite: 10 requêtes en parallèle max, 100ms entre chaque batch
 */
async function fetchMissingImages(places, onProgress) {
  const museumsWithoutImage = places.filter(p => !p.image && p.type === 'musée');

  if (museumsWithoutImage.length === 0) return places;

  console.log(`[Muzea] Recherche d'images Wikipedia pour ${museumsWithoutImage.length} musées...`);

  const BATCH_SIZE = 10;
  let processed = 0;

  for (let i = 0; i < museumsWithoutImage.length; i += BATCH_SIZE) {
    const batch = museumsWithoutImage.slice(i, i + BATCH_SIZE);

    await Promise.all(batch.map(async (museum) => {
      if (imageCache.has(museum.name)) {
        museum.image = imageCache.get(museum.name);
        return;
      }

      const image = await getWikipediaImage(museum.name);
      if (image) {
        museum.image = image;
        imageCache.set(museum.name, image);
      }
    }));

    processed += batch.length;
    if (processed % 50 === 0) {
      onProgress?.({ source: 'Images Wikipedia', loaded: processed, total: museumsWithoutImage.length });
    }

    // Rate limiting
    await sleep(100);
  }

  console.log(`[Muzea] Images trouvées: ${places.filter(p => p.image && p.image !== PLACEHOLDER_IMAGE).length}`);
  return places;
}

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

// ─── Source 3 : TOUS les musées OSM (Overpass API) ────────
// Requête optimisée pour récupérer TOUS les musées de France
// https://overpass-api.de/api/interpreter

async function fetchOSMMuseums(onProgress) {
  // Requête spécifique pour TOUS les musées en France
  const query = `
    [out:json][timeout:300];
    area["ISO3166-1"="FR"]->.france;
    (
      node["tourism"="museum"](area.france);
      way["tourism"="museum"](area.france);
      relation["tourism"="museum"](area.france);
    );
    out center tags;
  `;

  onProgress?.({ source: 'OpenStreetMap Musées', loaded: 0, total: 1, status: 'Chargement de tous les musées OSM…' });

  const data = await fetchPOST(
    'https://overpass-api.de/api/interpreter',
    `data=${encodeURIComponent(query.trim())}`
  );

  if (!data || !data.elements) {
    console.warn('[Muzea] Aucune donnée OSM reçue');
    return [];
  }

  onProgress?.({ source: 'OpenStreetMap Musées', loaded: 1, total: 1 });

  console.log(`[Muzea] OSM: ${data.elements.length} éléments reçus`);

  const places = [];
  for (const el of data.elements) {
    const lat = el.lat || el.center?.lat;
    const lng = el.lon || el.center?.lon;
    if (!lat || !lng) continue;

    const tags = el.tags || {};
    const name = tags.name || tags['name:fr'] || tags.official_name || '';
    if (!name) continue;

    const city = tags['addr:city'] || tags['addr:municipality'] || tags['addr:town'] || tags['addr:village'] || '';
    const address = [
      tags['addr:housenumber'],
      tags['addr:street'],
      tags['addr:postcode'],
      city
    ].filter(Boolean).join(' ');

    // Récupérer l'image Wikimedia si disponible
    let image = '';
    if (tags.image) {
      image = tags.image;
    } else if (tags.wikimedia_commons) {
      // Convertir le nom de fichier Commons en URL
      const filename = tags.wikimedia_commons.replace('File:', '').replace(/ /g, '_');
      image = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=400`;
    } else if (tags.wikidata) {
      // On stocke l'ID Wikidata pour récupérer l'image plus tard
      image = ''; // Sera rempli par Wikidata ou Wikipedia
    }

    places.push({
      name: name.trim(),
      type: 'musée',
      description: tags.description || `Musée${city ? ` à ${city}` : ''}, France.`,
      location: city || 'France',
      address: address || '',
      city: city,
      coordinates: { lat: +lat, lng: +lng },
      url: tags.website || tags['contact:website'] || '',
      phone: tags.phone || tags['contact:phone'] || '',
      image: image,
      price: tags.fee === 'no' ? 'Gratuit' : (tags.charge || 'Se renseigner'),
      hours: tags.opening_hours || 'Se renseigner',
      period: tags.start_date || '',
      themes: tags.museum || tags.subject || '',
      highlights: [],
      source: 'OpenStreetMap',
      osmId: el.id,
      wikidataId: tags.wikidata || ''
    });
  }

  console.log(`[Muzea] OSM: ${places.length} musées avec nom récupérés`);
  return places;
}

// ─── Source 3b : Châteaux + Églises + Galeries OSM ────────

async function fetchOSMOtherPlaces(onProgress) {
  const query = `
    [out:json][timeout:180];
    area["ISO3166-1"="FR"]->.fr;
    (
      nwr["historic"="castle"](area.fr);
      nwr["castle_type"](area.fr);
      nwr["tourism"="gallery"](area.fr);
      nwr["amenity"="arts_centre"](area.fr);
    );
    out center tags;
  `;

  onProgress?.({ source: 'OpenStreetMap Autres', loaded: 0, total: 1, status: 'Chargement châteaux/galeries OSM…' });

  const data = await fetchPOST(
    'https://overpass-api.de/api/interpreter',
    `data=${encodeURIComponent(query.trim())}`
  );

  if (!data || !data.elements) return [];

  onProgress?.({ source: 'OpenStreetMap Autres', loaded: 1, total: 1 });

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
    } else {
      // Ignorer les galeries et autres types (uniquement musée, château, église)
      continue;
    }

    // Récupérer l'image si disponible
    let image = '';
    if (tags.image) {
      image = tags.image;
    } else if (tags.wikimedia_commons) {
      const filename = tags.wikimedia_commons.replace('File:', '').replace(/ /g, '_');
      image = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=400`;
    }

    places.push({
      name: name.trim(),
      type,
      description: tags.description || desc,
      location: city || 'France',
      coordinates: { lat: +lat, lng: +lng },
      image: image,
      price: tags.fee === 'no' ? 'Gratuit' : 'Se renseigner',
      hours: tags.opening_hours || 'Se renseigner',
      period: tags.start_date || 'Historique',
      highlights: [],
      source: 'OpenStreetMap'
    });
  }
  return places;
}

// ─── Source 4 : TOUS les musées Wikidata SPARQL ──────────
// Requête SPARQL optimisée pour récupérer TOUS les musées français avec images
// Documentation: https://query.wikidata.org/

async function fetchWikidataMuseums(onProgress) {
  onProgress?.({ source: 'Wikidata Musées', loaded: 0, total: 1, status: 'Chargement de tous les musées Wikidata…' });

  // Requête SPARQL optimisée pour tous les musées français
  // wdt:P31/wdt:P279* = instance de ou sous-classe de musée (Q33506)
  const sparql = `
SELECT DISTINCT ?museum ?museumLabel ?lat ?lon ?image ?website ?communeLabel ?streetAddress WHERE {
  # Tous les musées et leurs sous-types en France
  ?museum wdt:P31/wdt:P279* wd:Q33506 .
  ?museum wdt:P17 wd:Q142 .
  ?museum wdt:P625 ?coord .

  BIND(geof:latitude(?coord) AS ?lat)
  BIND(geof:longitude(?coord) AS ?lon)

  # Champs optionnels
  OPTIONAL { ?museum wdt:P18 ?image . }
  OPTIONAL { ?museum wdt:P856 ?website . }
  OPTIONAL { ?museum wdt:P131 ?commune . }
  OPTIONAL { ?museum wdt:P6375 ?streetAddress . }

  SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en" . }
}
`.trim();

  const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`;

  // Ajouter un User-Agent pour éviter les blocages
  const data = await fetchJSON(url);
  if (!data?.results?.bindings) {
    console.warn('[Muzea] Wikidata: pas de résultats');
    return [];
  }

  onProgress?.({ source: 'Wikidata Musées', loaded: 1, total: 1 });

  console.log(`[Muzea] Wikidata: ${data.results.bindings.length} musées reçus`);

  const places = [];
  const seen = new Set();

  for (const b of data.results.bindings) {
    const lat = parseFloat(b.lat?.value);
    const lng = parseFloat(b.lon?.value);
    if (!lat || !lng || isNaN(lat) || isNaN(lng)) continue;

    const name = b.museumLabel?.value || '';
    if (!name || name.startsWith('Q')) continue; // skip unnamed items

    const itemId = b.museum?.value || '';
    if (seen.has(itemId)) continue;
    seen.add(itemId);

    const city = b.communeLabel?.value || '';
    const address = b.streetAddress?.value || '';

    // Image Wikimedia Commons
    let image = '';
    if (b.image?.value) {
      // Convertir l'URL Wikimedia en URL directe avec taille
      const imageUrl = b.image.value;
      if (imageUrl.includes('commons.wikimedia.org')) {
        // Extraire le nom du fichier et créer une URL redimensionnée
        const filename = imageUrl.split('/').pop();
        image = `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=400`;
      } else {
        image = imageUrl;
      }
    }

    places.push({
      name: name.trim(),
      type: 'musée',
      description: `Musée${city ? ` à ${city}` : ''}, France.`,
      location: city || 'France',
      city: city,
      address: address,
      coordinates: { lat, lng },
      image: image,
      url: b.website?.value || '',
      price: 'Se renseigner',
      hours: 'Se renseigner',
      period: '',
      themes: '',
      highlights: [],
      source: 'Wikidata',
      wikidataId: itemId.split('/').pop()
    });
  }

  console.log(`[Muzea] Wikidata: ${places.length} musées uniques avec coordonnées`);
  return places;
}

// ─── Source 4b : Châteaux et églises Wikidata ──────────

async function fetchWikidataOtherPlaces(onProgress) {
  onProgress?.({ source: 'Wikidata Autres', loaded: 0, total: 1, status: 'Chargement châteaux/églises Wikidata…' });

  // Châteaux (Q23413) et églises (Q16970) en France
  const sparql = `
SELECT DISTINCT ?item ?itemLabel ?lat ?lon ?typeLabel ?image ?communeLabel WHERE {
  VALUES ?baseType { wd:Q23413 wd:Q16970 }
  ?item wdt:P31/wdt:P279* ?baseType .
  ?item wdt:P17 wd:Q142 .
  ?item wdt:P625 ?coord .
  ?item wdt:P31 ?type .

  BIND(geof:latitude(?coord) AS ?lat)
  BIND(geof:longitude(?coord) AS ?lon)

  OPTIONAL { ?item wdt:P18 ?image . }
  OPTIONAL { ?item wdt:P131 ?commune . }

  SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en" . }
}
LIMIT 15000
`.trim();

  const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`;

  const data = await fetchJSON(url);
  if (!data?.results?.bindings) return [];

  onProgress?.({ source: 'Wikidata Autres', loaded: 1, total: 1 });

  const places = [];
  const seen = new Set();

  for (const b of data.results.bindings) {
    const lat = parseFloat(b.lat?.value);
    const lng = parseFloat(b.lon?.value);
    if (!lat || !lng || isNaN(lat) || isNaN(lng)) continue;

    const name = b.itemLabel?.value || '';
    if (!name || name.startsWith('Q')) continue;

    const itemId = b.item?.value || '';
    if (seen.has(itemId)) continue;
    seen.add(itemId);

    const typeLabel = (b.typeLabel?.value || '').toLowerCase();
    const city = b.communeLabel?.value || '';

    let type = null;
    if (/ch[âa]teau|castle|fort/i.test(typeLabel)) {
      type = 'château';
    } else if (/[ée]glise|church|cath[ée]drale|basilique|abbaye|chapelle|prieur[ée]/i.test(typeLabel)) {
      type = 'église';
    } else {
      continue;
    }

    // Image
    let image = '';
    if (b.image?.value) {
      const imageUrl = b.image.value;
      if (imageUrl.includes('commons.wikimedia.org')) {
        const filename = imageUrl.split('/').pop();
        image = `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=400`;
      } else {
        image = imageUrl;
      }
    }

    places.push({
      name: name.trim(),
      type,
      description: `${type.charAt(0).toUpperCase() + type.slice(1)}${city ? ` à ${city}` : ''}, France.`,
      location: city || 'France',
      coordinates: { lat, lng },
      image: image,
      price: 'Se renseigner',
      hours: 'Se renseigner',
      period: 'Historique',
      highlights: [],
      source: 'Wikidata'
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

// ─── Dédoublonnage par proximité GPS (< 100m) ────────────
// 0.0009 degré ≈ 100m à la latitude de la France

function deduplicate(allPlaces, onProgress) {
  const DISTANCE_THRESHOLD = 0.0009; // ~100m
  const nameIndex = new Map(); // Stocke le meilleur enregistrement par nom normalisé
  const grid = new Map();

  console.log(`[Muzea] Dédoublonnage de ${allPlaces.length} lieux...`);

  // Fonction pour normaliser les noms
  const normalizeName = (name) => name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

  // Fonction pour calculer la distance entre deux points (approximation)
  const distance = (p1, p2) => {
    const dlat = Math.abs(p1.lat - p2.lat);
    const dlng = Math.abs(p1.lng - p2.lng);
    return Math.sqrt(dlat * dlat + dlng * dlng);
  };

  // Fonction pour fusionner deux enregistrements (garde le plus complet)
  const merge = (existing, newPlace) => {
    return {
      ...existing,
      // Prendre les champs non vides du nouveau s'ils manquent dans l'existant
      image: existing.image || newPlace.image,
      url: existing.url || newPlace.url,
      address: existing.address || newPlace.address,
      phone: existing.phone || newPlace.phone,
      themes: existing.themes || newPlace.themes,
      description: existing.description.length > newPlace.description.length
        ? existing.description : newPlace.description,
      // Préférer Wikidata > data.culture.gouv > OSM pour les données officielles
      source: existing.source === 'data.culture.gouv.fr' ? existing.source :
              (newPlace.source === 'data.culture.gouv.fr' ? newPlace.source :
              (existing.source === 'Wikidata' ? existing.source : newPlace.source))
    };
  };

  const unique = [];
  let processed = 0;
  let filtered = 0;

  for (const p of allPlaces) {
    if (!p.coordinates || !p.coordinates.lat || !p.coordinates.lng) continue;

    // Filtrer les faux positifs (écoles, institutions, festivals, etc.)
    if (isFalsePositive(p.name)) {
      filtered++;
      continue;
    }

    const key = normalizeName(p.name) + '_' + p.type;

    // Vérifier si un lieu avec le même nom existe déjà
    if (nameIndex.has(key)) {
      const existing = nameIndex.get(key);
      const dist = distance(existing.coordinates, p.coordinates);
      // Si même nom et à moins de 10km, fusionner
      if (dist < 0.1) {
        nameIndex.set(key, merge(existing, p));
        continue;
      }
    }

    // Vérifier la proximité GPS avec la grille spatiale
    const cx = Math.floor(p.coordinates.lat / DISTANCE_THRESHOLD);
    const cy = Math.floor(p.coordinates.lng / DISTANCE_THRESHOLD);
    let foundClose = null;

    for (let dx = -1; dx <= 1 && !foundClose; dx++) {
      for (let dy = -1; dy <= 1 && !foundClose; dy++) {
        const gk = `${cx + dx}_${cy + dy}`;
        for (const ex of (grid.get(gk) || [])) {
          if (ex.type === p.type && distance(ex.coordinates, p.coordinates) < DISTANCE_THRESHOLD) {
            foundClose = ex;
            break;
          }
        }
      }
    }

    if (foundClose) {
      // Fusionner avec l'existant
      Object.assign(foundClose, merge(foundClose, p));
      continue;
    }

    // Nouveau lieu unique
    nameIndex.set(key, p);
    unique.push(p);
    const gk = `${cx}_${cy}`;
    if (!grid.has(gk)) grid.set(gk, []);
    grid.get(gk).push(p);

    processed++;
    if (processed % 1000 === 0) {
      onProgress?.({ source: 'Dédoublonnage', loaded: processed, total: allPlaces.length });
    }
  }

  console.log(`[Muzea] Dédoublonnage terminé: ${unique.length} lieux uniques (${filtered} faux positifs exclus)`);
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
 * Sources:
 *   1. data.culture.gouv.fr (Muséofile ~1200 musées officiels)
 *   2. OpenStreetMap Overpass (~3000-5000 musées)
 *   3. Wikidata SPARQL (~2000-4000 musées avec images)
 *   4. Monuments historiques
 *   5. Architecture remarquable
 *
 * Retourne les données du cache si disponible (7 jours),
 * sinon lance le chargement complet avec fusion et dédoublonnage.
 *
 * @param {Function} onProgress - callback({ source, loaded, total, phase })
 * @returns {Promise<Array>} Liste de tous les lieux (~8000-10000 musées)
 */
export async function loadAllCulturalPlaces(onProgress) {
  // 1. Essayer le cache
  const cached = await getCachedPlaces();
  if (cached) {
    console.log(`[Muzea] ${cached.length} lieux chargés depuis le cache`);
    onProgress?.({ phase: 'done', total: cached.length });
    return cached;
  }

  console.log('[Muzea] Pas de cache — chargement massif depuis les APIs…');
  console.log('[Muzea] Sources: data.culture.gouv.fr, OpenStreetMap, Wikidata');
  onProgress?.({ phase: 'loading', status: 'Connexion aux APIs…' });

  // 2. Charger TOUTES les sources en parallèle
  // Priorité des données: data.culture.gouv > Wikidata > OSM
  const [
    museofileMuseums,    // ~1200 musées officiels labellisés
    osmMuseums,          // ~3000-5000 musées OSM
    wikidataMuseums,     // ~2000-4000 musées Wikidata avec images
    osmOther,            // Châteaux OSM
    wikidataOther,       // Châteaux, églises Wikidata
    monuments            // Monuments historiques (châteaux, églises)
  ] = await Promise.all([
    fetchMuseums(onProgress).catch((e) => { console.warn('[Muzea] Muséofile:', e.message); return []; }),
    fetchOSMMuseums(onProgress).catch((e) => { console.warn('[Muzea] OSM Musées:', e.message); return []; }),
    fetchWikidataMuseums(onProgress).catch((e) => { console.warn('[Muzea] Wikidata Musées:', e.message); return []; }),
    fetchOSMOtherPlaces(onProgress).catch((e) => { console.warn('[Muzea] OSM Autres:', e.message); return []; }),
    fetchWikidataOtherPlaces(onProgress).catch((e) => { console.warn('[Muzea] Wikidata Autres:', e.message); return []; }),
    fetchMonuments(onProgress).catch((e) => { console.warn('[Muzea] Monuments:', e.message); return []; }),
  ]);

  console.log(`[Muzea] Sources récupérées:`);
  console.log(`  - Muséofile (officiels): ${museofileMuseums.length}`);
  console.log(`  - OSM Musées: ${osmMuseums.length}`);
  console.log(`  - Wikidata Musées: ${wikidataMuseums.length}`);
  console.log(`  - OSM Châteaux: ${osmOther.length}`);
  console.log(`  - Wikidata Châteaux/Églises: ${wikidataOther.length}`);
  console.log(`  - Monuments (châteaux/églises): ${monuments.length}`);

  // Ordre de priorité pour la fusion (les premiers sont prioritaires)
  // Les données officielles (Muséofile) sont prioritaires, puis Wikidata (images), puis OSM
  const allRaw = [
    ...museofileMuseums,  // Priorité 1: Données officielles
    ...wikidataMuseums,   // Priorité 2: Wikidata (avec images)
    ...osmMuseums,        // Priorité 3: OSM
    ...wikidataOther,
    ...osmOther,
    ...monuments
  ];

  const totalRaw = allRaw.length;
  console.log(`[Muzea] ${totalRaw} lieux bruts au total (avant dédoublonnage)`);

  if (totalRaw === 0) return null;

  // 3. Dédoublonnage par proximité GPS (<100m) et nom
  onProgress?.({ phase: 'dedup', status: 'Dédoublonnage en cours…' });
  const unique = deduplicate(allRaw, onProgress);

  // 4. Assigner IDs et valeurs par défaut
  let places = unique.map((p, i) => ({
    ...p,
    id: i + 1,
    image: p.image || '', // Sera rempli par le fallback Wikipedia si vide
    rating: +(4.0 + Math.random() * 0.9).toFixed(1),
    visited: false,
    favorite: false,
  }));

  console.log(`[Muzea] ${places.length} lieux uniques après dédoublonnage`);

  // 5. Récupérer les images manquantes via Wikipedia (limité à 200 pour éviter la surcharge)
  onProgress?.({ phase: 'images', status: 'Recherche d\'images Wikipedia…' });
  const museumsWithoutImage = places.filter(p => !p.image && p.type === 'musée').slice(0, 200);

  if (museumsWithoutImage.length > 0) {
    console.log(`[Muzea] Recherche d'images Wikipedia pour ${museumsWithoutImage.length} musées...`);
    places = await fetchMissingImages(places, onProgress);
  }

  // 6. Ajouter le placeholder pour les musées sans image
  places = places.map(p => ({
    ...p,
    image: p.image || (p.type === 'musée' ? PLACEHOLDER_IMAGE : '')
  }));

  // Statistiques finales
  const stats = {
    total: places.length,
    museums: places.filter(p => p.type === 'musée').length,
    castles: places.filter(p => p.type === 'château').length,
    churches: places.filter(p => p.type === 'église').length,
    withImage: places.filter(p => p.image && p.image !== PLACEHOLDER_IMAGE).length
  };

  console.log(`[Muzea] Statistiques finales:`);
  console.log(`  - Total: ${stats.total} lieux`);
  console.log(`  - Musées: ${stats.museums}`);
  console.log(`  - Châteaux: ${stats.castles}`);
  console.log(`  - Églises: ${stats.churches}`);
  console.log(`  - Avec image: ${stats.withImage} (${(stats.withImage/stats.total*100).toFixed(1)}%)`);

  // 7. Mettre en cache
  onProgress?.({ phase: 'caching', status: 'Mise en cache…' });
  await setCachedPlaces(places);

  onProgress?.({ phase: 'done', total: places.length, stats });
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
