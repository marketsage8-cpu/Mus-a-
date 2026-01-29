#!/usr/bin/env node

/**
 * Script de validation des musées - Version locale
 *
 * Identifie les musées fictifs (générés algorithmiquement) en :
 * 1. Comparant avec la liste des musées réels (wikidataMuseums + frenchMuseums)
 * 2. Détectant les patterns de noms génériques
 * 3. Analysant les incohérences (description vs nom)
 *
 * Usage: node scripts/validateMuseums.js [--verbose]
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── PATTERNS DE NOMS GÉNÉRIQUES (FICTIFS) ─────────────────────

// Ces patterns indiquent des noms générés algorithmiquement
const GENERIC_PATTERNS = [
  // "Musée de la X de Y" - pattern très générique
  /^Musée de la .+ de [A-Z]/i,
  // "Musée du X de Y"
  /^Musée du .+ de [A-Z]/i,
  // "Musée des X de Y"
  /^Musée des .+ de [A-Z]/i,
  // "Musée régional de X"
  /^Musée régional de /i,
  // "Musée municipal de X"
  /^Musée municipal de /i,
  // "Musée d'Art moderne de X" (pas le vrai à Paris)
  /^Musée d'Art moderne de (?!Paris$)/i,
  // "Musée d'Histoire naturelle de X"
  /^Musée d'Histoire naturelle de /i,
  // "Musée du Patrimoine de X"
  /^Musée du Patrimoine de /i,
];

// Thèmes génériques utilisés dans les noms fictifs
const GENERIC_THEMES = [
  'Céramique', 'Photographie', 'Musique', 'Guerre', 'Résistance',
  'Arts décoratifs', 'Ville', 'Patrimoine', 'Textile', 'Mode'
];

// Liste des musées réels (noms exacts ou partiels)
const KNOWN_REAL_MUSEUMS = new Set();

/**
 * Charge les musées réels depuis wikidataMuseums.js et frenchMuseums.js
 */
function loadRealMuseums() {
  // Extrait les noms de musées avec une regex plus permissive
  const extractNames = (content) => {
    const names = [];
    // Match: name: "...", ou name: '...',
    const regex = /name:\s*["']([^"']+)["']/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      names.push(match[1]);
    }
    return names;
  };

  // Charge wikidataMuseums
  try {
    const wikidataPath = join(__dirname, '..', 'src', 'data', 'wikidataMuseums.js');
    const wikidataContent = readFileSync(wikidataPath, 'utf-8');
    const names = extractNames(wikidataContent);
    names.forEach(name => KNOWN_REAL_MUSEUMS.add(normalizeName(name)));
    console.log(`  - wikidataMuseums: ${names.length} noms extraits`);
  } catch (e) {
    console.warn('Warning: Could not read wikidataMuseums.js:', e.message);
  }

  // Charge frenchMuseums
  try {
    const frenchPath = join(__dirname, '..', 'src', 'data', 'frenchMuseums.js');
    const frenchContent = readFileSync(frenchPath, 'utf-8');
    const names = extractNames(frenchContent);
    names.forEach(name => KNOWN_REAL_MUSEUMS.add(normalizeName(name)));
    console.log(`  - frenchMuseums: ${names.length} noms extraits`);
  } catch (e) {
    console.warn('Warning: Could not read frenchMuseums.js:', e.message);
  }

  // Ajoute une liste de musées très connus en France (sécurité)
  const famousMuseums = [
    "Musée du Louvre", "Musée d'Orsay", "Centre Pompidou", "Musée du Quai Branly",
    "Musée Picasso", "Musée Rodin", "Musée de l'Orangerie", "Musée Carnavalet",
    "MuCEM", "Musée Granet", "Fondation Maeght", "Musée Matisse", "Musée Chagall",
    "Musée des Confluences", "Institut Lumière", "Cité du Vin", "Lascaux IV",
    "Mémorial de Caen", "Musée des Impressionnismes", "Cité de l'Espace",
    "Musée Fabre", "Musée Soulages", "Musée Toulouse-Lautrec", "Océanopolis",
    "Les Machines de l'île", "Musée des Beaux-Arts de Lyon", "MAMAC Nice",
    "Cité de l'Automobile", "Cité du Train", "Musée de l'Air et de l'Espace",
    "Aeroscopia", "Musée de l'Aventure Peugeot", "Palais de la Découverte",
    "Cité des Sciences", "Musée de l'Homme", "Fondation Louis Vuitton",
    "Musée Jacquemart-André", "Musée de Cluny", "Musée Grévin", "Musée de l'Armée"
  ];
  famousMuseums.forEach(name => KNOWN_REAL_MUSEUMS.add(normalizeName(name)));

  console.log(`Loaded ${KNOWN_REAL_MUSEUMS.size} known real museums as reference`);
}

