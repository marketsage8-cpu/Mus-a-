#!/usr/bin/env node
/**
 * Script d'import des musées de France depuis Wikidata
 *
 * Utilise l'API SPARQL de Wikidata pour récupérer tous les musées
 * en France avec leurs coordonnées géographiques exactes.
 */

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WIKIDATA_SPARQL_URL = 'https://query.wikidata.org/sparql';

// Requête SPARQL pour récupérer tous les musées en France
const SPARQL_QUERY = `
SELECT DISTINCT
  ?museum
  ?museumLabel
  ?museumDescription
  ?coord
  ?image
  ?website
  ?inception
  ?locationLabel
  ?regionLabel
  ?streetAddress
WHERE {
  # Musées (Q33506) ou sous-types de musées
  ?museum wdt:P31/wdt:P279* wd:Q33506 .

  # Situé en France (Q142) ou dans une subdivision française
  {
    ?museum wdt:P17 wd:Q142 .
  } UNION {
    ?museum wdt:P131+ ?admin .
    ?admin wdt:P17 wd:Q142 .
  }

  # Coordonnées géographiques (obligatoire)
  ?museum wdt:P625 ?coord .

  # Données optionnelles
  OPTIONAL { ?museum wdt:P18 ?image . }
  OPTIONAL { ?museum wdt:P856 ?website . }
  OPTIONAL { ?museum wdt:P571 ?inception . }
  OPTIONAL { ?museum wdt:P6375 ?streetAddress . }

  # Localisation administrative
  OPTIONAL {
    ?museum wdt:P131 ?location .
    ?location rdfs:label ?locationLabel .
    FILTER(LANG(?locationLabel) = "fr")
  }

  # Région
  OPTIONAL {
    ?museum wdt:P131* ?region .
    ?region wdt:P31 wd:Q36784 . # Région française
    ?region rdfs:label ?regionLabel .
    FILTER(LANG(?regionLabel) = "fr")
  }

  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "fr,en" .
  }
}
ORDER BY ?museumLabel
`;

// Requête alternative plus simple si la première échoue
const SIMPLE_SPARQL_QUERY = `
SELECT DISTINCT
  ?museum
  ?museumLabel
  ?museumDescription
  ?coord
  ?image
  ?website
  ?locationLabel
WHERE {
  ?museum wdt:P31/wdt:P279* wd:Q33506 .
  ?museum wdt:P17 wd:Q142 .
  ?museum wdt:P625 ?coord .

  OPTIONAL { ?museum wdt:P18 ?image . }
  OPTIONAL { ?museum wdt:P856 ?website . }
  OPTIONAL {
    ?museum wdt:P131 ?location .
  }

  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "fr,en" .
  }
}
ORDER BY ?museumLabel
`;

/**
 * Exécute une requête SPARQL sur Wikidata
 */
async function executeSparqlQuery(query, retries = 3) {
  const url = `${WIKIDATA_SPARQL_URL}?query=${encodeURIComponent(query)}`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Tentative ${attempt}/${retries}...`);

      const response = await fetch(url, {
        headers: {
          'Accept': 'application/sparql-results+json',
          'User-Agent': 'Muzea/1.0 (https://github.com/marketsage8-cpu/Mus-a-; contact@muzea.fr)'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data.results.bindings;
    } catch (error) {
      console.error(`Erreur tentative ${attempt}:`, error.message);

      if (attempt < retries) {
        const delay = Math.pow(2, attempt) * 1000;
        console.log(`Attente de ${delay / 1000}s avant nouvelle tentative...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
}

/**
 * Parse les coordonnées WKT (Well-Known Text)
 * Format: "Point(longitude latitude)"
 */
function parseCoordinates(wktPoint) {
  if (!wktPoint) return null;

  const match = wktPoint.match(/Point\(([+-]?\d+\.?\d*)\s+([+-]?\d+\.?\d*)\)/i);
  if (!match) return null;

  return {
    lng: parseFloat(match[1]),
    lat: parseFloat(match[2])
  };
}

/**
 * Extrait l'ID Wikidata depuis l'URI
 */
function extractWikidataId(uri) {
  if (!uri) return null;
  const match = uri.match(/Q\d+$/);
  return match ? match[0] : null;
}

/**
 * Génère une URL d'image Wikimedia en taille réduite
 */
