import { placeTypes } from '../../data/placeTypes';

/**
 * Onglets de filtrage par type de lieu
 * Scrollable horizontalement sur mobile
 */
const FilterTabs = ({ activeType, onTypeChange, className = '' }) => {
  return (
    <div className={`flex gap-2 overflow-x-auto pb-2 scrollbar-hide ${className}`}>
      {placeTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onTypeChange(type.id)}
          className={`
            flex-shrink-0
            px-4 py-2
            text-sm font-medium
            rounded-full
            border
            transition-all duration-300
            ${
              activeType === type.id
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 border-amber-600 text-white shadow-lg shadow-amber-900/30'
                : 'bg-stone-800/50 border-stone-700/50 text-stone-300 hover:bg-stone-700/50 hover:text-amber-50'
            }
          `}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
};

/**
 * Chips de filtre rapide pour la page d'accueil
 */
export const QuickFilterChips = ({ filters, activeFilters, onToggle, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onToggle(filter)}
          className={`
            px-3 py-1.5
            text-sm
            rounded-full
            border
            transition-all duration-300
            ${
              activeFilters.includes(filter)
                ? 'bg-amber-600/20 border-amber-600/50 text-amber-400'
                : 'bg-stone-800/30 border-stone-700/30 text-stone-400 hover:border-stone-600/50'
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
