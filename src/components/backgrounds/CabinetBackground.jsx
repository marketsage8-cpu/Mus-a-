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
// COLONNE IONIQUE HYPER-DÉTAILLÉE
// ========================================
const IonicColumn = ({ x, y, scale = 1, delay = 0, mirror = false }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${mirror ? -scale : scale}, ${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '3s' }}
  >
    {/* === BASE ÉTAGÉE COMPLEXE === */}
    {/* Plinthe principale avec moulures */}
    <path
      className="museum-element stroke-long"
      d="M-8 385 L58 385 L58 380 L-8 380 Z"
      fill="none" stroke="#d4af37" strokeWidth="1"
    />
    <path
      className="museum-element-secondary stroke-medium"
      d="M-5 380 L55 380 L55 375 L-5 375 Z"
      fill="none" stroke="#d4af37" strokeWidth="0.8"
    />
    {/* Tore inférieur avec détails */}
    <ellipse className="museum-element stroke-medium" cx="25" cy="372" rx="32" ry="5" fill="none" stroke="#d4af37" strokeWidth="1" />
    <ellipse className="museum-element-detail stroke-short" cx="25" cy="372" rx="28" ry="3.5" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    {/* Scotie avec perles */}
    <path className="museum-element-secondary stroke-medium" d="M-2 367 Q25 362 52 367" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <path className="museum-element-micro stroke-tiny" d="M2 365 L4 365 M8 364 L10 364 M14 363.5 L16 363.5 M20 363 L22 363 M26 363 L28 363 M32 363.5 L34 363.5 M38 364 L40 364 M44 365 L46 365" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    {/* Second tore */}
    <ellipse className="museum-element-secondary stroke-medium" cx="25" cy="360" rx="30" ry="4" fill="none" stroke="#d4af37" strokeWidth="0.8" />

    {/* === FÛT AVEC CANNELURES PRÉCISES === */}
    {/* 20 cannelures avec arêtes vives */}
    <path
      className="museum-element stroke-ultra"
      d="M4 358 L4 82 M7 358 L7 82 M10 358 L10 82 M13 358 L13 82 M16 358 L16 82 M19 358 L19 82 M22 358 L22 82 M25 358 L25 82 M28 358 L28 82 M31 358 L31 82 M34 358 L34 82 M37 358 L37 82 M40 358 L40 82 M43 358 L43 82 M46 358 L46 82"
      fill="none" stroke="#d4af37" strokeWidth="0.35" strokeOpacity="0.6"
    />
    {/* Contours du fût avec entasis subtile */}
    <path className="museum-element stroke-very-long" d="M2 358 Q-1 270 0 180 Q1 120 3 82" fill="none" stroke="#d4af37" strokeWidth="1.2" />
    <path className="museum-element stroke-very-long" d="M48 358 Q51 270 50 180 Q49 120 47 82" fill="none" stroke="#d4af37" strokeWidth="1.2" />
    {/* Lignes de lumière sur cannelures */}
    <path className="museum-element-micro stroke-tiny" d="M5.5 358 L5.5 82 M11.5 358 L11.5 82 M17.5 358 L17.5 82 M23.5 358 L23.5 82 M29.5 358 L29.5 82 M35.5 358 L35.5 82 M41.5 358 L41.5 82" fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.4" />

    {/* === ASTRAGALE AVEC PERLES ET PIROUETTES === */}
    <ellipse className="museum-element-secondary stroke-medium" cx="25" cy="80" rx="27" ry="4" fill="none" stroke="#d4af37" strokeWidth="0.9" />
    {/* Rang de perles */}
    {[...Array(18)].map((_, i) => (
      <circle key={`pearl-${i}`} className="museum-element-micro stroke-micro" cx={1 + i * 2.7} cy="77" r="0.8" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    ))}
    {/* Pirouettes entre perles */}
    <path className="museum-element-micro stroke-tiny" d="M3.5 77 L3.5 79 M6.2 77 L6.2 79 M8.9 77 L8.9 79 M11.6 77 L11.6 79 M14.3 77 L14.3 79 M17 77 L17 79 M19.7 77 L19.7 79 M22.4 77 L22.4 79 M25.1 77 L25.1 79 M27.8 77 L27.8 79 M30.5 77 L30.5 79 M33.2 77 L33.2 79 M35.9 77 L35.9 79 M38.6 77 L38.6 79 M41.3 77 L41.3 79 M44 77 L44 79" fill="none" stroke="#d4af37" strokeWidth="0.2" />

    {/* === ÉCHINE AVEC OVES ET DARDS DÉTAILLÉS === */}
    <path className="museum-element-secondary stroke-long" d="M-6 72 L56 72 L56 58 L-6 58 Z" fill="none" stroke="#d4af37" strokeWidth="0.8" />
    {/* Oves précis avec ombres intérieures */}
    {[...Array(7)].map((_, i) => (
      <g key={`ove-${i}`}>
        <ellipse className="museum-element-detail stroke-short" cx={3 + i * 7.5} cy="65" rx="2.8" ry="5" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        <path className="museum-element-micro stroke-micro" d={`M${1.5 + i * 7.5} 63 Q${3 + i * 7.5} 61 ${4.5 + i * 7.5} 63`} fill="none" stroke="#d4af37" strokeWidth="0.25" />
        <ellipse className="museum-element-micro stroke-micro" cx={3 + i * 7.5} cy="65" rx="1.5" ry="3" fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.5" />
      </g>
    ))}
    {/* Dards lancéolés entre oves */}
    {[...Array(6)].map((_, i) => (
      <path key={`dart-${i}`} className="museum-element-micro stroke-tiny" d={`M${6.5 + i * 7.5} 60 L${6.5 + i * 7.5} 70 M${5.8 + i * 7.5} 62 L${6.5 + i * 7.5} 60 L${7.2 + i * 7.5} 62`} fill="none" stroke="#d4af37" strokeWidth="0.3" />
    ))}

    {/* === ABAQUE MOULURÉ === */}
    <path className="museum-element stroke-long" d="M-18 18 L68 18 L68 32 L-18 32 Z" fill="none" stroke="#d4af37" strokeWidth="1.1" />
    <path className="museum-element-secondary stroke-medium" d="M-15 21 L65 21 M-15 29 L65 29" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    {/* Kyma sur l'abaque */}
    <path className="museum-element-micro stroke-tiny" d="M-12 25 Q-8 23 -4 25 Q0 27 4 25 Q8 23 12 25 Q16 27 20 25 Q24 23 28 25 Q32 27 36 25 Q40 23 44 25 Q48 27 52 25 Q56 23 60 25" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* === VOLUTE GAUCHE ULTRA-DÉTAILLÉE === */}
    <path
      className="museum-element stroke-very-long"
      d="M-12 56 Q-25 56 -25 42 Q-25 28 -10 28 Q5 28 5 43 Q5 54 -3 54 Q-15 54 -15 43 Q-15 35 -5 35 Q3 35 3 42 Q3 48 -2 48 Q-8 48 -8 43 Q-8 40 -4 40 Q0 40 0 43"
      fill="none" stroke="#d4af37" strokeWidth="1"
    />
    {/* Œil de volute avec détails concentriques */}
    <circle className="museum-element-detail stroke-short" cx="-4" cy="43" r="4" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <circle className="museum-element-micro stroke-micro" cx="-4" cy="43" r="2.5" fill="none" stroke="#d4af37" strokeWidth="0.35" />
    <circle className="museum-element-micro stroke-micro" cx="-4" cy="43" r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <circle cx="-4" cy="43" r="0.5" fill="#d4af37" fillOpacity="0.5" />
    {/* Filets de la volute gauche */}
    <path className="museum-element-micro stroke-tiny" d="M-10 54 Q-20 54 -20 43 Q-20 32 -8 32" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* === VOLUTE DROITE ULTRA-DÉTAILLÉE === */}
    <path
      className="museum-element stroke-very-long"
      d="M62 56 Q75 56 75 42 Q75 28 60 28 Q45 28 45 43 Q45 54 53 54 Q65 54 65 43 Q65 35 55 35 Q47 35 47 42 Q47 48 52 48 Q58 48 58 43 Q58 40 54 40 Q50 40 50 43"
      fill="none" stroke="#d4af37" strokeWidth="1"
    />
    {/* Œil de volute droite */}
    <circle className="museum-element-detail stroke-short" cx="54" cy="43" r="4" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <circle className="museum-element-micro stroke-micro" cx="54" cy="43" r="2.5" fill="none" stroke="#d4af37" strokeWidth="0.35" />
    <circle className="museum-element-micro stroke-micro" cx="54" cy="43" r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <circle cx="54" cy="43" r="0.5" fill="#d4af37" fillOpacity="0.5" />
    {/* Filets de la volute droite */}
    <path className="museum-element-micro stroke-tiny" d="M60 54 Q70 54 70 43 Q70 32 58 32" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* === CANAL DES VOLUTES AVEC PALMETTE === */}
    <path className="museum-element-secondary stroke-long" d="M-10 56 L60 56 Q62 48 60 42 L-10 42 Q-12 48 -10 56" fill="none" stroke="#d4af37" strokeWidth="0.7" />
    {/* Palmette centrale hyper-détaillée */}
    <path className="museum-element-detail stroke-medium" d="M25 54 L25 32" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    {/* Feuilles de palmette symétriques */}
    <path className="museum-element-detail stroke-short" d="M25 52 Q22 48 23 42 M25 52 Q28 48 27 42" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <path className="museum-element-detail stroke-short" d="M25 52 Q18 46 20 38 M25 52 Q32 46 30 38" fill="none" stroke="#d4af37" strokeWidth="0.35" />
    <path className="museum-element-detail stroke-short" d="M25 52 Q14 44 17 35 M25 52 Q36 44 33 35" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <path className="museum-element-micro stroke-tiny" d="M25 52 Q10 42 14 33 M25 52 Q40 42 36 33" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    {/* Nervures des feuilles */}
    <path className="museum-element-micro stroke-micro" d="M24 48 L23 42 M26 48 L27 42 M22 46 L20 38 M28 46 L30 38" fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.6" />
    {/* Cœur de palmette */}
    <ellipse className="museum-element-micro stroke-micro" cx="25" cy="50" rx="1.5" ry="2" fill="none" stroke="#d4af37" strokeWidth="0.3" />
  </g>
);

