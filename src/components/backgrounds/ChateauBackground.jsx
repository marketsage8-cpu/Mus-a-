/**
 * ChateauBackground - Décor de château ultra-détaillé
 *
 * Éléments d'architecture de château avec animation "trait par trait"
 * - Tours avec créneaux et mâchicoulis
 * - Arches gothiques et ogives
 * - Frontons et gables
 * - Fenêtres à meneaux
 * - Blasons et héraldique
 */

// ========================================
// TOUR DE CHÂTEAU AVEC CRÉNEAUX
// ========================================
const CastleTower = ({ x, y, scale = 1, delay = 0, mirror = false }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${mirror ? -scale : scale}, ${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '3s' }}
  >
    {/* Base de la tour */}
    <path
      className="museum-element stroke-very-long"
      d="M0 400 L0 100 L60 100 L60 400"
      fill="none" stroke="#d4af37" strokeWidth="1.2"
    />

    {/* Pierres de taille - texture du mur */}
    {[...Array(12)].map((_, i) => (
      <path
        key={`stone-row-${i}`}
        className="museum-element-secondary stroke-medium"
        d={`M2 ${130 + i * 22} L58 ${130 + i * 22}`}
        fill="none" stroke="#d4af37" strokeWidth="0.3" strokeOpacity="0.5"
      />
    ))}
    {[...Array(12)].map((_, i) => (
      <g key={`stone-col-${i}`}>
        <path className="museum-element-micro stroke-tiny" d={`M${10 + (i % 2) * 10} ${130 + i * 22} L${10 + (i % 2) * 10} ${152 + i * 22}`} fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.4" />
        <path className="museum-element-micro stroke-tiny" d={`M${30 + (i % 2) * 10} ${130 + i * 22} L${30 + (i % 2) * 10} ${152 + i * 22}`} fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.4" />
        <path className="museum-element-micro stroke-tiny" d={`M${50 - (i % 2) * 10} ${130 + i * 22} L${50 - (i % 2) * 10} ${152 + i * 22}`} fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.4" />
      </g>
    ))}

    {/* Créneaux (merlons et créneaux) */}
    <path
      className="museum-element stroke-long"
      d="M-5 100 L-5 80 L8 80 L8 100 L18 100 L18 80 L32 80 L32 100 L42 100 L42 80 L55 80 L55 100 L65 100 L65 80 L75 80"
      fill="none" stroke="#d4af37" strokeWidth="1"
    />

    {/* Détails des merlons */}
    <path className="museum-element-detail stroke-short" d="M-3 82 L6 82 M-3 85 L6 85" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <path className="museum-element-detail stroke-short" d="M20 82 L30 82 M20 85 L30 85" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <path className="museum-element-detail stroke-short" d="M44 82 L53 82 M44 85 L53 85" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Mâchicoulis sous les créneaux */}
    <path
      className="museum-element-secondary stroke-medium"
      d="M-8 100 L-8 108 L68 108 L68 100"
      fill="none" stroke="#d4af37" strokeWidth="0.8"
    />
    {/* Consoles des mâchicoulis */}
    {[...Array(6)].map((_, i) => (
      <path
        key={`console-${i}`}
        className="museum-element-detail stroke-short"
        d={`M${-4 + i * 12} 100 L${-4 + i * 12} 115 Q${2 + i * 12} 115 ${2 + i * 12} 108`}
        fill="none" stroke="#d4af37" strokeWidth="0.5"
      />
    ))}

    {/* Fenêtre à meneaux */}
    <rect className="museum-element-secondary stroke-medium" x="15" y="180" width="30" height="50" fill="none" stroke="#d4af37" strokeWidth="0.8" />
    <path className="museum-element-detail stroke-short" d="M30 180 L30 230 M15 205 L45 205" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    {/* Arc de la fenêtre */}
    <path className="museum-element-detail stroke-short" d="M15 180 Q30 165 45 180" fill="none" stroke="#d4af37" strokeWidth="0.6" />

    {/* Meurtrière */}
    <path className="museum-element-micro stroke-tiny" d="M28 280 L28 310 L32 310 L32 280 M26 292 L34 292 M26 298 L34 298" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Toit conique avec girouette */}
    <path
      className="museum-element stroke-long"
      d="M-10 80 L30 30 L70 80"
      fill="none" stroke="#d4af37" strokeWidth="1"
    />
    {/* Tuiles du toit */}
    <path className="museum-element-secondary stroke-medium" d="M-5 75 L30 35 L65 75" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <path className="museum-element-micro stroke-tiny" d="M0 70 L30 40 L60 70" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Girouette */}
    <path className="museum-element-detail stroke-short" d="M30 30 L30 10" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <path className="museum-element-micro stroke-tiny" d="M25 15 L30 10 L35 15 L30 18 Z" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <path className="museum-element-micro stroke-micro" d="M30 10 L30 5 M28 8 L32 8" fill="none" stroke="#d4af37" strokeWidth="0.25" />
  </g>
);

