import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Heart, MapPin, Star, Clock, Euro, Calendar, Check, ExternalLink, Users } from 'lucide-react';
import Badge, { TemporaryBadge } from '../ui/Badge';
import { useUser } from '../../context/UserContext';

/**
 * Modal de détail d'un lieu
 * Affiche toutes les informations, galerie placeholder, actions
 */
const PlaceDetailModal = ({ place, isOpen, onClose }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, isVisited, markVisited } = useUser();

  // Fermeture avec Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !place) return null;

  const favorite = isFavorite(place.id);
  const visited = isVisited(place.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-stone-900 border border-stone-700/50 rounded-2xl overflow-hidden animate-slide-up">
        {/* Header image */}
        <div className="relative h-64 sm:h-80">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-stone-900/80 hover:bg-stone-800 backdrop-blur-sm rounded-full text-stone-300 hover:text-white transition-all"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Badge type={place.type} />
            {place.temporary && <TemporaryBadge endDate={place.endDate} />}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              {place.name}
            </h2>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {place.location}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                {place.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-20rem)]">
          {/* Description */}
          <p className="text-stone-300 text-lg leading-relaxed mb-6">
            {place.description}
          </p>

          {/* Infos pratiques */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-stone-800/50 rounded-xl p-4 text-center">
              <Euro className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <p className="text-amber-50 font-semibold">{place.price}</p>
              <p className="text-xs text-stone-500">Tarif</p>
            </div>
            <div className="bg-stone-800/50 rounded-xl p-4 text-center">
              <Clock className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <p className="text-amber-50 font-semibold text-sm">{place.hours}</p>
              <p className="text-xs text-stone-500">Horaires</p>
            </div>
            <div className="bg-stone-800/50 rounded-xl p-4 text-center">
              <Calendar className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <p className="text-amber-50 font-semibold">{place.period}</p>
              <p className="text-xs text-stone-500">Période</p>
            </div>
            <div className="bg-stone-800/50 rounded-xl p-4 text-center">
              <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <p className="text-amber-50 font-semibold">{place.rating}/5</p>
              <p className="text-xs text-stone-500">Note</p>
            </div>
          </div>

          {/* Points forts */}
          <div className="mb-6">
            <h3 className="font-display text-xl font-semibold text-amber-50 mb-3">
              Points forts
            </h3>
            <div className="flex flex-wrap gap-2">
              {place.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-amber-600/10 border border-amber-600/30 text-amber-400 rounded-full text-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Galerie placeholder */}
          <div className="mb-6">
            <h3 className="font-display text-xl font-semibold text-amber-50 mb-3">
              Galerie
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-stone-800/50 rounded-lg flex items-center justify-center text-stone-600"
                >
                  <span className="text-sm">Photo {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bouton Rencontrer */}
          <div className="mb-6">
            <h3 className="font-display text-xl font-semibold text-amber-50 mb-3">
              Voulez-vous visiter ce lieu accompagné ?
            </h3>
            <button
              onClick={() => {
                onClose();
                navigate(`/events?place=${encodeURIComponent(place.name)}`);
              }}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Users className="w-5 h-5" />
              Rencontrer des visiteurs
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => toggleFavorite(place.id)}
              className={`
                flex-1 flex items-center justify-center gap-2
                py-3 px-6
                rounded-xl
                font-medium
                transition-all duration-300
                ${favorite
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                  : 'bg-stone-800 border border-stone-700 text-stone-300 hover:bg-stone-700 hover:text-white'
                }
              `}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
              {favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>

            <button
              onClick={() => markVisited(place.id)}
              disabled={visited}
              className={`
                flex-1 flex items-center justify-center gap-2
                py-3 px-6
                rounded-xl
                font-medium
                transition-all duration-300
                ${visited
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                  : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/30 hover:from-amber-500 hover:to-amber-600'
                }
              `}
            >
              <Check className="w-5 h-5" />
              {visited ? 'Déjà visité' : 'Marquer comme visité'}
            </button>

            <button
              className="flex items-center justify-center gap-2 py-3 px-6 bg-stone-800 border border-stone-700 rounded-xl text-stone-300 hover:bg-stone-700 hover:text-white transition-all"
              aria-label="Voir sur Google Maps"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="sm:hidden">Maps</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailModal;
