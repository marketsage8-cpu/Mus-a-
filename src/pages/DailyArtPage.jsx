import { useState, useEffect, useRef } from 'react';
import { Heart, Bookmark, ChevronDown, MapPin, Palette, Calendar, Ruler } from 'lucide-react';

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
    description: "Cette œuvre emblématique commémore les Trois Glorieuses, les journées révolutionnaires des 27, 28 et 29 juillet 1830 à Paris. Delacroix fusionne allégorie et réalisme dans une composition pyramidale saisissante : la figure de la Liberté, à la fois déesse antique et femme du peuple, brandit le drapeau tricolore au sommet d'une barricade jonchée de corps.",
    analysis: "La palette contrastée — le bleu, blanc, rouge éclatant sur les tons terreux et sombres — crée un effet dramatique puissant. Cette œuvre incarne le manifeste du romantisme pictural français, où l'émotion et le mouvement priment sur la raison classique.",
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
    description: "Les Nymphéas représentent l'aboutissement de quarante années d'observation obsessionnelle de la lumière sur l'eau. Dans cette toile, Monet abolit la distinction traditionnelle entre sujet et fond : le ciel se reflète dans l'étang, les nénuphars flottent dans un espace sans horizon ni perspective.",
    analysis: "La touche visible et fragmentée capte les vibrations lumineuses à différents moments de la journée. Cette série révolutionnaire annonce l'abstraction du XXe siècle — Mark Rothko et les expressionnistes abstraits s'en réclameront.",
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
    description: "Peinte depuis la fenêtre de sa chambre à l'asile de Saint-Rémy-de-Provence après sa crise de folie, cette œuvre transcende la réalité observable. Le ciel occupe les deux tiers de la composition, animé de spirales cosmiques et d'étoiles irradiantes qui semblent pulser d'une énergie surnaturelle.",
    analysis: "Le cyprès au premier plan, flamme sombre montant vers le ciel, fait le lien entre le village endormi et le cosmos en mouvement. Van Gogh y exprime sa quête spirituelle et cette vision hallucinée préfigure l'expressionnisme.",
    funFact: "Van Gogh considérait cette peinture comme un échec, lui préférant des œuvres plus réalistes. Il ne l'a jamais vendue."
  },
  {
    id: 4,
    title: "Le Sacre de Napoléon",
    artist: "Jacques-Louis David",
    year: 1807,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jacques-Louis_David%2C_The_Coronation_of_Napoleon.jpg/1280px-Jacques-Louis_David%2C_The_Coronation_of_Napoleon.jpg",
    style: "Néoclassicisme",
    medium: "Huile sur toile",
    dimensions: "621 × 979 cm",
    location: "Musée du Louvre, Paris",
    description: "Cette toile monumentale — la plus grande du Louvre — représente le couronnement de Napoléon à Notre-Dame le 2 décembre 1804. David, peintre officiel de l'Empereur, y déploie une mise en scène théâtrale de la légitimité impériale.",
    analysis: "L'instant choisi est symbolique : Napoléon couronne lui-même Joséphine, affirmant son pouvoir face au pape Pie VII. Les 191 personnages identifiables forment un document historique autant qu'une œuvre d'art.",
    funFact: "La mère de Napoléon apparaît au centre mais elle n'était pas présente — elle boudait le mariage de son fils."
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
    description: "Cette œuvre monumentale dépeint le naufrage de la frégate Méduse en 1816 et l'agonie de 147 personnes abandonnées sur un radeau pendant 13 jours. Géricault a choisi le moment où les survivants aperçoivent le navire Argus à l'horizon.",
    analysis: "La composition pyramidale, culminant vers le personnage noir agitant un tissu, exprime la tension entre désespoir et espoir. Les corps entrelacés créent une chorégraphie macabre et universelle.",
    funFact: "Géricault a étudié des cadavres à la morgue et fait construire un radeau grandeur nature dans son atelier."
  },
  {
    id: 6,
    title: "La Jeune Fille à la perle",
    artist: "Johannes Vermeer",
    year: 1665,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    style: "Baroque hollandais",
    medium: "Huile sur toile",
    dimensions: "44,5 × 39 cm",
    location: "Mauritshuis, La Haye",
    description: "Surnommée la « Joconde du Nord », cette œuvre énigmatique représente une jeune femme au turban bleu et jaune, tournant la tête vers le spectateur. Son regard direct et sa bouche entrouverte créent une intimité troublante.",
    analysis: "Vermeer maîtrise magistralement la lumière qui caresse le visage et fait briller la perle — peut-être pas une vraie perle mais un reflet de verre peint. Le fond sombre fait ressortir la luminosité du sujet.",
    funFact: "L'identité du modèle reste un mystère. Certains pensent qu'il s'agit de la fille de Vermeer, d'autres d'une servante."
  },
  {
    id: 7,
    title: "Le Déjeuner sur l'herbe",
    artist: "Édouard Manet",
    year: 1863,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
    style: "Réalisme / Préimpressionnisme",
    medium: "Huile sur toile",
    dimensions: "208 × 265 cm",
    location: "Musée d'Orsay, Paris",
    description: "Ce tableau a provoqué un scandale au Salon des Refusés de 1863. Une femme nue, au regard franc, est assise parmi des hommes habillés en costume contemporain, dans un décor de pique-nique.",
    analysis: "Manet rompt avec les conventions : la nudité n'est pas mythologique mais moderne et provocante. La perspective aplatie et l'éclairage frontal annoncent la révolution impressionniste.",
    funFact: "Le modèle nu est Victorine Meurent, qui posera aussi pour Olympia, autre tableau scandaleux de Manet."
  },
  {
    id: 8,
    title: "Les Tournesols",
    artist: "Vincent van Gogh",
    year: 1888,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
    style: "Post-impressionnisme",
    medium: "Huile sur toile",
    dimensions: "92 × 73 cm",
    location: "National Gallery, Londres",
    description: "Van Gogh a peint cette série de tournesols pour décorer la chambre de Gauguin à Arles. Les fleurs, à différents stades de floraison et de flétrissure, symbolisent le cycle de la vie.",
    analysis: "La palette entièrement jaune — du citron au bronze — vibre d'une intensité solaire. Les touches épaisses et les contours marqués donnent aux fleurs une présence presque sculpturale.",
    funFact: "Van Gogh voulait créer une « symphonie en jaune et bleu ». Il associait le jaune au bonheur et à l'amitié."
  },
  {
    id: 9,
    title: "La Grande Vague de Kanagawa",
    artist: "Katsushika Hokusai",
    year: 1831,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    style: "Ukiyo-e",
    medium: "Estampe sur bois",
    dimensions: "25 × 37 cm",
    location: "Metropolitan Museum, New York",
    description: "Cette estampe iconique montre une vague gigantesque menaçant trois bateaux de pêcheurs, avec le mont Fuji serein à l'arrière-plan. Le contraste entre la violence de la mer et la montagne immuable crée une tension dramatique.",
    analysis: "Hokusai utilise le bleu de Prusse, pigment alors nouveau au Japon, pour ses dégradés subtils. La composition asymétrique et le cadrage audacieux ont profondément influencé les impressionnistes.",
    funFact: "Hokusai avait 70 ans quand il a créé cette œuvre. Il disait : « À 110 ans, chaque point, chaque ligne seront vivants »."
  },
  {
    id: 10,
    title: "Le Bal du moulin de la Galette",
    artist: "Pierre-Auguste Renoir",
    year: 1876,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/1280px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    style: "Impressionnisme",
    medium: "Huile sur toile",
    dimensions: "131 × 175 cm",
    location: "Musée d'Orsay, Paris",
    description: "Cette scène joyeuse capture l'atmosphère d'un bal populaire à Montmartre. Les danseurs, baignés d'une lumière tamisée filtrant à travers les arbres, incarnent la joie de vivre parisienne.",
    analysis: "Renoir excelle dans le rendu de la lumière dappled (tachetée) sur les visages et les vêtements. Les touches rapides et les couleurs vives créent un effet de mouvement et de gaieté.",
    funFact: "Renoir a peint ce tableau sur place, faisant porter la toile chaque jour de son atelier au moulin par ses amis."
  }
];

