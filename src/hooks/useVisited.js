import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'culture-explorer-visited';

/**
 * Hook personnalisé pour gérer l'historique des visites
 * Persiste les données dans localStorage avec date de visite
 */
export const useVisited = () => {
  const [visited, setVisited] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erreur lecture visites:', error);
      return [];
    }
  });

  // Synchronise avec localStorage à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
    } catch (error) {
      console.error('Erreur sauvegarde visites:', error);
    }
  }, [visited]);

  // Marque un lieu comme visité
  const markVisited = useCallback((placeId) => {
    setVisited(prev => {
      const exists = prev.find(v => v.placeId === placeId);
      if (exists) return prev;

      return [...prev, {
        placeId,
        visitedAt: new Date().toISOString()
      }];
    });
  }, []);

  // Supprime une visite
  const removeVisit = useCallback((placeId) => {
    setVisited(prev => prev.filter(v => v.placeId !== placeId));
  }, []);

  // Vérifie si un lieu a été visité
  const isVisited = useCallback((placeId) => {
    return visited.some(v => v.placeId === placeId);
  }, [visited]);

  // Obtient les visites récentes (triées par date)
  const getRecentVisits = useCallback((limit = 5) => {
    return [...visited]
      .sort((a, b) => new Date(b.visitedAt) - new Date(a.visitedAt))
      .slice(0, limit);
  }, [visited]);

  // Supprime tout l'historique
  const clearVisited = useCallback(() => {
    setVisited([]);
  }, []);

  // Obtient les IDs des lieux visités
  const visitedIds = visited.map(v => v.placeId);

  return {
    visited,
    visitedIds,
    markVisited,
    removeVisit,
    isVisited,
    getRecentVisits,
    clearVisited,
    visitedCount: visited.length
  };
};

export default useVisited;
