import { useState, useEffect } from 'react';
import { Heart, ChevronDown, MapPin, Palette, Calendar, Ruler, Eye } from 'lucide-react';

/**
 * Base de données des tableaux pour l'œuvre du jour
 * Uniquement des peintures avec images haute qualité et format adapté
 */
const paintings = [
  {
    id: 1,
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    year: 1889,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    fallbackColor: "#1E3A5F",
    style: "Post-impressionnisme",
    medium: "Huile sur toile",
    dimensions: "73,7 × 92,1 cm",
    location: "MoMA, New York",
    description: "Peinte depuis la fenêtre de sa chambre à l'asile de Saint-Rémy-de-Provence, cette œuvre transcende la réalité visible pour nous plonger dans le cosmos intérieur de l'artiste.",
    interpretation: "Le ciel n'est plus un simple firmament — c'est un océan cosmique où les étoiles dansent comme des flammes dans la nuit de l'âme. Le cyprès, cette flamme noire qui s'élève vers l'infini, devient le pont entre notre monde terrestre et les mystères célestes. Van Gogh ne peint pas ce qu'il voit, mais ce qu'il ressent : l'univers tout entier pulse au rythme de son cœur tourmenté, chaque spirale est un battement, chaque étoile un cri silencieux vers l'éternité.",
    funFact: "Van Gogh considérait cette peinture comme un échec. Il ne l'a jamais vendue de son vivant."
  },
  {
    id: 2,
    title: "Les Nymphéas",
    artist: "Claude Monet",
    year: 1906,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    fallbackColor: "#6B8E9F",
    style: "Impressionnisme",
    medium: "Huile sur toile",
    dimensions: "89 × 93 cm",
    location: "Musée de l'Orangerie, Paris",
    description: "Les Nymphéas représentent l'aboutissement de quarante années d'observation obsessionnelle de la lumière sur l'eau, une méditation visuelle sans fin.",
    interpretation: "Monet abolit l'horizon — et avec lui, les certitudes. L'eau devient ciel, le ciel devient eau, et nous flottons entre deux infinis. Ces nénuphars ne sont pas de simples fleurs : ce sont des îles de couleur suspendues dans un rêve liquide, des pensées qui dérivent à la surface de la conscience. Contempler cette toile, c'est plonger dans un silence si profond qu'on y entend battre le pouls du temps qui s'arrête.",
    funFact: "Monet a continué à peindre les Nymphéas même après avoir développé une cataracte, produisant des œuvres aux teintes rouges inhabituelles."
  },
  {
    id: 3,
    title: "La Jeune Fille à la perle",
    artist: "Johannes Vermeer",
    year: 1665,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    fallbackColor: "#2F4F4F",
    style: "Baroque hollandais",
    medium: "Huile sur toile",
    dimensions: "44,5 × 39 cm",
    location: "Mauritshuis, La Haye",
    description: "Surnommée la « Joconde du Nord », cette œuvre énigmatique capture un instant d'intimité impossible à définir.",
    interpretation: "Elle tourne la tête vers nous — mais qui est-elle vraiment ? Une servante, une fille, un fantôme du désir ? Son regard nous traverse comme une flèche de lumière, et sa bouche entrouverte semble sur le point de révéler un secret qu'elle gardera pour l'éternité. La perle à son oreille n'est pas un bijou : c'est une larme de lune, un fragment de rêve suspendu entre ombre et clarté. Vermeer a peint l'insaisissable — ce moment où quelqu'un se retourne et, l'espace d'un battement de cœur, devient éternel.",
    funFact: "L'identité du modèle reste un mystère. Certains pensent qu'il s'agit de la fille de Vermeer."
  },
  {
    id: 4,
    title: "Les Tournesols",
    artist: "Vincent van Gogh",
    year: 1888,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
    fallbackColor: "#DAA520",
    style: "Post-impressionnisme",
    medium: "Huile sur toile",
    dimensions: "92 × 73 cm",
    location: "National Gallery, Londres",
    description: "Van Gogh a peint cette série de tournesols pour décorer la chambre de Gauguin à Arles, un geste d'amitié transformé en chef-d'œuvre.",
    interpretation: "Ces tournesols ne sont pas une simple nature morte — ils sont un autoportrait de l'âme. Certains sont en pleine floraison, gorgés de vie ; d'autres se fanent déjà, leurs pétales tombant comme des larmes dorées. Van Gogh peint le cycle de l'existence dans un vase : la jeunesse, la maturité, le déclin, et pourtant... quelle beauté dans cette mort lente ! Le jaune n'est pas une couleur ici, c'est une température, une fièvre, le soleil du Midi qui brûle dans les veines de l'artiste.",
    funFact: "Van Gogh voulait créer une « symphonie en jaune et bleu ». Il associait le jaune au bonheur et à l'amitié."
  },
  {
    id: 5,
    title: "Le Bal du moulin de la Galette",
    artist: "Pierre-Auguste Renoir",
    year: 1876,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/1280px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    fallbackColor: "#8B7355",
    style: "Impressionnisme",
    medium: "Huile sur toile",
    dimensions: "131 × 175 cm",
    location: "Musée d'Orsay, Paris",
    description: "Cette scène joyeuse capture l'atmosphère d'un dimanche après-midi à Montmartre, où le peuple de Paris venait danser et oublier.",
    interpretation: "Renoir a capturé ce que les photographes ne pourront jamais saisir : non pas un instant, mais une sensation. La lumière qui filtre à travers les arbres devient confettis sur les visages, les robes virevoltent comme des papillons éphémères, et dans ce tourbillon de joie, on entend presque l'accordéon jouer. C'est le bonheur à l'état pur, fragile comme une bulle de savon, précieux justement parce qu'il ne dure pas. Chaque touche de pinceau est un battement de cœur amoureux de la vie.",
    funFact: "Renoir a peint ce tableau sur place, faisant porter la toile chaque jour de son atelier au moulin par ses amis."
  },
  {
    id: 6,
    title: "La Grande Vague de Kanagawa",
    artist: "Katsushika Hokusai",
    year: 1831,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    fallbackColor: "#4682B4",
    style: "Ukiyo-e",
    medium: "Estampe sur bois",
    dimensions: "25 × 37 cm",
    location: "Metropolitan Museum, New York",
    description: "Cette estampe iconique montre une vague gigantesque menaçant trois bateaux, avec le mont Fuji serein à l'arrière-plan.",
    interpretation: "La vague est un monstre liquide, ses griffes d'écume prêtes à saisir les fragiles embarcations humaines. Et pourtant, au loin, le mont Fuji reste impassible — minuscule en apparence, mais éternel. Hokusai nous montre le combat sans fin entre l'homme et la nature, entre l'éphémère et le permanent. Nous sommes ces pêcheurs, luttant contre des forces qui nous dépassent, tandis que la montagne sacrée nous rappelle qu'au-delà du chaos, il existe une paix immobile. L'eau et la neige se font écho : deux blancs, deux silences, deux infinis.",
    funFact: "Hokusai avait 70 ans quand il a créé cette œuvre. Il disait vouloir peindre jusqu'à 110 ans pour enfin comprendre la nature."
  },
  {
    id: 7,
    title: "Composition abstraite",
    artist: "Wassily Kandinsky",
    year: 1923,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg/1280px-Vassily_Kandinsky%2C_1913_-_Composition_7.jpg",
    fallbackColor: "#DAA520",
    style: "Abstrait",
    medium: "Huile sur toile",
    dimensions: "140 × 201 cm",
    location: "Centre Pompidou, Paris",
    description: "Kandinsky, pionnier de l'abstraction, libère la peinture de la représentation pour explorer le langage pur des formes et des couleurs.",
    interpretation: "Kandinsky ne peint pas des objets — il peint de la musique visible. Chaque cercle est une note, chaque ligne une mélodie, chaque couleur une émotion qui vibre sur la toile comme sur une portée cosmique. Le rouge crie, le bleu médite, le jaune danse, et ensemble ils composent une symphonie silencieuse que seul l'œil peut entendre. C'est l'âme mise à nu, sans le masque des apparences : pure énergie, pure sensation, pure vie.",
    funFact: "Kandinsky était synesthète — il pouvait littéralement 'voir' la musique et 'entendre' les couleurs."
  },
  {
    id: 8,
    title: "Nuit sur le Rhône",
    artist: "Vincent van Gogh",
    year: 1888,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/1280px-Starry_Night_Over_the_Rhone.jpg",
    fallbackColor: "#191970",
    style: "Post-impressionnisme",
    medium: "Huile sur toile",
    dimensions: "72,5 × 92 cm",
    location: "Musée d'Orsay, Paris",
    description: "Van Gogh capture les reflets des lampes à gaz d'Arles sur les eaux sombres du Rhône, créant un spectacle nocturne hypnotique.",
    interpretation: "Van Gogh a fait descendre les étoiles sur terre. Les lumières de la ville deviennent des constellations inversées, leurs reflets s'étirant sur l'eau comme des chemins dorés vers l'infini. Le couple au premier plan, minuscule face à l'immensité de la nuit, nous rappelle que même dans l'obscurité la plus profonde, il y a toujours quelqu'un avec qui partager l'émerveillement. La nuit n'est pas noire chez Van Gogh — elle est bleue, elle est vivante, elle respire.",
    funFact: "Van Gogh a utilisé des bougies sur son chapeau de paille pour pouvoir peindre cette scène nocturne sur place."
  }
];