/**
 * Page Œuvre du Jour - Design immersif avec scroll reveal
 */
const DailyArtPage = () => {
  const [currentPainting, setCurrentPainting] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const containerRef = useRef(null);

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

  // Scroll vers le contenu
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: 'smooth'
    });
  };

  if (!currentPainting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c]">
        <div className="w-8 h-8 border-2 border-[#e07a5f] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Calculs pour les animations basées sur le scroll
  const opacity = Math.min(scrollY / 400, 1);
  const titleOpacity = Math.min(Math.max((scrollY - 100) / 300, 0), 1);
  const descOpacity = Math.min(Math.max((scrollY - 250) / 300, 0), 1);
  const analysisOpacity = Math.min(Math.max((scrollY - 450) / 300, 0), 1);
  const factOpacity = Math.min(Math.max((scrollY - 650) / 300, 0), 1);
  const infoOpacity = Math.min(Math.max((scrollY - 850) / 300, 0), 1);

  return (
    <div ref={containerRef} className="bg-[#0c0c0c] text-white">
      {/* Image plein écran fixe */}
      <div className="fixed inset-0 z-0">
        <img
          src={currentPainting.image}
          alt={currentPainting.title}
          className="w-full h-full object-cover"
          style={{
            transform: `scale(${1 + scrollY * 0.0002})`,
            filter: `brightness(${1 - opacity * 0.5})`
          }}
        />
        {/* Overlay progressif */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent"
          style={{ opacity: 0.3 + opacity * 0.7 }}
        />
      </div>

      {/* Contenu scrollable */}
      <div className="relative z-10">
        {/* Section Hero - Plein écran */}
        <section className="h-screen flex flex-col items-center justify-end pb-16 px-6">
          {/* Badge œuvre du jour */}
          <div
            className="mb-6 px-4 py-2 bg-[#e07a5f]/20 backdrop-blur-sm border border-[#e07a5f]/30 rounded-full"
            style={{ opacity: 1 - opacity }}
          >
            <span className="text-[#e07a5f] text-sm font-medium tracking-wider uppercase">
              Œuvre du jour
            </span>
          </div>

          {/* Titre initial */}
          <h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-center mb-4 text-white drop-shadow-2xl"
            style={{ opacity: 1 - opacity, transform: `translateY(${scrollY * 0.3}px)` }}
          >
            {currentPainting.title}
          </h1>

          {/* Artiste */}
          <p
            className="text-xl md:text-2xl text-[#e07a5f] mb-8"
            style={{ opacity: 1 - opacity }}
          >
            {currentPainting.artist}, {currentPainting.year}
          </p>

          {/* Boutons d'action */}
          <div
            className="flex gap-4 mb-12"
            style={{ opacity: 1 - opacity * 0.8 }}
          >
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

          {/* Indicateur de scroll */}
          <button
            onClick={scrollToContent}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors animate-bounce"
            style={{ opacity: 1 - opacity }}
          >
            <span className="text-sm tracking-widest uppercase">Découvrir</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </section>

        {/* Section Texte qui apparaît au scroll */}
        <section className="min-h-[200vh] px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            {/* Titre réapparaît */}
            <div
              className="py-24 transition-all duration-700"
              style={{
                opacity: titleOpacity,
                transform: `translateY(${(1 - titleOpacity) * 50}px)`
              }}
            >
              <h2 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight">
                {currentPainting.title}
              </h2>
              <p className="text-2xl text-[#e07a5f] italic">
                {currentPainting.artist}
              </p>
            </div>

            {/* Description */}
            <div
              className="py-16 transition-all duration-700"
              style={{
                opacity: descOpacity,
                transform: `translateY(${(1 - descOpacity) * 50}px)`
              }}
            >
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                {currentPainting.description}
              </p>
            </div>

            {/* Analyse */}
            <div
              className="py-16 transition-all duration-700"
              style={{
                opacity: analysisOpacity,
                transform: `translateY(${(1 - analysisOpacity) * 50}px)`
              }}
            >
              <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-6">
                Analyse
              </h3>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                {currentPainting.analysis}
              </p>
            </div>

            {/* Fun Fact */}
            <div
              className="py-16 transition-all duration-700"
              style={{
                opacity: factOpacity,
                transform: `translateY(${(1 - factOpacity) * 50}px)`
              }}
            >
              <div className="p-8 bg-[#e07a5f]/10 backdrop-blur-sm rounded-3xl border border-[#e07a5f]/20">
                <span className="text-4xl mb-4 block">💡</span>
                <h3 className="text-[#e07a5f] font-medium text-lg mb-3">
                  Le saviez-vous ?
                </h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  {currentPainting.funFact}
                </p>
              </div>
            </div>

            {/* Informations techniques */}
            <div
              className="py-16 pb-32 transition-all duration-700"
              style={{
                opacity: infoOpacity,
                transform: `translateY(${(1 - infoOpacity) * 50}px)`
              }}
            >
              <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-8">
                Informations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl">
                  <Palette className="w-6 h-6 text-[#e07a5f]" />
                  <div>
                    <p className="text-white/50 text-sm">Style</p>
                    <p className="text-white text-lg">{currentPainting.style}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl">
                  <Calendar className="w-6 h-6 text-[#e07a5f]" />
                  <div>
                    <p className="text-white/50 text-sm">Technique</p>
                    <p className="text-white text-lg">{currentPainting.medium}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl">
                  <Ruler className="w-6 h-6 text-[#e07a5f]" />
                  <div>
                    <p className="text-white/50 text-sm">Dimensions</p>
                    <p className="text-white text-lg">{currentPainting.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl">
                  <MapPin className="w-6 h-6 text-[#e07a5f]" />
                  <div>
                    <p className="text-white/50 text-sm">Localisation</p>
                    <p className="text-white text-lg">{currentPainting.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section galerie des autres œuvres */}
        <section className="py-24 px-6 bg-[#0c0c0c]">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-[#e07a5f] text-sm uppercase tracking-[0.3em] mb-4 text-center">
              Découvrir aussi
            </h3>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-12">
              Les œuvres précédentes
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {paintings
                .filter(p => p.id !== currentPainting.id)
                .slice(0, 5)
                .map((painting, i) => (
                  <button
                    key={painting.id}
                    onClick={() => {
                      setCurrentPainting(painting);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
                  >
                    <img
                      src={painting.image}
                      alt={painting.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
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

      {/* CSS pour les animations */}
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
