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
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '0.6s' }}
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
// CADRE BAROQUE 18ÈME SIÈCLE HYPER-DÉTAILLÉ
// ========================================
const BaroqueFrame = ({ x, y, width = 120, height = 150, delay = 0, children }) => {
  const cornerSize = 28;
  const borderWidth = 16;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '0.5s' }}
      className="museum-decor-container"
    >
      {/* === CADRES MULTIPLES AVEC MOULURES === */}
      <rect className="museum-element stroke-long" x="-2" y="-2" width={width + 4} height={height + 4} fill="none" stroke="#d4af37" strokeWidth="1.8" />
      <rect className="museum-element stroke-medium" x="0" y="0" width={width} height={height} fill="none" stroke="#d4af37" strokeWidth="1.2" />
      <rect className="museum-element-secondary stroke-medium" x={borderWidth} y={borderWidth} width={width - borderWidth * 2} height={height - borderWidth * 2} fill="none" stroke="#d4af37" strokeWidth="0.9" />
      <rect className="museum-element-detail stroke-short" x={borderWidth / 2} y={borderWidth / 2} width={width - borderWidth} height={height - borderWidth} fill="none" stroke="#d4af37" strokeWidth="0.4" />
      {/* Moulure oves sur bordure */}
      <path className="museum-element-micro stroke-tiny" d={`M${borderWidth / 2 + 5} ${borderWidth / 4} Q${borderWidth / 2 + 10} ${borderWidth / 4 - 2} ${borderWidth / 2 + 15} ${borderWidth / 4} Q${borderWidth / 2 + 20} ${borderWidth / 4 + 2} ${borderWidth / 2 + 25} ${borderWidth / 4} Q${borderWidth / 2 + 30} ${borderWidth / 4 - 2} ${borderWidth / 2 + 35} ${borderWidth / 4}`} fill="none" stroke="#d4af37" strokeWidth="0.25" />

      {/* === COIN SUPÉRIEUR GAUCHE - ACANTHE ROCOCO COMPLEXE === */}
      <g transform="translate(0, 0)">
        {/* Structure principale du coin */}
        <path className="museum-element-detail stroke-medium" d={`M0 ${cornerSize} Q0 0 ${cornerSize} 0 Q${cornerSize - 6} ${cornerSize - 6} 0 ${cornerSize}`} fill="none" stroke="#d4af37" strokeWidth="0.9" />
        <path className="museum-element-detail stroke-short" d={`M4 ${cornerSize - 4} Q4 4 ${cornerSize - 4} 4 Q${cornerSize - 9} ${cornerSize - 9} 4 ${cornerSize - 4}`} fill="none" stroke="#d4af37" strokeWidth="0.6" />
        {/* Feuille d'acanthe gauche */}
        <path className="museum-element-micro stroke-tiny" d="M2 22 Q5 18 4 14 Q7 16 6 20 Q9 17 8 13 Q11 15 10 19 Q6 21 2 22" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-micro" d="M3 19 L4 15 M5 18 L6 14 M7 17 L8 14" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        {/* Feuille d'acanthe supérieure */}
        <path className="museum-element-micro stroke-tiny" d="M22 2 Q18 5 14 4 Q16 7 20 6 Q17 9 13 8 Q15 11 19 10 Q21 6 22 2" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-micro" d="M19 3 L15 4 M18 5 L14 6 M17 7 L14 8" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        {/* Volute centrale */}
        <path className="museum-element-detail stroke-short" d="M10 10 Q6 6 10 3 Q14 3 13 7 Q12 11 8 10 Q5 9 6 6 Q7 4 10 5" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        <circle className="museum-element-micro stroke-micro" cx="9" cy="6.5" r="1.5" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        {/* Fleuron */}
        <path className="museum-element-micro stroke-micro" d="M9 6.5 L7 4 M9 6.5 L11 4 M9 6.5 L9 3" fill="none" stroke="#d4af37" strokeWidth="0.2" />
      </g>

      {/* === COIN SUPÉRIEUR DROIT === */}
      <g transform={`translate(${width}, 0) scale(-1, 1)`}>
        <path className="museum-element-detail stroke-medium" d={`M0 ${cornerSize} Q0 0 ${cornerSize} 0 Q${cornerSize - 6} ${cornerSize - 6} 0 ${cornerSize}`} fill="none" stroke="#d4af37" strokeWidth="0.9" />
        <path className="museum-element-detail stroke-short" d={`M4 ${cornerSize - 4} Q4 4 ${cornerSize - 4} 4 Q${cornerSize - 9} ${cornerSize - 9} 4 ${cornerSize - 4}`} fill="none" stroke="#d4af37" strokeWidth="0.6" />
        <path className="museum-element-micro stroke-tiny" d="M2 22 Q5 18 4 14 Q7 16 6 20 Q9 17 8 13 Q11 15 10 19 Q6 21 2 22" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-micro stroke-tiny" d="M22 2 Q18 5 14 4 Q16 7 20 6 Q17 9 13 8 Q15 11 19 10 Q21 6 22 2" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-detail stroke-short" d="M10 10 Q6 6 10 3 Q14 3 13 7 Q12 11 8 10 Q5 9 6 6 Q7 4 10 5" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        <circle className="museum-element-micro stroke-micro" cx="9" cy="6.5" r="1.5" fill="none" stroke="#d4af37" strokeWidth="0.25" />
      </g>

      {/* === COINS INFÉRIEURS === */}
      <g transform={`translate(0, ${height}) scale(1, -1)`}>
        <path className="museum-element-detail stroke-medium" d={`M0 ${cornerSize} Q0 0 ${cornerSize} 0 Q${cornerSize - 6} ${cornerSize - 6} 0 ${cornerSize}`} fill="none" stroke="#d4af37" strokeWidth="0.9" />
        <path className="museum-element-micro stroke-tiny" d="M2 22 Q5 18 4 14 Q7 16 6 20 Q9 17 8 13 Q11 15 10 19 Q6 21 2 22" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-detail stroke-short" d="M10 10 Q6 6 10 3 Q14 3 13 7 Q12 11 8 10" fill="none" stroke="#d4af37" strokeWidth="0.5" />
      </g>
      <g transform={`translate(${width}, ${height}) scale(-1, -1)`}>
        <path className="museum-element-detail stroke-medium" d={`M0 ${cornerSize} Q0 0 ${cornerSize} 0 Q${cornerSize - 6} ${cornerSize - 6} 0 ${cornerSize}`} fill="none" stroke="#d4af37" strokeWidth="0.9" />
        <path className="museum-element-micro stroke-tiny" d="M2 22 Q5 18 4 14 Q7 16 6 20 Q9 17 8 13 Q11 15 10 19 Q6 21 2 22" fill="none" stroke="#d4af37" strokeWidth="0.35" />
        <path className="museum-element-detail stroke-short" d="M10 10 Q6 6 10 3 Q14 3 13 7 Q12 11 8 10" fill="none" stroke="#d4af37" strokeWidth="0.5" />
      </g>

      {/* === CARTOUCHE SUPÉRIEUR AVEC FLEUR DE LYS === */}
      <g transform={`translate(${width / 2}, 0)`}>
        <path className="museum-element-secondary stroke-medium" d="M0 -12 Q-18 -12 -24 -2 Q-20 4 -14 2 Q-8 8 -4 4 Q0 10 4 4 Q8 8 14 2 Q20 4 24 -2 Q18 -12 0 -12" fill="none" stroke="#d4af37" strokeWidth="0.8" />
        <path className="museum-element-detail stroke-short" d="M0 -10 Q-12 -10 -16 -2 Q-12 2 -8 0 Q-4 4 0 2 Q4 4 8 0 Q12 2 16 -2 Q12 -10 0 -10" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        {/* Fleur de lys détaillée */}
        <path className="museum-element-micro stroke-tiny" d="M0 -1 L0 -7 M-1 -6 L0 -8 L1 -6 M-3 -5 Q-1 -7 0 -8 Q1 -7 3 -5 M-2 -4 Q0 -2 2 -4 M-4 -3 Q-2 -5 0 -6 Q2 -5 4 -3" fill="none" stroke="#d4af37" strokeWidth="0.3" />
        {/* Perles décoratives */}
        <circle className="museum-element-micro stroke-micro" cx="-10" cy="-2" r="0.8" fill="none" stroke="#d4af37" strokeWidth="0.2" />
        <circle className="museum-element-micro stroke-micro" cx="10" cy="-2" r="0.8" fill="none" stroke="#d4af37" strokeWidth="0.2" />
      </g>

      {/* === CARTOUCHE INFÉRIEUR AVEC COQUILLE === */}
      <g transform={`translate(${width / 2}, ${height})`}>
        <path className="museum-element-secondary stroke-medium" d="M0 12 Q-18 12 -24 2 Q-20 -4 -14 -2 Q-8 -8 -4 -4 Q0 -10 4 -4 Q8 -8 14 -2 Q20 -4 24 2 Q18 12 0 12" fill="none" stroke="#d4af37" strokeWidth="0.8" />
        {/* Coquille Saint-Jacques détaillée */}
        <path className="museum-element-detail stroke-short" d="M-10 5 Q-6 8 -3 5 Q0 8 3 5 Q6 8 10 5" fill="none" stroke="#d4af37" strokeWidth="0.4" />
        <path className="museum-element-micro stroke-tiny" d="M-8 6 L0 2 L8 6 M-6 6 L0 3 L6 6 M-4 6 L0 4 L4 6" fill="none" stroke="#d4af37" strokeWidth="0.25" />
        {/* Rayons de la coquille */}
        <path className="museum-element-micro stroke-micro" d="M0 2 L-9 7 M0 2 L-6 7 M0 2 L-3 7 M0 2 L0 7 M0 2 L3 7 M0 2 L6 7 M0 2 L9 7" fill="none" stroke="#d4af37" strokeWidth="0.15" />
      </g>

      {/* === GUIRLANDES LATÉRALES AVEC FEUILLES ET RUBANS === */}
      <path className="museum-element-detail stroke-short" d={`M-2 ${height * 0.25} Q-8 ${height * 0.3} -5 ${height * 0.38} Q-10 ${height * 0.45} -6 ${height * 0.52} Q-10 ${height * 0.6} -5 ${height * 0.68} Q-8 ${height * 0.72} -2 ${height * 0.75}`} fill="none" stroke="#d4af37" strokeWidth="0.5" />
      {/* Feuilles sur guirlande gauche */}
      <path className="museum-element-micro stroke-tiny" d={`M-5 ${height * 0.32} Q-8 ${height * 0.34} -6 ${height * 0.38} M-6 ${height * 0.48} Q-9 ${height * 0.5} -7 ${height * 0.54} M-5 ${height * 0.64} Q-8 ${height * 0.66} -6 ${height * 0.7}`} fill="none" stroke="#d4af37" strokeWidth="0.25" />

      <path className="museum-element-detail stroke-short" d={`M${width + 2} ${height * 0.25} Q${width + 8} ${height * 0.3} ${width + 5} ${height * 0.38} Q${width + 10} ${height * 0.45} ${width + 6} ${height * 0.52} Q${width + 10} ${height * 0.6} ${width + 5} ${height * 0.68} Q${width + 8} ${height * 0.72} ${width + 2} ${height * 0.75}`} fill="none" stroke="#d4af37" strokeWidth="0.5" />
      {/* Feuilles sur guirlande droite */}
      <path className="museum-element-micro stroke-tiny" d={`M${width + 5} ${height * 0.32} Q${width + 8} ${height * 0.34} ${width + 6} ${height * 0.38} M${width + 6} ${height * 0.48} Q${width + 9} ${height * 0.5} ${width + 7} ${height * 0.54} M${width + 5} ${height * 0.64} Q${width + 8} ${height * 0.66} ${width + 6} ${height * 0.7}`} fill="none" stroke="#d4af37" strokeWidth="0.25" />

      {/* Contenu du cadre */}
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
// AMPHORE GRECQUE HYPER-DÉTAILLÉE
// ========================================
const GreekAmphora = ({ x, y, scale = 1, delay = 0, pattern = 'geometric' }) => (
  <g
    transform={`translate(${x}, ${y}) scale(${scale})`}
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '0.5s' }}
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
      <g style={{ '--draw-delay': `${delay + 0.15}s` }}>
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
      <g style={{ '--draw-delay': `${delay + 0.15}s` }}>
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
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '0.6s' }}
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
      style={{ '--draw-delay': `${delay}s`, '--draw-duration': '0.4s' }}
    >
      {/* Bordures avec moulures */}
      <line className="museum-element stroke-medium" x1="-2" y1="-2" x2={width + 2} y2="-2" stroke="#d4af37" strokeWidth="0.8" />
      <line className="museum-element stroke-medium" x1="0" y1="0" x2={width} y2="0" stroke="#d4af37" strokeWidth="0.6" />
      <line className="museum-element stroke-medium" x1="0" y1="18" x2={width} y2="18" stroke="#d4af37" strokeWidth="0.6" />
      <line className="museum-element stroke-medium" x1="-2" y1="20" x2={width + 2} y2="20" stroke="#d4af37" strokeWidth="0.8" />

      {/* Motif méandre précis répété */}
      {[...Array(repeatCount)].map((_, i) => (
        <g key={i} style={{ '--draw-delay': `${delay + i * 0.02}s` }}>
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
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '0.5s' }}
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
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '0.5s' }}
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
    style={{ '--draw-delay': `${delay}s`, '--draw-duration': '0.4s' }}
  >
    {/* Cercles concentriques multiples */}
    <circle className="museum-element stroke-medium" cx="30" cy="30" r="29" fill="none" stroke="#d4af37" strokeWidth="0.9" />
    <circle className="museum-element stroke-short" cx="30" cy="30" r="27" fill="none" stroke="#d4af37" strokeWidth="0.5" />
    <circle className="museum-element-secondary stroke-short" cx="30" cy="30" r="24" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <circle className="museum-element-secondary stroke-short" cx="30" cy="30" r="21" fill="none" stroke="#d4af37" strokeWidth="0.35" />

    {/* Pétales principaux (12) */}
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 30 + Math.cos(angle) * 7;
      const y1 = 30 + Math.sin(angle) * 7;
      const x2 = 30 + Math.cos(angle) * 23;
      const y2 = 30 + Math.sin(angle) * 23;
      const cx1 = 30 + Math.cos(angle + 0.25) * 15;
      const cy1 = 30 + Math.sin(angle + 0.25) * 15;
      const cx2 = 30 + Math.cos(angle - 0.25) * 15;
      const cy2 = 30 + Math.sin(angle - 0.25) * 15;

      return (
        <g key={i} style={{ '--draw-delay': `${delay + i * 0.015}s` }}>
          <path
            className="museum-element-detail stroke-short"
            d={`M${x1} ${y1} Q${cx1} ${cy1} ${x2} ${y2} Q${cx2} ${cy2} ${x1} ${y1}`}
            fill="none" stroke="#d4af37" strokeWidth="0.5"
          />
          {/* Nervure centrale du pétale */}
          <line
            className="museum-element-micro stroke-micro"
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#d4af37" strokeWidth="0.2" strokeOpacity="0.6"
          />
        </g>
      );
    })}

    {/* Pétales secondaires (12 décalés) */}
    {[...Array(12)].map((_, i) => {
      const angle = ((i * 30 + 15) * Math.PI) / 180;
      const x1 = 30 + Math.cos(angle) * 10;
      const y1 = 30 + Math.sin(angle) * 10;
      const x2 = 30 + Math.cos(angle) * 19;
      const y2 = 30 + Math.sin(angle) * 19;
      const cx1 = 30 + Math.cos(angle + 0.15) * 14;
      const cy1 = 30 + Math.sin(angle + 0.15) * 14;
      const cx2 = 30 + Math.cos(angle - 0.15) * 14;
      const cy2 = 30 + Math.sin(angle - 0.15) * 14;

      return (
        <path
          key={`sec-${i}`}
          className="museum-element-micro stroke-tiny"
          d={`M${x1} ${y1} Q${cx1} ${cy1} ${x2} ${y2} Q${cx2} ${cy2} ${x1} ${y1}`}
          fill="none" stroke="#d4af37" strokeWidth="0.3"
          style={{ '--draw-delay': `${delay + 0.2 + i * 0.01}s` }}
        />
      );
    })}

    {/* Centre élaboré */}
    <circle className="museum-element-detail stroke-short" cx="30" cy="30" r="6" fill="none" stroke="#d4af37" strokeWidth="0.6" />
    <circle className="museum-element-micro stroke-tiny" cx="30" cy="30" r="4" fill="none" stroke="#d4af37" strokeWidth="0.4" />
    <circle className="museum-element-micro stroke-micro" cx="30" cy="30" r="2.5" fill="none" stroke="#d4af37" strokeWidth="0.3" />
    <circle cx="30" cy="30" r="1.5" fill="#d4af37" fillOpacity="0.5" />

    {/* Points décoratifs sur cercle externe */}
    {[...Array(24)].map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const px = 30 + Math.cos(angle) * 26;
      const py = 30 + Math.sin(angle) * 26;
      return <circle key={`dot-${i}`} cx={px} cy={py} r="0.4" fill="#d4af37" fillOpacity="0.4" />;
    })}
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
        <IonicColumn x={50} y={300} scale={1.2} delay={0.05} />
        {/* Colonne droite (miroir) */}
        <IonicColumn x={1820} y={300} scale={1.2} delay={0.1} mirror={true} />

        {/* ===== FRISES MÉANDRES ===== */}
        {/* Frise supérieure */}
        <GreekMeander x={200} y={80} width={400} delay={0.15} />
        <GreekMeander x={1320} y={80} width={400} delay={0.18} />
        {/* Frise inférieure */}
        <GreekMeander x={300} y={980} width={500} delay={0.2} />
        <GreekMeander x={1120} y={980} width={500} delay={0.22} />

        {/* ===== CADRES/TABLEAUX 18ÈME SIÈCLE ===== */}
        {/* Grand tableau central - paysage */}
        <BaroqueFrame x={700} y={120} width={180} height={220} delay={0.25}>
          <PaintingContent width={180} height={220} type="landscape" />
        </BaroqueFrame>

        {/* Tableau portrait - côté gauche */}
        <BaroqueFrame x={250} y={180} width={140} height={180} delay={0.3}>
          <PaintingContent width={140} height={180} type="portrait" />
        </BaroqueFrame>

        {/* Tableau nature morte - côté droit */}
        <BaroqueFrame x={1530} y={180} width={140} height={180} delay={0.32}>
          <PaintingContent width={140} height={180} type="stillLife" />
        </BaroqueFrame>

        {/* Petit cadre décoratif */}
        <BaroqueFrame x={1050} y={150} width={100} height={130} delay={0.35}>
          <PaintingContent width={100} height={130} type="portrait" />
        </BaroqueFrame>

        {/* ===== AMPHORES GRECQUES ===== */}
        {/* Amphore gauche avec motifs géométriques */}
        <GreekAmphora x={180} y={600} scale={1.1} delay={0.4} pattern="geometric" />
        {/* Amphore droite avec figures */}
        <GreekAmphora x={1680} y={620} scale={1} delay={0.42} pattern="figures" />
        {/* Petite amphore centrale */}
        <GreekAmphora x={920} y={720} scale={0.7} delay={0.45} pattern="geometric" />

        {/* ===== STATUES GRECQUES ===== */}
        {/* Vénus - grande statue gauche */}
        <GreekStatue x={350} y={480} scale={1.3} delay={0.48} type="venus" />
        {/* Buste romain - droite */}
        <GreekStatue x={1450} y={520} scale={1.2} delay={0.5} type="bust" />

        {/* ===== COURONNES DE LAURIER ===== */}
        <LaurelWreath x={580} y={60} scale={0.8} delay={0.52} />
        <LaurelWreath x={1260} y={60} scale={0.8} delay={0.54} />

        {/* ===== CANDÉLABRES ===== */}
        <OrnateCandelabra x={480} y={700} scale={1} delay={0.56} />
        <OrnateCandelabra x={1380} y={700} scale={1} delay={0.58} />

        {/* ===== ROSACES DÉCORATIVES ===== */}
        <DecorativeRosette x={100} y={150} scale={0.8} delay={0.6} />
        <DecorativeRosette x={1760} y={150} scale={0.8} delay={0.62} />
        <DecorativeRosette x={600} y={450} scale={0.6} delay={0.64} />
        <DecorativeRosette x={1250} y={450} scale={0.6} delay={0.66} />

        {/* ===== ÉLÉMENTS DÉCORATIFS SUPPLÉMENTAIRES ===== */}
        {/* Petites colonnes décoratives */}
        <IonicColumn x={550} y={550} scale={0.5} delay={0.68} />
        <IonicColumn x={1320} y={550} scale={0.5} delay={0.7} />

        {/* Lignes décoratives fines */}
        <line
          className="museum-element stroke-medium"
          x1="200"
          y1="450"
          x2="500"
          y2="450"
          stroke="#d4af37"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          style={{ '--draw-delay': '0.72s', '--draw-duration': '0.3s' }}
        />
        <line
          className="museum-element stroke-medium"
          x1="1420"
          y1="450"
          x2="1720"
          y2="450"
          stroke="#d4af37"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          style={{ '--draw-delay': '0.74s', '--draw-duration': '0.3s' }}
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