/**
 * Page Œuvre du Jour - Design immersif avec section contemplation
 */
const DailyArtPage = () => {
  const [currentPainting, setCurrentPainting] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [pastArtworks, setPastArtworks] = useState([]);

  // Déterminer l'œuvre basée sur la date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const paintingIndex = dayOfYear % paintings.length;
    setCurrentPainting(paintings[paintingIndex]);
    setImageError(false);

    // Générer les œuvres des jours passés
    const past = [];
    for (let i = 1; i <= 7; i++) {
      const pastDate = new Date(today);
      pastDate.setDate(pastDate.getDate() - i);
      const pastDayOfYear = Math.floor((pastDate - new Date(pastDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
      const pastIndex = pastDayOfYear % paintings.length;
      past.push({
        ...paintings[pastIndex],
        displayDate: pastDate.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })
      });
    }
    setPastArtworks(past);
  }, []);

  // Gérer le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Charger l'état favori
  useEffect(() => {
    if (currentPainting) {
      const favorites = JSON.parse(localStorage.getItem('artFavorites') || '[]');
      setIsFavorite(favorites.includes(currentPainting.id));
    }
  }, [currentPainting]);

  // Toggle favori
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('artFavorites') || '[]');
    if (isFavorite) {
      const newFavorites = favorites.filter(id => id !== currentPainting.id);
      localStorage.setItem('artFavorites', JSON.stringify(newFavorites));
    } else {
      favorites.push(currentPainting.id);
      localStorage.setItem('artFavorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  // Sélectionner une œuvre passée
  const selectPastArtwork = (artwork) => {
    setCurrentPainting(artwork);
    setImageError(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!currentPainting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c]">
        <div className="w-8 h-8 border-2 border-[#e07a5f] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Calculs pour révéler le texte progressivement
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const showTitle = scrollY > windowHeight * 0.3;
  const showDescription = scrollY > windowHeight * 0.6;
  const showInterpretation = scrollY > windowHeight * 1.0;
  const showFunFact = scrollY > windowHeight * 1.4;
  const showInfo = scrollY > windowHeight * 1.8;
  const showContemplation = scrollY > windowHeight * 2.2;

  // Calcul de l'opacité de l'overlay (diminue vers la fin pour la contemplation)
  const overlayOpacity = showContemplation
    ? Math.max(0, 0.75 - ((scrollY - windowHeight * 2.2) / windowHeight) * 0.75)
    : Math.min(scrollY / windowHeight * 0.7, 0.75);

  return (
    <div className="bg-[#0c0c0c] text-white min-h-[500vh]">
      {/* Image fixe en arrière-plan - PLEIN ÉCRAN avec object-contain */}
      <div className="fixed inset-0 z-0">
        {/* Fond de couleur de secours */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: currentPainting.fallbackColor }}
        />

        {/* Image avec gestion d'erreur */}
        {!imageError && (
          <img
            src={currentPainting.image}
            alt={currentPainting.title}
            className="absolute inset-0 w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        )}

        {/* Overlay qui s'assombrit au scroll puis s'éclaircit pour la contemplation */}
        <div
          className="absolute inset-0 bg-[#0c0c0c] transition-opacity duration-700"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Contenu qui apparaît au scroll - SUR l'image */}
      <div className="relative z-10">
        {/* Section initiale - Plein écran avec titre */}
        <section className="h-screen flex flex-col items-center justify-end pb-20 px-6">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-[#e07a5f]/20 backdrop-blur-sm border border-[#e07a5f]/30 rounded-full">
            <span className="text-[#e07a5f] text-sm font-medium tracking-wider uppercase">
              Œuvre du jour
            </span>
          </div>

          {/* Titre et artiste en bas */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-center mb-4 text-white drop-shadow-2xl">
            {currentPainting.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#e07a5f] mb-8 drop-shadow-lg">
            {currentPainting.artist}, {currentPainting.year}
          </p>

          {/* Bouton Favoris */}
          <button
            onClick={toggleFavorite}
            className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md transition-all mb-8 ${
              isFavorite
                ? 'bg-[#e07a5f] text-white'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            {isFavorite ? 'Dans mes favoris' : 'Ajouter aux favoris'}
          </button>

          {/* Indicateur scroll */}
          <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
            <span className="text-sm tracking-widest uppercase">Découvrir</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* Textes qui apparaissent SUR l'image */}
        <section className="min-h-[300vh] px-6 md:px-12 flex flex-col items-center">
          {/* Titre réapparaît */}
          <div
            className={`max-w-4xl w-full py-32 transition-all duration-1000 ${
              showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight drop-shadow-2xl">
              {currentPainting.title}
            </h2>
            <p className="text-2xl text-[#e07a5f] italic drop-shadow-lg">
              {currentPainting.artist} — {currentPainting.year}
            </p>
          </div>

          {/* Description */}
          <div
            className={`max-w-3xl w-full py-24 transition-all duration-1000 ${
              showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-6 drop-shadow-lg">
              L'œuvre
            </h3>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light drop-shadow-xl">
              {currentPainting.description}
            </p>
          </div>

          {/* Interprétation - Plus longue et littéraire */}
          <div
            className={`max-w-3xl w-full py-24 transition-all duration-1000 ${
              showInterpretation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-6 drop-shadow-lg">
              Interprétation
            </h3>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light drop-shadow-xl italic">
              {currentPainting.interpretation}
            </p>
          </div>

          {/* Fun Fact */}
          <div
            className={`max-w-3xl w-full py-24 transition-all duration-1000 ${
              showFunFact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="p-8 md:p-12 bg-[#e07a5f]/20 backdrop-blur-md rounded-3xl border border-[#e07a5f]/30">
              <h3 className="text-[#e07a5f] font-medium text-xl mb-4">
                Le saviez-vous ?
              </h3>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                {currentPainting.funFact}
              </p>
            </div>
          </div>

          {/* Informations techniques */}
          <div
            className={`max-w-4xl w-full py-24 transition-all duration-1000 ${
              showInfo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-8 drop-shadow-lg">
              Informations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl">
                <Palette className="w-7 h-7 text-[#e07a5f]" />
                <div>
                  <p className="text-white/50 text-sm">Style</p>
                  <p className="text-white text-xl">{currentPainting.style}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl">
                <Calendar className="w-7 h-7 text-[#e07a5f]" />
                <div>
                  <p className="text-white/50 text-sm">Technique</p>
                  <p className="text-white text-xl">{currentPainting.medium}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl">
                <Ruler className="w-7 h-7 text-[#e07a5f]" />
                <div>
                  <p className="text-white/50 text-sm">Dimensions</p>
                  <p className="text-white text-xl">{currentPainting.dimensions}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl">
                <MapPin className="w-7 h-7 text-[#e07a5f]" />
                <div>
                  <p className="text-white/50 text-sm">Localisation</p>
                  <p className="text-white text-xl">{currentPainting.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contemplation - Sans overlay, juste l'image */}
        <section
          className={`h-screen flex flex-col items-center justify-center px-6 transition-all duration-1000 ${
            showContemplation ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <Eye className="w-8 h-8 text-white/40 mx-auto mb-4" />
            <p className="text-white/40 text-sm uppercase tracking-[0.3em] mb-2">
              Contemplation
            </p>
            <p className="text-white/60 text-lg max-w-md mx-auto">
              Prenez un moment pour contempler l'œuvre dans toute sa splendeur
            </p>
          </div>
        </section>

        {/* Section Revoir - Œuvres des jours passés */}
        <section className="py-24 px-6 bg-[#0c0c0c]">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-4 text-center">
              Revoir
            </h3>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-4">
              Les œuvres des derniers jours
            </h2>
            <p className="text-white/50 text-center mb-12">
              Redécouvrez les chefs-d'œuvre que vous avez peut-être manqués
            </p>

            {/* Grille des œuvres passées avec dates */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pastArtworks.slice(0, 4).map((artwork, index) => (
                <PastArtworkCard
                  key={`${artwork.id}-${index}`}
                  artwork={artwork}
                  onClick={() => selectPastArtwork(artwork)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap');

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>
    </div>
  );
};

/**
 * Carte pour une œuvre passée avec gestion d'erreur d'image
 */
const PastArtworkCard = ({ artwork, onClick }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <button
      onClick={onClick}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
    >
      {/* Fond de couleur de secours (toujours visible) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: artwork.fallbackColor }}
      />

      {/* Image avec gestion d'erreur */}
      {!hasError && (
        <img
          src={artwork.image}
          alt={artwork.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setHasError(true)}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute top-3 left-3">
        <span className="px-2 py-1 bg-[#e07a5f]/80 text-white text-xs font-medium rounded-full">
          {artwork.displayDate}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white text-sm font-medium line-clamp-2">{artwork.title}</p>
        <p className="text-white/60 text-xs mt-1">{artwork.artist}</p>
      </div>
    </button>
  );
};

export default DailyArtPage;
