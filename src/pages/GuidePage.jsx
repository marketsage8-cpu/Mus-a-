import { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Star, ChevronLeft, Calendar, Users, X } from 'lucide-react';

/**
 * Page Guides - Réservation de guides conférenciers
 * Style cohérent avec le site Muzea
 */
const GuidePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMuseum, setSelectedMuseum] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Base de données des musées
  const museums = [
    {
      id: 1,
      name: 'Musée du Louvre',
      location: 'Paris 1er',
      image: 'https://images.unsplash.com/photo-1499426600726-ac36e0dde9d9?w=600&h=400&fit=crop',
      description: 'Le plus grand musée d\'art du monde'
    },
    {
      id: 2,
      name: "Musée d'Orsay",
      location: 'Paris 7ème',
      image: 'https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=600&h=400&fit=crop',
      description: 'Chef-d\'œuvres impressionnistes'
    },
    {
      id: 3,
      name: 'Centre Pompidou',
      location: 'Paris 4ème',
      image: 'https://images.unsplash.com/photo-1574246915327-271ee70f0df5?w=600&h=400&fit=crop',
      description: 'Art moderne et contemporain'
    },
    {
      id: 4,
      name: 'Château de Versailles',
      location: 'Versailles',
      image: 'https://images.unsplash.com/photo-1551410224-699683e15636?w=600&h=400&fit=crop',
      description: 'Résidence royale et jardins'
    },
    {
      id: 5,
      name: 'Musée Rodin',
      location: 'Paris 7ème',
      image: 'https://images.unsplash.com/photo-1584037049560-4f0b1e95d7e5?w=600&h=400&fit=crop',
      description: 'Sculptures et jardin'
    },
    {
      id: 6,
      name: 'Musée de l\'Orangerie',
      location: 'Paris 1er',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
      description: 'Les Nymphéas de Monet'
    },
    {
      id: 7,
      name: 'Musée Picasso',
      location: 'Paris 3ème',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop',
      description: 'Œuvres du maître espagnol'
    },
    {
      id: 8,
      name: 'Petit Palais',
      location: 'Paris 8ème',
      image: 'https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?w=600&h=400&fit=crop',
      description: 'Beaux-arts de la ville de Paris'
    }
  ];

  // Guides disponibles par musée
  const guides = [
    {
      id: 1,
      name: 'Marie Dubois',
      specialty: "Histoire de l'Art",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      rating: 4.9,
      reviews: 127,
      price: 85,
      languages: ['Français', 'Anglais'],
      availableTimes: ['09:00', '11:00', '14:00', '16:00'],
      museums: [1, 2, 6]
    },
    {
      id: 2,
      name: 'Jean-Pierre Martin',
      specialty: 'Art Contemporain',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      rating: 5.0,
      reviews: 89,
      price: 95,
      languages: ['Français', 'Espagnol'],
      availableTimes: ['10:00', '14:00', '17:00'],
      museums: [3, 7]
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      specialty: 'Renaissance & Classique',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      rating: 4.8,
      reviews: 156,
      price: 75,
      languages: ['Français', 'Italien'],
      availableTimes: ['09:30', '11:30', '14:30'],
      museums: [1, 4, 5]
    },
    {
      id: 4,
      name: 'Alexandre Moreau',
      specialty: 'Impressionnisme',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      rating: 4.7,
      reviews: 98,
      price: 80,
      languages: ['Français', 'Anglais', 'Allemand'],
      availableTimes: ['10:00', '13:00', '15:30'],
      museums: [2, 6, 8]
    },
    {
      id: 5,
      name: 'Claire Fontaine',
      specialty: 'Art Moderne',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      rating: 4.9,
      reviews: 73,
      price: 90,
      languages: ['Français', 'Anglais'],
      availableTimes: ['11:00', '14:00', '16:30'],
      museums: [3, 7, 5]
    }
  ];

  // Filtrer les musées selon la recherche
  const filteredMuseums = useMemo(() => {
    if (!searchQuery.trim()) return museums;
    const query = searchQuery.toLowerCase();
    return museums.filter(
      museum =>
        museum.name.toLowerCase().includes(query) ||
        museum.location.toLowerCase().includes(query) ||
        museum.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Guides disponibles pour le musée sélectionné
  const availableGuides = useMemo(() => {
    if (!selectedMuseum) return [];
    return guides.filter(guide => guide.museums.includes(selectedMuseum.id));
  }, [selectedMuseum]);

  // Filtrer les guides par horaire sélectionné
  const filteredGuides = useMemo(() => {
    if (!selectedTime) return availableGuides;
    return availableGuides.filter(guide => guide.availableTimes.includes(selectedTime));
  }, [availableGuides, selectedTime]);

  // Tous les horaires disponibles pour le musée
  const availableTimes = useMemo(() => {
    if (!selectedMuseum) return [];
    const times = new Set();
    availableGuides.forEach(guide => {
      guide.availableTimes.forEach(time => times.add(time));
    });
    return Array.from(times).sort();
  }, [availableGuides, selectedMuseum]);

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8" style={{ backgroundColor: '#1e2a42' }}>
      {/* Fond décoratif */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2a42] via-[#1e2a42]/95 to-[#1e2a42]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Si aucun musée sélectionné : afficher recherche + liste */}
        {!selectedMuseum ? (
          <>
            {/* Header */}
            <div className="text-center pt-10 pb-8">
              <h1 className="font-serif-italic text-3xl md:text-4xl text-[#d4a574] mb-4">
                Réservez votre guide
              </h1>
              <p className="text-gray-400 max-w-xl mx-auto">
                Trouvez le guide parfait pour votre visite et vivez une expérience culturelle unique
              </p>
            </div>

            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un musée, un lieu..."
                  className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 outline-none focus:border-[#d4a574] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Résultats de recherche */}
            {searchQuery && filteredMuseums.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">Aucun lieu trouvé pour "{searchQuery}"</p>
              </div>
            ) : (
              <>
                {/* Label */}
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
                  {searchQuery ? `${filteredMuseums.length} résultat(s)` : 'Lieux populaires'}
                </p>

                {/* Grille des musées */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMuseums.map((museum) => (
                    <button
                      key={museum.id}
                      onClick={() => setSelectedMuseum(museum)}
                      className="group text-left bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4a574]/50 transition-all"
                    >
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={museum.image}
                          alt={museum.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      {/* Contenu */}
                      <div className="p-4">
                        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#d4a574] transition-colors">
                          {museum.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <MapPin className="w-3 h-3" />
                          {museum.location}
                        </div>
                        <p className="text-gray-500 text-sm">{museum.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          /* Musée sélectionné : afficher filtres + guides */
          <>
            {/* Header avec retour */}
            <div className="pt-6 pb-4">
              <button
                onClick={() => {
                  setSelectedMuseum(null);
                  setSelectedDate('');
                  setSelectedTime('');
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
              >
                <ChevronLeft className="w-5 h-5" />
                Retour aux lieux
              </button>

              {/* Info du musée */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <img
                  src={selectedMuseum.image}
                  alt={selectedMuseum.name}
                  className="w-full md:w-64 h-40 object-cover rounded-2xl"
                />
                <div className="flex-1">
                  <h1 className="font-serif-italic text-2xl md:text-3xl text-[#d4a574] mb-2">
                    {selectedMuseum.name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <MapPin className="w-4 h-4" />
                    {selectedMuseum.location}
                  </div>
                  <p className="text-gray-400">{selectedMuseum.description}</p>
                </div>
              </div>
            </div>

            {/* Filtres */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#d4a574]" />
                Choisissez votre créneau
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Date de visite</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white outline-none focus:border-[#d4a574] transition-colors"
                  />
                </div>

                {/* Heure */}
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Horaire</label>
                  <div className="flex flex-wrap gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(selectedTime === time ? '' : time)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-[#d4a574] text-[#1e2a42]'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Guides disponibles */}
            <div>
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#d4a574]" />
                Guides disponibles
                <span className="text-gray-500 font-normal">({filteredGuides.length})</span>
              </h2>

              {filteredGuides.length === 0 ? (
                <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
                  <p className="text-gray-400">
                    Aucun guide disponible pour ce créneau. Essayez un autre horaire.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredGuides.map((guide) => (
                    <div
                      key={guide.id}
                      className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#d4a574]/30 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Photo du guide */}
                        <img
                          src={guide.image}
                          alt={guide.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-[#d4a574]/50"
                        />

                        {/* Info guide */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <div>
                              <h3 className="text-white font-semibold text-lg">{guide.name}</h3>
                              <p className="text-[#d4a574] text-sm">{guide.specialty}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-[#d4a574]/20 px-3 py-1 rounded-full w-fit">
                              <Star className="w-4 h-4 text-[#d4a574] fill-[#d4a574]" />
                              <span className="text-[#d4a574] font-semibold">{guide.rating}</span>
                              <span className="text-gray-400 text-sm">({guide.reviews} avis)</span>
                            </div>
                          </div>

                          {/* Détails */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Durée : 2h
                            </span>
                            <span>
                              Langues : {guide.languages.join(', ')}
                            </span>
                          </div>

                          {/* Horaires disponibles */}
                          <div className="mb-4">
                            <p className="text-gray-500 text-xs mb-2">Horaires disponibles :</p>
                            <div className="flex flex-wrap gap-2">
                              {guide.availableTimes.map((time) => (
                                <span
                                  key={time}
                                  className={`px-3 py-1 rounded-lg text-xs ${
                                    selectedTime === time
                                      ? 'bg-[#d4a574] text-[#1e2a42] font-semibold'
                                      : 'bg-white/10 text-gray-300'
                                  }`}
                                >
                                  {time}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Prix et réservation */}
                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div>
                              <span className="text-2xl font-bold text-white">{guide.price}€</span>
                              <span className="text-gray-400 text-sm"> / personne</span>
                            </div>
                            <button className="bg-[#d4a574] hover:bg-[#c49a64] text-[#1e2a42] px-6 py-3 rounded-xl font-semibold transition-colors">
                              Réserver
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GuidePage;
