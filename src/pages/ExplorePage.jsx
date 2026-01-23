import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Grid, List, SlidersHorizontal } from 'lucide-react';
import { places } from '../data/places';
import { useFilters } from '../hooks/useFilters';
import SearchBar from '../components/ui/SearchBar';
import FilterTabs from '../components/ui/FilterTabs';
import PlaceCard from '../components/cards/PlaceCard';
import InteractiveMap from '../components/map/InteractiveMap';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Page d'exploration avec carte, filtres et grille de résultats
 */
const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showMap, setShowMap] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

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

  // Récupère le paramètre de recherche de l'URL
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams, setSearchQuery]);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-stone-900/50 border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="font-display text-3xl font-bold text-amber-50 mb-1">
                Explorer
              </h1>
              <p className="text-stone-400">
                {resultsCount} lieu{resultsCount > 1 ? 'x' : ''} trouvé{resultsCount > 1 ? 's' : ''}
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="ml-2 text-amber-400 hover:text-amber-300 text-sm"
                  >
                    (Réinitialiser)
                  </button>
                )}
              </p>
            </div>

            {/* View controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowMap(!showMap)}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${showMap
                    ? 'bg-amber-600/20 text-amber-400 border border-amber-600/30'
                    : 'bg-stone-800 text-stone-400 border border-stone-700/50 hover:text-amber-50'
                  }
                `}
              >
                <MapPin className="w-4 h-4" />
                Carte
              </button>

              <div className="flex items-center bg-stone-800 border border-stone-700/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-stone-700 text-amber-400' : 'text-stone-400 hover:text-amber-50'}`}
                  aria-label="Vue grille"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-stone-700 text-amber-400' : 'text-stone-400 hover:text-amber-50'}`}
                  aria-label="Vue liste"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Search and filters */}
          <div className="space-y-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Rechercher un lieu, une période, une région..."
            />

            <FilterTabs
              activeType={activeType}
              onTypeChange={setActiveType}
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Map - Limite à 10 lieux les plus proches pour optimiser l'affichage */}
        {showMap && filteredPlaces.length > 0 && (
          <div className="mb-6">
            <InteractiveMap
              places={filteredPlaces.slice(0, 10)}
              onPlaceClick={setSelectedPlace}
              height="350px"
              autoLocate={true}
              showUserLocation={true}
            />
            {filteredPlaces.length > 10 && (
              <p className="text-center text-stone-400 text-sm mt-2">
                Affichage des 10 lieux les plus proches sur la carte ({filteredPlaces.length} résultats au total)
              </p>
            )}
          </div>
        )}

        {/* Results grid/list */}
        {filteredPlaces.length > 0 ? (
          <div className={`
            ${viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }
          `}>
            {filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                onClick={setSelectedPlace}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-stone-800/50 flex items-center justify-center">
              <MapPin className="w-10 h-10 text-stone-600" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-amber-50 mb-2">
              Aucun résultat
            </h3>
            <p className="text-stone-400 mb-6 max-w-md mx-auto">
              Aucun lieu ne correspond à vos critères de recherche. Essayez de modifier vos filtres.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-500 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

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
