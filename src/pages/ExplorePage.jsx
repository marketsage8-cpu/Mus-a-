import { useState, useEffect, useMemo } from 'react';
import { places, placeTypes } from '../data/places';
import InteractiveMap from '../components/map/InteractiveMap';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import { Building2, Castle, Landmark, Calendar, MapPin, X, Filter, ChevronDown } from 'lucide-react';

/**
 * Page d'exploration avec carte en plein écran et filtres
 * Affiche la carte interactive avec options de filtrage
 */
const ExplorePage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapHeight, setMapHeight] = useState('calc(100vh - 72px)');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Extraire les régions uniques
  const regions = useMemo(() => {
    const uniqueRegions = [...new Set(places.map(p => {
      const parts = p.location.split(', ');
      return parts[parts.length - 1];
    }))].sort();
    return ['all', ...uniqueRegions];
  }, []);

  // Filtrer les lieux selon le type, la région et la recherche
  const filteredPlaces = useMemo(() => {
    return places.filter(place => {
      // Filtre par type
      if (activeFilter !== 'all' && place.type !== activeFilter) {
        return false;
      }

      // Filtre par région
      if (selectedRegion !== 'all') {
        const placeRegion = place.location.split(', ').pop();
        if (placeRegion !== selectedRegion) {
          return false;
        }
      }

      // Filtre par recherche
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
  }, [activeFilter, selectedRegion, searchQuery]);

  // Compter les lieux par type
  const counts = useMemo(() => {
    const result = { all: places.length };
    placeTypes.forEach(type => {
      if (type.id !== 'all') {
        result[type.id] = places.filter(p => p.type === type.id).length;
      }
    });
    return result;
  }, []);

  // Icônes pour les types
  const typeIcons = {
    'all': MapPin,
    'musée': Building2,
    'château': Castle,
    'monument': Landmark,
    'exposition': Calendar
  };

  // Couleurs pour les types
  const typeColors = {
    'all': 'bg-gray-600',
    'musée': 'bg-blue-500',
    'château': 'bg-amber-600',
    'monument': 'bg-emerald-600',
    'exposition': 'bg-purple-500'
  };

  // Calculate map height based on viewport
  useEffect(() => {
    const updateHeight = () => {
      const navHeight = 72;
      setMapHeight(`calc(100vh - ${navHeight}px)`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  const clearFilters = () => {
    setActiveFilter('all');
    setSelectedRegion('all');
    setSearchQuery('');
  };

  const hasActiveFilters = activeFilter !== 'all' || selectedRegion !== 'all' || searchQuery;

  return (
    <div className="relative w-full" style={{ height: mapHeight }}>
      {/* Barre de filtres en haut */}
      <div className="absolute top-0 left-0 right-0 z-[1000] p-3">
        {/* Ligne principale de filtres */}
        <div className="bg-stone-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-stone-700 p-2">
          {/* Filtres par type - toujours visibles */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
            {placeTypes.map((type) => {
              const Icon = typeIcons[type.id] || MapPin;
              const isActive = activeFilter === type.id;
              const colorClass = typeColors[type.id] || 'bg-gray-600';

              return (
                <button
                  key={type.id}
                  onClick={() => handleFilterClick(type.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? `${colorClass} text-white shadow-md`
                      : 'bg-stone-800 text-gray-300 hover:bg-stone-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{type.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20' : 'bg-stone-700'
                  }`}>
                    {counts[type.id]}
                  </span>
                </button>
              );
            })}

            {/* Bouton filtres avancés */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                showFilters || hasActiveFilters
                  ? 'bg-[#d4a574] text-stone-900'
                  : 'bg-stone-800 text-gray-300 hover:bg-stone-700'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Filtres</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filtres avancés - panneau dépliable */}
          {showFilters && (
            <div className="border-t border-stone-700 pt-3 mt-2 space-y-3">
              {/* Recherche */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un lieu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Filtre par région */}
              <div className="flex items-center gap-3">
                <label className="text-gray-400 text-sm whitespace-nowrap">Région :</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="flex-1 bg-stone-800 border border-stone-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                >
                  <option value="all">Toutes les régions</option>
                  {regions.filter(r => r !== 'all').map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              {/* Bouton réinitialiser */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-gray-300 rounded-lg text-sm transition-colors"
                >
                  <X className="w-4 h-4" />
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          )}
        </div>

        {/* Badge nombre de résultats */}
        {hasActiveFilters && (
          <div className="mt-2 inline-flex items-center gap-2 bg-[#d4a574]/90 text-stone-900 px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg">
            <MapPin className="w-4 h-4" />
            {filteredPlaces.length} lieu{filteredPlaces.length > 1 ? 'x' : ''} trouvé{filteredPlaces.length > 1 ? 's' : ''}
          </div>
        )}
      </div>

      {/* Map - Full screen */}
      <InteractiveMap
        places={filteredPlaces}
        onPlaceClick={setSelectedPlace}
        height={mapHeight}
        autoLocate={true}
        showUserLocation={true}
        className="w-full h-full"
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
