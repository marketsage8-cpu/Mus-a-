/**
 * CabinetBackground - Décor de musée ultra-détaillé
 *
 * Éléments de musée classique avec animation "trait par trait"
 * - Colonnes ioniques avec volutes et cannelures
 * - Cadres dorés style 18ème siècle
 * - Amphores grecques avec motifs géométriques
 * - Statues grecques/romaines
 * - Méandres et ornements baroques
 */

// ========================================
// COLONNE IONIQUE ULTRA-DÉTAILLÉE
// ========================================
const IonicColumn = ({ x, y, scale = 1, delay = 0, mirror = false }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${mirror ? -scale : scale}, ${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '5s' }}
  >
    {/* Base de la colonne (plinthe) */}
    <path
      className="museum-element stroke-very-long"
      d="M0 380 L0 370 L5 365 L5 360 L-5 360 L-5 355 L55 355 L55 360 L45 360 L45 365 L50 370 L50 380 Z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
      style={{ '--fill-opacity': '0.08' }}
    />
    {/* Tore inférieur */}
    <ellipse
      className="museum-element-secondary stroke-medium"
      cx="25"
      cy="355"
      rx="30"
      ry="6"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1"
    />
    {/* Scotie (concave moulding) */}
    <path
      className="museum-element-secondary stroke-medium"
      d="M-2 350 Q25 345 52 350"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />

    {/* Fût de la colonne avec cannelures */}
    <path
      className="museum-element stroke-ultra"
      d="M5 350 L5 80 M12 350 L12 80 M19 350 L19 80 M26 350 L26 80 M33 350 L33 80 M40 350 L40 80 M45 350 L45 80"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.6"
      strokeOpacity="0.7"
    />
    {/* Contour du fût */}
    <path
      className="museum-element stroke-very-long"
      d="M3 350 Q0 215 3 80 M47 350 Q50 215 47 80"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
    />

    {/* Astragale (anneau décoratif sous le chapiteau) */}
    <ellipse
      className="museum-element-secondary stroke-medium"
      cx="25"
      cy="80"
      rx="26"
      ry="5"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1"
    />
    <path
      className="museum-element-detail stroke-short"
      d="M0 78 L50 78 M2 75 L48 75"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.6"
    />

    {/* Échine avec oves */}
    <path
      className="museum-element-secondary stroke-long"
      d="M-5 70 L55 70 L55 60 L-5 60 Z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1"
      style={{ '--fill-opacity': '0.05' }}
    />
    {/* Oves (motifs en forme d'œuf) */}
    <path
      className="museum-element-detail stroke-medium"
      d="M5 65 Q5 60 10 60 Q15 60 15 65 Q15 70 10 70 Q5 70 5 65
         M20 65 Q20 60 25 60 Q30 60 30 65 Q30 70 25 70 Q20 70 20 65
         M35 65 Q35 60 40 60 Q45 60 45 65 Q45 70 40 70 Q35 70 35 65"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.7"
    />
    {/* Dards entre les oves */}
    <path
      className="museum-element-detail stroke-short"
      d="M17.5 62 L17.5 68 M32.5 62 L32.5 68"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.5"
    />

    {/* Abaque (tablette supérieure) */}
    <path
      className="museum-element stroke-long"
      d="M-15 20 L65 20 L65 30 L-15 30 Z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
      style={{ '--fill-opacity': '0.06' }}
    />

    {/* Volutes ioniques - côté gauche */}
    <path
      className="museum-element stroke-very-long"
      d="M-10 55
         Q-20 55 -20 45
         Q-20 35 -10 35
         Q0 35 0 45
         Q0 52 -5 52
         Q-12 52 -12 45
         Q-12 40 -5 40
         Q2 40 2 47"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
    />
    {/* Œil de la volute gauche */}
    <circle
      className="museum-element-detail stroke-short"
      cx="-5"
      cy="45"
      r="3"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />
    <circle cx="-5" cy="45" r="1" fill="#d4af37" fillOpacity="0.4" />

    {/* Volutes ioniques - côté droit */}
    <path
      className="museum-element stroke-very-long"
      d="M60 55
         Q70 55 70 45
         Q70 35 60 35
         Q50 35 50 45
         Q50 52 55 52
         Q62 52 62 45
         Q62 40 55 40
         Q48 40 48 47"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
    />
    {/* Œil de la volute droite */}
    <circle
      className="museum-element-detail stroke-short"
      cx="55"
      cy="45"
      r="3"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />
    <circle cx="55" cy="45" r="1" fill="#d4af37" fillOpacity="0.4" />

    {/* Canal des volutes */}
    <path
      className="museum-element-secondary stroke-long"
      d="M-8 55 L58 55 Q60 50 58 45 L-8 45 Q-10 50 -8 55"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
      style={{ '--fill-opacity': '0.04' }}
    />

    {/* Palmettes entre les volutes */}
    <path
      className="museum-element-detail stroke-medium"
      d="M25 55 L25 35
         M20 55 Q18 45 22 35
         M30 55 Q32 45 28 35
         M15 55 Q12 48 18 38
         M35 55 Q38 48 32 38"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.6"
    />
  </g>
);

