import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { badges, checkBadgeUnlocked } from '../data/badges';

const UserContext = createContext(null);

const STORAGE_KEY = 'culture-explorer-user';

/**
 * Provider pour l'état global utilisateur
 * Gère favoris, visites, badges et préférences
 */
export const UserProvider = ({ children }) => {
  // État initial chargé depuis localStorage
  const [userData, setUserData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Erreur chargement utilisateur:', error);
    }
    return {
      name: 'Explorateur',
      favorites: [],
      visited: [],
      preferences: ['Renaissance', 'Impressionnisme', 'Médiéval']
    };
  });

  // Notifications mockées
  const [notifications] = useState([
    { id: 1, message: 'Nouvelle exposition Van Gogh disponible !', date: '2026-01-20', read: false },
    { id: 2, message: 'Badge "Explorateur" presque débloqué', date: '2026-01-19', read: false },
    { id: 3, message: 'Le Louvre propose une visite nocturne', date: '2026-01-18', read: true }
  ]);

  // Sauvegarde dans localStorage à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } catch (error) {
      console.error('Erreur sauvegarde utilisateur:', error);
    }
  }, [userData]);

  // Toggle favori
  const toggleFavorite = (placeId) => {
    setUserData(prev => ({
      ...prev,
      favorites: prev.favorites.includes(placeId)
        ? prev.favorites.filter(id => id !== placeId)
        : [...prev.favorites, placeId]
    }));
  };

  // Marquer comme visité
  const markVisited = (placeId) => {
    setUserData(prev => {
      if (prev.visited.some(v => v.placeId === placeId)) return prev;
      return {
        ...prev,
        visited: [...prev.visited, {
          placeId,
          visitedAt: new Date().toISOString()
        }]
      };
    });
  };

  // Vérifier si favori
  const isFavorite = (placeId) => userData.favorites.includes(placeId);

  // Vérifier si visité
  const isVisited = (placeId) => userData.visited.some(v => v.placeId === placeId);

  // Calcul des statistiques (basé uniquement sur les IDs, les détails viennent de useCulturalData)
  const stats = useMemo(() => {
    return {
      totalVisits: userData.visited.length,
      totalFavorites: userData.favorites.length,
      visitedIds: userData.visited.map(v => v.placeId),
      favoriteIds: userData.favorites
    };
  }, [userData]);

  // Badges débloqués
  const userBadges = useMemo(() => {
    return badges.map(badge => ({
      ...badge,
      unlocked: checkBadgeUnlocked(badge, stats)
    }));
  }, [stats]);

  // Visites récentes (uniquement les enregistrements de visite, les détails viennent de useCulturalData)
  const recentVisits = useMemo(() => {
    return [...userData.visited]
      .sort((a, b) => new Date(b.visitedAt) - new Date(a.visitedAt))
      .slice(0, 5);
  }, [userData.visited]);

  // IDs des lieux favoris (les détails viennent de useCulturalData)
  const favoriteIds = useMemo(() => {
    return userData.favorites;
  }, [userData.favorites]);

  const value = {
    userData,
    setUserData,
    toggleFavorite,
    markVisited,
    isFavorite,
    isVisited,
    stats,
    userBadges,
    recentVisits,
    favoriteIds,
    notifications
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Hook pour accéder au contexte utilisateur
 */
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
