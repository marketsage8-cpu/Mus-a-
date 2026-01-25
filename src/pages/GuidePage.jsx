import { BookOpen, MapPin, Clock, Users } from 'lucide-react';

/**
 * Page des guides pour découvrir les musées
 */
const GuidePage = () => {
  const guides = [
    {
      id: 1,
      title: "Le Louvre en 2 heures",
      description: "Découvrez les incontournables du plus grand musée du monde",
      duration: "2h",
      highlights: ["La Joconde", "Vénus de Milo", "Victoire de Samothrace"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1280px-Louvre_Museum_Wikimedia_Commons.jpg"
    },
    {
      id: 2,
      title: "Musée d'Orsay - Impressionnisme",
      description: "Plongez dans l'univers des impressionnistes",
      duration: "1h30",
      highlights: ["Les Nymphéas", "Le Déjeuner sur l'herbe", "L'Origine du monde"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mus%C3%A9e_d%27Orsay%2C_North-West_view%2C_Paris_7e_140402.jpg/1280px-Mus%C3%A9e_d%27Orsay%2C_North-West_view%2C_Paris_7e_140402.jpg"
    },
    {
      id: 3,
      title: "Centre Pompidou - Art moderne",
      description: "Explorez les chefs-d'œuvre de l'art contemporain",
      duration: "1h45",
      highlights: ["Fontaine de Duchamp", "Bleu de Klein", "Compressions de César"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Centre_Georges-Pompidou_04.jpg/1280px-Centre_Georges-Pompidou_04.jpg"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8" style={{ backgroundColor: '#1e2a42' }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
        <div className="text-center mb-12">
          <h1 className="font-serif-italic text-3xl md:text-4xl text-[#d4a574] mb-4">
            Guides de visite
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des parcours thématiques pour explorer les musées selon vos envies et votre temps disponible.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4a574]/50 transition-all group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{guide.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#d4a574] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {guide.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {guide.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#d4a574]/20 text-[#d4a574] text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-gray-400 text-sm">
            <BookOpen className="w-4 h-4" />
            <span>Plus de guides à venir...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
