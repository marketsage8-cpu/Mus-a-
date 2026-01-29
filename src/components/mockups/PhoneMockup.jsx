/**
 * Composants de mockups pour illustrer les fonctionnalités de l'app
 */

// Mockup téléphone avec carte interactive
export const MapMockup = () => (
  <div className="relative w-full max-w-md mx-auto">
    {/* Cadre du téléphone */}
    <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl shadow-black/50">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-10" />

      {/* Écran */}
      <div className="relative bg-[#0c0c0c] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
        {/* Barre de statut */}
        <div className="h-12 bg-[#0c0c0c] flex items-end justify-center pb-2">
          <span className="text-white/60 text-xs">9:41</span>
        </div>

        {/* Contenu de la carte */}
        <div className="relative flex-1 bg-[#1a2234]">
          {/* Grille de rues stylisée */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300">
            {/* Rues */}
            <path d="M0 100 L200 100" stroke="#2a3a5c" strokeWidth="8" />
            <path d="M0 200 L200 200" stroke="#2a3a5c" strokeWidth="6" />
            <path d="M70 0 L70 300" stroke="#2a3a5c" strokeWidth="8" />
            <path d="M140 0 L140 300" stroke="#2a3a5c" strokeWidth="6" />

            {/* Parcs/zones vertes */}
            <rect x="10" y="120" width="50" height="60" rx="8" fill="#1a3a2a" opacity="0.5" />
            <rect x="150" y="30" width="40" height="50" rx="8" fill="#1a3a2a" opacity="0.5" />

            {/* Marqueurs de musées */}
            <g transform="translate(100, 80)">
              <circle r="12" fill="#e07a5f" />
              <path d="M-6 -2 L0 -8 L6 -2 L6 4 L-6 4 Z" fill="white" />
              <rect x="-4" y="0" width="8" height="4" fill="white" />
            </g>

            <g transform="translate(50, 180)">
              <circle r="10" fill="#e07a5f" opacity="0.8" />
              <path d="M-4 -1 L0 -5 L4 -1 L4 3 L-4 3 Z" fill="white" />
            </g>

            <g transform="translate(160, 150)">
              <circle r="10" fill="#e07a5f" opacity="0.8" />
              <path d="M-4 -1 L0 -5 L4 -1 L4 3 L-4 3 Z" fill="white" />
            </g>

            <g transform="translate(130, 250)">
              <circle r="8" fill="#e07a5f" opacity="0.6" />
            </g>

            {/* Position utilisateur */}
            <g transform="translate(100, 150)">
              <circle r="20" fill="#3b82f6" opacity="0.2" />
              <circle r="8" fill="#3b82f6" />
              <circle r="4" fill="white" />
            </g>
          </svg>

          {/* Carte de lieu en bas */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#0c0c0c]/95 backdrop-blur rounded-2xl p-3 border border-white/10">
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e07a5f]/30 to-[#e07a5f]/10 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-[#e07a5f]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8l-7 3.5L5 8l7-3.5z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-3 bg-white/80 rounded w-3/4 mb-2" />
                <div className="h-2 bg-white/40 rounded w-1/2 mb-2" />
                <div className="flex gap-2">
                  <div className="h-2 bg-[#e07a5f]/60 rounded w-12" />
                  <div className="h-2 bg-white/20 rounded w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de recherche en haut */}
        <div className="absolute top-14 left-4 right-4 bg-[#0c0c0c]/90 backdrop-blur rounded-full px-4 py-3 border border-white/10 flex items-center gap-3">
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <div className="h-2 bg-white/30 rounded flex-1" />
        </div>
      </div>
    </div>

    {/* Reflet */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] pointer-events-none" />
  </div>
);

// Mockup téléphone avec recommandations Muzea Now
export const RecommendationsMockup = () => (
  <div className="relative w-full max-w-md mx-auto">
    <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl shadow-black/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-10" />

      <div className="relative bg-[#0c0c0c] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
        {/* Header */}
        <div className="p-4 pt-12">
          <div className="text-center mb-4">
            <div className="h-3 bg-[#e07a5f] rounded w-32 mx-auto mb-2" />
            <div className="h-2 bg-white/30 rounded w-48 mx-auto" />
          </div>
        </div>

        {/* Cards de recommandations */}
        <div className="px-4 space-y-3">
          {/* Card 1 - Principale */}
          <div className="bg-gradient-to-br from-[#e07a5f]/20 to-[#e07a5f]/5 rounded-2xl p-4 border border-[#e07a5f]/30">
            <div className="flex gap-3">
              <div className="w-20 h-20 bg-gradient-to-br from-[#e07a5f]/40 to-[#e07a5f]/20 rounded-xl" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-0.5 bg-[#e07a5f] rounded-full">
                    <span className="text-[8px] text-[#0c0c0c] font-bold">OUVERT</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded w-8" />
                </div>
                <div className="h-3 bg-white/70 rounded w-full mb-2" />
                <div className="h-2 bg-white/30 rounded w-3/4 mb-2" />
                <div className="flex gap-2">
                  <div className="h-2 bg-[#e07a5f]/50 rounded w-10" />
                  <div className="h-2 bg-white/20 rounded w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-white/10 rounded-xl" />
              <div className="flex-1">
                <div className="h-2.5 bg-white/60 rounded w-full mb-2" />
                <div className="h-2 bg-white/30 rounded w-2/3 mb-2" />
                <div className="h-2 bg-white/20 rounded w-1/2" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-white/10 rounded-xl" />
              <div className="flex-1">
                <div className="h-2.5 bg-white/60 rounded w-full mb-2" />
                <div className="h-2 bg-white/30 rounded w-2/3 mb-2" />
                <div className="h-2 bg-white/20 rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-6 h-1.5 bg-[#e07a5f] rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] pointer-events-none" />
  </div>
);

// Mockup téléphone avec rencontres/social
export const SocialMockup = () => (
  <div className="relative w-full max-w-md mx-auto">
    <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl shadow-black/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-10" />

      <div className="relative bg-[#0c0c0c] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
        {/* Header */}
        <div className="p-4 pt-12 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-3 bg-[#e07a5f] rounded w-24 mb-1" />
              <div className="h-2 bg-white/30 rounded w-32" />
            </div>
            <div className="w-10 h-10 bg-[#e07a5f]/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#e07a5f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Liste de personnes avec images artistiques */}
        <div className="p-4 space-y-3">
          {/* Personne 1 - Nymphéas de Monet */}
          <div className="bg-[#e07a5f]/10 rounded-2xl border border-[#e07a5f]/30 overflow-hidden">
            <div className="h-20 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=300&q=80"
                alt="Nymphéas - Monet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
            </div>
            <div className="flex items-center gap-3 p-3 -mt-6 relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face"
                alt="Marie"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#e07a5f]"
              />
              <div className="flex-1">
                <div className="text-white text-sm font-medium">Marie D.</div>
                <div className="text-white/50 text-xs">Nymphéas - Monet</div>
              </div>
              <div className="text-[#e07a5f] text-xs">2km</div>
            </div>
          </div>

          {/* Personne 2 - Van Gogh */}
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="h-16 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&q=80"
                alt="La Nuit Étoilée"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
            </div>
            <div className="flex items-center gap-3 p-3 -mt-5 relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                alt="Thomas"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
              />
              <div className="flex-1">
                <div className="text-white text-sm font-medium">Thomas B.</div>
                <div className="text-white/50 text-xs">Van Gogh</div>
              </div>
              <div className="text-white/40 text-xs">5km</div>
            </div>
          </div>

          {/* Personne 3 - Picasso */}
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="h-16 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=300&q=80"
                alt="Picasso"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
            </div>
            <div className="flex items-center gap-3 p-3 -mt-5 relative">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
                alt="Sophie"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
              />
              <div className="flex-1">
                <div className="text-white text-sm font-medium">Sophie M.</div>
                <div className="text-white/50 text-xs">Picasso</div>
              </div>
              <div className="text-white/40 text-xs">8km</div>
            </div>
          </div>
        </div>

        {/* Bouton flottant */}
        <div className="absolute bottom-20 right-4 w-14 h-14 bg-[#e07a5f] rounded-full flex items-center justify-center shadow-lg shadow-[#e07a5f]/30">
          <svg className="w-6 h-6 text-[#0c0c0c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] pointer-events-none" />
  </div>
);

// Mockup pour les guides culturels
export const GuidesMockup = () => (
  <div className="relative w-full max-w-md mx-auto">
    <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl shadow-black/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-10" />

      <div className="relative bg-[#0c0c0c] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
        {/* Header avec parcours */}
        <div className="p-4 pt-12">
          <div className="h-3 bg-[#e07a5f] rounded w-28 mb-2 mx-auto" />
          <div className="h-2 bg-white/30 rounded w-40 mx-auto" />
        </div>

        {/* Timeline du parcours avec images */}
        <div className="px-4 py-3">
          <div className="relative">
            {/* Ligne de connexion */}
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#e07a5f] via-[#e07a5f]/50 to-white/20" />

            {/* Étape 1 - Nymphéas Monet */}
            <div className="relative flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#e07a5f] flex items-center justify-center text-[#0c0c0c] font-bold text-xs z-10">
                1
              </div>
              <div className="flex-1 bg-[#e07a5f]/10 rounded-xl overflow-hidden border border-[#e07a5f]/30">
                <div className="h-16 relative">
                  <img
                    src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=300&q=80"
                    alt="Nymphéas - Monet"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
                </div>
                <div className="p-2 -mt-3 relative">
                  <div className="text-white text-xs font-medium">Nymphéas - Monet</div>
                  <div className="text-white/50 text-[10px]">30 min - En cours</div>
                </div>
              </div>
            </div>

            {/* Étape 2 - Van Gogh */}
            <div className="relative flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#e07a5f]/60 flex items-center justify-center text-white font-bold text-xs z-10">
                2
              </div>
              <div className="flex-1 bg-white/5 rounded-xl overflow-hidden border border-white/10">
                <div className="h-14 relative">
                  <img
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&q=80"
                    alt="La Nuit Étoilée"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
                </div>
                <div className="p-2 -mt-2 relative">
                  <div className="text-white/70 text-xs">La Nuit Étoilée</div>
                  <div className="text-white/40 text-[10px]">15 min</div>
                </div>
              </div>
            </div>

            {/* Étape 3 - Picasso */}
            <div className="relative flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white/60 font-bold text-xs z-10">
                3
              </div>
              <div className="flex-1 bg-white/5 rounded-xl overflow-hidden border border-white/10 opacity-70">
                <div className="h-12 relative">
                  <img
                    src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=300&q=80"
                    alt="Picasso"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
                </div>
                <div className="p-2 -mt-2 relative">
                  <div className="text-white/50 text-xs">Picasso - Bleu et Rose</div>
                  <div className="text-white/30 text-[10px]">20 min</div>
                </div>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="relative flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/40 font-bold text-xs z-10">
                4
              </div>
              <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/10 opacity-50">
                <div className="text-white/30 text-xs">Boutique & Sortie</div>
                <div className="text-white/20 text-[10px]">10 min</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-20 left-4 right-4">
          <div className="flex justify-between text-[10px] text-white/40 mb-2">
            <span>Progression</span>
            <span>25%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-gradient-to-r from-[#e07a5f] to-[#e07a5f]/60 rounded-full" />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] pointer-events-none" />
  </div>
);

export default { MapMockup, RecommendationsMockup, SocialMockup, GuidesMockup };
