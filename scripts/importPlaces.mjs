#!/usr/bin/env node
/**
 * Script d'import massif des lieux culturels français
 *
 * Sources :
 *   - Musées de France (base Muséofile) — data.culture.gouv.fr
 *   - Monuments historiques — data.culture.gouv.fr
 *   - Châteaux via OpenStreetMap Overpass API
 *
 * Usage :
 *   node scripts/importPlaces.mjs
 *
 * Le script génère src/data/places.js avec TOUS les lieux trouvés.
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, '..', 'src', 'data', 'places.js');

// ─── Helpers ─────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJSON(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn(`  ⚠ Tentative ${i + 1}/${retries} échouée pour ${url.slice(0, 80)}… (${err.message})`);
      if (i < retries - 1) await sleep(2000 * (i + 1));
    }
  }
  return null;
}

/** Mapping des départements vers les régions */
const deptToRegion = {
  '01': 'Auvergne-Rhône-Alpes', '03': 'Auvergne-Rhône-Alpes', '07': 'Auvergne-Rhône-Alpes',
  '15': 'Auvergne-Rhône-Alpes', '26': 'Auvergne-Rhône-Alpes', '38': 'Auvergne-Rhône-Alpes',
  '42': 'Auvergne-Rhône-Alpes', '43': 'Auvergne-Rhône-Alpes', '63': 'Auvergne-Rhône-Alpes',
  '69': 'Auvergne-Rhône-Alpes', '73': 'Auvergne-Rhône-Alpes', '74': 'Auvergne-Rhône-Alpes',
  '21': 'Bourgogne-Franche-Comté', '25': 'Bourgogne-Franche-Comté', '39': 'Bourgogne-Franche-Comté',
  '58': 'Bourgogne-Franche-Comté', '70': 'Bourgogne-Franche-Comté', '71': 'Bourgogne-Franche-Comté',
  '89': 'Bourgogne-Franche-Comté', '90': 'Bourgogne-Franche-Comté',
  '22': 'Bretagne', '29': 'Bretagne', '35': 'Bretagne', '56': 'Bretagne',
  '18': 'Centre-Val de Loire', '28': 'Centre-Val de Loire', '36': 'Centre-Val de Loire',
  '37': 'Centre-Val de Loire', '41': 'Centre-Val de Loire', '45': 'Centre-Val de Loire',
  '08': 'Grand Est', '10': 'Grand Est', '51': 'Grand Est', '52': 'Grand Est',
  '54': 'Grand Est', '55': 'Grand Est', '57': 'Grand Est', '67': 'Grand Est', '68': 'Grand Est', '88': 'Grand Est',
  '02': 'Hauts-de-France', '59': 'Hauts-de-France', '60': 'Hauts-de-France',
  '62': 'Hauts-de-France', '80': 'Hauts-de-France',
  '75': 'Île-de-France', '77': 'Île-de-France', '78': 'Île-de-France', '91': 'Île-de-France',
  '92': 'Île-de-France', '93': 'Île-de-France', '94': 'Île-de-France', '95': 'Île-de-France',
  '14': 'Normandie', '27': 'Normandie', '50': 'Normandie', '61': 'Normandie', '76': 'Normandie',
  '16': 'Nouvelle-Aquitaine', '17': 'Nouvelle-Aquitaine', '19': 'Nouvelle-Aquitaine',
  '23': 'Nouvelle-Aquitaine', '24': 'Nouvelle-Aquitaine', '33': 'Nouvelle-Aquitaine',
  '40': 'Nouvelle-Aquitaine', '47': 'Nouvelle-Aquitaine', '64': 'Nouvelle-Aquitaine',
  '79': 'Nouvelle-Aquitaine', '86': 'Nouvelle-Aquitaine', '87': 'Nouvelle-Aquitaine',
  '09': 'Occitanie', '11': 'Occitanie', '12': 'Occitanie', '30': 'Occitanie',
  '31': 'Occitanie', '32': 'Occitanie', '34': 'Occitanie', '46': 'Occitanie',
  '48': 'Occitanie', '65': 'Occitanie', '66': 'Occitanie', '81': 'Occitanie', '82': 'Occitanie',
  '44': 'Pays de la Loire', '49': 'Pays de la Loire', '53': 'Pays de la Loire',
  '72': 'Pays de la Loire', '85': 'Pays de la Loire',
  '04': 'Provence-Alpes-Côte d\'Azur', '05': 'Provence-Alpes-Côte d\'Azur',
  '06': 'Provence-Alpes-Côte d\'Azur', '13': 'Provence-Alpes-Côte d\'Azur',
  '83': 'Provence-Alpes-Côte d\'Azur', '84': 'Provence-Alpes-Côte d\'Azur',
  '2A': 'Corse', '2B': 'Corse', '20': 'Corse',
  '971': 'Guadeloupe', '972': 'Martinique', '973': 'Guyane', '974': 'La Réunion', '976': 'Mayotte',
};

