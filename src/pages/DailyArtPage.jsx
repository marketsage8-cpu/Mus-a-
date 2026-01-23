import { useState, useEffect, useRef } from 'react';
import { MapPin, Heart, ChevronLeft, ChevronRight, Bookmark, Sparkles, Calendar, Info, Palette, Clock } from 'lucide-react';

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
    description: "Cette œuvre emblématique commémore les Trois Glorieuses, les journées révolutionnaires des 27, 28 et 29 juillet 1830 à Paris. Delacroix mêle allégorie et réalisme pour créer une image puissante de la lutte pour la liberté.",
    funFact: "Le tableau a été caché pendant plusieurs années car jugé trop subversif par les autorités. Delacroix s'est lui-même représenté dans la foule, portant un chapeau haut-de-forme.",
    context: "Peinte dans le contexte des révolutions de 1830, cette œuvre symbolise l'aspiration universelle à la liberté. La figure centrale, Marianne, est devenue l'un des symboles les plus reconnaissables de la République française.",
    technique: "Delacroix utilise une palette vibrante et des coups de pinceau expressifs caractéristiques du romantisme. La composition pyramidale guide le regard vers la figure allégorique de la Liberté."
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
    description: "Les Nymphéas sont une série d'environ 250 peintures à l'huile réalisées par Monet dans son jardin de Giverny. Ces œuvres capturent la lumière changeante sur l'eau et les fleurs avec une sensibilité extraordinaire.",
    funFact: "Monet a continué à peindre les Nymphéas même après avoir développé une cataracte qui altérait sa perception des couleurs. Il a créé un jardin aquatique spécialement pour ces peintures.",
    context: "Ces œuvres représentent l'aboutissement de la carrière de Monet et son exploration de la lumière et de la couleur. Les grandes décorations des Nymphéas à l'Orangerie sont considérées comme la 'Chapelle Sixtine de l'Impressionnisme'.",
    technique: "Monet dissout progressivement les formes dans la lumière, créant une atmosphère méditative. Les reflets sur l'eau brouillent la frontière entre le ciel et l'étang."
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
    funFact: "Il existe plus de 25 copies originales en bronze du Penseur à travers le monde. La figure était censée représenter Dante contemplant son œuvre, mais est devenue un symbole universel de la réflexion.",
    context: "Rodin a révolutionné la sculpture en s'éloignant des conventions académiques. Le Penseur incarne la tension entre la force physique et l'activité intellectuelle.",
    technique: "Rodin modèle la surface avec une texture expressive qui capture la lumière de manière dynamique. La pose concentrée et la musculature tendue expriment l'intensité de la pensée."
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
    description: "Peinte depuis la fenêtre de sa chambre à l'asile de Saint-Rémy-de-Provence, cette œuvre représente le village sous un ciel nocturne tourbillonnant d'une intensité émotionnelle extraordinaire.",
    funFact: "Van Gogh considérait cette peinture comme un échec, mais elle est aujourd'hui l'une des plus célèbres au monde. Il l'a peinte de mémoire pendant la journée, pas la nuit.",
    context: "Créée pendant l'une des périodes les plus tourmentées de la vie de Van Gogh, cette œuvre exprime néanmoins une beauté transcendante. Le cyprès au premier plan symbolise traditionnellement le deuil et l'éternité.",
    technique: "Les coups de pinceau tourbillonnants et les couleurs vibrantes créent un mouvement cosmique. Van Gogh utilise des contrastes de bleus et de jaunes pour créer une luminosité nocturne unique."
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
    description: "Découverte en 1820 sur l'île de Milos en Grèce, cette sculpture représente probablement Aphrodite, déesse de l'amour et de la beauté dans la mythologie grecque.",
    funFact: "Personne ne sait avec certitude ce que tenaient ses bras disparus. Des théories suggèrent qu'elle tenait une pomme, un miroir, ou qu'elle filait de la laine.",
    context: "La Vénus de Milo incarne l'idéal de beauté classique grec. Sa découverte a suscité un engouement pour l'art antique et a influencé les canons esthétiques occidentaux.",
    technique: "La sculpture présente un contrapposto subtil et une draperie magistralement sculptée. Le traitement du marbre crée une illusion de chair vivante."
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
    description: "Cette immense toile représente le couronnement de Napoléon Ier à Notre-Dame de Paris le 2 décembre 1804. C'est l'une des plus grandes peintures du Louvre.",
    funFact: "La mère de Napoléon apparaît au centre de la peinture, mais elle n'était pas présente à la cérémonie car elle désapprouvait le mariage de son fils avec Joséphine.",
    context: "David était le peintre officiel de Napoléon et cette œuvre est une pièce de propagande magistrale. Elle légitime le pouvoir impérial en le présentant avec la grandeur de l'Antiquité.",
    technique: "David utilise une composition théâtrale avec un éclairage dramatique. Chaque figure est un portrait précis des 150 personnages présents."
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
    description: "Cette œuvre monumentale dépeint le naufrage de la frégate Méduse en 1816 et les 147 survivants abandonnés sur un radeau de fortune pendant 13 jours.",
    funFact: "Géricault a étudié des cadavres à la morgue et construit un radeau grandeur nature dans son atelier. Il a aussi interviewé les survivants pour garantir l'authenticité.",
    context: "Le tableau était une critique politique déguisée contre le gouvernement de la Restauration, dont l'incompétence avait causé le désastre. Il a fait scandale au Salon de 1819.",
    technique: "La composition pyramidale crée une tension dramatique culminant vers la figure qui aperçoit un navire au loin. Les corps aux chairs verdâtres témoignent du réalisme obsessionnel de Géricault."
  }
];

