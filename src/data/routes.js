/**
 * Parcours thématiques prédéfinis
 * Chaque parcours regroupe plusieurs lieux autour d'un thème
 */
export const routes = [
  {
    id: 1,
    name: "Les Trésors de Paris",
    description: "Découvrez les musées incontournables de la capitale française, du Louvre au Centre Pompidou",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    placeCount: 5,
    duration: "3 jours",
    difficulty: "Facile",
    region: "Île-de-France",
    highlights: ["Musée du Louvre", "Musée d'Orsay", "Centre Pompidou", "Musée Picasso"],
    placeIds: [1, 3, 5, 7, 10],
    color: "from-turquoise-500 to-turquoise-600"
  },
  {
    id: 2,
    name: "Châteaux de la Loire",
    description: "Un voyage royal à travers les plus beaux châteaux de la Renaissance française",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    placeCount: 3,
    duration: "4 jours",
    difficulty: "Modéré",
    region: "Centre-Val de Loire",
    highlights: ["Chambord", "Chenonceau", "Amboise"],
    placeIds: [4, 6, 11],
    color: "from-gold-500 to-gold-700"
  },
  {
    id: 3,
    name: "Patrimoine Royal",
    description: "Sur les traces des rois de France, de Versailles à Fontainebleau",
    image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80",
    placeCount: 3,
    duration: "2 jours",
    difficulty: "Facile",
    region: "Île-de-France",
    highlights: ["Versailles", "Fontainebleau", "Le Louvre"],
    placeIds: [1, 2, 9],
    color: "from-terracotta-500 to-terracotta-600"
  }
];

/**
 * Obtient les lieux d'un parcours
 */
export const getRoutePlaces = (route, allPlaces) => {
  return route.placeIds.map(id => allPlaces.find(place => place.id === id)).filter(Boolean);
};

/**
 * Calcule la progression d'un parcours pour un utilisateur
 */
export const getRouteProgress = (route, visitedPlaceIds) => {
  const visitedInRoute = route.placeIds.filter(id => visitedPlaceIds.includes(id));
  return {
    visited: visitedInRoute.length,
    total: route.placeIds.length,
    percentage: Math.round((visitedInRoute.length / route.placeIds.length) * 100)
  };
};
