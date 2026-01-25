import { useState, useMemo } from 'react';
import { Search, Star, MapPin, Clock, Users, ChevronRight, X, Calendar, Filter } from 'lucide-react';
import { places } from '../data/places';

/**
 * Page Guides - Réservation de visites guidées
 * Design cohérent avec le reste du site Muzea
 */
const GuidePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Guides disponibles
  const guides = [
    {
      id: 1,
      name: 'Marie Dubois',
      specialty: "Histoire de l'Art",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      rating: 4.9,
      reviews: 127,
      languages: ['Français', 'Anglais'],
      price: 89,
      availableTimes: ['9h00', '11h00', '14h00', '16h00']
    },
    {
      id: 2,
      name: 'Jean-Pierre Martin',
      specialty: 'Art Contemporain',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      rating: 5.0,
      reviews: 89,
      languages: ['Français', 'Espagnol'],
      price: 95,
      availableTimes: ['10h00', '14h00', '17h00']
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      specialty: 'Renaissance & Classique',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      rating: 4.8,
      reviews: 156,
      languages: ['Français', 'Italien', 'Anglais'],
      price: 85,
      availableTimes: ['9h30', '11h30', '14h30', '16h30']
    },
    {
      id: 4,
      name: 'Antoine Moreau',
      specialty: 'Impressionnisme',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      rating: 4.7,
      reviews: 98,
      languages: ['Français', 'Allemand'],
      price: 80,
      availableTimes: ['10h00', '13h00', '15h00']
    },
    {
      id: 5,
      name: 'Claire Fontaine',
      specialty: 'Art Moderne',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
      rating: 4.9,
      reviews: 112,
      languages: ['Français', 'Anglais', 'Japonais'],
      price: 90,
      availableTimes: ['9h00', '12h00', '15h00', '18h00']
    }
  ];

  // Dates disponibles pour les 14 prochains jours
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })
      });
    }
    return dates;
  }, []);

  // Filtrer les lieux selon la recherche
  const filteredPlaces = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return places.filter(place =>
      place.name.toLowerCase().includes(query) ||
      place.location.toLowerCase().includes(query) ||
      place.type?.toLowerCase().includes(query)
    ).slice(0, 10);
  }, [searchQuery]);

  // Filtrer les guides selon l'heure sélectionnée
  const filteredGuides = useMemo(() => {
    if (!selectedTime) return guides;
    return guides.filter(guide => guide.availableTimes.includes(selectedTime));
  }, [selectedTime, guides]);

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setSearchQuery(place.name);
    setShowFilters(true);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleReset = () => {
    setSelectedPlace(null);
    setSearchQuery('');
    setShowFilters(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 bg-night-950">
      {/* Hero Header */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1574246915327-271ee70f0df5?w=1920&h=600&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/50 via-night-950/80 to-night-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/15 border border-[#d4af37]/30 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#d4af37] text-sm font-medium font-serif-italic">Guides certifiés & passionnés</span>
            </div>

            <h1
              className="font-serif-italic text-4xl md:text-5xl lg:text-6xl mb-4"
              style={{ color: '#d4a574' }}
            >
              Vivez l'Art avec nos Guides Experts
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: '#9ca3af' }}
            >
              Découvrez les plus grands musées accompagné par des conférenciers d'exception
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="max-w-3xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (selectedPlace && e.target.value !== selectedPlace.name) {
                    setSelectedPlace(null);
                    setShowFilters(false);
                  }
                }}
                placeholder="Rechercher un musée, un monument, un château..."
                className="w-full py-4 pl-14 pr-12 bg-stone-800/50 border border-stone-700/50 rounded-2xl text-[#f5f0e6] placeholder-stone-500 focus:outline-none focus:border-[#d4af37]/50 focus:ring-2 focus:ring-[#d4af37]/20 transition-all text-lg font-body"
              />
              {searchQuery && (
                <button
                  onClick={handleReset}
                  className="absolute right-5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-amber-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Dropdown des résultats de recherche */}
            {searchQuery && !selectedPlace && filteredPlaces.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-stone-900 border border-stone-700/50 rounded-xl shadow-2xl z-50 max-h-[70vh] overflow-y-auto">
                {filteredPlaces.map((place) => (
                  <button
                    key={place.id}
                    onClick={() => handlePlaceSelect(place)}
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
                          <span>{place.location}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
                          {place.rating}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-stone-500 flex-shrink-0" />
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
        </div>
      </div>

      {/* Section Filtres et Guides */}
      {selectedPlace && showFilters && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Lieu sélectionné */}
          <div className="bg-stone-800/30 border border-stone-700/30 rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-full md:w-64 h-40 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold text-[#f5f0e6] mb-2">{selectedPlace.name}</h2>
                <p className="text-[#c4b69c]/80 mb-4 font-body">{selectedPlace.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedPlace.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                    {selectedPlace.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedPlace.hours}
                  </span>
                  <span className="text-[#d4af37] font-semibold">{selectedPlace.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filtres: Date et Heure */}
          <div className="bg-stone-900/50 border border-stone-700/30 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-[#d4af37]" />
              <h3 className="font-display text-xl font-semibold text-[#f5f0e6]">Choisissez votre créneau</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Sélection de la date */}
              <div>
                <label className="block text-sm font-medium text-[#c4b69c]/80 mb-3 font-body">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Jour de visite
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableDates.slice(0, 6).map((date) => (
                    <button
                      key={date.value}
                      onClick={() => setSelectedDate(date.value)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        selectedDate === date.value
                          ? 'bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0a0f1a]'
                          : 'bg-stone-800/50 border border-stone-700/50 text-stone-300 hover:border-[#d4af37]/50'
                      }`}
                    >
                      {date.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sélection de l'heure */}
              <div>
                <label className="block text-sm font-medium text-[#c4b69c]/80 mb-3 font-body">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Heure de début
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {['9h00', '10h00', '11h00', '14h00', '15h00', '16h00', '17h00', '18h00'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(selectedTime === time ? '' : time)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0a0f1a]'
                          : 'bg-stone-800/50 border border-stone-700/50 text-stone-300 hover:border-[#d4af37]/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Liste des guides */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-semibold text-[#f5f0e6]">
                Nos guides disponibles
              </h3>
              <span className="text-[#c4b69c]/70 text-sm font-body">
                {filteredGuides.length} guide{filteredGuides.length > 1 ? 's' : ''} disponible{filteredGuides.length > 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="group bg-stone-800/30 border border-stone-700/30 rounded-2xl overflow-hidden hover:border-[#d4af37]/30 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={guide.image}
                        alt={guide.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-[#d4af37]/30"
                      />
                      <div className="flex-1">
                        <h4 className="font-display font-semibold text-[#f5f0e6] text-lg">{guide.name}</h4>
                        <p className="text-[#d4af37] text-sm mb-2 font-serif-italic">{guide.specialty}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                            <span className="text-[#f5f0e6] font-semibold">{guide.rating}</span>
                          </div>
                          <span className="text-stone-500 text-sm">({guide.reviews} avis)</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-stone-400">
                        <span className="text-stone-500">Langues:</span>
                        <span className="text-[#c4b69c]">{guide.languages.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-stone-500">Créneaux:</span>
                        <div className="flex flex-wrap gap-1">
                          {guide.availableTimes.map((time) => (
                            <span
                              key={time}
                              className={`px-2 py-0.5 rounded text-xs ${
                                selectedTime === time
                                  ? 'bg-[#d4af37]/30 text-[#d4af37]'
                                  : 'bg-stone-700/50 text-stone-400'
                              }`}
                            >
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-700/30">
                      <div>
                        <span className="text-2xl font-bold text-[#d4af37]">{guide.price}€</span>
                        <span className="text-stone-500 text-sm"> / personne</span>
                      </div>
                      <button className="px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-[#0a0f1a] rounded-xl font-semibold hover:from-[#e5c349] hover:to-[#d4af37] transition-all">
                        Réserver
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Section par défaut - Lieux populaires */}
      {!selectedPlace && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-[#f5f0e6] mb-3">
              Lieux <span className="text-[#d4af37]">populaires</span>
            </h2>
            <p className="text-[#c4b69c]/70 font-body">
              Les destinations les plus prisées par nos visiteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {places.slice(0, 8).map((place) => (
              <button
                key={place.id}
                onClick={() => handlePlaceSelect(place)}
                className="group relative bg-stone-800/30 border border-stone-700/30 rounded-2xl overflow-hidden hover:border-[#d4af37]/30 transition-all duration-300 text-left"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

                  <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-[#d4af37] to-[#b8962e] rounded-full">
                    <span className="text-[#0a0f1a] text-xs font-semibold">Dès {place.price}</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-display font-semibold text-[#f5f0e6] mb-2 group-hover:text-[#d4af37] transition-colors">
                    {place.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-stone-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {place.location.split(',')[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
                      {place.rating}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Section Experts */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-[#f5f0e6] mb-3">
                Nos <span className="text-[#d4af37]">experts</span> passionnés
              </h2>
              <p className="text-[#c4b69c]/70 font-body">
                Des guides conférenciers triés sur le volet pour des expériences uniques
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {guides.map((guide) => (
                <div
                  key={guide.id}
                  className="group text-center p-6 bg-stone-800/20 border border-stone-700/30 rounded-2xl hover:border-[#d4af37]/30 transition-all"
                >
                  <div className="relative inline-block mb-4">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gradient-to-r from-[#d4af37] to-[#b8962e] rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#0a0f1a] fill-[#0a0f1a]" />
                      <span className="text-[#0a0f1a] text-xs font-bold">{guide.rating}</span>
                    </div>
                  </div>
                  <h4 className="font-display font-semibold text-[#f5f0e6]">{guide.name}</h4>
                  <p className="text-[#d4af37] text-sm font-serif-italic">{guide.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuidePage;
