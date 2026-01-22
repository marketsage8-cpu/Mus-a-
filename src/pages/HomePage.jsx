import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Zap, MapPin, Clock, Footprints, Car } from 'lucide-react';
import { places } from '../data/places';
import InteractiveMap from '../components/map/InteractiveMap';

/**
 * Page d'accueil avec hero, carte floue et section Musea Now
 */
const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyMuseums, setNearbyMuseums] = useState([]);

  // Get user location on mount
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
          // Default to Paris if geolocation fails
          setUserLocation({ lat: 48.8566, lng: 2.3522 });
        }
      );
    } else {
      setUserLocation({ lat: 48.8566, lng: 2.3522 });
    }
  }, []);

  // Calculate nearby museums when location changes
  useEffect(() => {
    if (userLocation) {
      const museumsWithDistance = places
        .filter(p => p.type === 'musée')
        .map(museum => ({
          ...museum,
          distance: calculateDistance(
            userLocation.lat,
            userLocation.lng,
            museum.coordinates.lat,
            museum.coordinates.lng
          )
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3);

      setNearbyMuseums(museumsWithDistance);
    }
  }, [userLocation]);

  // Haversine formula to calculate distance in km
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Convert distance to travel time text
  const getDistanceText = (distanceKm) => {
    if (distanceKm < 1) {
      const minutes = Math.round(distanceKm * 12); // ~5km/h walking
      return { text: `${minutes} min à pied`, icon: Footprints };
    } else if (distanceKm < 3) {
      const minutes = Math.round(distanceKm * 12);
      return { text: `${minutes} min à pied`, icon: Footprints };
    } else {
      const minutes = Math.round(distanceKm * 2); // ~30km/h city driving
      return { text: `${minutes} min de trajet`, icon: Car };
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const filterButtons = [
    { label: 'Ouvert maintenant', variant: 'green' },
    { label: 'Gratuit', variant: 'light' },
    { label: 'Bowsites', variant: 'light' },
    { label: 'Lilin et al imps', variant: 'light' }
  ];

  return (
    <div className="animate-fade-in">
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background image - Paris with Eiffel Tower at twilight */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80"
            alt="Paris au crépuscule"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay - effet "bavure" fluide depuis la navbar bleu marine (style Culturio) */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom,
                #0f0f1a 0%,
                #0f0f1a 6%,
                rgba(15, 15, 26, 0.97) 10%,
                rgba(15, 15, 26, 0.92) 14%,
                rgba(15, 15, 26, 0.85) 18%,
                rgba(15, 15, 26, 0.75) 22%,
                rgba(15, 15, 26, 0.6) 28%,
                rgba(15, 15, 26, 0.45) 34%,
                rgba(15, 15, 26, 0.3) 40%,
                rgba(15, 15, 26, 0.18) 48%,
                rgba(15, 15, 26, 0.1) 55%,
                rgba(15, 15, 26, 0.05) 62%,
                transparent 70%,
                rgba(26, 26, 46, 0.2) 80%,
                rgba(26, 26, 46, 0.5) 90%,
                #1a1a2e 100%)`
            }}
          />
        </div>

        {/* Hero Content - centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main title - Italic serif golden */}
            <h1
              className="font-serif-italic text-4xl sm:text-5xl lg:text-6xl mb-6 animate-slide-up"
              style={{ color: '#d4a574' }}
            >
              Toute la culture autour de vous.
            </h1>

            {/* Subtitle - light gray */}
            <p
              className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto animate-slide-up"
              style={{ color: '#9ca3af', animationDelay: '100ms' }}
            >
              Musées, expositions et lieux culturels, visibles en temps réel autour de vous.
            </p>

            {/* Search bar - white */}
            <form
              onSubmit={handleSearch}
              className="relative max-w-xl mx-auto mb-6 animate-slide-up"
              style={{ animationDelay: '200ms' }}
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un site, musée..."
                className="
                  w-full
                  py-4 px-6 pl-14
                  bg-white
                  rounded-full
                  text-gray-800
                  placeholder-gray-400
                  shadow-lg
                  focus:outline-none
                  focus:ring-2 focus:ring-[#d4a574]/50
                  transition-all
                "
              />
            </form>

            {/* Filter buttons */}
            <div
              className="flex flex-wrap justify-center gap-3 animate-slide-up"
              style={{ animationDelay: '300ms' }}
            >
              {filterButtons.map((btn, index) => (
                <button
                  key={index}
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-medium
                    transition-all hover:scale-105
                    ${btn.variant === 'green'
                      ? 'bg-[#2d4a3e] text-white'
                      : 'bg-white/90 text-gray-800 border border-gray-200'
                    }
                  `}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================
            SECTION 2: BLURRED MAP (overlapping hero)
            ============================================ */}
        <div className="relative z-20 -mt-20 px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Blurred map */}
              <div className="filter blur-[3px]">
                <InteractiveMap
                  places={places.slice(0, 5)}
                  height="300px"
                  center={userLocation ? [userLocation.lat, userLocation.lng] : [48.8566, 2.3522]}
                  zoom={12}
                  showUserLocation={false}
                />
              </div>

              {/* Overlay for clickability */}
              <div className="absolute inset-0 bg-[#1a1a2e]/20" />

              {/* CTA Button centered on map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => navigate('/explore')}
                  className="
                    px-8 py-4
                    bg-[#2d4a3e] hover:bg-[#3d5a4e]
                    text-white text-lg font-semibold
                    rounded-full
                    shadow-xl
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  Explorer la carte !
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: DÉCOUVERTE SPONTANÉE (Bento Box Style)
          ============================================ */}
      <section className="bg-[#1a1a2e] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header - Elegant centered title */}
          <div className="text-center mb-12">
            <h2
              className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl"
              style={{ color: '#d4a574' }}
            >
              Envie d'une escapade immédiate ?
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
              3 lieux culturels à découvrir maintenant, autour de vous
            </p>
          </div>

          {/* Bento Box Grid: 65% left, 35% right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            {/* Large card - left side (spans 7 columns ~60%) */}
            {nearbyMuseums[0] && (
              <div className="lg:col-span-7 h-[450px] lg:h-[520px]">
                <BentoCard
                  museum={nearbyMuseums[0]}
                  size="large"
                  badges={[{ text: '#1 Recommandé', variant: 'gold' }]}
                  distanceInfo={getDistanceText(nearbyMuseums[0].distance)}
                  onClick={() => navigate('/explore')}
                  showCTA={true}
                />
              </div>
            )}

            {/* Right side - 2 smaller cards stacked (spans 5 columns ~40%) */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-5">
              {nearbyMuseums[1] && (
                <div className="h-[280px] lg:h-[250px]">
                  <BentoCard
                    museum={nearbyMuseums[1]}
                    size="small"
                    badges={[{ text: 'Gratuit', variant: 'glass' }]}
                    distanceInfo={getDistanceText(nearbyMuseums[1].distance)}
                    onClick={() => navigate('/explore')}
                  />
                </div>
              )}
              {nearbyMuseums[2] && (
                <div className="h-[280px] lg:h-[250px]">
                  <BentoCard
                    museum={nearbyMuseums[2]}
                    size="small"
                    badges={[
                      { text: 'Gratuit', variant: 'glass' },
                      { text: '#1 Recommandé', variant: 'gold' }
                    ]}
                    distanceInfo={getDistanceText(nearbyMuseums[2].distance)}
                    onClick={() => navigate('/explore')}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Bento Card Component for Découverte Spontanée section
 * Design: Full background image with badges, gradient overlay, and hover zoom effect
 */
const BentoCard = ({ museum, size = 'small', badges = [], distanceInfo, onClick, showCTA = false }) => {
  const DistanceIcon = distanceInfo?.icon || MapPin;

  return (
    <div
      className="relative w-full h-full rounded-2xl xl:rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
      onClick={onClick}
    >
      {/* Background image with hover zoom effect */}
      <img
        src={museum.image}
        alt={museum.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Gradient overlay - darker at bottom for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.6) 30%,
            rgba(0, 0, 0, 0.2) 60%,
            transparent 100%)`
        }}
      />

      {/* Badges - top left with backdrop blur (pill shape) */}
      {badges.length > 0 && (
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`
                px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide
                backdrop-blur-md shadow-lg
                ${badge.variant === 'gold'
                  ? 'bg-[#d4a574]/90 text-[#1a1a2e]'
                  : 'bg-white/20 text-white border border-white/30'
                }
              `}
            >
              {badge.text}
            </span>
          ))}
        </div>
      )}

      {/* Content overlay - bottom */}
      <div className={`absolute bottom-0 left-0 right-0 p-5 ${size === 'large' ? 'sm:p-8' : 'sm:p-5'}`}>
        {/* Museum name */}
        <h3
          className={`
            font-bold text-white leading-tight mb-3
            ${size === 'large' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'}
          `}
        >
          {museum.name}
        </h3>

        {/* Distance / Travel time with icon */}
        <div className="flex items-center gap-2 text-white/80 mb-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm">
            <DistanceIcon className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">{distanceInfo?.text || museum.location}</span>
        </div>

        {/* CTA Button - only for large card */}
        {showCTA && (
          <button
            className="
              w-full py-4
              bg-[#d4a574] hover:bg-[#c49464]
              text-[#1a1a2e] font-bold text-lg
              rounded-xl
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg
              active:scale-[0.98]
            "
          >
            Commencer la visite
          </button>
        )}
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-2xl xl:rounded-3xl border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default HomePage;
