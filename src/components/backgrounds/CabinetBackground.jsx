/**
 * CabinetBackground - Arrière-plan décoratif "Cabinet de curiosités"
 *
 * Design: Pattern répétitif style gravure classique
 * - Cadres de tableaux ornementés baroques
 * - Bustes grecs/romains sur piédestaux
 * - Vases antiques avec motifs
 * - Colonnes ioniques/corinthiennes
 * - Médaillons ovales
 *
 * Style: Lignes dorées (#c9a227) sur fond bleu nuit (#0f0f23)
 * Opacité: 0.3-0.5 pour rester subtil mais visible
 */

const CabinetBackground = () => {
  // SVG pattern encodé pour utilisation en CSS background
  const svgPattern = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <style>
          .line {
            fill: none;
            stroke: %23c9a227;
            stroke-width: 1.2;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .line-thin {
            fill: none;
            stroke: %23c9a227;
            stroke-width: 0.8;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .line-detail {
            fill: none;
            stroke: %23d4a574;
            stroke-width: 0.6;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        </style>
      </defs>

      <!-- ========================================
           CADRE BAROQUE ORNÉ - Haut Gauche
           ======================================== -->
      <g transform="translate(15, 15) scale(0.65)">
        <!-- Cadre extérieur -->
        <rect class="line" x="0" y="0" width="140" height="180" rx="4"/>
        <!-- Cadre intérieur -->
        <rect class="line" x="15" y="15" width="110" height="150" rx="2"/>
        <!-- Cadre le plus intérieur -->
        <rect class="line-thin" x="22" y="22" width="96" height="136" rx="1"/>

        <!-- Ornements coins - style rococo -->
        <path class="line" d="M0,0 Q-8,-8 0,-16 Q8,-8 16,0"/>
        <path class="line" d="M140,0 Q148,-8 140,-16 Q132,-8 124,0"/>
        <path class="line" d="M0,180 Q-8,188 0,196 Q8,188 16,180"/>
        <path class="line" d="M140,180 Q148,188 140,196 Q132,188 124,180"/>

        <!-- Volutes baroques - haut -->
        <path class="line" d="M35,-5 Q70,-18 105,-5"/>
        <path class="line-thin" d="M45,0 Q70,-10 95,0"/>
        <path class="line-detail" d="M55,3 Q70,-3 85,3"/>

        <!-- Volutes baroques - bas -->
        <path class="line" d="M35,185 Q70,198 105,185"/>
        <path class="line-thin" d="M45,180 Q70,190 95,180"/>

        <!-- Fioritures latérales -->
        <path class="line-thin" d="M-5,50 Q-15,90 -5,130"/>
        <path class="line-thin" d="M145,50 Q155,90 145,130"/>

        <!-- Silhouette portrait intérieur -->
        <ellipse class="line-detail" cx="70" cy="85" rx="28" ry="35"/>
        <path class="line-detail" d="M55,70 Q60,55 70,50 Q80,55 85,70"/>
        <path class="line-detail" d="M50,100 Q70,115 90,100"/>
      </g>

      <!-- ========================================
           VASE GREC AMPHORE - Droite Milieu
           ======================================== -->
      <g transform="translate(260, 30) scale(0.55)">
        <!-- Base du vase -->
        <ellipse class="line" cx="80" cy="210" rx="35" ry="8"/>
        <path class="line" d="M45,210 L55,200 L105,200 L115,210"/>

        <!-- Corps de l'amphore - forme élégante -->
        <path class="line" d="M55,200 Q35,160 42,100 Q50,50 80,35 Q110,50 118,100 Q125,160 105,200"/>

        <!-- Col du vase -->
        <path class="line" d="M65,35 Q62,20 65,8"/>
        <path class="line" d="M95,35 Q98,20 95,8"/>

        <!-- Lèvre évasée -->
        <ellipse class="line" cx="80" cy="8" rx="20" ry="5"/>
        <path class="line-thin" d="M60,8 Q55,3 60,0 L100,0 Q105,3 100,8"/>

        <!-- Anses élégantes -->
        <path class="line" d="M42,100 Q15,85 18,55 Q22,30 55,42"/>
        <path class="line" d="M118,100 Q145,85 142,55 Q138,30 105,42"/>

        <!-- Motifs méandres grecs -->
        <path class="line-detail" d="M50,150 L58,150 L58,158 L66,158 L66,150 L74,150 L74,158 L82,158 L82,150 L90,150 L90,158 L98,158 L98,150 L106,150"/>
        <path class="line-detail" d="M52,130 L108,130"/>
        <path class="line-detail" d="M52,175 L108,175"/>

        <!-- Frise de palmettes -->
        <path class="line-detail" d="M70,90 Q80,75 90,90"/>
        <path class="line-detail" d="M73,95 Q80,82 87,95"/>
      </g>

      <!-- ========================================
           BUSTE GREC CLASSIQUE - Bas Gauche
           ======================================== -->
      <g transform="translate(25, 230) scale(0.5)">
        <!-- Socle/Piédestal -->
        <path class="line" d="M30,260 L50,240 L130,240 L150,260 L30,260"/>
        <rect class="line" x="45" y="225" width="90" height="15"/>
        <path class="line-thin" d="M40,260 L40,275 L140,275 L140,260"/>

        <!-- Torse avec drapé -->
        <path class="line" d="M55,225 Q45,195 50,165 Q55,145 70,135"/>
        <path class="line" d="M125,225 Q135,195 130,165 Q125,145 110,135"/>

        <!-- Lignes du drapé/toga -->
        <path class="line-thin" d="M55,200 Q80,210 105,195"/>
        <path class="line-thin" d="M60,180 Q85,190 110,175"/>
        <path class="line-detail" d="M65,160 Q80,165 95,158"/>

        <!-- Cou -->
        <path class="line" d="M75,135 Q70,120 75,105"/>
        <path class="line" d="M105,135 Q110,120 105,105"/>

        <!-- Tête - forme classique -->
        <ellipse class="line" cx="90" cy="65" rx="35" ry="45"/>

        <!-- Cheveux bouclés style grec -->
        <path class="line" d="M55,55 Q45,30 58,10 Q72,-5 90,-8 Q108,-5 122,10 Q135,30 125,55"/>
        <path class="line-thin" d="M60,45 Q52,25 65,15"/>
        <path class="line-thin" d="M120,45 Q128,25 115,15"/>

        <!-- Boucles de cheveux -->
        <circle class="line-detail" cx="62" cy="25" r="6"/>
        <circle class="line-detail" cx="78" cy="12" r="5"/>
        <circle class="line-detail" cx="90" cy="8" r="6"/>
        <circle class="line-detail" cx="102" cy="12" r="5"/>
        <circle class="line-detail" cx="118" cy="25" r="6"/>

        <!-- Visage - traits classiques -->
        <path class="line-thin" d="M82,50 L87,72 L82,78"/>
        <path class="line-thin" d="M75,90 Q90,98 105,90"/>
        <ellipse class="line-detail" cx="78" cy="58" rx="6" ry="3"/>
        <ellipse class="line-detail" cx="102" cy="58" rx="6" ry="3"/>
        <path class="line-detail" d="M68,48 Q78,43 88,48"/>
        <path class="line-detail" d="M92,48 Q102,43 112,48"/>

        <!-- Oreilles -->
        <path class="line-thin" d="M55,60 Q45,68 55,80"/>
        <path class="line-thin" d="M125,60 Q135,68 125,80"/>
      </g>

      <!-- ========================================
           COLONNE IONIQUE - Droite
           ======================================== -->
      <g transform="translate(330, 180) scale(0.45)">
        <!-- Chapiteau ionique avec volutes -->
        <path class="line" d="M15,25 Q5,15 8,5 Q15,-5 35,0"/>
        <path class="line" d="M85,25 Q95,15 92,5 Q85,-5 65,0"/>
        <circle class="line-detail" cx="20" cy="12" r="8"/>
        <circle class="line-detail" cx="80" cy="12" r="8"/>

        <!-- Abaque -->
        <rect class="line" x="10" y="25" width="80" height="10"/>

        <!-- Échine avec oves -->
        <path class="line-thin" d="M20,35 Q25,40 30,35 Q35,40 40,35 Q45,40 50,35 Q55,40 60,35 Q65,40 70,35 Q75,40 80,35"/>

        <!-- Fût avec cannelures -->
        <path class="line" d="M18,45 L22,220"/>
        <path class="line-thin" d="M28,45 L30,220"/>
        <path class="line-thin" d="M38,45 L38,220"/>
        <path class="line-thin" d="M48,45 L48,220"/>
        <path class="line-thin" d="M58,45 L58,220"/>
        <path class="line-thin" d="M68,45 L66,220"/>
        <path class="line" d="M78,45 L74,220"/>

        <!-- Base avec tores -->
        <ellipse class="line" cx="48" cy="220" rx="35" ry="8"/>
        <ellipse class="line-thin" cx="48" cy="228" rx="38" ry="6"/>
        <rect class="line" x="5" y="234" width="86" height="12"/>
      </g>

      <!-- ========================================
           MÉDAILLON OVALE - Centre
           ======================================== -->
      <g transform="translate(140, 165) scale(0.4)">
        <!-- Cadre ovale double -->
        <ellipse class="line" cx="80" cy="100" rx="70" ry="90"/>
        <ellipse class="line" cx="80" cy="100" rx="58" ry="75"/>
        <ellipse class="line-thin" cx="80" cy="100" rx="52" ry="68"/>

        <!-- Nœud décoratif en haut -->
        <path class="line" d="M50,15 Q80,-8 110,15"/>
        <path class="line-thin" d="M60,20 Q80,2 100,20"/>
        <ellipse class="line" cx="80" cy="8" rx="12" ry="10"/>

        <!-- Rubans qui pendent -->
        <path class="line" d="M68,8 Q45,-10 35,25 Q30,50 45,40"/>
        <path class="line" d="M92,8 Q115,-10 125,25 Q130,50 115,40"/>

        <!-- Profil classique à l'intérieur -->
        <path class="line-thin" d="M45,120 Q38,95 45,70 Q55,45 80,38 Q98,45 105,60 Q112,50 105,70 Q98,95 88,108 Q80,120 68,125 Q52,125 45,120"/>

        <!-- Couronne de laurier -->
        <path class="line-detail" d="M35,55 Q22,70 28,90"/>
        <path class="line-detail" d="M30,60 Q18,75 24,95"/>
        <path class="line-detail" d="M125,55 Q138,70 132,90"/>
        <path class="line-detail" d="M130,60 Q142,75 136,95"/>

        <!-- Décorations latérales -->
        <path class="line-detail" d="M12,70 Q-5,100 12,130"/>
        <path class="line-detail" d="M148,70 Q165,100 148,130"/>
      </g>

      <!-- ========================================
           PETIT CADRE - Haut Droite
           ======================================== -->
      <g transform="translate(285, 235) scale(0.35)">
        <rect class="line" x="0" y="0" width="100" height="130" rx="3"/>
        <rect class="line-thin" x="10" y="10" width="80" height="110" rx="2"/>

        <!-- Ornements simples -->
        <path class="line-detail" d="M25,-5 Q50,-15 75,-5"/>
        <path class="line-detail" d="M25,135 Q50,145 75,135"/>
        <path class="line-detail" d="M-5,35 Q-12,65 -5,95"/>
        <path class="line-detail" d="M105,35 Q112,65 105,95"/>

        <!-- Silhouette paysage -->
        <path class="line-detail" d="M20,90 L30,70 L45,85 L60,55 L75,80 L80,90"/>
      </g>

      <!-- ========================================
           KYLIX (Coupe grecque) - Bas Centre
           ======================================== -->
      <g transform="translate(155, 330) scale(0.45)">
        <!-- Vasque de la coupe -->
        <ellipse class="line" cx="70" cy="30" rx="60" ry="15"/>
        <ellipse class="line-thin" cx="70" cy="35" rx="52" ry="12"/>

        <!-- Corps de la coupe -->
        <path class="line" d="M18,35 Q8,55 25,68 Q45,78 70,82 Q95,78 115,68 Q132,55 122,35"/>

        <!-- Pied -->
        <path class="line" d="M58,82 L58,105 L45,112 L95,112 L82,105 L82,82"/>
        <ellipse class="line-thin" cx="70" cy="112" rx="28" ry="5"/>

        <!-- Anses horizontales élégantes -->
        <path class="line" d="M10,30 Q-12,28 -8,42 Q-2,58 20,50"/>
        <path class="line" d="M130,30 Q152,28 148,42 Q142,58 120,50"/>

        <!-- Décoration intérieure -->
        <circle class="line-detail" cx="70" cy="45" r="18"/>
        <circle class="line-detail" cx="70" cy="45" r="8"/>
      </g>

      <!-- ========================================
           ÉLÉMENTS DÉCORATIFS ADDITIONNELS
           ======================================== -->

      <!-- Feuille d'acanthe - coin haut droit -->
      <g transform="translate(220, 5) scale(0.3)">
        <path class="line-thin" d="M40,70 Q20,50 28,25 Q38,5 50,25 Q62,5 72,25 Q80,50 60,70 Q50,80 40,70"/>
        <path class="line-detail" d="M45,60 Q42,40 48,28"/>
        <path class="line-detail" d="M55,60 Q58,40 52,28"/>
      </g>

      <!-- Palmette - bas droite -->
      <g transform="translate(360, 350) scale(0.28)">
        <path class="line-thin" d="M30,80 Q22,55 32,30 Q38,12 45,30 Q52,12 58,30 Q65,12 72,30 Q78,55 70,80 Q50,90 30,80"/>
        <path class="line-detail" d="M40,70 Q38,50 45,35"/>
        <path class="line-detail" d="M52,70 Q52,50 52,32"/>
        <path class="line-detail" d="M64,70 Q66,50 60,35"/>
      </g>

      <!-- Rosette - milieu gauche -->
      <g transform="translate(5, 180) scale(0.22)">
        <circle class="line-thin" cx="40" cy="40" r="8"/>
        <ellipse class="line-detail" cx="40" cy="18" rx="6" ry="15" transform="rotate(0 40 40)"/>
        <ellipse class="line-detail" cx="40" cy="18" rx="6" ry="15" transform="rotate(45 40 40)"/>
        <ellipse class="line-detail" cx="40" cy="18" rx="6" ry="15" transform="rotate(90 40 40)"/>
        <ellipse class="line-detail" cx="40" cy="18" rx="6" ry="15" transform="rotate(135 40 40)"/>
        <ellipse class="line-detail" cx="40" cy="18" rx="6" ry="15" transform="rotate(180 40 40)"/>
        <ellipse class="line-detail" cx="40" cy="18" rx="6" ry="15" transform="rotate(225 40 40)"/>
        <ellipse class="line-detail" cx="40" cy="18" rx="6" ry="15" transform="rotate(270 40 40)"/>
        <ellipse class="line-detail" cx="40" cy="18" rx="6" ry="15" transform="rotate(315 40 40)"/>
      </g>

      <!-- Guirlande végétale courbe -->
      <path class="line-detail" d="M0,400 Q50,385 100,395 Q150,405 200,390 Q250,375 300,388 Q350,400 400,385"/>

      <!-- Petits ornements dispersés -->
      <circle class="line-detail" cx="195" cy="145" r="3"/>
      <circle class="line-detail" cx="250" cy="200" r="2"/>
      <circle class="line-detail" cx="120" cy="310" r="2"/>
      <circle class="line-detail" cx="320" cy="155" r="2"/>

    </svg>
  `;

  // Encoder le SVG pour l'utiliser en CSS
  const encodedSvg = encodeURIComponent(svgPattern.replace(/\s+/g, ' ').trim());

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Fond bleu nuit */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#0f0f23' }}
      />

      {/* Pattern SVG répétitif */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          backgroundPosition: 'center top',
          opacity: 0.4,
        }}
      />

      {/* Overlay gradient subtil pour plus de profondeur */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(15, 15, 35, 0.3) 100%)`,
        }}
      />
    </div>
  );
};

export default CabinetBackground;
