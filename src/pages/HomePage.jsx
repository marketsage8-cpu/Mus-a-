import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Zap, MapPin, Clock, Footprints, Car, Heart, ChevronLeft, ChevronRight, Calendar, Euro, X, Landmark, Castle, Palette } from 'lucide-react';
import { places } from '../data/places';
import InteractiveMap from '../components/map/InteractiveMap';
import { useUser } from '../context/UserContext';
import CabinetBackground from '../components/backgrounds/CabinetBackground';
import ChateauBackground from '../components/backgrounds/ChateauBackground';
import ExpositionBackground from '../components/backgrounds/ExpositionBackground';

/**
 * Page d'accueil avec hero, carte floue et section Musea Now
 */
const HomePage = () => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [selectedBentoCard, setSelectedBentoCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('musée'); // 'musée', 'château', 'exposition'

  // Catégories pour Muzea Now
  const categories = [
    { id: 'musée', label: 'Musées', icon: Landmark },
    { id: 'château', label: 'Châteaux', icon: Castle },
    { id: 'exposition', label: 'Expositions', icon: Palette }
  ];

  // Expositions éphémères (filtrer par type "exposition")
  const allExhibitions = places.filter(p => p.type === 'exposition');

  // Filtres pour les expositions
  const [exhibitionDistanceFilter, setExhibitionDistanceFilter] = useState('all'); // 'all', '500m', '5km', '10km'
  const [exhibitionCityFilter, setExhibitionCityFilter] = useState('all');

  // Extraire les villes uniques des expositions
  const exhibitionCities = [...new Set(allExhibitions.map(e => {
    // Extraire la ville de la location (généralement après la virgule)
    const parts = e.location.split(',');
    return parts.length > 1 ? parts[parts.length - 1].trim() : parts[0].trim();
  }))].sort();

  // Filtrer les expositions selon les critères
  const exhibitions = allExhibitions.filter(exhibition => {
    // Filtre par ville
    if (exhibitionCityFilter !== 'all') {
      const exhibitionCity = exhibition.location.split(',').pop().trim();
      if (exhibitionCity !== exhibitionCityFilter) return false;
    }

    // Filtre par distance (nécessite la géolocalisation)
    if (exhibitionDistanceFilter !== 'all' && userLocation) {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        exhibition.coordinates.lat,
        exhibition.coordinates.lng
      );
      const maxDistance = exhibitionDistanceFilter === '500m' ? 0.5
        : exhibitionDistanceFilter === '5km' ? 5
        : exhibitionDistanceFilter === '10km' ? 10
        : Infinity;
      if (distance > maxDistance) return false;
    }

    return true;
  });

  // Carousel 3D state
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const carouselRef = useRef(null);

  // Réinitialiser l'index du carousel quand les filtres changent
  useEffect(() => {
    setActiveIndex(0);
    setFlippedCards({});
  }, [exhibitionDistanceFilter, exhibitionCityFilter]);

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

  // Calculate nearby places when location or category changes
  useEffect(() => {
    if (userLocation) {
      const placesWithDistance = places
        .filter(p => p.type === activeCategory)
        .map(place => ({
          ...place,
          distance: calculateDistance(
            userLocation.lat,
            userLocation.lng,
            place.coordinates.lat,
            place.coordinates.lng
          )
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3);

      setNearbyPlaces(placesWithDistance);
    }
  }, [userLocation, activeCategory]);

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
    <div className="animate-fade-in relative">
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background image - Art coloré et vibrant */}
        <div className="absolute inset-0">
          <img
            src="/images/home-background.png"
            alt="Illustration élégante d'œuvres d'art classiques"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay - effet "bavure" fluide depuis la navbar bleu marine (style Culturio) */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom,
                #1a2640 0%,
                #1a2640 6%,
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
                #243350 100%)`
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
              <div className="absolute inset-0 bg-[#243350]/20" />

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
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background dynamique selon la catégorie - z-index 0 */}
        <div className="absolute inset-0 z-0 bg-[#2a3d5c]" />
        {activeCategory === 'musée' && <CabinetBackground />}
        {activeCategory === 'château' && <ChateauBackground />}
        {activeCategory === 'exposition' && <ExpositionBackground />}
        {/* Overlay très léger pour mieux voir les motifs - z-index 2 */}
        <div className="absolute inset-0 z-[2] bg-[#2a3d5c]/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-[5]">
          {/* Section header - Muzea Now centered layout */}
          {/* Container avec fond semi-transparent pour contraste avec les motifs dorés */}
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 -mx-4 sm:-mx-8 -my-4 bg-[#1a2640]/50 backdrop-blur-sm rounded-3xl" />
            <div className="relative py-4">
              {/* Muzea now - avec encadrement stylé */}
              <div className="inline-flex items-center justify-center mb-4">
                <div className="relative px-6 py-2">
                  {/* Fond avec dégradé subtil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4a574]/30 via-[#d4a574]/20 to-[#d4a574]/30 rounded-lg" />
                  {/* Bordure avec angles stylés */}
                  <div className="absolute inset-0 border border-[#d4a574]/60 rounded-lg" />
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
              <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mb-8">
                3 propositions optimales basées sur votre position et l'heure actuelle
              </p>

              {/* Tabs de catégories */}
              <div className="flex justify-center gap-2 sm:gap-4">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`
                        flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full
                        font-medium text-sm sm:text-base
                        transition-all duration-300 ease-out
                        ${isActive
                          ? 'bg-[#d4a574] text-[#243350] shadow-lg shadow-[#d4a574]/30 scale-105'
                          : 'bg-[#243350]/80 text-white/90 hover:bg-[#243350] hover:text-white border border-white/30 backdrop-blur-sm'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">{cat.label}</span>
                      <span className="sm:hidden">{cat.label.slice(0, 3)}.</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bento Box Grid: 65% left, 35% right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 mt-8">
            {/* Large card - left side (spans 7 columns ~60%) */}
            {nearbyPlaces[0] && (
              <div
                className={`lg:col-span-7 h-[380px] lg:h-[420px] transition-transform duration-300 ${
                  selectedBentoCard === 0 ? 'scale-[1.02] z-10' : ''
                }`}
              >
                <BentoCard
                  museum={nearbyPlaces[0]}
                  size="large"
                  distanceInfo={getDistanceText(nearbyPlaces[0].distance)}
                  onClick={() => handleBentoClick(0)}
                  showCTA={true}
                  isSelected={selectedBentoCard === 0}
                />
              </div>
            )}

            {/* Right side - 2 smaller cards stacked */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {nearbyPlaces[1] && (
                <div
                  className={`h-[200px] lg:h-[200px] transition-transform duration-300 ${
                    selectedBentoCard === 1 ? 'scale-[1.02] z-10' : ''
                  }`}
                >
                  <BentoCard
                    museum={nearbyPlaces[1]}
                    size="small"
                    distanceInfo={getDistanceText(nearbyPlaces[1].distance)}
                    onClick={() => handleBentoClick(1)}
                    isSelected={selectedBentoCard === 1}
                  />
                </div>
              )}
              {nearbyPlaces[2] && (
                <div
                  className={`h-[200px] lg:h-[200px] transition-transform duration-300 ${
                    selectedBentoCard === 2 ? 'scale-[1.02] z-10' : ''
                  }`}
                >
                  <BentoCard
                    museum={nearbyPlaces[2]}
                    size="small"
                    distanceInfo={getDistanceText(nearbyPlaces[2].distance)}
                    onClick={() => handleBentoClick(2)}
                    isSelected={selectedBentoCard === 2}
                  />
                </div>
              )}
            </div>

            {/* Message si pas de résultats */}
            {nearbyPlaces.length === 0 && (
              <div className="lg:col-span-12 text-center py-16">
                <p className="text-gray-400 text-lg">
                  Aucun {activeCategory === 'musée' ? 'musée' : activeCategory === 'château' ? 'château' : 'exposition'} trouvé à proximité.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: EXPOSITIONS ÉPHÉMÈRES
          ============================================ */}
      <section className="relative py-20 px-4" style={{ backgroundColor: 'rgba(15, 15, 26, 0.9)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
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
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-6">
              Cliquez sur une carte pour découvrir les détails de l'exposition
            </p>

            {/* Filtres d'expositions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              {/* Filtre par distance */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <span className="text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Distance :
                </span>
                {[
                  { id: 'all', label: 'Toutes' },
                  { id: '500m', label: '500m' },
                  { id: '5km', label: '5 km' },
                  { id: '10km', label: '10 km' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setExhibitionDistanceFilter(filter.id)}
                    className={`
                      px-3 py-1.5 rounded-full text-xs font-medium transition-all
                      ${exhibitionDistanceFilter === filter.id
                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      }
                    `}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Séparateur */}
              <div className="hidden sm:block w-px h-6 bg-gray-600" />

              {/* Filtre par ville */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Ville :</span>
                <select
                  value={exhibitionCityFilter}
                  onChange={(e) => setExhibitionCityFilter(e.target.value)}
                  className="
                    px-3 py-1.5 rounded-full text-xs font-medium
                    bg-white/10 text-gray-200 border border-white/20
                    focus:outline-none focus:ring-2 focus:ring-red-500/50
                    cursor-pointer
                  "
                >
                  <option value="all" className="bg-[#243350]">Toutes les villes</option>
                  {exhibitionCities.map((city) => (
                    <option key={city} value={city} className="bg-[#243350]">
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Compteur de résultats */}
            <p className="text-xs text-gray-500 mt-4">
              {exhibitions.length} exposition{exhibitions.length > 1 ? 's' : ''} trouvée{exhibitions.length > 1 ? 's' : ''}
              {exhibitionDistanceFilter !== 'all' && ` à moins de ${exhibitionDistanceFilter}`}
              {exhibitionCityFilter !== 'all' && ` à ${exhibitionCityFilter}`}
            </p>
          </div>

          {/* Carousel 3D container */}
          {exhibitions.length > 0 ? (
          <div className="relative py-16">
            {/* Navigation arrows */}
            <button
              onClick={() => navigateCarousel('left')}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-[#d4a574] hover:bg-[#c49464] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-7 h-7 text-[#243350]" />
            </button>
            <button
              onClick={() => navigateCarousel('right')}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-[#d4a574] hover:bg-[#c49464] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-7 h-7 text-[#243350]" />
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
          ) : (
            /* Message quand aucune exposition ne correspond aux filtres */
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Palette className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-xl text-white mb-3">Aucune exposition trouvée</h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Aucune exposition ne correspond à vos critères de recherche.
                {exhibitionDistanceFilter !== 'all' && !userLocation && (
                  <span className="block mt-2 text-red-400 text-sm">
                    Activez la géolocalisation pour filtrer par distance.
                  </span>
                )}
              </p>
              <button
                onClick={() => {
                  setExhibitionDistanceFilter('all');
                  setExhibitionCityFilter('all');
                }}
                className="px-6 py-3 bg-[#d4a574] hover:bg-[#c49464] text-[#243350] font-semibold rounded-xl transition-all"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

/**
 * Bento Card Component - Version simplifiée et sobre
 */
const BentoCard = ({ museum, size = 'small', distanceInfo, onClick, showCTA = false, isSelected = false }) => {
  const DistanceIcon = distanceInfo?.icon || MapPin;

  return (
    <div
      className={`
        relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer
        transition-all duration-300 ease-out
        ${isSelected ? 'ring-2 ring-[#d4a574]/50' : ''}
      `}
      onClick={onClick}
      style={{ zIndex: 10 }}
    >
      {/* Background image */}
      <img
        src={museum.image}
        alt={museum.name}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-105
        `}
      />

      {/* Gradient overlay simple */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.4) 40%,
            transparent 100%)`
        }}
      />

      {/* Content - bottom */}
      <div className={`absolute bottom-0 left-0 right-0 p-5 ${size === 'large' ? 'sm:p-6' : ''}`}>
        {/* Museum name */}
        <h3
          className={`
            font-semibold text-white leading-tight mb-2
            ${size === 'large' ? 'text-xl sm:text-2xl' : 'text-lg'}
          `}
        >
          {museum.name}
        </h3>

        {/* Distance simple */}
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <DistanceIcon className="w-4 h-4" />
          <span>{distanceInfo?.text || museum.location}</span>
        </div>

        {/* CTA Button - only for large card */}
        {showCTA && (
          <button
            className="
              mt-4 w-full py-3
              bg-[#d4a574] hover:bg-[#c49464]
              text-[#243350] font-semibold
              rounded-lg
              transition-colors
            "
          >
            Voir ce lieu
          </button>
        )}
      </div>
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
            background: 'linear-gradient(135deg, #1e1e38 0%, #151528 40%, #1a2640 100%)'
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
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-[#d4a574]/90 text-[#243350] backdrop-blur-md shadow-lg">
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
              className="w-full py-3 bg-[#d4a574] hover:bg-[#c49464] text-[#243350] font-bold rounded-xl transition-all duration-300 hover:scale-[1.02]"
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