// ========================================
// CADRE BAROQUE 18ÈME SIÈCLE ULTRA-DÉTAILLÉ
// ========================================
const BaroqueFrame = ({ x, y, width = 120, height = 150, delay = 0, children }) => {
  const cornerSize = 32;
  const borderWidth = 18;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.5s' }}
      className="museum-decor-container"
    >
      {/* === CADRES MULTIPLES AVEC MOULURES ÉLABORÉES === */}
      {/* Cadre extérieur principal */}
      <rect className="museum-element stroke-long" x="-4" y="-4" width={width + 8} height={height + 8} fill="none" stroke="#d4af37" strokeWidth="2" />
      <rect className="museum-element stroke-long" x="-2" y="-2" width={width + 4} height={height + 4} fill="none" stroke="#d4af37" strokeWidth="1.5" />
      <rect className="museum-element stroke-medium" x="0" y="0" width={width} height={height} fill="none" stroke="#d4af37" strokeWidth="1.2" />
      {/* Cadre intermédiaire avec gorge */}
      <rect className="museum-element-secondary stroke-medium" x={borderWidth / 3} y={borderWidth / 3} width={width - borderWidth * 2 / 3} height={height - borderWidth * 2 / 3} fill="none" stroke="#d4af37" strokeWidth="0.6" />
      <rect className="museum-element-secondary stroke-medium" x={borderWidth * 0.6} y={borderWidth * 0.6} width={width - borderWidth * 1.2} height={height - borderWidth * 1.2} fill="none" stroke="#d4af37" strokeWidth="0.5" />
      {/* Cadre intérieur */}
      <rect className="museum-element-secondary stroke-medium" x={borderWidth} y={borderWidth} width={width - borderWidth * 2} height={height - borderWidth * 2} fill="none" stroke="#d4af37" strokeWidth="1" />
      <rect className="museum-element-detail stroke-short" x={borderWidth + 2} y={borderWidth + 2} width={width - borderWidth * 2 - 4} height={height - borderWidth * 2 - 4} fill="none" stroke="#d4af37" strokeWidth="0.4" />

      {/* Moulure oves sur bordure supérieure */}
      <path className="museum-element-micro stroke-tiny" d={`M${borderWidth / 2 + 5} ${borderWidth / 4} Q${borderWidth / 2 + 8} ${borderWidth / 4 - 2} ${borderWidth / 2 + 11} ${borderWidth / 4} Q${borderWidth / 2 + 14} ${borderWidth / 4 + 2} ${borderWidth / 2 + 17} ${borderWidth / 4} Q${borderWidth / 2 + 20} ${borderWidth / 4 - 2} ${borderWidth / 2 + 23} ${borderWidth / 4} Q${borderWidth / 2 + 26} ${borderWidth / 4 + 2} ${borderWidth / 2 + 29} ${borderWidth / 4} Q${borderWidth / 2 + 32} ${borderWidth / 4 - 2} ${borderWidth / 2 + 35} ${borderWidth / 4} Q${borderWidth / 2 + 38} ${borderWidth / 4 + 2} ${borderWidth / 2 + 41} ${borderWidth / 4}`} fill="none" stroke="#d4af37" strokeWidth="0.22" />
      {/* Moulure oves sur bordure inférieure */}
      <path className="museum-element-micro stroke-tiny" d={`M${borderWidth / 2 + 5} ${height - borderWidth / 4} Q${borderWidth / 2 + 8} ${height - borderWidth / 4 + 2} ${borderWidth / 2 + 11} ${height - borderWidth / 4} Q${borderWidth / 2 + 14} ${height - borderWidth / 4 - 2} ${borderWidth / 2 + 17} ${height - borderWidth / 4} Q${borderWidth / 2 + 20} ${height - borderWidth / 4 + 2} ${borderWidth / 2 + 23} ${height - borderWidth / 4} Q${borderWidth / 2 + 26} ${height - borderWidth / 4 - 2} ${borderWidth / 2 + 29} ${height - borderWidth / 4} Q${borderWidth / 2 + 32} ${height - borderWidth / 4 + 2} ${borderWidth / 2 + 35} ${height - borderWidth / 4}`} fill="none" stroke="#d4af37" strokeWidth="0.22" />
      {/* Perles sur bordures latérales */}
      <path className="museum-element-micro stroke-micro" d={`M${borderWidth / 4} ${borderWidth + 5} L${borderWidth / 4} ${borderWidth + 7} M${borderWidth / 4} ${borderWidth + 12} L${borderWidth / 4} ${borderWidth + 14} M${borderWidth / 4} ${borderWidth + 19} L${borderWidth / 4} ${borderWidth + 21} M${borderWidth / 4} ${height - borderWidth - 21} L${borderWidth / 4} ${height - borderWidth - 19} M${borderWidth / 4} ${height - borderWidth - 14} L${borderWidth / 4} ${height - borderWidth - 12} M${borderWidth / 4} ${height - borderWidth - 7} L${borderWidth / 4} ${height - borderWidth - 5}`} fill="none" stroke="#d4af37" strokeWidth="0.18" />
      <path className="museum-element-micro stroke-micro" d={`M${width - borderWidth / 4} ${borderWidth + 5} L${width - borderWidth / 4} ${borderWidth + 7} M${width - borderWidth / 4} ${borderWidth + 12} L${width - borderWidth / 4} ${borderWidth + 14} M${width - borderWidth / 4} ${borderWidth + 19} L${width - borderWidth / 4} ${borderWidth + 21} M${width - borderWidth / 4} ${height - borderWidth - 21} L${width - borderWidth / 4} ${height - borderWidth - 19} M${width - borderWidth / 4} ${height - borderWidth - 14} L${width - borderWidth / 4} ${height - borderWidth - 12} M${width - borderWidth / 4} ${height - borderWidth - 7} L${width - borderWidth / 4} ${height - borderWidth - 5}`} fill="none" stroke="#d4af37" strokeWidth="0.18" />

      {/* === COIN SUPÉRIEUR GAUCHE - ACANTHE ROCOCO ULTRA-COMPLEXE === */}
      <g transform="translate(0, 0)">
        {/* Structure principale du coin avec courbes multiples */}
        <path className="museum-element-detail stroke-medium" d={`M0 ${cornerSize} Q0 0 ${cornerSize} 0 Q${cornerSize - 8} ${cornerSize - 8} 0 ${cornerSize}`} fill="none" stroke="#d4af37" strokeWidth="1" />
        <path className="museum-element-detail stroke-short" d={`M3 ${cornerSize - 3} Q3 3 ${cornerSize - 3} 3 Q${cornerSize - 10} ${cornerSize - 10} 3 ${cornerSize - 3}`} fill="none" stroke="#d4af37" strokeWidth="0.7" />
        <path className="museum-element-micro stroke-tiny" d={`M6 ${cornerSize - 6} Q6 6 ${cornerSize - 6} 6 Q${cornerSize - 12} ${cornerSize - 12} 6 ${cornerSize - 6}`} fill="none" stroke="#d4af37" strokeWidth="0.4" />

        {/* Feuille d'acanthe gauche - ultra-détaillée */}
        <path className="museum-element-micro stroke-tiny" d="M2 26 Q5 22 4 17 Q7 19 6 24 Q9 20 8 15 Q11 18 10 23 Q13 19 12 14 Q15 17 14 22 Q7 25 2 26" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-micro" d="M3 23 L4 18 M5 22 L6 16 M7 21 L8 15 M9 20 L10 14 M11 19 L12 15" fill="none" stroke="#d4af37" strokeWidth="0.18" />
        {/* Nervures des feuilles */}
        <path className="museum-element-micro stroke-micro" d="M4 20 Q5 19 6 20 M6 18 Q7 17 8 18 M8 16 Q9 15 10 16" fill="none" stroke="#d4af37" strokeWidth="0.12" strokeOpacity="0.6" />

        {/* Feuille d'acanthe supérieure - ultra-détaillée */}
        <path className="museum-element-micro stroke-tiny" d="M26 2 Q22 5 17 4 Q19 7 24 6 Q20 9 15 8 Q18 11 23 10 Q19 13 14 12 Q17 15 22 14 Q25 7 26 2" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-micro" d="M23 3 L18 4 M22 5 L16 6 M21 7 L15 8 M20 9 L14 10 M19 11 L15 12" fill="none" stroke="#d4af37" strokeWidth="0.18" />

        {/* Volute centrale élaborée */}
        <path className="museum-element-detail stroke-short" d="M12 12 Q7 7 12 3 Q17 2 16 7 Q15 12 10 11 Q6 10 7 6 Q8 3 12 4 Q15 5 14 8 Q13 10 10 9 Q8 8 9 6" fill="none" stroke="#d4af37" strokeWidth="0.55" />
        <circle className="museum-element-micro stroke-micro" cx="11" cy="7" r="2" fill="none" stroke="#d4af37" strokeWidth="0.3" />
        <circle className="museum-element-micro stroke-micro" cx="11" cy="7" r="1" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        <circle cx="11" cy="7" r="0.5" fill="#d4af37" fillOpacity="0.4" />

        {/* Fleuron central */}
        <path className="museum-element-micro stroke-micro" d="M11 7 L8 4 M11 7 L14 4 M11 7 L11 3 M11 7 L9 5 M11 7 L13 5" fill="none" stroke="#d4af37" strokeWidth="0.18" />

        {/* Petites rosettes décoratives */}
        <circle className="museum-element-micro stroke-micro" cx="5" cy="10" r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.15" />
        <circle className="museum-element-micro stroke-micro" cx="10" cy="5" r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.15" />
      </g>

      {/* === COIN SUPÉRIEUR DROIT === */}
      <g transform={`translate(${width}, 0) scale(-1, 1)`}>
        <path className="museum-element-detail stroke-medium" d={`M0 ${cornerSize} Q0 0 ${cornerSize} 0 Q${cornerSize - 8} ${cornerSize - 8} 0 ${cornerSize}`} fill="none" stroke="#d4af37" strokeWidth="1" />
        <path className="museum-element-detail stroke-short" d={`M3 ${cornerSize - 3} Q3 3 ${cornerSize - 3} 3 Q${cornerSize - 10} ${cornerSize - 10} 3 ${cornerSize - 3}`} fill="none" stroke="#d4af37" strokeWidth="0.7" />
        <path className="museum-element-micro stroke-tiny" d={`M6 ${cornerSize - 6} Q6 6 ${cornerSize - 6} 6 Q${cornerSize - 12} ${cornerSize - 12} 6 ${cornerSize - 6}`} fill="none" stroke="#d4af37" strokeWidth="0.4" />
        <path className="museum-element-micro stroke-tiny" d="M2 26 Q5 22 4 17 Q7 19 6 24 Q9 20 8 15 Q11 18 10 23 Q13 19 12 14 Q15 17 14 22 Q7 25 2 26" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-micro" d="M3 23 L4 18 M5 22 L6 16 M7 21 L8 15 M9 20 L10 14 M11 19 L12 15" fill="none" stroke="#d4af37" strokeWidth="0.18" />
        <path className="museum-element-micro stroke-tiny" d="M26 2 Q22 5 17 4 Q19 7 24 6 Q20 9 15 8 Q18 11 23 10 Q19 13 14 12 Q17 15 22 14 Q25 7 26 2" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-detail stroke-short" d="M12 12 Q7 7 12 3 Q17 2 16 7 Q15 12 10 11 Q6 10 7 6 Q8 3 12 4 Q15 5 14 8 Q13 10 10 9" fill="none" stroke="#d4af37" strokeWidth="0.55" />
        <circle className="museum-element-micro stroke-micro" cx="11" cy="7" r="2" fill="none" stroke="#d4af37" strokeWidth="0.3" />
        <circle className="museum-element-micro stroke-micro" cx="11" cy="7" r="1" fill="none" stroke="#d4af37" strokeWidth="0.2" />
      </g>

      {/* === COINS INFÉRIEURS === */}
      <g transform={`translate(0, ${height}) scale(1, -1)`}>
        <path className="museum-element-detail stroke-medium" d={`M0 ${cornerSize} Q0 0 ${cornerSize} 0 Q${cornerSize - 8} ${cornerSize - 8} 0 ${cornerSize}`} fill="none" stroke="#d4af37" strokeWidth="1" />
        <path className="museum-element-detail stroke-short" d={`M3 ${cornerSize - 3} Q3 3 ${cornerSize - 3} 3 Q${cornerSize - 10} ${cornerSize - 10} 3 ${cornerSize - 3}`} fill="none" stroke="#d4af37" strokeWidth="0.7" />
        <path className="museum-element-micro stroke-tiny" d="M2 26 Q5 22 4 17 Q7 19 6 24 Q9 20 8 15 Q11 18 10 23 Q7 25 2 26" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-micro" d="M3 23 L4 18 M5 22 L6 16 M7 21 L8 15" fill="none" stroke="#d4af37" strokeWidth="0.18" />
        <path className="museum-element-detail stroke-short" d="M12 12 Q7 7 12 3 Q17 2 16 7 Q15 12 10 11" fill="none" stroke="#d4af37" strokeWidth="0.55" />
        <circle className="museum-element-micro stroke-micro" cx="11" cy="7" r="1.5" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>
      <g transform={`translate(${width}, ${height}) scale(-1, -1)`}>
        <path className="museum-element-detail stroke-medium" d={`M0 ${cornerSize} Q0 0 ${cornerSize} 0 Q${cornerSize - 8} ${cornerSize - 8} 0 ${cornerSize}`} fill="none" stroke="#d4af37" strokeWidth="1" />
        <path className="museum-element-detail stroke-short" d={`M3 ${cornerSize - 3} Q3 3 ${cornerSize - 3} 3 Q${cornerSize - 10} ${cornerSize - 10} 3 ${cornerSize - 3}`} fill="none" stroke="#d4af37" strokeWidth="0.7" />
        <path className="museum-element-micro stroke-tiny" d="M2 26 Q5 22 4 17 Q7 19 6 24 Q9 20 8 15 Q11 18 10 23 Q7 25 2 26" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-micro" d="M3 23 L4 18 M5 22 L6 16 M7 21 L8 15" fill="none" stroke="#d4af37" strokeWidth="0.18" />
        <path className="museum-element-detail stroke-short" d="M12 12 Q7 7 12 3 Q17 2 16 7 Q15 12 10 11" fill="none" stroke="#d4af37" strokeWidth="0.55" />
        <circle className="museum-element-micro stroke-micro" cx="11" cy="7" r="1.5" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>

      {/* === CARTOUCHE SUPÉRIEUR AVEC FLEUR DE LYS ÉLABORÉE === */}
      <g transform={`translate(${width / 2}, 0)`}>
        {/* Forme externe du cartouche */}
        <path className="museum-element-secondary stroke-medium" d="M0 -16 Q-22 -16 -30 -4 Q-26 4 -18 2 Q-12 10 -6 5 Q0 14 6 5 Q12 10 18 2 Q26 4 30 -4 Q22 -16 0 -16" fill="none" stroke="#d4af37" strokeWidth="0.9" />
        <path className="museum-element-detail stroke-short" d="M0 -13 Q-16 -13 -22 -3 Q-18 3 -12 1 Q-8 7 -4 3 Q0 10 4 3 Q8 7 12 1 Q18 3 22 -3 Q16 -13 0 -13" fill="none" stroke="#d4af37" strokeWidth="0.55" />
        <path className="museum-element-micro stroke-tiny" d="M0 -10 Q-10 -10 -14 -2 Q-10 2 -6 0 Q-3 4 0 2 Q3 4 6 0 Q10 2 14 -2 Q10 -10 0 -10" fill="none" stroke="#d4af37" strokeWidth="0.35" />

        {/* Fleur de lys ultra-détaillée */}
        <path className="museum-element-micro stroke-tiny" d="M0 0 L0 -9 M-1.5 -7 L0 -10 L1.5 -7" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-micro" d="M-4 -6 Q-2 -8 0 -10 Q2 -8 4 -6 M-3 -5 Q0 -3 3 -5 M-5 -4 Q-3 -6 0 -7 Q3 -6 5 -4" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        <path className="museum-element-micro stroke-micro" d="M-2 -2 Q-1 -4 0 -5 Q1 -4 2 -2 M0 -5 Q-1 -6 -1.5 -7 M0 -5 Q1 -6 1.5 -7" fill="none" stroke="#d4af37" strokeWidth="0.2" />

        {/* Perles décoratives autour */}
        <circle className="museum-element-micro stroke-micro" cx="-14" cy="-3" r="1" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        <circle className="museum-element-micro stroke-micro" cx="14" cy="-3" r="1" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        <circle className="museum-element-micro stroke-micro" cx="-8" cy="-1" r="0.7" fill="none" stroke="#d4af37" strokeWidth="0.15" />
        <circle className="museum-element-micro stroke-micro" cx="8" cy="-1" r="0.7" fill="none" stroke="#d4af37" strokeWidth="0.15" />

        {/* Volutes latérales */}
        <path className="museum-element-micro stroke-micro" d="M-20 -2 Q-22 -4 -20 -6 Q-18 -6 -18 -4 Q-18 -2 -20 -2" fill="none" stroke="#d4af37" strokeWidth="0.18" />
        <path className="museum-element-micro stroke-micro" d="M20 -2 Q22 -4 20 -6 Q18 -6 18 -4 Q18 -2 20 -2" fill="none" stroke="#d4af37" strokeWidth="0.18" />
      </g>

      {/* === CARTOUCHE INFÉRIEUR AVEC COQUILLE ÉLABORÉE === */}
      <g transform={`translate(${width / 2}, ${height})`}>
        <path className="museum-element-secondary stroke-medium" d="M0 16 Q-22 16 -30 4 Q-26 -4 -18 -2 Q-12 -10 -6 -5 Q0 -14 6 -5 Q12 -10 18 -2 Q26 -4 30 4 Q22 16 0 16" fill="none" stroke="#d4af37" strokeWidth="0.9" />
        <path className="museum-element-detail stroke-short" d="M0 13 Q-16 13 -22 3 Q-18 -3 -12 -1 Q-8 -7 -4 -3 Q0 -10 4 -3 Q8 -7 12 -1 Q18 -3 22 3 Q16 13 0 13" fill="none" stroke="#d4af37" strokeWidth="0.55" />

        {/* Coquille Saint-Jacques ultra-détaillée */}
        <path className="museum-element-detail stroke-short" d="M-14 7 Q-10 10 -5 7 Q0 11 5 7 Q10 10 14 7" fill="none" stroke="#d4af37" strokeWidth="0.45" />
        <path className="museum-element-micro stroke-tiny" d="M-12 8 L0 3 L12 8 M-10 8 L0 4 L10 8 M-8 8 L0 5 L8 8 M-6 8 L0 6 L6 8" fill="none" stroke="#d4af37" strokeWidth="0.28" />
        {/* Rayons de la coquille */}
        <path className="museum-element-micro stroke-micro" d="M0 3 L-13 9 M0 3 L-10 9 M0 3 L-7 9 M0 3 L-4 9 M0 3 L0 9 M0 3 L4 9 M0 3 L7 9 M0 3 L10 9 M0 3 L13 9" fill="none" stroke="#d4af37" strokeWidth="0.15" />
        {/* Perle centrale */}
        <circle className="museum-element-micro stroke-micro" cx="0" cy="2" r="1.5" fill="none" stroke="#d4af37" strokeWidth="0.2" />

        {/* Volutes latérales */}
        <path className="museum-element-micro stroke-micro" d="M-20 2 Q-22 4 -20 6 Q-18 6 -18 4 Q-18 2 -20 2" fill="none" stroke="#d4af37" strokeWidth="0.18" />
        <path className="museum-element-micro stroke-micro" d="M20 2 Q22 4 20 6 Q18 6 18 4 Q18 2 20 2" fill="none" stroke="#d4af37" strokeWidth="0.18" />
      </g>

      {/* === GUIRLANDES LATÉRALES ULTRA-DÉTAILLÉES === */}
      {/* Guirlande gauche */}
      <path className="museum-element-detail stroke-short" d={`M-3 ${height * 0.22} Q-10 ${height * 0.28} -7 ${height * 0.36} Q-12 ${height * 0.42} -8 ${height * 0.5} Q-12 ${height * 0.58} -7 ${height * 0.66} Q-10 ${height * 0.72} -3 ${height * 0.78}`} fill="none" stroke="#d4af37" strokeWidth="0.55" />
      {/* Feuilles et fleurs sur guirlande gauche */}
      <path className="museum-element-micro stroke-tiny" d={`M-6 ${height * 0.28} Q-10 ${height * 0.3} -8 ${height * 0.35} Q-6 ${height * 0.33} -6 ${height * 0.28}`} fill="none" stroke="#d4af37" strokeWidth="0.28" />
      <path className="museum-element-micro stroke-tiny" d={`M-8 ${height * 0.44} Q-12 ${height * 0.46} -10 ${height * 0.51} Q-8 ${height * 0.49} -8 ${height * 0.44}`} fill="none" stroke="#d4af37" strokeWidth="0.28" />
      <path className="museum-element-micro stroke-tiny" d={`M-6 ${height * 0.6} Q-10 ${height * 0.62} -8 ${height * 0.67} Q-6 ${height * 0.65} -6 ${height * 0.6}`} fill="none" stroke="#d4af37" strokeWidth="0.28" />
      {/* Petites fleurs */}
      <circle className="museum-element-micro stroke-micro" cx="-9" cy={height * 0.36} r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.15" />
      <circle className="museum-element-micro stroke-micro" cx="-10" cy={height * 0.5} r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.15" />
      <circle className="museum-element-micro stroke-micro" cx="-9" cy={height * 0.64} r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.15" />
      {/* Ruban */}
      <path className="museum-element-micro stroke-micro" d={`M-4 ${height * 0.22} Q-6 ${height * 0.2} -5 ${height * 0.18} M-4 ${height * 0.78} Q-6 ${height * 0.8} -5 ${height * 0.82}`} fill="none" stroke="#d4af37" strokeWidth="0.18" />

      {/* Guirlande droite */}
      <path className="museum-element-detail stroke-short" d={`M${width + 3} ${height * 0.22} Q${width + 10} ${height * 0.28} ${width + 7} ${height * 0.36} Q${width + 12} ${height * 0.42} ${width + 8} ${height * 0.5} Q${width + 12} ${height * 0.58} ${width + 7} ${height * 0.66} Q${width + 10} ${height * 0.72} ${width + 3} ${height * 0.78}`} fill="none" stroke="#d4af37" strokeWidth="0.55" />
      {/* Feuilles sur guirlande droite */}
      <path className="museum-element-micro stroke-tiny" d={`M${width + 6} ${height * 0.28} Q${width + 10} ${height * 0.3} ${width + 8} ${height * 0.35} Q${width + 6} ${height * 0.33} ${width + 6} ${height * 0.28}`} fill="none" stroke="#d4af37" strokeWidth="0.28" />
      <path className="museum-element-micro stroke-tiny" d={`M${width + 8} ${height * 0.44} Q${width + 12} ${height * 0.46} ${width + 10} ${height * 0.51} Q${width + 8} ${height * 0.49} ${width + 8} ${height * 0.44}`} fill="none" stroke="#d4af37" strokeWidth="0.28" />
      <path className="museum-element-micro stroke-tiny" d={`M${width + 6} ${height * 0.6} Q${width + 10} ${height * 0.62} ${width + 8} ${height * 0.67} Q${width + 6} ${height * 0.65} ${width + 6} ${height * 0.6}`} fill="none" stroke="#d4af37" strokeWidth="0.28" />
      {/* Petites fleurs */}
      <circle className="museum-element-micro stroke-micro" cx={width + 9} cy={height * 0.36} r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.15" />
      <circle className="museum-element-micro stroke-micro" cx={width + 10} cy={height * 0.5} r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.15" />
      <circle className="museum-element-micro stroke-micro" cx={width + 9} cy={height * 0.64} r="1.2" fill="none" stroke="#d4af37" strokeWidth="0.15" />

      {/* Contenu du cadre */}
      {children}
    </g>
  );
};