// ========================================
// CADRE BAROQUE 18ÈME SIÈCLE
// ========================================
const BaroqueFrame = ({ x, y, width = 120, height = 150, delay = 0, children }) => {
  const cornerSize = 25;
  const borderWidth = 15;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4.5s' }}
      className="museum-decor-container"
    >
      {/* Cadre principal */}
      <rect
        className="museum-element stroke-very-long"
        x="0"
        y="0"
        width={width}
        height={height}
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
        style={{ '--fill-opacity': '0.03' }}
      />
      {/* Cadre intérieur */}
      <rect
        className="museum-element-secondary stroke-long"
        x={borderWidth}
        y={borderWidth}
        width={width - borderWidth * 2}
        height={height - borderWidth * 2}
        fill="none"
        stroke="#d4af37"
        strokeWidth="1"
      />
      {/* Moulure médiane */}
      <rect
        className="museum-element-detail stroke-medium"
        x={borderWidth / 2}
        y={borderWidth / 2}
        width={width - borderWidth}
        height={height - borderWidth}
        fill="none"
        stroke="#d4af37"
        strokeWidth="0.5"
        strokeOpacity="0.6"
      />

      {/* Coin supérieur gauche - ornement rococo */}
      <g transform={`translate(0, 0)`}>
        <path
          className="museum-element-detail stroke-long"
          d={`M0 ${cornerSize}
              Q0 0 ${cornerSize} 0
              Q${cornerSize - 5} ${cornerSize - 5} 0 ${cornerSize}
              M5 ${cornerSize - 5}
              Q5 5 ${cornerSize - 5} 5
              Q${cornerSize - 8} ${cornerSize - 8} 5 ${cornerSize - 5}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
        />
        {/* Acanthes */}
        <path
          className="museum-element-detail stroke-medium"
          d="M3 18 Q8 12 12 18 Q8 15 3 18
             M18 3 Q12 8 18 12 Q15 8 18 3"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.7"
        />
        {/* Volute de coin */}
        <path
          className="museum-element-detail stroke-short"
          d="M8 8 Q4 4 8 2 Q12 2 10 6 Q8 10 6 8"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.6"
        />
      </g>

      {/* Coin supérieur droit */}
      <g transform={`translate(${width}, 0) scale(-1, 1)`}>
        <path
          className="museum-element-detail stroke-long"
          d={`M0 ${cornerSize}
              Q0 0 ${cornerSize} 0
              Q${cornerSize - 5} ${cornerSize - 5} 0 ${cornerSize}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
        />
        <path
          className="museum-element-detail stroke-medium"
          d="M3 18 Q8 12 12 18 Q8 15 3 18
             M18 3 Q12 8 18 12 Q15 8 18 3"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.7"
        />
        <path
          className="museum-element-detail stroke-short"
          d="M8 8 Q4 4 8 2 Q12 2 10 6 Q8 10 6 8"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.6"
        />
      </g>

      {/* Coin inférieur gauche */}
      <g transform={`translate(0, ${height}) scale(1, -1)`}>
        <path
          className="museum-element-detail stroke-long"
          d={`M0 ${cornerSize}
              Q0 0 ${cornerSize} 0
              Q${cornerSize - 5} ${cornerSize - 5} 0 ${cornerSize}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
        />
        <path
          className="museum-element-detail stroke-medium"
          d="M3 18 Q8 12 12 18 Q8 15 3 18
             M18 3 Q12 8 18 12 Q15 8 18 3"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.7"
        />
      </g>

      {/* Coin inférieur droit */}
      <g transform={`translate(${width}, ${height}) scale(-1, -1)`}>
        <path
          className="museum-element-detail stroke-long"
          d={`M0 ${cornerSize}
              Q0 0 ${cornerSize} 0
              Q${cornerSize - 5} ${cornerSize - 5} 0 ${cornerSize}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
        />
        <path
          className="museum-element-detail stroke-medium"
          d="M3 18 Q8 12 12 18 Q8 15 3 18
             M18 3 Q12 8 18 12 Q15 8 18 3"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.7"
        />
      </g>

      {/* Ornement central supérieur - cartouche */}
      <g transform={`translate(${width / 2}, 0)`}>
        <path
          className="museum-element-secondary stroke-long"
          d="M0 -8
             Q-15 -8 -20 0
             Q-15 5 -10 3
             Q-5 8 0 5
             Q5 8 10 3
             Q15 5 20 0
             Q15 -8 0 -8"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
          style={{ '--fill-opacity': '0.06' }}
        />
        {/* Fleur de lys centrale */}
        <path
          className="museum-element-detail stroke-short"
          d="M0 -2 L0 -6 M-3 -4 Q0 -8 3 -4 M-2 -3 Q0 -1 2 -3"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.6"
        />
      </g>

      {/* Ornement central inférieur */}
      <g transform={`translate(${width / 2}, ${height})`}>
        <path
          className="museum-element-secondary stroke-long"
          d="M0 8
             Q-15 8 -20 0
             Q-15 -5 -10 -3
             Q-5 -8 0 -5
             Q5 -8 10 -3
             Q15 -5 20 0
             Q15 8 0 8"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
          style={{ '--fill-opacity': '0.06' }}
        />
        {/* Coquille */}
        <path
          className="museum-element-detail stroke-short"
          d="M-8 3 Q-4 6 0 3 Q4 6 8 3 M-6 4 L0 1 L6 4"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
      </g>

      {/* Guirlandes latérales */}
      <path
        className="museum-element-detail stroke-medium"
        d={`M0 ${height * 0.3} Q-5 ${height * 0.35} -3 ${height * 0.4} Q-6 ${height * 0.5} -3 ${height * 0.6} Q-5 ${height * 0.65} 0 ${height * 0.7}`}
        fill="none"
        stroke="#d4af37"
        strokeWidth="0.6"
      />
      <path
        className="museum-element-detail stroke-medium"
        d={`M${width} ${height * 0.3} Q${width + 5} ${height * 0.35} ${width + 3} ${height * 0.4} Q${width + 6} ${height * 0.5} ${width + 3} ${height * 0.6} Q${width + 5} ${height * 0.65} ${width} ${height * 0.7}`}
        fill="none"
        stroke="#d4af37"
        strokeWidth="0.6"
      />

      {/* Contenu du cadre (tableau) */}
      {children}
    </g>
  );
};

// ========================================
// TABLEAU/PEINTURE INTÉRIEUR
// ========================================
const PaintingContent = ({ width, height, type = 'landscape' }) => {
  const innerX = 18;
  const innerY = 18;
  const innerW = width - 36;
  const innerH = height - 36;

  const paintings = {
    landscape: (
      <g>
        {/* Ciel */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX} ${innerY} L${innerX + innerW} ${innerY} L${innerX + innerW} ${innerY + innerH * 0.4} Q${innerX + innerW * 0.5} ${innerY + innerH * 0.35} ${innerX} ${innerY + innerH * 0.45} Z`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.4"
          strokeOpacity="0.5"
        />
        {/* Montagnes */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX} ${innerY + innerH * 0.5}
              L${innerX + innerW * 0.2} ${innerY + innerH * 0.3}
              L${innerX + innerW * 0.35} ${innerY + innerH * 0.45}
              L${innerX + innerW * 0.5} ${innerY + innerH * 0.25}
              L${innerX + innerW * 0.7} ${innerY + innerH * 0.4}
              L${innerX + innerW * 0.85} ${innerY + innerH * 0.3}
              L${innerX + innerW} ${innerY + innerH * 0.5}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Arbres */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.15} ${innerY + innerH * 0.9}
              L${innerX + innerW * 0.15} ${innerY + innerH * 0.6}
              M${innerX + innerW * 0.1} ${innerY + innerH * 0.65}
              Q${innerX + innerW * 0.15} ${innerY + innerH * 0.55} ${innerX + innerW * 0.2} ${innerY + innerH * 0.65}
              M${innerX + innerW * 0.12} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.15} ${innerY + innerH * 0.62} ${innerX + innerW * 0.18} ${innerY + innerH * 0.7}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.4"
        />
        {/* Lac/rivière */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.3} ${innerY + innerH * 0.65} ${innerX + innerW * 0.5} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.7} ${innerY + innerH * 0.75} ${innerX + innerW} ${innerY + innerH * 0.68}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.3"
          strokeOpacity="0.6"
        />
      </g>
    ),
    portrait: (
      <g>
        {/* Ovale du visage */}
        <ellipse
          className="museum-element-detail stroke-medium"
          cx={innerX + innerW / 2}
          cy={innerY + innerH * 0.35}
          rx={innerW * 0.25}
          ry={innerH * 0.22}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Cheveux/perruque */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX + innerW * 0.25} ${innerY + innerH * 0.3}
              Q${innerX + innerW * 0.2} ${innerY + innerH * 0.15} ${innerX + innerW * 0.35} ${innerY + innerH * 0.12}
              Q${innerX + innerW * 0.5} ${innerY + innerH * 0.08} ${innerX + innerW * 0.65} ${innerY + innerH * 0.12}
              Q${innerX + innerW * 0.8} ${innerY + innerH * 0.15} ${innerX + innerW * 0.75} ${innerY + innerH * 0.3}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.4"
        />
        {/* Épaules et buste */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX + innerW * 0.2} ${innerY + innerH}
              L${innerX + innerW * 0.2} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.25} ${innerY + innerH * 0.55} ${innerX + innerW * 0.4} ${innerY + innerH * 0.52}
              L${innerX + innerW * 0.6} ${innerY + innerH * 0.52}
              Q${innerX + innerW * 0.75} ${innerY + innerH * 0.55} ${innerX + innerW * 0.8} ${innerY + innerH * 0.7}
              L${innerX + innerW * 0.8} ${innerY + innerH}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Traits du visage */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.42} ${innerY + innerH * 0.32} L${innerX + innerW * 0.46} ${innerY + innerH * 0.32}
              M${innerX + innerW * 0.54} ${innerY + innerH * 0.32} L${innerX + innerW * 0.58} ${innerY + innerH * 0.32}
              M${innerX + innerW * 0.5} ${innerY + innerH * 0.38} L${innerX + innerW * 0.5} ${innerY + innerH * 0.42}
              M${innerX + innerW * 0.45} ${innerY + innerH * 0.48} Q${innerX + innerW * 0.5} ${innerY + innerH * 0.5} ${innerX + innerW * 0.55} ${innerY + innerH * 0.48}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.3"
        />
      </g>
    ),
    stillLife: (
      <g>
        {/* Table/surface */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX} ${innerY + innerH * 0.65} L${innerX + innerW} ${innerY + innerH * 0.65}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Vase */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX + innerW * 0.35} ${innerY + innerH * 0.65}
              Q${innerX + innerW * 0.3} ${innerY + innerH * 0.5} ${innerX + innerW * 0.35} ${innerY + innerH * 0.4}
              L${innerX + innerW * 0.38} ${innerY + innerH * 0.35}
              L${innerX + innerW * 0.42} ${innerY + innerH * 0.35}
              L${innerX + innerW * 0.45} ${innerY + innerH * 0.4}
              Q${innerX + innerW * 0.5} ${innerY + innerH * 0.5} ${innerX + innerW * 0.45} ${innerY + innerH * 0.65}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Fleurs */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.4} ${innerY + innerH * 0.35}
              Q${innerX + innerW * 0.35} ${innerY + innerH * 0.25} ${innerX + innerW * 0.4} ${innerY + innerH * 0.18}
              M${innerX + innerW * 0.4} ${innerY + innerH * 0.35}
              Q${innerX + innerW * 0.45} ${innerY + innerH * 0.22} ${innerX + innerW * 0.5} ${innerY + innerH * 0.2}
              M${innerX + innerW * 0.4} ${innerY + innerH * 0.35}
              Q${innerX + innerW * 0.3} ${innerY + innerH * 0.28} ${innerX + innerW * 0.28} ${innerY + innerH * 0.22}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.4"
        />
        {/* Fruits */}
        <circle
          className="museum-element-detail stroke-short"
          cx={innerX + innerW * 0.65}
          cy={innerY + innerH * 0.58}
          r={innerW * 0.08}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.4"
        />
        <circle
          className="museum-element-detail stroke-short"
          cx={innerX + innerW * 0.75}
          cy={innerY + innerH * 0.55}
          r={innerW * 0.06}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.4"
        />
        {/* Nappe drapée */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX} ${innerY + innerH * 0.68}
              Q${innerX + innerW * 0.1} ${innerY + innerH * 0.75} ${innerX + innerW * 0.2} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.3} ${innerY + innerH * 0.8} ${innerX + innerW * 0.4} ${innerY + innerH * 0.72}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.3"
          strokeOpacity="0.6"
        />
      </g>
    ),
  };

  return paintings[type] || paintings.landscape;
};

// ========================================
// AMPHORE GRECQUE ULTRA-DÉTAILLÉE
// ========================================
const GreekAmphora = ({ x, y, scale = 1, delay = 0, pattern = 'geometric' }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4s' }}
    className="museum-decor-container"
  >
    {/* Corps principal de l'amphore */}
    <path
      className="museum-element stroke-very-long"
      d="M25 180
         Q5 170 5 140
         Q0 100 10 70
         Q15 50 20 45
         L20 35
         Q15 32 15 28
         Q15 24 20 22
         L20 18
         Q18 15 18 12
         Q18 8 25 5
         Q32 8 32 12
         Q32 15 30 18
         L30 22
         Q35 24 35 28
         Q35 32 30 35
         L30 45
         Q35 50 40 70
         Q50 100 45 140
         Q45 170 25 180 Z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.5"
      style={{ '--fill-opacity': '0.05' }}
    />

    {/* Pied de l'amphore */}
    <path
      className="museum-element-secondary stroke-long"
      d="M15 180 L15 190 Q15 195 10 195 L40 195 Q35 195 35 190 L35 180"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
    />
    <ellipse
      className="museum-element-detail stroke-medium"
      cx="25"
      cy="195"
      rx="18"
      ry="4"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1"
    />

    {/* Anses de l'amphore */}
    <path
      className="museum-element-secondary stroke-long"
      d="M10 70
         Q-5 60 -8 80
         Q-10 100 -5 110
         Q0 120 10 115"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
    />
    <path
      className="museum-element-secondary stroke-long"
      d="M40 70
         Q55 60 58 80
         Q60 100 55 110
         Q50 120 40 115"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
    />

    {/* Bandes décoratives horizontales */}
    <path
      className="museum-element-detail stroke-medium"
      d="M8 75 Q25 72 42 75
         M5 100 Q25 95 45 100
         M7 130 Q25 125 43 130
         M12 155 Q25 150 38 155"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.7"
    />

    {/* Motifs géométriques - Méandre grec */}
    {pattern === 'geometric' && (
      <g className="museum-element-detail stroke-long" style={{ '--draw-delay': `${delay + 1.5}s` }}>
        <path
          d="M10 85 L12 85 L12 88 L15 88 L15 85 L17 85 L17 92 L10 92 L10 85
             M20 85 L22 85 L22 88 L25 88 L25 85 L27 85 L27 92 L20 92 L20 85
             M30 85 L32 85 L32 88 L35 88 L35 85 L37 85 L37 92 L30 92 L30 85"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
      </g>
    )}

    {/* Motifs figuratifs - silhouettes noires sur rouge */}
    {pattern === 'figures' && (
      <g className="museum-element-detail stroke-long" style={{ '--draw-delay': `${delay + 1.5}s` }}>
        {/* Guerrier stylisé */}
        <path
          d="M18 105
             L18 115 L15 115 L18 125 L16 135 L18 135 L20 125 L22 135 L24 135 L22 125 L25 115 L22 115 L22 105
             M20 100 A3 3 0 1 1 20 106
             M13 112 L18 108 L23 112
             M25 110 L28 108 L28 115 L25 113"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.6"
        />
      </g>
    )}

    {/* Palmettes sur le col */}
    <path
      className="museum-element-detail stroke-medium"
      d="M22 40 Q20 35 22 30 Q25 28 28 30 Q30 35 28 40
         M25 42 L25 32
         M23 38 Q25 34 27 38"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.5"
    />

    {/* Détails du col */}
    <ellipse
      className="museum-element-detail stroke-short"
      cx="25"
      cy="22"
      rx="7"
      ry="2"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.6"
    />
  </g>
);

// ========================================
// STATUE GRECQUE (PROFIL/SILHOUETTE)
// ========================================
const GreekStatue = ({ x, y, scale = 1, delay = 0, type = 'venus' }) => {
  const statues = {
    venus: (
      <g>
        {/* Tête */}
        <path
          className="museum-element stroke-very-long"
          d="M30 20
             Q25 18 22 22
             Q18 28 20 35
             Q22 42 25 45
             L25 50"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
        />
        {/* Chignon */}
        <path
          className="museum-element-secondary stroke-long"
          d="M22 22
             Q18 15 22 10
             Q28 5 35 10
             Q40 15 38 22
             Q35 28 30 25"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
        />
        {/* Cou et épaules */}
        <path
          className="museum-element stroke-very-long"
          d="M25 50 Q20 52 15 60 Q10 70 12 80"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
        />
        <path
          className="museum-element stroke-very-long"
          d="M25 50 Q30 52 38 58 Q45 65 42 75"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
        />
        {/* Torse */}
        <path
          className="museum-element stroke-very-long"
          d="M12 80 Q8 100 12 120 Q15 140 18 160
             M42 75 Q46 95 42 115 Q38 135 35 160"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
        />
        {/* Drapé */}
        <path
          className="museum-element-secondary stroke-long"
          d="M18 160 Q10 180 15 200 Q18 220 20 240
             M35 160 Q40 180 38 200 Q35 220 32 240
             M20 240 Q25 245 32 240"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
        />
        {/* Plis du drapé */}
        <path
          className="museum-element-detail stroke-medium"
          d="M20 170 Q22 180 20 190
             M25 165 Q27 185 25 205
             M30 170 Q32 185 30 200
             M22 210 Q25 220 22 230
             M28 208 Q30 218 28 228"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.6"
        />
        {/* Bras */}
        <path
          className="museum-element-secondary stroke-long"
          d="M12 80 Q5 90 8 100 Q10 108 15 105
             M42 75 Q48 82 50 95"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.9"
        />
        {/* Traits du visage */}
        <path
          className="museum-element-detail stroke-short"
          d="M24 28 L26 30 L24 32
             M22 36 Q24 38 26 36"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Socle */}
        <rect
          className="museum-element stroke-long"
          x="5"
          y="240"
          width="45"
          height="15"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
          style={{ '--fill-opacity': '0.06' }}
        />
        <path
          className="museum-element-detail stroke-short"
          d="M8 248 L47 248"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
      </g>
    ),
    bust: (
      <g>
        {/* Tête de profil */}
        <path
          className="museum-element stroke-very-long"
          d="M35 10
             Q30 5 25 8
             Q18 12 15 20
             Q12 30 15 38
             Q18 45 22 50
             L25 55"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
        />
        {/* Couronne de laurier */}
        <path
          className="museum-element-secondary stroke-long"
          d="M20 8 Q22 5 25 6 Q28 5 30 8
             M18 12 Q15 10 14 14 Q13 10 10 12
             M32 12 Q35 10 36 14 Q37 10 40 12"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.8"
        />
        {/* Cheveux bouclés */}
        <path
          className="museum-element-detail stroke-medium"
          d="M35 12 Q38 15 36 20 Q40 18 38 25
             M15 25 Q12 28 14 32 Q10 30 12 35"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.6"
        />
        {/* Traits du visage - style romain */}
        <path
          className="museum-element-detail stroke-short"
          d="M18 25 L22 28 L20 32
             M17 38 Q20 42 25 40"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Cou et torse */}
        <path
          className="museum-element stroke-very-long"
          d="M25 55 Q22 60 15 68 Q8 78 5 95
             M25 55 Q30 62 40 70 Q50 80 52 95"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
        />
        {/* Toge drapée */}
        <path
          className="museum-element-secondary stroke-long"
          d="M5 95 Q0 100 2 110 Q5 120 10 125
             M52 95 Q58 100 55 110 Q52 120 48 125
             M10 125 Q25 130 48 125"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
          style={{ '--fill-opacity': '0.04' }}
        />
        {/* Plis de la toge */}
        <path
          className="museum-element-detail stroke-medium"
          d="M15 100 Q18 108 15 115
             M25 98 Q28 106 25 112
             M38 100 Q40 107 38 114
             M20 118 L20 125
             M35 118 L35 125"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Socle circulaire */}
        <ellipse
          className="museum-element stroke-long"
          cx="28"
          cy="130"
          rx="30"
          ry="8"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
        />
        <ellipse
          className="museum-element-detail stroke-short"
          cx="28"
          cy="138"
          rx="25"
          ry="5"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.6"
        />
      </g>
    ),
  };

  return (
    <g
      transform={`translate(${x}, ${y}) scale(${scale})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '5s' }}
      className="museum-decor-container"
    >
      {statues[type] || statues.venus}
    </g>
  );
};

