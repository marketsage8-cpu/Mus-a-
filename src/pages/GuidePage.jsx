import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Star, MapPin, Clock, ChevronRight, Globe, Award, Sparkles, BookOpen, Search, Calendar, CreditCard, Check } from 'lucide-react';

/**
 * Fonction de scroll fluide avec easing naturel - AMÉLIORÉE v2
 * @param {string} targetId - L'ID de l'élément cible
 * @param {number} duration - Durée de l'animation en ms (défaut: 600ms pour plus de réactivité)
 * @param {number} offset - Décalage depuis le haut (défaut: 120px pour bien voir la section)
 */
const smoothScrollTo = (targetId, duration = 600, offset = 120) => {
  const target = document.getElementById(targetId);
  if (!target) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  // Désactiver temporairement le scroll-behavior CSS pour éviter les conflits
  document.documentElement.style.scrollBehavior = 'auto';

  // Calculer la position exacte de l'élément
  const rect = target.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;

  // Ajuster l'offset en fonction de la section cible
  let adjustedOffset = offset;
  if (targetId === 'search-section') {
    adjustedOffset = 140; // Plus d'espace pour bien voir la barre de recherche
  } else if (targetId === 'guides') {
    adjustedOffset = 100; // Un peu moins pour les résultats
  }

  const targetPosition = absoluteTop - adjustedOffset;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  // Si déjà à la bonne position, juste focus l'input
  if (Math.abs(distance) < 15) {
    if (targetId === 'search-section') {
      const searchInput = target.querySelector('input[type="text"]');
      if (searchInput) searchInput.focus();
    }
    return;
  }

  let startTime = null;
  let animationId = null;

  // Easing function: easeOutQuart - plus fluide et naturel, sans blocage
  const easeOutQuart = (t) => {
    return 1 - Math.pow(1 - t, 4);
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeOutQuart(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (progress < 1) {
      animationId = requestAnimationFrame(animation);
    } else {
      // Réactiver le scroll-behavior CSS
      document.documentElement.style.scrollBehavior = '';

      // Focus sur l'input de recherche si on scroll vers la section recherche
      if (targetId === 'search-section') {
        const searchInput = target.querySelector('input[type="text"]');
        if (searchInput) {
          setTimeout(() => {
            searchInput.focus();
            // Ajouter une légère animation visuelle pour indiquer que c'est prêt
            searchInput.classList.add('search-focus-highlight');
            setTimeout(() => searchInput.classList.remove('search-focus-highlight'), 500);
          }, 50);
        }
      }
    }
  };

  // Annuler toute animation précédente
  if (animationId) cancelAnimationFrame(animationId);

  requestAnimationFrame(animation);
};

/**
 * Données fictives des guides avec lieux associés
 */
const guides = [
  {
    id: 1,
    name: 'Marie Dubois',
    specialty: "Histoire de l'Art",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    artImage: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=400&q=80',
    artTitle: 'Nymphéas - Monet',
    rating: 4.9,
    reviews: 127,
    languages: ['Français', 'Anglais'],
    price: 89,
    verified: true,
    locations: ['Musée du Louvre', 'Musée d\'Orsay', 'Orangerie']
  },
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    specialty: 'Art Contemporain',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    artImage: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80',
    artTitle: 'Picasso - Bleu et Rose',
    rating: 5.0,
    reviews: 89,
    languages: ['Français', 'Espagnol'],
    price: 95,
    verified: true,
    locations: ['Centre Pompidou', 'Musée Picasso', 'Fondation Louis Vuitton']
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    specialty: 'Renaissance & Classique',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    artImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
    artTitle: 'La Nuit Étoilée - Van Gogh',
    rating: 4.8,
    reviews: 156,
    languages: ['Français', 'Italien', 'Anglais'],
    price: 85,
    verified: true,
    locations: ['Musée du Louvre', 'Château de Versailles', 'Musée d\'Orsay']
  },
  {
    id: 4,
    name: 'Antoine Moreau',
    specialty: 'Impressionnisme',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    artImage: 'https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=400&q=80',
    artTitle: 'Les Nymphéas - Orangerie',
    rating: 4.7,
    reviews: 98,
    languages: ['Français', 'Allemand'],
    price: 80,
    verified: false,
    locations: ['Orangerie', 'Musée d\'Orsay', 'Musée Marmottan']
  },
  {
    id: 5,
    name: 'Claire Fontaine',
    specialty: 'Art Moderne',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    artImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80',
    artTitle: 'Galerie Art Moderne',
    rating: 4.9,
    reviews: 112,
    languages: ['Français', 'Anglais', 'Japonais'],
    price: 90,
    verified: true,
    locations: ['Centre Pompidou', 'Musée du Louvre', 'Palais de Tokyo']
  },
  {
    id: 6,
    name: 'Lucas Bernard',
    specialty: 'Patrimoine Français',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    artImage: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80',
    artTitle: 'Égypte des Pharaons',
    rating: 4.8,
    reviews: 134,
    languages: ['Français', 'Anglais'],
    price: 88,
    verified: true,
    locations: ['Musée du Louvre', 'Château de Versailles', 'Château de Fontainebleau']
  }
];

