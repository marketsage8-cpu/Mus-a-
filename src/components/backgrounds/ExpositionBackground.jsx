/**
 * ExpositionBackground - Décor d'exposition d'art moderne
 *
 * Éléments d'espace d'exposition avec animation "trait par trait"
 * - Cadres minimalistes et modernes
 * - Spots d'éclairage
 * - Sculptures géométriques abstraites
 * - Installations artistiques
 * - Cimaises et rails d'accrochage
 */

// ========================================
// CADRE MODERNE MINIMALISTE
// ========================================
const ModernFrame = ({ x, y, width = 100, height = 80, delay = 0, variant = 'simple' }) => (
  <g
    transform={`translate(${x}, ${y})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2s' }}
  >
    {/* Cadre principal fin */}
    <rect
      className="museum-element stroke-long"
      x="0" y="0" width={width} height={height}
      fill="none" stroke="#d4af37" strokeWidth="0.8"
    />

    {/* Passe-partout */}
    <rect
      className="museum-element-secondary stroke-medium"
      x="8" y="8" width={width - 16} height={height - 16}
      fill="none" stroke="#d4af37" strokeWidth="0.4"
    />

    {variant === 'double' && (
      <rect
        className="museum-element-detail stroke-short"
        x="4" y="4" width={width - 8} height={height - 8}
        fill="none" stroke="#d4af37" strokeWidth="0.3"
      />
    )}

    {/* Œuvre abstraite à l'intérieur */}
    {variant === 'simple' && (
      <g>
        {/* Composition géométrique */}
        <circle className="museum-element-detail stroke-short" cx={width / 2} cy={height / 2 - 5} r="15" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <rect className="museum-element-micro stroke-tiny" x={width / 2 - 20} y={height / 2 + 5} width="40" height="15" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        <path className="museum-element-micro stroke-micro" d={`M${width / 2 - 10} ${height / 2} L${width / 2 + 10} ${height / 2}`} fill="none" stroke="#d4af37" strokeWidth="0.2" />
      </g>
    )}

    {variant === 'abstract' && (
      <g>
        {/* Lignes dynamiques */}
        <path className="museum-element-detail stroke-short" d={`M15 ${height - 15} Q${width / 2} 20 ${width - 15} ${height / 2}`} fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-tiny" d={`M20 20 L${width - 20} ${height - 20}`} fill="none" stroke="#d4af37" strokeWidth="0.25" />
        <circle className="museum-element-micro stroke-micro" cx={width / 3} cy={height / 3} r="8" fill="none" stroke="#d4af37" strokeWidth="0.2" />
      </g>
    )}

    {variant === 'double' && (
      <g>
        {/* Triptyque */}
        <rect className="museum-element-detail stroke-short" x="15" y="15" width={(width - 40) / 3} height={height - 30} fill="none" stroke="#d4af37" strokeWidth="0.3" />
        <rect className="museum-element-detail stroke-short" x={15 + (width - 40) / 3 + 5} y="15" width={(width - 40) / 3} height={height - 30} fill="none" stroke="#d4af37" strokeWidth="0.3" />
        <rect className="museum-element-detail stroke-short" x={15 + 2 * ((width - 40) / 3 + 5)} y="15" width={(width - 40) / 3} height={height - 30} fill="none" stroke="#d4af37" strokeWidth="0.3" />
      </g>
    )}

    {/* Étiquette de l'œuvre */}
    <rect className="museum-element-micro stroke-micro" x={width / 2 - 15} y={height + 10} width="30" height="8" fill="none" stroke="#d4af37" strokeWidth="0.2" />
    <path className="museum-element-micro stroke-micro" d={`M${width / 2 - 10} ${height + 14} L${width / 2 + 10} ${height + 14}`} fill="none" stroke="#d4af37" strokeWidth="0.15" />
  </g>
);

// ========================================
// SPOT D'ÉCLAIRAGE
// ========================================
const SpotLight = ({ x, y, scale = 1, delay = 0, angle = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) rotate(${angle}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '1.5s' }}
  >
    {/* Rail de fixation */}
    <rect className="museum-element stroke-short" x="-20" y="-5" width="40" height="5" fill="none" stroke="#d4af37" strokeWidth="0.5" />

    {/* Corps du spot */}
    <path
      className="museum-element-secondary stroke-medium"
      d="M-8 0 L-8 15 L8 15 L8 0"
      fill="none" stroke="#d4af37" strokeWidth="0.6"
    />

    {/* Réflecteur */}
    <path
      className="museum-element stroke-medium"
      d="M-12 15 L-18 35 L18 35 L12 15"
      fill="none" stroke="#d4af37" strokeWidth="0.8"
    />

    {/* Anneaux du réflecteur */}
    <ellipse className="museum-element-detail stroke-short" cx="0" cy="35" rx="18" ry="4" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <ellipse className="museum-element-micro stroke-tiny" cx="0" cy="32" rx="14" ry="3" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* Faisceau lumineux */}
    <path
      className="museum-element-micro stroke-tiny"
      d="M-18 35 L-35 100 M18 35 L35 100 M0 35 L0 100"
      fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.5"
    />
    <path
      className="museum-element-micro stroke-micro"
      d="M-10 35 L-20 100 M10 35 L20 100"
      fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.3"
    />
  </g>
);

// ========================================
// SCULPTURE ABSTRAITE
// ========================================
const AbstractSculpture = ({ x, y, scale = 1, delay = 0, variant = 'geometric' }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.5s' }}
  >
    {/* Socle */}
    <rect className="museum-element stroke-medium" x="-30" y="100" width="60" height="15" fill="none" stroke="#d4af37" strokeWidth="0.7" />
    <rect className="museum-element-secondary stroke-short" x="-25" y="115" width="50" height="8" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {variant === 'geometric' && (
      <g>
        {/* Sculpture géométrique - cubes empilés */}
        <path className="museum-element stroke-long" d="M-20 100 L-20 50 L20 50 L20 100" fill="none" stroke="#d4af37" strokeWidth="0.8" />
        <path className="museum-element-secondary stroke-medium" d="M-20 50 L0 30 L40 30 L20 50" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        <path className="museum-element-secondary stroke-medium" d="M20 50 L40 30 L40 80 L20 100" fill="none" stroke="#d4af37" strokeWidth="0.5" />

        {/* Second cube décalé */}
        <path className="museum-element-detail stroke-short" d="M-10 50 L-10 20 L15 20 L15 50" fill="none" stroke="#d4af37" strokeWidth="0.4" />
        <path className="museum-element-micro stroke-tiny" d="M-10 20 L5 5 L30 5 L15 20" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        <path className="museum-element-micro stroke-tiny" d="M15 20 L30 5 L30 35 L15 50" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>
    )}

    {variant === 'organic' && (
      <g>
        {/* Forme organique fluide */}
        <path
          className="museum-element stroke-long"
          d="M0 100 Q-30 80 -20 50 Q-10 20 5 30 Q20 40 15 60 Q10 80 20 70 Q30 60 25 40 Q20 20 0 10 Q-15 5 -10 30 Q-5 50 0 100"
          fill="none" stroke="#d4af37" strokeWidth="0.7"
        />
        {/* Détails intérieurs */}
        <path className="museum-element-secondary stroke-medium" d="M-5 70 Q0 50 5 55 Q10 60 5 75" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <circle className="museum-element-micro stroke-tiny" cx="0" cy="40" r="8" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>
    )}

    {variant === 'mobile' && (
      <g>
        {/* Mobile de Calder style */}
        <path className="museum-element stroke-medium" d="M0 10 L0 100" fill="none" stroke="#d4af37" strokeWidth="0.6" />
        {/* Bras horizontaux */}
        <path className="museum-element-secondary stroke-short" d="M-30 30 L30 30" fill="none" stroke="#d4af37" strokeWidth="0.4" />
        <path className="museum-element-secondary stroke-short" d="M-20 55 L25 55" fill="none" stroke="#d4af37" strokeWidth="0.4" />
        <path className="museum-element-secondary stroke-short" d="M-25 80 L15 80" fill="none" stroke="#d4af37" strokeWidth="0.4" />
        {/* Formes suspendues */}
        <circle className="museum-element-detail stroke-short" cx="-30" cy="40" r="8" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <circle className="museum-element-detail stroke-short" cx="30" cy="38" r="6" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <ellipse className="museum-element-detail stroke-short" cx="-20" cy="65" rx="5" ry="8" fill="none" stroke="#d4af37" strokeWidth="0.3" />
        <rect className="museum-element-detail stroke-short" x="18" y="60" width="10" height="10" fill="none" stroke="#d4af37" strokeWidth="0.3" />
        <path className="museum-element-micro stroke-tiny" d="M-25 80 L-25 95 M15 80 L15 92" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        <ellipse className="museum-element-micro stroke-tiny" cx="-25" cy="95" rx="4" ry="6" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        <circle className="museum-element-micro stroke-tiny" cx="15" cy="95" r="5" fill="none" stroke="#d4af37" strokeWidth="0.2" />
      </g>
    )}

    {/* Étiquette */}
    <rect className="museum-element-micro stroke-micro" x="-20" y="130" width="40" height="10" fill="none" stroke="#d4af37" strokeWidth="0.2" />
  </g>
);

// ========================================
// CIMAISE / RAIL D'ACCROCHAGE
// ========================================
const GalleryRail = ({ x, y, width = 200, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2s' }}
  >
    {/* Rail principal */}
    <rect className="museum-element stroke-long" x="0" y="0" width={width} height="6" fill="none" stroke="#d4af37" strokeWidth="0.8" />

    {/* Rainure du rail */}
    <path className="museum-element-secondary stroke-medium" d={`M5 3 L${width - 5} 3`} fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Câbles de suspension */}
    {[...Array(Math.floor(width / 50))].map((_, i) => (
      <g key={`cable-${i}`}>
        <path
          className="museum-element-detail stroke-short"
          d={`M${30 + i * 50} 6 L${30 + i * 50} 60`}
          fill="none" stroke="#d4af37" strokeWidth="0.3"
        />
        {/* Crochet */}
        <circle
          className="museum-element-micro stroke-micro"
          cx={30 + i * 50} cy="8" r="2"
          fill="none" stroke="#d4af37" strokeWidth="0.2"
        />
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${28 + i * 50} 58 L${32 + i * 50} 58 L${32 + i * 50} 65 L${28 + i * 50} 65 Z`}
          fill="none" stroke="#d4af37" strokeWidth="0.2"
        />
      </g>
    ))}
  </g>
);