// ========================================
// MÉANDRE GREC (FRISE DÉCORATIVE)
// ========================================
const GreekMeander = ({ x, y, width = 200, delay = 0 }) => {
  const patternWidth = 20;
  const repeatCount = Math.floor(width / patternWidth);

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '3s' }}
    >
      {/* Ligne supérieure */}
      <line
        className="museum-element stroke-long"
        x1="0"
        y1="0"
        x2={width}
        y2="0"
        stroke="#d4af37"
        strokeWidth="1"
      />
      {/* Ligne inférieure */}
      <line
        className="museum-element stroke-long"
        x1="0"
        y1="15"
        x2={width}
        y2="15"
        stroke="#d4af37"
        strokeWidth="1"
      />
      {/* Motif méandre répété */}
      {[...Array(repeatCount)].map((_, i) => (
        <path
          key={i}
          className="museum-element-detail stroke-medium"
          d={`M${i * patternWidth + 2} 2
              L${i * patternWidth + 2} 8
              L${i * patternWidth + 8} 8
              L${i * patternWidth + 8} 5
              L${i * patternWidth + 5} 5
              L${i * patternWidth + 5} 2
              M${i * patternWidth + 12} 13
              L${i * patternWidth + 12} 7
              L${i * patternWidth + 18} 7
              L${i * patternWidth + 18} 10
              L${i * patternWidth + 15} 10
              L${i * patternWidth + 15} 13`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.8"
          style={{ '--draw-delay': `${delay + i * 0.1}s` }}
        />
      ))}
    </g>
  );
};

