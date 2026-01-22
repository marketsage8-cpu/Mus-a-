/**
 * Données des lieux culturels
 * Chaque lieu contient des informations détaillées pour l'affichage
 */
export const places = [
  {
    id: 1,
    name: "Musée du Louvre",
    type: "musée",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    description: "Le plus grand musée d'art et d'antiquités au monde, abritant des chefs-d'œuvre comme la Joconde et la Vénus de Milo. Une collection inégalée de 35 000 œuvres exposées.",
    location: "Paris, Île-de-France",
    rating: 4.8,
    price: "17€",
    hours: "9h - 18h (fermé mardi)",
    period: "Renaissance",
    coordinates: { lat: 48.8606, lng: 2.3376 },
    highlights: ["La Joconde", "Vénus de Milo", "Victoire de Samothrace", "Appartements Napoléon III"],
    visited: false,
    favorite: false
  },
  {
    id: 2,
    name: "Château de Versailles",
    type: "château",
    image: "https://images.unsplash.com/photo-1597910037310-7dd3ff62f57b?w=800&q=80",
    description: "Résidence royale emblématique du XVIIe siècle, symbole de l'absolutisme français. La Galerie des Glaces et les jardins à la française sont d'une beauté incomparable.",
    location: "Versailles, Île-de-France",
    rating: 4.9,
    price: "20€",
    hours: "9h - 18h30 (fermé lundi)",
    period: "Baroque",
    coordinates: { lat: 48.8049, lng: 2.1204 },
    highlights: ["Galerie des Glaces", "Jardins à la française", "Grand Trianon", "Hameau de la Reine"],
    visited: false,
    favorite: false
  },
  {
    id: 3,
    name: "Mont Saint-Michel",
    type: "monument",
    image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=800&q=80",
    description: "Îlot rocheux surmonté d'une abbaye bénédictine, classé au patrimoine mondial de l'UNESCO. Un site magique où l'architecture médiévale rencontre les marées spectaculaires.",
    location: "Normandie",
    rating: 4.9,
    price: "11€",
    hours: "9h - 19h",
    period: "Médiéval",
    coordinates: { lat: 48.6361, lng: -1.5115 },
    highlights: ["Abbaye", "Cloître", "Grande Rue", "Marées exceptionnelles"],
    visited: false,
    favorite: false
  },
  {
    id: 4,
    name: "Exposition Monet - Lumières sur l'eau",
    type: "exposition",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80",
    description: "Une exposition immersive dédiée au maître de l'impressionnisme. Découvrez les Nymphéas comme jamais auparavant grâce à une scénographie innovante.",
    location: "Paris, Grand Palais",
    rating: 4.7,
    price: "15€",
    hours: "10h - 20h",
    period: "Impressionnisme",
    coordinates: { lat: 48.8662, lng: 2.3125 },
    highlights: ["Nymphéas immersifs", "Œuvres originales", "Expérience VR", "Atelier créatif"],
    visited: false,
    favorite: false,
    temporary: true,
    endDate: "15 Mars 2026"
  },
  {
    id: 5,
    name: "Cathédrale Notre-Dame de Paris",
    type: "monument",
    image: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=800&q=80",
    description: "Chef-d'œuvre de l'architecture gothique, récemment restaurée après l'incendie de 2019. Ses vitraux et sa flèche reconstruite brillent d'un nouvel éclat.",
    location: "Paris, Île-de-France",
    rating: 4.8,
    price: "Gratuit",
    hours: "8h - 18h45",
    period: "Gothique",
    coordinates: { lat: 48.8530, lng: 2.3499 },
    highlights: ["Rosaces", "Tours", "Crypte archéologique", "Trésor"],
    visited: false,
    favorite: false
  },
  {
    id: 6,
    name: "Musée d'Orsay",
    type: "musée",
    image: "https://images.unsplash.com/photo-1591285642560-6d53d9e5a7b8?w=800&q=80",
    description: "Installé dans une ancienne gare, ce musée présente la plus grande collection d'art impressionniste et post-impressionniste au monde.",
    location: "Paris, Île-de-France",
    rating: 4.8,
    price: "16€",
    hours: "9h30 - 18h (fermé lundi)",
    period: "Impressionnisme",
    coordinates: { lat: 48.8600, lng: 2.3266 },
    highlights: ["L'Origine du monde", "Le Déjeuner sur l'herbe", "Bal du moulin de la Galette", "Horloge monumentale"],
    visited: false,
    favorite: false
  },
  {
    id: 7,
    name: "Château de Chambord",
    type: "château",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    description: "Joyau de la Renaissance française, ce château aux 426 pièces possède le célèbre escalier à double révolution attribué à Léonard de Vinci.",
    location: "Chambord, Centre-Val de Loire",
    rating: 4.7,
    price: "14.50€",
    hours: "9h - 18h",
    period: "Renaissance",
    coordinates: { lat: 47.6161, lng: 1.5170 },
    highlights: ["Escalier double révolution", "Terrasses", "Parc forestier", "Spectacle équestre"],
    visited: false,
    favorite: false
  },
  {
    id: 8,
    name: "Palais des Papes",
    type: "monument",
    image: "https://images.unsplash.com/photo-1592312040834-51e6e1c4c4c6?w=800&q=80",
    description: "Plus grande construction gothique du Moyen Âge, ce palais fut la résidence des papes au XIVe siècle. Un témoignage unique de l'histoire religieuse européenne.",
    location: "Avignon, Provence",
    rating: 4.6,
    price: "12€",
    hours: "9h - 19h",
    period: "Médiéval",
    coordinates: { lat: 43.9509, lng: 4.8081 },
    highlights: ["Grande Chapelle", "Fresques de Matteo Giovannetti", "Tour de la Garde-robe", "Jardins"],
    visited: false,
    favorite: false
  },
  {
    id: 9,
    name: "Centre Pompidou",
    type: "musée",
    image: "https://images.unsplash.com/photo-1574181611231-90a1c521f8aa?w=800&q=80",
    description: "Temple de l'art moderne et contemporain à l'architecture révolutionnaire. La plus grande collection d'art moderne d'Europe.",
    location: "Paris, Île-de-France",
    rating: 4.5,
    price: "15€",
    hours: "11h - 21h (fermé mardi)",
    period: "Art moderne",
    coordinates: { lat: 48.8606, lng: 2.3522 },
    highlights: ["Vue panoramique", "Collection permanente", "Fontaine Stravinsky", "Bibliothèque publique"],
    visited: false,
    favorite: false
  },
  {
    id: 10,
    name: "Cité de Carcassonne",
    type: "monument",
    image: "https://images.unsplash.com/photo-1570009600419-37c9e8d35d9a?w=800&q=80",
    description: "La plus grande cité fortifiée d'Europe, avec ses 52 tours et 3 km de remparts. Un voyage dans le temps au cœur du Moyen Âge occitan.",
    location: "Carcassonne, Occitanie",
    rating: 4.7,
    price: "9.50€",
    hours: "10h - 18h30",
    period: "Médiéval",
    coordinates: { lat: 43.2065, lng: 2.3636 },
    highlights: ["Remparts", "Château Comtal", "Basilique Saint-Nazaire", "Lices hautes"],
    visited: false,
    favorite: false
  },
  {
    id: 11,
    name: "Exposition Van Gogh - La Nuit étoilée",
    type: "exposition",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    description: "Plongez dans l'univers tourmenté et lumineux de Van Gogh à travers une expérience sensorielle unique mêlant projections et œuvres originales.",
    location: "Paris, Atelier des Lumières",
    rating: 4.6,
    price: "16€",
    hours: "10h - 22h",
    period: "Post-impressionnisme",
    coordinates: { lat: 48.8614, lng: 2.3815 },
    highlights: ["Projections immersives", "Nuit étoilée animée", "Autoportraits", "Chambre à Arles"],
    visited: false,
    favorite: false,
    temporary: true,
    endDate: "28 Février 2026"
  },
  {
    id: 12,
    name: "Château de Chenonceau",
    type: "château",
    image: "https://images.unsplash.com/photo-1551410224-699683e15636?w=800&q=80",
    description: "Surnommé le 'Château des Dames', ce joyau de la Renaissance s'étend gracieusement sur le Cher. Ses jardins et son architecture sont d'une élégance rare.",
    location: "Chenonceaux, Centre-Val de Loire",
    rating: 4.8,
    price: "15€",
    hours: "9h - 19h",
    period: "Renaissance",
    coordinates: { lat: 47.3248, lng: 1.0705 },
    highlights: ["Galerie sur le Cher", "Jardin de Diane", "Cabinet vert", "Cuisine médiévale"],
    visited: false,
    favorite: false
  }
];

/**
 * Types de lieux disponibles pour le filtrage
 */
export const placeTypes = [
  { id: 'all', label: 'Tous', color: 'bg-stone-600' },
  { id: 'musée', label: 'Musées', color: 'bg-blue-500' },
  { id: 'château', label: 'Châteaux', color: 'bg-amber-600' },
  { id: 'monument', label: 'Monuments', color: 'bg-emerald-600' },
  { id: 'exposition', label: 'Expositions', color: 'bg-purple-500' }
];

/**
 * Récupère les couleurs du badge selon le type
 */
export const getTypeBadgeColor = (type) => {
  const colors = {
    'musée': 'bg-blue-500/80',
    'château': 'bg-amber-600/80',
    'monument': 'bg-emerald-600/80',
    'exposition': 'bg-purple-500/80'
  };
  return colors[type] || 'bg-stone-600/80';
};
