import { useState, useCallback, useRef, useEffect } from 'react';
import { loadPlacesForBounds, fetchWikipediaImage, getCacheStats } from '../services/liveDataService';

/**
 * Hook pour le chargement dynamique des lieux selon la zone visible
 *
 * @param {Object} options - Configuration
 * @param {number} options.debounceMs - Délai de debounce (défaut: 500ms)
 * @param {boolean} options.autoLoad - Charger automatiquement au changement de bounds
 * @returns {Object} État et fonctions
 */
export function useLiveData(options = {}) {
  const { debounceMs = 500, autoLoad = true } = options;

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({ loaded: 0, total: 0 });

  const debounceTimer = useRef(null);
  const currentBounds = useRef(null);
  const loadedPlacesMap = useRef(new Map()); // Pour éviter les doublons entre zones

  /**
   * Charge les lieux pour une zone donnée
   */
  const loadForBounds = useCallback(async (bounds) => {
    if (!bounds) return;

    // Debounce
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const newPlaces = await loadPlacesForBounds(bounds, (progress) => {
          if (progress.phase === 'done') {
            setStats({ loaded: progress.count, total: progress.count });
          }
        });

        // Fusionner avec les places existantes (pour garder les données déjà chargées)
        const allPlaces = new Map(loadedPlacesMap.current);

        for (const place of newPlaces) {
          if (!allPlaces.has(place.id)) {
            allPlaces.set(place.id, place);
          }
        }

        // Filtrer pour ne garder que les places dans ou proche de la zone visible
        // (avec une marge de 20%)
        const margin = 0.2;
        const latRange = bounds.latMax - bounds.latMin;
        const lonRange = bounds.lonMax - bounds.lonMin;
        const expandedBounds = {
          latMin: bounds.latMin - latRange * margin,
          latMax: bounds.latMax + latRange * margin,
          lonMin: bounds.lonMin - lonRange * margin,
          lonMax: bounds.lonMax + lonRange * margin
        };

        const visiblePlaces = Array.from(allPlaces.values()).filter(p => {
          const { lat, lng } = p.coordinates;
          return lat >= expandedBounds.latMin && lat <= expandedBounds.latMax &&
                 lng >= expandedBounds.lonMin && lng <= expandedBounds.lonMax;
        });

        loadedPlacesMap.current = new Map(visiblePlaces.map(p => [p.id, p]));
        setPlaces(visiblePlaces);
        setStats({ loaded: visiblePlaces.length, total: allPlaces.size });

      } catch (err) {
        setError(err.message);
        console.error('[useLiveData] Error:', err);
      } finally {
        setLoading(false);
      }
    }, debounceMs);

    currentBounds.current = bounds;
  }, [debounceMs]);

  /**
   * Met à jour l'image d'un lieu via Wikipedia
   */
  const loadImageForPlace = useCallback(async (placeId) => {
    const place = loadedPlacesMap.current.get(placeId);
    if (!place || place.image) return place?.image;

    const image = await fetchWikipediaImage(place.name);
    if (image) {
      place.image = image;
      loadedPlacesMap.current.set(placeId, place);

      // Mettre à jour l'état
      setPlaces(prev => prev.map(p => p.id === placeId ? { ...p, image } : p));
    }

    return image;
  }, []);

  /**
   * Force le rechargement de la zone actuelle
   */
  const refresh = useCallback(() => {
    if (currentBounds.current) {
      loadedPlacesMap.current.clear();
      loadForBounds(currentBounds.current);
    }
  }, [loadForBounds]);

  /**
   * Vide toutes les données chargées
   */
  const clear = useCallback(() => {
    loadedPlacesMap.current.clear();
    setPlaces([]);
    setStats({ loaded: 0, total: 0 });
  }, []);

  // Cleanup au démontage
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return {
    places,
    loading,
    error,
    stats,
    loadForBounds,
    loadImageForPlace,
    refresh,
    clear,
    getCacheStats
  };
}

export default useLiveData;