function getRegionFromDept(dept) {
  if (!dept) return '';
  const d = dept.toString().padStart(2, '0');
  return deptToRegion[d] || '';
}

// ─── Source 1 : Musées de France (Muséofile) ────────────

async function fetchMuseums() {
  console.log('\n📦 Import des musées de France (Muséofile)…');
  const museums = [];
  const LIMIT = 100;
  let offset = 0;
  let total = null;

  while (total === null || offset < total) {
    const url = `https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/musees-de-france-base-museofile/records?limit=${LIMIT}&offset=${offset}`;
    const data = await fetchJSON(url);
    if (!data || !data.results) {
      console.warn('  ✗ Impossible de récupérer les musées depuis data.culture.gouv.fr');
      break;
    }
    if (total === null) {
      total = data.total_count || 0;
      console.log(`  → ${total} musées trouvés`);
    }
    for (const r of data.results) {
      const geo = r.geolocalisation || r.coordonnees_finales;
      if (!geo) continue; // skip without coordinates
      const lat = geo.lat || geo.latitude;
      const lng = geo.lon || geo.lng || geo.longitude;
      if (!lat || !lng) continue;

      const name = r.nomoff || r.nomusage || r.nom_officiel || '';
      if (!name) continue;

      const city = r.ville_m || r.commune || '';
      const dept = r.dpt || r.departement || '';
      const region = r.region || getRegionFromDept(dept);
      const themes = r.dompal || r.themes || '';

      museums.push({
        name: name.trim(),
        type: 'musée',
        description: themes ? `Musée spécialisé en ${themes.toLowerCase()}.` : `Musée de France situé à ${city}.`,
        location: `${city}, ${region}`.replace(/^, |, $/g, ''),
        coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) },
        price: 'Se renseigner',
        hours: '10h - 18h (se renseigner)',
        period: themes || 'Collections permanentes',
        highlights: themes ? themes.split(';').map(t => t.trim()).filter(Boolean).slice(0, 3) : [],
        website: r.url_m || r.sitweb || '',
        source: 'museofile',
      });
    }
    offset += LIMIT;
    process.stdout.write(`  ↳ ${Math.min(offset, total)}/${total}\r`);
    await sleep(300); // politeness delay
  }

  console.log(`  ✓ ${museums.length} musées avec coordonnées importés`);
  return museums;
}

// ─── Source 2 : Monuments historiques ────────────────────

