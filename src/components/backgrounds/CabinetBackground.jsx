/**
 * CabinetBackground - Arrière-plan décoratif "Cabinet de curiosités"
 *
 * Design: Pattern répétitif style gravure classique du 18e-19e siècle
 * - Vases et urnes antiques élégants
 * - Amphores grecques avec motifs raffinés
 * - Statues classiques et figures ailées
 * - Bustes sur piédestaux
 * - Colonnes et éléments architecturaux
 *
 * Style: Lignes dorées délicates sur fond bleu nuit profond
 * Technique: Gravure à l'eau-forte / Taille-douce
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
        style={{ backgroundColor: '#0a0d1a' }}
      />

      {/* Pattern SVG répétitif style gravure */}
      <div className="absolute inset-0" style={{ opacity: 0.55 }}>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <defs>
            {/* Pattern principal - 900x900 pour plus de variété */}
            <pattern
              id="cabinetPattern"
              x="0"
              y="0"
              width="900"
              height="900"
              patternUnits="userSpaceOnUse"
            >
              <style>
                {`
                  .stroke-main { fill: none; stroke: #c9a227; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-med { fill: none; stroke: #d4af37; stroke-width: 0.9; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-fine { fill: none; stroke: #b8992c; stroke-width: 0.6; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-detail { fill: none; stroke: #a88a28; stroke-width: 0.45; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-hatch { fill: none; stroke: #8b7520; stroke-width: 0.3; stroke-linecap: round; }
                `}
              </style>

              {/* ═══════════════════════════════════════════════════════════
                  GRANDE AMPHORE ÉLÉGANTE - Position gauche haut
                  Style: Vase grec à volutes
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(50, 60)">
                {/* Base du vase */}
                <ellipse className="stroke-main" cx="60" cy="280" rx="35" ry="10"/>
                <path className="stroke-main" d="M25,280 L30,265 L90,265 L95,280"/>
                <ellipse className="stroke-med" cx="60" cy="265" rx="30" ry="7"/>

                {/* Pied évasé */}
                <path className="stroke-main" d="M30,265 Q25,250 35,235 L85,235 Q95,250 90,265"/>
                <path className="stroke-fine" d="M40,258 L80,258"/>
                <path className="stroke-fine" d="M38,248 L82,248"/>

                {/* Corps principal - forme élancée */}
                <path className="stroke-main" d="M35,235 Q15,200 18,150 Q20,100 35,65 Q50,35 60,30 Q70,35 85,65 Q100,100 102,150 Q105,200 85,235"/>

                {/* Lignes de contour internes */}
                <path className="stroke-fine" d="M40,230 Q22,198 25,150 Q27,105 40,72"/>
                <path className="stroke-fine" d="M80,230 Q98,198 95,150 Q93,105 80,72"/>

                {/* Col du vase */}
                <path className="stroke-main" d="M45,35 Q42,25 48,15 L72,15 Q78,25 75,35"/>
                <ellipse className="stroke-main" cx="60" cy="14" rx="14" ry="5"/>
                <ellipse className="stroke-med" cx="60" cy="10" rx="10" ry="3"/>

                {/* Anses élégantes avec volutes */}
                <path className="stroke-main" d="M18,150 Q-5,135 -2,100 Q0,70 25,75 Q35,78 40,90"/>
                <path className="stroke-med" d="M22,140 Q5,128 8,100 Q10,78 28,82"/>
                <path className="stroke-detail" d="M2,100 Q-8,98 -3,88 Q5,80 12,90"/>

                <path className="stroke-main" d="M102,150 Q125,135 122,100 Q120,70 95,75 Q85,78 80,90"/>
                <path className="stroke-med" d="M98,140 Q115,128 112,100 Q110,78 92,82"/>
                <path className="stroke-detail" d="M118,100 Q128,98 123,88 Q115,80 108,90"/>

                {/* Décoration - bande avec méandres */}
                <path className="stroke-fine" d="M28,180 Q60,175 92,180"/>
                <path className="stroke-fine" d="M30,195 Q60,190 90,195"/>
                <path className="stroke-detail" d="M35,183 L35,192 L42,192 L42,186 L38,186 L38,183"/>
                <path className="stroke-detail" d="M50,183 L50,192 L57,192 L57,186 L53,186 L53,183"/>
                <path className="stroke-detail" d="M65,183 L65,192 L72,192 L72,186 L68,186 L68,183"/>
                <path className="stroke-detail" d="M80,183 L80,192 L87,192 L87,186 L83,186 L83,183"/>

                {/* Scène centrale - silhouette de figure */}
                <path className="stroke-detail" d="M55,110 Q60,100 65,110"/>
                <ellipse className="stroke-detail" cx="60" cy="120" rx="8" ry="10"/>
                <path className="stroke-detail" d="M60,130 L60,160 M52,145 L68,145"/>
                <path className="stroke-hatch" d="M55,160 L50,175 M65,160 L70,175"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  STATUE CLASSIQUE AILÉE - Figure de la Victoire
                  Position centre-droite
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(680, 50)">
                {/* Socle rectangulaire orné */}
                <rect className="stroke-main" x="30" y="320" width="100" height="25" rx="2"/>
                <rect className="stroke-med" x="35" y="325" width="90" height="15" rx="1"/>
                <path className="stroke-fine" d="M45,332 L115,332"/>

                {/* Piédestal */}
                <path className="stroke-main" d="M40,320 L45,295 L115,295 L120,320"/>
                <path className="stroke-med" d="M50,318 L50,298"/>
                <path className="stroke-med" d="M110,318 L110,298"/>
                <rect className="stroke-fine" x="55" y="300" width="50" height="15"/>

                {/* Drapé/robe fluide */}
                <path className="stroke-main" d="M50,295 Q45,260 55,220 Q60,180 70,150"/>
                <path className="stroke-main" d="M110,295 Q115,260 105,220 Q100,180 90,150"/>

                {/* Plis du drapé */}
                <path className="stroke-fine" d="M55,290 Q52,250 60,210"/>
                <path className="stroke-fine" d="M65,290 Q60,255 65,220"/>
                <path className="stroke-fine" d="M95,290 Q98,255 95,220"/>
                <path className="stroke-fine" d="M105,290 Q108,250 100,210"/>
                <path className="stroke-detail" d="M58,270 Q55,250 60,230"/>
                <path className="stroke-detail" d="M102,270 Q105,250 100,230"/>

                {/* Torse */}
                <path className="stroke-main" d="M70,150 Q65,130 70,115 Q75,105 80,105 Q85,105 90,115 Q95,130 90,150"/>
                <path className="stroke-fine" d="M72,145 Q70,130 75,118"/>
                <path className="stroke-fine" d="M88,145 Q90,130 85,118"/>

                {/* Cou et tête */}
                <path className="stroke-main" d="M75,105 Q75,95 78,88"/>
                <path className="stroke-main" d="M85,105 Q85,95 82,88"/>
                <ellipse className="stroke-main" cx="80" cy="70" rx="18" ry="22"/>

                {/* Chevelure */}
                <path className="stroke-med" d="M62,65 Q55,50 62,35 Q70,22 80,20 Q90,22 98,35 Q105,50 98,65"/>
                <path className="stroke-fine" d="M65,60 Q60,48 65,38 Q72,28 80,26"/>
                <path className="stroke-fine" d="M95,60 Q100,48 95,38 Q88,28 80,26"/>
                <path className="stroke-detail" d="M68,55 Q65,45 70,38"/>
                <path className="stroke-detail" d="M92,55 Q95,45 90,38"/>

                {/* Traits du visage */}
                <path className="stroke-detail" d="M73,62 Q80,58 87,62"/>
                <ellipse className="stroke-detail" cx="74" cy="68" rx="3" ry="2"/>
                <ellipse className="stroke-detail" cx="86" cy="68" rx="3" ry="2"/>
                <path className="stroke-detail" d="M80,72 L79,80"/>
                <path className="stroke-fine" d="M75,85 Q80,88 85,85"/>

                {/* Ailes majestueuses */}
                <path className="stroke-main" d="M62,120 Q40,100 25,70 Q15,45 20,20 Q30,5 50,15 Q60,25 62,50"/>
                <path className="stroke-med" d="M58,110 Q42,92 30,65 Q22,42 28,25"/>
                <path className="stroke-fine" d="M55,100 Q45,85 35,60 Q28,40 35,28"/>
                <path className="stroke-detail" d="M52,90 Q45,78 40,55"/>
                <path className="stroke-detail" d="M48,80 Q42,70 38,50"/>
                {/* Plumes */}
                <path className="stroke-hatch" d="M25,50 Q30,45 28,38"/>
                <path className="stroke-hatch" d="M30,58 Q35,52 32,45"/>
                <path className="stroke-hatch" d="M35,65 Q40,60 38,52"/>

                <path className="stroke-main" d="M98,120 Q120,100 135,70 Q145,45 140,20 Q130,5 110,15 Q100,25 98,50"/>
                <path className="stroke-med" d="M102,110 Q118,92 130,65 Q138,42 132,25"/>
                <path className="stroke-fine" d="M105,100 Q115,85 125,60 Q132,40 125,28"/>
                <path className="stroke-detail" d="M108,90 Q115,78 120,55"/>
                <path className="stroke-detail" d="M112,80 Q118,70 122,50"/>
                {/* Plumes */}
                <path className="stroke-hatch" d="M135,50 Q130,45 132,38"/>
                <path className="stroke-hatch" d="M130,58 Q125,52 128,45"/>
                <path className="stroke-hatch" d="M125,65 Q120,60 122,52"/>

                {/* Bras tenant une couronne */}
                <path className="stroke-med" d="M95,130 Q110,125 125,115 Q135,108 140,95"/>
                <path className="stroke-fine" d="M92,125 Q105,120 118,112"/>
                {/* Couronne/laurier */}
                <circle className="stroke-med" cx="145" cy="88" r="12"/>
                <path className="stroke-detail" d="M138,82 Q145,75 152,82"/>
                <path className="stroke-detail" d="M138,94 Q145,100 152,94"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  URNE AVEC COUVERCLE - Style Louis XVI
                  Position centre-gauche
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(280, 120)">
                {/* Fleuron du couvercle */}
                <path className="stroke-main" d="M50,0 Q45,8 50,15 Q55,8 50,0"/>
                <circle className="stroke-med" cx="50" cy="18" r="5"/>

                {/* Couvercle bombé */}
                <path className="stroke-main" d="M28,35 Q25,25 35,20 Q42,18 50,18 Q58,18 65,20 Q75,25 72,35"/>
                <ellipse className="stroke-main" cx="50" cy="35" rx="25" ry="8"/>
                <path className="stroke-fine" d="M32,30 Q40,25 50,25 Q60,25 68,30"/>

                {/* Col étroit */}
                <path className="stroke-main" d="M30,43 L32,60 L68,60 L70,43"/>
                <path className="stroke-fine" d="M35,50 L65,50"/>

                {/* Corps ovoïde */}
                <path className="stroke-main" d="M32,60 Q15,80 15,115 Q15,150 32,175 Q45,195 50,200 Q55,195 68,175 Q85,150 85,115 Q85,80 68,60"/>
                <path className="stroke-fine" d="M38,65 Q22,82 22,115 Q22,145 38,168"/>
                <path className="stroke-fine" d="M62,65 Q78,82 78,115 Q78,145 62,168"/>

                {/* Anses serpent */}
                <path className="stroke-med" d="M15,100 Q0,95 2,80 Q5,68 18,72"/>
                <path className="stroke-med" d="M85,100 Q100,95 98,80 Q95,68 82,72"/>
                <path className="stroke-detail" d="M5,85 Q-2,82 2,75"/>
                <path className="stroke-detail" d="M95,85 Q102,82 98,75"/>
                {/* Têtes de serpent */}
                <circle className="stroke-detail" cx="18" cy="70" r="3"/>
                <circle className="stroke-detail" cx="82" cy="70" r="3"/>

                {/* Guirlande décorative */}
                <path className="stroke-fine" d="M25,130 Q38,140 50,138 Q62,140 75,130"/>
                <path className="stroke-detail" d="M30,132 Q35,138 42,136"/>
                <path className="stroke-detail" d="M58,136 Q65,138 70,132"/>
                <circle className="stroke-hatch" cx="50" cy="140" r="3"/>

                {/* Base/pied */}
                <ellipse className="stroke-main" cx="50" cy="200" rx="20" ry="6"/>
                <path className="stroke-main" d="M30,200 L25,215 L75,215 L70,200"/>
                <rect className="stroke-med" x="20" y="215" width="60" height="10" rx="1"/>
                <path className="stroke-fine" d="M28,220 L72,220"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  VASE CRATÈRE - Style grec
                  Position droite
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(500, 180)">
                {/* Base rectangulaire */}
                <rect className="stroke-main" x="25" y="210" width="70" height="12" rx="1"/>
                <path className="stroke-fine" d="M30,216 L90,216"/>

                {/* Pied */}
                <path className="stroke-main" d="M35,210 L40,195 L80,195 L85,210"/>
                <ellipse className="stroke-med" cx="60" cy="195" rx="22" ry="5"/>

                {/* Corps évasé vers le haut */}
                <path className="stroke-main" d="M40,195 Q30,170 28,140 Q26,110 35,80 Q45,55 60,50 Q75,55 85,80 Q94,110 92,140 Q90,170 80,195"/>

                {/* Profil intérieur */}
                <path className="stroke-fine" d="M45,190 Q36,165 35,138 Q34,112 42,85"/>
                <path className="stroke-fine" d="M75,190 Q84,165 85,138 Q86,112 78,85"/>

                {/* Lèvre évasée */}
                <path className="stroke-main" d="M35,55 Q30,48 32,40 L88,40 Q90,48 85,55"/>
                <ellipse className="stroke-main" cx="60" cy="38" rx="30" ry="8"/>
                <ellipse className="stroke-med" cx="60" cy="34" rx="24" ry="5"/>

                {/* Anses horizontales */}
                <path className="stroke-main" d="M28,100 Q15,95 12,80 Q15,65 28,70"/>
                <path className="stroke-main" d="M92,100 Q105,95 108,80 Q105,65 92,70"/>
                <path className="stroke-fine" d="M25,95 Q18,92 16,82"/>
                <path className="stroke-fine" d="M95,95 Q102,92 104,82"/>

                {/* Frise de palmettes */}
                <path className="stroke-fine" d="M35,125 L85,125 M35,145 L85,145"/>
                <path className="stroke-detail" d="M45,128 Q42,135 45,142"/>
                <path className="stroke-detail" d="M55,128 Q52,135 55,142"/>
                <path className="stroke-detail" d="M65,128 Q62,135 65,142"/>
                <path className="stroke-detail" d="M75,128 Q72,135 75,142"/>
                <path className="stroke-hatch" d="M48,130 L48,140"/>
                <path className="stroke-hatch" d="M60,130 L60,140"/>
                <path className="stroke-hatch" d="M72,130 L72,140"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  BUSTE SUR PIÉDESTAL - Style romain
                  Position bas gauche
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(40, 450)">
                {/* Grand piédestal */}
                <rect className="stroke-main" x="15" y="320" width="130" height="20" rx="2"/>
                <path className="stroke-med" d="M20,320 L25,305 L135,305 L140,320"/>
                <rect className="stroke-fine" x="30" y="290" width="100" height="15"/>
                <path className="stroke-detail" d="M40,298 L120,298"/>

                {/* Corps du piédestal */}
                <rect className="stroke-main" x="35" y="200" width="90" height="90"/>
                <rect className="stroke-med" x="40" y="205" width="80" height="80"/>

                {/* Cartouche central */}
                <ellipse className="stroke-fine" cx="80" cy="245" rx="30" ry="25"/>
                <ellipse className="stroke-detail" cx="80" cy="245" rx="22" ry="18"/>
                {/* Motif intérieur */}
                <path className="stroke-hatch" d="M70,238 Q80,230 90,238"/>
                <path className="stroke-hatch" d="M72,252 Q80,260 88,252"/>

                {/* Corniche supérieure */}
                <rect className="stroke-main" x="30" y="185" width="100" height="15"/>
                <path className="stroke-fine" d="M35,192 L125,192"/>

                {/* Buste */}
                <path className="stroke-main" d="M45,185 Q38,160 45,135 Q52,115 65,105"/>
                <path className="stroke-main" d="M115,185 Q122,160 115,135 Q108,115 95,105"/>

                {/* Drapé */}
                <path className="stroke-fine" d="M50,180 Q45,155 52,130"/>
                <path className="stroke-fine" d="M60,180 Q55,160 58,140"/>
                <path className="stroke-fine" d="M100,180 Q105,160 102,140"/>
                <path className="stroke-fine" d="M110,180 Q115,155 108,130"/>
                <path className="stroke-detail" d="M55,165 Q52,150 56,135"/>
                <path className="stroke-detail" d="M105,165 Q108,150 104,135"/>

                {/* Cou */}
                <path className="stroke-main" d="M65,105 Q65,95 70,88"/>
                <path className="stroke-main" d="M95,105 Q95,95 90,88"/>

                {/* Tête */}
                <ellipse className="stroke-main" cx="80" cy="65" rx="22" ry="28"/>

                {/* Chevelure romaine */}
                <path className="stroke-main" d="M58,55 Q50,40 58,25 Q68,12 80,10 Q92,12 102,25 Q110,40 102,55"/>
                <path className="stroke-med" d="M62,50 Q55,38 62,28 Q70,18 80,16"/>
                <path className="stroke-med" d="M98,50 Q105,38 98,28 Q90,18 80,16"/>
                {/* Mèches */}
                <path className="stroke-detail" d="M65,45 Q60,35 68,28"/>
                <path className="stroke-detail" d="M75,42 Q72,32 78,25"/>
                <path className="stroke-detail" d="M85,42 Q88,32 82,25"/>
                <path className="stroke-detail" d="M95,45 Q100,35 92,28"/>

                {/* Visage */}
                <path className="stroke-fine" d="M68,55 Q75,52 82,55"/>
                <path className="stroke-fine" d="M78,55 Q85,52 92,55"/>
                <ellipse className="stroke-detail" cx="72" cy="62" rx="4" ry="2.5"/>
                <ellipse className="stroke-detail" cx="88" cy="62" rx="4" ry="2.5"/>
                <path className="stroke-fine" d="M80,58 L78,75"/>
                <path className="stroke-fine" d="M74,82 Q80,86 86,82"/>

                {/* Oreilles */}
                <path className="stroke-detail" d="M58,62 Q54,68 58,75"/>
                <path className="stroke-detail" d="M102,62 Q106,68 102,75"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  PETITE AMPHORE ÉLÉGANTE
                  Position centre
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(420, 480)">
                {/* Base */}
                <ellipse className="stroke-main" cx="50" cy="200" rx="25" ry="7"/>
                <path className="stroke-main" d="M25,200 L30,188 L70,188 L75,200"/>

                {/* Corps */}
                <path className="stroke-main" d="M30,188 Q18,160 20,120 Q22,80 35,55 Q45,35 50,30 Q55,35 65,55 Q78,80 80,120 Q82,160 70,188"/>
                <path className="stroke-fine" d="M35,182 Q25,158 27,120 Q29,85 40,60"/>
                <path className="stroke-fine" d="M65,182 Q75,158 73,120 Q71,85 60,60"/>

                {/* Col */}
                <path className="stroke-main" d="M40,32 Q38,22 42,15 L58,15 Q62,22 60,32"/>
                <ellipse className="stroke-main" cx="50" cy="14" rx="10" ry="4"/>

                {/* Anses */}
                <path className="stroke-med" d="M20,105 Q5,95 8,70 Q12,50 28,58"/>
                <path className="stroke-med" d="M80,105 Q95,95 92,70 Q88,50 72,58"/>
                <path className="stroke-detail" d="M10,80 Q2,78 8,68"/>
                <path className="stroke-detail" d="M90,80 Q98,78 92,68"/>

                {/* Décor central */}
                <circle className="stroke-fine" cx="50" cy="120" r="20"/>
                <circle className="stroke-detail" cx="50" cy="120" r="12"/>
                {/* Figure centrale */}
                <path className="stroke-hatch" d="M45,115 Q50,108 55,115"/>
                <path className="stroke-hatch" d="M50,118 L50,130"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  VASE BALUSTRE - Style Renaissance
                  Position bas centre
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(580, 520)">
                {/* Socle */}
                <rect className="stroke-main" x="20" y="260" width="80" height="15" rx="1"/>
                <path className="stroke-fine" d="M25,268 L95,268"/>

                {/* Pied balustre */}
                <path className="stroke-main" d="M35,260 Q30,250 35,240 Q45,230 60,228 Q75,230 85,240 Q90,250 85,260"/>
                <ellipse className="stroke-med" cx="60" cy="228" rx="18" ry="5"/>

                {/* Tige */}
                <path className="stroke-main" d="M45,228 L48,200 L72,200 L75,228"/>
                <path className="stroke-fine" d="M52,225 L52,205"/>
                <path className="stroke-fine" d="M68,225 L68,205"/>

                {/* Noeud central */}
                <ellipse className="stroke-main" cx="60" cy="195" rx="15" ry="8"/>
                <path className="stroke-fine" d="M48,195 Q60,185 72,195"/>

                {/* Corps supérieur renflé */}
                <path className="stroke-main" d="M45,187 Q25,165 25,130 Q25,95 45,75"/>
                <path className="stroke-main" d="M75,187 Q95,165 95,130 Q95,95 75,75"/>
                <path className="stroke-fine" d="M50,182 Q32,162 32,130 Q32,100 50,82"/>
                <path className="stroke-fine" d="M70,182 Q88,162 88,130 Q88,100 70,82"/>

                {/* Col et lèvre */}
                <path className="stroke-main" d="M45,75 Q40,65 45,55 L75,55 Q80,65 75,75"/>
                <ellipse className="stroke-main" cx="60" cy="52" rx="18" ry="6"/>
                <ellipse className="stroke-med" cx="60" cy="48" rx="14" ry="4"/>

                {/* Anses latérales */}
                <path className="stroke-med" d="M25,130 Q10,125 8,110 Q10,95 25,100"/>
                <path className="stroke-med" d="M95,130 Q110,125 112,110 Q110,95 95,100"/>

                {/* Motif de guirlande */}
                <path className="stroke-detail" d="M35,140 Q48,150 60,148 Q72,150 85,140"/>
                <path className="stroke-hatch" d="M45,145 Q50,150 55,145"/>
                <path className="stroke-hatch" d="M65,145 Q70,150 75,145"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  COLONNE IONIQUE
                  Position droite
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(780, 320)">
                {/* Chapiteau ionique */}
                <rect className="stroke-main" x="15" y="0" width="70" height="10"/>
                <path className="stroke-med" d="M20,10 L25,25 L75,25 L80,10"/>

                {/* Volutes */}
                <path className="stroke-main" d="M18,25 Q5,30 5,45 Q5,60 20,58 Q30,55 30,45"/>
                <path className="stroke-main" d="M82,25 Q95,30 95,45 Q95,60 80,58 Q70,55 70,45"/>
                <circle className="stroke-med" cx="15" cy="45" r="6"/>
                <circle className="stroke-detail" cx="15" cy="45" r="3"/>
                <circle className="stroke-med" cx="85" cy="45" r="6"/>
                <circle className="stroke-detail" cx="85" cy="45" r="3"/>

                {/* Échine */}
                <ellipse className="stroke-fine" cx="50" cy="55" rx="25" ry="8"/>
                <path className="stroke-detail" d="M30,52 Q40,48 50,50 Q60,48 70,52"/>

                {/* Fût lisse */}
                <path className="stroke-main" d="M30,62 L32,280"/>
                <path className="stroke-main" d="M70,62 L68,280"/>
                <path className="stroke-fine" d="M38,65 L40,278"/>
                <path className="stroke-fine" d="M62,65 L60,278"/>
                <path className="stroke-detail" d="M50,65 L50,278"/>

                {/* Base attique */}
                <ellipse className="stroke-med" cx="50" cy="285" rx="25" ry="6"/>
                <path className="stroke-main" d="M25,290 Q20,295 25,300 L75,300 Q80,295 75,290"/>
                <rect className="stroke-main" x="15" y="300" width="70" height="10"/>
                <rect className="stroke-med" x="10" y="310" width="80" height="8" rx="1"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  PETITS ÉLÉMENTS DÉCORATIFS
                  ═══════════════════════════════════════════════════════════ */}

              {/* Petite urne décorative */}
              <g transform="translate(200, 420)">
                <ellipse className="stroke-med" cx="30" cy="80" rx="15" ry="4"/>
                <path className="stroke-med" d="M15,80 L18,70 L42,70 L45,80"/>
                <path className="stroke-med" d="M18,70 Q10,55 12,40 Q15,25 30,20 Q45,25 48,40 Q50,55 42,70"/>
                <ellipse className="stroke-fine" cx="30" cy="18" rx="8" ry="3"/>
                <path className="stroke-detail" d="M22,65 Q30,60 38,65"/>
                <path className="stroke-detail" d="M25,50 Q30,45 35,50"/>
              </g>

              {/* Couronne de laurier */}
              <g transform="translate(380, 50)">
                <path className="stroke-med" d="M25,60 Q10,45 15,25 Q22,10 40,5"/>
                <path className="stroke-med" d="M55,60 Q70,45 65,25 Q58,10 40,5"/>
                <path className="stroke-fine" d="M30,55 Q18,42 22,28"/>
                <path className="stroke-fine" d="M50,55 Q62,42 58,28"/>
                {/* Feuilles */}
                <path className="stroke-detail" d="M18,40 Q12,35 18,28 Q24,32 18,40"/>
                <path className="stroke-detail" d="M22,28 Q18,20 25,15 Q30,22 22,28"/>
                <path className="stroke-detail" d="M62,40 Q68,35 62,28 Q56,32 62,40"/>
                <path className="stroke-detail" d="M58,28 Q62,20 55,15 Q50,22 58,28"/>
                {/* Ruban */}
                <path className="stroke-fine" d="M35,60 Q40,68 35,75"/>
                <path className="stroke-fine" d="M45,60 Q40,68 45,75"/>
              </g>

              {/* Médaillon */}
              <g transform="translate(600, 420)">
                <ellipse className="stroke-main" cx="50" cy="55" rx="45" ry="50"/>
                <ellipse className="stroke-med" cx="50" cy="55" rx="38" ry="42"/>
                <ellipse className="stroke-fine" cx="50" cy="55" rx="32" ry="35"/>
                {/* Noeud supérieur */}
                <circle className="stroke-med" cx="50" cy="2" r="8"/>
                <path className="stroke-fine" d="M42,5 Q35,15 40,25"/>
                <path className="stroke-fine" d="M58,5 Q65,15 60,25"/>
                {/* Profil intérieur */}
                <path className="stroke-detail" d="M40,50 Q35,40 42,32 Q52,25 65,35 Q72,45 68,58 Q62,72 50,75 Q40,72 38,60"/>
                <path className="stroke-hatch" d="M45,35 Q55,30 62,38"/>
                <path className="stroke-hatch" d="M58,50 Q65,55 60,65"/>
              </g>

              {/* Palmette */}
              <g transform="translate(720, 700)">
                <path className="stroke-med" d="M30,50 Q20,40 25,25 Q30,12 35,25 Q40,12 45,25 Q50,40 40,50"/>
                <path className="stroke-fine" d="M32,45 Q25,38 28,28"/>
                <path className="stroke-fine" d="M38,45 Q45,38 42,28"/>
                <path className="stroke-detail" d="M35,42 L35,30"/>
                <ellipse className="stroke-detail" cx="35" cy="55" rx="10" ry="5"/>
              </g>

              {/* Rosette */}
              <g transform="translate(150, 700)">
                <circle className="stroke-med" cx="40" cy="40" r="18"/>
                <circle className="stroke-fine" cx="40" cy="40" r="12"/>
                <circle className="stroke-detail" cx="40" cy="40" r="6"/>
                {/* Pétales */}
                <path className="stroke-detail" d="M40,22 Q45,28 40,34 Q35,28 40,22"/>
                <path className="stroke-detail" d="M58,40 Q52,45 46,40 Q52,35 58,40"/>
                <path className="stroke-detail" d="M40,58 Q35,52 40,46 Q45,52 40,58"/>
                <path className="stroke-detail" d="M22,40 Q28,35 34,40 Q28,45 22,40"/>
              </g>

              {/* Coquille rocaille */}
              <g transform="translate(480, 780)">
                <path className="stroke-main" d="M20,35 Q15,25 22,15 Q30,5 40,10 Q50,5 58,15 Q65,25 60,35 Q40,45 20,35"/>
                <path className="stroke-med" d="M25,32 Q22,25 27,18 Q33,12 40,15 Q47,12 53,18 Q58,25 55,32"/>
                <path className="stroke-detail" d="M30,30 L35,18"/>
                <path className="stroke-detail" d="M40,32 L40,15"/>
                <path className="stroke-detail" d="M50,30 L45,18"/>
              </g>

              {/* Points décoratifs dispersés */}
              <circle className="stroke-detail" cx="350" cy="280" r="2"/>
              <circle className="stroke-hatch" cx="250" cy="380" r="1.5"/>
              <circle className="stroke-detail" cx="550" cy="350" r="2"/>
              <circle className="stroke-hatch" cx="650" cy="280" r="1.5"/>
              <circle className="stroke-detail" cx="180" cy="580" r="2"/>
              <circle className="stroke-hatch" cx="450" cy="650" r="1.5"/>
              <circle className="stroke-detail" cx="320" cy="750" r="2"/>
              <circle className="stroke-hatch" cx="820" cy="200" r="1.5"/>
              <circle className="stroke-detail" cx="100" cy="350" r="2"/>

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
            radial-gradient(ellipse 85% 65% at 50% 50%, transparent 0%, rgba(10, 13, 26, 0.35) 100%),
            linear-gradient(to bottom, rgba(10, 13, 26, 0.15) 0%, transparent 20%, transparent 80%, rgba(10, 13, 26, 0.25) 100%)
          `,
        }}
      />
    </div>
  );
};

export default CabinetBackground;
