#!/usr/bin/env node

/**
 * Script de validation des données musées depuis l'API data.culture.gouv.fr
 *
 * Usage: node scripts/validateMuseums.mjs
 *
 * Ce script :
 * 1. Récupère tous les musées depuis l'API Muséofile
 * 2. Analyse les données (champs disponibles, coordonnées GPS)
 * 3. Affiche un rapport avec statistiques
 */

const API_BASE = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets';
const DATASET_ID = 'musees-de-france-base-museofile';
const LIMIT = 100;

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function validateMuseums() {
  console.log('='.repeat(60));
  console.log('VALIDATION DES DONNÉES MUSÉES - API data.culture.gouv.fr');
  console.log('Dataset: musees-de-france-base-museofile');
  console.log('='.repeat(60));
  console.log();

  let offset = 0;
  let total = null;
  const allRecords = [];

  // Stats
  const stats = {
    total: 0,
    withGPS: 0,
    withoutGPS: 0,
    withAddress: 0,
    withURL: 0,
    withPhone: 0,
    withThemes: 0,
    fieldsFound: new Set(),
    missingGPSExamples: []
  };

  console.log('Récupération des données...\n');

  while (total === null || offset < total) {
    const url = `${API_BASE}/${DATASET_ID}/records?limit=${LIMIT}&offset=${offset}`;

    try {
      const data = await fetchJSON(url);

      if (total === null) {
        total = data.total_count || 0;
        console.log(`Total de musées dans le dataset: ${total}`);
      }

      for (const record of data.results || []) {
        allRecords.push(record);
        stats.total++;

        // Analyser les champs disponibles
        Object.keys(record).forEach(key => stats.fieldsFound.add(key));

        // Vérifier les coordonnées GPS
        const geo = record.geolocalisation || record.coordonnees_finales || record.coordonnees;
        if (geo && (geo.lat || geo.latitude)) {
          stats.withGPS++;
        } else {
          stats.withoutGPS++;
          if (stats.missingGPSExamples.length < 5) {
            stats.missingGPSExamples.push({
              name: record.nomoff || record.autnom || 'Inconnu',
              city: record.ville_m || record.commune || 'Inconnue',
              address: record.adrl1_m || ''
            });
          }
        }

        // Vérifier les autres champs
        if (record.adrl1_m || record.adr) stats.withAddress++;
        if (record.url_m || record.siteweb) stats.withURL++;
        if (record.tel_m || record.telephone) stats.withPhone++;
        if (record.dompal || record.themes) stats.withThemes++;
      }

      offset += LIMIT;
      process.stdout.write(`\rProgression: ${Math.min(offset, total)}/${total}`);

      // Pause pour éviter de surcharger l'API
      await new Promise(r => setTimeout(r, 100));

    } catch (err) {
      console.error(`\nErreur à l'offset ${offset}:`, err.message);
      break;
    }
  }

  console.log('\n\n');
  console.log('='.repeat(60));
  console.log('RAPPORT DE VALIDATION');
  console.log('='.repeat(60));
  console.log();

  console.log('STATISTIQUES GÉNÉRALES:');
  console.log(`  - Total musées récupérés: ${stats.total}`);
  console.log(`  - Avec coordonnées GPS: ${stats.withGPS} (${(stats.withGPS/stats.total*100).toFixed(1)}%)`);
  console.log(`  - Sans coordonnées GPS: ${stats.withoutGPS} (${(stats.withoutGPS/stats.total*100).toFixed(1)}%)`);
  console.log();

  console.log('CHAMPS DISPONIBLES:');
  console.log(`  - Avec adresse: ${stats.withAddress} (${(stats.withAddress/stats.total*100).toFixed(1)}%)`);
  console.log(`  - Avec URL site web: ${stats.withURL} (${(stats.withURL/stats.total*100).toFixed(1)}%)`);
  console.log(`  - Avec téléphone: ${stats.withPhone} (${(stats.withPhone/stats.total*100).toFixed(1)}%)`);
  console.log(`  - Avec thèmes/domaines: ${stats.withThemes} (${(stats.withThemes/stats.total*100).toFixed(1)}%)`);
  console.log();

  console.log('TOUS LES CHAMPS DU DATASET:');
  const sortedFields = [...stats.fieldsFound].sort();
  sortedFields.forEach(field => console.log(`  - ${field}`));
  console.log();

  if (stats.missingGPSExamples.length > 0) {
    console.log('EXEMPLES DE MUSÉES SANS GPS (à géocoder via API BAN):');
    stats.missingGPSExamples.forEach((m, i) => {
      console.log(`  ${i+1}. ${m.name}`);
      console.log(`     Ville: ${m.city}`);
      if (m.address) console.log(`     Adresse: ${m.address}`);
    });
    console.log();
  }

  // Exemple d'un enregistrement complet
  if (allRecords.length > 0) {
    console.log('EXEMPLE D\'ENREGISTREMENT COMPLET:');
    console.log(JSON.stringify(allRecords[0], null, 2));
  }

  console.log('\n' + '='.repeat(60));
  console.log('FIN DU RAPPORT');
  console.log('='.repeat(60));
}

validateMuseums().catch(console.error);
