import { useState, useEffect, useRef } from 'react';
import { MapPin, Heart, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

/**
 * Base de données des œuvres d'art pour la découverte quotidienne
 */
const artworks = [
  {
    id: 1,
    title: "La Liberté guidant le peuple",
    artist: "Eugène Delacroix",
    year: 1830,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
    style: "Romantisme",
    medium: "Huile sur toile",
    dimensions: "260 × 325 cm",
    location: "Musée du Louvre, Paris",
    description: "Cette œuvre emblématique commémore les Trois Glorieuses, les journées révolutionnaires des 27, 28 et 29 juillet 1830 à Paris.",
    funFact: "Le tableau a été caché pendant plusieurs années car jugé trop subversif par les autorités."
  },
  {
    id: 2,
    title: "Les Nymphéas",
    artist: "Claude Monet",
    year: 1906,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    style: "Impressionnisme",
    medium: "Huile sur toile",
    dimensions: "89 × 93 cm",
    location: "Musée de l'Orangerie, Paris",
    description: "Les Nymphéas sont une série d'environ 250 peintures à l'huile réalisées par Monet dans son jardin de Giverny.",
    funFact: "Monet a continué à peindre les Nymphéas même après avoir développé une cataracte qui altérait sa vision des couleurs."
  },
  {
    id: 3,
    title: "Le Penseur",
    artist: "Auguste Rodin",
    year: 1880,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/The_Thinker%2C_Rodin.jpg",
    style: "Sculpture réaliste",
    medium: "Bronze",
    dimensions: "186 × 102 × 144 cm",
    location: "Musée Rodin, Paris",
    description: "Initialement nommé 'Le Poète', cette sculpture faisait partie d'une commande pour un portail monumental appelé 'La Porte de l'Enfer'.",
    funFact: "Il existe plus de 25 copies originales en bronze du Penseur dispersées dans les musées du monde entier."
  },
  {
    id: 4,
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    year: 1889,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    style: "Post-impressionnisme",
    medium: "Huile sur toile",
    dimensions: "73,7 × 92,1 cm",
    location: "MoMA, New York",
    description: "Peinte depuis la fenêtre de sa chambre à l'asile de Saint-Rémy-de-Provence, cette œuvre représente le village sous un ciel nocturne tourbillonnant.",
    funFact: "Van Gogh considérait cette peinture comme un échec, mais elle est aujourd'hui l'une des plus célèbres au monde."
  },
  {
    id: 5,
    title: "La Vénus de Milo",
    artist: "Artiste inconnu",
    year: -130,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Venus_de_Milo_Louvre_Ma399.jpg/800px-Venus_de_Milo_Louvre_Ma399.jpg",
    style: "Sculpture hellénistique",
    medium: "Marbre de Paros",
    dimensions: "202 cm de hauteur",
    location: "Musée du Louvre, Paris",
    description: "Découverte en 1820 sur l'île de Milos en Grèce, cette sculpture représente probablement Aphrodite, déesse de l'amour.",
    funFact: "Personne ne sait avec certitude ce que tenaient ses bras disparus - une pomme, un bouclier, ou peut-être un miroir."
  },
  {
    id: 6,
    title: "Le Sacre de Napoléon",
    artist: "Jacques-Louis David",
    year: 1807,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jacques-Louis_David%2C_The_Coronation_of_Napoleon.jpg/1280px-Jacques-Louis_David%2C_The_Coronation_of_Napoleon.jpg",
    style: "Néoclassicisme",
    medium: "Huile sur toile",
    dimensions: "621 × 979 cm",
    location: "Musée du Louvre, Paris",
    description: "Cette immense toile représente le couronnement de Napoléon Ier à Notre-Dame de Paris le 2 décembre 1804.",
    funFact: "La mère de Napoléon apparaît au centre de la peinture, mais elle n'était pas présente à la cérémonie - David l'a ajoutée sur demande de l'empereur."
  },
  {
    id: 7,
    title: "Le Radeau de la Méduse",
    artist: "Théodore Géricault",
    year: 1819,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
    style: "Romantisme",
    medium: "Huile sur toile",
    dimensions: "491 × 716 cm",
    location: "Musée du Louvre, Paris",
    description: "Cette œuvre monumentale dépeint le naufrage de la frégate Méduse en 1816 et les survivants du radeau.",
    funFact: "Géricault a étudié des cadavres à la morgue et construit un radeau grandeur nature dans son atelier pour plus de réalisme."
  }
];

/**
 * Calculer la date de publication pour une œuvre
 */
const getPublicationDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
};

/**
 * Page Découverte - Version épurée avec grandes images et carrousel de dates
 */