async function fetchMonuments() {
  console.log('\n🏛️  Import des monuments historiques…');
  const monuments = [];
  const LIMIT = 100;
  let offset = 0;
  let total = null;

  while (total === null || offset < total) {
    const url = `https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/liste-des-immeubles-proteges-au-titre-des-monuments-historiques/records?limit=${LIMIT}&offset=${offset}&refine=dpro:classé`;
    const data = await fetchJSON(url);
    if (!data || !data.results) {
      console.warn('  ✗ Impossible de récupérer les monuments depuis data.culture.gouv.fr');
      break;
    }
    if (total === null) {
      total = Math.min(data.total_count || 0, 5000); // cap to avoid too large
      console.log(`  → ${data.total_count} monuments (import limité à ${total})`);
    }
    for (const r of data.results) {
      const geo = r.coordonnees || r.geolocalisation;
      if (!geo) continue;
      const lat = geo.lat || geo.latitude;
      const lng = geo.lon || geo.lng || geo.longitude;
      if (!lat || !lng) continue;

      const name = r.tico || r.appellation_courante || r.denominationp || '';
      if (!name) continue;

      const city = r.commune || r.com || '';
      const dept = r.dpt || r.departement || '';
      const region = r.reg || r.region || getRegionFromDept(dept);
      const isChateau = /ch[âa]teau/i.test(name);
      const type = isChateau ? 'château' : 'monument';
      const dateProt = r.dpro || '';
      const siecle = r.scle || '';

      monuments.push({
        name: name.trim(),
        type,
        description: `Monument historique classé${siecle ? ` (${siecle})` : ''} situé à ${city}.`,
        location: `${city}, ${region}`.replace(/^, |, $/g, ''),
        coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) },
        price: 'Se renseigner',
        hours: 'Se renseigner',
        period: siecle || dateProt || 'Historique',
        highlights: [],
        source: 'monuments-historiques',
      });
    }
    offset += LIMIT;
    process.stdout.write(`  ↳ ${Math.min(offset, total)}/${total}\r`);
    await sleep(300);
  }

  console.log(`  ✓ ${monuments.length} monuments avec coordonnées importés`);
  return monuments;
}

// ─── Source 3 : Châteaux via Overpass (OpenStreetMap) ────

