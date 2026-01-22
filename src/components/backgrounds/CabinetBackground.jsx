/**
 * CabinetBackground - Arrière-plan décoratif "Cabinet de curiosités"
 *
 * Design: Pattern répétitif style gravure classique du 18e-19e siècle
 * - Cadres ornementés avec volutes et cartouches baroques
 * - Bustes antiques finement détaillés
 * - Amphores grecques avec motifs méandres
 * - Colonnes corinthiennes avec chapiteaux détaillés
 * - Médaillons avec portraits de profil
 * - Couronnes de laurier et palmettes
 * - Coquilles rocaille et arabesques
 *
 * Style: Lignes dorées sur fond bleu nuit profond
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
      <div className="absolute inset-0" style={{ opacity: 0.65 }}>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <defs>
            {/* Pattern principal - 600x600 pour plus de détail et variété */}
            <pattern
              id="cabinetPattern"
              x="0"
              y="0"
              width="600"
              height="600"
              patternUnits="userSpaceOnUse"
            >
              <style>
                {`
                  .stroke-main { fill: none; stroke: #c9a227; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-med { fill: none; stroke: #d4af37; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-fine { fill: none; stroke: #b8992c; stroke-width: 0.7; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-detail { fill: none; stroke: #a88a28; stroke-width: 0.5; stroke-linecap: round; stroke-linejoin: round; }
                  .stroke-hatch { fill: none; stroke: #8b7520; stroke-width: 0.35; stroke-linecap: round; }
                  .fill-accent { fill: #c9a227; stroke: none; opacity: 0.15; }
                `}
              </style>

              {/* ═══════════════════════════════════════════════════════════
                  CADRE BAROQUE ORNÉ - Position dominante haut-gauche
                  Style: Gravure française 18e siècle
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(20, 25)">
                {/* Cadre principal triple bordure */}
                <rect className="stroke-main" x="0" y="0" width="180" height="220" rx="3"/>
                <rect className="stroke-med" x="8" y="8" width="164" height="204" rx="2"/>
                <rect className="stroke-fine" x="14" y="14" width="152" height="192" rx="1"/>

                {/* Cartouche supérieur orné */}
                <path className="stroke-main" d="M40,-12 Q60,-25 90,-25 Q120,-25 140,-12"/>
                <path className="stroke-med" d="M50,-8 Q70,-18 90,-18 Q110,-18 130,-8"/>
                <path className="stroke-fine" d="M60,-5 Q75,-12 90,-12 Q105,-12 120,-5"/>
                {/* Coquille centrale */}
                <path className="stroke-med" d="M75,-22 Q80,-35 90,-38 Q100,-35 105,-22"/>
                <path className="stroke-detail" d="M80,-24 L90,-35 L100,-24"/>
                <path className="stroke-detail" d="M82,-22 L90,-30 L98,-22"/>
                <path className="stroke-detail" d="M84,-20 L90,-26 L96,-20"/>

                {/* Volutes d'angle supérieur */}
                <g transform="translate(-15, -15)">
                  <path className="stroke-med" d="M0,30 Q-10,20 -8,8 Q-5,-2 8,0 Q18,2 15,15 Q12,25 0,30"/>
                  <path className="stroke-fine" d="M5,22 Q-2,15 0,8 Q3,2 10,5"/>
                  <circle className="stroke-detail" cx="2" cy="10" r="3"/>
                </g>
                <g transform="translate(195, -15)">
                  <path className="stroke-med" d="M0,30 Q10,20 8,8 Q5,-2 -8,0 Q-18,2 -15,15 Q-12,25 0,30"/>
                  <path className="stroke-fine" d="M-5,22 Q2,15 0,8 Q-3,2 -10,5"/>
                  <circle className="stroke-detail" cx="-2" cy="10" r="3"/>
                </g>

                {/* Volutes d'angle inférieur */}
                <g transform="translate(-15, 235)">
                  <path className="stroke-med" d="M0,-10 Q-10,0 -8,12 Q-5,22 8,20 Q18,18 15,5 Q12,-5 0,-10"/>
                  <path className="stroke-fine" d="M5,-2 Q-2,5 0,12 Q3,18 10,15"/>
                </g>
                <g transform="translate(195, 235)">
                  <path className="stroke-med" d="M0,-10 Q10,0 8,12 Q5,22 -8,20 Q-18,18 -15,5 Q-12,-5 0,-10"/>
                  <path className="stroke-fine" d="M-5,-2 Q2,5 0,12 Q-3,18 -10,15"/>
                </g>

                {/* Frise latérale gauche */}
                <path className="stroke-detail" d="M-6,50 Q-12,70 -6,90 Q-12,110 -6,130 Q-12,150 -6,170"/>
                {/* Frise latérale droite */}
                <path className="stroke-detail" d="M186,50 Q192,70 186,90 Q192,110 186,130 Q192,150 186,170"/>

                {/* Guirlande inférieure */}
                <path className="stroke-med" d="M30,225 Q55,240 90,245 Q125,240 150,225"/>
                <path className="stroke-fine" d="M40,228 Q65,238 90,240 Q115,238 140,228"/>
                {/* Fruits/feuilles de la guirlande */}
                <circle className="stroke-detail" cx="60" cy="232" r="4"/>
                <circle className="stroke-detail" cx="90" cy="236" r="5"/>
                <circle className="stroke-detail" cx="120" cy="232" r="4"/>
                <path className="stroke-hatch" d="M70,230 Q75,238 80,232"/>
                <path className="stroke-hatch" d="M100,230 Q105,238 110,232"/>

                {/* Intérieur du cadre - paysage esquissé */}
                <rect className="fill-accent" x="22" y="22" width="136" height="176"/>
                {/* Horizon */}
                <path className="stroke-detail" d="M25,140 Q60,135 90,138 Q120,141 155,136"/>
                {/* Collines */}
                <path className="stroke-hatch" d="M25,140 Q45,120 65,130 Q85,118 105,128 Q125,115 155,125"/>
                {/* Arbre stylisé */}
                <path className="stroke-fine" d="M130,140 L130,90"/>
                <path className="stroke-detail" d="M120,95 Q130,75 140,95"/>
                <path className="stroke-detail" d="M118,105 Q130,80 142,105"/>
                <path className="stroke-detail" d="M115,115 Q130,88 145,115"/>
                {/* Ruine classique */}
                <path className="stroke-fine" d="M40,140 L40,110 L50,100 L60,110 L60,140"/>
                <path className="stroke-detail" d="M42,112 L42,118 M48,105 L48,115 M58,112 L58,120"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  AMPHORE GRECQUE - Style vase attique à figures rouges
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(350, 20)">
                {/* Base elliptique */}
                <ellipse className="stroke-main" cx="70" cy="240" rx="32" ry="8"/>
                <ellipse className="stroke-med" cx="70" cy="244" rx="28" ry="6"/>
                {/* Pied */}
                <path className="stroke-main" d="M38,240 L45,230 L95,230 L102,240"/>
                <path className="stroke-fine" d="M48,232 L92,232"/>

                {/* Corps du vase - courbe élégante */}
                <path className="stroke-main" d="M45,230 Q28,190 30,140 Q32,90 50,60 Q65,40 70,38 Q75,40 90,60 Q108,90 110,140 Q112,190 95,230"/>

                {/* Col et lèvre */}
                <path className="stroke-main" d="M58,38 Q55,28 58,18 L82,18 Q85,28 82,38"/>
                <ellipse className="stroke-main" cx="70" cy="16" rx="15" ry="5"/>
                <ellipse className="stroke-med" cx="70" cy="12" rx="12" ry="4"/>

                {/* Anses élégantes avec volutes */}
                <path className="stroke-main" d="M30,140 Q8,125 10,95 Q12,65 35,70 Q42,72 50,80"/>
                <path className="stroke-med" d="M35,130 Q18,118 20,95 Q22,75 38,78"/>
                <path className="stroke-detail" d="M15,95 Q8,95 12,85 Q18,78 25,85"/>

                <path className="stroke-main" d="M110,140 Q132,125 130,95 Q128,65 105,70 Q98,72 90,80"/>
                <path className="stroke-med" d="M105,130 Q122,118 120,95 Q118,75 102,78"/>
                <path className="stroke-detail" d="M125,95 Q132,95 128,85 Q122,78 115,85"/>

                {/* Bande décorative méandre (Greek key) */}
                <g transform="translate(35, 170)">
                  <path className="stroke-fine" d="M0,0 L70,0 M0,12 L70,12"/>
                  <path className="stroke-detail" d="M5,0 L5,8 L12,8 L12,4 L8,4 L8,0"/>
                  <path className="stroke-detail" d="M18,12 L18,4 L25,4 L25,8 L21,8 L21,12"/>
                  <path className="stroke-detail" d="M31,0 L31,8 L38,8 L38,4 L34,4 L34,0"/>
                  <path className="stroke-detail" d="M44,12 L44,4 L51,4 L51,8 L47,8 L47,12"/>
                  <path className="stroke-detail" d="M57,0 L57,8 L64,8 L64,4 L60,4 L60,0"/>
                </g>

                {/* Bande supérieure palmettes */}
                <path className="stroke-fine" d="M40,65 L100,65"/>
                <path className="stroke-fine" d="M42,85 L98,85"/>
                <g transform="translate(55, 68)">
                  <path className="stroke-detail" d="M15,0 Q10,8 15,15 M15,0 Q20,8 15,15"/>
                  <path className="stroke-detail" d="M15,2 L15,13"/>
                  <path className="stroke-hatch" d="M12,4 Q15,10 18,4"/>
                </g>

                {/* Figure centrale - silhouette guerrier */}
                <path className="stroke-fine" d="M60,100 Q65,95 70,100 Q75,95 80,100"/>
                <ellipse className="stroke-detail" cx="70" cy="105" rx="8" ry="6"/>
                <path className="stroke-detail" d="M70,111 L70,140 M62,120 L78,120 M65,140 L60,155 M75,140 L80,155"/>
                {/* Bouclier rond */}
                <circle className="stroke-detail" cx="58" cy="122" r="8"/>
                <circle className="stroke-hatch" cx="58" cy="122" r="5"/>
                {/* Lance */}
                <path className="stroke-detail" d="M82,105 L95,140"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  BUSTE CLASSIQUE - Style portrait romain
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(30, 290)">
                {/* Socle/Piédestal */}
                <path className="stroke-main" d="M20,220 L30,210 L110,210 L120,220"/>
                <rect className="stroke-main" x="25" y="195" width="90" height="15"/>
                <path className="stroke-med" d="M30,195 L30,180 L110,180 L110,195"/>
                <rect className="stroke-fine" x="35" y="168" width="70" height="12"/>

                {/* Cartouche du socle */}
                <rect className="stroke-detail" x="45" y="198" width="50" height="8" rx="1"/>
                <path className="stroke-hatch" d="M50,202 L90,202"/>

                {/* Drapé/Torse */}
                <path className="stroke-main" d="M35,168 Q25,140 30,110 Q35,85 55,75"/>
                <path className="stroke-main" d="M105,168 Q115,140 110,110 Q105,85 85,75"/>
                {/* Plis du drapé */}
                <path className="stroke-fine" d="M38,150 Q50,145 45,120 Q42,100 55,90"/>
                <path className="stroke-fine" d="M102,150 Q90,145 95,120 Q98,100 85,90"/>
                <path className="stroke-detail" d="M45,140 Q52,135 48,115"/>
                <path className="stroke-detail" d="M95,140 Q88,135 92,115"/>
                <path className="stroke-hatch" d="M50,130 Q55,125 52,110"/>
                <path className="stroke-hatch" d="M90,130 Q85,125 88,110"/>

                {/* Fibule/agrafe */}
                <circle className="stroke-med" cx="55" cy="85" r="4"/>
                <circle className="stroke-detail" cx="55" cy="85" r="2"/>

                {/* Cou */}
                <path className="stroke-main" d="M55,75 Q55,60 58,50"/>
                <path className="stroke-main" d="M85,75 Q85,60 82,50"/>
                <path className="stroke-fine" d="M60,68 Q70,72 80,68"/>

                {/* Visage - profil 3/4 */}
                <ellipse className="stroke-main" cx="70" cy="25" rx="28" ry="35"/>
                {/* Chevelure bouclée */}
                <path className="stroke-main" d="M42,20 Q35,5 45,-8 Q55,-18 70,-20 Q85,-18 95,-8 Q105,5 98,20"/>
                <path className="stroke-med" d="M45,15 Q40,5 48,-5 Q58,-12 70,-14"/>
                <path className="stroke-med" d="M95,15 Q100,5 92,-5 Q82,-12 70,-14"/>
                {/* Boucles individuelles */}
                <circle className="stroke-detail" cx="48" cy="8" r="5"/>
                <circle className="stroke-detail" cx="58" cy="0" r="5"/>
                <circle className="stroke-detail" cx="70" cy="-5" r="5"/>
                <circle className="stroke-detail" cx="82" cy="0" r="5"/>
                <circle className="stroke-detail" cx="92" cy="8" r="5"/>
                <circle className="stroke-hatch" cx="50" cy="18" r="4"/>
                <circle className="stroke-hatch" cx="90" cy="18" r="4"/>

                {/* Traits du visage */}
                {/* Front et sourcils */}
                <path className="stroke-fine" d="M52,15 Q60,12 68,15"/>
                <path className="stroke-fine" d="M72,15 Q80,12 88,15"/>
                {/* Yeux */}
                <ellipse className="stroke-detail" cx="60" cy="22" rx="6" ry="3"/>
                <ellipse className="stroke-detail" cx="80" cy="22" rx="6" ry="3"/>
                <circle className="stroke-hatch" cx="60" cy="22" r="2"/>
                <circle className="stroke-hatch" cx="80" cy="22" r="2"/>
                {/* Nez */}
                <path className="stroke-fine" d="M70,18 L68,35 Q70,40 72,35"/>
                {/* Bouche */}
                <path className="stroke-fine" d="M62,45 Q70,48 78,45"/>
                <path className="stroke-detail" d="M65,45 Q70,43 75,45"/>
                {/* Oreilles */}
                <path className="stroke-detail" d="M42,25 Q38,30 42,40"/>
                <path className="stroke-detail" d="M98,25 Q102,30 98,40"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  COLONNE CORINTHIENNE - Architecture classique détaillée
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(480, 180)">
                {/* Chapiteau corinthien */}
                <rect className="stroke-main" x="0" y="0" width="100" height="12"/>
                <path className="stroke-med" d="M5,12 L15,25 L85,25 L95,12"/>
                {/* Abaque */}
                <rect className="stroke-fine" x="10" y="25" width="80" height="8"/>

                {/* Volutes du chapiteau */}
                <path className="stroke-med" d="M15,33 Q5,38 8,50 Q12,60 25,55"/>
                <path className="stroke-med" d="M85,33 Q95,38 92,50 Q88,60 75,55"/>
                <circle className="stroke-detail" cx="12" cy="45" r="4"/>
                <circle className="stroke-detail" cx="88" cy="45" r="4"/>

                {/* Feuilles d'acanthe stylisées */}
                <path className="stroke-fine" d="M25,55 Q22,70 28,85 Q35,95 45,85 Q50,75 45,60"/>
                <path className="stroke-fine" d="M75,55 Q78,70 72,85 Q65,95 55,85 Q50,75 55,60"/>
                <path className="stroke-detail" d="M30,60 Q28,72 32,80"/>
                <path className="stroke-detail" d="M40,58 Q38,70 42,78"/>
                <path className="stroke-detail" d="M70,60 Q72,72 68,80"/>
                <path className="stroke-detail" d="M60,58 Q62,70 58,78"/>
                {/* Rosette centrale */}
                <circle className="stroke-fine" cx="50" cy="70" r="6"/>
                <circle className="stroke-detail" cx="50" cy="70" r="3"/>

                {/* Astragale (moulure) */}
                <path className="stroke-med" d="M20,90 L80,90"/>
                <circle className="stroke-detail" cx="28" cy="95" r="3"/>
                <circle className="stroke-detail" cx="40" cy="95" r="3"/>
                <circle className="stroke-detail" cx="52" cy="95" r="3"/>
                <circle className="stroke-detail" cx="64" cy="95" r="3"/>
                <circle className="stroke-detail" cx="76" cy="95" r="3"/>

                {/* Fût cannelé */}
                <path className="stroke-main" d="M22,100 L25,350"/>
                <path className="stroke-main" d="M78,100 L75,350"/>
                {/* Cannelures */}
                <path className="stroke-fine" d="M30,100 L32,350"/>
                <path className="stroke-detail" d="M38,100 L39,350"/>
                <path className="stroke-detail" d="M46,100 L46,350"/>
                <path className="stroke-detail" d="M54,100 L54,350"/>
                <path className="stroke-detail" d="M62,100 L61,350"/>
                <path className="stroke-fine" d="M70,100 L68,350"/>

                {/* Base attique */}
                <ellipse className="stroke-med" cx="50" cy="355" rx="32" ry="6"/>
                <path className="stroke-main" d="M18,360 Q15,365 18,370 L82,370 Q85,365 82,360"/>
                <rect className="stroke-main" x="10" y="370" width="80" height="10"/>
                <rect className="stroke-med" x="5" y="380" width="90" height="8"/>
                <path className="stroke-fine" d="M20,375 L80,375"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  MÉDAILLON AVEC PORTRAIT - Style camée antique
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(220, 280)">
                {/* Triple bordure ovale */}
                <ellipse className="stroke-main" cx="80" cy="90" rx="75" ry="85"/>
                <ellipse className="stroke-med" cx="80" cy="90" rx="65" ry="73"/>
                <ellipse className="stroke-fine" cx="80" cy="90" rx="58" ry="65"/>

                {/* Décoration sommitale - noeud de ruban */}
                <path className="stroke-main" d="M55,8 Q50,-5 60,-10 Q70,-12 80,-8 Q90,-12 100,-10 Q110,-5 105,8"/>
                <path className="stroke-med" d="M60,5 Q70,-5 80,-2 Q90,-5 100,5"/>
                <ellipse className="stroke-med" cx="80" cy="0" rx="10" ry="8"/>
                <path className="stroke-fine" d="M75,0 L85,0 M80,-4 L80,4"/>
                {/* Rubans descendants */}
                <path className="stroke-fine" d="M60,5 Q45,20 55,35"/>
                <path className="stroke-fine" d="M100,5 Q115,20 105,35"/>
                <path className="stroke-detail" d="M58,12 Q48,22 54,32"/>
                <path className="stroke-detail" d="M102,12 Q112,22 106,32"/>

                {/* Guirlande latérale gauche */}
                <path className="stroke-fine" d="M12,50 Q-5,90 12,130"/>
                <path className="stroke-detail" d="M8,60 Q0,70 5,80"/>
                <path className="stroke-detail" d="M5,90 Q-2,100 5,110"/>
                <path className="stroke-detail" d="M8,120 Q2,125 8,130"/>
                <circle className="stroke-hatch" cx="8" cy="75" r="3"/>
                <circle className="stroke-hatch" cx="5" cy="105" r="3"/>

                {/* Guirlande latérale droite */}
                <path className="stroke-fine" d="M148,50 Q165,90 148,130"/>
                <path className="stroke-detail" d="M152,60 Q160,70 155,80"/>
                <path className="stroke-detail" d="M155,90 Q162,100 155,110"/>
                <path className="stroke-detail" d="M152,120 Q158,125 152,130"/>
                <circle className="stroke-hatch" cx="152" cy="75" r="3"/>
                <circle className="stroke-hatch" cx="155" cy="105" r="3"/>

                {/* Portrait de profil - style camée */}
                <path className="stroke-med" d="M45,95 Q42,70 55,55 Q70,42 90,45 Q105,48 115,65 Q122,82 118,100 Q115,115 105,125 Q90,138 70,135 Q55,132 48,120 Q42,110 45,95"/>
                {/* Chevelure */}
                <path className="stroke-fine" d="M55,55 Q65,45 85,48 Q100,50 110,62"/>
                <path className="stroke-detail" d="M58,58 Q70,50 88,52 Q102,55 108,65"/>
                <path className="stroke-hatch" d="M62,60 Q75,55 90,58"/>
                {/* Nez proéminent */}
                <path className="stroke-fine" d="M95,75 Q105,85 100,98"/>
                {/* Oeil */}
                <ellipse className="stroke-detail" cx="78" cy="80" rx="5" ry="3"/>
                {/* Bouche et menton */}
                <path className="stroke-detail" d="M85,105 Q92,108 90,115"/>
                <path className="stroke-fine" d="M82,120 Q90,125 95,118"/>
                {/* Drapé au cou */}
                <path className="stroke-detail" d="M50,110 Q55,125 70,135"/>
                <path className="stroke-hatch" d="M52,115 Q58,128 68,132"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  PETIT CADRE OVALE - Miniature portrait
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(420, 440)">
                <ellipse className="stroke-main" cx="50" cy="60" rx="45" ry="55"/>
                <ellipse className="stroke-med" cx="50" cy="60" rx="38" ry="47"/>
                <ellipse className="stroke-fine" cx="50" cy="60" rx="32" ry="40"/>
                {/* Boucle supérieure */}
                <circle className="stroke-med" cx="50" cy="2" r="8"/>
                <circle className="stroke-detail" cx="50" cy="2" r="4"/>
                {/* Intérieur abstrait */}
                <circle className="stroke-detail" cx="50" cy="55" r="15"/>
                <path className="stroke-hatch" d="M42,48 Q50,40 58,48"/>
                <path className="stroke-hatch" d="M45,62 Q50,58 55,62"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  COURONNE DE LAURIER - Symbole classique
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(230, 50)">
                {/* Branche gauche */}
                <path className="stroke-med" d="M40,90 Q20,70 25,45 Q30,25 50,15"/>
                <path className="stroke-fine" d="M45,85 Q28,68 32,48 Q38,30 52,22"/>
                {/* Feuilles gauche */}
                <path className="stroke-detail" d="M32,75 Q22,72 28,65 Q35,68 32,75"/>
                <path className="stroke-detail" d="M28,60 Q18,55 25,48 Q32,52 28,60"/>
                <path className="stroke-detail" d="M30,45 Q22,38 32,32 Q38,38 30,45"/>
                <path className="stroke-detail" d="M38,32 Q32,22 45,20 Q48,28 38,32"/>
                <path className="stroke-hatch" d="M35,68 Q28,65 32,58"/>
                <path className="stroke-hatch" d="M32,52 Q26,48 30,42"/>

                {/* Branche droite */}
                <path className="stroke-med" d="M80,90 Q100,70 95,45 Q90,25 70,15"/>
                <path className="stroke-fine" d="M75,85 Q92,68 88,48 Q82,30 68,22"/>
                {/* Feuilles droite */}
                <path className="stroke-detail" d="M88,75 Q98,72 92,65 Q85,68 88,75"/>
                <path className="stroke-detail" d="M92,60 Q102,55 95,48 Q88,52 92,60"/>
                <path className="stroke-detail" d="M90,45 Q98,38 88,32 Q82,38 90,45"/>
                <path className="stroke-detail" d="M82,32 Q88,22 75,20 Q72,28 82,32"/>
                <path className="stroke-hatch" d="M85,68 Q92,65 88,58"/>
                <path className="stroke-hatch" d="M88,52 Q94,48 90,42"/>

                {/* Ruban noué en bas */}
                <path className="stroke-med" d="M55,90 Q60,100 55,108 Q50,115 60,120"/>
                <path className="stroke-med" d="M65,90 Q60,100 65,108 Q70,115 60,120"/>
                <path className="stroke-fine" d="M52,95 Q57,102 54,108"/>
                <path className="stroke-fine" d="M68,95 Q63,102 66,108"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  COQUILLE ROCAILLE - Style Louis XV
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(380, 300)">
                {/* Coquille centrale */}
                <path className="stroke-main" d="M40,50 Q30,35 40,20 Q50,8 60,20 Q70,8 80,20 Q90,35 80,50 Q60,60 40,50"/>
                <path className="stroke-med" d="M45,45 Q38,35 45,25 Q52,15 60,25 Q68,15 75,25 Q82,35 75,45"/>
                {/* Nervures */}
                <path className="stroke-detail" d="M50,42 L55,25"/>
                <path className="stroke-detail" d="M60,45 L60,22"/>
                <path className="stroke-detail" d="M70,42 L65,25"/>
                <path className="stroke-hatch" d="M55,38 L57,28"/>
                <path className="stroke-hatch" d="M65,38 L63,28"/>
                {/* Volutes latérales */}
                <path className="stroke-fine" d="M35,45 Q20,50 25,65 Q32,75 45,70"/>
                <path className="stroke-fine" d="M85,45 Q100,50 95,65 Q88,75 75,70"/>
                <circle className="stroke-detail" cx="28" cy="58" r="4"/>
                <circle className="stroke-detail" cx="92" cy="58" r="4"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  URNE CLASSIQUE - Style néoclassique
                  ═══════════════════════════════════════════════════════════ */}
              <g transform="translate(180, 450)">
                {/* Couvercle */}
                <ellipse className="stroke-med" cx="45" cy="10" rx="8" ry="4"/>
                <path className="stroke-main" d="M25,20 Q20,15 25,10 Q35,5 45,8 Q55,5 65,10 Q70,15 65,20"/>
                <ellipse className="stroke-med" cx="45" cy="20" rx="22" ry="6"/>

                {/* Corps ovoïde */}
                <path className="stroke-main" d="M23,26 Q10,50 15,85 Q20,120 45,130 Q70,120 75,85 Q80,50 67,26"/>
                <path className="stroke-fine" d="M28,30 Q18,52 22,82 Q26,112 45,120 Q64,112 68,82 Q72,52 62,30"/>

                {/* Anses serpentines */}
                <path className="stroke-med" d="M15,60 Q0,55 2,40 Q5,28 20,35"/>
                <path className="stroke-med" d="M75,60 Q90,55 88,40 Q85,28 70,35"/>
                <circle className="stroke-detail" cx="5" cy="48" r="3"/>
                <circle className="stroke-detail" cx="85" cy="48" r="3"/>

                {/* Frise de godrons */}
                <path className="stroke-detail" d="M22,70 Q25,78 22,86"/>
                <path className="stroke-detail" d="M30,68 Q34,78 30,88"/>
                <path className="stroke-detail" d="M38,66 Q43,78 38,90"/>
                <path className="stroke-detail" d="M52,66 Q47,78 52,90"/>
                <path className="stroke-detail" d="M60,68 Q56,78 60,88"/>
                <path className="stroke-detail" d="M68,70 Q65,78 68,86"/>

                {/* Pied */}
                <ellipse className="stroke-med" cx="45" cy="135" rx="18" ry="5"/>
                <path className="stroke-main" d="M27,135 L30,145 L60,145 L63,135"/>
                <rect className="stroke-fine" x="25" y="145" width="40" height="6"/>
              </g>

              {/* ═══════════════════════════════════════════════════════════
                  ARABESQUES ET MOTIFS DÉCORATIFS
                  ═══════════════════════════════════════════════════════════ */}

              {/* Arabesque coin supérieur droit */}
              <g transform="translate(530, 30)">
                <path className="stroke-fine" d="M0,0 Q15,-10 30,0 Q45,15 30,30 Q15,45 0,30 Q-10,15 0,0"/>
                <path className="stroke-detail" d="M5,5 Q15,0 25,5 Q35,15 25,25"/>
                <circle className="stroke-hatch" cx="15" cy="15" r="5"/>
                <path className="stroke-detail" d="M30,0 Q45,5 50,20"/>
                <path className="stroke-detail" d="M0,30 Q5,45 20,50"/>
              </g>

              {/* Palmette isolée */}
              <g transform="translate(150, 175)">
                <path className="stroke-med" d="M25,45 Q15,35 20,20 Q25,8 30,20 Q35,8 40,20 Q45,35 35,45"/>
                <path className="stroke-fine" d="M28,40 Q22,32 25,22"/>
                <path className="stroke-fine" d="M32,40 Q38,32 35,22"/>
                <path className="stroke-detail" d="M30,38 L30,25"/>
                <ellipse className="stroke-detail" cx="30" cy="48" rx="8" ry="4"/>
              </g>

              {/* Rosette centrale */}
              <g transform="translate(320, 210)">
                <circle className="stroke-med" cx="30" cy="30" r="12"/>
                <circle className="stroke-fine" cx="30" cy="30" r="8"/>
                <circle className="stroke-detail" cx="30" cy="30" r="4"/>
                {/* Pétales */}
                <ellipse className="stroke-detail" cx="30" cy="15" rx="4" ry="8"/>
                <ellipse className="stroke-detail" cx="45" cy="30" rx="8" ry="4"/>
                <ellipse className="stroke-detail" cx="30" cy="45" rx="4" ry="8"/>
                <ellipse className="stroke-detail" cx="15" cy="30" rx="8" ry="4"/>
                {/* Pétales diagonaux */}
                <ellipse className="stroke-hatch" cx="40" cy="20" rx="3" ry="6" transform="rotate(45 40 20)"/>
                <ellipse className="stroke-hatch" cx="40" cy="40" rx="3" ry="6" transform="rotate(-45 40 40)"/>
                <ellipse className="stroke-hatch" cx="20" cy="40" rx="3" ry="6" transform="rotate(45 20 40)"/>
                <ellipse className="stroke-hatch" cx="20" cy="20" rx="3" ry="6" transform="rotate(-45 20 20)"/>
              </g>

              {/* Frise grecque horizontale bas */}
              <g transform="translate(0, 570)">
                <path className="stroke-fine" d="M0,0 L600,0 M0,20 L600,20"/>
                {/* Motifs méandres répétés */}
                <path className="stroke-detail" d="M10,0 L10,15 L25,15 L25,5 L15,5 L15,0"/>
                <path className="stroke-detail" d="M40,20 L40,5 L55,5 L55,15 L45,15 L45,20"/>
                <path className="stroke-detail" d="M70,0 L70,15 L85,15 L85,5 L75,5 L75,0"/>
                <path className="stroke-detail" d="M100,20 L100,5 L115,5 L115,15 L105,15 L105,20"/>
                <path className="stroke-detail" d="M130,0 L130,15 L145,15 L145,5 L135,5 L135,0"/>
                <path className="stroke-detail" d="M160,20 L160,5 L175,5 L175,15 L165,15 L165,20"/>
                <path className="stroke-detail" d="M190,0 L190,15 L205,15 L205,5 L195,5 L195,0"/>
                <path className="stroke-detail" d="M220,20 L220,5 L235,5 L235,15 L225,15 L225,20"/>
                <path className="stroke-detail" d="M250,0 L250,15 L265,15 L265,5 L255,5 L255,0"/>
                <path className="stroke-detail" d="M280,20 L280,5 L295,5 L295,15 L285,15 L285,20"/>
                <path className="stroke-detail" d="M310,0 L310,15 L325,15 L325,5 L315,5 L315,0"/>
                <path className="stroke-detail" d="M340,20 L340,5 L355,5 L355,15 L345,15 L345,20"/>
                <path className="stroke-detail" d="M370,0 L370,15 L385,15 L385,5 L375,5 L375,0"/>
                <path className="stroke-detail" d="M400,20 L400,5 L415,5 L415,15 L405,15 L405,20"/>
                <path className="stroke-detail" d="M430,0 L430,15 L445,15 L445,5 L435,5 L435,0"/>
                <path className="stroke-detail" d="M460,20 L460,5 L475,5 L475,15 L465,15 L465,20"/>
                <path className="stroke-detail" d="M490,0 L490,15 L505,15 L505,5 L495,5 L495,0"/>
                <path className="stroke-detail" d="M520,20 L520,5 L535,5 L535,15 L525,15 L525,20"/>
                <path className="stroke-detail" d="M550,0 L550,15 L565,15 L565,5 L555,5 L555,0"/>
                <path className="stroke-detail" d="M580,20 L580,5 L595,5 L595,15 L585,15 L585,20"/>
              </g>

              {/* Points décoratifs dispersés */}
              <circle className="stroke-detail" cx="270" cy="155" r="2"/>
              <circle className="stroke-hatch" cx="350" cy="175" r="1.5"/>
              <circle className="stroke-detail" cx="420" cy="280" r="2"/>
              <circle className="stroke-hatch" cx="160" cy="420" r="1.5"/>
              <circle className="stroke-detail" cx="340" cy="520" r="2"/>
              <circle className="stroke-hatch" cx="90" cy="540" r="1.5"/>
              <circle className="stroke-detail" cx="550" cy="140" r="2"/>

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
            radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(10, 13, 26, 0.4) 100%),
            linear-gradient(to bottom, rgba(10, 13, 26, 0.2) 0%, transparent 15%, transparent 85%, rgba(10, 13, 26, 0.3) 100%)
          `,
        }}
      />
    </div>
  );
};

export default CabinetBackground;
