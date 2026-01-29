import { useState, useEffect, useMemo, useCallback } from 'react';
import { placeTypes } from '../data/places';
import { useLiveData } from '../hooks/useLiveData';
import InteractiveMap from '../components/map/InteractiveMap';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import { Building2, Castle, Calendar, MapPin, X, Filter, ChevronDown, Search, Compass, Sparkles, RefreshCw, Loader2, Wifi, Church } from 'lucide-react';

/**
 * Page d'exploration avec carte en plein écran et filtres
 * Mode LIVE: charge uniquement les lieux de la zone visible de la carte
 */
const ExplorePage = () => {
  const { places, loading, error, stats, loadForBounds, loadImageForPlace, refresh } = useLiveData({ debounceMs: 400 });

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapHeight, setMapHeight] = useState('calc(100vh - 72px)');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [isFilterAnimating, setIsFilterAnimating] = useState(false);

  // Extraire les régions uniques
  const regions = useMemo(() => {
    const uniqueRegions = [...new Set(places.map(p => {
      const parts = p.location.split(', ');
      return parts[parts.length - 1];
    }))].sort();
    return ['all', ...uniqueRegions];
  }, [places]);

  // Filtrer les lieux selon le type, la région et la recherche
  const filteredPlaces = useMemo(() => {
    return places.filter(place => {
      if (activeFilter !== 'all' && place.type !== activeFilter) return false;
      if (selectedRegion !== 'all') {
        const placeRegion = place.location.split(', ').pop();
        if (placeRegion !== selectedRegion) return false;
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          place.name.toLowerCase().includes(query) ||
          place.location.toLowerCase().includes(query) ||
          place.description?.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [places, activeFilter, selectedRegion, searchQuery]);

  // Compter les lieux par type
  const counts = useMemo(() => {
    const result = { all: places.length };
    placeTypes.forEach(type => {
      if (type.id !== 'all') {
        result[type.id] = places.filter(p => p.type === type.id).length;
      }
    });
    return result;
  }, [places]);

  const typeIcons = {
    'all': Compass,
    'musée': Building2,
    'château': Castle,
    'église': Church,
    'exposition': Calendar
  };

  const typeColors = {
    'all': 'from-night-700 to-night-800',
    'musée': 'from-turquoise-500 to-turquoise-600',
    'château': 'from-gold-500 to-gold-600',
    'église': 'from-rose-500 to-rose-600',
    'exposition': 'from-purple-500 to-purple-600'
  };

  const typeColorsBg = {
    'all': 'bg-night-700',
    'musée': 'bg-turquoise-500',
    'château': 'bg-gold-500',
    'église': 'bg-rose-500',
    'exposition': 'bg-purple-500'
  };

  useEffect(() => {
    const updateHeight = () => {
      const navHeight = 72;
      const mobileNavHeight = window.innerWidth < 768 ? 80 : 0;
      setMapHeight(`calc(100vh - ${navHeight}px - ${mobileNavHeight}px)`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleFilterClick = (filterId) => {
    setIsFilterAnimating(true);
    setActiveFilter(filterId);
    setTimeout(() => setIsFilterAnimating(false), 300);
  };

  const clearFilters = () => {
    setActiveFilter('all');
    setSelectedRegion('all');
    setSearchQuery('');
  };

  const hasActiveFilters = activeFilter !== 'all' || selectedRegion !== 'all' || searchQuery;

  // Callback pour charger les données quand la carte bouge
  const handleBoundsChange = useCallback((bounds) => {
    loadForBounds(bounds);
  }, [loadForBounds]);

  // Message de statut
  const statusText = useMemo(() => {
    if (loading) return 'Chargement de la zone…';
    if (stats.loaded > 0) return `${stats.loaded} lieux dans cette zone`;
    return '';
  }, [loading, stats]);

  return (
    <div className="relative w-full mt-[72px]" style={{ height: mapHeight }}>
      {/* Barre de filtres en haut */}
      <div className="absolute top-0 left-0 right-0 z-40 p-3 md:p-4">
        <div className="bg-night-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gold-600/20 overflow-hidden">
          {/* Header avec barre de recherche */}
          <div className="relative px-4 py-3 border-b border-gold-600/10">
            <div className="flex flex-col gap-3">
              {/* Ligne 1: Titre et compteur */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/20">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg text-sand-100 tracking-wide">Explorer</h2>
                    <p className="text-xs text-sand-300/60">
                      {loading ? 'Chargement de la zone…' : 'Déplacez la carte pour explorer'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Indicateur de mode live */}
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30" title="Données en direct - chargement par zone">
                    <Wifi className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] text-emerald-300 font-medium">LIVE</span>
                  </div>
                  {/* Bouton rafraîchir */}
                  <button
                    onClick={refresh}
                    disabled={loading}
                    className="p-1.5 rounded-lg bg-night-800/50 border border-night-700 hover:bg-night-700 transition-colors disabled:opacity-50"
                    title="Recharger toutes les données depuis les APIs"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 text-gold-400 animate-spin" />
                    ) : (
                      <RefreshCw className="w-4 h-4 text-sand-400" />
                    )}
                  </button>
                  {/* Compteur total */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-night-800/50 border border-night-700">
                    {loading ? (
                      <Loader2 className="w-4 h-4 text-gold-400 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                    )}
                    <span className="text-sm font-medium text-sand-200">{filteredPlaces.length}</span>
                    <span className="text-xs text-sand-400">lieux</span>
                  </div>
                </div>
              </div>

              {/* Barre de progression pendant le chargement */}
              {loading && (
                <div className="w-full bg-night-800/50 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full animate-pulse" style={{ width: '100%' }} />
                </div>
              )}

              {/* Barre de recherche */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gold-500/50 group-focus-within:text-gold-400 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un musée, château, église..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-10 py-2.5 text-sand-100 placeholder-sand-400/70 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/30 transition-all font-body"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-sand-500 hover:text-sand-200 hover:bg-night-700/50 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          </div>

          {/* Filtres par type */}
          <div className="p-3">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {placeTypes.map((type, index) => {
                const Icon = typeIcons[type.id] || MapPin;
                const isActive = activeFilter === type.id;
                const gradientClass = typeColors[type.id];

                return (
                  <button
                    key={type.id}
                    onClick={() => handleFilterClick(type.id)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? `bg-gradient-to-r ${gradientClass} text-white shadow-lg shadow-gold-500/10`
                        : 'bg-night-800/80 text-sand-300 hover:bg-night-700/80 hover:text-sand-100 border border-night-700/50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                    <span className="font-body">{type.label}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-night-700/80 text-sand-400 group-hover:bg-night-600/80'
                    }`}>
                      {counts[type.id] || 0}
                    </span>
                  </button>
                );
              })}

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  showFilters || hasActiveFilters
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-night-900 shadow-lg shadow-gold-500/20'
                    : 'bg-night-800/80 text-sand-300 hover:bg-night-700/80 border border-night-700/50'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span className="font-body">Filtres</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Filtres avancés */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 pb-4 space-y-4 border-t border-gold-600/10 pt-4">
              <div className="flex items-center gap-3">
                <label className="text-sand-400 text-sm whitespace-nowrap font-body flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-500/70" />
                  Région :
                </label>
                <div className="relative flex-1">
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full bg-night-800/60 border border-night-700/50 rounded-xl px-4 py-2.5 text-sand-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/30 transition-all font-body appearance-none cursor-pointer"
                  >
                    <option value="all">Toutes les régions</option>
                    {regions.filter(r => r !== 'all').map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sand-500 pointer-events-none" />
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-night-800/60 hover:bg-night-700/60 text-sand-300 hover:text-sand-100 rounded-xl text-sm transition-all duration-300 border border-night-700/50 hover:border-terracotta-500/30 group font-body"
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Badge nombre de résultats */}
        {hasActiveFilters && (
          <div className={`mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-night-900 px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-gold-500/20 animate-fade-in ${
            isFilterAnimating ? 'animate-pulse' : ''
          }`}>
            <div className={`p-1 rounded-lg ${typeColorsBg[activeFilter]} bg-opacity-30`}>
              {(() => {
                const Icon = typeIcons[activeFilter];
                return <Icon className="w-4 h-4 text-night-900" />;
              })()}
            </div>
            <span className="font-display tracking-wide">{filteredPlaces.length}</span>
            <span className="font-body">lieu{filteredPlaces.length > 1 ? 'x' : ''} trouvé{filteredPlaces.length > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      {/* Map - Mode LIVE: charge dynamiquement selon la zone visible */}
      <InteractiveMap
        places={filteredPlaces}
        onPlaceClick={setSelectedPlace}
        height={mapHeight}
        autoLocate={true}
        showUserLocation={true}
        className="w-full h-full"
        liveMode={true}
        loading={loading}
        onBoundsChange={handleBoundsChange}
        onLoadImage={loadImageForPlace}
      />

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
