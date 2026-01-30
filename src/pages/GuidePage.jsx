import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Star, MapPin, Clock, ChevronRight, Globe, Award, Sparkles, BookOpen, Search } from 'lucide-react';

/**
 * Fonction de scroll fluide et rapide avec easing naturel
 * @param {string} targetId - L'ID de l'élément cible
 * @param {number} duration - Durée de l'animation en ms (défaut: 700ms)
 */
const smoothScrollTo = (targetId, duration = 700) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - 80;
  let startTime = null;

  // Easing function: easeOutQuart - démarrage rapide, fin douce
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeOutQuart(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

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
    smoothScrollTo('guides', 700);
  };

  // Sélectionner un résultat de l'autocomplete
  const handleResultClick = (result) => {
    setSearchQuery(result.name);
    setShowDropdown(false);
    smoothScrollTo('guides', 700);
  };

  // Cliquer sur une suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowDropdown(false);
    smoothScrollTo('guides', 700);
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
                onClick={() => smoothScrollTo('search-section', 700)}
                className="px-8 py-4 bg-[#e07a5f] text-[#0c0c0c] font-medium rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-lg shadow-[#e07a5f]/20"
              >
                Trouver un guide
              </button>
              <button
                onClick={() => smoothScrollTo('decouvrir', 700)}
                className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all"
              >
                En savoir plus
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

          {/* Étapes */}
          <div className="grid md:grid-cols-3 gap-8">
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

          {filteredGuides.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide, i) => (
              <div
                key={guide.id}
                className="animate-on-scroll opacity-0 translate-y-[30px] group bg-white/[0.02] border border-white/[0.08] rounded-2xl hover:border-[#e07a5f]/30 transition-all overflow-hidden"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
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
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#e07a5f]/10 text-[#e07a5f] rounded-full hover:bg-[#e07a5f]/20 transition-colors text-sm">
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
          <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/55 text-lg mb-10 max-w-xl mx-auto" style={{ transitionDelay: '100ms' }}>
            Réservez dès maintenant et vivez l'art comme jamais avec nos guides passionnés.
          </p>
          <button
            onClick={() => smoothScrollTo('guides', 700)}
            className="animate-on-scroll opacity-0 translate-y-[30px] px-10 py-5 bg-[#e07a5f] text-[#0c0c0c] font-medium text-lg rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-xl shadow-[#e07a5f]/20"
            style={{ transitionDelay: '200ms' }}
          >
            Trouver mon guide
          </button>
        </div>
      </section>

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
      `}</style>
    </div>
  );
};

export default GuidePage;
