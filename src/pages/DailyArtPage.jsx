import { useState, useEffect } from 'react';
import { Calendar, Palette, Clock, MapPin, Heart, Share2, ChevronLeft, ChevronRight, Info, Bookmark, ExternalLink, Sparkles } from 'lucide-react';
import { useUser } from '../context/UserContext';

/**
 * Base de données des œuvres d'art pour l'oeuvre du jour
 * Images de haute qualité représentant les œuvres réelles
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
    description: "Cette œuvre emblématique commémore les Trois Glorieuses, les journées révolutionnaires des 27, 28 et 29 juillet 1830 à Paris. La figure allégorique de la Liberté, coiffée du bonnet phrygien et brandissant le drapeau tricolore, mène le peuple vers la victoire.",
    message: "Delacroix mêle ici l'allégorie et le réalisme pour créer une image puissante de la lutte pour la liberté. L'œuvre incarne l'idéal révolutionnaire et reste un symbole universel de résistance contre l'oppression.",
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
    description: "Les Nymphéas sont une série d'environ 250 peintures à l'huile réalisées par Monet dans son jardin de Giverny. Ces œuvres représentent son bassin aux nymphéas sous différentes conditions de lumière.",
    message: "Monet cherchait à capturer l'essence même de la lumière et de la couleur à travers ces tableaux. Il a déclaré vouloir offrir 'l'illusion d'un tout sans fin, d'une onde sans horizon et sans rivage'.",
    funFact: "Monet a continué à peindre les Nymphéas même après avoir développé une cataracte qui affectait sa vision des couleurs."
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
    description: "Initialement nommé 'Le Poète', cette sculpture faisait partie d'une commande pour un portail monumental appelé 'La Porte de l'Enfer', inspiré de la Divine Comédie de Dante.",
    message: "Le Penseur représente la méditation profonde et la contemplation intellectuelle. La tension musculaire du corps suggère que la pensée est aussi un effort physique intense.",
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
    description: "Peinte depuis la fenêtre de sa chambre à l'asile de Saint-Rémy-de-Provence, cette œuvre représente le village sous un ciel nocturne tourbillonnant. Van Gogh a ajouté le village de mémoire.",
    message: "Les tourbillons du ciel suggèrent le mouvement et l'énergie cosmique, contrastant avec le village paisible en dessous. L'œuvre exprime les émotions intenses de l'artiste face à la nature.",
    funFact: "Van Gogh considérait cette peinture comme un échec, mais elle est aujourd'hui l'une des œuvres les plus reconnaissables au monde."
  },
  {
    id: 5,
    title: "La Vénus de Milo",
    artist: "Artiste inconnu (Alexandros d'Antioche ?)",
    year: -130,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Venus_de_Milo_Louvre_Ma399.jpg/800px-Venus_de_Milo_Louvre_Ma399.jpg",
    style: "Sculpture hellénistique",
    medium: "Marbre de Paros",
    dimensions: "202 cm de hauteur",
    location: "Musée du Louvre, Paris",
    description: "Découverte en 1820 sur l'île de Milos en Grèce, cette sculpture représente probablement Aphrodite, déesse de l'amour et de la beauté. Ses bras manquants ajoutent à son mystère.",
    message: "La Vénus de Milo incarne l'idéal de beauté féminine de l'Antiquité grecque. Sa pose en contrapposto et ses drapés fluides démontrent la maîtrise technique des sculpteurs hellénistiques.",
    funFact: "Personne ne sait avec certitude ce que tenaient ses bras disparus - peut-être une pomme, un miroir ou un bouclier."
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
    description: "Cette immense toile représente le couronnement de Napoléon Ier à Notre-Dame de Paris le 2 décembre 1804. Napoléon y est montré couronnant l'impératrice Joséphine.",
    message: "L'œuvre est une pièce de propagande monumentale glorifiant le nouveau régime impérial. David a fait plusieurs modifications à la demande de Napoléon pour améliorer l'image de certains personnages.",
    funFact: "La mère de Napoléon apparaît au centre de la peinture, mais elle n'était en réalité pas présente à la cérémonie."
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
    description: "Cette œuvre monumentale dépeint le naufrage de la frégate Méduse en 1816 et les survivants du radeau qui dérivèrent pendant 13 jours. Sur les 147 personnes à bord du radeau, seules 15 survécurent.",
    message: "Géricault a choisi un sujet controversé pour critiquer l'incompétence du gouvernement. L'œuvre est un manifeste du mouvement romantique, privilégiant l'émotion et le drame sur l'ordre classique.",
    funFact: "Géricault a étudié des cadavres à la morgue et construit un radeau grandeur nature dans son atelier pour préparer cette peinture."
  }
];

/**
 * Composant d'animation de texte fluide
 */