/**
 * Normalise un nom pour la comparaison
 */
function normalizeName(name) {
  if (!name) return '';
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Vérifie si un nom correspond à un musée réel connu
 */
function isKnownRealMuseum(name) {
  const normalized = normalizeName(name);

  // Correspondance exacte
  if (KNOWN_REAL_MUSEUMS.has(normalized)) return true;

  // Correspondance partielle (le nom réel contient ou est contenu)
  for (const realName of KNOWN_REAL_MUSEUMS) {
    if (normalized.includes(realName) || realName.includes(normalized)) {
      // Vérifie que ce n'est pas juste un match sur des mots courts
      const commonWords = ['musee', 'de', 'la', 'le', 'des', 'du', 'art'];
      const realWords = realName.split(' ').filter(w => !commonWords.includes(w) && w.length > 2);
      const testWords = normalized.split(' ').filter(w => !commonWords.includes(w) && w.length > 2);

      const matchingWords = realWords.filter(w => testWords.includes(w));
      if (matchingWords.length >= 2) return true;
    }
  }

  return false;
}

/**
 * Détecte si un nom est un pattern générique (fictif)
 */
function isGenericPattern(name) {
  for (const pattern of GENERIC_PATTERNS) {
    if (pattern.test(name)) return true;
  }
  return false;
}

/**
 * Détecte les incohérences entre nom et description
 */
function hasInconsistency(museum) {
  const { name, description } = museum;
  if (!name || !description) return false;

  // Vérifie si le nom parle d'un thème mais la description d'un autre
  const nameThemes = GENERIC_THEMES.filter(t =>
    name.toLowerCase().includes(t.toLowerCase())
  );

  if (nameThemes.length > 0) {
    const descThemes = GENERIC_THEMES.filter(t =>
      description.toLowerCase().includes(t.toLowerCase())
    );

    // Si le thème du nom n'apparaît pas dans la description
    const hasMatch = nameThemes.some(t => descThemes.includes(t));
    if (!hasMatch && descThemes.length > 0) {
      return true;  // Incohérence détectée
    }
  }

  return false;
}

/**
 * Vérifie si le musée a une source vérifiée
 */
function hasVerifiedSource(museum) {
  return museum.source === 'wikidata' ||
         museum.source === 'data.culture.gouv.fr' ||
         museum.wikidataId;
}

/**
 * Analyse un musée et retourne son statut de validation
 */
function validateMuseum(museum) {
  const validation = {
    id: museum.id,
    name: museum.name,
    location: museum.location,
    coordinates: museum.coordinates,
    flags: [],
    confidence: 1.0,
    recommendation: 'KEEP'
  };

  // 1. Musée réel connu -> VALIDE
  if (isKnownRealMuseum(museum.name)) {
    validation.flags.push('KNOWN_REAL_MUSEUM');
    validation.confidence = 1.0;
    return validation;
  }

  // 2. Source vérifiée -> VALIDE
  if (hasVerifiedSource(museum)) {
    validation.flags.push('VERIFIED_SOURCE');
    validation.confidence = 0.9;
    return validation;
  }

  // 3. Pattern générique -> SUSPECT
  if (isGenericPattern(museum.name)) {
    validation.flags.push('GENERIC_PATTERN');
    validation.confidence -= 0.4;
  }

  // 4. Incohérence nom/description -> SUSPECT
  if (hasInconsistency(museum)) {
    validation.flags.push('NAME_DESC_INCONSISTENCY');
    validation.confidence -= 0.3;
  }

  // 5. Pas d'image -> légèrement suspect
  if (!museum.image || museum.image === '') {
    validation.flags.push('NO_IMAGE');
    validation.confidence -= 0.1;
  }

  // 6. Prix générique "Se renseigner" -> suspect
  if (museum.price === 'Se renseigner' || museum.hours?.includes('se renseigner')) {
    validation.flags.push('GENERIC_INFO');
    validation.confidence -= 0.1;
  }

  // Détermine la recommandation
  if (validation.confidence < 0.3) {
    validation.recommendation = 'DELETE';
  } else if (validation.confidence < 0.6) {
    validation.recommendation = 'REVIEW';
  } else {
    validation.recommendation = 'KEEP';
  }

  return validation;
}

/**
 * Charge les données des musées depuis places.js
 */
function loadMuseums() {
  const placesPath = join(__dirname, '..', 'src', 'data', 'places.js');
  const content = readFileSync(placesPath, 'utf-8');

  const match = content.match(/export const places = (\[[\s\S]*\]);/);
  if (!match) {
    throw new Error('Could not parse places.js');
  }

  const places = JSON.parse(match[1]);
  const museums = places.filter(p => p.type === 'musée');

  console.log(`Loaded ${museums.length} museums from ${places.length} total places`);

  return { places, museums };
}

/**
 * Génère le rapport de validation
 */
function generateReport(validations, outputPath) {
  const toDelete = validations.filter(v => v.recommendation === 'DELETE');
  const toReview = validations.filter(v => v.recommendation === 'REVIEW');
  const toKeep = validations.filter(v => v.recommendation === 'KEEP');

  const report = {
    summary: {
      total: validations.length,
      valid: toKeep.length,
      toReview: toReview.length,
      invalid: toDelete.length,
      validationDate: new Date().toISOString(),
      method: 'Pattern analysis + known museums comparison'
    },
    toDelete: toDelete.map(v => ({
      id: v.id,
      name: v.name,
      location: v.location,
      confidence: v.confidence,
      flags: v.flags
    })),
    toReview: toReview.map(v => ({
      id: v.id,
      name: v.name,
      location: v.location,
      confidence: v.confidence,
      flags: v.flags
    })),
    toKeep: toKeep.map(v => ({
      id: v.id,
      name: v.name,
      location: v.location,
      confidence: v.confidence,
      flags: v.flags
    })),
    fullValidations: validations
  };

  writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`\nReport saved to: ${outputPath}`);

  return report;
}

