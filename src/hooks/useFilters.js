import { useState, useMemo, useCallback } from 'react';

/**
 * Hook personnalisé pour gérer le filtrage des lieux
 * Supporte filtrage par type et recherche textuelle
 */
export const useFilters = (places) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState('all');

  // Filtre les lieux selon les critères actuels
  const filteredPlaces = useMemo(() => {
    return places.filter(place => {
      // Filtre par type
      const matchesType = activeType === 'all' || place.type === activeType;

      // Filtre par recherche textuelle
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        place.name.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        place.period.toLowerCase().includes(query);

      return matchesType && matchesSearch;
    });
  }, [places, activeType, searchQuery]);

  // Reset tous les filtres
  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setActiveType('all');
  }, []);

  // Vérifie si des filtres sont actifs
  const hasActiveFilters = searchQuery !== '' || activeType !== 'all';

  return {
    searchQuery,
    setSearchQuery,
    activeType,
    setActiveType,
    filteredPlaces,
    resetFilters,
    hasActiveFilters,
    resultsCount: filteredPlaces.length
  };
};

export default useFilters;
