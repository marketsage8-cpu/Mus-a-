/**
 * Système de badges pour la gamification
 * Chaque badge a des conditions de déblocage spécifiques
 */
export const badges = [
  {
    id: 1,
    name: "Premier pas",
    icon: "👣",
    description: "Votre première visite culturelle",
    condition: "1 lieu visité",
    requirement: { type: 'visits', count: 1 },
    unlocked: false
  },
  {
    id: 2,
    name: "Explorateur",
    icon: "🧭",
    description: "Vous avez exploré 10 lieux culturels",
    condition: "10 lieux visités",
    requirement: { type: 'visits', count: 10 },
    unlocked: false
  },
  {
    id: 3,
    name: "Passionné",
    icon: "💎",
    description: "Un véritable amateur de culture",
    condition: "50 lieux visités",
    requirement: { type: 'visits', count: 50 },
    unlocked: false
  },
  {
    id: 4,
    name: "Médiéviste",
    icon: "🏰",
    description: "Expert des châteaux et forteresses",
    condition: "5 châteaux visités",
    requirement: { type: 'category', category: 'château', count: 5 },
    unlocked: false
  },
  {
    id: 5,
    name: "Amateur d'art",
    icon: "🎨",
    description: "Les musées n'ont plus de secrets pour vous",
    condition: "5 musées visités",
    requirement: { type: 'category', category: 'musée', count: 5 },
    unlocked: false
  },
  {
    id: 6,
    name: "Globe-trotter",
    icon: "🌍",
    description: "Vous avez exploré différentes régions",
    condition: "3 régions explorées",
    requirement: { type: 'regions', count: 3 },
    unlocked: false
  }
];

/**
 * Vérifie si un badge est débloqué selon les statistiques utilisateur
 */
export const checkBadgeUnlocked = (badge, stats) => {
  const { requirement } = badge;

  switch (requirement.type) {
    case 'visits':
      return stats.totalVisits >= requirement.count;

    case 'category':
      return (stats.byCategory[requirement.category] || 0) >= requirement.count;

    case 'regions':
      return stats.uniqueRegions >= requirement.count;

    default:
      return false;
  }
};

/**
 * Calcule la progression vers un badge
 */
export const getBadgeProgress = (badge, stats) => {
  const { requirement } = badge;

  switch (requirement.type) {
    case 'visits':
      return Math.min(100, (stats.totalVisits / requirement.count) * 100);

    case 'category':
      const categoryCount = stats.byCategory[requirement.category] || 0;
      return Math.min(100, (categoryCount / requirement.count) * 100);

    case 'regions':
      return Math.min(100, (stats.uniqueRegions / requirement.count) * 100);

    default:
      return 0;
  }
};
