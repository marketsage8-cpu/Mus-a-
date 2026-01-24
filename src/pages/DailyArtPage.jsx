import { useState, useEffect } from 'react';
import { MapPin, Heart, ChevronLeft, ChevronRight, Bookmark, Sparkles } from 'lucide-react';

/**
 * Base de données des œuvres d'art pour la découverte
 * Enrichie avec analyses approfondies et biographies des artistes
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
    description: "Cette œuvre emblématique commémore les Trois Glorieuses, les journées révolutionnaires des 27, 28 et 29 juillet 1830 à Paris. Delacroix fusionne allégorie et réalisme dans une composition pyramidale saisissante : la figure de la Liberté, à la fois déesse antique et femme du peuple, brandit le drapeau tricolore au sommet d'une barricade jonchée de corps. La palette contrastée — le bleu, blanc, rouge éclatant sur les tons terreux et sombres — crée un effet dramatique puissant. Cette œuvre incarne le manifeste du romantisme pictural français, où l'émotion et le mouvement priment sur la raison classique.",
    funFact: "Le tableau a été caché pendant plusieurs années car jugé trop subversif par les autorités. Delacroix s'est représenté lui-même comme le bourgeois au chapeau haut-de-forme.",
    artistImage: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Eug%C3%A8ne_Delacroix_%28Nadar%29.jpg",
    artistBio: "Eugène Delacroix (1798-1863), chef de file du romantisme français, était un coloriste virtuose admiré de Van Gogh et Cézanne. Fils supposé de Talleyrand, il a mené une vie mondaine tout en peignant avec passion. Son voyage au Maroc en 1832 a profondément influencé sa palette. Il écrivait dans son journal : « Ce qu'il y a de plus réel pour moi, ce sont les illusions que je crée avec ma peinture. »",
    artistAnecdotes: [
      "Il portait toujours sur lui un petit carnet pour croquer les scènes de rue",
      "Il entretenait une rivalité artistique féroce avec Ingres, le chef du néoclassicisme",
      "Son atelier parisien est aujourd'hui un musée dédié à son œuvre"
    ]
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
    description: "Les Nymphéas représentent l'aboutissement de quarante années d'observation obsessionnelle de la lumière sur l'eau. Dans cette toile, Monet abolit la distinction traditionnelle entre sujet et fond : le ciel se reflète dans l'étang, les nénuphars flottent dans un espace sans horizon ni perspective. La touche visible et fragmentée capte les vibrations lumineuses à différents moments de la journée. Cette série révolutionnaire annonce l'abstraction du XXe siècle — Mark Rothko et les expressionnistes abstraits s'en réclameront. Monet disait vouloir peindre « l'instantanéité, l'enveloppe surtout, la même lumière répandue partout ».",
    funFact: "Monet a continué à peindre les Nymphéas même après avoir développé une cataracte, produisant des œuvres aux teintes rouges inhabituelles dues à sa vision altérée. Il a fait détruire certaines toiles qu'il jugeait indignes.",
    artistImage: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_Monet_1899_Nadar.jpg",
    artistBio: "Claude Monet (1840-1926), fondateur de l'impressionnisme, a consacré sa vie à capturer les variations infinies de la lumière. Après une jeunesse difficile, il a créé à Giverny le jardin qui deviendrait son ultime sujet. Marié deux fois, père de huit enfants, il a traversé des périodes de pauvreté extrême avant de connaître le succès. À la fin de sa vie, presque aveugle, il peignait encore, guidé par l'étiquette des tubes de peinture.",
    artistAnecdotes: [
      "Il se levait à 3h30 du matin pour peindre l'aube sur ses nymphéas",
      "Il a fait creuser l'étang de Giverny et détourner un ruisseau pour créer son jardin d'eau",
      "Clemenceau l'a convaincu de faire don des grandes toiles des Nymphéas à l'État français"
    ]
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
    description: "Initialement nommé 'Le Poète', cette sculpture représentait Dante contemplant les cercles de l'Enfer au sommet de La Porte de l'Enfer. La tension musculaire extraordinaire du corps nu contraste avec l'immobilité méditative de la pose. Rodin a révolutionné la sculpture en montrant l'effort physique de la pensée — le menton appuyé sur le dos de la main (non sur la paume, geste plus naturel), les orteils crispés, le dos courbé. Cette anatomie tourmentée exprime que penser est un acte corporel total, une lutte de l'esprit contre la matière.",
    funFact: "Il existe plus de 25 tirages originaux en bronze du Penseur à travers le monde. L'un d'eux, placé sur la tombe de Rodin à Meudon, veille éternellement sur le sculpteur.",
    artistImage: "https://upload.wikimedia.org/wikipedia/commons/8/82/Auguste_Rodin_by_George_Charles_Beresford_%28NPG_x6573%29.jpg",
    artistBio: "Auguste Rodin (1840-1917), le plus célèbre sculpteur de la modernité, a transformé cet art figé en expression vivante. Recalé trois fois à l'École des Beaux-Arts, il a travaillé comme artisan avant d'être accusé de moulage sur nature pour L'Âge d'airain — preuve de son réalisme troublant. Sa relation passionnée avec Camille Claudel a marqué son œuvre. À sa mort, il a légué son atelier et ses œuvres à l'État français.",
    artistAnecdotes: [
      "Il modelait souvent les yeux caves pour que la lumière y crée des ombres expressives",
      "Ses sculptures étaient jugées si réalistes qu'on l'accusa de mouler des corps vivants",
      "Il gardait des dizaines de mains et pieds sculptés dans son atelier pour les assembler"
    ]
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
    description: "Peinte depuis la fenêtre de sa chambre à l'asile de Saint-Rémy-de-Provence après sa crise de folie, cette œuvre transcende la réalité observable. Le ciel occupe les deux tiers de la composition, animé de spirales cosmiques et d'étoiles irradiantes qui semblent pulser d'une énergie surnaturelle. Le cyprès au premier plan, flamme sombre montant vers le ciel, fait le lien entre le village endormi et le cosmos en mouvement. Van Gogh y exprime sa quête spirituelle : « Regarder les étoiles me fait toujours rêver. Pourquoi les points lumineux du ciel nous seraient-ils moins accessibles que les points noirs sur la carte de France ? » Cette vision hallucinée préfigure l'expressionnisme.",
    funFact: "Van Gogh considérait cette peinture comme un échec, lui préférant des œuvres plus réalistes. Il ne l'a jamais vendue. Aujourd'hui, elle est l'une des images les plus reproduites de l'histoire de l'art.",
    artistImage: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    artistBio: "Vincent van Gogh (1853-1890), génie incompris de son vivant, n'a vendu qu'un seul tableau. Après des échecs comme marchand d'art et prédicateur, il s'est consacré à la peinture à 27 ans, produisant plus de 2000 œuvres en seulement dix ans. Sa correspondance avec son frère Théo révèle un homme cultivé et passionné. Sa vie tragique — pauvreté, maladie mentale, suicide à 37 ans — a contribué au mythe de l'artiste maudit.",
    artistAnecdotes: [
      "Il a réalisé plus de 30 autoportraits car il n'avait pas d'argent pour payer des modèles",
      "Il mangeait parfois sa peinture, ce qui a pu aggraver son état mental",
      "Son oreille coupée reste un mystère — automutilation ou bagarre avec Gauguin ?"
    ]
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
    description: "Découverte en 1820 par un paysan sur l'île de Milos, cette sculpture incarne l'idéal de beauté féminine depuis deux millénaires. Son attribution reste débattue : œuvre d'Alexandros d'Antioche ou création plus tardive ? La position en contrapposto (hanches et épaules désaxées) crée une torsion dynamique du corps. Le drapé glissant sur les hanches, à la limite de la chute, ajoute une tension érotique subtile. L'absence des bras, loin d'être un défaut, confère à la statue son mystère : tenait-elle une pomme, un miroir, un bouclier ? Cette incomplétude invite le regard à compléter mentalement l'œuvre.",
    funFact: "Personne ne sait avec certitude ce que tenaient ses bras disparus. Lors de son transport vers la France, les bras ont peut-être été perdus dans une bagarre entre Français et Turcs.",
    artistImage: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bust_Homer_BM_1825.jpg",
    artistBio: "L'artiste de la Vénus de Milo reste anonyme, comme la plupart des sculpteurs grecs dont les œuvres nous sont parvenues. Une inscription mentionnant « Alexandros d'Antioche » a été retrouvée près de la statue, mais sa connexion avec l'œuvre est contestée. La période hellénistique (323-31 av. J.-C.) se caractérise par un réalisme accru et une recherche de l'émotion, rompant avec l'idéalisme classique.",
    artistAnecdotes: [
      "Les sculpteurs grecs peignaient leurs statues de couleurs vives — la blancheur du marbre est un accident de l'histoire",
      "Les proportions de la Vénus suivent le canon de Polyclète, mais avec des adaptations hellénistiques",
      "Elle a inspiré des milliers d'artistes, de Botticelli à Dalí"
    ]
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
    description: "Cette toile monumentale — la plus grande du Louvre — représente le couronnement de Napoléon à Notre-Dame le 2 décembre 1804. David, peintre officiel de l'Empereur, y déploie une mise en scène théâtrale de la légitimité impériale. L'instant choisi est symbolique : Napoléon couronne lui-même Joséphine, affirmant son pouvoir face au pape Pie VII, relégué à un rôle de simple spectateur. Les 191 personnages identifiables forment un document historique autant qu'une œuvre d'art. La lumière dorée, les tissus somptueux, l'architecture grandiose créent une atmosphère de sacralité laïque, fusion de l'héritage révolutionnaire et de la pompe monarchique.",
    funFact: "La mère de Napoléon, Letizia, apparaît au centre de la tribune, mais elle n'était pas présente à la cérémonie — elle boudait le mariage de son fils. Napoléon a exigé son inclusion.",
    artistImage: "https://upload.wikimedia.org/wikipedia/commons/2/27/David_Self_Portrait.jpg",
    artistBio: "Jacques-Louis David (1748-1825), maître du néoclassicisme, fut le peintre de trois régimes : la monarchie, la Révolution (dont il fut un acteur politique votant la mort du roi) et l'Empire. Ses tableaux d'histoire ont façonné l'imagerie révolutionnaire et napoléonienne. Exilé à Bruxelles après Waterloo, il y mourut sans avoir revu Paris. Son influence sur l'art académique a perduré un siècle.",
    artistAnecdotes: [
      "Il a mis trois ans à peindre Le Sacre, travaillant dans une église désaffectée",
      "Napoléon a visité l'atelier et s'est exclamé : « C'est bien, très bien, David ! »",
      "Il avait une tumeur à la joue qui déformait son visage et affectait son élocution"
    ]
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
    description: "Cette œuvre monumentale dépeint le naufrage de la frégate Méduse en 1816 et l'agonie de 147 personnes abandonnées sur un radeau pendant 13 jours. Géricault a choisi le moment où les survivants aperçoivent le navire Argus à l'horizon — un instant entre désespoir et espoir. La composition pyramidale, culminant vers le personnage noir agitant un tissu, exprime cette tension. Les corps entrelacés, entre vivants, mourants et morts, créent une chorégraphie macabre. Le scandale politique (l'incompétence d'un capitaine royaliste) se mue en méditation universelle sur la condition humaine face à l'adversité.",
    funFact: "Géricault a étudié des cadavres à la morgue et fait construire un radeau grandeur nature dans son atelier. Il a rasé ses cheveux pour s'isoler du monde et interviewer les survivants.",
    artistImage: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Horace_Vernet_-_Jean_Louis_Th%C3%A9odore_G%C3%A9ricault_on_his_Deathbed_-_WGA25026.jpg",
    artistBio: "Théodore Géricault (1791-1824), météore du romantisme français, est mort à 32 ans après une chute de cheval. Riche héritier, passionné de chevaux, il a brûlé sa vie avec intensité. Son Radeau de la Méduse, peint à 27 ans, a révolutionné la peinture d'histoire en traitant un fait divers comme une épopée. Ses portraits d'aliénés, réalisés à la fin de sa vie, anticipent la psychiatrie moderne.",
    artistAnecdotes: [
      "Il gardait des membres amputés dans son atelier pour étudier la décomposition des chairs",
      "Il a eu une liaison secrète avec la femme de son oncle, qui lui a donné un fils",
      "Delacroix a posé pour l'un des cadavres du premier plan du Radeau"
    ]
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
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              💡 {currentArtwork.funFact}
            </p>

            {/* Section Artiste */}
            {currentArtwork.artistImage && (
              <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                <div className="flex gap-4 mb-3">
                  <img
                    src={currentArtwork.artistImage}
                    alt={currentArtwork.artist}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#d4a574]/50"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#d4a574] font-medium text-sm mb-1">L'artiste</h3>
                    <p className="text-white text-sm font-semibold">{currentArtwork.artist}</p>
                  </div>
                </div>

                {currentArtwork.artistBio && (
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">
                    {currentArtwork.artistBio}
                  </p>
                )}

                {currentArtwork.artistAnecdotes && currentArtwork.artistAnecdotes.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[#d4a574] text-xs font-medium uppercase tracking-wider">Anecdotes</p>
                    {currentArtwork.artistAnecdotes.map((anecdote, index) => (
                      <div key={index} className="flex gap-2 text-xs text-gray-400">
                        <span className="text-[#d4a574]">•</span>
                        <span>{anecdote}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

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
