import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Trash2, Landmark, Castle, Palette, Filter, Star, Clock, Euro, Calendar } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useCulturalData } from '../hooks/useCulturalData';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Page des lieux favoris - Version améliorée avec catégories
 */
const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favoriteIds, userData, toggleFavorite } = useUser();
  const { places } = useCulturalData();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Récupérer les lieux favoris à partir des IDs
  const favoritePlaces = useMemo(() => {
    return places.filter(p => favoriteIds.includes(p.id));
  }, [places, favoriteIds]);

  // Catégories de filtres
  const categories = [
    { id: 'all', label: 'Tous', icon: Heart, count: favoritePlaces.length },
    { id: 'musée', label: 'Musées', icon: Landmark, count: favoritePlaces.filter(p => p.type === 'musée').length },
    { id: 'château', label: 'Châteaux', icon: Castle, count: favoritePlaces.filter(p => p.type === 'château').length },
    { id: 'église', label: 'Églises', icon: Landmark, count: favoritePlaces.filter(p => p.type === 'église').length },
    { id: 'exposition', label: 'Expositions', icon: Palette, count: favoritePlaces.filter(p => p.type === 'exposition').length }
  ];

  // Filtrer les places selon la catégorie active
  const filteredPlaces = useMemo(() => {
    if (activeFilter === 'all') return favoritePlaces;
    return favoritePlaces.filter(p => p.type === activeFilter);
  }, [favoritePlaces, activeFilter]);

  // Couleurs par type
  const getTypeColor = (type) => {
    const colors = {
      'musée': { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
      'château': { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
      'église': { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30' },
      'exposition': { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' }
    };
    return colors[type] || { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30' };
  };

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 relative overflow-hidden" style={{ backgroundColor: '#2a3550' }}>
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a3550] via-[#283858] to-[#1e2a42]" />
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heartPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30,15 Q35,5 40,15 Q45,25 30,40 Q15,25 20,15 Q25,5 30,15" fill="none" stroke="#d4a574" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heartPattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8 pt-4">
            {/* Icône principale */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500/30 to-pink-500/30 border border-red-500/40 mb-6">
              <Heart className="w-10 h-10 text-red-400 fill-red-400" />
            </div>

            {favoritePlaces.length > 0 && (
              <>
                <h1 className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#d4a574' }}>
                  Vos Favoris
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                  Retrouvez tous vos lieux culturels préférés sauvegardés en un seul endroit.
                  <span className="block mt-2 text-[#d4a574]">
                    {favoritePlaces.length} lieu{favoritePlaces.length > 1 ? 'x' : ''} sauvegardé{favoritePlaces.length > 1 ? 's' : ''}
                  </span>
                </p>
              </>
            )}
          </div>

          {/* Filtres par catégorie */}
          {favoritePlaces.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`
                      flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full
                      font-medium text-sm
                      transition-all duration-300
                      ${isActive
                        ? 'bg-[#d4a574] text-[#243350] shadow-lg shadow-[#d4a574]/20'
                        : 'bg-[#243350]/80 text-white/80 hover:bg-[#243350] hover:text-white border border-white/20'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.label}</span>
                    <span className={`
                      px-2 py-0.5 rounded-full text-xs
                      ${isActive ? 'bg-[#243350]/20' : 'bg-white/10'}
                    `}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPlaces.map((place) => {
              const typeColor = getTypeColor(place.type);
              return (
                <div
                  key={place.id}
                  className="group relative bg-[#243350] rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4a574]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a574]/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onClick={() => setSelectedPlace(place)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#243350] via-transparent to-transparent" />

                    {/* Badge type */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${typeColor.bg} ${typeColor.text} border ${typeColor.border} backdrop-blur-sm`}>
                        {place.type}
                      </span>
                    </div>

                    {/* Bouton favori */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(place.id);
                      }}
                      className="absolute top-3 right-3 p-2.5 rounded-full bg-red-500/90 text-white shadow-lg transition-all hover:scale-110"
                    >
                      <Heart className="w-5 h-5 fill-current" />
                    </button>
                  </div>

                  {/* Contenu */}
                  <div className="p-4" onClick={() => setSelectedPlace(place)}>
                    <h3 className="font-bold text-white text-lg mb-2 line-clamp-1 group-hover:text-[#d4a574] transition-colors">
                      {place.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <MapPin className="w-4 h-4 text-[#d4a574]" />
                      <span className="truncate">{place.location}</span>
                    </div>

                    {/* Infos rapides */}
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-lg">
                        <Euro className="w-3.5 h-3.5 text-[#d4a574]" />
                        <span className="text-white">{place.price}</span>
                      </div>
                      {place.period && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-lg">
                          <Calendar className="w-3.5 h-3.5 text-[#d4a574]" />
                          <span className="text-white truncate max-w-[100px]">{place.period}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bordure brillante au survol */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#d4a574]/30 pointer-events-none transition-all" />
                </div>
              );
            })}
          </div>
        ) : activeFilter !== 'all' ? (
          /* État vide pour une catégorie spécifique */
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#243350] border border-white/10 flex items-center justify-center">
              <Filter className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="font-serif-italic text-2xl text-[#d4a574] mb-3">
              Aucun {activeFilter} en favoris
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Vous n'avez pas encore ajouté de {activeFilter === 'musée' ? 'musées' : activeFilter === 'château' ? 'châteaux' : 'expositions'} à vos favoris.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
            >
              Voir tous les favoris
            </button>
          </div>
        ) : (
          /* État vide global */
          <div className="text-center py-16">
            <div className="relative w-32 h-32 mx-auto mb-8">
              {/* Cercles décoratifs */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/10 to-pink-500/10 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-14 h-14 text-gray-600" />
              </div>
            </div>

            <h3 className="font-serif-italic text-3xl text-[#d4a574] mb-4">
              Aucun favori pour l'instant
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
              Explorez notre collection de musées, châteaux et expositions, puis ajoutez vos préférés en cliquant sur le cœur pour ne jamais les perdre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/explore')}
                className="px-8 py-4 bg-[#d4a574] hover:bg-[#c49464] text-[#243350] font-bold rounded-xl shadow-lg shadow-[#d4a574]/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Explorer la carte
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Landmark className="w-5 h-5" />
                Découvrir les lieux
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal de détails */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default FavoritesPage;