// ========================================
// COURONNE DE LAURIER
// ========================================
const LaurelWreath = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4s' }}
    className="museum-decor-container"
  >
    {/* Branche gauche */}
    <path
      className="museum-element stroke-very-long"
      d="M25 80 Q15 60 10 40 Q8 25 15 10"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
    />
    {/* Feuilles gauche */}
    <path
      className="museum-element-secondary stroke-long"
      d="M23 75 Q18 72 20 68 Q22 72 23 75
         M20 65 Q14 60 17 55 Q19 60 20 65
         M17 52 Q10 48 13 42 Q16 48 17 52
         M14 40 Q8 35 12 28 Q15 35 14 40
         M12 28 Q8 22 12 15 Q14 22 12 28"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />
    {/* Branche droite */}
    <path
      className="museum-element stroke-very-long"
      d="M25 80 Q35 60 40 40 Q42 25 35 10"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.2"
    />
    {/* Feuilles droite */}
    <path
      className="museum-element-secondary stroke-long"
      d="M27 75 Q32 72 30 68 Q28 72 27 75
         M30 65 Q36 60 33 55 Q31 60 30 65
         M33 52 Q40 48 37 42 Q34 48 33 52
         M36 40 Q42 35 38 28 Q35 35 36 40
         M38 28 Q42 22 38 15 Q36 22 38 28"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />
    {/* Ruban en bas */}
    <path
      className="museum-element-detail stroke-medium"
      d="M20 82 Q25 85 30 82
         M22 85 Q20 95 18 100
         M28 85 Q30 95 32 100
         M18 100 Q16 102 18 105
         M32 100 Q34 102 32 105"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.7"
    />
  </g>
);