// ========================================
// ARCHE GOTHIQUE
// ========================================
const GothicArch = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.5s' }}
  >
    {/* Piliers */}
    <path className="museum-element stroke-very-long" d="M0 180 L0 0 M80 180 L80 0" fill="none" stroke="#d4af37" strokeWidth="1.2" />

    {/* Bases des piliers */}
    <rect className="museum-element-secondary stroke-medium" x="-5" y="175" width="18" height="8" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <rect className="museum-element-secondary stroke-medium" x="67" y="175" width="18" height="8" fill="none" stroke="#d4af37" strokeWidth="0.6" />

    {/* Chapiteaux */}
    <path className="museum-element-detail stroke-short" d="M-6 15 L14 15 L12 0 L-4 0 Z" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <path className="museum-element-detail stroke-short" d="M66 15 L86 15 L84 0 L68 0 Z" fill="none" stroke="#d4af37" strokeWidth="0.6" />

    {/* Feuillages des chapiteaux */}
    <path className="museum-element-micro stroke-tiny" d="M-2 12 Q2 8 6 12 Q10 8 10 12" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <path className="museum-element-micro stroke-tiny" d="M70 12 Q74 8 78 12 Q82 8 82 12" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Arc ogival principal */}
    <path
      className="museum-element stroke-long"
      d="M0 0 Q0 -60 40 -80 Q80 -60 80 0"
      fill="none" stroke="#d4af37" strokeWidth="1.2"
    />

    {/* Arcs intérieurs */}
    <path className="museum-element-secondary stroke-medium" d="M4 0 Q4 -55 40 -73 Q76 -55 76 0" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <path className="museum-element-detail stroke-short" d="M8 0 Q8 -50 40 -66 Q72 -50 72 0" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Clé de voûte */}
    <path className="museum-element-detail stroke-short" d="M35 -75 L40 -82 L45 -75 L45 -68 L35 -68 Z" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <circle className="museum-element-micro stroke-micro" cx="40" cy="-72" r="3" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Nervures de l'arc */}
    <path className="museum-element-micro stroke-tiny" d="M10 -10 L40 -65 L70 -10" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <path className="museum-element-micro stroke-tiny" d="M15 -20 L40 -60 L65 -20" fill="none" stroke="#d4af37" strokeWidth="0.2" />
  </g>
);

// ========================================
// FRONTON CLASSIQUE
// ========================================
const ClassicPediment = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.5s' }}
  >
    {/* Entablement */}
    <rect className="museum-element stroke-long" x="0" y="0" width="160" height="15" fill="none" stroke="#d4af37" strokeWidth="1" />
    <path className="museum-element-secondary stroke-medium" d="M2 3 L158 3 M2 12 L158 12" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Triglyphes */}
    {[...Array(7)].map((_, i) => (
      <g key={`triglyph-${i}`}>
        <rect className="museum-element-detail stroke-short" x={10 + i * 22} y="3" width="12" height="9" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        <path className="museum-element-micro stroke-micro" d={`M${12 + i * 22} 4 L${12 + i * 22} 11 M${16 + i * 22} 4 L${16 + i * 22} 11 M${20 + i * 22} 4 L${20 + i * 22} 11`} fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>
    ))}

    {/* Corniche */}
    <path className="museum-element stroke-medium" d="M-5 0 L165 0 L165 -5 L-5 -5 Z" fill="none" stroke="#d4af37" strokeWidth="0.8" />

    {/* Tympan triangulaire */}
    <path
      className="museum-element stroke-long"
      d="M-5 -5 L80 -60 L165 -5"
      fill="none" stroke="#d4af37" strokeWidth="1.2"
    />
    <path className="museum-element-secondary stroke-medium" d="M0 -5 L80 -55 L160 -5" fill="none" stroke="#d4af37" strokeWidth="0.5" />

    {/* Acrotères */}
    <path className="museum-element-detail stroke-short" d="M-8 -5 L-8 -15 Q-4 -18 0 -15 L0 -5" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-detail stroke-short" d="M160 -5 L160 -15 Q164 -18 168 -15 L168 -5" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-detail stroke-short" d="M76 -55 L76 -68 Q80 -72 84 -68 L84 -55" fill="none" stroke="#d4af37" strokeWidth="0.5" />

    {/* Décor central du tympan - blason */}
    <ellipse className="museum-element-detail stroke-medium" cx="80" cy="-30" rx="20" ry="18" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <path className="museum-element-micro stroke-tiny" d="M65 -30 L80 -45 L95 -30 L80 -15 Z" fill="none" stroke="#d4af37" strokeWidth="0.35" />
    <path className="museum-element-micro stroke-micro" d="M75 -30 L80 -38 L85 -30 L80 -22 Z" fill="none" stroke="#d4af37" strokeWidth="0.2" />

    {/* Guirlandes */}
    <path className="museum-element-micro stroke-tiny" d="M30 -20 Q40 -15 50 -20 Q45 -22 40 -20 Q35 -18 30 -20" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <path className="museum-element-micro stroke-tiny" d="M110 -20 Q120 -15 130 -20 Q125 -22 120 -20 Q115 -18 110 -20" fill="none" stroke="#d4af37" strokeWidth="0.3" />
  </g>
);