function getWikimediaThumb(imageUrl, width = 800) {
  if (!imageUrl) return null;

  // Convertir l'URL Wikimedia Commons en thumbnail
  // Format: https://commons.wikimedia.org/wiki/Special:FilePath/Filename.jpg
  try {
    const url = new URL(imageUrl);
    const filename = url.pathname.split('/').pop();
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=${width}`;
  } catch {
    return imageUrl;
  }
}

/**
 * Nettoie et formate les données d'un musée
 */
function formatMuseum(binding, index) {
  const coords = parseCoordinates(binding.coord?.value);

  if (!coords) return null;

  const wikidataId = extractWikidataId(binding.museum?.value);
  const name = binding.museumLabel?.value || 'Musée sans nom';
  const description = binding.museumDescription?.value || '';
  const location = binding.locationLabel?.value || binding.regionLabel?.value || 'France';
  const image = binding.image?.value;

  // Éviter les doublons de noms génériques
  if (name.startsWith('Q') && /^Q\d+$/.test(name)) {
    return null; // ID Wikidata non résolu
  }

  return {
    id: 10000 + index, // IDs à partir de 10000 pour éviter conflits
    wikidataId,
    name: name.trim(),
    type: 'musée',
    description: description.trim() || `Musée situé à ${location}`,
    location: location.trim(),
    coordinates: coords,
    image: getWikimediaThumb(image) || 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800',
    website: binding.website?.value || null,
    inception: binding.inception?.value?.split('T')[0] || null,
    address: binding.streetAddress?.value || null,
    wikipediaUrl: `https://fr.wikipedia.org/wiki/${encodeURIComponent(name.replace(/ /g, '_'))}`,
    wikidataUrl: `https://www.wikidata.org/wiki/${wikidataId}`,
    source: 'wikidata',
    price: 'Consulter le site',
    hours: 'Consulter le site',
    period: 'Permanent',
    highlights: ['Collection permanente'],
    rating: 4.0 + Math.random() * 0.9, // Rating entre 4.0 et 4.9
    visited: false,
    favorite: false
  };
}

/**
 * Déduplique les musées par nom et coordonnées
 */
function deduplicateMuseums(museums) {
  const seen = new Map();

  for (const museum of museums) {
    // Clé unique basée sur le nom normalisé et les coordonnées arrondies
    const normalizedName = museum.name.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');

    const coordKey = `${museum.coordinates.lat.toFixed(3)}_${museum.coordinates.lng.toFixed(3)}`;
    const key = `${normalizedName}_${coordKey}`;

    if (!seen.has(key)) {
      seen.set(key, museum);
    } else {
      // Garder celui avec la meilleure description
      const existing = seen.get(key);
      if (museum.description.length > existing.description.length) {
        seen.set(key, { ...museum, id: existing.id });
      }
    }
  }

  return Array.from(seen.values());
}

/**
 * Fonction principale
 */
async function main() {
  console.log('='.repeat(60));
  console.log('Import des musées de France depuis Wikidata');
  console.log('='.repeat(60));
  console.log();

  let results;

  try {
    console.log('Exécution de la requête SPARQL complète...');
    results = await executeSparqlQuery(SPARQL_QUERY);
  } catch (error) {
    console.log('La requête complète a échoué, essai de la requête simplifiée...');
    try {
      results = await executeSparqlQuery(SIMPLE_SPARQL_QUERY);
    } catch (simpleError) {
      console.error('Échec des deux requêtes:', simpleError.message);
      process.exit(1);
    }
  }

  console.log(`\n${results.length} résultats bruts récupérés depuis Wikidata\n`);

  // Formater les musées
  console.log('Formatage des données...');
  const museums = results
    .map((binding, index) => formatMuseum(binding, index))
    .filter(Boolean);

  console.log(`${museums.length} musées formatés\n`);

  // Dédupliquer
  console.log('Déduplication...');
  const uniqueMuseums = deduplicateMuseums(museums);
  console.log(`${uniqueMuseums.length} musées uniques\n`);

  // Réassigner les IDs
  uniqueMuseums.forEach((museum, index) => {
    museum.id = 10000 + index;
    museum.rating = Math.round(museum.rating * 10) / 10;
  });

  // Statistiques par région
  const byLocation = {};
  for (const museum of uniqueMuseums) {
    const loc = museum.location;
    byLocation[loc] = (byLocation[loc] || 0) + 1;
  }

  console.log('Répartition par localisation (top 20):');
  const sortedLocations = Object.entries(byLocation)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  for (const [loc, count] of sortedLocations) {
    console.log(`  ${loc}: ${count} musées`);
  }
  console.log();

  // Générer le fichier JS
  const outputPath = join(__dirname, '..', 'src', 'data', 'wikidataMuseums.js');

  const fileContent = `/**
 * Musées de France importés depuis Wikidata
 *
 * Source: https://query.wikidata.org/
 * Généré le: ${new Date().toISOString()}
 * Total: ${uniqueMuseums.length} musées avec coordonnées exactes
 */

export const wikidataMuseums = ${JSON.stringify(uniqueMuseums, null, 2)};

export default wikidataMuseums;
`;

  writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`Fichier généré: ${outputPath}`);
  console.log(`Total: ${uniqueMuseums.length} musées de France avec position exacte`);
  console.log();

  // Exemples
  console.log('Exemples de musées importés:');
  uniqueMuseums.slice(0, 5).forEach(m => {
    console.log(`  - ${m.name} (${m.location})`);
    console.log(`    Coordonnées: ${m.coordinates.lat}, ${m.coordinates.lng}`);
  });

  console.log('\n✅ Import terminé avec succès!');
}

main().catch(error => {
  console.error('Erreur fatale:', error);
  process.exit(1);
});
