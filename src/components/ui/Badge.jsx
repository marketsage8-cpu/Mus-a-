import { getTypeBadgeColor } from '../../data/placeTypes';

/**
 * Badge affichant le type de lieu
 * Couleur dynamique selon le type
 */
const Badge = ({ type, className = '' }) => {
  const colorClass = getTypeBadgeColor(type);

  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1.5
        text-xs font-medium uppercase tracking-wider
        text-white
        rounded-full
        backdrop-blur-md
        ${colorClass}
        ${className}
      `}
    >
      {type}
    </span>
  );
};

/**
 * Badge temporaire pour les expositions
 */
export const TemporaryBadge = ({ endDate, className = '' }) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1
        px-3 py-1.5
        text-xs font-medium
        text-amber-200
        bg-red-600/80
        rounded-full
        backdrop-blur-md
        ${className}
      `}
    >
      <span className="w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse" />
      Jusqu'au {endDate}
    </span>
  );
};

/**
 * Badge de notification
 */
export const NotificationBadge = ({ count, className = '' }) => {
  if (!count || count <= 0) return null;

  return (
    <span
      className={`
        absolute -top-1 -right-1
        min-w-[18px] h-[18px]
        flex items-center justify-center
        text-[10px] font-bold
        text-white
        bg-red-500
        rounded-full
        ${className}
      `}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
};

export default Badge;
