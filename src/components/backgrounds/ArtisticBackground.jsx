/**
 * Composant de fond artistique avec motifs élégants
 * Inspiré des musées, de l'art et de l'architecture culturelle
 */

/**
 * Motif de lignes dorées subtiles - style Art Déco
 */
export const GoldenLinesPattern = ({ opacity = 0.15 }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
    {/* Lignes diagonales dorées */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="golden-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <line x1="0" y1="100" x2="100" y2="0" stroke="#d4a574" strokeWidth="1" opacity={opacity} />
          <line x1="50" y1="100" x2="150" y2="0" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.7} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#golden-lines)" />
    </svg>

    {/* Cercles concentriques subtils */}
    <div className="absolute top-1/4 -right-32 w-96 h-96 opacity-[0.12]">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#d4a574" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#d4a574" strokeWidth="0.7" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#d4a574" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="20" fill="none" stroke="#d4a574" strokeWidth="0.4" />
      </svg>
    </div>

    <div className="absolute bottom-1/3 -left-32 w-80 h-80 opacity-[0.1]">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#d4a574" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="#d4a574" strokeWidth="0.7" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="#d4a574" strokeWidth="0.5" />
      </svg>
    </div>
  </div>
);

/**
 * Motif de constellation - points connectés
 */
export const ConstellationPattern = ({ opacity = 0.2 }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="constellation" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
          {/* Points */}
          <circle cx="50" cy="50" r="2.5" fill="#d4a574" opacity={opacity} />
          <circle cx="150" cy="80" r="2" fill="#d4a574" opacity={opacity * 0.8} />
          <circle cx="250" cy="30" r="2.2" fill="#d4a574" opacity={opacity * 0.9} />
          <circle cx="100" cy="150" r="2" fill="#d4a574" opacity={opacity * 0.7} />
          <circle cx="200" cy="180" r="2.5" fill="#d4a574" opacity={opacity} />
          <circle cx="280" cy="150" r="1.8" fill="#d4a574" opacity={opacity * 0.6} />
          <circle cx="30" cy="200" r="2.2" fill="#d4a574" opacity={opacity * 0.8} />
          <circle cx="180" cy="250" r="2" fill="#d4a574" opacity={opacity * 0.7} />
          <circle cx="80" cy="280" r="2.5" fill="#d4a574" opacity={opacity * 0.9} />
          <circle cx="250" cy="260" r="2" fill="#d4a574" opacity={opacity * 0.6} />

          {/* Lignes de connexion */}
          <line x1="50" y1="50" x2="150" y2="80" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.4} />
          <line x1="150" y1="80" x2="250" y2="30" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.4} />
          <line x1="150" y1="80" x2="100" y2="150" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.4} />
          <line x1="100" y1="150" x2="200" y2="180" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.4} />
          <line x1="200" y1="180" x2="280" y2="150" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.4} />
          <line x1="30" y1="200" x2="100" y2="150" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.4} />
          <line x1="180" y1="250" x2="200" y2="180" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.4} />
          <line x1="80" y1="280" x2="180" y2="250" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.4} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#constellation)" />
    </svg>
  </div>
);

/**
 * Motif géométrique - hexagones et lignes (style moderne)
 */
export const GeometricPattern = ({ opacity = 0.12 }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="geometric" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
          {/* Hexagones */}
          <polygon
            points="60,0 120,30 120,74 60,104 0,74 0,30"
            fill="none"
            stroke="#d4a574"
            strokeWidth="1"
            opacity={opacity}
          />
          <polygon
            points="60,20 100,40 100,64 60,84 20,64 20,40"
            fill="none"
            stroke="#d4a574"
            strokeWidth="0.7"
            opacity={opacity * 0.6}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#geometric)" />
    </svg>

    {/* Formes flottantes */}
    <div className="absolute top-20 right-20 w-40 h-40 opacity-[0.15] rotate-12">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="#d4a574" strokeWidth="1" />
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="#d4a574" strokeWidth="0.7" transform="rotate(45 50 50)" />
      </svg>
    </div>

    <div className="absolute bottom-40 left-10 w-32 h-32 opacity-[0.12] -rotate-6">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#d4a574" strokeWidth="1" />
        <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="#d4a574" strokeWidth="0.7" />
      </svg>
    </div>
  </div>
);

