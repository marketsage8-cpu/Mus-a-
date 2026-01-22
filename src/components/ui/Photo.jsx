import { useState } from 'react';

/**
 * Composant Photo - Affiche une image avec gestion du chargement et des erreurs
 *
 * @param {string} src - Chemin vers l'image (ex: "/photos/mon-image.jpg")
 * @param {string} alt - Texte alternatif pour l'accessibilite
 * @param {string} className - Classes CSS additionnelles
 * @param {string} size - Taille predefinies: "sm", "md", "lg", "full"
 * @param {boolean} rounded - Arrondir les coins de l'image
 * @param {string} objectFit - Comment l'image doit s'adapter: "cover", "contain", "fill"
 */
export default function Photo({
  src,
  alt = "Photo",
  className = "",
  size = "md",
  rounded = false,
  objectFit = "cover"
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-72 h-72",
    full: "w-full h-full"
  };

  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill"
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`
          ${sizeClasses[size]}
          ${rounded ? 'rounded-lg' : ''}
          bg-gray-200 flex items-center justify-center
          ${className}
        `}
      >
        <div className="text-center text-gray-500">
          <svg
            className="w-8 h-8 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs">Image non disponible</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {isLoading && (
        <div
          className={`
            absolute inset-0
            ${rounded ? 'rounded-lg' : ''}
            bg-gray-200 animate-pulse
          `}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          ${sizeClasses[size]}
          ${rounded ? 'rounded-lg' : ''}
          ${objectFitClasses[objectFit]}
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          transition-opacity duration-300
        `}
      />
    </div>
  );
}
