import { useState, useEffect, useCallback } from 'react';
import { loadAllCulturalPlaces, clearCache } from '../services/culturalDataService';
import { places as staticPlaces, placeTypes } from '../data/places';

/**
 * Hook pour charger TOUTES les données culturelles.
 *
 * - Au montage : affiche les données statiques (places.js) — 11 000+ lieux
 * - En arrière-plan : charge des données SUPPLÉMENTAIRES depuis les APIs
 * - Quand c'est prêt : FUSIONNE les données API avec les statiques (dédoublonnage)
 * - Les données statiques ne sont JAMAIS supprimées
 */
export function useCulturalData() {
  const [places, setPlaces] = useState(staticPlaces);
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
        // Fusionner : garder TOUTES les données statiques + ajouter les nouvelles de l'API
        const staticNames = new Set(staticPlaces.map(p =>
          p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        ));

        const newFromApi = apiPlaces.filter(p => {
          const key = p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          return !staticNames.has(key);
        });

        // Assigner des IDs uniques aux nouveaux lieux
        const maxId = staticPlaces.reduce((max, p) => Math.max(max, p.id), 0);
        const numbered = newFromApi.map((p, i) => ({ ...p, id: maxId + i + 1 }));

        const merged = [...staticPlaces, ...numbered];
        setPlaces(merged);
        setIsLiveData(true);
        console.log(`[Muzea] Fusion : ${staticPlaces.length} statiques + ${numbered.length} nouveaux de l'API = ${merged.length} total`);
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
  };
}
