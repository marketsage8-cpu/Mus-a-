import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Users, MessageCircle, X, Send, Calendar, Clock, ChevronLeft, Star } from 'lucide-react';
import { places } from '../data/places';
import { frenchMuseums } from '../data/frenchMuseums';

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

  // Filtrer les lieux selon la recherche
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const filtered = allPlaces.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.city?.toLowerCase().includes(query) ||
        place.region?.toLowerCase().includes(query) ||
        place.type.toLowerCase().includes(query)
      );
      setFilteredPlaces(filtered.slice(0, 10));
    } else {
      setFilteredPlaces([]);
    }
  }, [searchQuery]);

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
    <div className="min-h-screen pt-20 pb-24 md:pb-8" style={{ backgroundColor: '#0c0c0c' }}>
      {/* Hero Header */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1920&h=600&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/50 via-[#0c0c0c]/80 to-[#0c0c0c]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e07a5f]/15 border border-[#e07a5f]/30 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#e07a5f]" />
              <span className="text-[#e07a5f] text-sm font-medium font-serif-italic">Partagez vos visites culturelles</span>
            </div>

            <h1
              className="font-serif-italic text-4xl md:text-5xl lg:text-6xl mb-4"
              style={{ color: '#e07a5f' }}
            >
              Trouvez des compagnons de visite
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: '#9ca3af' }}
            >
              Ne visitez plus seul ! Rencontrez des passionnés de culture et partagez vos découvertes.
            </p>
          </div>

          {/* Barre de recherche */}
          {!selectedPlace && (
            <div className="max-w-3xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un musée, un château, une église..."
                  className="w-full py-4 pl-14 pr-12 bg-stone-800/50 border border-stone-700/50 rounded-2xl text-[#f5f0e6] placeholder-stone-500 focus:outline-none focus:border-[#e07a5f]/50 focus:ring-2 focus:ring-[#e07a5f]/20 transition-all text-lg font-body"
                />
                {searchQuery && (
                  <button
                    onClick={() => { setSearchQuery(''); setFilteredPlaces([]); }}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-amber-50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Dropdown des résultats de recherche */}
              {searchQuery && !selectedPlace && filteredPlaces.length > 0 && (
                <div
                  className="absolute left-0 right-0 mt-2 bg-stone-900 border border-stone-700/50 rounded-xl shadow-2xl z-50 max-h-[70vh] overflow-y-auto"
                  style={{ animation: 'fadeInUp 0.4s ease-out 0.2s both' }}
                >
                  {filteredPlaces.map((place) => (
                    <button
                      key={place.id}
                      onClick={() => handleSelectPlace(place)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-stone-800/50 transition-colors text-left"
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="font-display font-semibold text-[#f5f0e6]">{place.name}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-400 mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span>{place.city}{place.region ? `, ${place.region}` : ''}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {placeMeetups[place.id]?.length || 0} disponibles
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Message si aucun résultat */}
              {searchQuery && !selectedPlace && filteredPlaces.length === 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-stone-900 border border-stone-700/50 rounded-xl p-6 text-center z-50">
                  <p className="text-stone-400">Aucun lieu trouvé pour "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Section par défaut - Lieux populaires */}
      {!selectedPlace && (
        <div
          className={`transition-all duration-500 ease-out overflow-hidden ${
            searchQuery
              ? 'opacity-0 max-h-0 scale-95'
              : 'opacity-100 max-h-[3000px] scale-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-[#f5f0e6] mb-3">
                Lieux <span className="text-[#e07a5f]">populaires</span>
              </h2>
              <p className="text-[#c4b69c]/70 font-body">
                Les destinations les plus prisées pour faire des rencontres culturelles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allPlaces.slice(0, 8).map((place) => (
                <button
                  key={place.id}
                  onClick={() => handleSelectPlace(place)}
                  className="group relative bg-stone-800/30 border border-stone-700/30 rounded-2xl overflow-hidden hover:border-[#e07a5f]/30 transition-all duration-300 text-left"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

                    <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-[#e07a5f] to-[#e8968a] rounded-full">
                      <span className="text-[#0a0f1a] text-xs font-semibold flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {placeMeetups[place.id]?.length || 0}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-display font-semibold text-[#f5f0e6] mb-2 group-hover:text-[#e07a5f] transition-colors">
                      {place.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-stone-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {place.city || place.location?.split(',')[0]}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Section Profils en vedette */}
            <div className="mt-16">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl font-bold text-[#f5f0e6] mb-3">
                  Nos <span className="text-[#e07a5f]">passionnés</span> de culture
                </h2>
                <p className="text-[#c4b69c]/70 font-body">
                  Des visiteurs triés sur le volet pour des expériences uniques
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {meetupUsers.slice(0, 8).map((user) => (
                  <div
                    key={user.id}
                    className="group text-center p-6 bg-stone-800/20 border border-stone-700/30 rounded-2xl hover:border-[#e07a5f]/30 transition-all"
                  >
                    <div className="relative inline-block mb-4">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-[#e07a5f]/30 group-hover:border-[#e07a5f] transition-colors"
                      />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gradient-to-r from-[#e07a5f] to-[#e8968a] rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#0a0f1a] fill-[#0a0f1a]" />
                        <span className="text-[#0a0f1a] text-xs font-bold">{user.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-display font-semibold text-[#f5f0e6]">{user.name}</h4>
                    <p className="text-[#e07a5f] text-sm font-serif-italic">{user.interests[0]}</p>
                    <p className="text-stone-500 text-xs mt-1">{user.visitCount} visites</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Lieu sélectionné - Liste des profils */}
        {selectedPlace && !showConversation && (
          <div className="animate-fade-in py-8">
            {/* Header du lieu */}
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-[#e07a5f] hover:text-[#f0a090] mb-6 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Retour à la recherche
            </button>

            <div className="bg-stone-800/30 border border-stone-700/30 rounded-2xl overflow-hidden mb-8">
              <div className="relative h-48 sm:h-64">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#e07a5f] to-[#e8968a] text-[#0a0f1a] text-xs font-semibold rounded-full uppercase mb-2 inline-block">
                    {selectedPlace.type}
                  </span>
                  <h2 className="text-[#f5f0e6] text-2xl sm:text-3xl font-display font-bold">{selectedPlace.name}</h2>
                  <p className="text-stone-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {selectedPlace.city}{selectedPlace.region ? `, ${selectedPlace.region}` : (selectedPlace.location || '')}
                  </p>
                </div>
              </div>
            </div>

            {/* Liste des profils disponibles */}
            <div>
              <h3 className="text-[#f5f0e6] text-xl font-display font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#e07a5f]" />
                {placeMeetups[selectedPlace.id]?.length || 0} personnes disponibles pour une visite
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {placeMeetups[selectedPlace.id]?.map(user => (
                  <div
                    key={user.id}
                    className="bg-stone-800/30 rounded-2xl p-5 border border-stone-700/30 hover:border-[#e07a5f]/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#e07a5f]/30"
                        />
                        {user.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-stone-900">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Infos */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[#f5f0e6] font-semibold">{user.name}, {user.age} ans</h4>
                          <div className="flex items-center gap-1 text-[#e07a5f] text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            {user.rating}
                          </div>
                        </div>
                        <p className="text-stone-400 text-sm mt-1 line-clamp-2">{user.bio}</p>

                        {/* Tags d'intérêts */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {user.interests.slice(0, 3).map((interest, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-[#e07a5f]/10 text-[#e07a5f] text-xs rounded-full">
                              {interest}
                            </span>
                          ))}
                        </div>

                        {/* Disponibilité */}
                        <div className="flex items-center gap-4 mt-3 text-sm">
                          <span className="text-stone-400 flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-[#e07a5f]" />
                            {user.availableDate}
                          </span>
                          <span className="text-stone-400 flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#e07a5f]" />
                            {user.availableTime}
                          </span>
                        </div>

                        {/* Stats */}
                        <p className="text-stone-500 text-xs mt-2">
                          {user.visitCount} visites effectuées
                        </p>
                      </div>
                    </div>

                    {/* Bouton de contact */}
                    <button
                      onClick={() => startConversation(user)}
                      className="w-full mt-4 py-3 bg-gradient-to-r from-[#e07a5f] to-[#e8968a] hover:from-[#f09a8a] hover:to-[#e07a5f] text-[#0a0f1a] font-semibold rounded-xl flex items-center justify-center gap-2 transition-all"
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
          <div className="animate-fade-in py-8">
            {/* Header conversation */}
            <div className="bg-stone-800/30 rounded-t-2xl p-4 border-b border-stone-700/30">
              <div className="flex items-center gap-4">
                <button
                  onClick={goBack}
                  className="p-2 hover:bg-stone-700/50 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-[#f5f0e6]" />
                </button>
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#e07a5f]/30"
                />
                <div className="flex-1">
                  <h3 className="text-[#f5f0e6] font-semibold">{selectedUser.name}</h3>
                  <p className="text-stone-400 text-sm">
                    Visite prévue : {selectedPlace.name}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#e07a5f]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{selectedUser.rating}</span>
                </div>
              </div>
            </div>

            {/* Zone de messages */}
            <div className="bg-stone-900/50 h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.sender === 'me'
                        ? 'bg-gradient-to-r from-[#e07a5f] to-[#e8968a] text-[#0a0f1a]'
                        : 'bg-stone-800/50 text-[#f5f0e6]'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'me' ? 'text-[#0a0f1a]/60' : 'text-stone-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input message */}
            <form onSubmit={sendMessage} className="bg-stone-800/30 rounded-b-2xl p-4 border-t border-stone-700/30">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 py-3 px-4 bg-stone-900/50 border border-stone-700/50 rounded-xl text-[#f5f0e6] placeholder-stone-500 focus:outline-none focus:border-[#e07a5f]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="p-3 bg-gradient-to-r from-[#e07a5f] to-[#e8968a] hover:from-[#f09a8a] hover:to-[#e07a5f] rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5 text-[#0a0f1a]" />
                </button>
              </div>
            </form>

            {/* Info lieu */}
            <div className="mt-4 bg-stone-800/30 border border-stone-700/30 rounded-2xl p-4 flex items-center gap-4">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <span className="px-2 py-0.5 bg-[#e07a5f]/20 text-[#e07a5f] text-xs rounded-full uppercase">
                  {selectedPlace.type}
                </span>
                <h4 className="text-[#f5f0e6] font-semibold mt-1">{selectedPlace.name}</h4>
                <p className="text-stone-400 text-sm flex items-center gap-1">
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
