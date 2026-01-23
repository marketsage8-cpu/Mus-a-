import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Clock, Calendar, Euro, Star, User, ChevronLeft, ChevronDown, Filter, MessageCircle, CheckCircle } from 'lucide-react';
import { places } from '../data/places';
import { frenchMuseums, frenchRegions } from '../data/frenchMuseums';

/**
 * Données des guides professionnels
 */
const guidesData = [
  {
    id: 1,
    name: "Jean-Pierre Delacroix",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    specialty: "Art Renaissance & Classique",
    bio: "Historien de l'art diplômé de la Sorbonne avec 15 ans d'expérience. Passionné par les grands maîtres de la Renaissance.",
    languages: ["Français", "Anglais", "Italien"],
    rating: 4.9,
    reviewCount: 234,
    pricePerHour: 45,
    verified: true,
    experience: "15 ans"
  },
  {
    id: 2,
    name: "Marie-Claire Fontaine",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    specialty: "Impressionnisme & Art Moderne",
    bio: "Ancienne conservatrice au Musée d'Orsay, je partage ma passion pour l'impressionnisme avec enthousiasme et pédagogie.",
    languages: ["Français", "Anglais", "Espagnol"],
    rating: 5.0,
    reviewCount: 189,
    pricePerHour: 55,
    verified: true,
    experience: "20 ans"
  },
  {
    id: 3,
    name: "Thomas Beaumont",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    specialty: "Châteaux & Histoire de France",
    bio: "Guide conférencier national spécialisé dans l'histoire des châteaux de la Loire et de l'architecture médiévale.",
    languages: ["Français", "Anglais", "Allemand"],
    rating: 4.8,
    reviewCount: 312,
    pricePerHour: 40,
    verified: true,
    experience: "12 ans"
  },
  {
    id: 4,
    name: "Sophie Martin",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    specialty: "Art Contemporain",
    bio: "Critique d'art et commissaire d'exposition, j'accompagne les visiteurs dans la découverte de l'art contemporain.",
    languages: ["Français", "Anglais"],
    rating: 4.7,
    reviewCount: 156,
    pricePerHour: 50,
    verified: true,
    experience: "8 ans"
  },
  {
    id: 5,
    name: "Antoine Rousseau",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    specialty: "Archéologie & Antiquités",
    bio: "Archéologue de formation, je rends vivantes les civilisations antiques à travers des visites immersives et passionnantes.",
    languages: ["Français", "Anglais", "Grec"],
    rating: 4.9,
    reviewCount: 98,
    pricePerHour: 48,
    verified: true,
    experience: "10 ans"
  },
  {
    id: 6,
    name: "Camille Dubois",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    specialty: "Photographie & Arts Visuels",
    bio: "Photographe professionnelle et historienne de la photographie, j'offre des visites uniques alliant technique et histoire.",
    languages: ["Français", "Anglais"],
    rating: 4.6,
    reviewCount: 87,
    pricePerHour: 42,
    verified: false,
    experience: "6 ans"
  }
];

/**
 * Créneaux horaires disponibles
 */
const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
];

/**
 * Générer les 7 prochains jours
 */
const getNextDays = () => {
  const days = [];
  const today = new Date();
  const options = { weekday: 'short', day: 'numeric', month: 'short' };

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      date: date.toISOString().split('T')[0],
      label: i === 0 ? "Aujourd'hui" : i === 1 ? "Demain" : date.toLocaleDateString('fr-FR', options)
    });
  }
  return days;
};

/**
 * Combiner les lieux
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
  ...frenchMuseums.slice(0, 50)
];

/**
 * Page Guides - Réserver une visite guidée
 */
const GuidesPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [priceFilter, setPriceFilter] = useState('all');

  const availableDays = getNextDays();

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

  // Filtrer les lieux
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const filtered = allPlaces.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.city?.toLowerCase().includes(query) ||
        place.region?.toLowerCase().includes(query)
      );
      setFilteredPlaces(filtered.slice(0, 15));
    } else {
      setFilteredPlaces([]);
    }
  }, [searchQuery]);

  // Filtrer les guides par prix
  const filteredGuides = guidesData.filter(guide => {
    if (priceFilter === 'all') return true;
    if (priceFilter === 'low') return guide.pricePerHour <= 42;
    if (priceFilter === 'mid') return guide.pricePerHour > 42 && guide.pricePerHour <= 50;
    if (priceFilter === 'high') return guide.pricePerHour > 50;
    return true;
  });

  // Sélectionner un lieu
  const handleSelectPlace = (place) => {
    setSelectedPlace(place);
    setSearchQuery('');
    setFilteredPlaces([]);
  };

  // Réserver
  const handleBook = (guide) => {
    setSelectedGuide(guide);
    setShowBookingModal(true);
  };

  // Retour
  const goBack = () => {
    if (selectedGuide) {
      setSelectedGuide(null);
      setShowBookingModal(false);
    } else if (selectedDate) {
      setSelectedDate(null);
      setSelectedTime(null);
    } else if (selectedPlace) {
      setSelectedPlace(null);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 relative overflow-hidden" style={{ backgroundColor: '#1a1f2e' }}>
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e] via-[#15192a] to-[#0f1320]" />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="guidePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#d4a574" strokeWidth="0.5" opacity="0.3" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="#d4a574" strokeWidth="0.3" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#guidePattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8 pt-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#d4a574]/30 to-[#c49464]/30 border border-[#d4a574]/40 mb-6">
            <User className="w-10 h-10 text-[#d4a574]" />
          </div>

          <h1 className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#d4a574' }}>
            Guides Experts
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Réservez une visite guidée personnalisée avec nos experts passionnés.
          </p>
        </div>

        {/* Étape 1: Recherche de lieu */}
        {!selectedPlace && (
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un musée, château, monument..."
                className="w-full py-4 px-6 pl-14 bg-[#1a1a2e] border border-[#d4a574]/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 transition-all"
              />
            </div>

            {/* Résultats de recherche */}
            {filteredPlaces.length > 0 && (
              <div className="bg-[#1a1a2e] border border-[#d4a574]/30 rounded-2xl overflow-hidden shadow-2xl max-h-[400px] overflow-y-auto">
                {filteredPlaces.map(place => (
                  <button
                    key={place.id}
                    onClick={() => handleSelectPlace(place)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-[#d4a574]/10 transition-colors text-left border-b border-white/5 last:border-b-0"
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{place.name}</h3>
                      <p className="text-gray-400 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {place.city}{place.region ? `, ${place.region}` : ''}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Lieux suggérés */}
            {!searchQuery && (
              <div className="mt-8">
                <h2 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#d4a574]" />
                  Lieux populaires
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allPlaces.slice(0, 6).map(place => (
                    <button
                      key={place.id}
                      onClick={() => handleSelectPlace(place)}
                      className="relative h-32 rounded-xl overflow-hidden group"
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-sm font-medium truncate">{place.name}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Étape 2: Sélection date/heure */}
        {selectedPlace && !selectedDate && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-[#d4a574] hover:text-[#e5b685] mb-6 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Changer de lieu
            </button>

            {/* Lieu sélectionné */}
            <div className="bg-[#1a1a2e] rounded-2xl p-4 mb-8 flex items-center gap-4 border border-[#d4a574]/30">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-white text-xl font-bold">{selectedPlace.name}</h2>
                <p className="text-gray-400 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedPlace.city}{selectedPlace.region ? `, ${selectedPlace.region}` : ''}
                </p>
              </div>
            </div>

            {/* Sélection de la date */}
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#d4a574]" />
              Choisissez une date
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {availableDays.map(day => (
                <button
                  key={day.date}
                  onClick={() => setSelectedDate(day)}
                  className={`px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedDate?.date === day.date
                      ? 'bg-[#d4a574] text-[#1a1a2e]'
                      : 'bg-[#1a1a2e] text-white border border-white/20 hover:border-[#d4a574]/50'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>

            {/* Sélection de l'heure */}
            {selectedDate && (
              <>
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#d4a574]" />
                  Choisissez un horaire
                </h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-5 py-3 rounded-xl font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-[#d4a574] text-[#1a1a2e]'
                          : 'bg-[#1a1a2e] text-white border border-white/20 hover:border-[#d4a574]/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {/* Bouton continuer */}
                {selectedTime && (
                  <button
                    onClick={() => setSelectedDate({ ...selectedDate, confirmed: true })}
                    className="w-full py-4 bg-[#d4a574] hover:bg-[#c49464] text-[#1a1a2e] font-bold rounded-xl transition-all hover:scale-[1.02]"
                  >
                    Voir les guides disponibles
                  </button>
                )}
              </>
            )}
          </div>
        )}

        {/* Étape 3: Liste des guides */}
        {selectedPlace && selectedDate?.confirmed && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <button
              onClick={() => setSelectedDate(null)}
              className="flex items-center gap-2 text-[#d4a574] hover:text-[#e5b685] mb-6 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Modifier la date
            </button>

            {/* Récap */}
            <div className="bg-[#1a1a2e] rounded-2xl p-4 mb-8 border border-[#d4a574]/30">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-white font-bold">{selectedPlace.name}</h2>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm">
                    <span className="text-gray-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#d4a574]" />
                      {selectedDate.label}
                    </span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#d4a574]" />
                      {selectedTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filtre par prix */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-400 text-sm">Filtrer par tarif:</span>
              <div className="flex gap-2">
                {[
                  { id: 'all', label: 'Tous' },
                  { id: 'low', label: '≤ 42€/h' },
                  { id: 'mid', label: '43-50€/h' },
                  { id: 'high', label: '> 50€/h' }
                ].map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setPriceFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                      priceFilter === filter.id
                        ? 'bg-[#d4a574] text-[#1a1a2e]'
                        : 'bg-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Liste des guides */}
            <h3 className="text-white text-xl font-semibold mb-4">
              {filteredGuides.length} guide{filteredGuides.length > 1 ? 's' : ''} disponible{filteredGuides.length > 1 ? 's' : ''}
            </h3>

            <div className="space-y-4">
              {filteredGuides.map(guide => (
                <div
                  key={guide.id}
                  className="bg-[#1a1a2e] rounded-2xl p-5 border border-white/10 hover:border-[#d4a574]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Avatar et infos */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="relative flex-shrink-0">
                        <img
                          src={guide.avatar}
                          alt={guide.name}
                          className="w-20 h-20 rounded-full object-cover border-3 border-[#d4a574]"
                        />
                        {guide.verified && (
                          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#1a1a2e]">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-lg">{guide.name}</h4>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm">{guide.rating}</span>
                            <span className="text-gray-500 text-xs">({guide.reviewCount})</span>
                          </div>
                        </div>

                        <p className="text-[#d4a574] text-sm font-medium mb-2">{guide.specialty}</p>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-3">{guide.bio}</p>

                        <div className="flex flex-wrap gap-2">
                          {guide.languages.map((lang, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-white/10 text-gray-300 text-xs rounded-full">
                              {lang}
                            </span>
                          ))}
                          <span className="px-2 py-0.5 bg-[#d4a574]/20 text-[#d4a574] text-xs rounded-full">
                            {guide.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Prix et action */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">{guide.pricePerHour}€</p>
                        <p className="text-gray-500 text-sm">par heure</p>
                      </div>
                      <button
                        onClick={() => handleBook(guide)}
                        className="px-6 py-3 bg-[#d4a574] hover:bg-[#c49464] text-[#1a1a2e] font-semibold rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Réserver
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal de confirmation */}
        {showBookingModal && selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-[#1a1a2e] rounded-3xl p-6 max-w-md w-full border border-[#d4a574]/30 shadow-2xl animate-fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Réservation envoyée !</h3>
                <p className="text-gray-400 text-sm">
                  Votre demande a été envoyée à {selectedGuide.name}. Vous recevrez une confirmation bientôt.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={selectedGuide.avatar}
                    alt={selectedGuide.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold">{selectedGuide.name}</p>
                    <p className="text-[#d4a574] text-sm">{selectedGuide.specialty}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lieu</span>
                    <span className="text-white">{selectedPlace.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date</span>
                    <span className="text-white">{selectedDate.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Heure</span>
                    <span className="text-white">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10">
                    <span className="text-gray-400">Tarif estimé (2h)</span>
                    <span className="text-[#d4a574] font-bold">{selectedGuide.pricePerHour * 2}€</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowBookingModal(false);
                  setSelectedGuide(null);
                  setSelectedPlace(null);
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}
                className="w-full py-3 bg-[#d4a574] hover:bg-[#c49464] text-[#1a1a2e] font-bold rounded-xl transition-all"
              >
                Terminer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidesPage;
