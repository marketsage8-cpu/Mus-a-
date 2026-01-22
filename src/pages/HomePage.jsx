import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Zap, MapPin, Clock, Footprints, Car, Heart, ChevronLeft, ChevronRight, Calendar, Euro, X } from 'lucide-react';
import { places } from '../data/places';
import InteractiveMap from '../components/map/InteractiveMap';
import { useUser } from '../context/UserContext';
import CabinetBackground from '../components/backgrounds/CabinetBackground';

/**
 * Page d'accueil avec hero, carte floue et section Musea Now
 */
const HomePage = () => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyMuseums, setNearbyMuseums] = useState([]);
  const [selectedBentoCard, setSelectedBentoCard] = useState(null);

  // Expositions éphémères (filtrer par type "exposition")
  const exhibitions = places.filter(p => p.type === 'exposition');

  // Carousel 3D state
  const [activeIndex, setActiveIndex] = useState(Math.floor(exhibitions.length / 2));
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const carouselRef = useRef(null);

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

  // Carousel 3D navigation
  const navigateCarousel = (direction) => {
    setActiveIndex(prev => {
      if (direction === 'left') {
        return prev > 0 ? prev - 1 : exhibitions.length - 1;
      } else {
        return prev < exhibitions.length - 1 ? prev + 1 : 0;
      }
    });
  };

  // Go to specific card
  const goToCard = (index) => {
    setActiveIndex(index);
  };

  // Toggle flip card
  const toggleFlip = (exhibitionId) => {
    setFlippedCards(prev => ({
      ...prev,
      [exhibitionId]: !prev[exhibitionId]
    }));
  };

  // Handle favorite click (stop propagation to prevent flip)
  const handleFavoriteClick = (e, placeId) => {
    e.stopPropagation();
    toggleFavorite(placeId);
  };

  // Handle BentoCard click with zoom effect
  const handleBentoClick = (index) => {
    setSelectedBentoCard(index);
    setTimeout(() => {
      setSelectedBentoCard(null);
      navigate('/explore');
    }, 300);
  };

  const filterButtons = [
    { label: 'Ouvert maintenant', variant: 'green' },
    { label: 'Gratuit', variant: 'light' },
    { label: 'Bowsites', variant: 'light' },
    { label: 'Lilin et al imps', variant: 'light' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Arrière-plan décoratif "Cabinet de curiosités" */}
      <CabinetBackground />

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
          SECTION 3: MUZEA NOW
          ============================================ */}
      <section className="bg-[#1a1a2e] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header - Muzea Now centered layout */}
          <div className="text-center mb-12">
            {/* Muzea now - avec encadrement stylé */}
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative px-6 py-2">
                {/* Fond avec dégradé subtil */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4a574]/20 via-[#d4a574]/10 to-[#d4a574]/20 rounded-lg" />
                {/* Bordure avec angles stylés */}
                <div className="absolute inset-0 border border-[#d4a574]/40 rounded-lg" />
                {/* Coins décorés */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4a574] rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4a574] rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4a574] rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4a574] rounded-br-lg" />
                {/* Texte */}
                <p className="relative text-sm uppercase tracking-[0.3em] text-[#d4a574] font-semibold">
                  Muzea now
                </p>
              </div>
            </div>
            {/* Question principale */}
            <h2
              className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl mb-4"
              style={{ color: '#d4a574' }}
            >
              Que puis-je visiter maintenant ?
            </h2>
            {/* Description - beaucoup plus petit */}
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
              3 propositions optimales basées sur votre position et l'heure actuelle
            </p>
          </div>

          {/* Bento Box Grid: 65% left, 35% right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            {/* Large card - left side (spans 7 columns ~60%) */}
            {nearbyMuseums[0] && (
              <div
                className={`lg:col-span-7 h-[450px] lg:h-[520px] transition-transform duration-300 ${
                  selectedBentoCard === 0 ? 'scale-105 z-10' : ''
                }`}
              >
                <BentoCard
                  museum={nearbyMuseums[0]}
                  size="large"
                  badges={[{ text: '#1 Recommandé', variant: 'gold' }]}
                  distanceInfo={getDistanceText(nearbyMuseums[0].distance)}
                  onClick={() => handleBentoClick(0)}
                  showCTA={true}
                  isSelected={selectedBentoCard === 0}
                />
              </div>
            )}

            {/* Right side - 2 smaller cards stacked (spans 5 columns ~40%) */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-5">
              {nearbyMuseums[1] && (
                <div
                  className={`h-[280px] lg:h-[250px] transition-transform duration-300 ${
                    selectedBentoCard === 1 ? 'scale-105 z-10' : ''
                  }`}
                >
                  <BentoCard
                    museum={nearbyMuseums[1]}
                    size="small"
                    badges={[{ text: 'Gratuit', variant: 'glass' }]}
                    distanceInfo={getDistanceText(nearbyMuseums[1].distance)}
                    onClick={() => handleBentoClick(1)}
                    isSelected={selectedBentoCard === 1}
                  />
                </div>
              )}
              {nearbyMuseums[2] && (
                <div
                  className={`h-[280px] lg:h-[250px] transition-transform duration-300 ${
                    selectedBentoCard === 2 ? 'scale-105 z-10' : ''
                  }`}
                >
                  <BentoCard
                    museum={nearbyMuseums[2]}
                    size="small"
                    badges={[
                      { text: 'Gratuit', variant: 'glass' },
                      { text: '#1 Recommandé', variant: 'gold' }
                    ]}
                    distanceInfo={getDistanceText(nearbyMuseums[2].distance)}
                    onClick={() => handleBentoClick(2)}
                    isSelected={selectedBentoCard === 2}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: EXPOSITIONS ÉPHÉMÈRES
          ============================================ */}
      <section className="bg-[#0f0f1a] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative px-6 py-2">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/20 rounded-lg" />
                <div className="absolute inset-0 border border-red-500/40 rounded-lg" />
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500 rounded-br-lg" />
                <p className="relative text-sm uppercase tracking-[0.3em] text-red-400 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Éphémères
                </p>
              </div>
            </div>
            <h2
              className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl mb-4"
              style={{ color: '#d4a574' }}
            >
              Expositions à ne pas louper !
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
              Cliquez sur une carte pour découvrir les détails de l'exposition
            </p>
          </div>

          {/* Carousel 3D container */}
          <div className="relative py-16">
            {/* Navigation arrows */}
            <button
              onClick={() => navigateCarousel('left')}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-[#d4a574] hover:bg-[#c49464] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-7 h-7 text-[#1a1a2e]" />
            </button>
            <button
              onClick={() => navigateCarousel('right')}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-[#d4a574] hover:bg-[#c49464] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-7 h-7 text-[#1a1a2e]" />
            </button>

            {/* 3D Carousel track */}
            <div
              ref={carouselRef}
              className="relative flex items-center justify-center h-[600px] overflow-hidden"
              style={{ perspective: '1200px' }}
            >
              {exhibitions.map((exhibition, index) => {
                // Calculate position relative to active card with wrapping for infinite carousel
                const totalCards = exhibitions.length;
                let offset = index - activeIndex;

                // Wrap offset for infinite effect
                if (offset > totalCards / 2) {
                  offset -= totalCards;
                } else if (offset < -totalCards / 2) {
                  offset += totalCards;
                }

                const absOffset = Math.abs(offset);

                // Cards visibility (show 5 cards: -2, -1, 0, 1, 2)
                const isVisible = absOffset <= 2;

                if (!isVisible) return null;

                // Calculate 3D transforms for arc effect - increased spacing to avoid overlap
                const translateX = offset * 400; // Increased horizontal spacing for no touching
                const translateZ = -absOffset * 200; // Increased depth
                const rotateY = offset * -18; // Reduced rotation for cleaner look
                const scale = 1 - absOffset * 0.15; // Slightly more aggressive scaling for depth
                const opacity = 1 - absOffset * 0.2;
                const zIndex = 10 - absOffset;

                return (
                  <div
                    key={exhibition.id}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                    onClick={() => goToCard(index)}
                  >
                    <ExhibitionCard
                      exhibition={exhibition}
                      isFlipped={flippedCards[exhibition.id]}
                      onFlip={() => toggleFlip(exhibition.id)}
                      isFavorite={isFavorite(exhibition.id)}
                      onFavoriteClick={(e) => handleFavoriteClick(e, exhibition.id)}
                      isActive={index === activeIndex}
                      onSelect={() => {
                        if (index === activeIndex) {
                          setSelectedExhibition(
                            selectedExhibition === exhibition.id ? null : exhibition.id
                          );
                        }
                      }}
                      onNavigate={() => navigate('/explore')}
                    />
                  </div>
                );
              })}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {exhibitions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${index === activeIndex
                      ? 'w-8 bg-[#d4a574]'
                      : 'bg-gray-600 hover:bg-gray-500'
                    }
                  `}
                />
              ))}
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
const BentoCard = ({ museum, size = 'small', badges = [], distanceInfo, onClick, showCTA = false, isSelected = false }) => {
  const DistanceIcon = distanceInfo?.icon || MapPin;

  return (
    <div
      className={`
        relative w-full h-full rounded-2xl xl:rounded-3xl overflow-hidden group cursor-pointer shadow-xl
        transition-all duration-300 ease-out
        ${isSelected ? 'ring-4 ring-[#d4a574] shadow-2xl shadow-[#d4a574]/30' : ''}
      `}
      onClick={onClick}
    >
      {/* Background image with hover zoom effect and click zoom */}
      <img
        src={museum.image}
        alt={museum.name}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-700 ease-out
          ${isSelected ? 'scale-110' : 'group-hover:scale-110'}
        `}
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
      <div className={`
        absolute inset-0 rounded-2xl xl:rounded-3xl
        border transition-all duration-500 pointer-events-none
        ${isSelected ? 'border-[#d4a574]/50' : 'border-white/0 group-hover:border-white/20'}
      `} />
    </div>
  );
};

/**
 * Exhibition Card Component with flip effect - LARGER cards with 3D carousel support
 * Front: Image, title, favorite heart
 * Back: Exhibition details
 */
const ExhibitionCard = ({
  exhibition,
  isFlipped,
  onFlip,
  isFavorite,
  onFavoriteClick,
  isActive,
  onSelect,
  onNavigate
}) => {
  return (
    <div
      className={`
        w-[380px] h-[520px] cursor-pointer
        transition-all duration-500 ease-out
        ${isActive ? 'shadow-2xl' : ''}
      `}
      style={{ perspective: '1200px' }}
      onClick={onSelect}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-700 ease-out
          ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
        `}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className={`
            absolute inset-0 rounded-3xl overflow-hidden
            transition-all duration-500
            ${isActive
              ? 'shadow-2xl'
              : 'shadow-xl'
            }
          `}
          style={{ backfaceVisibility: 'hidden' }}
          onClick={(e) => {
            e.stopPropagation();
            if (isActive) onFlip();
          }}
        >
          {/* Background image with zoom effect on active */}
          <img
            src={exhibition.image}
            alt={exhibition.name}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-transform duration-700 ease-out
              ${isActive ? 'scale-105' : ''}
            `}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top,
                rgba(0, 0, 0, 0.95) 0%,
                rgba(0, 0, 0, 0.7) 30%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0.1) 80%,
                transparent 100%)`
            }}
          />

          {/* Favorite button - top right */}
          <button
            onClick={onFavoriteClick}
            className={`
              absolute top-5 right-5 z-10 p-3.5 rounded-full
              backdrop-blur-md shadow-lg
              transition-all duration-300
              ${isFavorite
                ? 'bg-red-500/90 text-white scale-110'
                : 'bg-white/20 text-white hover:bg-white/30 hover:scale-110'
              }
            `}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Éphémère badge - top left */}
          <div className="absolute top-5 left-5">
            <span className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-red-500/90 text-white backdrop-blur-md shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Éphémère
            </span>
          </div>

          {/* Content - bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-bold text-white text-2xl leading-tight mb-3 line-clamp-2">
              {exhibition.name}
            </h3>
            <div className="flex items-center gap-2 text-white/80 text-base">
              <MapPin className="w-5 h-5" />
              <span className="truncate">{exhibition.location}</span>
            </div>
            <p className="text-[#d4a574] text-base mt-3 font-semibold">
              {exhibition.period}
            </p>

          </div>
        </div>

        {/* Back of card */}
        <div
          className={`
            absolute inset-0 rounded-3xl overflow-hidden
            border border-[#d4a574]/20
            ${isActive ? 'shadow-2xl' : 'shadow-xl'}
          `}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #1e1e38 0%, #151528 40%, #0f0f1a 100%)'
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (isActive) onFlip();
          }}
        >

          {/* Header with image */}
          <div className="relative h-36 overflow-hidden">
            <img
              src={exhibition.image}
              alt={exhibition.name}
              className="w-full h-full object-cover opacity-60"
            />
            {/* Enhanced gradient overlay for smoother transition */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom,
                  rgba(30, 30, 56, 0.3) 0%,
                  rgba(21, 21, 40, 0.6) 50%,
                  rgba(15, 15, 26, 0.95) 100%
                )`
              }}
            />

            {/* Back badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-[#d4a574]/90 text-[#1a1a2e] backdrop-blur-md shadow-lg">
                Détails
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 pt-0 -mt-4 relative pb-16">
            <h3 className="font-bold text-[#d4a574] text-lg leading-tight mb-2">
              {exhibition.name}
            </h3>

            <p className="text-gray-300 text-xs mb-3 line-clamp-2 leading-relaxed">
              {exhibition.description}
            </p>

            {/* Info grid */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-[#d4a574]/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#d4a574]" />
                </div>
                <span className="truncate text-xs">{exhibition.location}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-[#d4a574]/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-[#d4a574]" />
                </div>
                <span className="text-xs">{exhibition.period}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-[#d4a574]/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#d4a574]" />
                </div>
                <span className="text-xs">{exhibition.hours}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-[#d4a574]/20 flex items-center justify-center">
                  <Euro className="w-4 h-4 text-[#d4a574]" />
                </div>
                <span className="font-bold text-[#d4a574]">{exhibition.price}</span>
              </div>
            </div>
          </div>

          {/* Navigation button */}
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate();
              }}
              className="w-full py-3 bg-[#d4a574] hover:bg-[#c49464] text-[#1a1a2e] font-bold rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Explorer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