// ========================================
// CANDÉLABRE ORNÉ
// ========================================
const OrnateCandelabra = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4s' }}
  >
    {/* Base */}
    <path
      className="museum-element stroke-long"
      d="M10 180 L40 180 L38 175 L35 175 L35 170 L32 170 L32 165 L18 165 L18 170 L15 170 L15 175 L12 175 Z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1"
      style={{ '--fill-opacity': '0.06' }}
    />
    {/* Pieds ornés */}
    <path
      className="museum-element-detail stroke-medium"
      d="M12 180 Q8 182 5 180 Q8 178 12 180
         M38 180 Q42 182 45 180 Q42 178 38 180"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.7"
    />

    {/* Fût central */}
    <path
      className="museum-element stroke-very-long"
      d="M22 165 L22 60 M28 165 L28 60"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1"
    />

    {/* Nœuds décoratifs */}
    <ellipse
      className="museum-element-secondary stroke-medium"
      cx="25"
      cy="140"
      rx="8"
      ry="4"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />
    <ellipse
      className="museum-element-secondary stroke-medium"
      cx="25"
      cy="110"
      rx="6"
      ry="3"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />
    <ellipse
      className="museum-element-secondary stroke-medium"
      cx="25"
      cy="85"
      rx="8"
      ry="4"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />

    {/* Chapiteau supérieur */}
    <path
      className="museum-element-secondary stroke-long"
      d="M18 60 L18 55 Q18 50 25 48 Q32 50 32 55 L32 60"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1"
    />

    {/* Branches avec bougies */}
    <path
      className="museum-element stroke-long"
      d="M18 55 Q8 52 5 45 L5 35 M5 38 L2 38 L2 32 L8 32 L8 38
         M32 55 Q42 52 45 45 L45 35 M45 38 L42 38 L42 32 L48 32 L48 38"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.9"
    />

    {/* Bougie centrale */}
    <path
      className="museum-element-secondary stroke-medium"
      d="M22 48 L22 30 L28 30 L28 48
         M22 32 L28 32"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />

    {/* Flammes */}
    <path
      className="museum-element-detail stroke-short"
      d="M25 30 Q23 25 25 18 Q27 25 25 30
         M5 32 Q3 28 5 22 Q7 28 5 32
         M45 32 Q43 28 45 22 Q47 28 45 32"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.6"
    />
  </g>
);

