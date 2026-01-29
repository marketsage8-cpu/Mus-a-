#!/usr/bin/env node

/**
 * Script de nettoyage des musées invalides
 *
 * Supprime les musées marqués comme invalides dans le rapport de validation.
 * ATTENTION: Ce script modifie le fichier places.js
 *
 * Usage:
 *   node scripts/cleanupMuseums.js --preview     # Affiche ce qui serait supprimé
 *   node scripts/cleanupMuseums.js --confirm     # Effectue la suppression
 *   node scripts/cleanupMuseums.js --include-review  # Inclut aussi les musées "à vérifier"
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Charge le rapport de validation
 */
function loadValidationReport() {
  const reportPath = join(__dirname, 'museum-validation-report.json');

  if (!existsSync(reportPath)) {
    console.error('❌ Rapport de validation introuvable!');
    console.error('   Exécutez d\'abord: node scripts/validateMuseums.js');
    process.exit(1);
  }

  return JSON.parse(readFileSync(reportPath, 'utf-8'));
}

/**
 * Charge et parse places.js
 */
function loadPlaces() {
  const placesPath = join(__dirname, '..', 'src', 'data', 'places.js');
  const content = readFileSync(placesPath, 'utf-8');

  // Extrait les parties du fichier
  const headerMatch = content.match(/^([\s\S]*?export const places = )/);
  const placesMatch = content.match(/export const places = (\[[\s\S]*\]);/);

  if (!headerMatch || !placesMatch) {
    throw new Error('Could not parse places.js structure');
  }

  const header = headerMatch[1];
  const places = JSON.parse(placesMatch[1]);

  return { header, places, originalContent: content };
}

/**
 * Régénère le fichier places.js avec les musées filtrés
 */
function regeneratePlacesFile(header, places) {
  // Compte par type
  const counts = places.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {});

  // Génère le nouveau header avec les bons compteurs
  const newHeader = `// Fichier généré automatiquement — Base COMPLÈTE des lieux culturels français
// Date : ${new Date().toISOString()}
// Total : ${places.length} lieux (${counts['musée'] || 0} musées, ${counts['château'] || 0} châteaux, ${counts['église'] || 0} églises, ${counts['exposition'] || 0} expositions)
//
// Données générées à partir de coordonnées GPS réelles
// de 626 villes françaises couvrant toutes les régions
// NETTOYÉ: Musées invalides supprimés après validation OpenStreetMap

export const placeTypes = [
  { id: 'all', label: 'Tous', color: 'bg-night-600' },
  { id: 'musée', label: 'Musées', color: 'bg-turquoise-500' },
  { id: 'château', label: 'Châteaux', color: 'bg-gold-600' },
  { id: 'église', label: 'Églises', color: 'bg-rose-500' },
  { id: 'exposition', label: 'Expositions', color: 'bg-purple-500' }
];

export const getTypeBadgeColor = (type) => {
  const colors = {
    'musée': 'bg-turquoise-500',
    'château': 'bg-gold-600',
    'église': 'bg-rose-500',
    'exposition': 'bg-purple-500',
  };
  return colors[type] || 'bg-night-600';
};

// Base de données COMPLÈTE des lieux culturels français
export const places = `;

  // Réassigne les IDs séquentiellement
  const reindexedPlaces = places.map((place, index) => ({
    ...place,
    id: index + 1
  }));

  // Génère le contenu JSON formaté
  const placesJson = JSON.stringify(reindexedPlaces, null, 2);

  return newHeader + placesJson + ';\n';
}

/**
 * Fonction principale
 */
