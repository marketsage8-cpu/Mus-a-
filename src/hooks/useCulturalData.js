import { useState, useEffect, useCallback } from 'react';
import { loadAllCulturalPlaces, clearCache } from '../services/culturalDataService';
import { places as staticPlaces, placeTypes } from '../data/places';
import { wikidataMuseums } from '../data/wikidataMuseums';

/**
 * Fusionne les données statiques avec les musées Wikidata (avec coordonnées)
 * en évitant les doublons basés sur le nom normalisé
 */
function mergeWithWikidataMuseums(basePlaces) {
  const normalizedNames = new Set(
    basePlaces.map(p =>
      p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '')
    )
  );

  const newMuseums = wikidataMuseums.filter(museum => {
    const key = museum.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
    return !normalizedNames.has(key);
  });

  console.log(`[Muzea] Ajout de ${newMuseums.length} musées Wikidata avec coordonnées GPS`);
  return [...basePlaces, ...newMuseums];
}

// Types valides : uniquement musée, château, église
const VALID_TYPES = new Set(['musée', 'château', 'église']);

// Données initiales : places statiques (filtrées) + musées Wikidata (avec coordonnées exactes)
const filteredStaticPlaces = staticPlaces.filter(p => VALID_TYPES.has(p.type));
const initialPlaces = mergeWithWikidataMuseums(filteredStaticPlaces);

/**
 * Hook pour charger TOUTES les données culturelles.
 *
 * - Au montage : affiche les données statiques (places.js) + musées Wikidata (coordonnées GPS)
 * - En arrière-plan : charge des données SUPPLÉMENTAIRES depuis les APIs
 * - Quand c'est prêt : FUSIONNE les données API avec les statiques (dédoublonnage)
 * - Les données statiques et Wikidata ne sont JAMAIS supprimées
 */
export function useCulturalData() {
  const [places, setPlaces] = useState(initialPlaces);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(null);
  const [isLiveData, setIsLiveData] = useState(false);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const apiPlaces = await loadAllCulturalPlaces((info) => {
        setProgress(info);
      });

      if (apiPlaces && apiPlaces.length > 0) {
        // Fusionner : garder TOUTES les données (statiques + Wikidata) + ajouter les nouvelles de l'API
        const existingNames = new Set(initialPlaces.map(p =>
          p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '')
        ));

        const newFromApi = apiPlaces.filter(p => {
          if (!VALID_TYPES.has(p.type)) return false; // Uniquement musée, château, église
          const key = p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
          return !existingNames.has(key);
        });

        // Assigner des IDs uniques aux nouveaux lieux
        const maxId = initialPlaces.reduce((max, p) => Math.max(max, p.id), 0);
        const numbered = newFromApi.map((p, i) => ({ ...p, id: maxId + i + 1 }));

        const merged = [...initialPlaces, ...numbered];
        setPlaces(merged);
        setIsLiveData(true);
        console.log(`[Muzea] Fusion : ${initialPlaces.length} (statiques+Wikidata) + ${numbered.length} nouveaux de l'API = ${merged.length} total`);
      }
    } catch (err) {
      console.warn('[Muzea] Erreur chargement API, données statiques conservées:', err);
      setError('Impossible de charger les données en ligne');
    } finally {
      setLoading(false);
      setProgress(null);
    }
  }, []);

  // Charger automatiquement au montage
  useEffect(() => {
    loadData();
  }, [loadData]);

  const refresh = useCallback(async () => {
    await clearCache();
    await loadData();
  }, [loadData]);

  return {
    places,
    placeTypes,
    loading,
    progress,
    isLiveData,
    error,
    refresh,
    totalStatic: staticPlaces.length,
    totalWikidata: wikidataMuseums.length,
    totalInitial: initialPlaces.length,
  };
}
