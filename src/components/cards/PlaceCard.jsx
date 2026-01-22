import { Heart, Star, MapPin, Clock } from 'lucide-react';
import Badge, { TemporaryBadge } from '../ui/Badge';
import { useUser } from '../../context/UserContext';

/**
 * Carte d'un lieu culturel
 * Affiche image, infos principales, badges et bouton favoris
 */
const PlaceCard = ({ place, onClick, featured = false }) => {
  const { isFavorite, toggleFavorite, isVisited } = useUser();
  const favorite = isFavorite(place.id);
  const visited = isVisited(place.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(place.id);
  };

  return (
    <article
      onClick={() => onClick?.(place)}
      className={`
        group
        relative
        bg-stone-800/30
        border border-stone-700/30
        rounded-2xl
        overflow-hidden
        cursor-pointer
        hover:scale-[1.02]
        hover:border-amber-800/30
        transition-all duration-500
        ${featured ? 'col-span-2 row-span-2' : ''}
      `}
    >
      {/* Image container */}
      <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-48'}`}>
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

        {/* Badges top */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge type={place.type} />
          {place.temporary && <TemporaryBadge endDate={place.endDate} />}
        </div>

        {/* Visited indicator */}
        {visited && (
          <div className="absolute top-3 right-12 px-2 py-1 bg-emerald-600/80 backdrop-blur-md rounded-full text-xs text-white font-medium">
            Visité
          </div>
        )}

        {/* Favorite button */}
        <button
          onClick={handleFavoriteClick}
          className={`
            absolute top-3 right-3
            p-2
            rounded-full
            backdrop-blur-md
            transition-all duration-300
            ${favorite
              ? 'bg-red-500/80 text-white'
              : 'bg-stone-900/50 text-stone-300 hover:bg-stone-800/80 hover:text-red-400'
            }
          `}
          aria-label={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className={`font-display font-semibold text-amber-50 mb-2 group-hover:text-amber-400 transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
          {place.name}
        </h3>

        <div className="flex items-center gap-3 text-sm text-stone-400 mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {place.location}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            {place.rating}
          </span>
        </div>

        {featured && (
          <p className="text-stone-400 text-sm line-clamp-2 mb-3">
            {place.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-amber-400 font-semibold">{place.price}</span>
          <span className="flex items-center gap-1 text-xs text-stone-500">
            <Clock className="w-3 h-3" />
            {place.period}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PlaceCard;
