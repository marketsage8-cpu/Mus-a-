import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'culture-explorer-favorites';

/**
 * Hook personnalisé pour gérer les favoris
 * Persiste les données dans localStorage
 */
export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erreur lecture favoris:', error);
      return [];
    }
  });

  // Synchronise avec localStorage à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Erreur sauvegarde favoris:', error);
    }
  }, [favorites]);

  // Toggle un lieu en favori
  const toggleFavorite = useCallback((placeId) => {
    setFavorites(prev => {
      if (prev.includes(placeId)) {
        return prev.filter(id => id !== placeId);
      }
      return [...prev, placeId];
    });
  }, []);

  // Vérifie si un lieu est en favori
  const isFavorite = useCallback((placeId) => {
    return favorites.includes(placeId);
  }, [favorites]);

  // Supprime tous les favoris
  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoritesCount: favorites.length
  };
};

export default useFavorites;
