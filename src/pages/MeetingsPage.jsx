import { useState, useEffect, useRef } from 'react';
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
    <div className="min-h-screen pt-20 pb-24 md:pb-8" style={{ backgroundColor: '#0a0d1a' }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative px-6 py-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4a574]/30 via-[#d4a574]/20 to-[#d4a574]/30 rounded-lg" />
              <div className="absolute inset-0 border border-[#d4a574]/60 rounded-lg" />
              <p className="relative text-sm uppercase tracking-[0.3em] text-[#d4a574] font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" />
                Rencontres
              </p>
            </div>
          </div>
          <h1 className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#d4a574' }}>
            Trouvez des compagnons de visite
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ne visitez plus seul ! Rencontrez des passionnés de culture et partagez vos découvertes.
          </p>
        </div>

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

        {/* Section d'aide / Comment ça marche */}
        {!selectedPlace && !searchQuery && (
          <div className="mt-16 bg-[#1a1a2e] rounded-3xl p-8">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Comment ça marche ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-[#d4a574]" />
                </div>
                <h3 className="text-white font-semibold mb-2">1. Recherchez un lieu</h3>
                <p className="text-gray-400 text-sm">
                  Trouvez le musée, château ou exposition que vous souhaitez visiter.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#d4a574]" />
                </div>
                <h3 className="text-white font-semibold mb-2">2. Découvrez les profils</h3>
                <p className="text-gray-400 text-sm">
                  Consultez les profils des personnes disponibles et leurs centres d'intérêt.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-[#d4a574]" />
                </div>
                <h3 className="text-white font-semibold mb-2">3. Échangez et planifiez</h3>
                <p className="text-gray-400 text-sm">
                  Discutez et organisez votre visite ensemble pour une expérience enrichissante.
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