// ========================================
// INSTALLATION LUMINEUSE
// ========================================
const LightInstallation = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '3s' }}
  >
    {/* Structure centrale */}
    <circle className="museum-element stroke-long" cx="0" cy="0" r="40" fill="none" stroke="#d4af37" strokeWidth="0.8" />
    <circle className="museum-element-secondary stroke-medium" cx="0" cy="0" r="30" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <circle className="museum-element-detail stroke-short" cx="0" cy="0" r="20" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <circle className="museum-element-micro stroke-tiny" cx="0" cy="0" r="10" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Rayons */}
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30) * Math.PI / 180;
      return (
        <path
          key={`ray-${i}`}
          className="museum-element-detail stroke-short"
          d={`M${Math.cos(angle) * 10} ${Math.sin(angle) * 10} L${Math.cos(angle) * 50} ${Math.sin(angle) * 50}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25" strokeOpacity="0.6"
        />
      );
    })}

    {/* Anneaux extérieurs */}
    <circle className="museum-element-micro stroke-tiny" cx="0" cy="0" r="50" fill="none" stroke="#d4af37" strokeWidth="0.2" strokeDasharray="5,5" />
    <circle className="museum-element-micro stroke-micro" cx="0" cy="0" r="60" fill="none" stroke="#d4af37" strokeWidth="0.15" strokeDasharray="3,8" />
  </g>
);

// ========================================
// BANQUETTE DE GALERIE
// ========================================
const GalleryBench = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '1.5s' }}
  >
    {/* Assise */}
    <rect className="museum-element stroke-medium" x="0" y="0" width="80" height="12" fill="none" stroke="#d4af37" strokeWidth="0.7" />
    <path className="museum-element-secondary stroke-short" d="M2 2 L78 2 M2 10 L78 10" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Pieds */}
    <path className="museum-element-detail stroke-short" d="M10 12 L10 30 L15 30 L15 12" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <path className="museum-element-detail stroke-short" d="M65 12 L65 30 L70 30 L70 12" fill="none" stroke="#d4af37" strokeWidth="0.4" />

    {/* Barres de renfort */}
    <path className="museum-element-micro stroke-tiny" d="M15 20 L65 20" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <path className="museum-element-micro stroke-micro" d="M15 25 L65 25" fill="none" stroke="#d4af37" strokeWidth="0.2" />
  </g>
);

// ========================================
// COMPOSANT PRINCIPAL
// ========================================
const ExpositionBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="expo-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#0a0d1a" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Fond atmosphérique */}
        <rect width="100%" height="100%" fill="url(#expo-vignette)" />

        {/* Rails d'accrochage en haut */}
        <GalleryRail x={50} y={30} width={300} delay={0} />
        <GalleryRail x={850} y={30} width={300} delay={0.5} />

        {/* Spots d'éclairage */}
        <SpotLight x={150} y={20} scale={0.8} delay={1} angle={15} />
        <SpotLight x={400} y={20} scale={0.8} delay={1.2} angle={-10} />
        <SpotLight x={800} y={20} scale={0.8} delay={1.4} angle={10} />
        <SpotLight x={1050} y={20} scale={0.8} delay={1.6} angle={-15} />

        {/* Cadres modernes */}
        <ModernFrame x={80} y={180} width={120} height={160} delay={2} variant="simple" />
        <ModernFrame x={280} y={200} width={100} height={120} delay={2.3} variant="abstract" />
        <ModernFrame x={820} y={180} width={140} height={180} delay={2.6} variant="double" />
        <ModernFrame x={1000} y={220} width={110} height={130} delay={2.9} variant="simple" />

        {/* Sculptures */}
        <AbstractSculpture x={500} y={480} scale={1} delay={3.5} variant="geometric" />
        <AbstractSculpture x={200} y={520} scale={0.8} delay={4} variant="organic" />
        <AbstractSculpture x={900} y={500} scale={0.9} delay={4.5} variant="mobile" />

        {/* Installation lumineuse centrale */}
        <LightInstallation x={600} y={300} scale={1.2} delay={5} />

        {/* Banquettes */}
        <GalleryBench x={450} y={700} scale={1} delay={5.5} />
        <GalleryBench x={650} y={700} scale={1} delay={5.8} />

        {/* Particules dorées flottantes - plus géométriques */}
        {[...Array(20)].map((_, i) => {
          const shapes = ['circle', 'rect', 'line'];
          const shape = shapes[i % 3];
          const cx = 100 + Math.random() * 1000;
          const cy = 100 + Math.random() * 600;

          if (shape === 'circle') {
            return (
              <circle
                key={`particle-${i}`}
                cx={cx}
                cy={cy}
                r={1 + Math.random() * 1.5}
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.3"
                opacity={0.2 + Math.random() * 0.3}
                className="animate-float"
                style={{
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`
                }}
              />
            );
          } else if (shape === 'rect') {
            return (
              <rect
                key={`particle-${i}`}
                x={cx}
                y={cy}
                width={2 + Math.random() * 3}
                height={2 + Math.random() * 3}
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.25"
                opacity={0.2 + Math.random() * 0.3}
                className="animate-float"
                style={{
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`
                }}
              />
            );
          } else {
            return (
              <line
                key={`particle-${i}`}
                x1={cx}
                y1={cy}
                x2={cx + 3 + Math.random() * 5}
                y2={cy + 3 + Math.random() * 5}
                stroke="#d4af37"
                strokeWidth="0.3"
                opacity={0.15 + Math.random() * 0.25}
                className="animate-float"
                style={{
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`
                }}
              />
            );
          }
        })}
      </svg>
    </div>
  );
};

export default ExpositionBackground;
