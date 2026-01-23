import { useState, useEffect } from 'react';
import { MapPin, Navigation, Compass, Sparkles } from 'lucide-react';
import { places } from '../data/places';
import InteractiveMap from '../components/map/InteractiveMap';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Page Carte - Affichage de la carte uniquement avec cadre baroque
 */
const ExplorePage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapHeight, setMapHeight] = useState('100vh');
  const [userLocation, setUserLocation] = useState(null);

  // Obtenir la position de l'utilisateur
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          // Paris par défaut
          setUserLocation({ lat: 48.8566, lng: 2.3522 });
        }
      );
    } else {
      setUserLocation({ lat: 48.8566, lng: 2.3522 });
    }
  }, []);

  // Calculer la hauteur de la carte
  useEffect(() => {
    const updateHeight = () => {
      const navHeight = 72;
      setMapHeight(`calc(100vh - ${navHeight}px)`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f1a]">
      {/* Titre de la page */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-night-900/80 backdrop-blur-xl rounded-2xl border border-gold-500/30 shadow-2xl">
          <Compass className="w-5 h-5 text-gold-400" />
          <h1 className="font-display text-xl font-bold text-sand-100">Carte</h1>
          <span className="text-sand-500 text-sm">•</span>
          <span className="text-sand-400 text-sm">{places.length} lieux</span>
        </div>
      </div>

      {/* Container de la carte avec cadre */}
      <div className="relative w-full" style={{ height: mapHeight }}>
        {/* ==========================================
            CADRE BAROQUE 18ÈME SIÈCLE
            ========================================== */}
        <div className="absolute inset-4 sm:inset-6 lg:inset-10 z-20 pointer-events-none">
          {/* Cadre principal doré avec effet de profondeur */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              border: '20px solid transparent',
              borderImage: `linear-gradient(135deg,
                #8b6914 0%,
                #d4a574 15%,
                #f5deb3 25%,
                #d4a574 35%,
                #8b6914 50%,
                #d4a574 65%,
                #f5deb3 75%,
                #d4a574 85%,
                #8b6914 100%
              ) 1`,
              boxShadow: `
                inset 0 0 30px rgba(139, 105, 20, 0.6),
                inset 0 0 60px rgba(212, 165, 116, 0.3),
                0 10px 40px rgba(0, 0, 0, 0.6),
                0 6px 20px rgba(139, 105, 20, 0.4)
              `
            }}
          />

          {/* Moulure intérieure raffinée */}
          <div
            className="absolute inset-[20px] rounded"
            style={{
              border: '8px solid transparent',
              borderImage: `linear-gradient(180deg,
                #6b5310 0%,
                #d4a574 20%,
                #f5deb3 50%,
                #d4a574 80%,
                #6b5310 100%
              ) 1`
            }}
          />

          {/* Filet intérieur fin */}
          <div
            className="absolute inset-[28px] rounded"
            style={{
              border: '2px solid #d4a574',
              opacity: 0.6
            }}
          />

          {/* ========== COINS ORNEMENTAUX BAROQUE ========== */}
          {/* Coin supérieur gauche */}
          <svg className="absolute -top-2 -left-2 w-24 h-24 lg:w-32 lg:h-32 text-gold-500 drop-shadow-xl" viewBox="0 0 120 120" fill="none">
            {/* Base du coin */}
            <path d="M10,60 Q10,10 60,10 L60,25 Q30,25 25,60 Z" fill="currentColor" opacity="0.95"/>
            <path d="M18,55 Q18,22 55,18 L52,30 Q35,32 32,52 Z" fill="#f5deb3" opacity="0.8"/>
            {/* Rosace centrale */}
            <circle cx="42" cy="42" r="12" fill="currentColor" opacity="0.7"/>
            <circle cx="42" cy="42" r="7" fill="#f5deb3" opacity="0.9"/>
            <circle cx="42" cy="42" r="3" fill="currentColor" opacity="0.8"/>
            {/* Volutes élégantes */}
            <path d="M60,30 Q48,38 42,60 Q52,42 65,40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M30,60 Q38,48 60,42 Q42,52 40,65" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            {/* Feuilles d'acanthe */}
            <path d="M70,20 Q60,25 55,40 Q65,30 75,28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M20,70 Q25,60 40,55 Q30,65 28,75" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
          </svg>

          {/* Coin supérieur droit */}
          <svg className="absolute -top-2 -right-2 w-24 h-24 lg:w-32 lg:h-32 text-gold-500 drop-shadow-xl transform scale-x-[-1]" viewBox="0 0 120 120" fill="none">
            <path d="M10,60 Q10,10 60,10 L60,25 Q30,25 25,60 Z" fill="currentColor" opacity="0.95"/>
            <path d="M18,55 Q18,22 55,18 L52,30 Q35,32 32,52 Z" fill="#f5deb3" opacity="0.8"/>
            <circle cx="42" cy="42" r="12" fill="currentColor" opacity="0.7"/>
            <circle cx="42" cy="42" r="7" fill="#f5deb3" opacity="0.9"/>
            <circle cx="42" cy="42" r="3" fill="currentColor" opacity="0.8"/>
            <path d="M60,30 Q48,38 42,60 Q52,42 65,40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M30,60 Q38,48 60,42 Q42,52 40,65" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M70,20 Q60,25 55,40 Q65,30 75,28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M20,70 Q25,60 40,55 Q30,65 28,75" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
          </svg>

          {/* Coin inférieur gauche */}
          <svg className="absolute -bottom-2 -left-2 w-24 h-24 lg:w-32 lg:h-32 text-gold-500 drop-shadow-xl transform scale-y-[-1]" viewBox="0 0 120 120" fill="none">
            <path d="M10,60 Q10,10 60,10 L60,25 Q30,25 25,60 Z" fill="currentColor" opacity="0.95"/>
            <path d="M18,55 Q18,22 55,18 L52,30 Q35,32 32,52 Z" fill="#f5deb3" opacity="0.8"/>
            <circle cx="42" cy="42" r="12" fill="currentColor" opacity="0.7"/>
            <circle cx="42" cy="42" r="7" fill="#f5deb3" opacity="0.9"/>
            <circle cx="42" cy="42" r="3" fill="currentColor" opacity="0.8"/>
            <path d="M60,30 Q48,38 42,60 Q52,42 65,40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M30,60 Q38,48 60,42 Q42,52 40,65" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M70,20 Q60,25 55,40 Q65,30 75,28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M20,70 Q25,60 40,55 Q30,65 28,75" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
          </svg>

          {/* Coin inférieur droit */}
          <svg className="absolute -bottom-2 -right-2 w-24 h-24 lg:w-32 lg:h-32 text-gold-500 drop-shadow-xl transform scale-[-1]" viewBox="0 0 120 120" fill="none">
            <path d="M10,60 Q10,10 60,10 L60,25 Q30,25 25,60 Z" fill="currentColor" opacity="0.95"/>
            <path d="M18,55 Q18,22 55,18 L52,30 Q35,32 32,52 Z" fill="#f5deb3" opacity="0.8"/>
            <circle cx="42" cy="42" r="12" fill="currentColor" opacity="0.7"/>
            <circle cx="42" cy="42" r="7" fill="#f5deb3" opacity="0.9"/>
            <circle cx="42" cy="42" r="3" fill="currentColor" opacity="0.8"/>
            <path d="M60,30 Q48,38 42,60 Q52,42 65,40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M30,60 Q38,48 60,42 Q42,52 40,65" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M70,20 Q60,25 55,40 Q65,30 75,28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M20,70 Q25,60 40,55 Q30,65 28,75" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
          </svg>

          {/* ========== ORNEMENTS CENTRAUX DES CÔTÉS ========== */}
          {/* Médaillon gauche */}
          <svg className="absolute top-1/2 -left-1 w-10 h-20 lg:w-12 lg:h-24 -translate-y-1/2 text-gold-500" viewBox="0 0 40 80" fill="none">
            <ellipse cx="20" cy="40" rx="16" ry="32" fill="currentColor" opacity="0.9"/>
            <ellipse cx="20" cy="40" rx="10" ry="22" fill="#f5deb3" opacity="0.7"/>
            <ellipse cx="20" cy="40" rx="4" ry="10" fill="currentColor" opacity="0.6"/>
          </svg>

          {/* Médaillon droit */}
          <svg className="absolute top-1/2 -right-1 w-10 h-20 lg:w-12 lg:h-24 -translate-y-1/2 text-gold-500" viewBox="0 0 40 80" fill="none">
            <ellipse cx="20" cy="40" rx="16" ry="32" fill="currentColor" opacity="0.9"/>
            <ellipse cx="20" cy="40" rx="10" ry="22" fill="#f5deb3" opacity="0.7"/>
            <ellipse cx="20" cy="40" rx="4" ry="10" fill="currentColor" opacity="0.6"/>
          </svg>

          {/* Cartouche supérieur */}
          <svg className="absolute -top-1 left-1/2 w-28 h-12 lg:w-36 lg:h-14 -translate-x-1/2 text-gold-500" viewBox="0 0 100 40" fill="none">
            <ellipse cx="50" cy="20" rx="42" ry="16" fill="currentColor" opacity="0.9"/>
            <ellipse cx="50" cy="20" rx="30" ry="10" fill="#f5deb3" opacity="0.7"/>
            <path d="M20,20 Q35,10 50,20 Q65,30 80,20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
          </svg>

          {/* Cartouche inférieur */}
          <svg className="absolute -bottom-1 left-1/2 w-28 h-12 lg:w-36 lg:h-14 -translate-x-1/2 text-gold-500" viewBox="0 0 100 40" fill="none">
            <ellipse cx="50" cy="20" rx="42" ry="16" fill="currentColor" opacity="0.9"/>
            <ellipse cx="50" cy="20" rx="30" ry="10" fill="#f5deb3" opacity="0.7"/>
            <path d="M20,20 Q35,30 50,20 Q65,10 80,20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
          </svg>
        </div>

        {/* ==========================================
            LA CARTE INTERACTIVE
            ========================================== */}
        <div className="absolute inset-4 sm:inset-6 lg:inset-10 rounded-lg overflow-hidden">
          <InteractiveMap
            places={places}
            onPlaceClick={setSelectedPlace}
            height="100%"
            autoLocate={true}
            showUserLocation={true}
            center={userLocation ? [userLocation.lat, userLocation.lng] : [48.8566, 2.3522]}
            zoom={12}
            className="w-full h-full"
          />
        </div>

        {/* Légende en bas à droite */}
        <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 z-30">
          <div className="bg-night-900/95 backdrop-blur-xl rounded-2xl p-4 border border-gold-500/30 shadow-2xl">
            <p className="text-xs font-semibold text-gold-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Légende
            </p>
            <div className="space-y-2">
              {[
                { color: 'bg-turquoise-500', label: 'Musées' },
                { color: 'bg-gold-500', label: 'Châteaux' },
                { color: 'bg-terracotta-500', label: 'Monuments' },
                { color: 'bg-purple-500', label: 'Expositions' },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${color} shadow-sm`} />
                  <span className="text-xs text-sand-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicateur de position */}
        {userLocation && (
          <div className="absolute bottom-8 left-8 lg:bottom-16 lg:left-16 z-30">
            <div className="flex items-center gap-2 px-4 py-2 bg-night-900/95 backdrop-blur-xl rounded-xl border border-gold-500/30 shadow-xl">
              <div className="relative">
                <Navigation className="w-4 h-4 text-turquoise-400" />
                <div className="absolute inset-0 animate-ping">
                  <Navigation className="w-4 h-4 text-turquoise-400 opacity-30" />
                </div>
              </div>
              <span className="text-xs text-sand-300">Votre position</span>
            </div>
          </div>
        )}
      </div>

      {/* Modal de détails */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default ExplorePage;
