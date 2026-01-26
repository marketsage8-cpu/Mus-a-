import { useState, useEffect, useCallback } from 'react';
import { loadAllCulturalPlaces, clearCache } from '../services/culturalDataService';
import { places as staticPlaces, placeTypes } from '../data/places';

/**
 * Hook pour charger TOUTES les données culturelles.
 *
 * - Au montage : affiche les données statiques (places.js)
 * - En arrière-plan : charge TOUTES les données depuis les APIs
 * - Quand c'est prêt : remplace les données statiques par les données complètes
 * - Cache en IndexedDB pour les visites suivantes (chargement instantané)
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
      const allPlaces = await loadAllCulturalPlaces((info) => {
        setProgress(info);
      });

      if (allPlaces && allPlaces.length > 0) {
        setPlaces(allPlaces);
        setIsLiveData(true);
        console.log(`[Muzea] Carte mise à jour : ${allPlaces.length} lieux (au lieu de ${staticPlaces.length})`);
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
