import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Search, X, Filter, Layers, Navigation, ChevronDown, Star, Clock, Euro, Compass, Grid, Map as MapIcon, Sparkles } from 'lucide-react';
import { places, placeTypes } from '../data/places';
import { useFilters } from '../hooks/useFilters';
import InteractiveMap from '../components/map/InteractiveMap';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import MapBackground from '../components/backgrounds/MapBackground';

/**
 * Type filter pill with animated styling
 */
const TypePill = ({ type, isActive, onClick, count }) => {
  const typeConfig = {
    'all': { icon: Compass, gradient: 'from-night-600 to-night-700', activeGradient: 'from-gold-500 to-gold-600' },
    'musée': { icon: Layers, gradient: 'from-turquoise-600/20 to-turquoise-700/20', activeGradient: 'from-turquoise-500 to-turquoise-600' },
    'château': { icon: Layers, gradient: 'from-gold-600/20 to-gold-700/20', activeGradient: 'from-gold-500 to-gold-600' },
    'monument': { icon: Layers, gradient: 'from-terracotta-600/20 to-terracotta-700/20', activeGradient: 'from-terracotta-500 to-terracotta-600' },
    'exposition': { icon: Layers, gradient: 'from-purple-600/20 to-purple-700/20', activeGradient: 'from-purple-500 to-purple-600' }
  };

  const config = typeConfig[type.id] || typeConfig['all'];

  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center gap-2 px-4 py-2.5 rounded-xl
        font-medium text-sm whitespace-nowrap
        transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95
        ${isActive
          ? `bg-gradient-to-r ${config.activeGradient} text-white shadow-lg shadow-${type.id === 'all' ? 'gold' : type.id === 'musée' ? 'turquoise' : type.id === 'château' ? 'gold' : type.id === 'monument' ? 'terracotta' : 'purple'}-500/30`
          : 'bg-night-800/80 text-sand-300 border border-night-700/50 hover:border-night-600 hover:bg-night-700/80'
        }
        backdrop-blur-sm
      `}
    >
      {type.label}
      {count !== undefined && (
        <span className={`
          px-1.5 py-0.5 rounded-md text-xs font-semibold
          ${isActive ? 'bg-white/20' : 'bg-night-700/80'}
        `}>
          {count}
        </span>
      )}

      {/* Active indicator glow */}
      {isActive && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-50" />
      )}
    </button>
  );
};

/**
 * Floating search bar with glassmorphism
 */
const FloatingSearchBar = ({ value, onChange, resultsCount, hasFilters, onReset }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`
      relative flex items-center gap-3
      bg-night-900/90 backdrop-blur-xl
      border ${isFocused ? 'border-gold-500/50' : 'border-night-700/50'}
      rounded-2xl px-4 py-3
      transition-all duration-300
      shadow-2xl shadow-black/30
      ${isFocused ? 'ring-2 ring-gold-500/20' : ''}
    `}>
      <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-gold-400' : 'text-sand-500'}`} />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Rechercher un lieu, une région..."
        className="flex-1 bg-transparent text-sand-100 placeholder-sand-500 outline-none text-sm"
      />

      {/* Results count */}
      <div className="flex items-center gap-2">
        {value && (
          <button
            onClick={() => onChange('')}
            className="p-1.5 rounded-lg hover:bg-night-700/80 text-sand-400 hover:text-sand-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="h-6 w-px bg-night-700" />

        <span className="text-xs text-sand-400 whitespace-nowrap">
          <span className="text-gold-400 font-semibold">{resultsCount}</span> lieu{resultsCount > 1 ? 'x' : ''}
        </span>

        {hasFilters && (
          <button
            onClick={onReset}
            className="text-xs text-gold-400 hover:text-gold-300 transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Mini place card for sidebar
 */
const MiniPlaceCard = ({ place, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left p-3 rounded-xl
        transition-all duration-300 ease-out
        group
        ${isSelected
          ? 'bg-gradient-to-r from-gold-500/20 to-gold-600/10 border border-gold-500/40'
          : 'bg-night-800/60 border border-night-700/30 hover:border-night-600/50 hover:bg-night-800/80'
        }
      `}
    >
      <div className="flex gap-3">
        {/* Thumbnail */}
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold text-sm truncate transition-colors ${isSelected ? 'text-gold-400' : 'text-sand-100 group-hover:text-gold-400'}`}>
            {place.name}
          </h4>
          <p className="text-xs text-sand-500 truncate flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3" />
            {place.location}
          </p>
          <div className="flex items-center gap-3 mt-1.5">
            <span className="flex items-center gap-1 text-xs text-gold-400">
              <Star className="w-3 h-3 fill-gold-400" />
              {place.rating}
            </span>
            <span className="text-xs text-sand-500">{place.price}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

/**
 * Stats overlay showing filtered results summary
 */
const StatsOverlay = ({ places }) => {
  const stats = {
    musée: places.filter(p => p.type === 'musée').length,
    château: places.filter(p => p.type === 'château').length,
    monument: places.filter(p => p.type === 'monument').length,
    exposition: places.filter(p => p.type === 'exposition').length,
  };

  const icons = {
    musée: '🏛️',
    château: '🏰',
    monument: '⛪',
    exposition: '🎨'
  };

  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-night-900/80 backdrop-blur-sm rounded-xl border border-night-700/30">
      {Object.entries(stats).map(([type, count]) => (
        <div key={type} className="flex items-center gap-1.5">
          <span className="text-base">{icons[type]}</span>
          <span className="text-sm font-semibold text-sand-100">{count}</span>
        </div>
      ))}
    </div>
  );
};

/**
 * Page d'exploration avec carte immersive et filtres modernes
 */
const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [hoveredPlace, setHoveredPlace] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [mapHeight, setMapHeight] = useState('100vh');

  const {
    searchQuery,
    setSearchQuery,
    activeType,
    setActiveType,
    filteredPlaces,
    resultsCount,
    hasActiveFilters,
    resetFilters
  } = useFilters(places);

  // Get URL search param
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams, setSearchQuery]);

  // Calculate map height based on viewport
  useEffect(() => {
    const updateHeight = () => {
      const navHeight = 72; // Approximate nav height
      setMapHeight(`calc(100vh - ${navHeight}px)`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Get count per type for filter pills
  const getTypeCount = (typeId) => {
    if (typeId === 'all') return places.length;
    return places.filter(p => p.type === typeId).length;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background (visible behind sidebar) */}
      <MapBackground />

      {/* Main Layout */}
      <div className="relative z-10 flex h-full" style={{ minHeight: mapHeight }}>
        {/* Sidebar with places list */}
        <div className={`
          relative flex flex-col
          w-full md:w-96 lg:w-[420px]
          bg-night-950/95 backdrop-blur-xl
          border-r border-night-800/50
          transition-all duration-500 ease-out
          ${showSidebar ? 'translate-x-0' : '-translate-x-full md:-translate-x-96 lg:-translate-x-[420px]'}
          z-20
        `}>
          {/* Header */}
          <div className="p-5 border-b border-night-800/50">
            {/* Title */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30">
                  <Compass className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h1 className="font-display text-2xl font-bold text-sand-100">Explorer</h1>
                  <p className="text-xs text-sand-500">Découvrez le patrimoine français</p>
                </div>
              </div>

              {/* Toggle sidebar button (mobile) */}
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="md:hidden p-2 rounded-lg bg-night-800/80 text-sand-400 hover:text-sand-200 transition-colors"
              >
                <Grid className="w-5 h-5" />
              </button>
            </div>

            {/* Search */}
            <FloatingSearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              resultsCount={resultsCount}
              hasFilters={hasActiveFilters}
              onReset={resetFilters}
            />

            {/* Type filters */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
              {placeTypes.map((type) => (
                <TypePill
                  key={type.id}
                  type={type}
                  isActive={activeType === type.id}
                  onClick={() => setActiveType(type.id)}
                  count={getTypeCount(type.id)}
                />
              ))}
            </div>
          </div>

          {/* Stats summary */}
          <div className="px-5 py-3 border-b border-night-800/30">
            <StatsOverlay places={filteredPlaces} />
          </div>

          {/* Places list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
            {filteredPlaces.length > 0 ? (
              filteredPlaces.map((place, index) => (
                <div
                  key={place.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredPlace(place)}
                  onMouseLeave={() => setHoveredPlace(null)}
                >
                  <MiniPlaceCard
                    place={place}
                    onClick={() => setSelectedPlace(place)}
                    isSelected={hoveredPlace?.id === place.id}
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-night-800/50 border border-night-700/30 flex items-center justify-center">
                  <Search className="w-8 h-8 text-night-600" />
                </div>
                <h3 className="font-display text-lg font-semibold text-sand-200 mb-2">
                  Aucun résultat
                </h3>
                <p className="text-sm text-sand-500 mb-4">
                  Essayez de modifier vos filtres
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-night-950 rounded-xl text-sm font-semibold hover:from-gold-400 hover:to-gold-500 transition-all"
                >
                  Réinitialiser
                </button>
              </div>
            )}
          </div>

          {/* Bottom info */}
          <div className="p-4 border-t border-night-800/30 bg-night-900/50">
            <p className="text-xs text-sand-500 text-center flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3 text-gold-400" />
              Cliquez sur un lieu pour voir les détails
            </p>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative">
          {/* Toggle sidebar button (desktop) */}
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className={`
              hidden md:flex
              absolute top-4 z-30 items-center gap-2
              px-3 py-2 rounded-xl
              bg-night-900/90 backdrop-blur-sm
              border border-night-700/50
              text-sand-300 hover:text-sand-100
              transition-all duration-300
              shadow-lg
              ${showSidebar ? 'left-4' : 'left-4'}
            `}
          >
            <Grid className="w-4 h-4" />
            <span className="text-sm font-medium">{showSidebar ? 'Masquer' : 'Liste'}</span>
          </button>

          {/* Map */}
          {filteredPlaces.length > 0 && (
            <InteractiveMap
              places={filteredPlaces}
              onPlaceClick={setSelectedPlace}
              height="100%"
              autoLocate={true}
              showUserLocation={true}
              className="absolute inset-0"
            />
          )}

          {/* Empty state overlay */}
          {filteredPlaces.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-night-950/90">
              <div className="text-center p-8 animate-fade-in">
                <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-night-800/80 to-night-900/60 border border-night-700/50 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-night-600" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-sand-100 mb-3">
                  Aucun lieu trouvé
                </h3>
                <p className="text-sand-400 mb-6 max-w-sm">
                  Modifiez vos critères de recherche pour découvrir des lieux culturels.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-night-950 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/30"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          )}

          {/* Map legend */}
          <div className="absolute bottom-4 right-4 z-20 hidden lg:block">
            <div className="bg-night-900/90 backdrop-blur-sm rounded-xl p-3 border border-night-700/30 shadow-lg">
              <p className="text-xs font-medium text-sand-300 mb-2">Légende</p>
              <div className="space-y-1.5">
                {[
                  { color: 'bg-turquoise-500', label: 'Musées' },
                  { color: 'bg-gold-500', label: 'Châteaux' },
                  { color: 'bg-terracotta-500', label: 'Monuments' },
                  { color: 'bg-purple-500', label: 'Expositions' },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${color}`} />
                    <span className="text-xs text-sand-400">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating info when hovering place */}
          {hoveredPlace && (
            <div className="absolute top-4 right-4 z-30 animate-slide-up hidden lg:block">
              <div className="bg-night-900/95 backdrop-blur-xl rounded-2xl p-4 border border-night-700/50 shadow-2xl max-w-xs">
                <div className="flex gap-3">
                  <img
                    src={hoveredPlace.image}
                    alt={hoveredPlace.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sand-100 mb-1">{hoveredPlace.name}</h4>
                    <p className="text-xs text-sand-400 mb-2">{hoveredPlace.location}</p>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-xs text-gold-400">
                        <Star className="w-3 h-3 fill-gold-400" />
                        {hoveredPlace.rating}
                      </span>
                      <span className="text-xs text-sand-500">{hoveredPlace.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile map toggle */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className={`
          md:hidden fixed bottom-24 right-4 z-30
          p-4 rounded-2xl
          bg-gradient-to-r from-gold-500 to-gold-600
          text-night-950 shadow-lg shadow-gold-500/30
          transition-all duration-300
          ${showSidebar ? '' : 'translate-x-0'}
        `}
      >
        {showSidebar ? (
          <MapIcon className="w-6 h-6" />
        ) : (
          <Grid className="w-6 h-6" />
        )}
      </button>

      {/* Detail Modal */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default ExplorePage;
