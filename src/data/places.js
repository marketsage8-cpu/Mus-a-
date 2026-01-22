/**
 * Données des lieux culturels français
 * Musées, châteaux et monuments
 */
export const places = [
  {
    id: 1,
    name: "Musée du Louvre",
    type: "musée",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    description: "Le plus grand musée d'art au monde, abritant la Joconde, la Vénus de Milo et plus de 380 000 œuvres. Un voyage à travers 9000 ans d'histoire de l'art.",
    location: "Paris, Île-de-France",
    rating: 4.9,
    price: "17€",
    hours: "9h - 18h (fermé mardi)",
    period: "Antiquité - XXe siècle",
    coordinates: { lat: 48.8606, lng: 2.3376 },
    highlights: ["La Joconde", "Vénus de Milo", "Victoire de Samothrace", "Sacre de Napoléon"],
    visited: false,
    favorite: false
  },
  {
    id: 2,
    name: "Château de Versailles",
    type: "château",
    image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80",
    description: "Symbole de l'absolutisme royal français, ce palais somptueux témoigne du faste de Louis XIV. La Galerie des Glaces et les jardins sont emblématiques.",
    location: "Versailles, Île-de-France",
    rating: 4.8,
    price: "21€",
    hours: "9h - 18h30 (fermé lundi)",
    period: "XVIIe siècle",
    coordinates: { lat: 48.8049, lng: 2.1204 },
    highlights: ["Galerie des Glaces", "Jardins à la française", "Grand Trianon", "Hameau de la Reine"],
    visited: false,
    favorite: false
  },
  {
    id: 3,
    name: "Musée d'Orsay",
    type: "musée",
    image: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=800&q=80",
    description: "Installé dans une ancienne gare, ce musée abrite la plus grande collection d'œuvres impressionnistes au monde. Monet, Van Gogh, Renoir y sont réunis.",
    location: "Paris, Île-de-France",
    rating: 4.8,
    price: "16€",
    hours: "9h30 - 18h (fermé lundi)",
    period: "1848 - 1914",
    coordinates: { lat: 48.8600, lng: 2.3266 },
    highlights: ["Déjeuner sur l'herbe", "Nuit étoilée", "Bal du moulin de la Galette", "L'Origine du monde"],
    visited: false,
    favorite: false
  },
  {
    id: 4,
    name: "Château de Chambord",
    type: "château",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    description: "Chef-d'œuvre de la Renaissance française, célèbre pour son escalier à double révolution attribué à Léonard de Vinci. Le plus vaste des châteaux de la Loire.",
    location: "Chambord, Centre-Val de Loire",
    rating: 4.7,
    price: "16€",
    hours: "9h - 18h",
    period: "XVIe siècle",
    coordinates: { lat: 47.6162, lng: 1.5170 },
    highlights: ["Escalier double révolution", "Terrasses panoramiques", "Parc de 5440 ha", "Spectacle équestre"],
    visited: false,
    favorite: false
  },
  {
    id: 5,
    name: "Centre Pompidou",
    type: "musée",
    image: "https://images.unsplash.com/photo-1574246915327-5cf5cf6c6c0c?w=800&q=80",
    description: "Architecture audacieuse aux couleurs vives abritant le Musée National d'Art Moderne. La plus grande collection d'art contemporain en Europe.",
    location: "Paris, Île-de-France",
    rating: 4.6,
    price: "15€",
    hours: "11h - 21h (fermé mardi)",
    period: "XXe - XXIe siècle",
    coordinates: { lat: 48.8607, lng: 2.3522 },
    highlights: ["Fontaine Stravinsky", "Vue panoramique", "Œuvres de Picasso", "Bibliothèque publique"],
    visited: false,
    favorite: false
  },
  {
    id: 6,
    name: "Château de Chenonceau",
    type: "château",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&q=80",
    description: "Le château des Dames, enjambant le Cher avec élégance. Catherine de Médicis et Diane de Poitiers lui ont donné son charme unique.",
    location: "Chenonceaux, Centre-Val de Loire",
    rating: 4.8,
    price: "15€",
    hours: "9h - 19h",
    period: "XVIe siècle",
    coordinates: { lat: 47.3249, lng: 1.0705 },
    highlights: ["Galerie sur le Cher", "Jardins de Diane", "Jardins de Catherine", "Labyrinthe"],
    visited: false,
    favorite: false
  },
  {
    id: 7,
    name: "Musée du Quai Branly",
    type: "musée",
    image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?w=800&q=80",
    description: "Dédié aux arts et civilisations d'Afrique, d'Asie, d'Océanie et des Amériques. Une architecture remarquable de Jean Nouvel au pied de la Tour Eiffel.",
    location: "Paris, Île-de-France",
    rating: 4.5,
    price: "14€",
    hours: "10h30 - 19h (fermé lundi)",
    period: "Arts premiers",
    coordinates: { lat: 48.8611, lng: 2.2977 },
    highlights: ["Mur végétal", "Collections océaniennes", "Masques africains", "Art amérindien"],
    visited: false,
    favorite: false
  },
  {
    id: 8,
    name: "Mont-Saint-Michel",
    type: "monument",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    description: "Merveille de l'Occident, cette abbaye médiévale se dresse sur un îlot rocheux au milieu d'une baie aux marées spectaculaires.",
    location: "Mont-Saint-Michel, Normandie",
    rating: 4.9,
    price: "13€",
    hours: "9h - 19h",
    period: "Moyen Âge",
    coordinates: { lat: 48.6361, lng: -1.5115 },
    highlights: ["Abbaye bénédictine", "Cloître", "Grande roue", "Baie et marées"],
    visited: false,
    favorite: false
  },
  {
    id: 9,
    name: "Château de Fontainebleau",
    type: "château",
    image: "https://images.unsplash.com/photo-1597212720801-958b60f8a29e?w=800&q=80",
    description: "Résidence des souverains français pendant huit siècles. Napoléon y fit ses adieux à la Garde. Un témoignage unique de l'histoire de France.",
    location: "Fontainebleau, Île-de-France",
    rating: 4.6,
    price: "14€",
    hours: "9h30 - 18h (fermé mardi)",
    period: "XIIe - XIXe siècle",
    coordinates: { lat: 48.4011, lng: 2.7009 },
    highlights: ["Galerie François Ier", "Appartements de Napoléon", "Jardins", "Cour des Adieux"],
    visited: false,
    favorite: false
  },
  {
    id: 10,
    name: "Musée Picasso",
    type: "musée",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    description: "Dans l'Hôtel Salé du Marais, découvrez la plus grande collection publique d'œuvres de Pablo Picasso : peintures, sculptures, dessins et céramiques.",
    location: "Paris, Île-de-France",
    rating: 4.7,
    price: "14€",
    hours: "10h30 - 18h (fermé lundi)",
    period: "XXe siècle",
    coordinates: { lat: 48.8598, lng: 2.3623 },
    highlights: ["Période bleue", "Période rose", "Cubisme", "Céramiques"],
    visited: false,
    favorite: false
  },
  {
    id: 11,
    name: "Château d'Amboise",
    type: "château",
    image: "https://images.unsplash.com/photo-1565018054866-968e244e678d?w=800&q=80",
    description: "Résidence royale dominant la Loire, dernière demeure de Léonard de Vinci. Charles VIII y introduisit l'art italien en France.",
    location: "Amboise, Centre-Val de Loire",
    rating: 4.6,
    price: "15.50€",
    hours: "9h - 18h",
    period: "XVe - XVIe siècle",
    coordinates: { lat: 47.4133, lng: 0.9858 },
    highlights: ["Chapelle Saint-Hubert", "Tombe de Léonard de Vinci", "Logis royal", "Vue sur la Loire"],
    visited: false,
    favorite: false
  },
  {
    id: 12,
    name: "Palais des Papes",
    type: "monument",
    image: "https://images.unsplash.com/photo-1604156425963-9be03f86a428?w=800&q=80",
    description: "Plus grand palais gothique au monde, résidence des papes au XIVe siècle. Un monument imposant qui témoigne de la puissance de l'Église médiévale.",
    location: "Avignon, Provence",
    rating: 4.7,
    price: "14.50€",
    hours: "9h - 19h",
    period: "XIVe siècle",
    coordinates: { lat: 43.9507, lng: 4.8077 },
    highlights: ["Grande chapelle", "Fresques italiennes", "Salle du Consistoire", "Terrasses"],
    visited: false,
    favorite: false
  }
];

/**
 * Types de lieux disponibles pour le filtrage
 */
export const placeTypes = [
  { id: 'all', label: 'Tous', color: 'bg-night-600' },
  { id: 'musée', label: 'Musées', color: 'bg-turquoise-500' },
  { id: 'château', label: 'Châteaux', color: 'bg-gold-600' },
  { id: 'monument', label: 'Monuments', color: 'bg-terracotta-500' }
];

/**
 * Récupère les couleurs du badge selon le type
 */
export const getTypeBadgeColor = (type) => {
  const colors = {
    'musée': 'bg-turquoise-500/80',
    'château': 'bg-gold-600/80',
    'monument': 'bg-terracotta-500/80'
  };
  return colors[type] || 'bg-night-600/80';
};
