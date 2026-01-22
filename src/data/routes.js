/**
 * Parcours thématiques prédéfinis
 * Chaque parcours regroupe plusieurs lieux autour d'un thème
 */
export const routes = [
  {
    id: 1,
    name: "Route de la Renaissance",
    description: "Découvrez les chefs-d'œuvre de la Renaissance française à travers châteaux et musées emblématiques",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    placeCount: 8,
    duration: "3 jours",
    difficulty: "Modéré",
    region: "Centre-Val de Loire",
    highlights: ["Chambord", "Chenonceau", "Amboise", "Azay-le-Rideau"],
    placeIds: [1, 7, 12],
    color: "from-amber-600 to-orange-700"
  },
  {
    id: 2,
    name: "Trésors médiévaux",
    description: "Plongez au cœur du Moyen Âge avec ce parcours à travers forteresses, abbayes et cités fortifiées",
    image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=800&q=80",
    placeCount: 12,
    duration: "5 jours",
    difficulty: "Avancé",
    region: "France entière",
    highlights: ["Mont Saint-Michel", "Carcassonne", "Avignon", "Château de Pierrefonds"],
    placeIds: [3, 8, 10],
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: 3,
    name: "Art moderne à Paris",
    description: "Une immersion dans l'art moderne et contemporain au cœur de la capitale",
    image: "https://images.unsplash.com/photo-1574181611231-90a1c521f8aa?w=800&q=80",
    placeCount: 6,
    duration: "2 jours",
    difficulty: "Facile",
    region: "Paris",
    highlights: ["Pompidou", "Palais de Tokyo", "Fondation Louis Vuitton", "MAM"],
    placeIds: [9, 6, 4],
    color: "from-purple-600 to-pink-700"
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