// ========================================
// BLASON HÉRALDIQUE
// ========================================
const HeraldryShield = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2s' }}
  >
    {/* Écu français */}
    <path
      className="museum-element stroke-long"
      d="M0 0 L0 50 Q0 80 30 90 Q60 80 60 50 L60 0 Z"
      fill="none" stroke="#d4af37" strokeWidth="1"
    />

    {/* Bordure intérieure */}
    <path
      className="museum-element-secondary stroke-medium"
      d="M4 4 L4 48 Q4 75 30 84 Q56 75 56 48 L56 4 Z"
      fill="none" stroke="#d4af37" strokeWidth="0.5"
    />

    {/* Division en quartiers */}
    <path className="museum-element-detail stroke-short" d="M30 4 L30 84 M4 40 L56 40" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Fleur de lys au centre */}
    <path
      className="museum-element-micro stroke-tiny"
      d="M30 55 L30 35 M25 50 Q30 42 35 50 M23 48 Q30 38 37 48 M20 52 L25 45 M40 52 L35 45"
      fill="none" stroke="#d4af37" strokeWidth="0.35"
    />

    {/* Lions dans les quartiers */}
    <path className="museum-element-micro stroke-micro" d="M12 15 Q15 12 18 15 L20 20 L18 25 L12 25 L10 20 Z" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <path className="museum-element-micro stroke-micro" d="M42 15 Q45 12 48 15 L50 20 L48 25 L42 25 L40 20 Z" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* Couronne */}
    <path className="museum-element-detail stroke-short" d="M10 -5 L15 -15 L22 -8 L30 -18 L38 -8 L45 -15 L50 -5 Z" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-micro stroke-tiny" d="M12 -8 L12 -12 M22 -8 L22 -10 M30 -12 L30 -18 M38 -8 L38 -10 M48 -8 L48 -12" fill="none" stroke="#d4af37" strokeWidth="0.2" />

    {/* Supports - lions */}
    <path className="museum-element-secondary stroke-short" d="M-15 90 Q-10 70 -5 50 Q-8 40 -12 45 Q-18 55 -15 90" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <path className="museum-element-secondary stroke-short" d="M75 90 Q70 70 65 50 Q68 40 72 45 Q78 55 75 90" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Devise */}
    <path className="museum-element-micro stroke-tiny" d="M5 100 Q30 105 55 100 Q30 110 5 100" fill="none" stroke="#d4af37" strokeWidth="0.3" />
  </g>
);

// ========================================
// FENÊTRE RENAISSANCE
// ========================================
const RenaissanceWindow = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2s' }}
  >
    {/* Cadre extérieur */}
    <rect className="museum-element stroke-long" x="0" y="0" width="50" height="80" fill="none" stroke="#d4af37" strokeWidth="1" />

    {/* Meneaux */}
    <path className="museum-element-secondary stroke-medium" d="M25 0 L25 80 M0 40 L50 40" fill="none" stroke="#d4af37" strokeWidth="0.6" />

    {/* Petits bois */}
    <path className="museum-element-detail stroke-short" d="M12.5 0 L12.5 40 M37.5 0 L37.5 40 M12.5 40 L12.5 80 M37.5 40 L37.5 80" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <path className="museum-element-detail stroke-short" d="M0 20 L25 20 M25 20 L50 20 M0 60 L25 60 M25 60 L50 60" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Fronton au-dessus */}
    <path className="museum-element stroke-medium" d="M-5 0 L25 -25 L55 0" fill="none" stroke="#d4af37" strokeWidth="0.8" />
    <path className="museum-element-secondary stroke-short" d="M0 0 L25 -20 L50 0" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Décor du fronton */}
    <circle className="museum-element-micro stroke-tiny" cx="25" cy="-10" r="5" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <circle className="museum-element-micro stroke-micro" cx="25" cy="-10" r="2.5" fill="none" stroke="#d4af37" strokeWidth="0.2" />

    {/* Consoles */}
    <path className="museum-element-detail stroke-short" d="M-8 0 Q-8 15 -3 25 Q0 30 0 25" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-detail stroke-short" d="M58 0 Q58 15 53 25 Q50 30 50 25" fill="none" stroke="#d4af37" strokeWidth="0.5" />

    {/* Appui de fenêtre */}
    <rect className="museum-element-secondary stroke-medium" x="-5" y="80" width="60" height="5" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-micro stroke-tiny" d="M-3 82 L53 82" fill="none" stroke="#d4af37" strokeWidth="0.25" />
  </g>
);

