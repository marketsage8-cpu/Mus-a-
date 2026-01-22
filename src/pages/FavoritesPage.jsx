import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Trash2 } from 'lucide-react';
import { useUser } from '../context/UserContext';
import PlaceCard from '../components/cards/PlaceCard';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Page des lieux favoris
 */
const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favoritePlaces, userData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-stone-900/50 border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-red-500/20 rounded-xl">
              <Heart className="w-6 h-6 text-red-400 fill-red-400" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-amber-50">
                Mes favoris
              </h1>
              <p className="text-stone-400">
                {userData.favorites.length} lieu{userData.favorites.length > 1 ? 'x' : ''} sauvegardé{userData.favorites.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {favoritePlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoritePlaces.map((place) => (
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-stone-800/50 flex items-center justify-center">
              <Heart className="w-12 h-12 text-stone-600" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-amber-50 mb-2">
              Aucun favori pour l'instant
            </h3>
            <p className="text-stone-400 mb-8 max-w-md mx-auto">
              Explorez notre collection de lieux culturels et ajoutez vos préférés en cliquant sur le cœur.
            </p>
            <button
              onClick={() => navigate('/explore')}
              className="
                px-8 py-4
                bg-gradient-to-r from-amber-600 to-amber-700
                text-white font-medium
                rounded-xl
                shadow-lg shadow-amber-900/30
                hover:from-amber-500 hover:to-amber-600
                transition-all
              "
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Explorer les lieux
              </span>
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

export default FavoritesPage;
