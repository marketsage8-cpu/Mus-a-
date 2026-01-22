/**
 * CabinetBackground - Arrière-plan décoratif "Cabinet de curiosités"
 *
 * Motifs en line-art style gravure ancienne:
 * - Cadres de tableaux baroques
 * - Bustes grecs/romains
 * - Vases antiques
 *
 * Style: Traits dorés (#D4AF37) à 5-10% d'opacité sur fond bleu nuit
 */

const CabinetBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* SVG Container */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Style commun pour tous les éléments */}
          <style>
            {`
              .cabinet-line {
                fill: none;
                stroke: #D4AF37;
                stroke-width: 1;
                stroke-linecap: round;
                stroke-linejoin: round;
                opacity: 0.07;
              }
              .cabinet-line-light {
                fill: none;
                stroke: #D4AF37;
                stroke-width: 0.5;
                stroke-linecap: round;
                stroke-linejoin: round;
                opacity: 0.05;
              }
              @media (max-width: 768px) {
                .hide-mobile {
                  display: none;
                }
                .cabinet-line, .cabinet-line-light {
                  stroke-width: 0.5;
                  opacity: 0.04;
                }
              }
            `}
          </style>
        </defs>

        {/* ============================================
            CADRE BAROQUE - Haut Gauche
            ============================================ */}
        <g transform="translate(80, 60) scale(0.8)" className="cabinet-line">
          {/* Cadre extérieur */}
          <rect x="0" y="0" width="200" height="260" rx="4" />
          {/* Cadre intérieur */}
          <rect x="20" y="20" width="160" height="220" rx="2" />
          {/* Ornements coins */}
          <path d="M0,0 Q-10,-10 0,-20 Q10,-10 20,0" transform="translate(10, 10)" />
          <path d="M0,0 Q-10,-10 0,-20 Q10,-10 20,0" transform="translate(170, 10) scale(-1, 1)" />
          <path d="M0,0 Q-10,10 0,20 Q10,10 20,0" transform="translate(10, 250)" />
          <path d="M0,0 Q-10,10 0,20 Q10,10 20,0" transform="translate(170, 250) scale(-1, 1)" />
          {/* Volutes baroques - haut */}
          <path d="M60,5 Q100,-15 140,5" />
          <path d="M70,0 Q100,-8 130,0" />
          {/* Volutes baroques - bas */}
          <path d="M60,255 Q100,275 140,255" />
          <path d="M70,260 Q100,268 130,260" />
          {/* Détails latéraux */}
          <path d="M5,80 Q-10,130 5,180" />
          <path d="M195,80 Q210,130 195,180" />
        </g>

        {/* ============================================
            BUSTE GREC - Haut Droite
            ============================================ */}
        <g transform="translate(1650, 80) scale(0.7)" className="cabinet-line">
          {/* Socle */}
          <path d="M40,280 L60,260 L140,260 L160,280 L40,280" />
          <path d="M50,260 L50,250 L150,250 L150,260" />
          {/* Cou */}
          <path d="M85,250 Q80,230 85,210" />
          <path d="M115,250 Q120,230 115,210" />
          {/* Tête - contour */}
          <ellipse cx="100" cy="150" rx="45" ry="60" />
          {/* Cheveux bouclés style grec */}
          <path d="M55,140 Q45,100 60,70 Q80,50 100,45 Q120,50 140,70 Q155,100 145,140" />
          <path d="M60,130 Q55,110 65,90" />
          <path d="M140,130 Q145,110 135,90" />
          {/* Boucles */}
          <circle cx="65" cy="85" r="8" />
          <circle cx="80" cy="70" r="7" />
          <circle cx="100" cy="60" r="8" />
          <circle cx="120" cy="70" r="7" />
          <circle cx="135" cy="85" r="8" />
          {/* Traits du visage */}
          <path d="M85,130 L90,155 L85,160" /> {/* Nez */}
          <path d="M80,175 Q100,185 120,175" /> {/* Bouche */}
          <ellipse cx="82" cy="140" rx="8" ry="4" /> {/* Œil gauche */}
          <ellipse cx="118" cy="140" rx="8" ry="4" /> {/* Œil droit */}
          <path d="M70,125 Q82,120 94,125" /> {/* Sourcil gauche */}
          <path d="M106,125 Q118,120 130,125" /> {/* Sourcil droit */}
          {/* Oreilles */}
          <path d="M55,145 Q45,150 55,165" />
          <path d="M145,145 Q155,150 145,165" />
        </g>

        {/* ============================================
            VASE ANTIQUE - Bas Gauche
            ============================================ */}
        <g transform="translate(120, 750) scale(0.75)" className="cabinet-line">
          {/* Base du vase */}
          <ellipse cx="100" cy="280" rx="50" ry="10" />
          <path d="M50,280 L60,270 L140,270 L150,280" />
          {/* Corps du vase - amphore */}
          <path d="M60,270 Q40,220 50,150 Q60,80 100,60 Q140,80 150,150 Q160,220 140,270" />
          {/* Col */}
          <path d="M80,60 Q75,40 80,20" />
          <path d="M120,60 Q125,40 120,20" />
          {/* Lèvre */}
          <ellipse cx="100" cy="20" rx="25" ry="6" />
          <path d="M75,20 Q70,15 75,10 L125,10 Q130,15 125,20" />
          {/* Anses */}
          <path d="M50,150 Q20,130 25,100 Q30,70 60,80" />
          <path d="M150,150 Q180,130 175,100 Q170,70 140,80" />
          {/* Motifs décoratifs - méandres grecs */}
          <path d="M60,200 L70,200 L70,210 L80,210 L80,200 L90,200 L90,210 L100,210 L100,200 L110,200 L110,210 L120,210 L120,200 L130,200 L130,210 L140,210" />
          <path d="M65,180 L135,180" />
          <path d="M65,230 L135,230" />
          {/* Frise de palmettes */}
          <path d="M85,120 Q100,100 115,120" />
          <path d="M90,125 Q100,110 110,125" />
        </g>

        {/* ============================================
            CADRE OVALE - Centre Droite (plus subtil)
            ============================================ */}
        <g transform="translate(1580, 500) scale(0.6)" className="cabinet-line-light hide-mobile">
          {/* Cadre ovale */}
          <ellipse cx="100" cy="130" rx="90" ry="120" />
          <ellipse cx="100" cy="130" rx="75" ry="100" />
          {/* Nœud décoratif en haut */}
          <path d="M70,15 Q100,-5 130,15" />
          <path d="M80,20 Q100,5 120,20" />
          <circle cx="100" cy="8" r="12" />
          {/* Ruban qui pend */}
          <path d="M88,8 Q70,-10 60,20 Q55,40 65,30" />
          <path d="M112,8 Q130,-10 140,20 Q145,40 135,30" />
          {/* Décorations latérales */}
          <path d="M15,100 Q0,130 15,160" />
          <path d="M185,100 Q200,130 185,160" />
        </g>

        {/* ============================================
            PETIT VASE - Centre Gauche
            ============================================ */}
        <g transform="translate(50, 450) scale(0.5)" className="cabinet-line-light hide-mobile">
          {/* Kylix (coupe grecque) */}
          <ellipse cx="100" cy="50" rx="80" ry="20" />
          <ellipse cx="100" cy="55" rx="70" ry="15" />
          <path d="M30,55 Q20,80 40,90 Q60,95 100,100 Q140,95 160,90 Q180,80 170,55" />
          {/* Pied */}
          <path d="M85,100 L85,130 L70,135 L130,135 L115,130 L115,100" />
          {/* Anses horizontales */}
          <path d="M20,50 Q0,50 5,65 Q10,80 30,70" />
          <path d="M180,50 Q200,50 195,65 Q190,80 170,70" />
        </g>

        {/* ============================================
            BUSTE ROMAIN - Bas Droite
            ============================================ */}
        <g transform="translate(1620, 720) scale(0.55)" className="cabinet-line hide-mobile">
          {/* Socle rectangulaire */}
          <path d="M30,300 L50,280 L150,280 L170,300 L30,300" />
          <rect x="45" y="265" width="110" height="15" />
          {/* Torse avec drapé */}
          <path d="M60,265 Q50,230 55,200 Q60,180 75,170" />
          <path d="M140,265 Q150,230 145,200 Q140,180 125,170" />
          {/* Drapé toga */}
          <path d="M60,240 Q80,250 100,245 Q120,250 140,240" />
          <path d="M65,220 Q85,230 105,225" />
          {/* Cou */}
          <path d="M80,170 Q75,155 80,140" />
          <path d="M120,170 Q125,155 120,140" />
          {/* Tête - style romain */}
          <ellipse cx="100" cy="100" rx="40" ry="50" />
          {/* Cheveux courts romains */}
          <path d="M60,90 Q55,60 70,40 Q85,25 100,22 Q115,25 130,40 Q145,60 140,90" />
          {/* Frange */}
          <path d="M70,65 L75,80 L85,70 L90,85 L100,72 L110,85 L115,70 L125,80 L130,65" />
          {/* Visage */}
          <path d="M90,85 L95,105 L90,110" />
          <path d="M85,125 Q100,132 115,125" />
          <ellipse cx="85" cy="95" rx="6" ry="3" />
          <ellipse cx="115" cy="95" rx="6" ry="3" />
          {/* Oreilles */}
          <path d="M60,95 Q52,100 60,115" />
          <path d="M140,95 Q148,100 140,115" />
        </g>

        {/* ============================================
            CADRE BAROQUE PETIT - Centre Bas
            ============================================ */}
        <g transform="translate(800, 850) scale(0.4)" className="cabinet-line-light hide-mobile">
          <rect x="0" y="0" width="180" height="140" rx="3" />
          <rect x="15" y="15" width="150" height="110" rx="2" />
          {/* Ornements */}
          <path d="M50,0 Q90,-20 130,0" />
          <path d="M50,140 Q90,160 130,140" />
          <path d="M0,40 Q-15,70 0,100" />
          <path d="M180,40 Q195,70 180,100" />
        </g>

        {/* ============================================
            AMPHORE FINE - Haut Centre
            ============================================ */}
        <g transform="translate(900, 50) scale(0.45)" className="cabinet-line-light hide-mobile">
          {/* Corps élancé */}
          <path d="M80,200 Q60,150 70,80 Q80,40 100,30 Q120,40 130,80 Q140,150 120,200" />
          {/* Col long */}
          <path d="M90,30 Q88,15 90,5" />
          <path d="M110,30 Q112,15 110,5" />
          <ellipse cx="100" cy="5" rx="15" ry="4" />
          {/* Base */}
          <ellipse cx="100" cy="200" rx="25" ry="6" />
          {/* Anses élégantes */}
          <path d="M70,80 Q45,60 50,40 Q55,25 80,35" />
          <path d="M130,80 Q155,60 150,40 Q145,25 120,35" />
          {/* Décoration */}
          <path d="M75,120 L125,120" />
          <path d="M80,140 L120,140" />
        </g>

        {/* ============================================
            MÉDAILLON - Milieu Gauche
            ============================================ */}
        <g transform="translate(280, 350) scale(0.5)" className="cabinet-line-light hide-mobile">
          <circle cx="80" cy="80" r="70" />
          <circle cx="80" cy="80" r="60" />
          <circle cx="80" cy="80" r="55" />
          {/* Profil classique à l'intérieur */}
          <path d="M50,100 Q45,80 50,60 Q60,40 80,35 Q95,40 100,55 Q105,45 100,60 Q95,80 90,90 Q85,100 75,105 Q60,105 50,100" />
          {/* Laurier */}
          <path d="M35,50 Q25,60 30,75" />
          <path d="M32,55 Q22,65 27,80" />
          <path d="M125,50 Q135,60 130,75" />
          <path d="M128,55 Q138,65 133,80" />
        </g>

        {/* ============================================
            COLONNE IONIQUE - Droite
            ============================================ */}
        <g transform="translate(1750, 300) scale(0.5)" className="cabinet-line-light hide-mobile">
          {/* Chapiteau ionique */}
          <path d="M30,30 Q20,20 25,10 Q35,0 50,5" />
          <path d="M70,30 Q80,20 75,10 Q65,0 50,5" />
          <rect x="35" y="30" width="30" height="8" />
          {/* Fût avec cannelures */}
          <path d="M38,38 L40,200" />
          <path d="M45,38 L46,200" />
          <path d="M50,38 L50,200" />
          <path d="M55,38 L54,200" />
          <path d="M62,38 L60,200" />
          {/* Base */}
          <ellipse cx="50" cy="200" rx="20" ry="5" />
          <rect x="28" y="205" width="44" height="10" />
        </g>

        {/* ============================================
            ELEMENTS DECORATIFS SUPPLEMENTAIRES
            ============================================ */}

        {/* Petits éléments dispersés pour remplir */}

        {/* Feuille d'acanthe - bas centre gauche */}
        <g transform="translate(500, 920) scale(0.4)" className="cabinet-line-light hide-mobile">
          <path d="M50,80 Q30,60 40,30 Q50,10 60,30 Q70,10 80,30 Q90,60 70,80 Q60,90 50,80" />
          <path d="M55,70 Q50,50 55,35" />
          <path d="M65,70 Q70,50 65,35" />
        </g>

        {/* Palmette - haut centre droit */}
        <g transform="translate(1200, 100) scale(0.35)" className="cabinet-line-light hide-mobile">
          <path d="M50,100 Q40,70 50,40 Q55,20 60,40 Q70,20 75,40 Q80,20 85,40 Q90,20 95,40 Q105,70 95,100 Q75,110 50,100" />
          <path d="M60,90 Q55,60 65,45" />
          <path d="M75,90 Q75,60 75,40" />
          <path d="M90,90 Q95,60 85,45" />
        </g>

        {/* Rosette - centre */}
        <g transform="translate(950, 480) scale(0.3)" className="cabinet-line-light hide-mobile">
          <circle cx="50" cy="50" r="8" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="25"
              rx="8"
              ry="20"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </g>

        {/* Ligne décorative sinueuse - traverse */}
        <path
          className="cabinet-line-light hide-mobile"
          d="M0,600 Q200,580 400,600 Q600,620 800,600 Q1000,580 1200,600 Q1400,620 1600,600 Q1800,580 1920,600"
        />

      </svg>
    </div>
  );
};

export default CabinetBackground;