// ========================================
// PONT-LEVIS AVEC CHAÎNES
// ========================================
const Drawbridge = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.5s' }}
  >
    {/* Arche d'entrée */}
    <path
      className="museum-element stroke-very-long"
      d="M0 100 L0 0 Q50 -30 100 0 L100 100"
      fill="none" stroke="#d4af37" strokeWidth="1.2"
    />

    {/* Arche intérieure */}
    <path className="museum-element-secondary stroke-medium" d="M5 95 L5 5 Q50 -22 95 5 L95 95" fill="none" stroke="#d4af37" strokeWidth="0.6" />

    {/* Herse */}
    {[...Array(8)].map((_, i) => (
      <path
        key={`herse-v-${i}`}
        className="museum-element-detail stroke-short"
        d={`M${15 + i * 10} 90 L${15 + i * 10} ${30 - Math.abs(i - 3.5) * 5}`}
        fill="none" stroke="#d4af37" strokeWidth="0.4"
      />
    ))}
    {[...Array(3)].map((_, i) => (
      <path
        key={`herse-h-${i}`}
        className="museum-element-micro stroke-tiny"
        d={`M15 ${50 + i * 15} L85 ${50 + i * 15}`}
        fill="none" stroke="#d4af37" strokeWidth="0.25"
      />
    ))}

    {/* Chaînes */}
    <path className="museum-element-detail stroke-medium" d="M10 0 Q15 20 20 40 Q25 60 20 80" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="3,2" />
    <path className="museum-element-detail stroke-medium" d="M90 0 Q85 20 80 40 Q75 60 80 80" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="3,2" />

    {/* Anneaux des chaînes */}
    <circle className="museum-element-micro stroke-micro" cx="10" cy="5" r="3" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <circle className="museum-element-micro stroke-micro" cx="90" cy="5" r="3" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Claveaux de l'arc */}
    <path className="museum-element-micro stroke-tiny" d="M8 8 L12 15 M20 -5 L22 5 M35 -18 L36 -8 M50 -22 L50 -12 M65 -18 L64 -8 M80 -5 L78 5 M92 8 L88 15" fill="none" stroke="#d4af37" strokeWidth="0.2" />
  </g>
);

// ========================================
// COMPOSANT PRINCIPAL
// ========================================
const ChateauBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="chateau-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#0a0d1a" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Fond atmosphérique */}
        <rect width="100%" height="100%" fill="url(#chateau-vignette)" />

        {/* Tours aux coins */}
        <CastleTower x={50} y={50} scale={0.7} delay={0} />
        <CastleTower x={1050} y={50} scale={0.7} delay={0.5} mirror />

        {/* Arches gothiques */}
        <GothicArch x={200} y={450} scale={0.8} delay={1} />
        <GothicArch x={900} y={450} scale={0.8} delay={1.5} />

        {/* Fronton central */}
        <ClassicPediment x={520} y={100} scale={1} delay={2} />

        {/* Blasons */}
        <HeraldryShield x={100} y={550} scale={0.9} delay={2.5} />
        <HeraldryShield x={1040} y={550} scale={0.9} delay={3} />

        {/* Fenêtres */}
        <RenaissanceWindow x={400} y={300} scale={0.9} delay={3.5} />
        <RenaissanceWindow x={700} y={300} scale={0.9} delay={4} />

        {/* Pont-levis */}
        <Drawbridge x={550} y={550} scale={0.8} delay={4.5} />

        {/* Particules dorées flottantes */}
        {[...Array(25)].map((_, i) => (
          <circle
            key={`particle-${i}`}
            cx={100 + Math.random() * 1000}
            cy={100 + Math.random() * 600}
            r={0.8 + Math.random() * 1.2}
            fill="#d4af37"
            opacity={0.15 + Math.random() * 0.25}
            className="animate-float"
            style={{
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ChateauBackground;