const DailyArtPage = () => {
  const [currentArtwork, setCurrentArtwork] = useState(null);
  const [previousArtworks, setPreviousArtworks] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);
  const carouselRef = useRef(null);

  // Déterminer l'œuvre basée sur la date (change à minuit)
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const artworkIndex = dayOfYear % artworks.length;
    setCurrentArtwork(artworks[artworkIndex]);
    setCurrentArtworkIndex(artworkIndex);

    // Générer les œuvres précédentes avec leurs dates de publication
    const previous = [];
    for (let i = 1; i <= artworks.length - 1; i++) {
      const prevIndex = (artworkIndex - i + artworks.length) % artworks.length;
      previous.push({
        ...artworks[prevIndex],
        daysAgo: i,
        publicationDate: getPublicationDate(i)
      });
    }
    setPreviousArtworks(previous);
  }, []);

  // Navigation entre les œuvres
  const navigateArtwork = (direction) => {
    const currentIndex = artworks.findIndex(a => a.id === currentArtwork.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    } else {
      newIndex = (currentIndex + 1) % artworks.length;
    }
    setCurrentArtwork(artworks[newIndex]);
    setIsLiked(false);
    setIsSaved(false);
  };

  // Sélectionner une œuvre depuis le carrousel
  const selectArtwork = (artwork) => {
    setCurrentArtwork(artwork);
    setIsLiked(false);
    setIsSaved(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll du carrousel
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 200;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!currentArtwork) {
    return (
      <div className="min-h-screen pt-20 pb-24 flex items-center justify-center" style={{ backgroundColor: '#1e2a42' }}>
        <div className="flex items-center gap-3 text-[#d4a574]">
          <div className="w-6 h-6 border-2 border-[#d4a574] border-t-transparent rounded-full animate-spin" />
          <span>Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-24 md:pb-8" style={{ backgroundColor: '#1e2a42' }}>
      {/* Fond avec blur de l'image */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-3xl scale-110"
          style={{ backgroundImage: `url(${currentArtwork.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2a42] via-[#1e2a42]/90 to-[#1e2a42]" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">
        {/* Titre simple */}
        <div className="text-center py-4">
          <h1 className="font-serif-italic text-2xl sm:text-3xl text-[#d4a574]">
            Découverte
          </h1>
          <p className="text-gray-500 text-xs mt-1">
            Nouvelle œuvre chaque jour à minuit
          </p>
        </div>

        {/* Image principale - TRÈS GRANDE */}
        <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={currentArtwork.image}
              alt={currentArtwork.title}
              className="w-full h-[50vh] sm:h-[65vh] lg:h-[75vh] object-contain bg-black/50 transition-transform duration-700"
            />

            {/* Navigation arrows */}
            <button
              onClick={() => navigateArtwork('prev')}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={() => navigateArtwork('next')}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Actions en haut */}
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2.5 rounded-full backdrop-blur-sm transition-all ${
                  isLiked ? 'bg-red-500/90 text-white' : 'bg-black/40 hover:bg-black/60 text-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2.5 rounded-full backdrop-blur-sm transition-all ${
                  isSaved ? 'bg-[#d4a574]/90 text-[#1a2640]' : 'bg-black/40 hover:bg-black/60 text-white'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Style badge */}
            <div className="absolute bottom-3 left-3">
              <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-full">
                {currentArtwork.style}
              </span>
            </div>
          </div>
        </div>

        {/* Infos compactes sous l'image */}
        <div className="max-w-3xl mx-auto px-4 mt-4">
          {/* Titre et artiste */}
          <div className="text-center mb-3">
            <h2 className="font-serif-italic text-xl sm:text-2xl text-[#d4a574] leading-tight">
              {currentArtwork.title}
            </h2>
            <p className="text-white text-sm sm:text-base mt-1">
              {currentArtwork.artist}
              <span className="text-gray-500 ml-2">
                {currentArtwork.year < 0 ? `${Math.abs(currentArtwork.year)} av. J.-C.` : currentArtwork.year}
              </span>
            </p>
          </div>

          {/* Détails en ligne */}
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            <span className="px-2.5 py-1 bg-white/5 text-gray-400 text-xs rounded-lg">{currentArtwork.medium}</span>
            <span className="px-2.5 py-1 bg-white/5 text-gray-400 text-xs rounded-lg">{currentArtwork.dimensions}</span>
          </div>

          {/* Localisation */}
          <p className="text-gray-500 text-xs text-center flex items-center justify-center gap-1 mb-4">
            <MapPin className="w-3 h-3 text-[#d4a574]" />
            {currentArtwork.location}
          </p>

          {/* Le point histoire - Fun fact mis en valeur */}
          <div className="bg-gradient-to-br from-[#d4a574]/10 to-[#d4a574]/5 border border-[#d4a574]/20 rounded-xl p-4 mb-6">
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "{currentArtwork.funFact}"
            </p>
          </div>
        </div>

        {/* Carrousel des œuvres précédentes avec dates de publication */}
        <div className="max-w-5xl mx-auto px-4 mt-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider">Archives</p>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="p-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="p-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Carrousel défilant */}
          <div
            ref={carouselRef}
            className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {previousArtworks.map((artwork) => (
              <button
                key={artwork.id}
                onClick={() => selectArtwork(artwork)}
                className="group relative flex-shrink-0 w-28 sm:w-32 rounded-xl overflow-hidden transition-transform hover:scale-105"
              >
                {/* Image carrée */}
                <div className="aspect-square relative">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Date de publication */}
                <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                  <p className="text-[#d4a574] text-xs font-semibold">
                    {artwork.publicationDate}
                  </p>
                  <p className="text-white text-[10px] line-clamp-1 mt-0.5 opacity-80">
                    {artwork.title}
                  </p>
                </div>

                {/* Hover effet */}
                <div className="absolute inset-0 bg-[#d4a574]/0 group-hover:bg-[#d4a574]/10 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CSS pour cacher la scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default DailyArtPage;
