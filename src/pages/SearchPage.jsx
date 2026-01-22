import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { places } from '../data/places';
import SearchBar from '../components/ui/SearchBar';
import PlaceCard from '../components/cards/PlaceCard';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Page de recherche dédiée
 */
const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);

  const filteredPlaces = places.filter((place) => {
    if (!searchQuery.trim()) return false;
    const query = searchQuery.toLowerCase();
    return (
      place.name.toLowerCase().includes(query) ||
      place.location.toLowerCase().includes(query) ||
      place.description?.toLowerCase().includes(query) ||
      place.type?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-stone-900/50 border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl font-bold text-amber-50 mb-2">
              Recherche
            </h1>
            <p className="text-stone-400">
              Trouvez des musées, monuments et sites culturels
            </p>
          </div>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Rechercher un lieu, une période, une région..."
            size="large"
            className="max-w-2xl mx-auto"
          />
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {searchQuery.trim() ? (
          <>
            <p className="text-stone-400 mb-6">
              {filteredPlaces.length} résultat{filteredPlaces.length > 1 ? 's' : ''} pour "{searchQuery}"
            </p>

            {filteredPlaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaces.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    onClick={setSelectedPlace}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-stone-800/50 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-stone-600" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-amber-50 mb-2">
                  Aucun résultat
                </h3>
                <p className="text-stone-400 max-w-md mx-auto">
                  Aucun lieu ne correspond à votre recherche. Essayez d'autres termes.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-stone-800/50 flex items-center justify-center">
              <Search className="w-10 h-10 text-stone-600" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-amber-50 mb-2">
              Commencez votre recherche
            </h3>
            <p className="text-stone-400 max-w-md mx-auto">
              Tapez un nom de lieu, une ville ou une période pour découvrir des sites culturels.
            </p>
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

export default SearchPage;
