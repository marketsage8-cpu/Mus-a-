import { useState, useEffect } from 'react';
import { Heart, Bookmark, ChevronDown, MapPin, Palette, Calendar, Ruler, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Base de données des tableaux pour l'œuvre du jour
 * Uniquement des peintures avec images haute qualité
 */
const paintings = [
  {
    id: 1,
    title: "La Liberté guidant le peuple",
    artist: "Eugène Delacroix",
    year: 1830,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
    style: "Romantisme",
    medium: "Huile sur toile",
    dimensions: "260 × 325 cm",
    location: "Musée du Louvre, Paris",
    description: "Cette œuvre emblématique commémore les Trois Glorieuses, les journées révolutionnaires des 27, 28 et 29 juillet 1830 à Paris. Delacroix fusionne allégorie et réalisme dans une composition pyramidale saisissante.",
    interpretation: "La figure de la Liberté, à la fois déesse antique et femme du peuple, brandit le drapeau tricolore. La palette contrastée crée un effet dramatique puissant. Cette œuvre incarne le manifeste du romantisme français.",
    funFact: "Delacroix s'est représenté lui-même comme le bourgeois au chapeau haut-de-forme à gauche du tableau."
  },
  {
    id: 2,
    title: "Les Nymphéas",
    artist: "Claude Monet",
    year: 1906,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    style: "Impressionnisme",
    medium: "Huile sur toile",
    dimensions: "89 × 93 cm",
    location: "Musée de l'Orangerie, Paris",
    description: "Les Nymphéas représentent l'aboutissement de quarante années d'observation obsessionnelle de la lumière sur l'eau. Monet abolit la distinction entre sujet et fond.",
    interpretation: "Le ciel se reflète dans l'étang, les nénuphars flottent sans horizon. Cette série révolutionnaire annonce l'abstraction du XXe siècle — Rothko s'en réclamera.",
    funFact: "Monet a continué à peindre les Nymphéas même après avoir développé une cataracte, produisant des œuvres aux teintes rouges inhabituelles."
  },
  {
    id: 3,
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    year: 1889,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    style: "Post-impressionnisme",
    medium: "Huile sur toile",
    dimensions: "73,7 × 92,1 cm",
    location: "MoMA, New York",
    description: "Peinte depuis la fenêtre de sa chambre à l'asile de Saint-Rémy-de-Provence, cette œuvre transcende la réalité. Le ciel animé de spirales cosmiques semble pulser d'énergie.",
    interpretation: "Le cyprès au premier plan, flamme sombre, fait le lien entre le village endormi et le cosmos. Van Gogh exprime sa quête spirituelle dans cette vision qui préfigure l'expressionnisme.",
    funFact: "Van Gogh considérait cette peinture comme un échec. Il ne l'a jamais vendue."
  },
  {
    id: 4,
    title: "La Jeune Fille à la perle",
    artist: "Johannes Vermeer",
    year: 1665,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    style: "Baroque hollandais",
    medium: "Huile sur toile",
    dimensions: "44,5 × 39 cm",
    location: "Mauritshuis, La Haye",
    description: "Surnommée la « Joconde du Nord », cette œuvre énigmatique représente une jeune femme au turban bleu et jaune, tournant la tête vers le spectateur.",
    interpretation: "Son regard direct et sa bouche entrouverte créent une intimité troublante. Vermeer maîtrise magistralement la lumière qui caresse le visage et fait briller la perle.",
    funFact: "L'identité du modèle reste un mystère. Certains pensent qu'il s'agit de la fille de Vermeer."
  },
  {
    id: 5,
    title: "Le Radeau de la Méduse",
    artist: "Théodore Géricault",
    year: 1819,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
    style: "Romantisme",
    medium: "Huile sur toile",
    dimensions: "491 × 716 cm",
    location: "Musée du Louvre, Paris",
    description: "Cette œuvre monumentale dépeint le naufrage de la frégate Méduse en 1816 et l'agonie de 147 personnes abandonnées sur un radeau pendant 13 jours.",
    interpretation: "La composition pyramidale culmine vers le personnage agitant un tissu — un instant entre désespoir et espoir. Les corps entrelacés créent une chorégraphie macabre.",
    funFact: "Géricault a étudié des cadavres à la morgue et fait construire un radeau grandeur nature dans son atelier."
  },
  {
    id: 6,
    title: "Les Tournesols",
    artist: "Vincent van Gogh",
    year: 1888,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
    style: "Post-impressionnisme",
    medium: "Huile sur toile",
    dimensions: "92 × 73 cm",
    location: "National Gallery, Londres",
    description: "Van Gogh a peint cette série de tournesols pour décorer la chambre de Gauguin à Arles. Les fleurs symbolisent le cycle de la vie.",
    interpretation: "La palette entièrement jaune vibre d'une intensité solaire. Les touches épaisses donnent aux fleurs une présence presque sculpturale.",
    funFact: "Van Gogh voulait créer une « symphonie en jaune et bleu ». Il associait le jaune au bonheur."
  },
  {
    id: 7,
    title: "Le Bal du moulin de la Galette",
    artist: "Pierre-Auguste Renoir",
    year: 1876,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/1280px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    style: "Impressionnisme",
    medium: "Huile sur toile",
    dimensions: "131 × 175 cm",
    location: "Musée d'Orsay, Paris",
    description: "Cette scène joyeuse capture l'atmosphère d'un bal populaire à Montmartre. Les danseurs incarnent la joie de vivre parisienne.",
    interpretation: "Renoir excelle dans le rendu de la lumière tachetée sur les visages. Les touches rapides créent un effet de mouvement et de gaieté.",
    funFact: "Renoir a peint ce tableau sur place, faisant porter la toile chaque jour de son atelier au moulin."
  },
  {
    id: 8,
    title: "La Grande Vague de Kanagawa",
    artist: "Katsushika Hokusai",
    year: 1831,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    style: "Ukiyo-e",
    medium: "Estampe sur bois",
    dimensions: "25 × 37 cm",
    location: "Metropolitan Museum, New York",
    description: "Cette estampe iconique montre une vague gigantesque menaçant trois bateaux, avec le mont Fuji serein à l'arrière-plan.",
    interpretation: "Le contraste entre la violence de la mer et la montagne immuable crée une tension dramatique. Le bleu de Prusse révolutionne l'art japonais.",
    funFact: "Hokusai avait 70 ans quand il a créé cette œuvre. Il disait vouloir peindre jusqu'à 110 ans."
  }
];

/**
 * Page Œuvre du Jour - Design immersif avec texte SUR l'image
 */
const DailyArtPage = () => {
  const [currentPainting, setCurrentPainting] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Déterminer l'œuvre basée sur la date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const paintingIndex = dayOfYear % paintings.length;
    setCurrentPainting(paintings[paintingIndex]);
  }, []);

  // Gérer le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Changer d'œuvre
  const changePainting = (direction) => {
    const currentIndex = paintings.findIndex(p => p.id === currentPainting.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % paintings.length
      : (currentIndex - 1 + paintings.length) % paintings.length;
    setCurrentPainting(paintings[newIndex]);
    setIsLiked(false);
    setIsSaved(false);
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

  return (
    <div className="bg-[#0c0c0c] text-white min-h-[400vh]">
      {/* Image fixe en arrière-plan - PLEIN ÉCRAN */}
      <div className="fixed inset-0 z-0">
        <img
          src={currentPainting.image}
          alt={currentPainting.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay qui s'assombrit au scroll pour lire le texte */}
        <div
          className="absolute inset-0 bg-[#0c0c0c] transition-opacity duration-500"
          style={{ opacity: Math.min(scrollY / windowHeight * 0.7, 0.75) }}
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

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-4 rounded-full backdrop-blur-md transition-all ${
                isLiked ? 'bg-red-500/80 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-4 rounded-full backdrop-blur-md transition-all ${
                isSaved ? 'bg-[#e07a5f]/80 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

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

          {/* Interprétation */}
          <div
            className={`max-w-3xl w-full py-24 transition-all duration-1000 ${
              showInterpretation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-6 drop-shadow-lg">
              Interprétation
            </h3>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light drop-shadow-xl">
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
              <span className="text-5xl mb-6 block">💡</span>
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

        {/* Navigation vers d'autres œuvres */}
        <section className="py-24 px-6 bg-[#0c0c0c]">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-4 text-center">
              Explorer
            </h3>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-12">
              Autres chefs-d'œuvre
            </h2>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => changePainting('prev')}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                Précédent
              </button>
              <button
                onClick={() => changePainting('next')}
                className="flex items-center gap-2 px-6 py-3 bg-[#e07a5f] text-[#0c0c0c] font-medium rounded-full hover:bg-[#e8968a] transition-all"
              >
                Suivant
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Grille des autres œuvres */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {paintings
                .filter(p => p.id !== currentPainting.id)
                .slice(0, 4)
                .map((painting) => (
                  <button
                    key={painting.id}
                    onClick={() => {
                      setCurrentPainting(painting);
                      setIsLiked(false);
                      setIsSaved(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
                  >
                    <img
                      src={painting.image}
                      alt={painting.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium line-clamp-2">{painting.title}</p>
                      <p className="text-white/60 text-xs mt-1">{painting.artist}</p>
                    </div>
                  </button>
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

export default DailyArtPage;
