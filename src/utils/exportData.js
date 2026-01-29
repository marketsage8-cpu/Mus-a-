import { routes } from '../data/routes';

/**
 * Utilitaire d'export des données Muzea
 * Permet d'exporter toutes les données en JSON ou CSV
 *
 * Note: Les fonctions reçoivent `places` en paramètre car les données
 * viennent maintenant des APIs via useCulturalData hook
 */

/**
 * Déclenche le téléchargement d'un fichier
 */
const downloadFile = (content, filename, mimeType) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Exporte tous les lieux culturels en JSON
 */
export const exportPlacesJSON = (places = []) => {
  const data = {
    exportDate: new Date().toISOString(),
    application: 'Muzea',
    totalCount: places.length,
    places: places.map(({ visited, favorite, ...place }) => place)
  };
  downloadFile(JSON.stringify(data, null, 2), 'muzea-lieux.json', 'application/json');
};

/**
 * Exporte tous les lieux culturels en CSV
 */
export const exportPlacesCSV = (places = []) => {
  const headers = ['id', 'name', 'type', 'description', 'location', 'rating', 'price', 'hours', 'period', 'latitude', 'longitude', 'highlights', 'image'];
  const rows = places.map(p => [
    p.id,
    `"${(p.name || '').replace(/"/g, '""')}"`,
    p.type,
    `"${(p.description || '').replace(/"/g, '""')}"`,
    `"${(p.location || '').replace(/"/g, '""')}"`,
    p.rating,
    `"${p.price || ''}"`,
    `"${(p.hours || '').replace(/"/g, '""')}"`,
    `"${(p.period || '').replace(/"/g, '""')}"`,
    p.coordinates?.lat || '',
    p.coordinates?.lng || '',
    `"${(p.highlights || []).join('; ')}"`,
    p.image || ''
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadFile('\uFEFF' + csv, 'muzea-lieux.csv', 'text/csv;charset=utf-8');
};

/**
 * Exporte les données utilisateur (favoris, visites, préférences) en JSON
 */
export const exportUserDataJSON = (userData, stats, userBadges, places = []) => {
  const favoritePlaces = places.filter(p => userData.favorites.includes(p.id));
  const visitedPlaces = userData.visited.map(v => ({
    ...v,
    place: places.find(p => p.id === v.placeId)
  })).filter(v => v.place);

  const data = {
    exportDate: new Date().toISOString(),
    application: 'Muzea',
    user: {
      name: userData.name,
      email: userData.email,
      city: userData.city,
      about: userData.about,
      interests: userData.interests,
      languages: userData.languages,
      primaryLanguage: userData.primaryLanguage,
      visitStyle: userData.visitStyle,
      preferences: userData.preferences
    },
    statistics: stats,
    badges: userBadges,
    favorites: favoritePlaces.map(({ visited, favorite, ...p }) => p),
    visited: visitedPlaces.map(v => ({
      visitedAt: v.visitedAt,
      place: (() => { const { visited, favorite, ...p } = v.place; return p; })()
    }))
  };
  downloadFile(JSON.stringify(data, null, 2), 'muzea-mes-donnees.json', 'application/json');
};

/**
 * Exporte TOUT (lieux + parcours + données utilisateur) en un seul fichier JSON
 */
export const exportAllJSON = (userData, stats, userBadges, places = []) => {
  const data = {
    exportDate: new Date().toISOString(),
    application: 'Muzea',
    version: '1.0',
    summary: {
      totalPlaces: places.length,
      totalRoutes: routes.length,
      totalFavorites: userData.favorites.length,
      totalVisited: userData.visited.length
    },
    places: places.map(({ visited, favorite, ...p }) => p),
    routes,
    user: {
      name: userData.name,
      email: userData.email,
      city: userData.city,
      about: userData.about,
      interests: userData.interests,
      languages: userData.languages,
      primaryLanguage: userData.primaryLanguage,
      visitStyle: userData.visitStyle,
      preferences: userData.preferences
    },
    statistics: stats,
    badges: userBadges,
    favorites: userData.favorites,
    visited: userData.visited
  };
  downloadFile(JSON.stringify(data, null, 2), 'muzea-export-complet.json', 'application/json');
};