async function main() {
  const args = process.argv.slice(2);
  const preview = args.includes('--preview') || (!args.includes('--confirm'));
  const includeReview = args.includes('--include-review');

  console.log('='.repeat(60));
  console.log('  NETTOYAGE DES MUSÉES INVALIDES - Muzea');
  console.log('='.repeat(60));
  console.log(`Mode: ${preview ? 'PRÉVISUALISATION (--preview)' : 'SUPPRESSION (--confirm)'}`);
  console.log(`Inclure "à vérifier": ${includeReview ? 'OUI' : 'NON'}`);
  console.log('');

  // Charge les données
  const report = loadValidationReport();
  const { header, places } = loadPlaces();

  console.log(`Rapport de validation du: ${report.summary.validationDate}`);
  console.log(`Total musées validés: ${report.summary.total}`);
  console.log('');

  // Détermine les IDs à supprimer
  let idsToDelete = new Set(report.toDelete.map(m => m.id));

  if (includeReview) {
    report.toReview.forEach(m => idsToDelete.add(m.id));
    console.log(`Musées à supprimer (invalides + à vérifier): ${idsToDelete.size}`);
  } else {
    console.log(`Musées à supprimer (invalides uniquement): ${idsToDelete.size}`);
  }

  // Affiche la liste des musées à supprimer
  console.log('\n📋 Liste des musées à supprimer:');
  console.log('-'.repeat(60));

  const museumsToDelete = places.filter(p => idsToDelete.has(p.id));
  museumsToDelete.forEach((m, i) => {
    const confidence = report.fullValidations.find(v => v.id === m.id)?.confidence || 0;
    console.log(`  ${i + 1}. [ID:${m.id}] ${m.name}`);
    console.log(`     📍 ${m.location}`);
    console.log(`     🎯 Confiance: ${(confidence * 100).toFixed(0)}%`);
  });

  console.log('-'.repeat(60));
  console.log(`Total: ${museumsToDelete.length} musées à supprimer`);

  // Calcule les statistiques après suppression
  const remainingPlaces = places.filter(p => !idsToDelete.has(p.id));
  const remainingMuseums = remainingPlaces.filter(p => p.type === 'musée');

  console.log('\n📊 Après suppression:');
  console.log(`  - Lieux totaux: ${places.length} → ${remainingPlaces.length}`);
  console.log(`  - Musées: ${places.filter(p => p.type === 'musée').length} → ${remainingMuseums.length}`);

  if (preview) {
    console.log('\n⚠️  MODE PRÉVISUALISATION - Aucune modification effectuée');
    console.log('    Pour supprimer ces musées, exécutez:');
    console.log('    node scripts/cleanupMuseums.js --confirm');
    if (!includeReview && report.toReview.length > 0) {
      console.log(`\n    Note: ${report.toReview.length} musées sont "à vérifier".`);
      console.log('    Ajoutez --include-review pour les inclure dans la suppression.');
    }
    return;
  }

  // Confirmation finale
  console.log('\n⚠️  ATTENTION: Cette action est irréversible!');
  console.log('    Le fichier places.js va être modifié.');

  // Crée une sauvegarde
  const backupPath = join(__dirname, '..', 'src', 'data', `places.backup.${Date.now()}.js`);
  const originalContent = readFileSync(join(__dirname, '..', 'src', 'data', 'places.js'), 'utf-8');
  writeFileSync(backupPath, originalContent);
  console.log(`\n💾 Sauvegarde créée: ${backupPath}`);

  // Génère le nouveau fichier
  const newContent = regeneratePlacesFile(header, remainingPlaces);
  const placesPath = join(__dirname, '..', 'src', 'data', 'places.js');
  writeFileSync(placesPath, newContent);

  console.log(`\n✅ Suppression effectuée!`);
  console.log(`   ${museumsToDelete.length} musées supprimés`);
  console.log(`   ${remainingPlaces.length} lieux restants`);

  // Sauvegarde la liste des musées supprimés
  const deletedPath = join(__dirname, 'deleted-museums.json');
  writeFileSync(deletedPath, JSON.stringify({
    deletedAt: new Date().toISOString(),
    count: museumsToDelete.length,
    museums: museumsToDelete
  }, null, 2));
  console.log(`   Liste des supprimés: ${deletedPath}`);
}

main().catch(console.error);
