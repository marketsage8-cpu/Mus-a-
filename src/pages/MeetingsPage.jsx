import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Users, MessageCircle, X, Send, Heart, Calendar, Clock, ChevronLeft, Star, User, Filter, ChevronDown } from 'lucide-react';
import { places } from '../data/places';
import { frenchMuseums, frenchRegions, placeTypes } from '../data/frenchMuseums';

/**
 * Données fictives des utilisateurs cherchant des compagnons de visite
 */
const meetupUsers = [
  {
    id: 1,
    name: "Marie Dupont",
    age: 28,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    bio: "Passionnée d'art impressionniste et d'histoire. J'adore découvrir les musées en bonne compagnie !",
    interests: ["Impressionnisme", "Art moderne", "Histoire"],
    visitCount: 45,
    rating: 4.8,
    verified: true
  },
  {
    id: 2,
    name: "Thomas Bernard",
    age: 34,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    bio: "Guide amateur, je connais Paris comme ma poche. Toujours partant pour partager mes connaissances.",
    interests: ["Architecture", "Renaissance", "Châteaux"],
    visitCount: 120,
    rating: 4.9,
    verified: true
  },
  {
    id: 3,
    name: "Sophie Martin",
    age: 25,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    bio: "Étudiante en histoire de l'art, je cherche des personnes pour visiter les expositions temporaires.",
    interests: ["Art contemporain", "Photographie", "Sculpture"],
    visitCount: 32,
    rating: 4.7,
    verified: true
  },
  {
    id: 4,
    name: "Lucas Petit",
    age: 31,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    bio: "Photographe amateur, j'aime capturer la beauté des musées. Cherche compagnons de visite calmes.",
    interests: ["Photographie", "Art classique", "Antiquités"],
    visitCount: 67,
    rating: 4.6,
    verified: false
  },
  {
    id: 5,
    name: "Emma Rousseau",
    age: 29,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    bio: "Expatriée revenue en France, je redécouvre le patrimoine français avec émerveillement.",
    interests: ["Patrimoine", "Châteaux", "Jardins"],
    visitCount: 23,
    rating: 4.9,
    verified: true
  },
  {
    id: 6,
    name: "Antoine Leroy",
    age: 42,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    bio: "Professeur d'histoire, je peux partager des anecdotes fascinantes sur chaque lieu visité.",
    interests: ["Histoire", "Moyen-Âge", "Révolution"],
    visitCount: 89,
    rating: 5.0,
    verified: true
  },
  {
    id: 7,
    name: "Chloé Blanc",
    age: 26,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    bio: "Nouvelle à Paris, j'aimerais rencontrer des personnes pour explorer ensemble les trésors culturels.",
    interests: ["Découverte", "Art", "Rencontres"],
    visitCount: 8,
    rating: 4.5,
    verified: true
  },
  {
    id: 8,
    name: "Pierre Moreau",
    age: 55,
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80",
    bio: "Retraité passionné de culture, je cherche des compagnons pour des visites tranquilles.",
    interests: ["Peinture classique", "Opéra", "Sculpture"],
    visitCount: 156,
    rating: 4.8,
    verified: true
  }
];

/**
 * Combiner les places existantes avec la nouvelle base de données française
 */
const allPlaces = [
  ...places.map(p => ({
    id: p.id,
    name: p.name,
    type: p.type,
    city: p.location.split(',')[0].trim(),
    region: p.location.split(',')[1]?.trim() || 'France',
    image: p.image
  })),
  ...frenchMuseums
];

/**
 * Association lieu -> utilisateurs disponibles
 */
const generatePlaceMeetups = () => {
  const placeMeetups = {};
  allPlaces.forEach(place => {
    // Chaque lieu a entre 2 et 6 utilisateurs disponibles aléatoirement
    const numUsers = Math.floor(Math.random() * 5) + 2;
    const shuffled = [...meetupUsers].sort(() => 0.5 - Math.random());
    placeMeetups[place.id] = shuffled.slice(0, numUsers).map(user => ({
      ...user,
      availableDate: getRandomDate(),
      availableTime: getRandomTime(),
      message: getRandomMessage(place.name)
    }));
  });
  return placeMeetups;
};