// ========================================
// ROSACE DÉCORATIVE
// ========================================
const DecorativeRosette = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '3s' }}
  >
    {/* Cercle extérieur */}
    <circle
      className="museum-element stroke-long"
      cx="30"
      cy="30"
      r="28"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1"
    />
    <circle
      className="museum-element-secondary stroke-medium"
      cx="30"
      cy="30"
      r="24"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.6"
    />

    {/* Pétales */}
    {[...Array(8)].map((_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      const x1 = 30 + Math.cos(angle) * 8;
      const y1 = 30 + Math.sin(angle) * 8;
      const x2 = 30 + Math.cos(angle) * 22;
      const y2 = 30 + Math.sin(angle) * 22;
      const cx1 = 30 + Math.cos(angle + 0.3) * 15;
      const cy1 = 30 + Math.sin(angle + 0.3) * 15;
      const cx2 = 30 + Math.cos(angle - 0.3) * 15;
      const cy2 = 30 + Math.sin(angle - 0.3) * 15;

      return (
        <path
          key={i}
          className="museum-element-detail stroke-short"
          d={`M${x1} ${y1} Q${cx1} ${cy1} ${x2} ${y2} Q${cx2} ${cy2} ${x1} ${y1}`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.7"
          style={{ '--draw-delay': `${delay + i * 0.1}s` }}
        />
      );
    })}

    {/* Centre */}
    <circle
      className="museum-element-detail stroke-short"
      cx="30"
      cy="30"
      r="6"
      fill="none"
      stroke="#d4af37"
      strokeWidth="0.8"
    />
    <circle cx="30" cy="30" r="2" fill="#d4af37" fillOpacity="0.4" />
  </g>
);