// ========================================
// TABLEAU/PEINTURE INTÉRIEUR - ULTRA-DÉTAILLÉ
// ========================================
const PaintingContent = ({ width, height, type = 'landscape' }) => {
  const innerX = 18;
  const innerY = 18;
  const innerW = width - 36;
  const innerH = height - 36;

  const paintings = {
    landscape: (
      <g>
        {/* === CIEL AVEC NUAGES DÉTAILLÉS === */}
        {/* Fond de ciel */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX} ${innerY} L${innerX + innerW} ${innerY} L${innerX + innerW} ${innerY + innerH * 0.42} L${innerX} ${innerY + innerH * 0.45} Z`}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.3"
          strokeOpacity="0.3"
        />
        {/* Nuages - premier groupe */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.1} ${innerY + innerH * 0.12}
              Q${innerX + innerW * 0.15} ${innerY + innerH * 0.08} ${innerX + innerW * 0.22} ${innerY + innerH * 0.1}
              Q${innerX + innerW * 0.28} ${innerY + innerH * 0.06} ${innerX + innerW * 0.35} ${innerY + innerH * 0.09}
              Q${innerX + innerW * 0.4} ${innerY + innerH * 0.05} ${innerX + innerW * 0.45} ${innerY + innerH * 0.1}
              Q${innerX + innerW * 0.42} ${innerY + innerH * 0.14} ${innerX + innerW * 0.35} ${innerY + innerH * 0.15}
              Q${innerX + innerW * 0.25} ${innerY + innerH * 0.16} ${innerX + innerW * 0.18} ${innerY + innerH * 0.14}
              Q${innerX + innerW * 0.12} ${innerY + innerH * 0.15} ${innerX + innerW * 0.1} ${innerY + innerH * 0.12}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25" strokeOpacity="0.5"
        />
        {/* Nuages - deuxième groupe */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.55} ${innerY + innerH * 0.08}
              Q${innerX + innerW * 0.62} ${innerY + innerH * 0.04} ${innerX + innerW * 0.7} ${innerY + innerH * 0.07}
              Q${innerX + innerW * 0.78} ${innerY + innerH * 0.03} ${innerX + innerW * 0.85} ${innerY + innerH * 0.08}
              Q${innerX + innerW * 0.82} ${innerY + innerH * 0.12} ${innerX + innerW * 0.72} ${innerY + innerH * 0.13}
              Q${innerX + innerW * 0.62} ${innerY + innerH * 0.14} ${innerX + innerW * 0.55} ${innerY + innerH * 0.08}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25" strokeOpacity="0.5"
        />
        {/* Oiseaux lointains */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.3} ${innerY + innerH * 0.2} Q${innerX + innerW * 0.32} ${innerY + innerH * 0.18} ${innerX + innerW * 0.34} ${innerY + innerH * 0.2}
              M${innerX + innerW * 0.36} ${innerY + innerH * 0.19} Q${innerX + innerW * 0.38} ${innerY + innerH * 0.17} ${innerX + innerW * 0.4} ${innerY + innerH * 0.19}
              M${innerX + innerW * 0.72} ${innerY + innerH * 0.22} Q${innerX + innerW * 0.74} ${innerY + innerH * 0.2} ${innerX + innerW * 0.76} ${innerY + innerH * 0.22}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.6"
        />

        {/* === MONTAGNES AVEC RELIEF ET OMBRES === */}
        {/* Montagne arrière-plan (lointaine) */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX} ${innerY + innerH * 0.48}
              L${innerX + innerW * 0.12} ${innerY + innerH * 0.38}
              L${innerX + innerW * 0.22} ${innerY + innerH * 0.42}
              L${innerX + innerW * 0.35} ${innerY + innerH * 0.32}
              L${innerX + innerW * 0.48} ${innerY + innerH * 0.4}
              L${innerX + innerW * 0.58} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.72} ${innerY + innerH * 0.35}
              L${innerX + innerW * 0.82} ${innerY + innerH * 0.3}
              L${innerX + innerW * 0.92} ${innerY + innerH * 0.36}
              L${innerX + innerW} ${innerY + innerH * 0.44}`}
          fill="none" stroke="#d4af37" strokeWidth="0.5"
        />
        {/* Ombrage des montagnes */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.35} ${innerY + innerH * 0.32} L${innerX + innerW * 0.38} ${innerY + innerH * 0.45}
              M${innerX + innerW * 0.58} ${innerY + innerH * 0.28} L${innerX + innerW * 0.62} ${innerY + innerH * 0.42}
              M${innerX + innerW * 0.82} ${innerY + innerH * 0.3} L${innerX + innerW * 0.85} ${innerY + innerH * 0.42}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.4"
        />
        {/* Neige sur sommets */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.33} ${innerY + innerH * 0.33} L${innerX + innerW * 0.35} ${innerY + innerH * 0.32} L${innerX + innerW * 0.37} ${innerY + innerH * 0.34}
              M${innerX + innerW * 0.56} ${innerY + innerH * 0.29} L${innerX + innerW * 0.58} ${innerY + innerH * 0.28} L${innerX + innerW * 0.6} ${innerY + innerH * 0.3}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.7"
        />

        {/* === COLLINES INTERMÉDIAIRES === */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX} ${innerY + innerH * 0.55}
              Q${innerX + innerW * 0.15} ${innerY + innerH * 0.48} ${innerX + innerW * 0.3} ${innerY + innerH * 0.52}
              Q${innerX + innerW * 0.45} ${innerY + innerH * 0.46} ${innerX + innerW * 0.6} ${innerY + innerH * 0.5}
              Q${innerX + innerW * 0.8} ${innerY + innerH * 0.44} ${innerX + innerW} ${innerY + innerH * 0.52}`}
          fill="none" stroke="#d4af37" strokeWidth="0.4"
        />

        {/* === ARBRES DÉTAILLÉS - PREMIER PLAN GAUCHE === */}
        {/* Tronc principal */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.12} ${innerY + innerH * 0.95}
              L${innerX + innerW * 0.12} ${innerY + innerH * 0.52}
              M${innerX + innerW * 0.11} ${innerY + innerH * 0.95} L${innerX + innerW * 0.13} ${innerY + innerH * 0.95}`}
          fill="none" stroke="#d4af37" strokeWidth="0.5"
        />
        {/* Branches et feuillage */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.12} ${innerY + innerH * 0.55}
              Q${innerX + innerW * 0.08} ${innerY + innerH * 0.48} ${innerX + innerW * 0.05} ${innerY + innerH * 0.5}
              M${innerX + innerW * 0.12} ${innerY + innerH * 0.55}
              Q${innerX + innerW * 0.16} ${innerY + innerH * 0.46} ${innerX + innerW * 0.2} ${innerY + innerH * 0.48}
              M${innerX + innerW * 0.12} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.06} ${innerY + innerH * 0.55} ${innerX + innerW * 0.03} ${innerY + innerH * 0.58}
              M${innerX + innerW * 0.12} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.18} ${innerY + innerH * 0.54} ${innerX + innerW * 0.22} ${innerY + innerH * 0.56}
              M${innerX + innerW * 0.12} ${innerY + innerH * 0.65}
              Q${innerX + innerW * 0.07} ${innerY + innerH * 0.62} ${innerX + innerW * 0.04} ${innerY + innerH * 0.64}
              M${innerX + innerW * 0.12} ${innerY + innerH * 0.65}
              Q${innerX + innerW * 0.17} ${innerY + innerH * 0.6} ${innerX + innerW * 0.21} ${innerY + innerH * 0.62}`}
          fill="none" stroke="#d4af37" strokeWidth="0.3"
        />
        {/* Feuillage détaillé */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.06} ${innerY + innerH * 0.48} Q${innerX + innerW * 0.08} ${innerY + innerH * 0.45} ${innerX + innerW * 0.1} ${innerY + innerH * 0.47}
              M${innerX + innerW * 0.14} ${innerY + innerH * 0.46} Q${innerX + innerW * 0.16} ${innerY + innerH * 0.43} ${innerX + innerW * 0.18} ${innerY + innerH * 0.45}
              M${innerX + innerW * 0.04} ${innerY + innerH * 0.54} Q${innerX + innerW * 0.06} ${innerY + innerH * 0.51} ${innerX + innerW * 0.08} ${innerY + innerH * 0.53}
              M${innerX + innerW * 0.18} ${innerY + innerH * 0.52} Q${innerX + innerW * 0.2} ${innerY + innerH * 0.49} ${innerX + innerW * 0.22} ${innerY + innerH * 0.51}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.7"
        />

        {/* === ARBRE DROITE === */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.88} ${innerY + innerH * 0.95}
              L${innerX + innerW * 0.88} ${innerY + innerH * 0.58}`}
          fill="none" stroke="#d4af37" strokeWidth="0.4"
        />
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.88} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.82} ${innerY + innerH * 0.54} ${innerX + innerW * 0.78} ${innerY + innerH * 0.56}
              M${innerX + innerW * 0.88} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.94} ${innerY + innerH * 0.52} ${innerX + innerW * 0.98} ${innerY + innerH * 0.55}
              M${innerX + innerW * 0.88} ${innerY + innerH * 0.66}
              Q${innerX + innerW * 0.83} ${innerY + innerH * 0.62} ${innerX + innerW * 0.8} ${innerY + innerH * 0.64}
              M${innerX + innerW * 0.88} ${innerY + innerH * 0.66}
              Q${innerX + innerW * 0.93} ${innerY + innerH * 0.6} ${innerX + innerW * 0.97} ${innerY + innerH * 0.62}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25"
        />

        {/* === LAC AVEC REFLETS === */}
        {/* Contour du lac */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX + innerW * 0.25} ${innerY + innerH * 0.72}
              Q${innerX + innerW * 0.35} ${innerY + innerH * 0.68} ${innerX + innerW * 0.5} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.65} ${innerY + innerH * 0.66} ${innerX + innerW * 0.75} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.72} ${innerY + innerH * 0.76} ${innerX + innerW * 0.6} ${innerY + innerH * 0.78}
              Q${innerX + innerW * 0.45} ${innerY + innerH * 0.8} ${innerX + innerW * 0.35} ${innerY + innerH * 0.77}
              Q${innerX + innerW * 0.28} ${innerY + innerH * 0.75} ${innerX + innerW * 0.25} ${innerY + innerH * 0.72}`}
          fill="none" stroke="#d4af37" strokeWidth="0.4"
        />
        {/* Reflets dans l'eau */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.35} ${innerY + innerH * 0.72} L${innerX + innerW * 0.38} ${innerY + innerH * 0.74}
              M${innerX + innerW * 0.45} ${innerY + innerH * 0.71} L${innerX + innerW * 0.48} ${innerY + innerH * 0.73}
              M${innerX + innerW * 0.55} ${innerY + innerH * 0.7} L${innerX + innerW * 0.58} ${innerY + innerH * 0.72}
              M${innerX + innerW * 0.65} ${innerY + innerH * 0.71} L${innerX + innerW * 0.68} ${innerY + innerH * 0.73}
              M${innerX + innerW * 0.4} ${innerY + innerH * 0.75} L${innerX + innerW * 0.42} ${innerY + innerH * 0.76}
              M${innerX + innerW * 0.52} ${innerY + innerH * 0.74} L${innerX + innerW * 0.54} ${innerY + innerH * 0.75}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.5"
        />

        {/* === PRAIRIE ET HERBES AU PREMIER PLAN === */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX} ${innerY + innerH * 0.82}
              Q${innerX + innerW * 0.2} ${innerY + innerH * 0.78} ${innerX + innerW * 0.4} ${innerY + innerH * 0.82}
              Q${innerX + innerW * 0.6} ${innerY + innerH * 0.79} ${innerX + innerW * 0.8} ${innerY + innerH * 0.83}
              Q${innerX + innerW * 0.9} ${innerY + innerH * 0.8} ${innerX + innerW} ${innerY + innerH * 0.84}`}
          fill="none" stroke="#d4af37" strokeWidth="0.35"
        />
        {/* Herbes détaillées */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.02} ${innerY + innerH * 0.95} L${innerX + innerW * 0.02} ${innerY + innerH * 0.88}
              M${innerX + innerW * 0.04} ${innerY + innerH * 0.95} L${innerX + innerW * 0.05} ${innerY + innerH * 0.86}
              M${innerX + innerW * 0.28} ${innerY + innerH * 0.95} L${innerX + innerW * 0.27} ${innerY + innerH * 0.88}
              M${innerX + innerW * 0.3} ${innerY + innerH * 0.95} L${innerX + innerW * 0.31} ${innerY + innerH * 0.87}
              M${innerX + innerW * 0.55} ${innerY + innerH * 0.95} L${innerX + innerW * 0.54} ${innerY + innerH * 0.89}
              M${innerX + innerW * 0.57} ${innerY + innerH * 0.95} L${innerX + innerW * 0.58} ${innerY + innerH * 0.88}
              M${innerX + innerW * 0.75} ${innerY + innerH * 0.95} L${innerX + innerW * 0.74} ${innerY + innerH * 0.9}
              M${innerX + innerW * 0.77} ${innerY + innerH * 0.95} L${innerX + innerW * 0.78} ${innerY + innerH * 0.89}`}
          fill="none" stroke="#d4af37" strokeWidth="0.12" strokeOpacity="0.6"
        />

        {/* === CHEMIN SINUEUX === */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.45} ${innerY + innerH * 0.95}
              Q${innerX + innerW * 0.48} ${innerY + innerH * 0.88} ${innerX + innerW * 0.52} ${innerY + innerH * 0.85}
              Q${innerX + innerW * 0.5} ${innerY + innerH * 0.8} ${innerX + innerW * 0.55} ${innerY + innerH * 0.75}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.5"
        />

        {/* === PETITE MAISON/MOULIN AU LOIN === */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.7} ${innerY + innerH * 0.48}
              L${innerX + innerW * 0.72} ${innerY + innerH * 0.42}
              L${innerX + innerW * 0.74} ${innerY + innerH * 0.48}
              L${innerX + innerW * 0.74} ${innerY + innerH * 0.52}
              L${innerX + innerW * 0.7} ${innerY + innerH * 0.52} Z
              M${innerX + innerW * 0.715} ${innerY + innerH * 0.49} L${innerX + innerW * 0.715} ${innerY + innerH * 0.52}
              M${innerX + innerW * 0.725} ${innerY + innerH * 0.49} L${innerX + innerW * 0.725} ${innerY + innerH * 0.52}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.7"
        />
      </g>
    ),
    portrait: (
      <g>
        {/* === FOND AVEC DRAPÉ === */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX} ${innerY}
              Q${innerX + innerW * 0.1} ${innerY + innerH * 0.1} ${innerX} ${innerY + innerH * 0.2}
              M${innerX + innerW} ${innerY}
              Q${innerX + innerW * 0.9} ${innerY + innerH * 0.1} ${innerX + innerW} ${innerY + innerH * 0.2}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.3"
        />

        {/* === OVALE DU VISAGE AVEC CONTOUR PRÉCIS === */}
        <ellipse
          className="museum-element-detail stroke-medium"
          cx={innerX + innerW / 2}
          cy={innerY + innerH * 0.33}
          rx={innerW * 0.24}
          ry={innerH * 0.2}
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        />
        {/* Contour intérieur du visage pour le volume */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.32} ${innerY + innerH * 0.28}
              Q${innerX + innerW * 0.35} ${innerY + innerH * 0.35} ${innerX + innerW * 0.38} ${innerY + innerH * 0.42}
              M${innerX + innerW * 0.68} ${innerY + innerH * 0.28}
              Q${innerX + innerW * 0.65} ${innerY + innerH * 0.35} ${innerX + innerW * 0.62} ${innerY + innerH * 0.42}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.4"
        />

        {/* === PERRUQUE 18ÈME SIÈCLE ULTRA-DÉTAILLÉE === */}
        {/* Contour principal de la perruque */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX + innerW * 0.26} ${innerY + innerH * 0.28}
              Q${innerX + innerW * 0.22} ${innerY + innerH * 0.18} ${innerX + innerW * 0.28} ${innerY + innerH * 0.1}
              Q${innerX + innerW * 0.38} ${innerY + innerH * 0.04} ${innerX + innerW * 0.5} ${innerY + innerH * 0.05}
              Q${innerX + innerW * 0.62} ${innerY + innerH * 0.04} ${innerX + innerW * 0.72} ${innerY + innerH * 0.1}
              Q${innerX + innerW * 0.78} ${innerY + innerH * 0.18} ${innerX + innerW * 0.74} ${innerY + innerH * 0.28}`}
          fill="none" stroke="#d4af37" strokeWidth="0.45"
        />
        {/* Boucles de la perruque - côté gauche */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.26} ${innerY + innerH * 0.3}
              Q${innerX + innerW * 0.2} ${innerY + innerH * 0.32} ${innerX + innerW * 0.22} ${innerY + innerH * 0.38}
              Q${innerX + innerW * 0.18} ${innerY + innerH * 0.4} ${innerX + innerW * 0.2} ${innerY + innerH * 0.46}
              Q${innerX + innerW * 0.16} ${innerY + innerH * 0.48} ${innerX + innerW * 0.18} ${innerY + innerH * 0.52}
              M${innerX + innerW * 0.24} ${innerY + innerH * 0.34}
              Q${innerX + innerW * 0.22} ${innerY + innerH * 0.38} ${innerX + innerW * 0.24} ${innerY + innerH * 0.42}
              Q${innerX + innerW * 0.22} ${innerY + innerH * 0.46} ${innerX + innerW * 0.24} ${innerY + innerH * 0.5}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25"
        />
        {/* Boucles de la perruque - côté droit */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.74} ${innerY + innerH * 0.3}
              Q${innerX + innerW * 0.8} ${innerY + innerH * 0.32} ${innerX + innerW * 0.78} ${innerY + innerH * 0.38}
              Q${innerX + innerW * 0.82} ${innerY + innerH * 0.4} ${innerX + innerW * 0.8} ${innerY + innerH * 0.46}
              Q${innerX + innerW * 0.84} ${innerY + innerH * 0.48} ${innerX + innerW * 0.82} ${innerY + innerH * 0.52}
              M${innerX + innerW * 0.76} ${innerY + innerH * 0.34}
              Q${innerX + innerW * 0.78} ${innerY + innerH * 0.38} ${innerX + innerW * 0.76} ${innerY + innerH * 0.42}
              Q${innerX + innerW * 0.78} ${innerY + innerH * 0.46} ${innerX + innerW * 0.76} ${innerY + innerH * 0.5}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25"
        />
        {/* Ondulations du haut de la perruque */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.32} ${innerY + innerH * 0.12}
              Q${innerX + innerW * 0.36} ${innerY + innerH * 0.08} ${innerX + innerW * 0.42} ${innerY + innerH * 0.1}
              Q${innerX + innerW * 0.48} ${innerY + innerH * 0.06} ${innerX + innerW * 0.54} ${innerY + innerH * 0.08}
              Q${innerX + innerW * 0.6} ${innerY + innerH * 0.06} ${innerX + innerW * 0.66} ${innerY + innerH * 0.1}
              M${innerX + innerW * 0.35} ${innerY + innerH * 0.16}
              Q${innerX + innerW * 0.42} ${innerY + innerH * 0.12} ${innerX + innerW * 0.5} ${innerY + innerH * 0.14}
              Q${innerX + innerW * 0.58} ${innerY + innerH * 0.12} ${innerX + innerW * 0.65} ${innerY + innerH * 0.16}`}
          fill="none" stroke="#d4af37" strokeWidth="0.18" strokeOpacity="0.7"
        />
        {/* Ruban dans les cheveux */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.42} ${innerY + innerH * 0.08}
              Q${innerX + innerW * 0.45} ${innerY + innerH * 0.05} ${innerX + innerW * 0.5} ${innerY + innerH * 0.06}
              Q${innerX + innerW * 0.55} ${innerY + innerH * 0.05} ${innerX + innerW * 0.58} ${innerY + innerH * 0.08}
              M${innerX + innerW * 0.48} ${innerY + innerH * 0.04} L${innerX + innerW * 0.46} ${innerY + innerH * 0.02}
              M${innerX + innerW * 0.52} ${innerY + innerH * 0.04} L${innerX + innerW * 0.54} ${innerY + innerH * 0.02}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2"
        />

        {/* === TRAITS DU VISAGE DÉTAILLÉS === */}
        {/* Sourcils arqués */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.38} ${innerY + innerH * 0.27}
              Q${innerX + innerW * 0.42} ${innerY + innerH * 0.25} ${innerX + innerW * 0.46} ${innerY + innerH * 0.27}
              M${innerX + innerW * 0.54} ${innerY + innerH * 0.27}
              Q${innerX + innerW * 0.58} ${innerY + innerH * 0.25} ${innerX + innerW * 0.62} ${innerY + innerH * 0.27}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25"
        />
        {/* Yeux avec détails */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.39} ${innerY + innerH * 0.31}
              Q${innerX + innerW * 0.42} ${innerY + innerH * 0.29} ${innerX + innerW * 0.45} ${innerY + innerH * 0.31}
              Q${innerX + innerW * 0.42} ${innerY + innerH * 0.33} ${innerX + innerW * 0.39} ${innerY + innerH * 0.31}
              M${innerX + innerW * 0.55} ${innerY + innerH * 0.31}
              Q${innerX + innerW * 0.58} ${innerY + innerH * 0.29} ${innerX + innerW * 0.61} ${innerY + innerH * 0.31}
              Q${innerX + innerW * 0.58} ${innerY + innerH * 0.33} ${innerX + innerW * 0.55} ${innerY + innerH * 0.31}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25"
        />
        {/* Pupilles */}
        <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.42} cy={innerY + innerH * 0.31} r={innerW * 0.012} fill="none" stroke="#d4af37" strokeWidth="0.15" />
        <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.58} cy={innerY + innerH * 0.31} r={innerW * 0.012} fill="none" stroke="#d4af37" strokeWidth="0.15" />
        {/* Nez élégant */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.5} ${innerY + innerH * 0.32}
              L${innerX + innerW * 0.49} ${innerY + innerH * 0.38}
              Q${innerX + innerW * 0.47} ${innerY + innerH * 0.4} ${innerX + innerW * 0.48} ${innerY + innerH * 0.41}
              M${innerX + innerW * 0.48} ${innerY + innerH * 0.41}
              Q${innerX + innerW * 0.5} ${innerY + innerH * 0.42} ${innerX + innerW * 0.52} ${innerY + innerH * 0.41}`}
          fill="none" stroke="#d4af37" strokeWidth="0.22"
        />
        {/* Bouche avec détails */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.44} ${innerY + innerH * 0.46}
              Q${innerX + innerW * 0.47} ${innerY + innerH * 0.45} ${innerX + innerW * 0.5} ${innerY + innerH * 0.46}
              Q${innerX + innerW * 0.53} ${innerY + innerH * 0.45} ${innerX + innerW * 0.56} ${innerY + innerH * 0.46}
              M${innerX + innerW * 0.46} ${innerY + innerH * 0.47}
              Q${innerX + innerW * 0.5} ${innerY + innerH * 0.49} ${innerX + innerW * 0.54} ${innerY + innerH * 0.47}`}
          fill="none" stroke="#d4af37" strokeWidth="0.22"
        />
        {/* Menton */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.48} ${innerY + innerH * 0.5}
              Q${innerX + innerW * 0.5} ${innerY + innerH * 0.52} ${innerX + innerW * 0.52} ${innerY + innerH * 0.5}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.5"
        />

        {/* === COU ET DÉCOLLETÉ === */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.42} ${innerY + innerH * 0.52}
              L${innerX + innerW * 0.4} ${innerY + innerH * 0.58}
              M${innerX + innerW * 0.58} ${innerY + innerH * 0.52}
              L${innerX + innerW * 0.6} ${innerY + innerH * 0.58}`}
          fill="none" stroke="#d4af37" strokeWidth="0.35"
        />

        {/* === BUSTE ET VÊTEMENT ÉLABORÉ === */}
        {/* Épaules */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX + innerW * 0.15} ${innerY + innerH}
              L${innerX + innerW * 0.15} ${innerY + innerH * 0.72}
              Q${innerX + innerW * 0.2} ${innerY + innerH * 0.62} ${innerX + innerW * 0.32} ${innerY + innerH * 0.58}
              L${innerX + innerW * 0.4} ${innerY + innerH * 0.58}
              M${innerX + innerW * 0.85} ${innerY + innerH}
              L${innerX + innerW * 0.85} ${innerY + innerH * 0.72}
              Q${innerX + innerW * 0.8} ${innerY + innerH * 0.62} ${innerX + innerW * 0.68} ${innerY + innerH * 0.58}
              L${innerX + innerW * 0.6} ${innerY + innerH * 0.58}`}
          fill="none" stroke="#d4af37" strokeWidth="0.5"
        />
        {/* Décolleté */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.4} ${innerY + innerH * 0.58}
              Q${innerX + innerW * 0.45} ${innerY + innerH * 0.64} ${innerX + innerW * 0.5} ${innerY + innerH * 0.66}
              Q${innerX + innerW * 0.55} ${innerY + innerH * 0.64} ${innerX + innerW * 0.6} ${innerY + innerH * 0.58}`}
          fill="none" stroke="#d4af37" strokeWidth="0.4"
        />
        {/* Dentelle sur le décolleté */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.35} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.38} ${innerY + innerH * 0.62} ${innerX + innerW * 0.42} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.46} ${innerY + innerH * 0.63} ${innerX + innerW * 0.5} ${innerY + innerH * 0.61}
              Q${innerX + innerW * 0.54} ${innerY + innerH * 0.63} ${innerX + innerW * 0.58} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.62} ${innerY + innerH * 0.62} ${innerX + innerW * 0.65} ${innerY + innerH * 0.6}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15"
        />
        {/* Plis du vêtement */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.25} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.28} ${innerY + innerH * 0.8} ${innerX + innerW * 0.25} ${innerY + innerH * 0.9}
              M${innerX + innerW * 0.35} ${innerY + innerH * 0.68}
              Q${innerX + innerW * 0.37} ${innerY + innerH * 0.8} ${innerX + innerW * 0.35} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.65} ${innerY + innerH * 0.68}
              Q${innerX + innerW * 0.63} ${innerY + innerH * 0.8} ${innerX + innerW * 0.65} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.75} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.72} ${innerY + innerH * 0.8} ${innerX + innerW * 0.75} ${innerY + innerH * 0.9}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.6"
        />

        {/* === BIJOUX === */}
        {/* Collier */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.38} ${innerY + innerH * 0.56}
              Q${innerX + innerW * 0.44} ${innerY + innerH * 0.58} ${innerX + innerW * 0.5} ${innerY + innerH * 0.59}
              Q${innerX + innerW * 0.56} ${innerY + innerH * 0.58} ${innerX + innerW * 0.62} ${innerY + innerH * 0.56}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25"
        />
        {/* Pendentif */}
        <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.5} cy={innerY + innerH * 0.61} r={innerW * 0.02} fill="none" stroke="#d4af37" strokeWidth="0.2" />
        {/* Boucles d'oreilles */}
        <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.28} cy={innerY + innerH * 0.36} r={innerW * 0.015} fill="none" stroke="#d4af37" strokeWidth="0.15" />
        <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.72} cy={innerY + innerH * 0.36} r={innerW * 0.015} fill="none" stroke="#d4af37" strokeWidth="0.15" />
      </g>
    ),
    stillLife: (
      <g>
        {/* === FOND AVEC TEXTURE MURALE === */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX} ${innerY + innerH * 0.1} L${innerX + innerW} ${innerY + innerH * 0.1}
              M${innerX} ${innerY + innerH * 0.2} L${innerX + innerW} ${innerY + innerH * 0.2}`}
          fill="none" stroke="#d4af37" strokeWidth="0.1" strokeOpacity="0.2"
        />

        {/* === TABLE AVEC PERSPECTIVE === */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX} ${innerY + innerH * 0.62}
              L${innerX + innerW} ${innerY + innerH * 0.62}
              L${innerX + innerW * 0.95} ${innerY + innerH * 0.68}
              L${innerX + innerW * 0.05} ${innerY + innerH * 0.68}
              Z`}
          fill="none" stroke="#d4af37" strokeWidth="0.5"
        />
        {/* Bordure de table */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.05} ${innerY + innerH * 0.68}
              L${innerX + innerW * 0.05} ${innerY + innerH * 0.72}
              L${innerX + innerW * 0.95} ${innerY + innerH * 0.72}
              L${innerX + innerW * 0.95} ${innerY + innerH * 0.68}`}
          fill="none" stroke="#d4af37" strokeWidth="0.3"
        />
        {/* Pieds de table */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.1} ${innerY + innerH * 0.72} L${innerX + innerW * 0.1} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.9} ${innerY + innerH * 0.72} L${innerX + innerW * 0.9} ${innerY + innerH * 0.95}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25"
        />

        {/* === NAPPE DRAPÉE ULTRA-DÉTAILLÉE === */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX} ${innerY + innerH * 0.64}
              Q${innerX + innerW * 0.08} ${innerY + innerH * 0.7} ${innerX + innerW * 0.15} ${innerY + innerH * 0.66}
              Q${innerX + innerW * 0.22} ${innerY + innerH * 0.74} ${innerX + innerW * 0.28} ${innerY + innerH * 0.68}
              Q${innerX + innerW * 0.35} ${innerY + innerH * 0.78} ${innerX + innerW * 0.42} ${innerY + innerH * 0.7}`}
          fill="none" stroke="#d4af37" strokeWidth="0.35"
        />
        {/* Plis de la nappe */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.1} ${innerY + innerH * 0.68}
              Q${innerX + innerW * 0.12} ${innerY + innerH * 0.8} ${innerX + innerW * 0.1} ${innerY + innerH * 0.92}
              M${innerX + innerW * 0.2} ${innerY + innerH * 0.7}
              Q${innerX + innerW * 0.22} ${innerY + innerH * 0.82} ${innerX + innerW * 0.2} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.32} ${innerY + innerH * 0.72}
              Q${innerX + innerW * 0.34} ${innerY + innerH * 0.84} ${innerX + innerW * 0.32} ${innerY + innerH * 0.95}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.6"
        />
        {/* Frange de la nappe */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.05} ${innerY + innerH * 0.92} L${innerX + innerW * 0.05} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.08} ${innerY + innerH * 0.92} L${innerX + innerW * 0.08} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.11} ${innerY + innerH * 0.92} L${innerX + innerW * 0.11} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.14} ${innerY + innerH * 0.93} L${innerX + innerW * 0.14} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.17} ${innerY + innerH * 0.93} L${innerX + innerW * 0.17} ${innerY + innerH * 0.95}
              M${innerX + innerW * 0.2} ${innerY + innerH * 0.94} L${innerX + innerW * 0.2} ${innerY + innerH * 0.95}`}
          fill="none" stroke="#d4af37" strokeWidth="0.1"
        />

        {/* === VASE ÉLÉGANT AVEC DÉTAILS === */}
        {/* Corps du vase */}
        <path
          className="museum-element-detail stroke-medium"
          d={`M${innerX + innerW * 0.28} ${innerY + innerH * 0.62}
              Q${innerX + innerW * 0.22} ${innerY + innerH * 0.52} ${innerX + innerW * 0.25} ${innerY + innerH * 0.42}
              Q${innerX + innerW * 0.27} ${innerY + innerH * 0.36} ${innerX + innerW * 0.3} ${innerY + innerH * 0.32}
              L${innerX + innerW * 0.32} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.38} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.4} ${innerY + innerH * 0.32}
              Q${innerX + innerW * 0.43} ${innerY + innerH * 0.36} ${innerX + innerW * 0.45} ${innerY + innerH * 0.42}
              Q${innerX + innerW * 0.48} ${innerY + innerH * 0.52} ${innerX + innerW * 0.42} ${innerY + innerH * 0.62}`}
          fill="none" stroke="#d4af37" strokeWidth="0.5"
        />
        {/* Anses du vase */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.26} ${innerY + innerH * 0.42}
              Q${innerX + innerW * 0.2} ${innerY + innerH * 0.4} ${innerX + innerW * 0.2} ${innerY + innerH * 0.48}
              Q${innerX + innerW * 0.2} ${innerY + innerH * 0.54} ${innerX + innerW * 0.25} ${innerY + innerH * 0.52}
              M${innerX + innerW * 0.44} ${innerY + innerH * 0.42}
              Q${innerX + innerW * 0.5} ${innerY + innerH * 0.4} ${innerX + innerW * 0.5} ${innerY + innerH * 0.48}
              Q${innerX + innerW * 0.5} ${innerY + innerH * 0.54} ${innerX + innerW * 0.45} ${innerY + innerH * 0.52}`}
          fill="none" stroke="#d4af37" strokeWidth="0.25"
        />
        {/* Motif sur le vase */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.28} ${innerY + innerH * 0.48}
              Q${innerX + innerW * 0.32} ${innerY + innerH * 0.46} ${innerX + innerW * 0.35} ${innerY + innerH * 0.48}
              Q${innerX + innerW * 0.38} ${innerY + innerH * 0.46} ${innerX + innerW * 0.42} ${innerY + innerH * 0.48}
              M${innerX + innerW * 0.3} ${innerY + innerH * 0.54}
              Q${innerX + innerW * 0.35} ${innerY + innerH * 0.52} ${innerX + innerW * 0.4} ${innerY + innerH * 0.54}`}
          fill="none" stroke="#d4af37" strokeWidth="0.12" strokeOpacity="0.6"
        />

        {/* === BOUQUET DE FLEURS ULTRA-DÉTAILLÉ === */}
        {/* Tiges */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.35} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.32} ${innerY + innerH * 0.15}
              M${innerX + innerW * 0.35} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.38} ${innerY + innerH * 0.12}
              M${innerX + innerW * 0.35} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.28} ${innerY + innerH * 0.18}
              M${innerX + innerW * 0.35} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.42} ${innerY + innerH * 0.16}
              M${innerX + innerW * 0.35} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.25} ${innerY + innerH * 0.22}
              M${innerX + innerW * 0.35} ${innerY + innerH * 0.28}
              L${innerX + innerW * 0.45} ${innerY + innerH * 0.2}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2"
        />
        {/* Rose centrale */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.38} ${innerY + innerH * 0.12}
              Q${innerX + innerW * 0.36} ${innerY + innerH * 0.08} ${innerX + innerW * 0.38} ${innerY + innerH * 0.06}
              Q${innerX + innerW * 0.42} ${innerY + innerH * 0.04} ${innerX + innerW * 0.44} ${innerY + innerH * 0.08}
              Q${innerX + innerW * 0.42} ${innerY + innerH * 0.1} ${innerX + innerW * 0.38} ${innerY + innerH * 0.12}
              M${innerX + innerW * 0.37} ${innerY + innerH * 0.1}
              Q${innerX + innerW * 0.39} ${innerY + innerH * 0.08} ${innerX + innerW * 0.41} ${innerY + innerH * 0.1}
              M${innerX + innerW * 0.39} ${innerY + innerH * 0.09}
              Q${innerX + innerW * 0.4} ${innerY + innerH * 0.07} ${innerX + innerW * 0.41} ${innerY + innerH * 0.09}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2"
        />
        {/* Tulipe gauche */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.28} ${innerY + innerH * 0.18}
              Q${innerX + innerW * 0.26} ${innerY + innerH * 0.14} ${innerX + innerW * 0.28} ${innerY + innerH * 0.1}
              Q${innerX + innerW * 0.3} ${innerY + innerH * 0.08} ${innerX + innerW * 0.32} ${innerY + innerH * 0.1}
              Q${innerX + innerW * 0.34} ${innerY + innerH * 0.14} ${innerX + innerW * 0.32} ${innerY + innerH * 0.18}
              M${innerX + innerW * 0.29} ${innerY + innerH * 0.12} L${innerX + innerW * 0.31} ${innerY + innerH * 0.12}`}
          fill="none" stroke="#d4af37" strokeWidth="0.18"
        />
        {/* Tulipe droite */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.42} ${innerY + innerH * 0.16}
              Q${innerX + innerW * 0.4} ${innerY + innerH * 0.12} ${innerX + innerW * 0.42} ${innerY + innerH * 0.08}
              Q${innerX + innerW * 0.44} ${innerY + innerH * 0.06} ${innerX + innerW * 0.46} ${innerY + innerH * 0.08}
              Q${innerX + innerW * 0.48} ${innerY + innerH * 0.12} ${innerX + innerW * 0.46} ${innerY + innerH * 0.16}
              M${innerX + innerW * 0.43} ${innerY + innerH * 0.1} L${innerX + innerW * 0.45} ${innerY + innerH * 0.1}`}
          fill="none" stroke="#d4af37" strokeWidth="0.18"
        />
        {/* Feuilles */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.25} ${innerY + innerH * 0.22}
              Q${innerX + innerW * 0.22} ${innerY + innerH * 0.2} ${innerX + innerW * 0.23} ${innerY + innerH * 0.16}
              Q${innerX + innerW * 0.26} ${innerY + innerH * 0.18} ${innerX + innerW * 0.25} ${innerY + innerH * 0.22}
              M${innerX + innerW * 0.45} ${innerY + innerH * 0.2}
              Q${innerX + innerW * 0.48} ${innerY + innerH * 0.18} ${innerX + innerW * 0.47} ${innerY + innerH * 0.14}
              Q${innerX + innerW * 0.44} ${innerY + innerH * 0.16} ${innerX + innerW * 0.45} ${innerY + innerH * 0.2}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15"
        />

        {/* === FRUITS DÉTAILLÉS === */}
        {/* Grande pomme */}
        <ellipse
          className="museum-element-detail stroke-short"
          cx={innerX + innerW * 0.62}
          cy={innerY + innerH * 0.56}
          rx={innerW * 0.09}
          ry={innerH * 0.06}
          fill="none" stroke="#d4af37" strokeWidth="0.4"
        />
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.62} ${innerY + innerH * 0.5}
              L${innerX + innerW * 0.62} ${innerY + innerH * 0.48}
              M${innerX + innerW * 0.6} ${innerY + innerH * 0.49}
              Q${innerX + innerW * 0.58} ${innerY + innerH * 0.48} ${innerX + innerW * 0.57} ${innerY + innerH * 0.5}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15"
        />
        {/* Reflet sur pomme */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.58} ${innerY + innerH * 0.54}
              Q${innerX + innerW * 0.59} ${innerY + innerH * 0.52} ${innerX + innerW * 0.6} ${innerY + innerH * 0.54}`}
          fill="none" stroke="#d4af37" strokeWidth="0.1" strokeOpacity="0.5"
        />

        {/* Poire */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.75} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.7} ${innerY + innerH * 0.58} ${innerX + innerW * 0.72} ${innerY + innerH * 0.52}
              Q${innerX + innerW * 0.74} ${innerY + innerH * 0.46} ${innerX + innerW * 0.76} ${innerY + innerH * 0.44}
              Q${innerX + innerW * 0.78} ${innerY + innerH * 0.46} ${innerX + innerW * 0.8} ${innerY + innerH * 0.52}
              Q${innerX + innerW * 0.82} ${innerY + innerH * 0.58} ${innerX + innerW * 0.77} ${innerY + innerH * 0.6}
              Q${innerX + innerW * 0.76} ${innerY + innerH * 0.61} ${innerX + innerW * 0.75} ${innerY + innerH * 0.6}`}
          fill="none" stroke="#d4af37" strokeWidth="0.35"
        />
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.76} ${innerY + innerH * 0.44}
              L${innerX + innerW * 0.76} ${innerY + innerH * 0.42}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15"
        />

        {/* Grappe de raisin */}
        <g>
          <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.85} cy={innerY + innerH * 0.52} r={innerW * 0.018} fill="none" stroke="#d4af37" strokeWidth="0.15" />
          <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.88} cy={innerY + innerH * 0.53} r={innerW * 0.018} fill="none" stroke="#d4af37" strokeWidth="0.15" />
          <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.865} cy={innerY + innerH * 0.56} r={innerW * 0.018} fill="none" stroke="#d4af37" strokeWidth="0.15" />
          <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.84} cy={innerY + innerH * 0.55} r={innerW * 0.018} fill="none" stroke="#d4af37" strokeWidth="0.15" />
          <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.89} cy={innerY + innerH * 0.57} r={innerW * 0.018} fill="none" stroke="#d4af37" strokeWidth="0.15" />
          <circle className="museum-element-micro stroke-micro" cx={innerX + innerW * 0.855} cy={innerY + innerH * 0.59} r={innerW * 0.018} fill="none" stroke="#d4af37" strokeWidth="0.15" />
          <path className="museum-element-micro stroke-micro" d={`M${innerX + innerW * 0.865} ${innerY + innerH * 0.5} L${innerX + innerW * 0.865} ${innerY + innerH * 0.48}`} fill="none" stroke="#d4af37" strokeWidth="0.12" />
        </g>

        {/* === COUTEAU === */}
        <path
          className="museum-element-micro stroke-tiny"
          d={`M${innerX + innerW * 0.55} ${innerY + innerH * 0.6}
              L${innerX + innerW * 0.52} ${innerY + innerH * 0.58}
              L${innerX + innerW * 0.54} ${innerY + innerH * 0.56}
              L${innerX + innerW * 0.62} ${innerY + innerH * 0.58}
              M${innerX + innerW * 0.62} ${innerY + innerH * 0.58}
              L${innerX + innerW * 0.68} ${innerY + innerH * 0.56}
              L${innerX + innerW * 0.7} ${innerY + innerH * 0.58}
              L${innerX + innerW * 0.62} ${innerY + innerH * 0.6}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2"
        />

        {/* === VERRE À VIN === */}
        <path
          className="museum-element-detail stroke-short"
          d={`M${innerX + innerW * 0.88} ${innerY + innerH * 0.62}
              L${innerX + innerW * 0.88} ${innerY + innerH * 0.5}
              M${innerX + innerW * 0.85} ${innerY + innerH * 0.5}
              Q${innerX + innerW * 0.84} ${innerY + innerH * 0.42} ${innerX + innerW * 0.86} ${innerY + innerH * 0.36}
              Q${innerX + innerW * 0.88} ${innerY + innerH * 0.32} ${innerX + innerW * 0.9} ${innerY + innerH * 0.36}
              Q${innerX + innerW * 0.92} ${innerY + innerH * 0.42} ${innerX + innerW * 0.91} ${innerY + innerH * 0.5}
              M${innerX + innerW * 0.85} ${innerY + innerH * 0.62}
              L${innerX + innerW * 0.91} ${innerY + innerH * 0.62}`}
          fill="none" stroke="#d4af37" strokeWidth="0.3"
        />
        {/* Vin dans le verre */}
        <path
          className="museum-element-micro stroke-micro"
          d={`M${innerX + innerW * 0.855} ${innerY + innerH * 0.44}
              Q${innerX + innerW * 0.88} ${innerY + innerH * 0.42} ${innerX + innerW * 0.905} ${innerY + innerH * 0.44}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.6"
        />
      </g>
    ),
  };

  return paintings[type] || paintings.landscape;
};

// ========================================
// AMPHORE GRECQUE HYPER-DÉTAILLÉE
// ========================================
const GreekAmphora = ({ x, y, scale = 1, delay = 0, pattern = 'geometric' }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.8s' }}
    className="museum-decor-container"
  >
    {/* === CORPS PRINCIPAL AVEC DOUBLE CONTOUR === */}
    <path
      className="museum-element stroke-long"
      d="M25 182 Q3 172 3 140 Q-2 98 9 68 Q14 48 19 43 L19 33 Q14 30 14 26 Q14 22 19 20 L19 16 Q17 13 17 10 Q17 5 25 2 Q33 5 33 10 Q33 13 31 16 L31 20 Q36 22 36 26 Q36 30 31 33 L31 43 Q36 48 41 68 Q52 98 47 140 Q47 172 25 182 Z"
      fill="none" stroke="#d4af37" strokeWidth="1.2"
    />
    <path
      className="museum-element-secondary stroke-medium"
      d="M25 178 Q7 168 7 140 Q2 100 12 70 Q16 52 21 47 L21 37 Q17 35 17 30 Q17 27 21 25 L21 20 Q20 18 20 14 Q20 10 25 7 Q30 10 30 14 Q30 18 29 20 L29 25 Q33 27 33 30 Q33 35 29 37 L29 47 Q34 52 38 70 Q48 100 43 140 Q43 168 25 178 Z"
      fill="none" stroke="#d4af37" strokeWidth="0.6"
    />

    {/* === PIED ÉTAGÉ AVEC MOULURES === */}
    <path className="museum-element-secondary stroke-medium" d="M14 182 L14 186 L12 186 L12 190 L10 190 L10 194 L8 194 L8 198 L42 198 L42 194 L40 194 L40 190 L38 190 L38 186 L36 186 L36 182" fill="none" stroke="#d4af37" strokeWidth="0.9" />
    <ellipse className="museum-element-detail stroke-short" cx="25" cy="198" rx="20" ry="3.5" fill="none" stroke="#d4af37" strokeWidth="0.7" />
    <ellipse className="museum-element-micro stroke-tiny" cx="25" cy="194" rx="16" ry="2.5" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <ellipse className="museum-element-micro stroke-tiny" cx="25" cy="190" rx="14" ry="2" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    {/* Rayures sur le pied */}
    <path className="museum-element-micro stroke-micro" d="M12 186 L12 198 M16 184 L16 198 M20 183 L20 198 M25 182 L25 198 M30 183 L30 198 M34 184 L34 198 M38 186 L38 198" fill="none" stroke="#d4af37" strokeWidth="0.15" strokeOpacity="0.5" />

    {/* === ANSES VOLUPTUEUSES AVEC ATTACHES === */}
    <path className="museum-element-secondary stroke-medium" d="M9 68 Q-8 55 -12 78 Q-14 100 -8 115 Q-2 128 10 118" fill="none" stroke="#d4af37" strokeWidth="1" />
    <path className="museum-element-detail stroke-short" d="M11 70 Q-4 60 -8 80 Q-10 98 -5 112 Q0 122 10 114" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    {/* Attache supérieure gauche */}
    <path className="museum-element-micro stroke-tiny" d="M9 68 Q7 65 9 63 Q12 63 11 66 Q10 69 8 68" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    {/* Attache inférieure gauche avec palmette */}
    <path className="museum-element-micro stroke-tiny" d="M10 118 L8 120 L10 122 L12 120 L10 118 M10 115 L10 118 M8 116 L10 118 L12 116" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    <path className="museum-element-secondary stroke-medium" d="M41 68 Q58 55 62 78 Q64 100 58 115 Q52 128 40 118" fill="none" stroke="#d4af37" strokeWidth="1" />
    <path className="museum-element-detail stroke-short" d="M39 70 Q54 60 58 80 Q60 98 55 112 Q50 122 40 114" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    {/* Attaches droite */}
    <path className="museum-element-micro stroke-tiny" d="M41 68 Q43 65 41 63 Q38 63 39 66 Q40 69 42 68" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <path className="museum-element-micro stroke-tiny" d="M40 118 L42 120 L40 122 L38 120 L40 118 M40 115 L40 118 M42 116 L40 118 L38 116" fill="none" stroke="#d4af37" strokeWidth="0.25" />

    {/* === BANDES DÉCORATIVES MULTIPLES === */}
    <path className="museum-element-detail stroke-short" d="M7 73 Q25 70 43 73 M8 76 Q25 73 42 76" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-detail stroke-short" d="M4 98 Q25 93 46 98 M5 102 Q25 97 45 102" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-detail stroke-short" d="M6 128 Q25 123 44 128 M7 132 Q25 127 43 132" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <path className="museum-element-detail stroke-short" d="M11 155 Q25 150 39 155 M12 158 Q25 153 38 158" fill="none" stroke="#d4af37" strokeWidth="0.5" />

    {/* === MOTIFS GÉOMÉTRIQUES - MÉANDRE COMPLEXE === */}
    {pattern === 'geometric' && (
      <g style={{ '--draw-delay': `${delay + 0.8}s` }}>
        {/* Méandre zone haute */}
        {[...Array(5)].map((_, i) => (
          <path
            key={`meander-top-${i}`}
            className="museum-element-micro stroke-tiny"
            d={`M${8 + i * 7} 82 L${10 + i * 7} 82 L${10 + i * 7} 85 L${13 + i * 7} 85 L${13 + i * 7} 82 L${15 + i * 7} 82 L${15 + i * 7} 90 L${8 + i * 7} 90 L${8 + i * 7} 82`}
            fill="none" stroke="#d4af37" strokeWidth="0.35"
          />
        ))}
        {/* Losanges */}
        {[...Array(6)].map((_, i) => (
          <path
            key={`diamond-${i}`}
            className="museum-element-micro stroke-micro"
            d={`M${10 + i * 6} 110 L${13 + i * 6} 115 L${10 + i * 6} 120 L${7 + i * 6} 115 Z`}
            fill="none" stroke="#d4af37" strokeWidth="0.25"
          />
        ))}
        {/* Triangles imbriqués */}
        {[...Array(7)].map((_, i) => (
          <g key={`triangle-${i}`}>
            <path className="museum-element-micro stroke-micro" d={`M${9 + i * 5} 140 L${11.5 + i * 5} 145 L${6.5 + i * 5} 145 Z`} fill="none" stroke="#d4af37" strokeWidth="0.2" />
            <path className="museum-element-micro stroke-micro" d={`M${9 + i * 5} 148 L${11.5 + i * 5} 143 L${6.5 + i * 5} 143 Z`} fill="none" stroke="#d4af37" strokeWidth="0.2" />
          </g>
        ))}
        {/* Croix grecques */}
        {[...Array(4)].map((_, i) => (
          <path key={`cross-${i}`} className="museum-element-micro stroke-micro" d={`M${14 + i * 8} 163 L${14 + i * 8} 170 M${11 + i * 8} 166.5 L${17 + i * 8} 166.5`} fill="none" stroke="#d4af37" strokeWidth="0.2" />
        ))}
      </g>
    )}

    {/* === MOTIFS FIGURATIFS - SCÈNE MYTHOLOGIQUE === */}
    {pattern === 'figures' && (
      <g style={{ '--draw-delay': `${delay + 0.8}s` }}>
        {/* Guerrier avec bouclier et lance */}
        <path className="museum-element-detail stroke-short" d="M16 95 Q18 92 20 95 Q18 98 16 95" fill="none" stroke="#d4af37" strokeWidth="0.4" />
        <path className="museum-element-micro stroke-tiny" d="M18 98 L18 108 M16 108 L18 118 L17 128 M20 108 L18 118 L19 128 M14 105 L22 105 M18 100 L12 100 L12 110 L14 108 M22 102 L26 98 L26 130" fill="none" stroke="#d4af37" strokeWidth="0.3" />
        {/* Bouclier rond avec emblème */}
        <circle className="museum-element-micro stroke-micro" cx="12" cy="105" r="5" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        <path className="museum-element-micro stroke-micro" d="M10 103 L12 107 L14 103 M12 104 L12 106" fill="none" stroke="#d4af37" strokeWidth="0.15" />

        {/* Cheval stylisé */}
        <path className="museum-element-micro stroke-tiny" d="M30 100 Q34 98 36 100 L36 95 Q38 93 40 95 L40 100 Q42 98 42 102 L42 115 L40 115 L40 125 L38 125 L38 115 L36 115 L36 125 L34 125 L34 115 L32 115 L32 102 Q30 102 30 100" fill="none" stroke="#d4af37" strokeWidth="0.3" />
        {/* Crinière */}
        <path className="museum-element-micro stroke-micro" d="M36 95 Q34 92 36 90 Q38 92 36 95 M38 96 Q36 94 38 92 Q40 94 38 96" fill="none" stroke="#d4af37" strokeWidth="0.2" />

        {/* Amphore décorative (méta-référence) */}
        <path className="museum-element-micro stroke-tiny" d="M24 135 Q22 133 22 130 Q22 127 24 126 L24 124 Q23 123 24 122 L26 122 Q27 123 26 124 L26 126 Q28 127 28 130 Q28 133 26 135 Z M22 130 Q21 128 22 126 M28 130 Q29 128 28 126" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>
    )}

    {/* === PALMETTES ÉLABORÉES SUR LE COL === */}
    <path className="museum-element-detail stroke-short" d="M25 42 L25 28" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <path className="museum-element-micro stroke-tiny" d="M25 40 Q22 36 23 30 M25 40 Q28 36 27 30" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <path className="museum-element-micro stroke-tiny" d="M25 40 Q19 34 21 26 M25 40 Q31 34 29 26" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <path className="museum-element-micro stroke-micro" d="M25 40 Q16 32 19 24 M25 40 Q34 32 31 24" fill="none" stroke="#d4af37" strokeWidth="0.2" />
    {/* Cœur de palmette */}
    <ellipse className="museum-element-micro stroke-micro" cx="25" cy="38" rx="1.2" ry="1.8" fill="none" stroke="#d4af37" strokeWidth="0.2" />

    {/* === DÉTAILS DU COL ET LÈVRE === */}
    <ellipse className="museum-element-detail stroke-short" cx="25" cy="20" rx="8" ry="2.5" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <ellipse className="museum-element-micro stroke-tiny" cx="25" cy="17" rx="6" ry="1.8" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <ellipse className="museum-element-micro stroke-micro" cx="25" cy="5" rx="5" ry="1.5" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    {/* Décor sur la lèvre */}
    <path className="museum-element-micro stroke-micro" d="M20 5 L21 4 L22 5 L23 4 L24 5 L25 4 L26 5 L27 4 L28 5 L29 4 L30 5" fill="none" stroke="#d4af37" strokeWidth="0.15" />
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
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '3.2s' }}
      className="museum-decor-container"
    >
      {statues[type] || statues.venus}
    </g>
  );
};

// ========================================
// MÉANDRE GREC HYPER-DÉTAILLÉ (FRISE DÉCORATIVE)
// ========================================
const GreekMeander = ({ x, y, width = 200, delay = 0 }) => {
  const patternWidth = 16;
  const repeatCount = Math.floor(width / patternWidth);

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.2s' }}
    >
      {/* Bordures avec moulures */}
      <line className="museum-element stroke-medium" x1="-2" y1="-2" x2={width + 2} y2="-2" stroke="#d4af37" strokeWidth="0.8" />
      <line className="museum-element stroke-medium" x1="0" y1="0" x2={width} y2="0" stroke="#d4af37" strokeWidth="0.6" />
      <line className="museum-element stroke-medium" x1="0" y1="18" x2={width} y2="18" stroke="#d4af37" strokeWidth="0.6" />
      <line className="museum-element stroke-medium" x1="-2" y1="20" x2={width + 2} y2="20" stroke="#d4af37" strokeWidth="0.8" />

      {/* Motif méandre précis répété */}
      {[...Array(repeatCount)].map((_, i) => (
        <g key={i} style={{ '--draw-delay': `${delay + i * 0.08}s` }}>
          {/* Méandre principal - clé grecque */}
          <path
            className="museum-element-detail stroke-short"
            d={`M${i * patternWidth + 1} 2
                L${i * patternWidth + 1} 9
                L${i * patternWidth + 7} 9
                L${i * patternWidth + 7} 5
                L${i * patternWidth + 4} 5
                L${i * patternWidth + 4} 2
                M${i * patternWidth + 9} 16
                L${i * patternWidth + 9} 9
                L${i * patternWidth + 15} 9
                L${i * patternWidth + 15} 13
                L${i * patternWidth + 12} 13
                L${i * patternWidth + 12} 16`}
            fill="none" stroke="#d4af37" strokeWidth="0.5"
          />
          {/* Ligne de liaison */}
          <path
            className="museum-element-micro stroke-tiny"
            d={`M${i * patternWidth + 7} 9 L${i * patternWidth + 9} 9`}
            fill="none" stroke="#d4af37" strokeWidth="0.3"
          />
          {/* Points décoratifs aux angles */}
          <circle className="museum-element-micro stroke-micro" cx={i * patternWidth + 1} cy="2" r="0.4" fill="#d4af37" fillOpacity="0.5" />
          <circle className="museum-element-micro stroke-micro" cx={i * patternWidth + 15} cy="16" r="0.4" fill="#d4af37" fillOpacity="0.5" />
        </g>
      ))}

      {/* Palmettes aux extrémités */}
      <g transform="translate(-8, 9)">
        <path className="museum-element-micro stroke-tiny" d="M0 0 L4 -6 L4 6 L0 0 M2 -4 L2 4 M3 -2 L3 2" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>
      <g transform={`translate(${width + 8}, 9) scale(-1, 1)`}>
        <path className="museum-element-micro stroke-tiny" d="M0 0 L4 -6 L4 6 L0 0 M2 -4 L2 4 M3 -2 L3 2" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>
    </g>
  );
};

// ========================================
// COURONNE DE LAURIER
// ========================================
const LaurelWreath = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.6s' }}
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
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '2.6s' }}
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
// ROSACE DÉCORATIVE HYPER-DÉTAILLÉE
// ========================================
const DecorativeRosette = ({ x, y, scale = 1, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4s' }}
  >
    {/* Cercles concentriques multiples avec précision */}
    <circle className="museum-element stroke-medium" cx="30" cy="30" r="29" fill="none" stroke="#d4af37" strokeWidth="0.7" />
    <circle className="museum-element stroke-short" cx="30" cy="30" r="27.5" fill="none" stroke="#d4af37" strokeWidth="0.35" />
    <circle className="museum-element-secondary stroke-short" cx="30" cy="30" r="24" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <circle className="museum-element-secondary stroke-short" cx="30" cy="30" r="21" fill="none" stroke="#d4af37" strokeWidth="0.25" />
    <circle className="museum-element-detail stroke-short" cx="30" cy="30" r="18" fill="none" stroke="#d4af37" strokeWidth="0.2" />

    {/* Pétales principaux (16 pour plus de détail) */}
    {[...Array(16)].map((_, i) => {
      const angle = (i * 22.5 * Math.PI) / 180;
      const x1 = 30 + Math.cos(angle) * 6;
      const y1 = 30 + Math.sin(angle) * 6;
      const x2 = 30 + Math.cos(angle) * 23;
      const y2 = 30 + Math.sin(angle) * 23;
      const cx1 = 30 + Math.cos(angle + 0.2) * 14;
      const cy1 = 30 + Math.sin(angle + 0.2) * 14;
      const cx2 = 30 + Math.cos(angle - 0.2) * 14;
      const cy2 = 30 + Math.sin(angle - 0.2) * 14;

      return (
        <g key={i} style={{ '--draw-delay': `${delay + i * 0.06}s` }}>
          <path
            className="museum-element-detail stroke-short"
            d={`M${x1} ${y1} Q${cx1} ${cy1} ${x2} ${y2} Q${cx2} ${cy2} ${x1} ${y1}`}
            fill="none" stroke="#d4af37" strokeWidth="0.35"
          />
          {/* Nervure centrale du pétale */}
          <line
            className="museum-element-micro stroke-micro"
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#d4af37" strokeWidth="0.12" strokeOpacity="0.5"
          />
          {/* Nervures latérales */}
          <path
            className="museum-element-micro stroke-micro"
            d={`M${30 + Math.cos(angle) * 10} ${30 + Math.sin(angle) * 10} Q${30 + Math.cos(angle + 0.1) * 16} ${30 + Math.sin(angle + 0.1) * 16} ${30 + Math.cos(angle) * 20} ${30 + Math.sin(angle) * 20}`}
            fill="none" stroke="#d4af37" strokeWidth="0.08" strokeOpacity="0.4"
          />
        </g>
      );
    })}

    {/* Pétales secondaires (16 décalés) */}
    {[...Array(16)].map((_, i) => {
      const angle = ((i * 22.5 + 11.25) * Math.PI) / 180;
      const x1 = 30 + Math.cos(angle) * 9;
      const y1 = 30 + Math.sin(angle) * 9;
      const x2 = 30 + Math.cos(angle) * 17;
      const y2 = 30 + Math.sin(angle) * 17;
      const cx1 = 30 + Math.cos(angle + 0.12) * 13;
      const cy1 = 30 + Math.sin(angle + 0.12) * 13;
      const cx2 = 30 + Math.cos(angle - 0.12) * 13;
      const cy2 = 30 + Math.sin(angle - 0.12) * 13;

      return (
        <path
          key={`sec-${i}`}
          className="museum-element-micro stroke-tiny"
          d={`M${x1} ${y1} Q${cx1} ${cy1} ${x2} ${y2} Q${cx2} ${cy2} ${x1} ${y1}`}
          fill="none" stroke="#d4af37" strokeWidth="0.2"
          style={{ '--draw-delay': `${delay + 1.2 + i * 0.04}s` }}
        />
      );
    })}

    {/* Centre élaboré multi-couches */}
    <circle className="museum-element-detail stroke-short" cx="30" cy="30" r="5.5" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <circle className="museum-element-micro stroke-tiny" cx="30" cy="30" r="4" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <circle className="museum-element-micro stroke-micro" cx="30" cy="30" r="2.8" fill="none" stroke="#d4af37" strokeWidth="0.2" />
    <circle className="museum-element-micro stroke-micro" cx="30" cy="30" r="1.8" fill="none" stroke="#d4af37" strokeWidth="0.15" />
    <circle cx="30" cy="30" r="1" fill="#d4af37" fillOpacity="0.4" />

    {/* Étoile centrale */}
    {[...Array(8)].map((_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      return (
        <line
          key={`star-${i}`}
          className="museum-element-micro stroke-micro"
          x1={30 + Math.cos(angle) * 1.5}
          y1={30 + Math.sin(angle) * 1.5}
          x2={30 + Math.cos(angle) * 3.5}
          y2={30 + Math.sin(angle) * 3.5}
          stroke="#d4af37" strokeWidth="0.1" strokeOpacity="0.6"
        />
      );
    })}

    {/* Points décoratifs sur cercle externe */}
    {[...Array(32)].map((_, i) => {
      const angle = (i * 11.25 * Math.PI) / 180;
      const px = 30 + Math.cos(angle) * 26;
      const py = 30 + Math.sin(angle) * 26;
      return <circle key={`dot-${i}`} cx={px} cy={py} r="0.3" fill="#d4af37" fillOpacity="0.35" />;
    })}

    {/* Perles décoratives intermédiaires */}
    {[...Array(16)].map((_, i) => {
      const angle = (i * 22.5 * Math.PI) / 180;
      const px = 30 + Math.cos(angle) * 19.5;
      const py = 30 + Math.sin(angle) * 19.5;
      return <circle key={`pearl-${i}`} className="museum-element-micro stroke-micro" cx={px} cy={py} r="0.5" fill="none" stroke="#d4af37" strokeWidth="0.1" />;
    })}
  </g>
);

// ========================================
// FRISE D'OVES ET DARDS ULTRA-PRÉCISE
// ========================================
const OvesDardsFrieze = ({ x, y, width = 300, delay = 0 }) => {
  const oveCount = Math.floor(width / 18);

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4.5s' }}
    >
      {/* Lignes encadrant la frise */}
      <line className="museum-element stroke-long" x1="0" y1="0" x2={width} y2="0" stroke="#d4af37" strokeWidth="0.5" />
      <line className="museum-element stroke-long" x1="0" y1="20" x2={width} y2="20" stroke="#d4af37" strokeWidth="0.5" />
      <line className="museum-element-secondary stroke-medium" x1="0" y1="2" x2={width} y2="2" stroke="#d4af37" strokeWidth="0.25" />
      <line className="museum-element-secondary stroke-medium" x1="0" y1="18" x2={width} y2="18" stroke="#d4af37" strokeWidth="0.25" />

      {/* Oves (œufs) avec ombres et reflets */}
      {[...Array(oveCount)].map((_, i) => (
        <g key={`ove-${i}`} style={{ '--draw-delay': `${delay + 0.3 + i * 0.08}s` }}>
          {/* Ove principal */}
          <ellipse
            className="museum-element-detail stroke-short"
            cx={9 + i * 18} cy="10" rx="5" ry="7"
            fill="none" stroke="#d4af37" strokeWidth="0.35"
          />
          {/* Contour intérieur pour volume */}
          <ellipse
            className="museum-element-micro stroke-tiny"
            cx={9 + i * 18} cy="10" rx="3.5" ry="5"
            fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.6"
          />
          {/* Reflet lumineux */}
          <path
            className="museum-element-micro stroke-micro"
            d={`M${7 + i * 18} 7 Q${9 + i * 18} 5 ${11 + i * 18} 7`}
            fill="none" stroke="#d4af37" strokeWidth="0.12" strokeOpacity="0.5"
          />
          {/* Base de l'ove */}
          <path
            className="museum-element-micro stroke-micro"
            d={`M${5 + i * 18} 15 Q${9 + i * 18} 18 ${13 + i * 18} 15`}
            fill="none" stroke="#d4af37" strokeWidth="0.15"
          />
        </g>
      ))}

      {/* Dards (flèches) entre les oves */}
      {[...Array(oveCount - 1)].map((_, i) => (
        <g key={`dard-${i}`} style={{ '--draw-delay': `${delay + 0.5 + i * 0.08}s` }}>
          {/* Tige du dard */}
          <line
            className="museum-element-micro stroke-tiny"
            x1={18 + i * 18} y1="4" x2={18 + i * 18} y2="16"
            stroke="#d4af37" strokeWidth="0.2"
          />
          {/* Pointe lancéolée supérieure */}
          <path
            className="museum-element-micro stroke-micro"
            d={`M${16 + i * 18} 6 L${18 + i * 18} 3 L${20 + i * 18} 6`}
            fill="none" stroke="#d4af37" strokeWidth="0.15"
          />
          {/* Feuille du dard */}
          <path
            className="museum-element-micro stroke-micro"
            d={`M${18 + i * 18} 8 Q${16.5 + i * 18} 10 ${18 + i * 18} 12 Q${19.5 + i * 18} 10 ${18 + i * 18} 8`}
            fill="none" stroke="#d4af37" strokeWidth="0.12"
          />
        </g>
      ))}
    </g>
  );
};

// ========================================
// FRISE DE PALMETTES ULTRA-DÉTAILLÉE
// ========================================
const PalmetteFrieze = ({ x, y, width = 300, delay = 0 }) => {
  const palmetteCount = Math.floor(width / 35);

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '5s' }}
    >
      {/* Cadre de la frise */}
      <rect className="museum-element stroke-long" x="0" y="0" width={width} height="40" fill="none" stroke="#d4af37" strokeWidth="0.4" />
      <rect className="museum-element-secondary stroke-medium" x="2" y="2" width={width - 4} height="36" fill="none" stroke="#d4af37" strokeWidth="0.2" />

      {/* Palmettes */}
      {[...Array(palmetteCount)].map((_, i) => (
        <g key={`palmette-${i}`} transform={`translate(${17.5 + i * 35}, 35)`} style={{ '--draw-delay': `${delay + 0.4 + i * 0.12}s` }}>
          {/* Tige centrale */}
          <line className="museum-element-detail stroke-short" x1="0" y1="0" x2="0" y2="-28" stroke="#d4af37" strokeWidth="0.3" />

          {/* Feuilles de palmette symétriques - 7 de chaque côté */}
          {[...Array(7)].map((_, j) => {
            const spread = 3 + j * 3;
            const height = 8 + j * 2.5;
            return (
              <g key={`leaf-${j}`}>
                <path
                  className="museum-element-micro stroke-tiny"
                  d={`M0 -${4 + j * 3} Q${-spread} -${height + 8} ${-spread - 2} -${height + 18}`}
                  fill="none" stroke="#d4af37" strokeWidth="0.18"
                />
                <path
                  className="museum-element-micro stroke-tiny"
                  d={`M0 -${4 + j * 3} Q${spread} -${height + 8} ${spread + 2} -${height + 18}`}
                  fill="none" stroke="#d4af37" strokeWidth="0.18"
                />
              </g>
            );
          })}

          {/* Cœur de la palmette */}
          <ellipse className="museum-element-micro stroke-micro" cx="0" cy="-3" rx="2" ry="3" fill="none" stroke="#d4af37" strokeWidth="0.15" />

          {/* Volutes à la base */}
          <path className="museum-element-micro stroke-micro" d="M-4 0 Q-6 -2 -4 -4 Q-2 -4 -2 -2 Q-2 0 -4 0" fill="none" stroke="#d4af37" strokeWidth="0.12" />
          <path className="museum-element-micro stroke-micro" d="M4 0 Q6 -2 4 -4 Q2 -4 2 -2 Q2 0 4 0" fill="none" stroke="#d4af37" strokeWidth="0.12" />
        </g>
      ))}

      {/* Lotus entre les palmettes */}
      {[...Array(palmetteCount - 1)].map((_, i) => (
        <g key={`lotus-${i}`} transform={`translate(${35 + i * 35}, 35)`} style={{ '--draw-delay': `${delay + 0.6 + i * 0.1}s` }}>
          <path className="museum-element-micro stroke-tiny" d="M0 0 L0 -15" stroke="#d4af37" strokeWidth="0.15" />
          <path className="museum-element-micro stroke-micro" d="M0 -15 Q-3 -18 -2 -22 Q0 -20 0 -15 Q0 -20 2 -22 Q3 -18 0 -15" fill="none" stroke="#d4af37" strokeWidth="0.12" />
          <circle className="museum-element-micro stroke-micro" cx="0" cy="-18" r="1" fill="none" stroke="#d4af37" strokeWidth="0.1" />
        </g>
      ))}
    </g>
  );
};

// ========================================
// MÉDAILLON ORNÉ AVEC BUSTE
// ========================================
const OrnateMedallion = ({ x, y, scale = 1, delay = 0, type = 'profile' }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4.5s' }}
  >
    {/* Cercles concentriques du cadre */}
    <circle className="museum-element stroke-long" cx="40" cy="40" r="38" fill="none" stroke="#d4af37" strokeWidth="0.8" />
    <circle className="museum-element stroke-medium" cx="40" cy="40" r="36" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <circle className="museum-element-secondary stroke-medium" cx="40" cy="40" r="33" fill="none" stroke="#d4af37" strokeWidth="0.35" />
    <circle className="museum-element-secondary stroke-short" cx="40" cy="40" r="30" fill="none" stroke="#d4af37" strokeWidth="0.3" />

    {/* Couronne de laurier autour */}
    {[...Array(24)].map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const x1 = 40 + Math.cos(angle) * 32;
      const y1 = 40 + Math.sin(angle) * 32;
      const x2 = 40 + Math.cos(angle) * 36;
      const y2 = 40 + Math.sin(angle) * 36;
      const cx = 40 + Math.cos(angle + 0.15) * 34;
      const cy = 40 + Math.sin(angle + 0.15) * 34;

      return (
        <path
          key={`laurel-${i}`}
          className="museum-element-micro stroke-tiny"
          d={`M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`}
          fill="none" stroke="#d4af37" strokeWidth="0.15"
          style={{ '--draw-delay': `${delay + 0.5 + i * 0.03}s` }}
        />
      );
    })}

    {/* Profil classique */}
    {type === 'profile' && (
      <g style={{ '--draw-delay': `${delay + 1}s` }}>
        {/* Contour du profil */}
        <path
          className="museum-element-detail stroke-medium"
          d="M30 60 Q28 55 30 50 Q32 45 35 42 Q34 38 36 35 Q38 32 42 32 Q44 30 46 32 Q50 30 52 34 Q55 32 54 38 Q52 40 50 42 L48 50 Q50 55 48 60"
          fill="none" stroke="#d4af37" strokeWidth="0.4"
        />
        {/* Œil */}
        <path className="museum-element-micro stroke-tiny" d="M44 38 Q46 37 48 38 Q46 39 44 38" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        {/* Nez */}
        <path className="museum-element-micro stroke-tiny" d="M50 42 L48 46 Q46 47 47 48" fill="none" stroke="#d4af37" strokeWidth="0.18" />
        {/* Bouche */}
        <path className="museum-element-micro stroke-micro" d="M44 52 Q46 51 48 52" fill="none" stroke="#d4af37" strokeWidth="0.15" />
        {/* Chevelure */}
        <path className="museum-element-micro stroke-tiny" d="M36 35 Q34 30 38 26 Q44 22 50 26 Q54 28 52 34" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        <path className="museum-element-micro stroke-micro" d="M38 28 Q40 25 44 26 M46 25 Q48 24 50 26" fill="none" stroke="#d4af37" strokeWidth="0.12" />
      </g>
    )}

    {/* Perles décoratives sur le bord externe */}
    {[...Array(36)].map((_, i) => {
      const angle = (i * 10 * Math.PI) / 180;
      const px = 40 + Math.cos(angle) * 37.5;
      const py = 40 + Math.sin(angle) * 37.5;
      return <circle key={`bead-${i}`} cx={px} cy={py} r="0.4" fill="#d4af37" fillOpacity="0.3" />;
    })}

    {/* Nœud de ruban en bas */}
    <g style={{ '--draw-delay': `${delay + 1.5}s` }}>
      <path className="museum-element-micro stroke-tiny" d="M32 72 Q36 74 40 72 Q44 74 48 72" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      <path className="museum-element-micro stroke-micro" d="M36 74 Q34 78 32 82 M44 74 Q46 78 48 82" fill="none" stroke="#d4af37" strokeWidth="0.15" />
      <ellipse className="museum-element-micro stroke-micro" cx="40" cy="74" rx="3" ry="2" fill="none" stroke="#d4af37" strokeWidth="0.12" />
    </g>
  </g>
);

// ========================================
// CARTOUCHE ORNÉ AVEC VOLUTES
// ========================================
const OrnateCartouche = ({ x, y, width = 100, height = 60, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4s' }}
  >
    {/* Forme centrale du cartouche */}
    <path
      className="museum-element stroke-long"
      d={`M${width * 0.15} 0
          Q0 0 0 ${height * 0.3}
          Q0 ${height * 0.7} ${width * 0.15} ${height}
          L${width * 0.85} ${height}
          Q${width} ${height * 0.7} ${width} ${height * 0.3}
          Q${width} 0 ${width * 0.85} 0 Z`}
      fill="none" stroke="#d4af37" strokeWidth="0.6"
    />

    {/* Contour intérieur */}
    <path
      className="museum-element-secondary stroke-medium"
      d={`M${width * 0.18} 4
          Q6 4 6 ${height * 0.3}
          Q6 ${height * 0.7 - 2} ${width * 0.18} ${height - 4}
          L${width * 0.82} ${height - 4}
          Q${width - 6} ${height * 0.7 - 2} ${width - 6} ${height * 0.3}
          Q${width - 6} 4 ${width * 0.82} 4 Z`}
      fill="none" stroke="#d4af37" strokeWidth="0.35"
    />

    {/* Volutes supérieures */}
    <path
      className="museum-element-detail stroke-short"
      d={`M${width * 0.3} -8 Q${width * 0.2} -12 ${width * 0.15} -8 Q${width * 0.1} -4 ${width * 0.15} 0`}
      fill="none" stroke="#d4af37" strokeWidth="0.35"
    />
    <path
      className="museum-element-detail stroke-short"
      d={`M${width * 0.7} -8 Q${width * 0.8} -12 ${width * 0.85} -8 Q${width * 0.9} -4 ${width * 0.85} 0`}
      fill="none" stroke="#d4af37" strokeWidth="0.35"
    />

    {/* Coquille centrale supérieure */}
    <g transform={`translate(${width / 2}, -5)`}>
      <path className="museum-element-micro stroke-tiny" d="M-12 5 Q-8 8 0 5 Q8 8 12 5" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      <path className="museum-element-micro stroke-micro" d="M0 5 L-10 2 M0 5 L-6 1 M0 5 L-2 0 M0 5 L2 0 M0 5 L6 1 M0 5 L10 2" fill="none" stroke="#d4af37" strokeWidth="0.12" />
      <circle className="museum-element-micro stroke-micro" cx="0" cy="5" r="1.5" fill="none" stroke="#d4af37" strokeWidth="0.1" />
    </g>

    {/* Volutes inférieures */}
    <path
      className="museum-element-detail stroke-short"
      d={`M${width * 0.3} ${height + 8} Q${width * 0.2} ${height + 12} ${width * 0.15} ${height + 8} Q${width * 0.1} ${height + 4} ${width * 0.15} ${height}`}
      fill="none" stroke="#d4af37" strokeWidth="0.35"
    />
    <path
      className="museum-element-detail stroke-short"
      d={`M${width * 0.7} ${height + 8} Q${width * 0.8} ${height + 12} ${width * 0.85} ${height + 8} Q${width * 0.9} ${height + 4} ${width * 0.85} ${height}`}
      fill="none" stroke="#d4af37" strokeWidth="0.35"
    />

    {/* Guirlande inférieure */}
    <path
      className="museum-element-micro stroke-tiny"
      d={`M${width * 0.25} ${height + 6} Q${width * 0.35} ${height + 12} ${width * 0.5} ${height + 8} Q${width * 0.65} ${height + 12} ${width * 0.75} ${height + 6}`}
      fill="none" stroke="#d4af37" strokeWidth="0.2"
    />

    {/* Feuilles d'acanthe latérales */}
    <g style={{ '--draw-delay': `${delay + 0.8}s` }}>
      {/* Gauche */}
      <path className="museum-element-micro stroke-tiny" d={`M-8 ${height * 0.3} Q-14 ${height * 0.4} -10 ${height * 0.5} Q-16 ${height * 0.55} -12 ${height * 0.65}`} fill="none" stroke="#d4af37" strokeWidth="0.2" />
      <path className="museum-element-micro stroke-micro" d={`M-10 ${height * 0.35} L-6 ${height * 0.38} M-12 ${height * 0.5} L-8 ${height * 0.52}`} fill="none" stroke="#d4af37" strokeWidth="0.1" />
      {/* Droite */}
      <path className="museum-element-micro stroke-tiny" d={`M${width + 8} ${height * 0.3} Q${width + 14} ${height * 0.4} ${width + 10} ${height * 0.5} Q${width + 16} ${height * 0.55} ${width + 12} ${height * 0.65}`} fill="none" stroke="#d4af37" strokeWidth="0.2" />
      <path className="museum-element-micro stroke-micro" d={`M${width + 10} ${height * 0.35} L${width + 6} ${height * 0.38} M${width + 12} ${height * 0.5} L${width + 8} ${height * 0.52}`} fill="none" stroke="#d4af37" strokeWidth="0.1" />
    </g>
  </g>
);

// ========================================
// FILIGRANE DÉCORATIF
// ========================================
const Filigree = ({ x, y, width = 200, delay = 0 }) => (
  <g
    transform={`translate(${x}, ${y})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '5s' }}
  >
    {/* Ligne centrale */}
    <line className="museum-element stroke-long" x1="0" y1="15" x2={width} y2="15" stroke="#d4af37" strokeWidth="0.3" />

    {/* Volutes et arabesques */}
    {[...Array(Math.floor(width / 50))].map((_, i) => (
      <g key={`filigree-${i}`} transform={`translate(${25 + i * 50}, 15)`} style={{ '--draw-delay': `${delay + 0.3 + i * 0.15}s` }}>
        {/* Volute supérieure gauche */}
        <path className="museum-element-detail stroke-short" d="M0 0 Q-8 -5 -12 -12 Q-10 -18 -4 -16 Q2 -14 0 -8 Q-2 -4 0 0" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        {/* Volute supérieure droite */}
        <path className="museum-element-detail stroke-short" d="M0 0 Q8 -5 12 -12 Q10 -18 4 -16 Q-2 -14 0 -8 Q2 -4 0 0" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        {/* Volute inférieure gauche */}
        <path className="museum-element-detail stroke-short" d="M0 0 Q-8 5 -12 12 Q-10 18 -4 16 Q2 14 0 8 Q-2 4 0 0" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        {/* Volute inférieure droite */}
        <path className="museum-element-detail stroke-short" d="M0 0 Q8 5 12 12 Q10 18 4 16 Q-2 14 0 8 Q2 4 0 0" fill="none" stroke="#d4af37" strokeWidth="0.25" />

        {/* Petites feuilles */}
        <path className="museum-element-micro stroke-micro" d="M-6 -10 Q-8 -8 -6 -6 M6 -10 Q8 -8 6 -6 M-6 10 Q-8 8 -6 6 M6 10 Q8 8 6 6" fill="none" stroke="#d4af37" strokeWidth="0.12" />

        {/* Centre décoratif */}
        <circle className="museum-element-micro stroke-micro" cx="0" cy="0" r="2" fill="none" stroke="#d4af37" strokeWidth="0.15" />
        <circle cx="0" cy="0" r="0.8" fill="#d4af37" fillOpacity="0.3" />
      </g>
    ))}

    {/* Points de connexion */}
    {[...Array(Math.floor(width / 50) + 1)].map((_, i) => (
      <circle key={`dot-${i}`} cx={i * 50} cy="15" r="1" fill="#d4af37" fillOpacity="0.4" />
    ))}
  </g>
);

