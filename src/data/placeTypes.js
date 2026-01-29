/**
 * Types de lieux et couleurs associées
 * (Les données viennent maintenant des APIs externes)
 */

export const placeTypes = [
  { id: 'all', label: 'Tous', color: 'bg-night-600' },
  { id: 'musée', label: 'Musées', color: 'bg-turquoise-500' },
  { id: 'château', label: 'Châteaux', color: 'bg-gold-600' },
  { id: 'église', label: 'Églises', color: 'bg-rose-500' },
  { id: 'exposition', label: 'Expositions', color: 'bg-purple-500' }
];

export const getTypeBadgeColor = (type) => {
  const colors = {
    'musée': 'bg-turquoise-500',
    'château': 'bg-gold-600',
    'église': 'bg-rose-500',
    'exposition': 'bg-purple-500',
  };
  return colors[type] || 'bg-night-600';
};
