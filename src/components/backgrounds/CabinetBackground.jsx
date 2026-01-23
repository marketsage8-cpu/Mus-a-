/**
 * CabinetBackground - Arrière-plan décoratif "Cabinet de curiosités"
 *
 * Utilise l'image PNG avec gravures dorées style musée
 * Avec des motifs animés flottants pour un effet dynamique
 */

// Motifs SVG décoratifs classiques
const PatternMotifs = {
  // Étoile à 8 branches style compas
  star: (
    <path
      d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
      fill="currentColor"
    />
  ),
  // Losange ornemental
  diamond: (
    <path
      d="M12 0L24 12L12 24L0 12L12 0ZM12 4L4 12L12 20L20 12L12 4Z"
      fill="currentColor"
    />
  ),
  // Spirale grecque simplifiée
  spiral: (
    <path
      d="M12 2C17.5 2 22 6.5 22 12C22 15 20.5 17.5 18 19L18 16C19.5 15 20 13.5 20 12C20 7.5 16.5 4 12 4C7.5 4 4 7.5 4 12C4 14 5 16 7 17.5L7 20.5C3.5 18.5 2 15 2 12C2 6.5 6.5 2 12 2Z"
      fill="currentColor"
    />
  ),
  // Cercle avec point central (symbole solaire)
  sun: (
    <>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </>
  ),
  // Croix ornementale
  cross: (
    <path
      d="M10 0H14V10H24V14H14V24H10V14H0V10H10V0ZM11 1V11H1V13H11V23H13V13H23V11H13V1H11Z"
      fill="currentColor"
    />
  ),
  // Feuille stylisée
  leaf: (
    <path
      d="M12 2C6 8 4 14 4 18C4 20 6 22 8 22C10 22 12 20 12 18C12 20 14 22 16 22C18 22 20 20 20 18C20 14 18 8 12 2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  ),
  // Petit diamant
  smallDiamond: (
    <path d="M6 0L12 6L6 12L0 6L6 0Z" fill="currentColor" />
  ),
  // Cercle simple
  circle: (
    <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
  ),
};

// Configuration des motifs flottants
const floatingPatterns = [
  // Coins supérieurs
  { motif: 'star', x: '5%', y: '8%', size: 20, animation: 'animate-float', delay: 'animation-delay-1', opacity: 0.4 },
  { motif: 'diamond', x: '92%', y: '5%', size: 18, animation: 'animate-drift-slow', delay: 'animation-delay-3', opacity: 0.35 },

  // Zone haute
  { motif: 'sun', x: '25%', y: '12%', size: 24, animation: 'animate-golden-glow', delay: 'animation-delay-2', opacity: 0.5 },
  { motif: 'spiral', x: '75%', y: '15%', size: 22, animation: 'animate-gentle-rotate', delay: 'animation-delay-4', opacity: 0.4 },
  { motif: 'smallDiamond', x: '45%', y: '8%', size: 12, animation: 'animate-sparkle', delay: 'animation-delay-5', opacity: 0.6 },

  // Zone centrale gauche
  { motif: 'leaf', x: '3%', y: '35%', size: 26, animation: 'animate-wave', delay: 'animation-delay-1', opacity: 0.35 },
  { motif: 'circle', x: '8%', y: '55%', size: 14, animation: 'animate-scale-pulse', delay: 'animation-delay-6', opacity: 0.4 },
  { motif: 'star', x: '6%', y: '75%', size: 16, animation: 'animate-float-slow', delay: 'animation-delay-2', opacity: 0.45 },

  // Zone centrale droite
  { motif: 'cross', x: '94%', y: '30%', size: 20, animation: 'animate-float', delay: 'animation-delay-3', opacity: 0.3 },
  { motif: 'smallDiamond', x: '96%', y: '50%', size: 10, animation: 'animate-sparkle', delay: 'animation-delay-7', opacity: 0.5 },
  { motif: 'spiral', x: '93%', y: '70%', size: 18, animation: 'animate-drift', delay: 'animation-delay-4', opacity: 0.4 },

  // Zone basse
  { motif: 'sun', x: '15%', y: '88%', size: 22, animation: 'animate-golden-glow', delay: 'animation-delay-5', opacity: 0.45 },
  { motif: 'diamond', x: '50%', y: '92%', size: 16, animation: 'animate-wave', delay: 'animation-delay-8', opacity: 0.35 },
  { motif: 'star', x: '85%', y: '90%', size: 18, animation: 'animate-float-fast', delay: 'animation-delay-1', opacity: 0.4 },

  // Éléments supplémentaires dispersés
  { motif: 'circle', x: '30%', y: '25%', size: 12, animation: 'animate-scale-pulse', delay: 'animation-delay-3', opacity: 0.3 },
  { motif: 'smallDiamond', x: '70%', y: '40%', size: 10, animation: 'animate-sparkle', delay: 'animation-delay-6', opacity: 0.35 },
  { motif: 'leaf', x: '20%', y: '60%', size: 20, animation: 'animate-gentle-rotate', delay: 'animation-delay-2', opacity: 0.3 },
  { motif: 'circle', x: '80%', y: '80%', size: 14, animation: 'animate-float-slow', delay: 'animation-delay-4', opacity: 0.35 },
];

const CabinetBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Image de fond avec gravures dorées */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/museum-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Motifs animés flottants */}
      <div className="absolute inset-0">
        {floatingPatterns.map((pattern, index) => {
          const viewBox = pattern.motif === 'smallDiamond' || pattern.motif === 'circle'
            ? '0 0 12 12'
            : '0 0 24 24';

          return (
            <svg
              key={index}
              className={`absolute ${pattern.animation} ${pattern.delay}`}
              style={{
                left: pattern.x,
                top: pattern.y,
                width: pattern.size,
                height: pattern.size,
                color: '#d4af37',
                opacity: pattern.opacity,
              }}
              viewBox={viewBox}
              xmlns="http://www.w3.org/2000/svg"
            >
              {PatternMotifs[pattern.motif]}
            </svg>
          );
        })}
      </div>

      {/* Particules dorées subtiles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full animate-sparkle animation-delay-${(i % 8) + 1}`}
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
              width: 3 + (i % 3),
              height: 3 + (i % 3),
              backgroundColor: '#d4af37',
              opacity: 0.3 + (i % 3) * 0.1,
            }}
          />
        ))}
      </div>

      {/* Vignette gradient pour profondeur atmosphérique */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 50% 50%, transparent 0%, rgba(10, 13, 26, 0.35) 100%),
            linear-gradient(to bottom, rgba(10, 13, 26, 0.15) 0%, transparent 20%, transparent 80%, rgba(10, 13, 26, 0.25) 100%)
          `,
        }}
      />
    </div>
  );
};

export default CabinetBackground;