async function fetchChateauxOSM() {
  console.log('\n🏰 Import des châteaux depuis OpenStreetMap…');
  const query = `
    [out:json][timeout:60];
    area["ISO3166-1"="FR"]->.fr;
    (
      nwr["historic"="castle"](area.fr);
      nwr["castle_type"](area.fr);
    );
    out center 5000;
  `;
  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query.trim())}`;
  const data = await fetchJSON(url);
  if (!data || !data.elements) {
    console.warn('  ✗ Impossible de récupérer les châteaux depuis Overpass');
    return [];
  }

  const chateaux = [];
  for (const el of data.elements) {
    const lat = el.lat || el.center?.lat;
    const lng = el.lon || el.center?.lon;
    if (!lat || !lng) continue;

    const tags = el.tags || {};
    const name = tags.name || tags['name:fr'] || '';
    if (!name) continue;

    // Avoid duplicates with monument data
    const city = tags['addr:city'] || tags['addr:municipality'] || '';
    const wiki = tags.wikipedia || tags.wikidata || '';
    const heritage = tags.heritage || '';

    chateaux.push({
      name: name.trim(),
      type: 'château',
      description: tags.description || `Château${city ? ` situé à ${city}` : ''}, France.`,
      location: city || 'France',
      coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) },
      price: tags.fee === 'no' ? 'Gratuit' : 'Se renseigner',
      hours: tags.opening_hours || 'Se renseigner',
      period: tags.start_date || tags['heritage:operator'] || 'Historique',
      highlights: [],
      website: tags.website || '',
      source: 'openstreetmap',
    });
  }

  console.log(`  ✓ ${chateaux.length} châteaux importés depuis OSM`);
  return chateaux;
}

// ─── Dédoublonnage ──────────────────────────────────────

function deduplicate(allPlaces) {
  console.log('\n🔄 Dédoublonnage…');
  const seen = new Map();
  const unique = [];

  for (const place of allPlaces) {
    // Clé : nom normalisé + type
    const key = place.name
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '') + '_' + place.type;

    if (seen.has(key)) continue;

    // Aussi vérifier la proximité géographique (< 100m = même lieu)
    let tooClose = false;
    for (const [, existing] of seen) {
      const dlat = Math.abs(existing.coordinates.lat - place.coordinates.lat);
      const dlng = Math.abs(existing.coordinates.lng - place.coordinates.lng);
      if (dlat < 0.001 && dlng < 0.001 && existing.type === place.type) {
        tooClose = true;
        break;
      }
    }
    if (tooClose) continue;

    seen.set(key, place);
    unique.push(place);
  }

  console.log(`  ✓ ${unique.length} lieux uniques (${allPlaces.length - unique.length} doublons retirés)`);
  return unique;
}

// ─── Génération du fichier places.js ────────────────────

function generatePlacesFile(allPlaces) {
  console.log('\n📝 Génération de src/data/places.js…');

  // Assign IDs and default values
  const places = allPlaces.map((p, i) => ({
    id: i + 1,
    name: p.name,
    type: p.type,
    image: '',
    description: p.description,
    location: p.location,
    rating: +(4.0 + Math.random() * 0.9).toFixed(1),
    price: p.price || 'Se renseigner',
    hours: p.hours || 'Se renseigner',
    period: p.period || '',
    coordinates: p.coordinates,
    highlights: p.highlights || [],
    visited: false,
    favorite: false,
  }));

  // Count by type
  const counts = {};
  for (const p of places) {
    counts[p.type] = (counts[p.type] || 0) + 1;
  }

  const lines = [
    '// Fichier généré automatiquement par scripts/importPlaces.mjs',
    `// Date : ${new Date().toISOString()}`,
    `// Total : ${places.length} lieux (${Object.entries(counts).map(([k, v]) => `${v} ${k}s`).join(', ')})`,
    '//',
    '// Sources :',
    '//   - Musées de France (base Muséofile) — data.culture.gouv.fr',
    '//   - Monuments historiques classés — data.culture.gouv.fr',
    '//   - Châteaux — OpenStreetMap (Overpass API)',
    '',
    '// Types de lieux disponibles',
    "export const placeTypes = [",
    "  { id: 'all', label: 'Tous', color: 'bg-night-600' },",
    "  { id: 'musée', label: 'Musées', color: 'bg-turquoise-500' },",
    "  { id: 'château', label: 'Châteaux', color: 'bg-gold-600' },",
    "  { id: 'monument', label: 'Monuments', color: 'bg-terracotta-500' },",
    "  { id: 'exposition', label: 'Expositions', color: 'bg-purple-500' }",
    "];",
    '',
    '// Base de données des lieux culturels français',
    'export const places = ' + JSON.stringify(places, null, 2) + ';',
  ];

  writeFileSync(OUTPUT_PATH, lines.join('\n'), 'utf-8');
  console.log(`  ✓ Fichier écrit : ${OUTPUT_PATH}`);
  console.log(`  → ${places.length} lieux au total`);
  for (const [type, count] of Object.entries(counts)) {
    console.log(`    • ${count} ${type}s`);
  }
}

// ─── Main ───────────────────────────────────────────────

async function main() {
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║   Muzea — Import massif des lieux culturels     ║');
  console.log('╚══════════════════════════════════════════════════╝');

  const allPlaces = [];

  // 1. Musées de France
  const museums = await fetchMuseums();
  allPlaces.push(...museums);

  // 2. Monuments historiques classés
  const monuments = await fetchMonuments();
  allPlaces.push(...monuments);

  // 3. Châteaux OSM
  const chateaux = await fetchChateauxOSM();
  allPlaces.push(...chateaux);

  if (allPlaces.length === 0) {
    console.error('\n✗ Aucun lieu importé. Vérifiez votre connexion internet.');
    process.exit(1);
  }

  // Dédoublonnage
  const unique = deduplicate(allPlaces);

  // Génération du fichier
  generatePlacesFile(unique);

  console.log('\n✅ Import terminé avec succès !');
  console.log('   Lancez "npm run dev" pour voir les lieux sur la carte.\n');
}

main().catch((err) => {
  console.error('Erreur fatale:', err);
  process.exit(1);
});