// Fonction pour normaliser le texte (enlever accents)
const normalizeText = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae');
};

/**
 * Page Guides - Style HomePage
 */
// Liste des lieux disponibles pour l'autocomplete
const allLocations = [
  'Musée du Louvre',
  'Musée d\'Orsay',
  'Centre Pompidou',
  'Château de Versailles',
  'Orangerie',
  'Musée Picasso',
  'Fondation Louis Vuitton',
  'Palais de Tokyo',
  'Musée Marmottan',
  'Château de Fontainebleau'
];

const GuidePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGuides, setFilteredGuides] = useState(guides);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Filtre créneau horaire
  const [selectedTime, setSelectedTime] = useState('');

  // Système de réservation
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [reservationStep, setReservationStep] = useState(1); // 1: date/heure, 2: confirmation, 3: paiement
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  // Créneaux horaires disponibles
  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  // Ouvrir le modal de réservation
  const openReservation = (guide) => {
    setSelectedGuide(guide);
    setReservationStep(1);
    setReservationDate('');
    setReservationTime('');
    setNumberOfPersons(1);
    setShowReservationModal(true);
  };

  // Fermer le modal
  const closeReservation = () => {
    setShowReservationModal(false);
    setSelectedGuide(null);
  };

  // Passer à l'étape suivante
  const nextStep = () => {
    if (reservationStep < 3) {
      setReservationStep(reservationStep + 1);
    }
  };

  // Confirmer la réservation
  const confirmReservation = () => {
    // Ici on pourrait envoyer à un backend
    alert(`Réservation confirmée avec ${selectedGuide.name} le ${reservationDate} à ${reservationTime} pour ${numberOfPersons} personne(s)`);
    closeReservation();
  };

  // Rechercher les lieux correspondants pour l'autocomplete
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const query = normalizeText(searchQuery);

    // Trouver les lieux qui correspondent
    const matchingLocations = allLocations.filter(loc =>
      normalizeText(loc).includes(query)
    );

    // Trouver les guides qui correspondent
    const matchingGuides = guides.filter(guide => {
      const matchesLocation = guide.locations.some(loc =>
        normalizeText(loc).includes(query)
      );
      const matchesSpecialty = normalizeText(guide.specialty).includes(query);
      const matchesName = normalizeText(guide.name).includes(query);
      return matchesLocation || matchesSpecialty || matchesName;
    });

    // Combiner les résultats
    const results = [
      ...matchingLocations.map(loc => ({ type: 'location', name: loc, icon: 'MapPin' })),
      ...matchingGuides.map(g => ({ type: 'guide', name: g.name, specialty: g.specialty, icon: 'Users' }))
    ].slice(0, 6); // Max 6 résultats

    setSearchResults(results);
    setShowDropdown(results.length > 0);
  }, [searchQuery]);

  // Filtrer les guides en fonction de la recherche
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredGuides(guides);
      return;
    }

    const query = normalizeText(searchQuery);
    const filtered = guides.filter(guide => {
      const matchesLocation = guide.locations.some(loc =>
        normalizeText(loc).includes(query)
      );
      const matchesSpecialty = normalizeText(guide.specialty).includes(query);
      const matchesName = normalizeText(guide.name).includes(query);
      const matchesArt = normalizeText(guide.artTitle).includes(query);

      return matchesLocation || matchesSpecialty || matchesName || matchesArt;
    });

    setFilteredGuides(filtered);
  }, [searchQuery]);

  // Fonction de recherche et scroll
  const handleSearch = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    // Scroll vers les résultats avec un petit délai pour laisser les filtres s'appliquer
    setTimeout(() => smoothScrollTo('guides'), 150);
  };

  // Sélectionner un résultat de l'autocomplete
  const handleResultClick = (result) => {
    setSearchQuery(result.name);
    setShowDropdown(false);
    setTimeout(() => smoothScrollTo('guides'), 150);
  };

  // Cliquer sur une suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowDropdown(false);
    setTimeout(() => smoothScrollTo('guides'), 150);
  };

  // Observer pour les animations au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '-10% 0px', threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white overflow-x-hidden">
      {/* Hero Section - Style HomePage avec image de fond à GAUCHE */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        {/* Image de fond - prend 70% côté GAUCHE */}
        <div
          className="absolute top-0 left-0 w-[70%] h-full bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=1600&q=80')`
          }}
        />

        {/* Dégradé de transition intense - fondu progressif vers la DROITE */}
        <div className="absolute top-0 left-[20%] w-[55%] h-full bg-gradient-to-l from-[#0c0c0c] via-[#0c0c0c] to-transparent z-10 hidden md:block" />

        {/* Contenu texte à DROITE */}
        <div className="pr-8 md:pr-16 lg:pr-24 pl-6 w-full relative z-20 md:ml-auto md:w-[55%]">
          <div className="max-w-xl md:ml-auto">
            <div className="animate-on-scroll opacity-0 translate-y-[20px] inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-8">
              <span className="w-2 h-2 bg-[#e07a5f] rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Guides certifiés & passionnés</span>
            </div>

            <h1 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
              Vivez l'Art avec<br />
              <em className="text-[#e07a5f] font-normal">nos Experts</em>
            </h1>

            <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/60 text-lg md:text-xl max-w-lg mb-6 font-light leading-relaxed" style={{ transitionDelay: '200ms' }}>
              Découvrez les plus grands musées accompagné par des conférenciers d'exception. Des visites privées et personnalisées.
            </p>

            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4 mb-10 text-sm text-white/50" style={{ transitionDelay: '300ms' }}>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#e07a5f]" />
                Guides certifiés
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#e07a5f]" />
                Multilingue
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#e07a5f]" />
                4.9/5 en moyenne
              </span>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4" style={{ transitionDelay: '400ms' }}>
              <button
                onClick={() => smoothScrollTo('search-section')}
                className="px-8 py-4 bg-[#e07a5f] text-[#0c0c0c] font-medium rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-lg shadow-[#e07a5f]/20"
              >
                Trouver un guide
              </button>
              <button
                onClick={() => smoothScrollTo('decouvrir', 600, 200)}
                className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all"
              >
                Découvrir
              </button>
            </div>

            {/* Stats */}
            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex gap-8 mt-12 pt-8 border-t border-white/10" style={{ transitionDelay: '500ms' }}>
              <div>
                <div className="text-3xl font-serif text-[#e07a5f]">150+</div>
                <div className="text-sm text-white/40">Guides experts</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#e07a5f]">4.9</div>
                <div className="text-sm text-white/40">Note moyenne</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#e07a5f]">12k+</div>
                <div className="text-sm text-white/40">Visites guidées</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-20">
          <span className="text-xs tracking-widest">DÉFILER</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Section 01 - Recherche de guide */}
      <section id="decouvrir" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-[20px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Trouvez votre guide</span>
            <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-6" style={{ transitionDelay: '100ms' }}>
              Réservez votre<br />
              <em className="text-[#e07a5f]">visite guidée</em>
            </h2>
            <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/50 max-w-2xl mx-auto" style={{ transitionDelay: '150ms' }}>
              Sélectionnez un musée et trouvez le guide parfait pour une expérience culturelle inoubliable
            </p>
          </div>

          {/* Barre de recherche */}
          <div id="search-section" className="animate-on-scroll opacity-0 translate-y-[30px] max-w-2xl mx-auto mb-16" style={{ transitionDelay: '200ms' }}>
            <form onSubmit={handleSearch} className="relative">
              <div className={`flex items-center bg-white/[0.05] border border-white/[0.15] ${showDropdown ? 'rounded-t-3xl rounded-b-none border-b-0' : 'rounded-full'} overflow-hidden hover:border-[#e07a5f]/50 transition-all focus-within:border-[#e07a5f] focus-within:bg-white/[0.08]`}>
                <div className="pl-5">
                  <Search className="w-5 h-5 text-white/40" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
                  placeholder="Rechercher un musée, château, exposition..."
                  className="flex-1 bg-transparent px-4 py-4 text-white placeholder-white/40 outline-none text-base"
                />
                <button
                  type="submit"
                  className="px-6 py-3 m-1 bg-[#e07a5f] text-[#0c0c0c] font-medium rounded-full hover:bg-[#e8968a] transition-all"
                >
                  Rechercher
                </button>
              </div>

              {/* Dropdown avec résultats */}
              {showDropdown && searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full bg-[#1a1a1a] border border-white/[0.15] border-t-0 rounded-b-2xl overflow-hidden z-50 shadow-xl">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleResultClick(result)}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-white/[0.05] transition-colors text-left border-b border-white/[0.05] last:border-b-0"
                    >
                      {result.type === 'location' ? (
                        <MapPin className="w-4 h-4 text-[#e07a5f]" />
                      ) : (
                        <Users className="w-4 h-4 text-[#e07a5f]" />
                      )}
                      <div className="flex-1">
                        <div className="text-white text-sm">{result.name}</div>
                        {result.type === 'guide' && result.specialty && (
                          <div className="text-white/40 text-xs">{result.specialty}</div>
                        )}
                        {result.type === 'location' && (
                          <div className="text-white/40 text-xs">Lieu culturel</div>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30" />
                    </button>
                  ))}
                </div>
              )}
            </form>

            {/* Fermer dropdown si clic ailleurs */}
            {showDropdown && (
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowDropdown(false)}
              />
            )}

            {/* Suggestions */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['Musée du Louvre', 'Château de Versailles', 'Musée d\'Orsay', 'Centre Pompidou'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-3 py-1.5 text-sm bg-white/[0.03] border border-white/[0.1] rounded-full text-white/50 hover:text-white hover:border-[#e07a5f]/50 transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>

          </div>

          {/* Étapes - masquées lors de la recherche */}
          <div
            className={`grid md:grid-cols-3 gap-8 transition-all duration-500 ease-out overflow-hidden ${
              searchQuery.trim()
                ? 'max-h-0 opacity-0 mt-0'
                : 'max-h-[600px] opacity-100'
            }`}
          >
            {[
              {
                icon: MapPin,
                title: "Choisissez",
                desc: "Sélectionnez le musée ou monument que vous souhaitez visiter",
                delay: '300ms'
              },
              {
                icon: Users,
                title: "Réservez",
                desc: "Trouvez le guide idéal et réservez votre créneau en quelques clics",
                delay: '400ms'
              },
              {
                icon: Sparkles,
                title: "Profitez",
                desc: "Vivez une expérience culturelle unique et enrichissante",
                delay: '500ms'
              }
            ].map((step, i) => (
              <div
                key={i}
                className="animate-on-scroll opacity-0 translate-y-[30px] text-center p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:border-[#e07a5f]/30 transition-all"
                style={{ transitionDelay: step.delay }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <step.icon className="w-7 h-7 text-[#e07a5f]" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                <p className="text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02 - Nos guides */}
      <section id="guides" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0f0f0f] to-[#0c0c0c]" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-[20px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Nos experts</span>
            <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-6" style={{ transitionDelay: '100ms' }}>
              {searchQuery ? (
                <>Guides pour<br /><em className="text-[#e07a5f]">"{searchQuery}"</em></>
              ) : (
                <>Guides<br /><em className="text-[#e07a5f]">passionnés</em></>
              )}
            </h2>
            {searchQuery && (
              <p className="text-white/50">
                {filteredGuides.length} guide{filteredGuides.length > 1 ? 's' : ''} trouvé{filteredGuides.length > 1 ? 's' : ''}
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-3 text-[#e07a5f] hover:underline"
                >
                  Effacer la recherche
                </button>
              </p>
            )}
          </div>

          {/* Filtre créneau horaire */}
          <div className="flex justify-center gap-3 mb-10">
            {['Matin', 'Après-midi', 'Soir'].map((creneau) => (
              <button
                key={creneau}
                onClick={() => setSelectedTime(selectedTime === creneau.toLowerCase() ? '' : creneau.toLowerCase())}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  selectedTime === creneau.toLowerCase()
                    ? 'bg-[#e07a5f] text-[#0c0c0c] font-medium'
                    : 'bg-white/[0.05] text-white/60 border border-white/[0.1] hover:border-[#e07a5f]/30'
                }`}
              >
                {creneau}
              </button>
            ))}
          </div>

          {filteredGuides.length > 0 ? (
          <div
            key={searchQuery || 'all'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-results-fade-in"
          >
            {filteredGuides.map((guide, i) => (
              <div
                key={guide.id}
                className="guide-card-appear group bg-white/[0.02] border border-white/[0.08] rounded-2xl hover:border-[#e07a5f]/30 transition-all overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Image artistique */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={guide.artImage}
                    alt={guide.artTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-xs text-white/60 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                    {guide.artTitle}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={guide.image}
                        alt={guide.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#e07a5f]/30"
                      />
                      {guide.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#e07a5f] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#0c0c0c]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white group-hover:text-[#e07a5f] transition-colors">{guide.name}</h4>
                      <p className="text-[#e07a5f] text-sm italic">{guide.specialty}</p>
                      <div className="flex items-center gap-1 text-[#e07a5f] text-sm mt-1">
                        <Star className="w-3 h-3 fill-current" />
                        {guide.rating}
                        <span className="text-white/40 ml-1">({guide.reviews} avis)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
                    <Globe className="w-4 h-4" />
                    <span>{guide.languages.join(', ')}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                    <div>
                      <span className="text-2xl font-bold text-[#e07a5f]">{guide.price}€</span>
                      <span className="text-white/40 text-sm"> / personne</span>
                    </div>
                    <button
                      onClick={() => openReservation(guide)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#e07a5f] text-[#0c0c0c] font-medium rounded-full hover:bg-[#e8968a] transition-all text-sm shadow-lg shadow-[#e07a5f]/20"
                    >
                      Réserver
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/[0.05] flex items-center justify-center">
                <Search className="w-8 h-8 text-white/30" />
              </div>
              <h3 className="font-serif text-2xl text-white/70 mb-3">Aucun guide trouvé</h3>
              <p className="text-white/40 mb-6">
                Aucun guide ne correspond à "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-[#e07a5f]/10 text-[#e07a5f] rounded-full hover:bg-[#e07a5f]/20 transition-all"
              >
                Voir tous les guides
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 03 - Avantages */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenu texte */}
            <div>
              <span className="animate-on-scroll opacity-0 translate-y-[20px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Pourquoi nous choisir</span>
              <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-8" style={{ transitionDelay: '100ms' }}>
                Une expérience<br />
                <em className="text-[#e07a5f]">inoubliable</em>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Guides certifiés",
                    desc: "Tous nos guides sont des conférenciers diplômés et passionnés"
                  },
                  {
                    icon: Clock,
                    title: "Flexibilité totale",
                    desc: "Choisissez votre horaire et la durée de votre visite"
                  },
                  {
                    icon: BookOpen,
                    title: "Contenu personnalisé",
                    desc: "Visites adaptées à vos centres d'intérêt et votre niveau"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="animate-on-scroll opacity-0 translate-y-[20px] flex gap-4"
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#e07a5f]/10 flex items-center justify-center flex-shrink-0 border border-[#e07a5f]/20">
                      <item.icon className="w-5 h-5 text-[#e07a5f]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] grid grid-cols-2 gap-6" style={{ transitionDelay: '300ms' }}>
              {[
                { value: "150+", label: "Guides experts" },
                { value: "50k+", label: "Visites réalisées" },
                { value: "4.9/5", label: "Note moyenne" },
                { value: "98%", label: "Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                  <div className="text-3xl md:text-4xl font-serif text-[#e07a5f] mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e07a5f]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-6">
            Prêt pour une visite<br />
            <em className="text-[#e07a5f]">extraordinaire ?</em>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/55 text-lg mb-6 max-w-xl mx-auto" style={{ transitionDelay: '100ms' }}>
            Réservez dès maintenant et vivez l'art comme jamais avec nos guides passionnés.
          </p>
          <p className="animate-on-scroll opacity-0 translate-y-[30px] text-[#e07a5f]/80 text-sm tracking-widest uppercase" style={{ transitionDelay: '200ms' }}>
            muzea vous accompagne dans votre exploration culturelle
          </p>
        </div>
      </section>

      {/* Modal de réservation */}
      {showReservationModal && selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeReservation}
          />

          {/* Modal content */}
          <div className="relative bg-[#0c0c0c] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h3 className="text-xl font-serif text-white">
                  {reservationStep === 1 && 'Choisir la date et l\'heure'}
                  {reservationStep === 2 && 'Confirmer la réservation'}
                  {reservationStep === 3 && 'Paiement'}
                </h3>
                <p className="text-gray-400 text-sm mt-1">Étape {reservationStep}/3</p>
              </div>
              <button
                onClick={closeReservation}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Présentation détaillée du guide - AMÉLIORÉE */}
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border-b border-white/10">
              {/* Image artistique du guide avec overlay - Plus grande */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={selectedGuide.artImage}
                  alt={selectedGuide.artTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#e07a5f]" />
                    {selectedGuide.artTitle}
                  </span>
                  <span className="text-xs text-[#e07a5f] bg-[#e07a5f]/20 px-3 py-1.5 rounded-full backdrop-blur-sm border border-[#e07a5f]/30">
                    Expert {selectedGuide.specialty}
                  </span>
                </div>
              </div>

              {/* Infos du guide - Plus détaillées */}
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={selectedGuide.image}
                      alt={selectedGuide.name}
                      className="w-18 h-18 rounded-2xl object-cover border-2 border-[#e07a5f]/50 shadow-lg"
                      style={{ width: '72px', height: '72px' }}
                    />
                    {selectedGuide.verified && (
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#e07a5f] rounded-full flex items-center justify-center shadow-lg border-2 border-[#0c0c0c]">
                        <Check className="w-4 h-4 text-[#0c0c0c]" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-white text-xl">{selectedGuide.name}</h4>
                      {selectedGuide.verified && (
                        <span className="px-2 py-1 bg-[#e07a5f]/20 text-[#e07a5f] text-xs font-semibold rounded-lg border border-[#e07a5f]/30">
                          Guide Certifié
                        </span>
                      )}
                    </div>
                    <p className="text-[#e07a5f] text-base font-medium mt-1">{selectedGuide.specialty}</p>
                    <div className="flex items-center gap-4 mt-3 flex-wrap">
                      <div className="flex items-center gap-1.5 bg-[#e07a5f]/10 px-2.5 py-1 rounded-lg">
                        <Star className="w-4 h-4 fill-[#e07a5f] text-[#e07a5f]" />
                        <span className="font-bold text-[#e07a5f]">{selectedGuide.rating}</span>
                        <span className="text-white/50 text-sm">({selectedGuide.reviews} avis)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/60 text-sm">
                        <Globe className="w-4 h-4 text-[#e07a5f]" />
                        {selectedGuide.languages.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description du guide et son travail */}
                <div className="mt-5 p-4 bg-white/[0.03] rounded-xl border border-white/10">
                  <h5 className="text-white/80 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <BookOpen className="w-3 h-3 text-[#e07a5f]" />
                    À propos de ce guide
                  </h5>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Spécialiste en <span className="text-[#e07a5f] font-medium">{selectedGuide.specialty}</span>,
                    {selectedGuide.name.split(' ')[0]} vous fera découvrir les plus grandes œuvres avec passion et expertise.
                    Avec plus de <span className="text-white font-medium">{selectedGuide.reviews}</span> visites réalisées
                    et une note exceptionnelle de <span className="text-[#e07a5f] font-medium">{selectedGuide.rating}/5</span>,
                    vous êtes entre les mains d'un expert reconnu.
                  </p>
                </div>

                {/* Tarif - Plus visible */}
                <div className="mt-4 flex items-center justify-between p-4 bg-gradient-to-r from-[#e07a5f]/15 to-[#e07a5f]/5 border border-[#e07a5f]/30 rounded-xl">
                  <div>
                    <span className="text-white/60 text-xs uppercase tracking-wider">Tarif par personne</span>
                    <div className="text-3xl font-bold text-[#e07a5f]">{selectedGuide.price}€</div>
                  </div>
                  <div className="text-right">
                    <span className="text-white/60 text-xs uppercase tracking-wider">Durée moyenne</span>
                    <div className="text-white font-semibold text-lg">2h - 2h30</div>
                  </div>
                  <div className="text-right">
                    <span className="text-white/60 text-xs uppercase tracking-wider">Inclus</span>
                    <div className="text-white font-medium text-sm">Visite privée</div>
                  </div>
                </div>

                {/* Lieux couverts - Plus visible */}
                <div className="mt-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#e07a5f]" />
                    Lieux où {selectedGuide.name.split(' ')[0]} peut vous guider
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedGuide.locations.map((loc, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white/[0.08] text-white text-sm rounded-xl border border-white/15 flex items-center gap-2 hover:border-[#e07a5f]/30 transition-colors">
                        <MapPin className="w-3.5 h-3.5 text-[#e07a5f]" />
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu selon l'étape */}
            <div className="p-6">
              {/* Étape 1: Date et heure */}
              {reservationStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Date de visite</label>
                    <input
                      type="date"
                      value={reservationDate}
                      onChange={(e) => setReservationDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.15] rounded-xl text-white focus:outline-none focus:border-[#e07a5f] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Heure de visite</label>
                    <div className="grid grid-cols-4 gap-2">
                      {availableTimes.map(time => (
                        <button
                          key={time}
                          onClick={() => setReservationTime(time)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all ${
                            reservationTime === time
                              ? 'bg-[#e07a5f] text-[#0c0c0c] font-medium'
                              : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Nombre de personnes</label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setNumberOfPersons(Math.max(1, numberOfPersons - 1))}
                        className="w-10 h-10 rounded-full bg-white/[0.05] text-white hover:bg-white/[0.1] transition-colors"
                      >
                        -
                      </button>
                      <span className="text-2xl font-serif text-[#e07a5f] w-12 text-center">{numberOfPersons}</span>
                      <button
                        onClick={() => setNumberOfPersons(Math.min(10, numberOfPersons + 1))}
                        className="w-10 h-10 rounded-full bg-white/[0.05] text-white hover:bg-white/[0.1] transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={nextStep}
                    disabled={!reservationDate || !reservationTime}
                    className={`w-full py-4 rounded-xl font-medium transition-all ${
                      reservationDate && reservationTime
                        ? 'bg-[#e07a5f] text-[#0c0c0c] hover:bg-[#e8968a]'
                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    Continuer
                  </button>
                </div>
              )}

              {/* Étape 2: Confirmation */}
              {reservationStep === 2 && (
                <div className="space-y-6">
                  {/* Résumé de la réservation */}
                  <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10">
                    <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">Récapitulatif de votre réservation</h4>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                        <div className="w-10 h-10 rounded-full bg-[#e07a5f]/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-[#e07a5f]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white/50 text-xs">Guide</span>
                          <p className="text-white font-medium">{selectedGuide.name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                        <div className="w-10 h-10 rounded-full bg-[#e07a5f]/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-[#e07a5f]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white/50 text-xs">Date de visite</span>
                          <p className="text-white font-medium">{new Date(reservationDate).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                        <div className="w-10 h-10 rounded-full bg-[#e07a5f]/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-[#e07a5f]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white/50 text-xs">Heure de rendez-vous</span>
                          <p className="text-white font-medium">{reservationTime} (durée: 2h-2h30)</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#e07a5f]/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-[#e07a5f]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white/50 text-xs">Nombre de participants</span>
                          <p className="text-white font-medium">{numberOfPersons} personne{numberOfPersons > 1 ? 's' : ''}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prix total */}
                  <div className="p-4 bg-[#e07a5f]/10 border border-[#e07a5f]/30 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white/60 text-sm">{selectedGuide.price}€ x {numberOfPersons} personne{numberOfPersons > 1 ? 's' : ''}</span>
                        <p className="text-white/40 text-xs mt-1">Annulation gratuite jusqu'à 24h avant</p>
                      </div>
                      <div className="text-right">
                        <span className="text-white/50 text-xs">Total à payer</span>
                        <p className="text-3xl font-bold text-[#e07a5f]">{selectedGuide.price * numberOfPersons}€</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setReservationStep(1)}
                      className="flex-1 py-4 rounded-xl font-medium bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      Modifier
                    </button>
                    <button
                      onClick={nextStep}
                      className="flex-1 py-4 rounded-xl font-medium bg-[#e07a5f] text-[#0c0c0c] hover:bg-[#e8968a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e07a5f]/20"
                    >
                      <CreditCard className="w-4 h-4" />
                      Procéder au paiement
                    </button>
                  </div>
                </div>
              )}

              {/* Étape 3: Paiement */}
              {reservationStep === 3 && (
                <div className="space-y-6">
                  {/* En-tête paiement */}
                  <div className="p-4 bg-gradient-to-r from-[#e07a5f]/10 to-[#e07a5f]/5 border border-[#e07a5f]/20 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#e07a5f]/20 flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-[#e07a5f]" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Paiement sécurisé</p>
                          <p className="text-white/50 text-xs">Vos données sont protégées</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-white/50 text-xs">Total</span>
                        <p className="text-2xl font-bold text-[#e07a5f]">{selectedGuide.price * numberOfPersons}€</p>
                      </div>
                    </div>
                  </div>

                  {/* Mini résumé */}
                  <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5 flex items-center gap-3">
                    <img
                      src={selectedGuide.image}
                      alt={selectedGuide.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 text-xs">
                      <p className="text-white">{selectedGuide.name} - {selectedGuide.specialty}</p>
                      <p className="text-white/40">
                        {new Date(reservationDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} à {reservationTime} • {numberOfPersons} pers.
                      </p>
                    </div>
                  </div>

                  {/* Formulaire de paiement */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-xs mb-2 flex items-center gap-1.5">
                        <CreditCard className="w-3 h-3" />
                        Numéro de carte
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.15] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#e07a5f] focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/60 text-xs mb-2">Expiration</label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.15] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#e07a5f] focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.15] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#e07a5f] focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Boutons */}
                  <div className="space-y-3">
                    <button
                      onClick={confirmReservation}
                      className="w-full py-4 rounded-xl font-medium bg-[#e07a5f] text-[#0c0c0c] hover:bg-[#e8968a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e07a5f]/20"
                    >
                      <Check className="w-5 h-5" />
                      Confirmer et payer {selectedGuide.price * numberOfPersons}€
                    </button>
                    <button
                      onClick={() => setReservationStep(2)}
                      className="w-full py-3 rounded-xl text-sm text-white/50 hover:text-white transition-colors"
                    >
                      Retour au récapitulatif
                    </button>
                  </div>

                  {/* Sécurité */}
                  <div className="flex items-center justify-center gap-4 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1.5 text-white/30 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Paiement sécurisé SSL
                    </div>
                    <div className="flex items-center gap-1.5 text-white/30 text-xs">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Annulation gratuite 24h
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CSS pour les animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        .animate-on-scroll {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1 !important;
          transform: translateX(0) translateY(0) scale(1) !important;
        }

        /* Animation pour l'apparition des résultats filtrés */
        @keyframes resultsSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardPopIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-results-fade-in {
          animation: resultsSlideIn 0.4s ease-out forwards;
        }

        .guide-card-appear {
          opacity: 0;
          animation: cardPopIn 0.5s ease-out forwards;
        }

        /* Animation de highlight pour la barre de recherche */
        @keyframes searchHighlight {
          0% {
            box-shadow: 0 0 0 0 rgba(224, 122, 95, 0);
          }
          50% {
            box-shadow: 0 0 20px 4px rgba(224, 122, 95, 0.4);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(224, 122, 95, 0);
          }
        }

        .search-focus-highlight {
          animation: searchHighlight 0.5s ease-out;
        }

        /* Scroll fluide au niveau global */
        html {
          scroll-behavior: auto;
        }
      `}</style>
    </div>
  );
};

export default GuidePage;