// ========================================
// RAIS-DE-CŒUR (BORDURE CLASSIQUE)
// ========================================
const RaisDeCoeur = ({ x, y, width = 200, delay = 0 }) => {
  const heartCount = Math.floor(width / 12);

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '4s' }}
    >
      {/* Lignes encadrantes */}
      <line className="museum-element stroke-medium" x1="0" y1="0" x2={width} y2="0" stroke="#d4af37" strokeWidth="0.3" />
      <line className="museum-element stroke-medium" x1="0" y1="14" x2={width} y2="14" stroke="#d4af37" strokeWidth="0.3" />

      {/* Cœurs (rais) */}
      {[...Array(heartCount)].map((_, i) => (
        <g key={`heart-${i}`} style={{ '--draw-delay': `${delay + 0.2 + i * 0.05}s` }}>
          <path
            className="museum-element-detail stroke-short"
            d={`M${6 + i * 12} 12
                Q${4 + i * 12} 8 ${6 + i * 12} 4
                Q${8 + i * 12} 2 ${6 + i * 12} 2
                Q${4 + i * 12} 2 ${6 + i * 12} 4
                Q${8 + i * 12} 8 ${6 + i * 12} 12`}
            fill="none" stroke="#d4af37" strokeWidth="0.25"
          />
          {/* Nervure centrale */}
          <line
            className="museum-element-micro stroke-micro"
            x1={6 + i * 12} y1="4" x2={6 + i * 12} y2="10"
            stroke="#d4af37" strokeWidth="0.1"
          />
        </g>
      ))}

      {/* Perles entre les cœurs */}
      {[...Array(heartCount - 1)].map((_, i) => (
        <circle
          key={`pearl-${i}`}
          className="museum-element-micro stroke-micro"
          cx={12 + i * 12} cy="7" r="1.2"
          fill="none" stroke="#d4af37" strokeWidth="0.12"
        />
      ))}
    </g>
  );
};