// ========================================
// COMPOSANT PRINCIPAL
// ========================================
const CabinetBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Fond subtil */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(26, 39, 68, 0.3) 0%, rgba(10, 15, 26, 0.8) 100%)',
        }}
      />

      {/* SVG principal avec tous les éléments de musée */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Filtre de lueur dorée */}
          <filter id="golden-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#d4af37" floodOpacity="0.3" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ===== COLONNES IONIQUES ===== */}
        {/* Colonne gauche */}
        <IonicColumn x={50} y={300} scale={1.2} delay={0.5} />
        {/* Colonne droite (miroir) */}
        <IonicColumn x={1820} y={300} scale={1.2} delay={0.8} mirror={true} />

        {/* ===== FRISES MÉANDRES ===== */}
        {/* Frise supérieure */}
        <GreekMeander x={200} y={80} width={400} delay={1} />
        <GreekMeander x={1320} y={80} width={400} delay={1.2} />
        {/* Frise inférieure */}
        <GreekMeander x={300} y={980} width={500} delay={2} />
        <GreekMeander x={1120} y={980} width={500} delay={2.2} />

        {/* ===== CADRES/TABLEAUX 18ÈME SIÈCLE ===== */}
        {/* Grand tableau central - paysage */}
        <BaroqueFrame x={700} y={120} width={180} height={220} delay={1.5}>
          <PaintingContent width={180} height={220} type="landscape" />
        </BaroqueFrame>

        {/* Tableau portrait - côté gauche */}
        <BaroqueFrame x={250} y={180} width={140} height={180} delay={2}>
          <PaintingContent width={140} height={180} type="portrait" />
        </BaroqueFrame>

        {/* Tableau nature morte - côté droit */}
        <BaroqueFrame x={1530} y={180} width={140} height={180} delay={2.3}>
          <PaintingContent width={140} height={180} type="stillLife" />
        </BaroqueFrame>

        {/* Petit cadre décoratif */}
        <BaroqueFrame x={1050} y={150} width={100} height={130} delay={2.8}>
          <PaintingContent width={100} height={130} type="portrait" />
        </BaroqueFrame>

        {/* ===== AMPHORES GRECQUES ===== */}
        {/* Amphore gauche avec motifs géométriques */}
        <GreekAmphora x={180} y={600} scale={1.1} delay={3} pattern="geometric" />
        {/* Amphore droite avec figures */}
        <GreekAmphora x={1680} y={620} scale={1} delay={3.3} pattern="figures" />
        {/* Petite amphore centrale */}
        <GreekAmphora x={920} y={720} scale={0.7} delay={4} pattern="geometric" />

        {/* ===== STATUES GRECQUES ===== */}
        {/* Vénus - grande statue gauche */}
        <GreekStatue x={350} y={480} scale={1.3} delay={3.5} type="venus" />
        {/* Buste romain - droite */}
        <GreekStatue x={1450} y={520} scale={1.2} delay={3.8} type="bust" />

        {/* ===== COURONNES DE LAURIER ===== */}
        <LaurelWreath x={580} y={60} scale={0.8} delay={4.5} />
        <LaurelWreath x={1260} y={60} scale={0.8} delay={4.7} />

        {/* ===== CANDÉLABRES ===== */}
        <OrnateCandelabra x={480} y={700} scale={1} delay={5} />
        <OrnateCandelabra x={1380} y={700} scale={1} delay={5.2} />

        {/* ===== ROSACES DÉCORATIVES ===== */}
        <DecorativeRosette x={100} y={150} scale={0.8} delay={5.5} />
        <DecorativeRosette x={1760} y={150} scale={0.8} delay={5.7} />
        <DecorativeRosette x={600} y={450} scale={0.6} delay={6} />
        <DecorativeRosette x={1250} y={450} scale={0.6} delay={6.2} />

        {/* ===== ÉLÉMENTS DÉCORATIFS SUPPLÉMENTAIRES ===== */}
        {/* Petites colonnes décoratives */}
        <IonicColumn x={550} y={550} scale={0.5} delay={6.5} />
        <IonicColumn x={1320} y={550} scale={0.5} delay={6.7} />

        {/* Lignes décoratives fines */}
        <line
          className="museum-element stroke-long"
          x1="200"
          y1="450"
          x2="500"
          y2="450"
          stroke="#d4af37"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          style={{ '--draw-delay': '7s', '--draw-duration': '2s' }}
        />
        <line
          className="museum-element stroke-long"
          x1="1420"
          y1="450"
          x2="1720"
          y2="450"
          stroke="#d4af37"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          style={{ '--draw-delay': '7.2s', '--draw-duration': '2s' }}
        />
      </svg>

      {/* Particules dorées flottantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full animate-sparkle`}
            style={{
              left: `${5 + (i * 4.7) % 90}%`,
              top: `${10 + (i * 7.3) % 80}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              backgroundColor: '#d4af37',
              opacity: 0.2 + (i % 4) * 0.1,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette gradient pour profondeur atmosphérique */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(10, 13, 26, 0.4) 100%),
            linear-gradient(to bottom, rgba(10, 13, 26, 0.2) 0%, transparent 15%, transparent 85%, rgba(10, 13, 26, 0.3) 100%)
          `,
        }}
      />
    </div>
  );
};

export default CabinetBackground;
