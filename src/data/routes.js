/**
 * Expéditions thématiques prédéfinies
 * Chaque expédition regroupe plusieurs sites autour d'un thème
 */
export const routes = [
  {
    id: 1,
    name: "Sur les traces des Pharaons",
    description: "Une expédition légendaire au cœur de l'Égypte ancienne, de la Vallée des Rois aux temples de Louxor",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    placeCount: 6,
    duration: "7 jours",
    difficulty: "Avancé",
    region: "Égypte",
    highlights: ["Vallée des Rois", "Temple de Karnak", "Abou Simbel", "Temple de Louxor"],
    placeIds: [2, 4, 6, 8, 10, 12],
    color: "from-gold-500 to-gold-700"
  },
  {
    id: 2,
    name: "Mythes de la Grèce Antique",
    description: "Parcourez les sites mythiques où les dieux de l'Olympe étaient vénérés et où la démocratie est née",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    placeCount: 6,
    duration: "5 jours",
    difficulty: "Modéré",
    region: "Grèce",
    highlights: ["Parthénon", "Delphes", "Épidaure", "Knossos"],
    placeIds: [3, 5, 7, 9, 11],
    color: "from-turquoise-500 to-turquoise-600"
  },
  {
    id: 3,
    name: "Les Merveilles Redécouvertes",
    description: "Une quête extraordinaire à travers les sites les plus emblématiques de l'Antiquité",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    placeCount: 4,
    duration: "10 jours",
    difficulty: "Expert",
    region: "Méditerranée",
    highlights: ["Parthénon", "Temple de Karnak", "Abou Simbel", "Temple de Louxor"],
    placeIds: [2, 3, 6, 8],
    color: "from-terracotta-500 to-terracotta-600"
  }
];

/**
 * Obtient les lieux d'une expédition
 */
export const getRoutePlaces = (route, allPlaces) => {
  return route.placeIds.map(id => allPlaces.find(place => place.id === id)).filter(Boolean);
};

/**
 * Calcule la progression d'une expédition pour un utilisateur
 */
export const getRouteProgress = (route, visitedPlaceIds) => {
  const visitedInRoute = route.placeIds.filter(id => visitedPlaceIds.includes(id));
  return {
    visited: visitedInRoute.length,
    total: route.placeIds.length,
    percentage: Math.round((visitedInRoute.length / route.placeIds.length) * 100)
  };
};