/**
 * Motif architectural - colonnes et arches (style musée)
 */
export const ArchitecturalPattern = ({ opacity = 0.1 }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
    {/* Colonnes verticales subtiles sur les côtés */}
    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a574] to-transparent" style={{ opacity: opacity * 2.5 }} />
    <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a574] to-transparent" style={{ opacity: opacity * 1.5 }} />

    <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a574] to-transparent" style={{ opacity: opacity * 2.5 }} />
    <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4a574] to-transparent" style={{ opacity: opacity * 1.5 }} />

    {/* Arche décorative en haut */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-[0.12]">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path d="M 0,100 Q 0,0 100,0 Q 200,0 200,100" fill="none" stroke="#d4a574" strokeWidth="1" />
        <path d="M 20,100 Q 20,20 100,20 Q 180,20 180,100" fill="none" stroke="#d4a574" strokeWidth="0.7" />
      </svg>
    </div>

    {/* Motif de cadres */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="frames" x="0" y="0" width="400" height="300" patternUnits="userSpaceOnUse">
          <rect x="50" y="50" width="100" height="80" fill="none" stroke="#d4a574" strokeWidth="0.7" opacity={opacity} rx="2" />
          <rect x="250" y="150" width="80" height="100" fill="none" stroke="#d4a574" strokeWidth="0.7" opacity={opacity * 0.8} rx="2" />
          <rect x="150" y="200" width="60" height="50" fill="none" stroke="#d4a574" strokeWidth="0.5" opacity={opacity * 0.6} rx="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#frames)" />
    </svg>
  </div>
);

/**
 * Motif de grain de toile - texture subtile
 */
export const CanvasTexturePattern = ({ opacity = 0.15 }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: opacity,
        mixBlendMode: 'overlay'
      }}
    />

    {/* Grain de toile - lignes croisées */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity: opacity * 0.6 }}>
      <defs>
        <pattern id="canvas-weave" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="4" y2="0" stroke="#d4a574" strokeWidth="0.3" />
          <line x1="0" y1="0" x2="0" y2="4" stroke="#d4a574" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#canvas-weave)" />
    </svg>
  </div>
);

/**
 * Motif combiné élégant - Version principale pour muzea
 */
export const MuzeaPattern = ({ variant = 'default' }) => {
  const patterns = {
    default: (
      <>
        {/* Dégradé de base */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/[0.08] via-transparent to-[#e07a5f]/[0.08]" />
        </div>

        {/* Points et lignes */}
        <ConstellationPattern opacity={0.15} />

        {/* Cercle décoratif principal */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.1]" style={{ zIndex: 1 }}>
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="#d4a574" strokeWidth="1" />
            <circle cx="200" cy="200" r="150" fill="none" stroke="#d4a574" strokeWidth="0.7" strokeDasharray="10 5" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#d4a574" strokeWidth="0.5" />
          </svg>
        </div>
      </>
    ),

    guides: (
      <>
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4a574]/[0.1] via-transparent to-transparent" />
        </div>
        <ArchitecturalPattern opacity={0.1} />
      </>
    ),

    meetings: (
      <>
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#e07a5f]/[0.08] via-transparent to-[#d4a574]/[0.08]" />
        </div>
        <GeometricPattern opacity={0.1} />
      </>
    ),

    profile: (
      <>
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4a574]/[0.06] to-transparent" />
        </div>
        <GoldenLinesPattern opacity={0.12} />
      </>
    ),

    art: (
      <>
        <CanvasTexturePattern opacity={0.12} />
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute inset-0 bg-gradient-radial from-[#d4a574]/[0.08] via-transparent to-transparent" />
        </div>
      </>
    )
  };

  return patterns[variant] || patterns.default;
};

export default MuzeaPattern;
