import { useState } from 'react';
import { Search, MapPin, Castle, Landmark, Star } from 'lucide-react';
import { places } from '../data/places';
import { frenchMuseums } from '../data/frenchMuseums';
import SearchBar from '../components/ui/SearchBar';
import PlaceCard from '../components/cards/PlaceCard';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

// Combiner tous les lieux pour la recherche (musées + châteaux + expositions)
const allSearchablePlaces = [
  ...places,
  ...frenchMuseums.map(m => ({
    id: m.id,
    name: m.name,
    type: m.type,
    location: `${m.city}, ${m.region}`,
    city: m.city,
    region: m.region,
    image: m.image,
    rating: (Math.random() * 0.5 + 4.5).toFixed(1),
    description: `Découvrez ${m.name}, un magnifique ${m.type} situé à ${m.city} en ${m.region}.`,
    coordinates: { lat: 48.8566, lng: 2.3522 },
    price: m.type === 'musée' ? '12€ - 18€' : m.type === 'château' ? '10€ - 15€' : 'Gratuit',
    hours: '10h00 - 18h00'
  }))
];

/**
 * Page de recherche dédiée
 */
const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'musée', 'château', 'exposition'

  const filteredPlaces = allSearchablePlaces.filter((place) => {
    if (!searchQuery.trim()) return false;
    const query = searchQuery.toLowerCase();
    const matchesQuery = (
      place.name.toLowerCase().includes(query) ||
      place.location.toLowerCase().includes(query) ||
      place.city?.toLowerCase().includes(query) ||
      place.region?.toLowerCase().includes(query) ||
      place.description?.toLowerCase().includes(query) ||
      place.type?.toLowerCase().includes(query)
    );

    // Filtre par type
    if (activeFilter !== 'all' && place.type !== activeFilter) {
      return false;
    }

    return matchesQuery;
  });

  // Filtres disponibles
  const filters = [
    { id: 'all', label: 'Tous', icon: Search },
    { id: 'musée', label: 'Musées', icon: Landmark },
    { id: 'château', label: 'Châteaux', icon: Castle },
    { id: 'église', label: 'Églises', icon: Landmark },
    { id: 'exposition', label: 'Expositions', icon: Landmark },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 animate-fade-in bg-night-950 relative">
      {/* Image de fond galerie avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566054757965-8c4085344c96?w=1920&q=80"
          alt="Galerie de musée"
          className="w-full h-full object-cover opacity-15"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom,
              rgba(10, 15, 26, 0.95) 0%,
              rgba(10, 15, 26, 0.85) 30%,
              rgba(10, 15, 26, 0.9) 70%,
              rgba(10, 15, 26, 0.98) 100%)`
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 bg-night-900/60 backdrop-blur-sm border-b border-night-800/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1
              className="font-serif-italic text-4xl sm:text-5xl mb-3"
              style={{ color: '#e07a5f' }}
            >
              Recherche
            </h1>
            <p className="text-gray-400 font-body">
              Trouvez des musées, châteaux et sites culturels
            </p>
          </div>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Rechercher un lieu, une ville, une région..."
            size="large"
            className="max-w-2xl mx-auto"
          />

          {/* Filtres de type */}
          <div className="flex justify-center gap-3 mt-6">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full
                    font-medium text-sm
                    transition-all duration-300
                    ${isActive
                      ? 'bg-[#e07a5f] text-[#243350] shadow-lg shadow-[#e07a5f]/30'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {searchQuery.trim() ? (
          <>
            <p className="text-gray-400 mb-6 font-body">
              {filteredPlaces.length} résultat{filteredPlaces.length > 1 ? 's' : ''} pour "{searchQuery}"
              {activeFilter !== 'all' && ` dans ${activeFilter}s`}
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
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-night-800/50 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-gray-500" />
                </div>
                <h3
                  className="font-serif-italic text-2xl mb-2"
                  style={{ color: '#e07a5f' }}
                >
                  Aucun résultat
                </h3>
                <p className="text-gray-400 max-w-md mx-auto font-body">
                  Aucun lieu ne correspond à votre recherche. Essayez d'autres termes ou modifiez vos filtres.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-night-800/50 flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-500" />
            </div>
            <h3
              className="font-serif-italic text-2xl mb-2"
              style={{ color: '#e07a5f' }}
            >
              Commencez votre recherche
            </h3>
            <p className="text-gray-400 max-w-md mx-auto font-body">
              Tapez un nom de lieu, une ville ou une région pour découvrir des sites culturels.
            </p>

            {/* Suggestions de recherche */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Louvre', 'Versailles', 'Lyon', 'Bordeaux', 'Monet'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setSearchQuery(suggestion)}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#e07a5f]/30 hover:text-[#e07a5f] transition-all text-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
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