/**
 * Formater une date en français
 */
const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
};

/**
 * Obtenir la date de publication d'une œuvre (basée sur le jour de l'année)
 */
const getPublicationDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date;
};

/**
 * Page Découverte - Version améliorée avec carrousel et dates
 */
const DailyArtPage = () => {
  const [currentArtwork, setCurrentArtwork] = useState(null);
  const [previousArtworks, setPreviousArtworks] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showFullAnalysis, setShowFullAnalysis] = useState(false);
  const carouselRef = useRef(null);

  // Déterminer l'œuvre basée sur la date (change à 00h00)
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const artworkIndex = dayOfYear % artworks.length;
    setCurrentArtwork({ ...artworks[artworkIndex], publishDate: today });

    // Générer les œuvres précédentes avec leurs dates
    const previous = [];
    for (let i = 1; i <= 14; i++) {
      const prevIndex = (artworkIndex - i + artworks.length * 100) % artworks.length;
      previous.push({
        ...artworks[prevIndex],
        daysAgo: i,
        publishDate: getPublicationDate(i)
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
    setCurrentArtwork({ ...artworks[newIndex], publishDate: new Date() });
    setIsLiked(false);
    setIsSaved(false);
    setShowFullAnalysis(false);
  };

  // Sélectionner une œuvre depuis le carrousel
  const selectArtwork = (artwork) => {
    setCurrentArtwork(artwork);
    setIsLiked(false);
    setIsSaved(false);
    setShowFullAnalysis(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll du carrousel
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
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
    <div className="min-h-screen pt-20 pb-24 md:pb-8" style={{ backgroundColor: '#0f0f1a' }}>
      {/* Fond avec blur de l'image */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-8 blur-3xl scale-125"
          style={{ backgroundImage: `url(${currentArtwork.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a] via-[#0f0f1a]/95 to-[#0f0f1a]" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* ==========================================
            HEADER - TITRE DÉCOUVERTE
            ========================================== */}
        <div className="text-center pt-8 pb-12">
          {/* Décoration au-dessus */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a574]/50" />
            <Palette className="w-6 h-6 text-[#d4a574]/70" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a574]/50" />
          </div>

          {/* Titre principal stylisé */}
          <h1 className="relative inline-block">
            <span className="font-serif-italic text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-[#d4a574] via-[#e8c9a0] to-[#d4a574] drop-shadow-lg">
              Découverte
            </span>
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ animationDuration: '3s' }} />
          </h1>

          {/* Sous-titre */}
          <p className="mt-4 text-gray-400 text-sm sm:text-base tracking-wide">
            Chaque jour, découvrez une œuvre avec nous !
          </p>

          {/* Date du jour */}
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-full">
            <Calendar className="w-4 h-4 text-[#d4a574]" />
            <span className="text-[#d4a574] text-sm font-medium">
              {formatDate(new Date())}
            </span>
          </div>
        </div>

        {/* ==========================================
            LAYOUT PRINCIPAL - IMAGE ET INFOS
            ========================================== */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image principale - 2/3 de la largeur */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={currentArtwork.image}
                alt={currentArtwork.title}
                className="w-full h-[55vh] lg:h-[70vh] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

              {/* Navigation arrows */}
              <button
                onClick={() => navigateArtwork('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateArtwork('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Actions en haut */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                    isLiked ? 'bg-red-500/90 text-white' : 'bg-black/40 hover:bg-black/60 text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                    isSaved ? 'bg-[#d4a574]/90 text-[#0f0f1a]' : 'bg-black/40 hover:bg-black/60 text-white'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Style badge en bas à gauche */}
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/10">
                  {currentArtwork.style}
                </span>
              </div>
            </div>
          </div>

          {/* Infos - 1/3 de la largeur */}
          <div className="lg:col-span-1 flex flex-col">
            {/* Titre et artiste */}
            <div className="mb-6">
              <h2 className="font-serif-italic text-2xl lg:text-3xl text-[#d4a574] leading-tight mb-3">
                {currentArtwork.title}
              </h2>
              <p className="text-white text-lg font-medium">
                {currentArtwork.artist}
              </p>
              <p className="text-gray-500 text-base">
                {currentArtwork.year < 0 ? `${Math.abs(currentArtwork.year)} av. J.-C.` : currentArtwork.year}
              </p>
            </div>

            {/* Détails techniques */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-lg">
                {currentArtwork.medium}
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-lg">
                {currentArtwork.dimensions}
              </span>
            </div>

            {/* Localisation */}
            <p className="text-gray-400 text-sm flex items-center gap-2 mb-5">
              <MapPin className="w-4 h-4 text-[#d4a574]" />
              {currentArtwork.location}
            </p>

            {/* Description */}
            <div className="mb-5">
              <p className="text-gray-300 text-sm leading-relaxed">
                {currentArtwork.description}
              </p>
            </div>

            {/* Fun fact - Anecdote passionnante */}
            <div className="bg-gradient-to-br from-[#d4a574]/10 to-[#d4a574]/5 border border-[#d4a574]/20 rounded-xl p-4 mb-5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#d4a574]/20 rounded-lg">
                  <Info className="w-4 h-4 text-[#d4a574]" />
                </div>
                <div>
                  <p className="text-[#d4a574] text-xs font-semibold uppercase tracking-wider mb-1">
                    Le saviez-vous ?
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {currentArtwork.funFact}
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton voir analyse complète */}
            <button
              onClick={() => setShowFullAnalysis(!showFullAnalysis)}
              className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#d4a574]" />
              {showFullAnalysis ? 'Masquer l\'analyse' : 'Voir l\'analyse complète'}
            </button>

            {/* Analyse complète (dépliable) */}
            {showFullAnalysis && (
              <div className="mt-4 space-y-4 animate-fade-in">
                {/* Contexte historique */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="text-[#d4a574] text-sm font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Contexte historique
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {currentArtwork.context}
                  </p>
                </div>

                {/* Technique artistique */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="text-[#d4a574] text-sm font-semibold mb-2 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Technique artistique
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {currentArtwork.technique}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==========================================
            CARROUSEL DES ŒUVRES PRÉCÉDENTES
            ========================================== */}
        <div className="mt-16 pb-8">
          {/* Header du carrousel */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white text-lg font-semibold">Œuvres précédentes</h3>
              <p className="text-gray-500 text-sm">Retrouvez les découvertes des jours passés</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Carrousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          >
            {previousArtworks.map((artwork) => (
              <button
                key={`${artwork.id}-${artwork.daysAgo}`}
                onClick={() => selectArtwork(artwork)}
                className="group relative flex-shrink-0 w-48 rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="aspect-[3/4] relative">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>

                {/* Contenu */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  {/* Date de publication */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <Calendar className="w-3 h-3 text-[#d4a574]" />
                    <span className="text-[#d4a574] text-xs font-medium">
                      {formatDate(artwork.publishDate)}
                    </span>
                  </div>

                  {/* Titre */}
                  <p className="text-white text-sm font-medium line-clamp-2 leading-tight">
                    {artwork.title}
                  </p>

                  {/* Artiste */}
                  <p className="text-gray-400 text-xs mt-1">
                    {artwork.artist}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#d4a574]/0 group-hover:bg-[#d4a574]/10 transition-colors pointer-events-none" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyArtPage;