// ========================================
// COMPOSANT PRINCIPAL - ULTRA-DÉTAILLÉ
// ========================================
const CabinetBackground = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {/* Fond subtil */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(26, 39, 68, 0.25) 0%, rgba(10, 15, 26, 0.85) 100%)',
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
        <IonicColumn x={50} y={300} scale={1.2} delay={0.3} />
        <IonicColumn x={1820} y={300} scale={1.2} delay={0.6} mirror={true} />
        {/* Colonnes secondaires */}
        <IonicColumn x={180} y={380} scale={0.8} delay={0.9} />
        <IonicColumn x={1690} y={380} scale={0.8} delay={1.1} mirror={true} />

        {/* ===== FRISES DÉCORATIVES MULTIPLES ===== */}
        {/* Frises méandres - haut */}
        <GreekMeander x={200} y={60} width={450} delay={1.0} />
        <GreekMeander x={1270} y={60} width={450} delay={1.2} />
        {/* Frises méandres - bas */}
        <GreekMeander x={250} y={1000} width={550} delay={1.4} />
        <GreekMeander x={1120} y={1000} width={550} delay={1.6} />

        {/* ===== FRISES D'OVES ET DARDS ===== */}
        <OvesDardsFrieze x={660} y={45} width={280} delay={1.8} />
        <OvesDardsFrieze x={980} y={45} width={280} delay={2.0} />
        <OvesDardsFrieze x={800} y={1020} width={320} delay={2.2} />

        {/* ===== FRISES DE PALMETTES ===== */}
        <PalmetteFrieze x={300} y={95} width={350} delay={2.4} />
        <PalmetteFrieze x={1270} y={95} width={350} delay={2.6} />

        {/* ===== RAIS-DE-CŒUR ===== */}
        <RaisDeCoeur x={400} y={140} width={240} delay={2.8} />
        <RaisDeCoeur x={1280} y={140} width={240} delay={3.0} />
        <RaisDeCoeur x={700} y={950} width={520} delay={3.2} />

        {/* ===== FILIGRANE DÉCORATIF ===== */}
        <Filigree x={150} y={170} width={250} delay={3.4} />
        <Filigree x={1520} y={170} width={250} delay={3.6} />
        <Filigree x={500} y={920} width={300} delay={3.8} />
        <Filigree x={1120} y={920} width={300} delay={4.0} />

        {/* ===== CADRES/TABLEAUX 18ÈME SIÈCLE ===== */}
        {/* Grand tableau central - paysage */}
        <BaroqueFrame x={720} y={160} width={200} height={250} delay={4.2}>
          <PaintingContent width={200} height={250} type="landscape" />
        </BaroqueFrame>

        {/* Tableau portrait - côté gauche */}
        <BaroqueFrame x={300} y={200} width={150} height={190} delay={4.6}>
          <PaintingContent width={150} height={190} type="portrait" />
        </BaroqueFrame>

        {/* Tableau nature morte - côté droit */}
        <BaroqueFrame x={1470} y={200} width={150} height={190} delay={5.0}>
          <PaintingContent width={150} height={190} type="stillLife" />
        </BaroqueFrame>

        {/* Petits cadres décoratifs supplémentaires */}
        <BaroqueFrame x={1000} y={180} width={110} height={140} delay={5.4}>
          <PaintingContent width={110} height={140} type="portrait" />
        </BaroqueFrame>
        <BaroqueFrame x={1180} y={200} width={100} height={120} delay={5.8}>
          <PaintingContent width={100} height={120} type="landscape" />
        </BaroqueFrame>

        {/* ===== MÉDAILLONS ORNÉS ===== */}
        <OrnateMedallion x={550} y={350} scale={0.9} delay={6.0} type="profile" />
        <OrnateMedallion x={1290} y={350} scale={0.9} delay={6.3} type="profile" />
        <OrnateMedallion x={140} y={550} scale={0.7} delay={6.6} type="profile" />
        <OrnateMedallion x={1700} y={550} scale={0.7} delay={6.9} type="profile" />

        {/* ===== CARTOUCHES ORNÉS ===== */}
        <OrnateCartouche x={680} y={450} width={120} height={70} delay={7.2} />
        <OrnateCartouche x={1120} y={450} width={120} height={70} delay={7.5} />
        <OrnateCartouche x={860} y={850} width={200} height={80} delay={7.8} />

        {/* ===== AMPHORES GRECQUES ===== */}
        <GreekAmphora x={220} y={620} scale={1.0} delay={8.0} pattern="geometric" />
        <GreekAmphora x={1650} y={620} scale={1.0} delay={8.3} pattern="figures" />
        <GreekAmphora x={450} y={700} scale={0.7} delay={8.6} pattern="figures" />
        <GreekAmphora x={1420} y={700} scale={0.7} delay={8.9} pattern="geometric" />
        <GreekAmphora x={920} y={730} scale={0.65} delay={9.2} pattern="geometric" />

        {/* ===== STATUES GRECQUES ===== */}
        <GreekStatue x={380} y={500} scale={1.2} delay={9.5} type="venus" />
        <GreekStatue x={1480} y={520} scale={1.1} delay={9.8} type="bust" />
        <GreekStatue x={620} y={580} scale={0.8} delay={10.1} type="bust" />
        <GreekStatue x={1240} y={580} scale={0.8} delay={10.4} type="venus" />

        {/* ===== COURONNES DE LAURIER ===== */}
        <LaurelWreath x={600} y={50} scale={0.75} delay={10.7} />
        <LaurelWreath x={1240} y={50} scale={0.75} delay={10.9} />
        <LaurelWreath x={200} y={480} scale={0.5} delay={11.1} />
        <LaurelWreath x={1640} y={480} scale={0.5} delay={11.3} />

        {/* ===== CANDÉLABRES ===== */}
        <OrnateCandelabra x={500} y={680} scale={0.95} delay={11.5} />
        <OrnateCandelabra x={1370} y={680} scale={0.95} delay={11.8} />
        <OrnateCandelabra x={100} y={750} scale={0.7} delay={12.0} />
        <OrnateCandelabra x={1770} y={750} scale={0.7} delay={12.2} />

        {/* ===== ROSACES DÉCORATIVES ===== */}
        <DecorativeRosette x={100} y={180} scale={0.7} delay={12.4} />
        <DecorativeRosette x={1760} y={180} scale={0.7} delay={12.6} />
        <DecorativeRosette x={620} y={480} scale={0.55} delay={12.8} />
        <DecorativeRosette x={1220} y={480} scale={0.55} delay={13.0} />
        <DecorativeRosette x={350} y={850} scale={0.6} delay={13.2} />
        <DecorativeRosette x={1510} y={850} scale={0.6} delay={13.4} />
        <DecorativeRosette x={780} y={600} scale={0.4} delay={13.6} />
        <DecorativeRosette x={1080} y={600} scale={0.4} delay={13.8} />

        {/* ===== COLONNES DÉCORATIVES SUPPLÉMENTAIRES ===== */}
        <IonicColumn x={580} y={560} scale={0.45} delay={14.0} />
        <IonicColumn x={1290} y={560} scale={0.45} delay={14.2} />
        <IonicColumn x={750} y={620} scale={0.35} delay={14.4} />
        <IonicColumn x={1120} y={620} scale={0.35} delay={14.6} />

        {/* ===== LIGNES DÉCORATIVES FINES ===== */}
        <line className="museum-element stroke-medium" x1="200" y1="430" x2="500" y2="430" stroke="#d4af37" strokeWidth="0.35" strokeOpacity="0.35" style={{ '--draw-delay': '14.8s', '--draw-duration': '2s' }} />
        <line className="museum-element stroke-medium" x1="1420" y1="430" x2="1720" y2="430" stroke="#d4af37" strokeWidth="0.35" strokeOpacity="0.35" style={{ '--draw-delay': '15.0s', '--draw-duration': '2s' }} />
        <line className="museum-element stroke-medium" x1="300" y1="880" x2="600" y2="880" stroke="#d4af37" strokeWidth="0.35" strokeOpacity="0.35" style={{ '--draw-delay': '15.2s', '--draw-duration': '2s' }} />
        <line className="museum-element stroke-medium" x1="1320" y1="880" x2="1620" y2="880" stroke="#d4af37" strokeWidth="0.35" strokeOpacity="0.35" style={{ '--draw-delay': '15.4s', '--draw-duration': '2s' }} />

        {/* ===== DÉTAILS ARCHITECTURAUX FINS ===== */}
        {/* Arcs décoratifs */}
        <path className="museum-element-detail stroke-medium" d="M400 550 Q450 520 500 550" fill="none" stroke="#d4af37" strokeWidth="0.3" strokeOpacity="0.4" style={{ '--draw-delay': '15.6s', '--draw-duration': '2s' }} />
        <path className="museum-element-detail stroke-medium" d="M1420 550 Q1470 520 1520 550" fill="none" stroke="#d4af37" strokeWidth="0.3" strokeOpacity="0.4" style={{ '--draw-delay': '15.8s', '--draw-duration': '2s' }} />

        {/* Points décoratifs en diamant */}
        {[...Array(12)].map((_, i) => (
          <g key={`diamond-${i}`} style={{ '--draw-delay': `${16 + i * 0.1}s` }}>
            <path
              className="museum-element-micro stroke-tiny"
              d={`M${160 + i * 150} 520 L${165 + i * 150} 525 L${160 + i * 150} 530 L${155 + i * 150} 525 Z`}
              fill="none" stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.3"
            />
          </g>
        ))}
      </svg>

      {/* Particules dorées flottantes - plus nombreuses */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full animate-sparkle`}
            style={{
              left: `${3 + (i * 2.8) % 94}%`,
              top: `${5 + (i * 5.1) % 90}%`,
              width: 1.5 + (i % 3) * 0.5,
              height: 1.5 + (i % 3) * 0.5,
              backgroundColor: '#d4af37',
              opacity: 0.15 + (i % 5) * 0.08,
              animationDelay: `${i * 0.25}s`,
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
            linear-gradient(to bottom, rgba(10, 13, 26, 0.15) 0%, transparent 12%, transparent 88%, rgba(10, 13, 26, 0.25) 100%)
          `,
        }}
      />
    </div>
  );
};

export default CabinetBackground;
