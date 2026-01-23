import { useState, useEffect } from 'react';
import { MapPin, Heart, ChevronLeft, ChevronRight, Bookmark, Sparkles } from 'lucide-react';

/**
 * Base de données des œuvres d'art pour la découverte
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
    funFact: "Monet a continué à peindre les Nymphéas même après avoir développé une cataracte."
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
    funFact: "Il existe plus de 25 copies originales en bronze du Penseur à travers le monde."
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
    funFact: "Personne ne sait avec certitude ce que tenaient ses bras disparus."
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
    funFact: "La mère de Napoléon apparaît au centre de la peinture, mais elle n'était pas présente à la cérémonie."
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
    funFact: "Géricault a étudié des cadavres à la morgue et construit un radeau grandeur nature dans son atelier."
  }
];

/**
 * Page Découverte - Version épurée avec grandes images
 */
const DailyArtPage = () => {
  const [currentArtwork, setCurrentArtwork] = useState(null);
  const [previousArtworks, setPreviousArtworks] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Déterminer l'œuvre basée sur la date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const artworkIndex = dayOfYear % artworks.length;
    setCurrentArtwork(artworks[artworkIndex]);

    // Générer les œuvres précédentes
    const previous = [];
    for (let i = 1; i <= 6; i++) {
      const prevIndex = (artworkIndex - i + artworks.length) % artworks.length;
      previous.push({
        ...artworks[prevIndex],
        daysAgo: i
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

  // Sélectionner une œuvre
  const selectArtwork = (artwork) => {
    setCurrentArtwork(artwork);
    setIsLiked(false);
    setIsSaved(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!currentArtwork) {
    return (
      <div className="min-h-screen pt-20 pb-24 flex items-center justify-center" style={{ backgroundColor: '#1e2a42' }}>
        <div className="flex items-center gap-3 text-[#d4a574]">
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span>Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8" style={{ backgroundColor: '#1e2a42' }}>
      {/* Fond avec blur de l'image */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-3xl scale-110"
          style={{ backgroundImage: `url(${currentArtwork.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2a42] via-[#1e2a42]/90 to-[#1e2a42]" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Titre simple */}
        <div className="text-center pt-4 pb-6">
          <h1 className="font-serif-italic text-3xl text-[#d4a574]">
            Découverte
          </h1>
        </div>

        {/* Layout principal - Image très grande */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Image principale - 2/3 de la largeur */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={currentArtwork.image}
                alt={currentArtwork.title}
                className="w-full h-[60vh] lg:h-[75vh] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Gradient overlay subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              {/* Navigation arrows */}
              <button
                onClick={() => navigateArtwork('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateArtwork('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Actions en haut */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                    isLiked ? 'bg-red-500/80 text-white' : 'bg-black/30 hover:bg-black/50 text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                    isSaved ? 'bg-[#d4a574]/80 text-[#1a2640]' : 'bg-black/30 hover:bg-black/50 text-white'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Style badge en bas à gauche */}
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  {currentArtwork.style}
                </span>
              </div>
            </div>
          </div>

          {/* Infos - 1/3 de la largeur */}
          <div className="lg:col-span-1 flex flex-col">
            {/* Titre et artiste */}
            <div className="mb-4">
              <h2 className="font-serif-italic text-2xl lg:text-3xl text-[#d4a574] leading-tight mb-2">
                {currentArtwork.title}
              </h2>
              <p className="text-white text-lg">
                {currentArtwork.artist}
                <span className="text-gray-500 text-base ml-2">
                  {currentArtwork.year < 0 ? `${Math.abs(currentArtwork.year)} av. J.-C.` : currentArtwork.year}
                </span>
              </p>
            </div>

            {/* Détails compacts */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg">{currentArtwork.medium}</span>
              <span className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg">{currentArtwork.dimensions}</span>
            </div>

            {/* Localisation */}
            <p className="text-gray-400 text-sm flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-[#d4a574]" />
              {currentArtwork.location}
            </p>

            {/* Description courte */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {currentArtwork.description}
            </p>

            {/* Fun fact */}
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              💡 {currentArtwork.funFact}
            </p>

            {/* Œuvres précédentes */}
            <div className="mt-auto">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Voir aussi</p>
              <div className="grid grid-cols-3 gap-2">
                {previousArtworks.slice(0, 3).map((artwork) => (
                  <button
                    key={artwork.id}
                    onClick={() => selectArtwork(artwork)}
                    className="relative aspect-square rounded-lg overflow-hidden group/thumb"
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Galerie horizontale des autres œuvres */}
        <div className="mt-8 pb-4">
          <p className="text-gray-500 text-sm mb-4">Autres œuvres</p>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {previousArtworks.map((artwork) => (
              <button
                key={artwork.id}
                onClick={() => selectArtwork(artwork)}
                className="group relative flex-shrink-0 w-36 h-48 rounded-xl overflow-hidden"
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-medium line-clamp-2">{artwork.title}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">{artwork.artist}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyArtPage;
