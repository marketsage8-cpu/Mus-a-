import { useState, useEffect } from 'react';
import { Calendar, Palette, Clock, MapPin, Heart, Share2, ChevronLeft, ChevronRight, Info, Bookmark, ExternalLink } from 'lucide-react';
import { useUser } from '../context/UserContext';

/**
 * Base de données des œuvres d'art pour l'oeuvre du jour
 */
const artworks = [
  {
    id: 1,
    title: "La Liberté guidant le peuple",
    artist: "Eugène Delacroix",
    year: 1830,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1617503752587-97d2103a96ea?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&q=80",
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
 * Page de l'Oeuvre du Jour
 */
const DailyArtPage = () => {
  const [currentArtwork, setCurrentArtwork] = useState(null);
  const [previousArtworks, setPreviousArtworks] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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
    setShowInfo(false);
  };

  if (!currentArtwork) {
    return (
      <div className="min-h-screen pt-20 pb-24 flex items-center justify-center" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="animate-pulse text-[#d4a574]">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 relative overflow-hidden" style={{ backgroundColor: '#0f1320' }}>
      {/* Fond avec effet artistique */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-3xl"
          style={{ backgroundImage: `url(${currentArtwork.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1320] via-[#0f1320]/90 to-[#0f1320]" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#d4a574]/20 rounded-full border border-[#d4a574]/40 mb-4">
            <Palette className="w-4 h-4 text-[#d4a574]" />
            <span className="text-[#d4a574] text-sm font-semibold uppercase tracking-wider">L'Œuvre du Jour</span>
          </div>
          <h1 className="font-serif-italic text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
            Découverte Quotidienne
          </h1>
          <p className="text-gray-400 text-sm">
            Chaque jour, une nouvelle œuvre à explorer et à comprendre
          </p>
        </div>

        {/* Œuvre principale */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Image de l'œuvre */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={currentArtwork.image}
                alt={currentArtwork.title}
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay avec navigation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Navigation arrows */}
              <button
                onClick={() => navigateArtwork('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateArtwork('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Actions */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                    isLiked ? 'bg-red-500 text-white' : 'bg-black/50 hover:bg-black/70 text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                    isSaved ? 'bg-[#d4a574] text-[#1a1a2e]' : 'bg-black/50 hover:bg-black/70 text-white'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Badge style */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-[#d4a574]/90 text-[#1a1a2e] text-xs font-semibold rounded-full uppercase tracking-wide">
                  {currentArtwork.style}
                </span>
              </div>
            </div>
          </div>

          {/* Informations sur l'œuvre */}
          <div className="flex flex-col">
            {/* Titre et artiste */}
            <div className="mb-6">
              <h2 className="font-serif-italic text-3xl sm:text-4xl text-[#d4a574] mb-2">
                {currentArtwork.title}
              </h2>
              <p className="text-white text-xl">
                {currentArtwork.artist}
                <span className="text-gray-400 ml-2">
                  ({currentArtwork.year < 0 ? `${Math.abs(currentArtwork.year)} av. J.-C.` : currentArtwork.year})
                </span>
              </p>
            </div>

            {/* Détails techniques */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Technique</p>
                <p className="text-white">{currentArtwork.medium}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Dimensions</p>
                <p className="text-white">{currentArtwork.dimensions}</p>
              </div>
            </div>

            {/* Localisation */}
            <div className="flex items-center gap-2 mb-6 text-gray-300">
              <MapPin className="w-5 h-5 text-[#d4a574]" />
              <span>{currentArtwork.location}</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#d4a574]" />
                Description
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {currentArtwork.description}
              </p>
            </div>

            {/* Message / Signification */}
            <div className="mb-6 bg-[#d4a574]/10 rounded-xl p-5 border-l-4 border-[#d4a574]">
              <h3 className="text-[#d4a574] font-semibold mb-2">Le message de l'œuvre</h3>
              <p className="text-gray-300 leading-relaxed italic">
                {currentArtwork.message}
              </p>
            </div>

            {/* Fun fact */}
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span>
                Le saviez-vous ?
              </h3>
              <p className="text-gray-400">
                {currentArtwork.funFact}
              </p>
            </div>
          </div>
        </div>

        {/* Section des œuvres précédentes */}
        <div className="mt-16">
          <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#d4a574]" />
            Œuvres précédentes
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {previousArtworks.map((artwork) => (
              <button
                key={artwork.id}
                onClick={() => {
                  setCurrentArtwork(artwork);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative rounded-xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-medium line-clamp-1">{artwork.title}</p>
                  <p className="text-gray-400 text-[10px]">
                    Il y a {artwork.daysAgo} jour{artwork.daysAgo > 1 ? 's' : ''}
                  </p>
                </div>
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-[#d4a574]/0 group-hover:bg-[#d4a574]/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyArtPage;
