/**
 * ChateauBackground - Décor de château ultra-détaillé
 *
 * Éléments d'architecture de château avec animation "trait par trait"
 * - Tours avec créneaux et mâchicoulis
 * - Arches gothiques et ogives
 * - Frontons et gables
 * - Fenêtres à meneaux
 * - Blasons et héraldique
 * - Échauguettes et tourelles
 * - Remparts et merlons
 * - Bannières et étendards
 * - Balustrades et balcons
 * - Torchères et candélabres
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
// ÉCHAUGUETTE (TOURELLE EN ENCORBELLEMENT)
// ========================================
const Echauguette = ({ x, y, scale = 1, delay = 0, mirror = false }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${mirror ? -scale : scale}, ${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2s' }}
  >
    {/* Corps de l'échauguette */}
    <path
      className="museum-element stroke-long"
      d="M0 80 L0 20 L5 15 L35 15 L40 20 L40 80"
      fill="none" stroke="#d4af37" strokeWidth="1"
    />

    {/* Console en encorbellement */}
    <path className="museum-element-secondary stroke-medium" d="M-5 80 Q0 70 5 65 L35 65 Q40 70 45 80" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <path className="museum-element-micro stroke-tiny" d="M0 75 Q5 70 10 68 M40 75 Q35 70 30 68" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* Toit pointu */}
    <path className="museum-element stroke-medium" d="M-3 15 L20 -10 L43 15" fill="none" stroke="#d4af37" strokeWidth="0.8" />
    <path className="museum-element-secondary stroke-short" d="M2 15 L20 -5 L38 15" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Girouette */}
    <path className="museum-element-detail stroke-short" d="M20 -10 L20 -25" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-micro stroke-tiny" d="M16 -20 L24 -20 L20 -25 Z" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Fenêtre meurtrière */}
    <path className="museum-element-detail stroke-short" d="M18 30 L18 55 L22 55 L22 30 Z" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <path className="museum-element-micro stroke-tiny" d="M16 40 L24 40 M16 45 L24 45" fill="none" stroke="#d4af37" strokeWidth="0.2" />

    {/* Créneaux miniatures */}
    <path className="museum-element-micro stroke-tiny" d="M5 15 L5 12 L10 12 L10 15 M15 15 L15 12 L25 12 L25 15 M30 15 L30 12 L35 12 L35 15" fill="none" stroke="#d4af37" strokeWidth="0.25" />
  </g>
);

// ========================================
// REMPART AVEC CHEMIN DE RONDE
// ========================================
const Rampart = ({ x, y, width = 200, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '3s' }}
  >
    {/* Mur principal */}
    <path
      className="museum-element stroke-very-long"
      d={`M0 60 L0 0 L${width} 0 L${width} 60`}
      fill="none" stroke="#d4af37" strokeWidth="1.2"
    />

    {/* Créneaux */}
    {[...Array(Math.floor(width / 20))].map((_, i) => (
      <path
        key={`crenel-${i}`}
        className="museum-element-detail stroke-short"
        d={`M${5 + i * 20} 0 L${5 + i * 20} -10 L${15 + i * 20} -10 L${15 + i * 20} 0`}
        fill="none" stroke="#d4af37" strokeWidth="0.5"
      />
    ))}

    {/* Chemin de ronde */}
    <path className="museum-element-secondary stroke-medium" d={`M0 10 L${width} 10`} fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Joints de pierre */}
    {[...Array(Math.floor(width / 30))].map((_, i) => (
      <g key={`joint-${i}`}>
        <path className="museum-element-micro stroke-tiny" d={`M${15 + i * 30} 15 L${15 + i * 30} 55`} fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.4" />
        <path className="museum-element-micro stroke-tiny" d={`M${i * 30} 35 L${30 + i * 30} 35`} fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.4" />
      </g>
    ))}

    {/* Meurtrières */}
    {[...Array(Math.floor(width / 50))].map((_, i) => (
      <path
        key={`meurtriere-${i}`}
        className="museum-element-micro stroke-tiny"
        d={`M${25 + i * 50} 25 L${25 + i * 50} 45 M${23 + i * 50} 35 L${27 + i * 50} 35`}
        fill="none" stroke="#d4af37" strokeWidth="0.3"
      />
    ))}
  </g>
);

