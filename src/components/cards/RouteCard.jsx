import { MapPin, Clock, ChevronRight } from 'lucide-react';

/**
 * Carte d'un parcours thématique
 * Affiche infos du parcours avec gradient coloré
 */
const RouteCard = ({ route, onClick }) => {
  return (
    <article
      onClick={() => onClick?.(route)}
      className="
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
      "
    >
      {/* Image avec gradient overlay */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={route.image}
          alt={route.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient coloré selon le parcours */}
        <div className={`absolute inset-0 bg-gradient-to-t ${route.color} opacity-70`} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />

        {/* Infos sur l'image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display text-xl font-semibold text-white mb-1">
            {route.name}
          </h3>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {route.placeCount} lieux
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {route.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-stone-400 text-sm line-clamp-2 mb-3">
          {route.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {route.highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs bg-stone-700/50 text-stone-300 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>

          <span className="flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:gap-2 transition-all">
            Découvrir
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default RouteCard;