const AnimatedText = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-all duration-500 ease-out ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3'
      }`}
    >
      {children}
    </span>
  );
};

/**
 * Composant pour animer les paragraphes mot par mot
 */
const AnimatedParagraph = ({ text, baseDelay = 0, className = '' }) => {
  const words = text.split(' ');

  return (
    <p className={className}>
      {words.map((word, index) => (
        <AnimatedText key={index} delay={baseDelay + index * 30}>
          {word}{' '}
        </AnimatedText>
      ))}
    </p>
  );
};

/**
 * Page de l'Oeuvre du Jour - Version améliorée avec animations fluides
 */
const DailyArtPage = () => {
  const [currentArtwork, setCurrentArtwork] = useState(null);
  const [previousArtworks, setPreviousArtworks] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Déterminer l'œuvre du jour basée sur la date
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

  // Navigation entre les œuvres avec reset des animations
  const navigateArtwork = (direction) => {
    const currentIndex = artworks.findIndex(a => a.id === currentArtwork.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    } else {
      newIndex = (currentIndex + 1) % artworks.length;
    }
    setCurrentArtwork(artworks[newIndex]);
    setAnimationKey(prev => prev + 1);
  };

  // Changement d'œuvre avec reset des animations
  const selectArtwork = (artwork) => {
    setCurrentArtwork(artwork);
    setAnimationKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!currentArtwork) {
    return (
      <div className="min-h-screen pt-20 pb-24 flex items-center justify-center" style={{ backgroundColor: '#2a3d5c' }}>
        <div className="flex items-center gap-3 text-[#d4a574]">
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="text-lg">Chargement de l'œuvre...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 relative overflow-hidden" style={{ backgroundColor: '#1e2a42' }}>
      {/* Fond avec effet artistique doux */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 blur-3xl transition-all duration-1000"
          style={{ backgroundImage: `url(${currentArtwork.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2a42]/80 via-[#2a3d5c]/60 to-[#1e2a42]" />
        {/* Motif décoratif subtil */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="artPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1" fill="#d4a574" />
                <circle cx="0" cy="0" r="1" fill="#d4a574" />
                <circle cx="80" cy="0" r="1" fill="#d4a574" />
                <circle cx="0" cy="80" r="1" fill="#d4a574" />
                <circle cx="80" cy="80" r="1" fill="#d4a574" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#artPattern)" />
          </svg>
        </div>
      </div>

      {/* Contenu principal - Version compacte et sobre */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6" key={animationKey}>
        {/* Header minimaliste */}
        <div className="text-center mb-6">
          <AnimatedText delay={100}>
            <h1 className="font-serif-italic text-3xl sm:text-4xl text-[#d4a574] mb-2">
              Découverte
            </h1>
          </AnimatedText>
        </div>

        {/* Œuvre principale - Layout révisé avec image plus grande */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Image de l'œuvre - Plus grande (3/5 de la largeur) */}
          <div className="lg:col-span-3 relative">
            <AnimatedText delay={150}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 group">
                <img
                  src={currentArtwork.image}
                  alt={currentArtwork.title}
                  className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay très subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Navigation arrows minimaliste */}
                <button
                  onClick={() => navigateArtwork('prev')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => navigateArtwork('next')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                {/* Actions discrètes */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      isLiked
                        ? 'bg-red-500/80 text-white'
                        : 'bg-black/30 hover:bg-black/50 text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      isSaved
                        ? 'bg-[#d4a574]/80 text-[#1a2640]'
                        : 'bg-black/30 hover:bg-black/50 text-white'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Badge style discret */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {currentArtwork.style}
                  </span>
                </div>
              </div>
            </AnimatedText>
          </div>

          {/* Informations sur l'œuvre - Version compacte et sobre (2/5 de la largeur) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            {/* Titre et artiste */}
            <div>
              <AnimatedText delay={250}>
                <h2 className="font-serif-italic text-2xl sm:text-3xl text-[#d4a574] mb-2 leading-tight">
                  {currentArtwork.title}
                </h2>
              </AnimatedText>
              <AnimatedText delay={350}>
                <p className="text-white text-lg">
                  {currentArtwork.artist}
                  <span className="text-gray-500 text-base ml-2">
                    {currentArtwork.year < 0 ? `${Math.abs(currentArtwork.year)} av. J.-C.` : currentArtwork.year}
                  </span>
                </p>
              </AnimatedText>
            </div>

            {/* Détails techniques compacts */}
            <AnimatedText delay={450}>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg">{currentArtwork.medium}</span>
                <span className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg">{currentArtwork.dimensions}</span>
              </div>
            </AnimatedText>

            {/* Localisation sobre */}
            <AnimatedText delay={550}>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4a574]" />
                {currentArtwork.location}
              </p>
            </AnimatedText>

            {/* Description sans titre */}
            <AnimatedText delay={650}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {currentArtwork.description}
              </p>
            </AnimatedText>

            {/* Message sobre */}
            <AnimatedText delay={900}>
              <p className="text-gray-400 text-sm italic leading-relaxed pl-3 border-l-2 border-[#d4a574]/40">
                {currentArtwork.message}
              </p>
            </AnimatedText>

            {/* Fun fact compact */}
            <AnimatedText delay={1100}>
              <p className="text-gray-500 text-xs leading-relaxed">
                💡 {currentArtwork.funFact}
              </p>
            </AnimatedText>
          </div>
        </div>

        {/* Section des œuvres précédentes - Version compacte */}
        <AnimatedText delay={1300}>
          <div className="mt-10">
            <p className="text-gray-500 text-sm mb-4">Précédentes</p>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {previousArtworks.map((artwork) => (
                <button
                  key={artwork.id}
                  onClick={() => selectArtwork(artwork)}
                  className="group relative flex-shrink-0 w-24 h-32 rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-2 left-2 right-2 text-white text-[10px] line-clamp-2">{artwork.title}</p>
                </button>
              ))}
            </div>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
};

export default DailyArtPage;