// ========================================
// BANNIÈRE / ÉTENDARD
// ========================================
const Banner = ({ x, y, scale = 1, delay = 0, flip = false }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${flip ? -scale : scale}, ${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '1.5s' }}
  >
    {/* Hampe */}
    <path className="museum-element stroke-medium" d="M0 0 L0 80" fill="none" stroke="#d4af37" strokeWidth="0.8" />

    {/* Pomme de la hampe */}
    <circle className="museum-element-detail stroke-short" cx="0" cy="-5" r="4" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <path className="museum-element-micro stroke-tiny" d="M0 -9 L0 -12 M-3 -5 L3 -5" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* Étendard ondulant */}
    <path
      className="museum-element stroke-long"
      d="M0 5 Q15 8 25 5 Q35 2 40 8 L40 45 Q30 42 20 45 Q10 48 0 45 Z"
      fill="none" stroke="#d4af37" strokeWidth="0.7"
    />

    {/* Motif fleur de lys */}
    <path className="museum-element-micro stroke-tiny" d="M20 20 L20 30 M16 25 Q20 20 24 25 M14 28 L20 22 M26 28 L20 22" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* Franges */}
    <path className="museum-element-micro stroke-micro" d="M3 45 L3 50 M8 46 L8 51 M13 46 L13 51 M18 46 L18 51 M23 46 L23 51 M28 45 L28 50 M33 44 L33 49 M38 45 L38 50" fill="none" stroke="#d4af37" strokeWidth="0.15" />
  </g>
);

