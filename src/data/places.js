/**
 * Données des sites antiques
 * Chaque lieu contient des informations détaillées pour l'affichage
 */
export const places = [
  {
    id: 1,
    name: "Pyramides de Gizeh",
    type: "pyramide",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&q=80",
    description: "Les seules merveilles du monde antique encore debout. Ces tombeaux monumentaux des pharaons Khéops, Khéphren et Mykérinos défient le temps depuis plus de 4500 ans.",
    location: "Gizeh, Égypte",
    rating: 4.9,
    price: "200 EGP",
    hours: "7h - 17h",
    period: "Ancien Empire",
    coordinates: { lat: 29.9792, lng: 31.1342 },
    highlights: ["Grande Pyramide de Khéops", "Sphinx de Gizeh", "Pyramide de Khéphren", "Musée du bateau solaire"],
    visited: false,
    favorite: false
  },
  {
    id: 2,
    name: "Temple de Karnak",
    type: "temple",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    description: "Le plus grand complexe religieux de l'Antiquité. La salle hypostyle avec ses 134 colonnes géantes témoigne de la grandeur des pharaons du Nouvel Empire.",
    location: "Louxor, Égypte",
    rating: 4.8,
    price: "150 EGP",
    hours: "6h - 17h30",
    period: "Nouvel Empire",
    coordinates: { lat: 25.7188, lng: 32.6573 },
    highlights: ["Salle Hypostyle", "Avenue des Sphinx", "Lac Sacré", "Obélisque d'Hatchepsout"],
    visited: false,
    favorite: false
  },
  {
    id: 3,
    name: "Parthénon",
    type: "temple",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    description: "Temple dédié à la déesse Athéna, symbole de la Grèce antique et de la démocratie athénienne. Un chef-d'œuvre de l'architecture dorique classique.",
    location: "Athènes, Grèce",
    rating: 4.9,
    price: "20€",
    hours: "8h - 20h",
    period: "Grèce Classique",
    coordinates: { lat: 37.9715, lng: 23.7267 },
    highlights: ["Frises du Parthénon", "Propylées", "Érechthéion", "Temple d'Athéna Nikè"],
    visited: false,
    favorite: false
  },
  {
    id: 4,
    name: "Tombeau de Toutânkhamon",
    type: "tombeau",
    image: "https://images.unsplash.com/photo-1608328568889-e3d49b91b227?w=800&q=80",
    description: "Découvert intact en 1922 par Howard Carter, ce tombeau révéla le trésor le plus fabuleux de l'Égypte ancienne, dont le célèbre masque funéraire en or.",
    location: "Vallée des Rois, Égypte",
    rating: 4.9,
    price: "300 EGP",
    hours: "6h - 16h",
    period: "Nouvel Empire",
    coordinates: { lat: 25.7402, lng: 32.6014 },
    highlights: ["Fresques murales", "Sarcophage royal", "Antichambre", "Chambre funéraire"],
    visited: false,
    favorite: false,
    temporary: false
  },
  {
    id: 5,
    name: "Temple de Delphes",
    type: "temple",
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&q=80",
    description: "Centre religieux majeur de la Grèce antique, siège de l'Oracle de la Pythie. Les anciens Grecs considéraient Delphes comme le nombril du monde.",
    location: "Delphes, Grèce",
    rating: 4.7,
    price: "12€",
    hours: "8h - 20h",
    period: "Grèce Archaïque",
    coordinates: { lat: 38.4824, lng: 22.5010 },
    highlights: ["Temple d'Apollon", "Trésor des Athéniens", "Théâtre antique", "Stade"],
    visited: false,
    favorite: false
  },
  {
    id: 6,
    name: "Temple d'Abou Simbel",
    type: "temple",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    description: "Temples monumentaux creusés dans la roche par Ramsès II. Les quatre colosses de 20 mètres gardent l'entrée depuis plus de 3000 ans.",
    location: "Abou Simbel, Égypte",
    rating: 4.9,
    price: "240 EGP",
    hours: "5h - 18h",
    period: "Nouvel Empire",
    coordinates: { lat: 22.3372, lng: 31.6258 },
    highlights: ["Colosses de Ramsès II", "Temple de Néfertari", "Phénomène solaire", "Fresques intérieures"],
    visited: false,
    favorite: false
  },
  {
    id: 7,
    name: "Palais de Knossos",
    type: "palais",
    image: "https://images.unsplash.com/photo-1608328568889-e3d49b91b627?w=800&q=80",
    description: "Centre de la civilisation minoenne et légendaire labyrinthe du Minotaure. Les fresques colorées révèlent une culture raffinée vieille de 4000 ans.",
    location: "Crète, Grèce",
    rating: 4.6,
    price: "15€",
    hours: "8h - 19h",
    period: "Civilisation Minoenne",
    coordinates: { lat: 35.2978, lng: 25.1632 },
    highlights: ["Salle du Trône", "Fresques des Dauphins", "Cour centrale", "Magasins royaux"],
    visited: false,
    favorite: false
  },
  {
    id: 8,
    name: "Temple de Louxor",
    type: "temple",
    image: "https://images.unsplash.com/photo-1553913861-c69a8d8e8b55?w=800&q=80",
    description: "Dédié au dieu Amon, ce temple majestueux illuminé la nuit offre un spectacle saisissant. L'avenue des Sphinx le reliait autrefois à Karnak.",
    location: "Louxor, Égypte",
    rating: 4.8,
    price: "140 EGP",
    hours: "6h - 21h",
    period: "Nouvel Empire",
    coordinates: { lat: 25.6996, lng: 32.6390 },
    highlights: ["Obélisque", "Cour de Ramsès II", "Colonnade d'Aménophis III", "Sanctuaire"],
    visited: false,
    favorite: false
  },
  {
    id: 9,
    name: "Musée Archéologique d'Athènes",
    type: "musée",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    description: "La plus importante collection d'art grec antique au monde. Du masque d'Agamemnon aux bronzes de Poséidon, 5000 ans d'histoire grecque.",
    location: "Athènes, Grèce",
    rating: 4.8,
    price: "12€",
    hours: "8h - 20h (fermé lundi)",
    period: "Multi-périodes",
    coordinates: { lat: 37.9891, lng: 23.7314 },
    highlights: ["Masque d'Agamemnon", "Poséidon de l'Artémision", "Kouros de Sounion", "Fresque du Printemps"],
    visited: false,
    favorite: false
  },
  {
    id: 10,
    name: "Musée Égyptien du Caire",
    type: "musée",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&q=80",
    description: "Plus de 120 000 objets de l'Égypte ancienne, dont le trésor de Toutânkhamon avec son masque funéraire en or massif de 11 kg.",
    location: "Le Caire, Égypte",
    rating: 4.7,
    price: "200 EGP",
    hours: "9h - 17h",
    period: "Multi-périodes",
    coordinates: { lat: 30.0478, lng: 31.2336 },
    highlights: ["Masque de Toutânkhamon", "Momies royales", "Trône d'or", "Bijoux antiques"],
    visited: false,
    favorite: false
  },
  {
    id: 11,
    name: "Théâtre d'Épidaure",
    type: "monument",
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&q=80",
    description: "Le théâtre antique le mieux préservé, célèbre pour son acoustique parfaite. Une pièce de monnaie tombée au centre peut être entendue des derniers gradins.",
    location: "Épidaure, Grèce",
    rating: 4.8,
    price: "12€",
    hours: "8h - 20h",
    period: "Grèce Classique",
    coordinates: { lat: 37.5962, lng: 23.0794 },
    highlights: ["Acoustique exceptionnelle", "14 000 places", "Sanctuaire d'Asclépios", "Tholos"],
    visited: false,
    favorite: false
  },
  {
    id: 12,
    name: "Temple de Philae",
    type: "temple",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
    description: "Dédié à la déesse Isis, ce temple fut déplacé pierre par pierre pour échapper aux eaux du lac Nasser. Un miracle de préservation archéologique.",
    location: "Assouan, Égypte",
    rating: 4.7,
    price: "180 EGP",
    hours: "7h - 16h",
    period: "Période Ptolémaïque",
    coordinates: { lat: 24.0244, lng: 32.8841 },
    highlights: ["Temple d'Isis", "Kiosque de Trajan", "Mammisi", "Son et lumière"],
    visited: false,
    favorite: false
  }
];

/**
 * Types de lieux disponibles pour le filtrage
 */
export const placeTypes = [
  { id: 'all', label: 'Tous', color: 'bg-night-600' },
  { id: 'pyramide', label: 'Pyramides', color: 'bg-gold-500' },
  { id: 'temple', label: 'Temples', color: 'bg-turquoise-500' },
  { id: 'tombeau', label: 'Tombeaux', color: 'bg-terracotta-500' },
  { id: 'palais', label: 'Palais', color: 'bg-gold-600' },
  { id: 'musée', label: 'Musées', color: 'bg-night-400' },
  { id: 'monument', label: 'Monuments', color: 'bg-sand-500' }
];

/**
 * Récupère les couleurs du badge selon le type
 */
export const getTypeBadgeColor = (type) => {
  const colors = {
    'pyramide': 'bg-gold-500/80',
    'temple': 'bg-turquoise-500/80',
    'tombeau': 'bg-terracotta-500/80',
    'palais': 'bg-gold-600/80',
    'musée': 'bg-night-400/80',
    'monument': 'bg-sand-500/80'
  };
  return colors[type] || 'bg-night-600/80';
};
