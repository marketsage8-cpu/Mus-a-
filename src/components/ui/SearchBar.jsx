import { Search, X } from 'lucide-react';

/**
 * Barre de recherche réutilisable
 * Avec bouton de réinitialisation et icône de recherche
 */
const SearchBar = ({
  value,
  onChange,
  placeholder = 'Rechercher un lieu, une période, une région...',
  onSubmit,
  className = '',
  size = 'default' // 'default' | 'large'
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  const handleClear = () => {
    onChange('');
  };

  const sizeClasses = {
    default: 'py-3 px-4 pl-12 text-base',
    large: 'py-4 px-6 pl-14 text-lg'
  };

  const iconSizeClasses = {
    default: 'left-4 w-5 h-5',
    large: 'left-5 w-6 h-6'
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search
        className={`
          absolute top-1/2 -translate-y-1/2
          text-stone-400
          pointer-events-none
          ${iconSizeClasses[size]}
        `}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          w-full
          bg-stone-800/50
          border border-stone-700/50
          rounded-xl
          text-amber-50
          placeholder-stone-500
          focus:outline-none
          focus:border-amber-600/50
          focus:ring-2 focus:ring-amber-600/20
          transition-all duration-300
          ${sizeClasses[size]}
          ${value ? 'pr-12' : 'pr-4'}
        `}
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            p-1
            text-stone-400
            hover:text-amber-50
            transition-colors
          "
          aria-label="Effacer la recherche"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