/**
 * Fonction principale
 */
async function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes('--verbose');

  console.log('='.repeat(60));
  console.log('  VALIDATION DES MUSÉES - Muzea (Analyse locale)');
  console.log('='.repeat(60));
  console.log('');

  // Charge les musées réels comme référence
  loadRealMuseums();

  // Charge les musées à valider
  const { places, museums } = loadMuseums();

  console.log(`\nAnalyzing ${museums.length} museums...\n`);

  // Valide chaque musée
  const validations = [];
  for (let i = 0; i < museums.length; i++) {
    const validation = validateMuseum(museums[i]);
    validations.push(validation);

    if (verbose || (i + 1) % 500 === 0) {
      const status = validation.recommendation === 'DELETE' ? '❌' :
                     validation.recommendation === 'REVIEW' ? '⚠️' : '✅';
      console.log(`[${i + 1}/${museums.length}] ${status} ${validation.name} (${(validation.confidence * 100).toFixed(0)}%)`);
      if (verbose && validation.flags.length > 0) {
        console.log(`    Flags: ${validation.flags.join(', ')}`);
      }
    }
  }

  // Génère le rapport final
  const reportPath = join(__dirname, 'museum-validation-report.json');
  const report = generateReport(validations, reportPath);

  // Affiche le résumé
  console.log('\n' + '='.repeat(60));
  console.log('  RÉSUMÉ DE LA VALIDATION');
  console.log('='.repeat(60));
  console.log(`  Total musées analysés:   ${report.summary.total}`);
  console.log(`  ✅ Valides:              ${report.summary.valid}`);
  console.log(`  ⚠️  À vérifier:           ${report.summary.toReview}`);
  console.log(`  ❌ À supprimer:          ${report.summary.invalid}`);
  console.log('='.repeat(60));

  // Statistiques par flag
  const flagStats = {};
  validations.forEach(v => {
    v.flags.forEach(f => {
      flagStats[f] = (flagStats[f] || 0) + 1;
    });
  });

  console.log('\n📊 Statistiques des problèmes détectés:');
  Object.entries(flagStats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([flag, count]) => {
      console.log(`  - ${flag}: ${count} musées`);
    });

  if (report.summary.invalid > 0) {
    console.log('\n❌ Exemples de musées à supprimer:');
    report.toDelete.slice(0, 15).forEach(m => {
      console.log(`  - [${m.id}] ${m.name}`);
      console.log(`    📍 ${m.location} | Flags: ${m.flags.join(', ')}`);
    });
    if (report.toDelete.length > 15) {
      console.log(`  ... et ${report.toDelete.length - 15} autres`);
    }
  }

  if (report.summary.toReview > 0) {
    console.log('\n⚠️  Exemples de musées à vérifier:');
    report.toReview.slice(0, 10).forEach(m => {
      console.log(`  - [${m.id}] ${m.name}`);
      console.log(`    📍 ${m.location} | Flags: ${m.flags.join(', ')}`);
    });
    if (report.toReview.length > 10) {
      console.log(`  ... et ${report.toReview.length - 10} autres`);
    }
  }

  console.log(`\n📄 Rapport complet: ${reportPath}`);
  console.log('💡 Pour supprimer les musées invalides:');
  console.log('   node scripts/cleanupMuseums.js --preview');
  console.log('   node scripts/cleanupMuseums.js --confirm');
}

main().catch(console.error);