// ========================================
// BALUSTRADE ORNÉE
// ========================================
const Balustrade = ({ x, y, width = 120, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2s' }}
  >
    {/* Main courante */}
    <path className="museum-element stroke-long" d={`M0 0 L${width} 0`} fill="none" stroke="#d4af37" strokeWidth="1" />
    <path className="museum-element-secondary stroke-medium" d={`M0 3 L${width} 3`} fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Plinthe */}
    <path className="museum-element stroke-medium" d={`M0 45 L${width} 45`} fill="none" stroke="#d4af37" strokeWidth="0.8" />
    <path className="museum-element-secondary stroke-short" d={`M0 42 L${width} 42`} fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Balustres */}
    {[...Array(Math.floor(width / 15))].map((_, i) => (
      <g key={`balustre-${i}`}>
        {/* Forme du balustre - vase renversé */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${7 + i * 15} 5 Q${4 + i * 15} 12 ${5 + i * 15} 20 Q${4 + i * 15} 28 ${7 + i * 15} 35 Q${10 + i * 15} 38 ${7 + i * 15} 42`}
          fill="none" stroke="#d4af37" strokeWidth="0.4"
        />
        <path
          className="museum-element-detail stroke-short"
          d={`M${9 + i * 15} 5 Q${12 + i * 15} 12 ${11 + i * 15} 20 Q${12 + i * 15} 28 ${9 + i * 15} 35 Q${6 + i * 15} 38 ${9 + i * 15} 42`}
          fill="none" stroke="#d4af37" strokeWidth="0.4"
        />
        {/* Détails centraux */}
        <ellipse className="museum-element-micro stroke-micro" cx={8 + i * 15} cy="20" rx="2" ry="3" fill="none" stroke="#d4af37" strokeWidth="0.2" />
      </g>
    ))}

    {/* Pilastres aux extrémités */}
    <rect className="museum-element-secondary stroke-medium" x="-3" y="-5" width="8" height="55" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <rect className="museum-element-secondary stroke-medium" x={width - 5} y="-5" width="8" height="55" fill="none" stroke="#d4af37" strokeWidth="0.5" />

    {/* Boules sur pilastres */}
    <circle className="museum-element-micro stroke-tiny" cx="1" cy="-8" r="4" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <circle className="museum-element-micro stroke-tiny" cx={width - 1} cy="-8" r="4" fill="none" stroke="#d4af37" strokeWidth="0.3" />
  </g>
);

// ========================================
// TORCHÈRE / CHANDELIER MURAL
// ========================================
const Torchiere = ({ x, y, scale = 1, delay = 0, mirror = false }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${mirror ? -scale : scale}, ${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '1.5s' }}
  >
    {/* Support mural */}
    <path className="museum-element stroke-medium" d="M0 0 L0 15 Q5 20 10 15 L10 0" fill="none" stroke="#d4af37" strokeWidth="0.6" />

    {/* Bras de la torchère */}
    <path className="museum-element-secondary stroke-short" d="M5 15 Q10 20 15 18 Q25 15 30 20" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-secondary stroke-short" d="M5 18 Q10 23 15 21 Q25 18 30 23" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Coupelle */}
    <path className="museum-element-detail stroke-short" d="M25 18 Q30 15 35 18 L35 22 Q30 25 25 22 Z" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Flamme */}
    <path className="museum-element-micro stroke-tiny animate-shimmer" d="M30 15 Q28 10 30 5 Q32 8 31 12 Q33 8 32 5 Q34 10 30 15" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Gouttes décoratives */}
    <path className="museum-element-micro stroke-micro" d="M27 25 L27 30 M30 26 L30 32 M33 25 L33 30" fill="none" stroke="#d4af37" strokeWidth="0.2" />

    {/* Volute décorative */}
    <path className="museum-element-micro stroke-tiny" d="M8 22 Q12 25 10 30 Q8 28 8 25" fill="none" stroke="#d4af37" strokeWidth="0.25" />
  </g>
);

// ========================================
// VITRAIL GOTHIQUE
// ========================================
const GothicWindow = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.5s' }}
  >
    {/* Cadre extérieur ogival */}
    <path
      className="museum-element stroke-long"
      d="M0 100 L0 30 Q0 0 25 -20 Q50 0 50 30 L50 100 Z"
      fill="none" stroke="#d4af37" strokeWidth="1"
    />

    {/* Meneau central */}
    <path className="museum-element-secondary stroke-medium" d="M25 100 L25 -15" fill="none" stroke="#d4af37" strokeWidth="0.6" />

    {/* Divisions horizontales */}
    <path className="museum-element-detail stroke-short" d="M3 30 L47 30 M3 55 L47 55 M3 80 L47 80" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Rosace supérieure */}
    <circle className="museum-element-secondary stroke-medium" cx="25" cy="10" r="12" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <circle className="museum-element-detail stroke-short" cx="25" cy="10" r="8" fill="none" stroke="#d4af37" strokeWidth="0.35" />
    <circle className="museum-element-micro stroke-tiny" cx="25" cy="10" r="4" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* Rayons de la rosace */}
    {[...Array(8)].map((_, i) => (
      <path
        key={`ray-${i}`}
        className="museum-element-micro stroke-micro"
        d={`M25 10 L${25 + 11 * Math.cos(i * Math.PI / 4)} ${10 + 11 * Math.sin(i * Math.PI / 4)}`}
        fill="none" stroke="#d4af37" strokeWidth="0.2"
      />
    ))}

    {/* Motifs de trèfle dans les sections */}
    <path className="museum-element-micro stroke-tiny" d="M12 42 Q10 38 12 35 Q14 38 12 42 Q8 40 12 42 Q12 38 12 42" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <path className="museum-element-micro stroke-tiny" d="M38 42 Q36 38 38 35 Q40 38 38 42 Q34 40 38 42 Q38 38 38 42" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <path className="museum-element-micro stroke-tiny" d="M12 67 Q10 63 12 60 Q14 63 12 67 Q8 65 12 67" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <path className="museum-element-micro stroke-tiny" d="M38 67 Q36 63 38 60 Q40 63 38 67 Q34 65 38 67" fill="none" stroke="#d4af37" strokeWidth="0.25" />
  </g>
);

// ========================================
// DOUVE AVEC REFLETS
// ========================================
const Moat = ({ x, y, width = 300, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2s' }}
  >
    {/* Contour de la douve */}
    <path
      className="museum-element stroke-long"
      d={`M0 0 Q${width * 0.25} 5 ${width * 0.5} 0 Q${width * 0.75} -5 ${width} 0`}
      fill="none" stroke="#d4af37" strokeWidth="0.8"
    />
    <path
      className="museum-element-secondary stroke-medium"
      d={`M0 20 Q${width * 0.25} 15 ${width * 0.5} 20 Q${width * 0.75} 25 ${width} 20`}
      fill="none" stroke="#d4af37" strokeWidth="0.6"
    />

    {/* Reflets d'eau */}
    {[...Array(8)].map((_, i) => (
      <path
        key={`reflet-${i}`}
        className="museum-element-micro stroke-tiny"
        d={`M${20 + i * 35} 8 Q${25 + i * 35} 6 ${30 + i * 35} 8`}
        fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.5"
      />
    ))}

    {/* Ondulations */}
    <path className="museum-element-micro stroke-micro" d={`M10 12 Q${width * 0.3} 10 ${width * 0.6} 12 Q${width * 0.8} 14 ${width - 10} 12`} fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.4" />
  </g>
);

// ========================================
// COURONNE ROYALE
// ========================================
const RoyalCrown = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2s' }}
  >
    {/* Bandeau */}
    <path className="museum-element stroke-long" d="M0 30 Q15 32 30 30 Q45 28 60 30" fill="none" stroke="#d4af37" strokeWidth="0.8" />
    <path className="museum-element-secondary stroke-medium" d="M0 35 Q15 37 30 35 Q45 33 60 35" fill="none" stroke="#d4af37" strokeWidth="0.5" />

    {/* Fleurons */}
    <path className="museum-element-detail stroke-short" d="M5 30 L8 15 L12 25 L15 5 L18 25 L22 15 L25 30" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-detail stroke-short" d="M35 30 L38 15 L42 25 L45 5 L48 25 L52 15 L55 30" fill="none" stroke="#d4af37" strokeWidth="0.5" />

    {/* Croix centrale */}
    <path className="museum-element-secondary stroke-medium" d="M28 20 L32 20 M30 15 L30 25 M30 5 L30 0 L28 3 L30 0 L32 3" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Pierres précieuses */}
    <circle className="museum-element-micro stroke-tiny" cx="15" cy="10" r="2" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <circle className="museum-element-micro stroke-tiny" cx="30" cy="8" r="2.5" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <circle className="museum-element-micro stroke-tiny" cx="45" cy="10" r="2" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Perles sur le bandeau */}
    {[...Array(12)].map((_, i) => (
      <circle key={`pearl-${i}`} className="museum-element-micro stroke-micro" cx={3 + i * 5} cy="32" r="1" fill="none" stroke="#d4af37" strokeWidth="0.15" />
    ))}
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

        {/* ===== NIVEAU SUPÉRIEUR - TOURS PRINCIPALES ===== */}
        <CastleTower x={30} y={30} scale={0.65} delay={0} />
        <CastleTower x={1070} y={30} scale={0.65} delay={0.3} mirror />

        {/* Tours secondaires */}
        <CastleTower x={250} y={80} scale={0.45} delay={0.6} />
        <CastleTower x={850} y={80} scale={0.45} delay={0.9} mirror />

        {/* ===== REMPARTS ===== */}
        <Rampart x={100} y={320} width={180} delay={1} />
        <Rampart x={920} y={320} width={180} delay={1.2} />

        {/* Rempart central décoratif */}
        <Rampart x={450} y={200} width={300} delay={1.4} />

        {/* ===== ÉCHAUGUETTES ===== */}
        <Echauguette x={280} y={280} scale={0.7} delay={1.6} />
        <Echauguette x={880} y={280} scale={0.7} delay={1.8} mirror />

        {/* ===== ARCHES GOTHIQUES ===== */}
        <GothicArch x={150} y={520} scale={0.75} delay={2} />
        <GothicArch x={950} y={520} scale={0.75} delay={2.2} />

        {/* Arche centrale majestueuse */}
        <GothicArch x={520} y={480} scale={0.9} delay={2.4} />

        {/* ===== FRONTON CENTRAL ===== */}
        <ClassicPediment x={520} y={80} scale={1} delay={2.6} />

        {/* ===== VITRAUX GOTHIQUES ===== */}
        <GothicWindow x={380} y={280} scale={0.6} delay={2.8} />
        <GothicWindow x={760} y={280} scale={0.6} delay={3} />

        {/* ===== FENÊTRES RENAISSANCE ===== */}
        <RenaissanceWindow x={320} y={400} scale={0.7} delay={3.2} />
        <RenaissanceWindow x={800} y={400} scale={0.7} delay={3.4} />

        {/* ===== BLASONS ===== */}
        <HeraldryShield x={80} y={600} scale={0.8} delay={3.6} />
        <HeraldryShield x={1050} y={600} scale={0.8} delay={3.8} />

        {/* Blason central */}
        <HeraldryShield x={570} y={580} scale={1} delay={4} />

        {/* ===== COURONNE ROYALE ===== */}
        <RoyalCrown x={560} y={540} scale={0.9} delay={4.2} />

        {/* ===== PONT-LEVIS ===== */}
        <Drawbridge x={540} y={650} scale={0.7} delay={4.4} />

        {/* ===== BALUSTRADES ===== */}
        <Balustrade x={50} y={450} width={100} delay={4.6} />
        <Balustrade x={1050} y={450} width={100} delay={4.8} />
        <Balustrade x={450} y={380} width={140} delay={5} />
        <Balustrade x={610} y={380} width={140} delay={5.1} />

        {/* ===== BANNIÈRES ===== */}
        <Banner x={180} y={150} scale={0.8} delay={5.2} />
        <Banner x={1000} y={150} scale={0.8} delay={5.3} flip />
        <Banner x={400} y={100} scale={0.65} delay={5.4} />
        <Banner x={780} y={100} scale={0.65} delay={5.5} flip />

        {/* ===== TORCHÈRES ===== */}
        <Torchiere x={120} y={380} scale={0.9} delay={5.6} />
        <Torchiere x={1020} y={380} scale={0.9} delay={5.7} mirror />
        <Torchiere x={350} y={340} scale={0.7} delay={5.8} />
        <Torchiere x={810} y={340} scale={0.7} delay={5.9} mirror />

        {/* ===== DOUVE ===== */}
        <Moat x={350} y={750} width={500} delay={6} />

        {/* ===== PARTICULES DORÉES FLOTTANTES ===== */}
        {[...Array(35)].map((_, i) => (
          <circle
            key={`particle-${i}`}
            cx={80 + Math.random() * 1040}
            cy={80 + Math.random() * 640}
            r={0.6 + Math.random() * 1.4}
            fill="#d4af37"
            opacity={0.12 + Math.random() * 0.28}
            className="animate-float"
            style={{
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 7}s`
            }}
          />
        ))}

        {/* Étoiles scintillantes */}
        {[...Array(15)].map((_, i) => (
          <g key={`star-${i}`}>
            <path
              d={`M${100 + i * 70} ${50 + (i % 3) * 30} l2 0 l-1 2 l-1 -2 M${100 + i * 70} ${50 + (i % 3) * 30} l0 2 l2 -1 l-2 -1`}
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.2"
              opacity={0.3 + Math.random() * 0.4}
              className="animate-sparkle"
              style={{ animationDelay: `${Math.random() * 5}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ChateauBackground;