const getRandomDate = () => {
  const dates = ["Aujourd'hui", "Demain", "Ce week-end", "Samedi prochain", "Dimanche"];
  return dates[Math.floor(Math.random() * dates.length)];
};

const getRandomTime = () => {
  const times = ["10h00", "11h00", "14h00", "15h00", "16h00"];
  return times[Math.floor(Math.random() * times.length)];
};

const getRandomMessage = (placeName) => {
  const messages = [
    `Je prévois une visite complète, environ 2-3h.`,
    `Première visite ici, très enthousiaste !`,
    `Je connais bien ce lieu, je peux faire guide.`,
    `Visite détendue, à notre rythme.`,
    `J'aimerais prendre des photos ensemble.`
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

// Générer les meetups une seule fois
const placeMeetups = generatePlaceMeetups();

/**
 * Page Rencontres - Trouver des compagnons de visite
 */
const MeetingsPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConversation, setShowConversation] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const messagesEndRef = useRef(null);

  // Pré-sélectionner le lieu depuis l'URL
  useEffect(() => {
    const placeParam = searchParams.get('place');
    if (placeParam && !selectedPlace) {
      const foundPlace = allPlaces.find(p =>
        p.name.toLowerCase() === placeParam.toLowerCase() ||
        p.name.toLowerCase().includes(placeParam.toLowerCase())
      );
      if (foundPlace) {
        setSelectedPlace(foundPlace);
      }
    }
  }, [searchParams]);

  // Filtrer les lieux selon la recherche, région et type
  useEffect(() => {
    if (searchQuery.trim() || selectedRegion || selectedType) {
      const query = searchQuery.toLowerCase();
      const filtered = allPlaces.filter(place => {
        const matchesQuery = !searchQuery.trim() ||
          place.name.toLowerCase().includes(query) ||
          place.city?.toLowerCase().includes(query) ||
          place.region?.toLowerCase().includes(query) ||
          place.type.toLowerCase().includes(query);
        const matchesRegion = !selectedRegion || place.region === selectedRegion;
        const matchesType = !selectedType || place.type === selectedType;
        return matchesQuery && matchesRegion && matchesType;
      });
      setFilteredPlaces(filtered.slice(0, 20));
    } else {
      setFilteredPlaces([]);
    }
  }, [searchQuery, selectedRegion, selectedType]);

  // Scroll vers le bas des messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Sélectionner un lieu
  const handleSelectPlace = (place) => {
    setSelectedPlace(place);
    setSearchQuery('');
    setFilteredPlaces([]);
    setSelectedUser(null);
    setShowConversation(false);
  };

  // Démarrer une conversation
  const startConversation = (user) => {
    setSelectedUser(user);
    setShowConversation(true);
    // Messages initiaux
    setMessages([
      {
        id: 1,
        sender: 'them',
        text: `Bonjour ! Je suis disponible ${user.availableDate} à ${user.availableTime} pour visiter ${selectedPlace.name}. ${user.message}`,
        time: 'Maintenant'
      }
    ]);
  };

  // Envoyer un message
  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'me',
      text: newMessage,
      time: 'À l\'instant'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Réponse automatique après 1.5s
    setTimeout(() => {
      const responses = [
        "Super ! J'ai hâte de faire cette visite ensemble.",
        "Parfait, on se retrouve à l'entrée principale ?",
        "Génial ! N'hésite pas si tu as des questions.",
        "D'accord ! Tu as déjà visité ce lieu avant ?",
        "Excellente idée ! On pourra prendre un café après si tu veux."
      ];
      const autoResponse = {
        id: messages.length + 2,
        sender: 'them',
        text: responses[Math.floor(Math.random() * responses.length)],
        time: 'À l\'instant'
      };
      setMessages(prev => [...prev, autoResponse]);
    }, 1500);
  };

  // Retour à la sélection
  const goBack = () => {
    if (showConversation) {
      setShowConversation(false);
      setSelectedUser(null);
    } else if (selectedPlace) {
      setSelectedPlace(null);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 relative overflow-hidden" style={{ backgroundColor: '#1a1f2e' }}>
      {/* Fond décoratif avec motifs tapisserie 19ème siècle - Style victorien */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Fond base avec teinte chaude */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a3a] via-[#252535] to-[#1a1f2e]" />

        {/* Motifs tapisserie style 19ème siècle - Damassé victorien */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            {/* Gradients dorés riches */}
            <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a574" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c9956c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d4a574" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e8c9a0" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#d4a574" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#b8956a" stopOpacity="0.35" />
            </linearGradient>

            {/* Motif damassé principal - Style William Morris */}
            <pattern id="damaskVictorian" x="0" y="0" width="160" height="200" patternUnits="userSpaceOnUse">
              {/* Médaillon central orné */}
              <ellipse cx="80" cy="100" rx="45" ry="55" fill="none" stroke="url(#goldGradient1)" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="80" cy="100" rx="35" ry="42" fill="none" stroke="#d4a574" strokeWidth="0.8" opacity="0.4" />

              {/* Fleur de lys centrale */}
              <path d="M80,55 Q92,75 80,95 Q68,75 80,55" fill="url(#goldGradient2)" stroke="#d4a574" strokeWidth="1" opacity="0.6" />
              <path d="M80,95 L80,120" stroke="#d4a574" strokeWidth="1.2" opacity="0.5" />
              <path d="M70,105 Q80,115 90,105" fill="none" stroke="#d4a574" strokeWidth="1" opacity="0.45" />
              <circle cx="80" cy="125" r="4" fill="#d4a574" opacity="0.35" />

              {/* Feuilles d'acanthe stylisées */}
              <path d="M30,100 Q50,80 65,100 Q50,115 35,100 Q45,100 30,100" fill="url(#goldGradient1)" stroke="#d4a574" strokeWidth="0.8" opacity="0.45" />
              <path d="M130,100 Q110,80 95,100 Q110,115 125,100 Q115,100 130,100" fill="url(#goldGradient1)" stroke="#d4a574" strokeWidth="0.8" opacity="0.45" />

              {/* Volutes et arabesques */}
              <path d="M25,50 Q45,35 55,55 Q45,60 35,55 C30,52 25,55 25,50" fill="none" stroke="#d4a574" strokeWidth="1" opacity="0.4" />
              <path d="M135,50 Q115,35 105,55 Q115,60 125,55 C130,52 135,55 135,50" fill="none" stroke="#d4a574" strokeWidth="1" opacity="0.4" />
              <path d="M25,150 Q45,165 55,145 Q45,140 35,145 C30,148 25,145 25,150" fill="none" stroke="#d4a574" strokeWidth="1" opacity="0.4" />
              <path d="M135,150 Q115,165 105,145 Q115,140 125,145 C130,148 135,145 135,150" fill="none" stroke="#d4a574" strokeWidth="1" opacity="0.4" />

              {/* Motifs de connexion verticaux */}
              <path d="M80,0 L80,35 M80,165 L80,200" stroke="#d4a574" strokeWidth="0.8" opacity="0.3" />
              <circle cx="80" cy="20" r="6" fill="none" stroke="#d4a574" strokeWidth="0.8" opacity="0.35" />
              <circle cx="80" cy="180" r="6" fill="none" stroke="#d4a574" strokeWidth="0.8" opacity="0.35" />

              {/* Ornements des coins */}
              <path d="M10,10 Q25,20 20,35 M150,10 Q135,20 140,35" fill="none" stroke="#d4a574" strokeWidth="0.6" opacity="0.3" />
              <path d="M10,190 Q25,180 20,165 M150,190 Q135,180 140,165" fill="none" stroke="#d4a574" strokeWidth="0.6" opacity="0.3" />

              {/* Petites rosaces décoratives */}
              <circle cx="20" cy="100" r="8" fill="none" stroke="#d4a574" strokeWidth="0.8" opacity="0.35" />
              <circle cx="140" cy="100" r="8" fill="none" stroke="#d4a574" strokeWidth="0.8" opacity="0.35" />
              <circle cx="20" cy="100" r="3" fill="#d4a574" opacity="0.25" />
              <circle cx="140" cy="100" r="3" fill="#d4a574" opacity="0.25" />
            </pattern>

            {/* Motif de bordure grecque/victorienne */}
            <pattern id="victorianBorder" x="0" y="0" width="80" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q10,2 20,10 Q30,18 40,10 Q50,2 60,10 Q70,18 80,10" fill="none" stroke="#d4a574" strokeWidth="1.2" opacity="0.35" />
              <circle cx="20" cy="10" r="2.5" fill="#d4a574" opacity="0.3" />
              <circle cx="60" cy="10" r="2.5" fill="#d4a574" opacity="0.3" />
            </pattern>

            {/* Fines rayures verticales de soie */}
            <pattern id="silkStripes" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="30" stroke="#d4a574" strokeWidth="0.5" opacity="0.12" />
              <line x1="15" y1="0" x2="15" y2="30" stroke="#d4a574" strokeWidth="0.3" opacity="0.08" />
              <line x1="30" y1="0" x2="30" y2="30" stroke="#d4a574" strokeWidth="0.5" opacity="0.12" />
            </pattern>
          </defs>

          {/* Couche de rayures de soie */}
          <rect width="100%" height="100%" fill="url(#silkStripes)" />
          {/* Couche de motifs damassés */}
          <rect width="100%" height="100%" fill="url(#damaskVictorian)" />
          {/* Bordures ornementales en haut et en bas */}
          <rect x="0" y="80" width="100%" height="20" fill="url(#victorianBorder)" />
          <rect x="0" y="0" width="100%" height="20" fill="url(#victorianBorder)" opacity="0.5" />
        </svg>

        {/* Effet vignette subtil pour profondeur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e]/30 via-transparent to-[#1a1f2e]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e]/20 via-transparent to-[#1a1f2e]/20" />
      </div>

      {/* Hero Section avec photo en fond */}
      <div className="relative z-10">
        {/* Photo en arrière-plan plein écran */}
        <div className="absolute inset-0 h-[50vh] min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?w=1200&q=80"
            alt="Visiteurs admirant des œuvres au musée"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e]/50 via-[#1a1f2e]/30 to-[#1a1f2e]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e]/20 via-transparent to-[#1a1f2e]/20" />
        </div>

        {/* Contenu du header */}
        <div className="relative max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8 pt-8">
            <h1 className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl mb-4 drop-shadow-lg" style={{ color: '#d4a574' }}>
              Trouvez des compagnons de visite
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg drop-shadow-md">
              Ne visitez plus seul ! Rencontrez des passionnés de culture et partagez vos découvertes.
            </p>
            {/* Citation */}
            <div className="mt-12 mb-8">
              <p className="text-[#d4a574] font-serif-italic text-xl sm:text-2xl drop-shadow-lg">
                "L'art est le plus beau des partages"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10" style={{ marginTop: '25vh' }}>

        {/* Barre de recherche et filtres */}
        {!selectedPlace && (
          <div className="max-w-4xl mx-auto mb-12">
            {/* Barre de recherche principale */}
            <div className="relative mb-4">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher parmi 250+ musées et châteaux de France..."
                className="w-full py-4 px-6 pl-14 pr-14 bg-[#1a1a2e] border border-[#d4a574]/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 transition-all"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${showFilters ? 'bg-[#d4a574] text-[#1a1a2e]' : 'bg-white/10 text-gray-400 hover:text-white'}`}
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>

            {/* Filtres déroulants */}
            {showFilters && (
              <div className="flex flex-wrap gap-4 mb-4 p-4 bg-[#1a1a2e]/50 rounded-xl border border-[#d4a574]/20 animate-fade-in">
                {/* Filtre par région */}
                <div className="flex-1 min-w-[200px]">
                  <label className="text-gray-400 text-xs mb-1 block">Région</label>
                  <div className="relative">
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full py-3 px-4 pr-10 bg-[#1a1a2e] border border-[#d4a574]/30 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-[#d4a574]"
                    >
                      <option value="">Toutes les régions</option>
                      {frenchRegions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Filtre par type */}
                <div className="flex-1 min-w-[200px]">
                  <label className="text-gray-400 text-xs mb-1 block">Type de lieu</label>
                  <div className="relative">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full py-3 px-4 pr-10 bg-[#1a1a2e] border border-[#d4a574]/30 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-[#d4a574]"
                    >
                      <option value="">Tous les types</option>
                      {placeTypes.map(type => (
                        <option key={type} value={type} className="capitalize">{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Bouton réinitialiser */}
                {(selectedRegion || selectedType) && (
                  <button
                    onClick={() => { setSelectedRegion(''); setSelectedType(''); }}
                    className="self-end py-3 px-4 text-[#d4a574] hover:text-white transition-colors"
                  >
                    Réinitialiser
                  </button>
                )}
              </div>
            )}

            {/* Compteur de résultats */}
            {(searchQuery || selectedRegion || selectedType) && filteredPlaces.length > 0 && (
              <p className="text-gray-400 text-sm mb-2">
                {filteredPlaces.length} lieu{filteredPlaces.length > 1 ? 'x' : ''} trouvé{filteredPlaces.length > 1 ? 's' : ''}
              </p>
            )}

            {/* Résultats de recherche */}
            {filteredPlaces.length > 0 && (
              <div className="bg-[#1a1a2e] border border-[#d4a574]/30 rounded-2xl overflow-hidden shadow-2xl max-h-[500px] overflow-y-auto">
                {filteredPlaces.map(place => (
                  <button
                    key={place.id}
                    onClick={() => handleSelectPlace(place)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-[#d4a574]/10 transition-colors text-left border-b border-white/5 last:border-b-0"
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{place.name}</h3>
                      <p className="text-gray-400 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {place.city}{place.region ? `, ${place.region}` : ''}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-[#d4a574]/20 text-[#d4a574] text-xs rounded-full capitalize">
                          {place.type}
                        </span>
                        <span className="text-gray-500 text-xs flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {placeMeetups[place.id]?.length || 0} personnes disponibles
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Message si pas de résultat */}
            {(searchQuery || selectedRegion || selectedType) && filteredPlaces.length === 0 && (
              <div className="bg-[#1a1a2e] border border-[#d4a574]/30 rounded-2xl p-6 text-center">
                <p className="text-gray-400">Aucun lieu trouvé avec ces critères</p>
              </div>
            )}

            {/* Section Comment ça marche - version compacte */}
            <div className="mt-6 bg-[#1a1a2e]/60 backdrop-blur-sm border border-[#d4a574]/20 rounded-2xl p-4">
              <h2 className="text-white text-lg font-semibold mb-3 text-center">Comment ça marche ?</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4a574]/20 border border-[#d4a574]/30 flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">1. Recherchez</h3>
                    <p className="text-gray-400 text-xs">Trouvez un lieu</p>
                  </div>
                </div>
                <div className="hidden md:block text-[#d4a574]/40">→</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4a574]/20 border border-[#d4a574]/30 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">2. Découvrez</h3>
                    <p className="text-gray-400 text-xs">Les profils disponibles</p>
                  </div>
                </div>
                <div className="hidden md:block text-[#d4a574]/40">→</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4a574]/20 border border-[#d4a574]/30 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">3. Échangez</h3>
                    <p className="text-gray-400 text-xs">Planifiez votre visite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Suggestions populaires */}
        {!selectedPlace && !searchQuery && !selectedRegion && !selectedType && (
          <div className="mb-12">
            <h2 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#d4a574]" />
              Lieux populaires pour les rencontres
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Plus de 250 musées, châteaux et monuments à découvrir en France
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allPlaces.slice(0, 9).map(place => (
                <button
                  key={place.id}
                  onClick={() => handleSelectPlace(place)}
                  className="relative rounded-2xl overflow-hidden group h-48 text-left"
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{place.name}</h3>
                    <p className="text-gray-300 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {place.city}{place.region ? `, ${place.region}` : ''}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-[#d4a574] text-[#1a1a2e] text-xs font-semibold rounded-full flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {placeMeetups[place.id]?.length || 0} disponibles
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lieu sélectionné - Liste des profils */}
        {selectedPlace && !showConversation && (
          <div className="animate-fade-in">
            {/* Header du lieu */}
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-[#d4a574] hover:text-[#e5b685] mb-6 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Retour à la recherche
            </button>

            <div className="bg-[#1a1a2e] rounded-3xl overflow-hidden mb-8">
              <div className="relative h-48 sm:h-64">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="px-3 py-1 bg-[#d4a574] text-[#1a1a2e] text-xs font-semibold rounded-full uppercase mb-2 inline-block">
                    {selectedPlace.type}
                  </span>
                  <h2 className="text-white text-2xl sm:text-3xl font-bold">{selectedPlace.name}</h2>
                  <p className="text-gray-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {selectedPlace.city}{selectedPlace.region ? `, ${selectedPlace.region}` : (selectedPlace.location || '')}
                  </p>
                </div>
              </div>
            </div>

            {/* Liste des profils disponibles */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#d4a574]" />
                {placeMeetups[selectedPlace.id]?.length || 0} personnes disponibles pour une visite
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {placeMeetups[selectedPlace.id]?.map(user => (
                  <div
                    key={user.id}
                    className="bg-[#1a1a2e] rounded-2xl p-5 border border-white/10 hover:border-[#d4a574]/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#d4a574]"
                        />
                        {user.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#1a1a2e]">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Infos */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-semibold">{user.name}, {user.age} ans</h4>
                          <div className="flex items-center gap-1 text-yellow-400 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            {user.rating}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{user.bio}</p>

                        {/* Tags d'intérêts */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {user.interests.slice(0, 3).map((interest, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-[#d4a574]/10 text-[#d4a574] text-xs rounded-full">
                              {interest}
                            </span>
                          ))}
                        </div>

                        {/* Disponibilité */}
                        <div className="flex items-center gap-4 mt-3 text-sm">
                          <span className="text-gray-400 flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-[#d4a574]" />
                            {user.availableDate}
                          </span>
                          <span className="text-gray-400 flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#d4a574]" />
                            {user.availableTime}
                          </span>
                        </div>

                        {/* Stats */}
                        <p className="text-gray-500 text-xs mt-2">
                          {user.visitCount} visites effectuées
                        </p>
                      </div>
                    </div>

                    {/* Bouton de contact */}
                    <button
                      onClick={() => startConversation(user)}
                      className="w-full mt-4 py-3 bg-[#d4a574] hover:bg-[#c49464] text-[#1a1a2e] font-semibold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Envoyer un message
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Conversation */}
        {showConversation && selectedUser && (
          <div className="animate-fade-in">
            {/* Header conversation */}
            <div className="bg-[#1a1a2e] rounded-t-3xl p-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={goBack}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#d4a574]"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{selectedUser.name}</h3>
                  <p className="text-gray-400 text-sm">
                    Visite prévue : {selectedPlace.name}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{selectedUser.rating}</span>
                </div>
              </div>
            </div>

            {/* Zone de messages */}
            <div className="bg-[#151525] h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.sender === 'me'
                        ? 'bg-[#d4a574] text-[#1a1a2e]'
                        : 'bg-[#1a1a2e] text-white'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'me' ? 'text-[#1a1a2e]/60' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input message */}
            <form onSubmit={sendMessage} className="bg-[#1a1a2e] rounded-b-3xl p-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 py-3 px-4 bg-[#0a0d1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] transition-colors"
                />
                <button
                  type="submit"
                  className="p-3 bg-[#d4a574] hover:bg-[#c49464] rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5 text-[#1a1a2e]" />
                </button>
              </div>
            </form>

            {/* Info lieu */}
            <div className="mt-4 bg-[#1a1a2e] rounded-2xl p-4 flex items-center gap-4">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <span className="px-2 py-0.5 bg-[#d4a574]/20 text-[#d4a574] text-xs rounded-full uppercase">
                  {selectedPlace.type}
                </span>
                <h4 className="text-white font-semibold mt-1">{selectedPlace.name}</h4>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {selectedUser.availableDate} à {selectedUser.availableTime}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MeetingsPage;
