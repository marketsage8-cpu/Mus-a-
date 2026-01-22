/**
 * CabinetBackground - Arrière-plan décoratif "Cabinet de curiosités"
 *
 * Design: Pattern répétitif style gravure de musée classique
 * - Tableaux encadrés avec cadres ornés dorés
 * - Bustes classiques sur piédestaux
 * - Statues romaines et grecques
 * - Vases et amphores antiques
 * - Petites sculptures décoratives
 *
 * Style: Lignes dorées fines sur fond bleu nuit profond
 * Technique: Gravure à l'eau-forte / Style musée
 */

const CabinetBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Fond bleu nuit profond */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#12152a' }}
      />

      {/* Pattern SVG répétitif style gravure musée */}
      <div className="absolute inset-0" style={{ opacity: 0.65 }}>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <defs>
            {/* Pattern principal - 1200x900 pour composition musée */}
            <pattern
              id="cabinetPattern"
              x="0"
              y="0"
              width="1200"
              height="900"
              patternUnits="userSpaceOnUse"
            >
              <style>
                {`
                  .stroke-main { fill: none; stroke: #b8956c; stroke-width: 1.1; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-med { fill: none; stroke: #a68960; stroke-width: 0.85; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-fine { fill: none; stroke: #9a7d55; stroke-width: 0.6; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-detail { fill: none; stroke: #8a7050; stroke-width: 0.45; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-hatch { fill: none; stroke: #7a6545; stroke-width: 0.3; stroke-linecap: round; }
                  .stroke-ultra { fill: none; stroke: #6a5a40; stroke-width: 0.25; stroke-linecap: round; }
                `}
              </style>

              {/* ═══════════════════════════════════════════════════════════
                  TABLEAU 1 - Portrait classique avec figure
                  Position haut gauche
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(20, 40)">
                {/* Cadre extérieur orné */}
                <rect className="stroke-main" x="0" y="0" width="120" height="150" rx="3"/>
                <rect className="stroke-med" x="5" y="5" width="110" height="140" rx="2"/>
                {/* Ornements du cadre - coins */}
                <path className="stroke-fine" d="M3,3 Q15,8 8,20"/>
                <path className="stroke-fine" d="M117,3 Q105,8 112,20"/>
                <path className="stroke-fine" d="M3,147 Q15,142 8,130"/>
                <path className="stroke-fine" d="M117,147 Q105,142 112,130"/>
                {/* Ornements latéraux */}
                <path className="stroke-detail" d="M2,60 Q8,75 2,90"/>
                <path className="stroke-detail" d="M118,60 Q112,75 118,90"/>
                {/* Cadre intérieur */}
                <rect className="stroke-med" x="12" y="12" width="96" height="126"/>
                {/* Contenu - figure classique debout */}
                <path className="stroke-fine" d="M60,30 Q55,35 60,42"/>
                <ellipse className="stroke-fine" cx="60" cy="50" rx="10" ry="12"/>
                <path className="stroke-detail" d="M50,62 Q45,85 48,110 L55,130"/>
                <path className="stroke-detail" d="M70,62 Q75,85 72,110 L65,130"/>
                <path className="stroke-hatch" d="M55,70 Q60,75 65,70"/>
                <path className="stroke-hatch" d="M52,90 Q60,95 68,90"/>
                {/* Bras */}
                <path className="stroke-detail" d="M50,65 Q35,70 30,85"/>
                <path className="stroke-detail" d="M70,65 Q78,72 82,65"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  PETIT TABLEAU - Scène pastorale
                  Position haut centre-gauche
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(165, 95)">
                <rect className="stroke-main" x="0" y="0" width="90" height="65" rx="2"/>
                <rect className="stroke-med" x="4" y="4" width="82" height="57" rx="1"/>
                <rect className="stroke-fine" x="8" y="8" width="74" height="49"/>
                {/* Scène - paysage avec figures */}
                <path className="stroke-detail" d="M15,45 Q30,35 50,42 Q70,38 75,48"/>
                <path className="stroke-hatch" d="M25,35 L25,45"/>
                <path className="stroke-hatch" d="M55,33 L55,42"/>
                <ellipse className="stroke-hatch" cx="25" cy="32" rx="4" ry="5"/>
                <ellipse className="stroke-hatch" cx="55" cy="30" rx="4" ry="5"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  TABLEAU LA CÈNE - Grande composition
                  Position haut centre
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(720, 25)">
                {/* Grand cadre orné */}
                <rect className="stroke-main" x="0" y="0" width="180" height="110" rx="3"/>
                <rect className="stroke-med" x="5" y="5" width="170" height="100" rx="2"/>
                {/* Ornements cadre */}
                <path className="stroke-fine" d="M3,3 Q12,10 8,22"/>
                <path className="stroke-fine" d="M177,3 Q168,10 172,22"/>
                <path className="stroke-fine" d="M3,107 Q12,100 8,88"/>
                <path className="stroke-fine" d="M177,107 Q168,100 172,88"/>
                <path className="stroke-detail" d="M90,2 Q95,8 90,15"/>
                <path className="stroke-detail" d="M90,108 Q85,102 90,95"/>
                <rect className="stroke-fine" x="12" y="12" width="156" height="86"/>
                {/* La Cène - table et figures */}
                <path className="stroke-med" d="M20,75 L160,75"/>
                <path className="stroke-fine" d="M25,78 L155,78"/>
                {/* Figures - silhouettes assises */}
                <path className="stroke-detail" d="M30,55 Q33,48 30,42"/>
                <ellipse className="stroke-hatch" cx="30" cy="38" rx="5" ry="6"/>
                <path className="stroke-detail" d="M50,55 Q53,48 50,42"/>
                <ellipse className="stroke-hatch" cx="50" cy="38" rx="5" ry="6"/>
                <path className="stroke-detail" d="M70,55 Q73,48 70,42"/>
                <ellipse className="stroke-hatch" cx="70" cy="38" rx="5" ry="6"/>
                {/* Figure centrale */}
                <path className="stroke-fine" d="M90,52 Q95,42 90,32"/>
                <ellipse className="stroke-detail" cx="90" cy="28" rx="7" ry="8"/>
                <path className="stroke-detail" d="M110,55 Q113,48 110,42"/>
                <ellipse className="stroke-hatch" cx="110" cy="38" rx="5" ry="6"/>
                <path className="stroke-detail" d="M130,55 Q133,48 130,42"/>
                <ellipse className="stroke-hatch" cx="130" cy="38" rx="5" ry="6"/>
                <path className="stroke-detail" d="M150,55 Q153,48 150,42"/>
                <ellipse className="stroke-hatch" cx="150" cy="38" rx="5" ry="6"/>
                {/* Éléments sur la table */}
                <ellipse className="stroke-ultra" cx="60" cy="68" rx="6" ry="3"/>
                <ellipse className="stroke-ultra" cx="90" cy="65" rx="8" ry="4"/>
                <ellipse className="stroke-ultra" cx="120" cy="68" rx="6" ry="3"/>
                {/* Fenêtres/arches en arrière-plan */}
                <path className="stroke-hatch" d="M40,20 Q50,15 60,20 L60,35 L40,35 Z"/>
                <path className="stroke-hatch" d="M80,18 Q90,12 100,18 L100,38 L80,38 Z"/>
                <path className="stroke-hatch" d="M120,20 Q130,15 140,20 L140,35 L120,35 Z"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  STATUE ROMAINE DEBOUT
                  Position haut droite
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(945, 15)">
                {/* Socle */}
                <rect className="stroke-main" x="15" y="185" width="60" height="12" rx="1"/>
                <path className="stroke-med" d="M20,185 L25,172 L65,172 L70,185"/>
                <rect className="stroke-fine" x="22" y="165" width="46" height="7"/>
                {/* Jambes avec drapé */}
                <path className="stroke-main" d="M35,165 Q32,140 35,110"/>
                <path className="stroke-main" d="M55,165 Q58,145 52,115"/>
                <path className="stroke-fine" d="M38,160 Q36,140 38,120"/>
                <path className="stroke-fine" d="M52,160 Q54,142 50,122"/>
                {/* Torse avec toge */}
                <path className="stroke-main" d="M35,110 Q28,95 32,75 Q35,60 45,55"/>
                <path className="stroke-main" d="M55,115 Q62,95 58,75 Q55,60 45,55"/>
                <path className="stroke-fine" d="M38,105 Q33,90 36,72"/>
                <path className="stroke-fine" d="M52,108 Q56,92 52,74"/>
                {/* Plis de la toge */}
                <path className="stroke-detail" d="M40,100 Q38,85 42,70"/>
                <path className="stroke-detail" d="M48,102 Q50,88 46,72"/>
                <path className="stroke-hatch" d="M35,130 Q40,125 45,130"/>
                <path className="stroke-hatch" d="M45,135 Q50,130 55,135"/>
                {/* Bras droit levé */}
                <path className="stroke-med" d="M32,75 Q22,65 18,45 Q15,30 20,20"/>
                <path className="stroke-fine" d="M35,72 Q28,62 24,48"/>
                {/* Main tenant objet */}
                <ellipse className="stroke-detail" cx="20" cy="18" rx="5" ry="6"/>
                {/* Bras gauche le long du corps */}
                <path className="stroke-med" d="M58,75 Q68,85 70,100"/>
                {/* Cou et tête */}
                <path className="stroke-main" d="M42,55 Q42,48 44,42"/>
                <path className="stroke-main" d="M48,55 Q48,48 46,42"/>
                <ellipse className="stroke-main" cx="45" cy="30" rx="12" ry="15"/>
                {/* Visage */}
                <path className="stroke-fine" d="M40,25 Q45,22 50,25"/>
                <ellipse className="stroke-detail" cx="41" cy="28" rx="2" ry="1.5"/>
                <ellipse className="stroke-detail" cx="49" cy="28" rx="2" ry="1.5"/>
                <path className="stroke-detail" d="M45,30 L44,36"/>
                <path className="stroke-hatch" d="M42,38 Q45,40 48,38"/>
                {/* Cheveux courts romains */}
                <path className="stroke-med" d="M33,28 Q30,20 35,14 Q42,8 45,8 Q48,8 55,14 Q60,20 57,28"/>
                <path className="stroke-detail" d="M36,24 Q34,18 38,14"/>
                <path className="stroke-detail" d="M54,24 Q56,18 52,14"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  BUSTE CLASSIQUE - Gauche milieu
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(30, 230)">
                {/* Piédestal court */}
                <rect className="stroke-main" x="10" y="100" width="60" height="10" rx="1"/>
                <path className="stroke-med" d="M15,100 L18,90 L62,90 L65,100"/>
                <rect className="stroke-fine" x="18" y="82" width="44" height="8"/>
                {/* Buste - épaules */}
                <path className="stroke-main" d="M18,82 Q12,70 18,55 Q25,42 40,40"/>
                <path className="stroke-main" d="M62,82 Q68,70 62,55 Q55,42 40,40"/>
                <path className="stroke-fine" d="M22,78 Q18,68 22,55"/>
                <path className="stroke-fine" d="M58,78 Q62,68 58,55"/>
                {/* Drapé */}
                <path className="stroke-detail" d="M25,75 Q22,65 26,55"/>
                <path className="stroke-detail" d="M32,75 Q30,68 33,58"/>
                <path className="stroke-detail" d="M48,75 Q50,68 47,58"/>
                <path className="stroke-detail" d="M55,75 Q58,65 54,55"/>
                {/* Cou */}
                <path className="stroke-main" d="M35,40 Q35,35 37,30"/>
                <path className="stroke-main" d="M45,40 Q45,35 43,30"/>
                {/* Tête */}
                <ellipse className="stroke-main" cx="40" cy="18" rx="14" ry="17"/>
                {/* Chevelure bouclée */}
                <path className="stroke-med" d="M26,15 Q22,8 28,2 Q35,-3 40,-3 Q45,-3 52,2 Q58,8 54,15"/>
                <path className="stroke-fine" d="M30,12 Q28,6 32,3"/>
                <path className="stroke-fine" d="M50,12 Q52,6 48,3"/>
                <path className="stroke-detail" d="M35,10 Q34,5 37,2"/>
                <path className="stroke-detail" d="M45,10 Q46,5 43,2"/>
                {/* Visage */}
                <path className="stroke-fine" d="M34,12 Q40,9 46,12"/>
                <ellipse className="stroke-detail" cx="35" cy="16" rx="3" ry="2"/>
                <ellipse className="stroke-detail" cx="45" cy="16" rx="3" ry="2"/>
                <path className="stroke-detail" d="M40,18 L39,26"/>
                <path className="stroke-fine" d="M36,28 Q40,31 44,28"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  TABLEAU MONA LISA - Cadre orné
                  Position centre gauche
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(130, 260)">
                {/* Cadre extérieur très orné */}
                <rect className="stroke-main" x="0" y="0" width="100" height="140" rx="4"/>
                <rect className="stroke-med" x="4" y="4" width="92" height="132" rx="3"/>
                {/* Ornements baroques du cadre */}
                <path className="stroke-fine" d="M2,2 Q10,12 5,25"/>
                <path className="stroke-fine" d="M98,2 Q90,12 95,25"/>
                <path className="stroke-fine" d="M2,138 Q10,128 5,115"/>
                <path className="stroke-fine" d="M98,138 Q90,128 95,115"/>
                {/* Volutes d'angle */}
                <path className="stroke-detail" d="M8,8 Q15,15 10,25 Q5,20 8,8"/>
                <path className="stroke-detail" d="M92,8 Q85,15 90,25 Q95,20 92,8"/>
                <path className="stroke-detail" d="M8,132 Q15,125 10,115 Q5,120 8,132"/>
                <path className="stroke-detail" d="M92,132 Q85,125 90,115 Q95,120 92,132"/>
                {/* Cadre intérieur */}
                <rect className="stroke-med" x="10" y="10" width="80" height="120"/>
                <rect className="stroke-fine" x="14" y="14" width="72" height="112"/>
                {/* Mona Lisa - figure assise */}
                <ellipse className="stroke-fine" cx="50" cy="45" rx="12" ry="15"/>
                <path className="stroke-detail" d="M38,60 Q30,75 32,100 Q35,115 50,120"/>
                <path className="stroke-detail" d="M62,60 Q70,75 68,100 Q65,115 50,120"/>
                {/* Mains croisées */}
                <path className="stroke-hatch" d="M40,85 Q50,88 60,85"/>
                <path className="stroke-hatch" d="M42,90 Q50,92 58,90"/>
                {/* Cheveux */}
                <path className="stroke-detail" d="M38,42 Q32,50 35,65"/>
                <path className="stroke-detail" d="M62,42 Q68,50 65,65"/>
                {/* Visage */}
                <path className="stroke-hatch" d="M45,40 Q50,38 55,40"/>
                <ellipse className="stroke-ultra" cx="46" cy="44" rx="2" ry="1.5"/>
                <ellipse className="stroke-ultra" cx="54" cy="44" rx="2" ry="1.5"/>
                <path className="stroke-ultra" d="M50,46 L49,52"/>
                <path className="stroke-hatch" d="M47,55 Q50,57 53,55"/>
                {/* Paysage en arrière-plan */}
                <path className="stroke-ultra" d="M18,75 Q30,65 40,70"/>
                <path className="stroke-ultra" d="M60,70 Q70,65 82,75"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  BUSTE SUR COLONNE - Centre
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(520, 200)">
                {/* Base de colonne */}
                <rect className="stroke-main" x="15" y="140" width="50" height="8" rx="1"/>
                <ellipse className="stroke-med" cx="40" cy="138" rx="22" ry="5"/>
                {/* Colonne courte */}
                <path className="stroke-main" d="M22,138 L24,105"/>
                <path className="stroke-main" d="M58,138 L56,105"/>
                <path className="stroke-fine" d="M28,135 L29,108"/>
                <path className="stroke-fine" d="M52,135 L51,108"/>
                <path className="stroke-detail" d="M40,135 L40,108"/>
                {/* Chapiteau */}
                <ellipse className="stroke-med" cx="40" cy="102" rx="18" ry="4"/>
                <path className="stroke-fine" d="M25,100 Q30,95 40,94 Q50,95 55,100"/>
                {/* Buste */}
                <path className="stroke-main" d="M25,98 Q18,85 24,70 Q32,58 40,55"/>
                <path className="stroke-main" d="M55,98 Q62,85 56,70 Q48,58 40,55"/>
                <path className="stroke-fine" d="M28,92 Q24,82 28,68"/>
                <path className="stroke-fine" d="M52,92 Q56,82 52,68"/>
                {/* Cou et tête */}
                <path className="stroke-main" d="M36,55 Q36,48 38,42"/>
                <path className="stroke-main" d="M44,55 Q44,48 42,42"/>
                <ellipse className="stroke-main" cx="40" cy="28" rx="14" ry="18"/>
                {/* Cheveux */}
                <path className="stroke-med" d="M26,25 Q22,15 28,6 Q36,-2 40,-2 Q44,-2 52,6 Q58,15 54,25"/>
                <path className="stroke-detail" d="M30,20 Q28,12 32,6"/>
                <path className="stroke-detail" d="M50,20 Q52,12 48,6"/>
                {/* Visage */}
                <ellipse className="stroke-detail" cx="35" cy="25" rx="3" ry="2"/>
                <ellipse className="stroke-detail" cx="45" cy="25" rx="3" ry="2"/>
                <path className="stroke-detail" d="M40,28 L39,35"/>
                <path className="stroke-fine" d="M36,38 Q40,41 44,38"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  TABLEAU PORTRAIT - Femme avec enfant
                  Position centre droite
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(640, 260)">
                {/* Cadre orné */}
                <rect className="stroke-main" x="0" y="0" width="95" height="120" rx="3"/>
                <rect className="stroke-med" x="4" y="4" width="87" height="112" rx="2"/>
                {/* Ornements cadre */}
                <path className="stroke-fine" d="M2,2 Q12,10 6,22"/>
                <path className="stroke-fine" d="M93,2 Q83,10 89,22"/>
                <path className="stroke-fine" d="M2,118 Q12,110 6,98"/>
                <path className="stroke-fine" d="M93,118 Q83,110 89,98"/>
                <rect className="stroke-fine" x="10" y="10" width="75" height="100"/>
                {/* Figure principale - mère */}
                <ellipse className="stroke-fine" cx="40" cy="35" rx="10" ry="12"/>
                <path className="stroke-detail" d="M30,47 Q25,60 28,85 L35,105"/>
                <path className="stroke-detail" d="M50,47 Q55,55 52,70"/>
                {/* Enfant */}
                <ellipse className="stroke-hatch" cx="60" cy="55" rx="8" ry="9"/>
                <path className="stroke-hatch" d="M52,64 Q55,75 58,90"/>
                <path className="stroke-hatch" d="M68,64 Q72,78 68,95"/>
                {/* Bras tenant l'enfant */}
                <path className="stroke-detail" d="M50,50 Q55,48 58,55"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  VASES ET URNES - Rangée du milieu
                  ═══════════════════════════════════════════════════════════ */}

              {/* Vase décoratif */}
              <g transform="translate(780, 280)">
                {/* Base */}
                <ellipse className="stroke-main" cx="35" cy="95" rx="18" ry="5"/>
                <path className="stroke-main" d="M17,95 L20,85 L50,85 L53,95"/>
                {/* Corps ovoïde */}
                <path className="stroke-main" d="M20,85 Q8,70 10,50 Q12,30 25,20 Q32,15 35,15 Q38,15 45,20 Q58,30 60,50 Q62,70 50,85"/>
                <path className="stroke-fine" d="M25,80 Q15,68 17,50 Q19,35 28,25"/>
                <path className="stroke-fine" d="M45,80 Q55,68 53,50 Q51,35 42,25"/>
                {/* Col */}
                <path className="stroke-main" d="M28,18 Q26,12 30,8 L40,8 Q44,12 42,18"/>
                <ellipse className="stroke-med" cx="35" cy="7" rx="7" ry="3"/>
                {/* Anses */}
                <path className="stroke-med" d="M10,50 Q-2,45 0,32 Q3,22 15,28"/>
                <path className="stroke-med" d="M60,50 Q72,45 70,32 Q67,22 55,28"/>
                {/* Décor - bande */}
                <path className="stroke-detail" d="M18,55 Q35,50 52,55"/>
                <path className="stroke-detail" d="M20,65 Q35,60 50,65"/>
              </g>

              {/* Urne haute */}
              <g transform="translate(870, 255)">
                {/* Socle */}
                <rect className="stroke-main" x="12" y="115" width="46" height="8" rx="1"/>
                <path className="stroke-med" d="M15,115 L18,108 L52,108 L55,115"/>
                {/* Base du vase */}
                <ellipse className="stroke-main" cx="35" cy="105" rx="15" ry="4"/>
                {/* Corps */}
                <path className="stroke-main" d="M20,105 Q10,90 12,65 Q14,40 25,28"/>
                <path className="stroke-main" d="M50,105 Q60,90 58,65 Q56,40 45,28"/>
                <path className="stroke-fine" d="M24,100 Q16,88 18,65 Q20,45 28,32"/>
                <path className="stroke-fine" d="M46,100 Q54,88 52,65 Q50,45 42,32"/>
                {/* Col long */}
                <path className="stroke-main" d="M28,28 L30,12 L40,12 L42,28"/>
                <ellipse className="stroke-main" cx="35" cy="10" rx="8" ry="4"/>
                <ellipse className="stroke-med" cx="35" cy="6" rx="5" ry="2"/>
                {/* Anses élégantes */}
                <path className="stroke-med" d="M12,60 Q0,55 2,40 Q5,28 18,35"/>
                <path className="stroke-med" d="M58,60 Q70,55 68,40 Q65,28 52,35"/>
                {/* Décor */}
                <path className="stroke-detail" d="M18,75 Q35,68 52,75"/>
                <circle className="stroke-hatch" cx="35" cy="55" r="8"/>
                <circle className="stroke-ultra" cx="35" cy="55" r="4"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  AMPHORE GRECQUE - Bas gauche
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(20, 500)">
                {/* Base */}
                <ellipse className="stroke-main" cx="45" cy="180" rx="22" ry="6"/>
                <path className="stroke-main" d="M23,180 L28,168 L62,168 L67,180"/>
                <ellipse className="stroke-med" cx="45" cy="168" rx="18" ry="5"/>
                {/* Pied évasé */}
                <path className="stroke-main" d="M28,168 Q22,158 28,148 L62,148 Q68,158 62,168"/>
                <path className="stroke-fine" d="M32,165 L58,165"/>
                <path className="stroke-fine" d="M30,155 L60,155"/>
                {/* Corps principal */}
                <path className="stroke-main" d="M28,148 Q10,120 12,85 Q14,50 30,28 Q40,15 45,12 Q50,15 60,28 Q76,50 78,85 Q80,120 62,148"/>
                <path className="stroke-fine" d="M34,142 Q18,118 20,85 Q22,55 35,35"/>
                <path className="stroke-fine" d="M56,142 Q72,118 70,85 Q68,55 55,35"/>
                {/* Col */}
                <path className="stroke-main" d="M38,15 Q35,8 40,3 L50,3 Q55,8 52,15"/>
                <ellipse className="stroke-main" cx="45" cy="2" rx="8" ry="3"/>
                {/* Anses avec volutes */}
                <path className="stroke-main" d="M12,85 Q-5,75 -2,50 Q2,30 20,35 Q30,40 34,55"/>
                <path className="stroke-med" d="M16,78 Q5,70 8,52 Q12,38 22,42"/>
                <path className="stroke-detail" d="M2,55 Q-5,52 0,42 Q8,35 14,48"/>
                <path className="stroke-main" d="M78,85 Q95,75 92,50 Q88,30 70,35 Q60,40 56,55"/>
                <path className="stroke-med" d="M74,78 Q85,70 82,52 Q78,38 68,42"/>
                <path className="stroke-detail" d="M88,55 Q95,52 90,42 Q82,35 76,48"/>
                {/* Frise avec méandres */}
                <path className="stroke-fine" d="M22,110 Q45,105 68,110"/>
                <path className="stroke-fine" d="M24,125 Q45,120 66,125"/>
                <path className="stroke-detail" d="M30,112 L30,122 L37,122 L37,115 L33,115 L33,112"/>
                <path className="stroke-detail" d="M42,112 L42,122 L49,122 L49,115 L45,115 L45,112"/>
                <path className="stroke-detail" d="M54,112 L54,122 L61,122 L61,115 L57,115 L57,112"/>
                {/* Figure centrale */}
                <ellipse className="stroke-detail" cx="45" cy="70" rx="8" ry="10"/>
                <path className="stroke-hatch" d="M45,80 L45,100"/>
                <path className="stroke-hatch" d="M37,88 L53,88"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  URN ÉLÉGANTE - Style Louis XVI
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(130, 540)">
                {/* Fleuron */}
                <path className="stroke-main" d="M40,0 Q35,8 40,15 Q45,8 40,0"/>
                <circle className="stroke-med" cx="40" cy="18" r="4"/>
                {/* Couvercle */}
                <path className="stroke-main" d="M22,32 Q18,25 28,20 Q34,18 40,18 Q46,18 52,20 Q62,25 58,32"/>
                <ellipse className="stroke-main" cx="40" cy="32" rx="20" ry="6"/>
                <path className="stroke-fine" d="M26,28 Q33,24 40,24 Q47,24 54,28"/>
                {/* Col */}
                <path className="stroke-main" d="M24,38 L26,52 L54,52 L56,38"/>
                <path className="stroke-fine" d="M30,45 L50,45"/>
                {/* Corps ovoïde */}
                <path className="stroke-main" d="M26,52 Q12,68 12,95 Q12,122 26,140 Q36,155 40,158 Q44,155 54,140 Q68,122 68,95 Q68,68 54,52"/>
                <path className="stroke-fine" d="M32,58 Q20,72 20,95 Q20,118 32,132"/>
                <path className="stroke-fine" d="M48,58 Q60,72 60,95 Q60,118 48,132"/>
                {/* Anses serpent */}
                <path className="stroke-med" d="M12,88 Q-2,82 0,68 Q4,58 16,62"/>
                <path className="stroke-med" d="M68,88 Q82,82 80,68 Q76,58 64,62"/>
                <circle className="stroke-detail" cx="16" cy="60" r="3"/>
                <circle className="stroke-detail" cx="64" cy="60" r="3"/>
                {/* Guirlande */}
                <path className="stroke-fine" d="M20,105 Q30,115 40,112 Q50,115 60,105"/>
                <path className="stroke-detail" d="M25,108 Q32,114 38,110"/>
                <path className="stroke-detail" d="M42,110 Q48,114 55,108"/>
                <circle className="stroke-hatch" cx="40" cy="115" r="3"/>
                {/* Base */}
                <ellipse className="stroke-main" cx="40" cy="158" rx="16" ry="5"/>
                <path className="stroke-main" d="M24,158 L20,172 L60,172 L56,158"/>
                <rect className="stroke-med" x="15" y="172" width="50" height="8" rx="1"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  LE PENSEUR - Petite sculpture
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(250, 625)">
                {/* Socle */}
                <rect className="stroke-main" x="5" y="65" width="50" height="8" rx="1"/>
                <path className="stroke-med" d="M8,65 L12,58 L48,58 L52,65"/>
                {/* Rocher/siège */}
                <path className="stroke-main" d="M12,58 Q8,50 15,42 Q25,35 35,38 Q45,35 48,45 L48,58"/>
                <path className="stroke-fine" d="M18,55 Q15,48 20,42"/>
                {/* Figure assise penchée */}
                <path className="stroke-main" d="M28,38 Q22,32 25,20"/>
                <path className="stroke-main" d="M38,38 Q40,30 35,22"/>
                {/* Tête penchée avec main */}
                <ellipse className="stroke-main" cx="30" cy="12" rx="8" ry="10"/>
                <path className="stroke-med" d="M25,20 Q18,22 15,18 Q12,12 18,8"/>
                <path className="stroke-fine" d="M22,18 Q18,20 16,16"/>
                {/* Bras appuyé sur genou */}
                <path className="stroke-med" d="M28,28 Q20,32 18,40 Q18,48 25,52"/>
                <path className="stroke-fine" d="M30,30 Q24,34 22,42"/>
                {/* Jambes */}
                <path className="stroke-med" d="M25,52 Q22,58 20,65"/>
                <path className="stroke-med" d="M35,50 Q40,56 42,65"/>
                <path className="stroke-fine" d="M28,55 L26,62"/>
                <path className="stroke-fine" d="M38,54 L40,62"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  PETIT VASE CRATÈRE
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(340, 640)">
                {/* Base */}
                <rect className="stroke-main" x="12" y="85" width="46" height="6" rx="1"/>
                <path className="stroke-med" d="M18,85 L22,78 L48,78 L52,85"/>
                <ellipse className="stroke-fine" cx="35" cy="78" rx="14" ry="4"/>
                {/* Corps évasé */}
                <path className="stroke-main" d="M22,78 Q15,65 15,48 Q15,32 25,22 Q32,15 35,14 Q38,15 45,22 Q55,32 55,48 Q55,65 48,78"/>
                <path className="stroke-fine" d="M26,74 Q20,62 20,48 Q20,35 28,26"/>
                <path className="stroke-fine" d="M44,74 Q50,62 50,48 Q50,35 42,26"/>
                {/* Lèvre évasée */}
                <path className="stroke-main" d="M25,18 Q22,12 25,8 L45,8 Q48,12 45,18"/>
                <ellipse className="stroke-main" cx="35" cy="7" rx="12" ry="4"/>
                <ellipse className="stroke-med" cx="35" cy="4" rx="8" ry="2"/>
                {/* Anses horizontales */}
                <path className="stroke-med" d="M15,45 Q5,42 5,32 Q8,22 18,28"/>
                <path className="stroke-med" d="M55,45 Q65,42 65,32 Q62,22 52,28"/>
                {/* Frise */}
                <path className="stroke-detail" d="M22,50 L48,50"/>
                <path className="stroke-detail" d="M24,58 L46,58"/>
                <path className="stroke-hatch" d="M28,52 L28,56"/>
                <path className="stroke-hatch" d="M35,52 L35,56"/>
                <path className="stroke-hatch" d="M42,52 L42,56"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  VÉNUS DE MILO - Statue classique
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(460, 460)">
                {/* Grand socle */}
                <rect className="stroke-main" x="10" y="220" width="70" height="12" rx="1"/>
                <path className="stroke-med" d="M15,220 L20,208 L70,208 L75,220"/>
                <rect className="stroke-fine" x="18" y="198" width="54" height="10"/>
                {/* Jambes avec drapé */}
                <path className="stroke-main" d="M30,198 Q25,170 28,140"/>
                <path className="stroke-main" d="M60,198 Q62,175 58,145"/>
                <path className="stroke-fine" d="M34,195 Q30,168 32,145"/>
                <path className="stroke-fine" d="M56,195 Q58,172 55,150"/>
                {/* Drapé enroulé */}
                <path className="stroke-med" d="M25,195 Q20,180 25,165 Q30,155 40,155"/>
                <path className="stroke-med" d="M65,195 Q70,178 65,162 Q58,152 50,155"/>
                <path className="stroke-detail" d="M28,188 Q24,175 28,162"/>
                <path className="stroke-detail" d="M35,185 Q32,172 35,160"/>
                <path className="stroke-detail" d="M55,185 Q58,172 55,160"/>
                <path className="stroke-detail" d="M62,188 Q66,175 62,162"/>
                {/* Torse nu */}
                <path className="stroke-main" d="M28,140 Q22,120 26,95 Q30,75 40,65"/>
                <path className="stroke-main" d="M58,145 Q65,125 60,100 Q55,80 45,68"/>
                <path className="stroke-fine" d="M32,135 Q28,118 30,98"/>
                <path className="stroke-fine" d="M55,140 Q60,120 56,100"/>
                {/* Lignes du torse */}
                <path className="stroke-detail" d="M38,130 Q35,115 38,100"/>
                <path className="stroke-detail" d="M50,132 Q52,118 50,102"/>
                <path className="stroke-hatch" d="M40,110 Q45,105 50,110"/>
                {/* Épaules sans bras */}
                <path className="stroke-med" d="M26,95 Q18,90 15,82"/>
                <path className="stroke-med" d="M60,100 Q68,95 72,88"/>
                {/* Cou */}
                <path className="stroke-main" d="M38,65 Q38,58 40,52"/>
                <path className="stroke-main" d="M48,68 Q48,60 46,52"/>
                {/* Tête */}
                <ellipse className="stroke-main" cx="43" cy="38" rx="14" ry="18"/>
                {/* Chevelure */}
                <path className="stroke-med" d="M29,35 Q24,25 30,15 Q38,5 43,5 Q48,5 56,15 Q62,25 57,35"/>
                <path className="stroke-fine" d="M32,32 Q28,24 33,16"/>
                <path className="stroke-fine" d="M54,32 Q58,24 53,16"/>
                <path className="stroke-detail" d="M38,28 Q36,20 40,14"/>
                <path className="stroke-detail" d="M48,28 Q50,20 46,14"/>
                {/* Chignon */}
                <path className="stroke-fine" d="M43,5 Q48,2 52,8"/>
                <path className="stroke-detail" d="M45,4 Q50,0 55,6"/>
                {/* Visage */}
                <ellipse className="stroke-detail" cx="38" cy="35" rx="3" ry="2"/>
                <ellipse className="stroke-detail" cx="48" cy="35" rx="3" ry="2"/>
                <path className="stroke-detail" d="M43,38 L42,46"/>
                <path className="stroke-fine" d="M40,50 Q43,53 46,50"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  URNE DÉCORATIVE - Droite bas
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(600, 540)">
                {/* Base carrée */}
                <rect className="stroke-main" x="10" y="130" width="60" height="10" rx="1"/>
                <path className="stroke-med" d="M15,130 L18,122 L62,122 L65,130"/>
                <ellipse className="stroke-fine" cx="40" cy="120" rx="20" ry="5"/>
                {/* Pied */}
                <path className="stroke-main" d="M20,120 Q15,112 22,105 Q32,98 40,98 Q48,98 58,105 Q65,112 60,120"/>
                <path className="stroke-fine" d="M25,115 Q22,110 28,105"/>
                <path className="stroke-fine" d="M55,115 Q58,110 52,105"/>
                {/* Corps balustre */}
                <path className="stroke-main" d="M28,98 Q18,85 18,65 Q18,45 30,32"/>
                <path className="stroke-main" d="M52,98 Q62,85 62,65 Q62,45 50,32"/>
                <path className="stroke-fine" d="M32,92 Q24,80 24,65 Q24,50 34,38"/>
                <path className="stroke-fine" d="M48,92 Q56,80 56,65 Q56,50 46,38"/>
                {/* Col */}
                <path className="stroke-main" d="M32,32 Q28,25 32,18 L48,18 Q52,25 48,32"/>
                <ellipse className="stroke-main" cx="40" cy="16" rx="10" ry="4"/>
                <ellipse className="stroke-med" cx="40" cy="12" rx="6" ry="2"/>
                {/* Décor central */}
                <ellipse className="stroke-fine" cx="40" cy="65" rx="12" ry="15"/>
                <ellipse className="stroke-detail" cx="40" cy="65" rx="8" ry="10"/>
                <path className="stroke-hatch" d="M36,60 Q40,55 44,60"/>
                <path className="stroke-hatch" d="M40,65 L40,75"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  VASE À PIED HAUT
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(720, 520)">
                {/* Base large */}
                <rect className="stroke-main" x="8" y="155" width="54" height="8" rx="1"/>
                <path className="stroke-med" d="M12,155 L15,148 L55,148 L58,155"/>
                {/* Pied haut */}
                <path className="stroke-main" d="M18,148 L22,115 L48,115 L52,148"/>
                <path className="stroke-fine" d="M25,145 L28,118"/>
                <path className="stroke-fine" d="M45,145 L42,118"/>
                <path className="stroke-detail" d="M35,145 L35,118"/>
                {/* Nœud */}
                <ellipse className="stroke-main" cx="35" cy="112" rx="12" ry="5"/>
                <path className="stroke-fine" d="M25,112 Q35,105 45,112"/>
                {/* Coupe */}
                <path className="stroke-main" d="M23,107 Q10,95 10,70 Q10,45 25,30"/>
                <path className="stroke-main" d="M47,107 Q60,95 60,70 Q60,45 45,30"/>
                <path className="stroke-fine" d="M28,102 Q17,92 17,70 Q17,50 28,38"/>
                <path className="stroke-fine" d="M42,102 Q53,92 53,70 Q53,50 42,38"/>
                {/* Lèvre */}
                <path className="stroke-main" d="M25,32 Q20,25 25,18 L45,18 Q50,25 45,32"/>
                <ellipse className="stroke-main" cx="35" cy="16" rx="12" ry="5"/>
                <ellipse className="stroke-med" cx="35" cy="12" rx="8" ry="3"/>
                {/* Décor */}
                <path className="stroke-detail" d="M18,65 Q35,58 52,65"/>
                <path className="stroke-detail" d="M20,80 Q35,75 50,80"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  AMPHORE ALLONGÉE - Extrême droite
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(850, 520)">
                {/* Base */}
                <ellipse className="stroke-main" cx="40" cy="150" rx="18" ry="5"/>
                <path className="stroke-main" d="M22,150 L25,140 L55,140 L58,150"/>
                {/* Pied */}
                <path className="stroke-main" d="M25,140 Q20,132 28,125 L52,125 Q60,132 55,140"/>
                <path className="stroke-fine" d="M30,138 L50,138"/>
                {/* Corps allongé */}
                <path className="stroke-main" d="M28,125 Q15,105 15,70 Q15,40 30,22"/>
                <path className="stroke-main" d="M52,125 Q65,105 65,70 Q65,40 50,22"/>
                <path className="stroke-fine" d="M32,120 Q22,102 22,70 Q22,45 34,28"/>
                <path className="stroke-fine" d="M48,120 Q58,102 58,70 Q58,45 46,28"/>
                {/* Col */}
                <path className="stroke-main" d="M32,22 L35,8 L45,8 L48,22"/>
                <ellipse className="stroke-main" cx="40" cy="6" rx="7" ry="3"/>
                {/* Anses */}
                <path className="stroke-med" d="M15,65 Q2,58 5,42 Q10,30 25,38"/>
                <path className="stroke-med" d="M65,65 Q78,58 75,42 Q70,30 55,38"/>
                <path className="stroke-detail" d="M8,52 Q2,48 6,40"/>
                <path className="stroke-detail" d="M72,52 Q78,48 74,40"/>
                {/* Décor */}
                <path className="stroke-detail" d="M22,85 Q40,78 58,85"/>
                <path className="stroke-detail" d="M25,100 Q40,95 55,100"/>
                <circle className="stroke-hatch" cx="40" cy="60" r="8"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  PETITS ÉLÉMENTS DÉCORATIFS
                  ═══════════════════════════════════════════════════════════ */}

              {/* Petit vase simple */}
              <g transform="translate(280, 420)">
                <ellipse className="stroke-med" cx="25" cy="65" rx="12" ry="4"/>
                <path className="stroke-med" d="M13,65 L16,55 L34,55 L37,65"/>
                <path className="stroke-med" d="M16,55 Q8,42 10,28 Q13,15 25,12 Q37,15 40,28 Q42,42 34,55"/>
                <ellipse className="stroke-fine" cx="25" cy="10" rx="6" ry="3"/>
                <path className="stroke-detail" d="M18,50 Q25,45 32,50"/>
                <path className="stroke-detail" d="M20,38 Q25,34 30,38"/>
              </g>

              {/* Petit buste */}
              <g transform="translate(380, 380)">
                <rect className="stroke-med" x="8" y="55" width="34" height="6" rx="1"/>
                <path className="stroke-med" d="M10,55 L14,48 L36,48 L40,55"/>
                <path className="stroke-med" d="M14,48 Q10,40 15,32 Q20,26 25,25"/>
                <path className="stroke-med" d="M36,48 Q40,40 35,32 Q30,26 25,25"/>
                <ellipse className="stroke-med" cx="25" cy="15" rx="10" ry="12"/>
                <path className="stroke-fine" d="M15,12 Q12,6 18,2 Q23,0 25,0 Q27,0 32,2 Q38,6 35,12"/>
                <ellipse className="stroke-detail" cx="22" cy="14" rx="2" ry="1.5"/>
                <ellipse className="stroke-detail" cx="28" cy="14" rx="2" ry="1.5"/>
                <path className="stroke-hatch" d="M23,22 Q25,24 27,22"/>
              </g>

              {/* Médaillon ovale */}
              <g transform="translate(1000, 440)">
                <ellipse className="stroke-main" cx="40" cy="45" rx="35" ry="42"/>
                <ellipse className="stroke-med" cx="40" cy="45" rx="30" ry="36"/>
                <ellipse className="stroke-fine" cx="40" cy="45" rx="25" ry="30"/>
                {/* Ruban */}
                <circle className="stroke-med" cx="40" cy="2" r="6"/>
                <path className="stroke-fine" d="M34,5 Q28,15 32,25"/>
                <path className="stroke-fine" d="M46,5 Q52,15 48,25"/>
                {/* Profil */}
                <path className="stroke-detail" d="M32,42 Q28,35 34,28 Q42,22 52,30 Q58,40 54,52 Q48,62 40,65 Q32,62 30,52"/>
                <path className="stroke-hatch" d="M38,30 Q48,26 52,35"/>
              </g>

              {/* Petite urne */}
              <g transform="translate(1050, 600)">
                <ellipse className="stroke-med" cx="30" cy="80" rx="15" ry="4"/>
                <path className="stroke-med" d="M15,80 L18,70 L42,70 L45,80"/>
                <path className="stroke-med" d="M18,70 Q10,55 12,38 Q15,22 30,18 Q45,22 48,38 Q50,55 42,70"/>
                <path className="stroke-fine" d="M22,65 Q16,52 18,38 Q20,28 30,24"/>
                <path className="stroke-fine" d="M38,65 Q44,52 42,38 Q40,28 30,24"/>
                <ellipse className="stroke-fine" cx="30" cy="16" rx="8" ry="3"/>
                <path className="stroke-main" d="M30,0 Q26,6 30,12 Q34,6 30,0"/>
                <circle className="stroke-detail" cx="30" cy="14" r="3"/>
                {/* Anses */}
                <path className="stroke-detail" d="M12,45 Q4,42 6,32 Q10,25 18,30"/>
                <path className="stroke-detail" d="M48,45 Q56,42 54,32 Q50,25 42,30"/>
              </g>

              {/* Couronne de laurier */}
              <g transform="translate(560, 170)">
                <path className="stroke-med" d="M20,50 Q8,38 12,22 Q18,8 35,5"/>
                <path className="stroke-med" d="M50,50 Q62,38 58,22 Q52,8 35,5"/>
                <path className="stroke-fine" d="M25,45 Q15,35 18,22"/>
                <path className="stroke-fine" d="M45,45 Q55,35 52,22"/>
                {/* Feuilles */}
                <path className="stroke-detail" d="M15,35 Q10,30 15,24 Q20,28 15,35"/>
                <path className="stroke-detail" d="M18,22 Q14,15 20,12 Q24,18 18,22"/>
                <path className="stroke-detail" d="M55,35 Q60,30 55,24 Q50,28 55,35"/>
                <path className="stroke-detail" d="M52,22 Q56,15 50,12 Q46,18 52,22"/>
                {/* Ruban */}
                <path className="stroke-fine" d="M30,50 Q35,58 30,65"/>
                <path className="stroke-fine" d="M40,50 Q35,58 40,65"/>
              </g>

              {/* Points décoratifs */}
              <circle className="stroke-detail" cx="320" cy="220" r="2"/>
              <circle className="stroke-hatch" cx="420" cy="180" r="1.5"/>
              <circle className="stroke-detail" cx="680" cy="200" r="2"/>
              <circle className="stroke-hatch" cx="920" cy="380" r="1.5"/>
              <circle className="stroke-detail" cx="180" cy="480" r="2"/>
              <circle className="stroke-hatch" cx="550" cy="420" r="1.5"/>
              <circle className="stroke-detail" cx="750" cy="450" r="2"/>
              <circle className="stroke-hatch" cx="980" cy="550" r="1.5"/>
              <circle className="stroke-detail" cx="100" cy="680" r="2"/>
              <circle className="stroke-hatch" cx="450" cy="780" r="1.5"/>
              <circle className="stroke-detail" cx="650" cy="720" r="2"/>
              <circle className="stroke-hatch" cx="820" cy="800" r="1.5"/>

              {/* Petites étoiles décoratives */}
              <g transform="translate(1100, 150)">
                <path className="stroke-detail" d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z"/>
              </g>
              <g transform="translate(300, 850)">
                <path className="stroke-hatch" d="M8,0 L9,6 L15,8 L9,10 L8,16 L7,10 L1,8 L7,6 Z"/>
              </g>

            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#cabinetPattern)" />
        </svg>
      </div>

      {/* Vignette gradient pour profondeur atmosphérique */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% 50%, transparent 0%, rgba(18, 21, 42, 0.3) 100%),
            linear-gradient(to bottom, rgba(18, 21, 42, 0.1) 0%, transparent 15%, transparent 85%, rgba(18, 21, 42, 0.2) 100%)
          `,
        }}
      />
    </div>
  );
};

export default CabinetBackground;
