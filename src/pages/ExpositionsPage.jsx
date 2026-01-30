import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, ChevronRight, Filter, X, Heart, Bookmark } from 'lucide-react';

/**
 * Base de données des expositions éphémères en France
 */
const expositions = [
  {
    id: 1,
    title: "Monet - L'immersion",
    museum: "Atelier des Lumières",
    city: "Paris",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800&q=80",
    dateStart: "15 Fév 2026",
    dateEnd: "31 Août 2026",
    daysLeft: 45,
    price: "16€",
    description: "Plongez dans l'univers des Nymphéas avec cette exposition immersive exceptionnelle.",
    tags: ["Impressionnisme", "Numérique", "Immersif"],
    distance: 0.5
  },
  {
    id: 2,
    title: "Picasso - Métamorphoses",
    museum: "Musée Picasso",
    city: "Paris",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    dateStart: "1 Mars 2026",
    dateEnd: "15 Juin 2026",
    daysLeft: 28,
    price: "14€",
    description: "Les transformations artistiques du maître du cubisme à travers 200 œuvres.",
    tags: ["Cubisme", "Art moderne"],
    distance: 1.2
  },
  {
    id: 3,
    title: "Van Gogh - La nuit étoilée",
    museum: "Musée d'Orsay",
    city: "Paris",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    dateStart: "20 Jan 2026",
    dateEnd: "30 Avril 2026",
    daysLeft: 12,
    price: "Gratuit -26 ans",
    description: "Redécouvrez les chefs-d'œuvre nocturnes de Van Gogh sous un nouvel éclairage.",
    tags: ["Post-impressionnisme", "Peinture"],
    distance: 0.8
  },
  {
    id: 4,
    title: "Égypte des Pharaons",
    museum: "Institut du Monde Arabe",
    city: "Paris",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
    dateStart: "1 Fév 2026",
    dateEnd: "31 Mai 2026",
    daysLeft: 35,
    price: "12€",
    description: "3000 ans d'histoire égyptienne à travers des trésors inédits.",
    tags: ["Antiquité", "Archéologie"],
    distance: 1.5
  },
  {
    id: 5,
    title: "Frida Kahlo - Corps et âme",
    museum: "Palais Galliera",
    city: "Paris",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    dateStart: "10 Mars 2026",
    dateEnd: "20 Juillet 2026",
    daysLeft: 58,
    price: "15€",
    description: "L'univers intime de Frida à travers ses vêtements et autoportraits.",
    tags: ["Art mexicain", "Portrait"],
    distance: 2.3
  },
  {
    id: 6,
    title: "Impressionnistes en Normandie",
    museum: "MuMa Le Havre",
    city: "Le Havre",
    image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80",
    dateStart: "1 Avril 2026",
    dateEnd: "30 Sept 2026",
    daysLeft: 90,
    price: "10€",
    description: "Les paysages normands qui ont inspiré Monet, Renoir et Boudin.",
    tags: ["Impressionnisme", "Paysage"],
    distance: 3.5
  },
  {
    id: 7,
    title: "L'Art de la Renaissance",
    museum: "Château de Chambord",
    city: "Chambord",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    dateStart: "15 Mai 2026",
    dateEnd: "15 Nov 2026",
    daysLeft: 120,
    price: "14,50€",
    description: "Léonard de Vinci et les génies de la Renaissance italienne.",
    tags: ["Renaissance", "Château"],
    distance: 5.2
  },
  {
    id: 8,
    title: "Street Art Revolution",
    museum: "Musée d'Art Contemporain",
    city: "Lyon",
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80",
    dateStart: "1 Juin 2026",
    dateEnd: "31 Déc 2026",
    daysLeft: 150,
    price: "8€",
    description: "Banksy, JR, Invader : les maîtres du street art réunis.",
    tags: ["Art urbain", "Contemporain"],
    distance: 8.5
  },
  {
    id: 9,
    title: "Hokusai - La grande vague",
    museum: "Musée Guimet",
    city: "Paris",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
    dateStart: "20 Fév 2026",
    dateEnd: "20 Mai 2026",
    daysLeft: 22,
    price: "11€",
    description: "L'art japonais à son apogée : estampes et peintures du maître Hokusai.",
    tags: ["Art japonais", "Estampe"],
    distance: 1.8
  },
  {
    id: 10,
    title: "Vermeer - Lumière du Nord",
    museum: "Musée du Louvre",
    city: "Paris",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
    dateStart: "1 Mars 2026",
    dateEnd: "30 Juin 2026",
    daysLeft: 42,
    price: "17€",
    description: "Les secrets de la lumière dans l'œuvre de Vermeer.",
    tags: ["Baroque", "Peinture hollandaise"],
    distance: 0.6
  }
];

const distanceFilters = [
  { label: '500 m', value: 0.5 },
  { label: '1 km', value: 1 },
  { label: '2 km', value: 2 },
  { label: '3 km', value: 3 },
  { label: '5 km', value: 5 },
  { label: '10 km', value: 10 }
];

/**
 * Page Expositions Éphémères - Style Muzea
 */
const ExpositionsPage = () => {
  const [selectedDistance, setSelectedDistance] = useState(null);
  const [filteredExpos, setFilteredExpos] = useState(expositions);
  const [likedExpos, setLikedExpos] = useState(new Set());
  const [savedExpos, setSavedExpos] = useState(new Set());

  // Filtrer par distance
  useEffect(() => {
    if (selectedDistance === null) {
      setFilteredExpos(expositions);
    } else {
      setFilteredExpos(expositions.filter(expo => expo.distance <= selectedDistance));
    }
  }, [selectedDistance]);

  // Observer pour les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '-10% 0px', threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredExpos]);

  const toggleLike = (id) => {
    const newLiked = new Set(likedExpos);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedExpos(newLiked);
  };

  const toggleSave = (id) => {
    const newSaved = new Set(savedExpos);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedExpos(newSaved);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=1600&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/70 via-[#0c0c0c]/50 to-[#0c0c0c]" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/[0.1] rounded-full mb-6">
            <Calendar className="w-4 h-4 text-[#e07a5f]" />
            <span className="text-white/70 text-sm">Expositions temporaires</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6">
            Expositions<br />
            <em className="text-[#e07a5f]">éphémères</em>
          </h1>

          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Découvrez les expositions temporaires près de chez vous avant qu'il ne soit trop tard.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <div className="text-2xl font-serif text-[#e07a5f]">{expositions.length}</div>
              <div className="text-white/40">Expositions</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-[#e07a5f]">12</div>
              <div className="text-white/40">Villes</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-[#e07a5f]">J-12</div>
              <div className="text-white/40">Fin prochaine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres de distance */}
      <section className="sticky top-16 z-40 py-6 bg-[#0c0c0c]/95 backdrop-blur-lg border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-white/50 flex-shrink-0">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Distance :</span>
            </div>

            <button
              onClick={() => setSelectedDistance(null)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all ${
                selectedDistance === null
                  ? 'bg-[#e07a5f] text-[#0c0c0c] font-medium'
                  : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1]'
              }`}
            >
              Toutes
            </button>

            {distanceFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedDistance(filter.value)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all ${
                  selectedDistance === filter.value
                    ? 'bg-[#e07a5f] text-[#0c0c0c] font-medium'
                    : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1]'
                }`}
              >
                {filter.label}
              </button>
            ))}

            {selectedDistance !== null && (
              <button
                onClick={() => setSelectedDistance(null)}
                className="flex-shrink-0 p-2 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Liste des expositions */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header avec compteur */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl text-white">
                {filteredExpos.length} exposition{filteredExpos.length > 1 ? 's' : ''}
                {selectedDistance && (
                  <span className="text-white/40 font-normal text-xl ml-2">
                    à moins de {selectedDistance >= 1 ? `${selectedDistance} km` : `${selectedDistance * 1000} m`}
                  </span>
                )}
              </h2>
            </div>
          </div>

          {/* Grille d'expositions */}
          {filteredExpos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExpos.map((expo, i) => (
                <article
                  key={expo.id}
                  className="animate-on-scroll opacity-0 translate-y-[30px] group relative bg-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#e07a5f]/30 transition-all"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={expo.image}
                      alt={expo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />

                    {/* Badge jours restants */}
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-medium ${
                      expo.daysLeft <= 14
                        ? 'bg-red-500/90 text-white'
                        : expo.daysLeft <= 30
                          ? 'bg-orange-500/90 text-white'
                          : 'bg-[#e07a5f]/90 text-[#0c0c0c]'
                    }`}>
                      J-{expo.daysLeft}
                    </div>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => toggleLike(expo.id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                          likedExpos.has(expo.id)
                            ? 'bg-red-500/80 text-white'
                            : 'bg-black/30 text-white/70 hover:bg-black/50'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedExpos.has(expo.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => toggleSave(expo.id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                          savedExpos.has(expo.id)
                            ? 'bg-[#e07a5f]/80 text-white'
                            : 'bg-black/30 text-white/70 hover:bg-black/50'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${savedExpos.has(expo.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Distance */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white/80">
                      <MapPin className="w-3 h-3" />
                      {expo.distance < 1 ? `${expo.distance * 1000} m` : `${expo.distance} km`}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-serif text-xl text-white group-hover:text-[#e07a5f] transition-colors">
                          {expo.title}
                        </h3>
                        <p className="text-[#e07a5f] text-sm">{expo.museum}</p>
                      </div>
                    </div>

                    <p className="text-white/50 text-sm mb-4 line-clamp-2">
                      {expo.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {expo.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/[0.05] text-white/60 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                      <div className="flex items-center gap-4 text-sm text-white/40">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Jusqu'au {expo.dateEnd}
                        </span>
                      </div>
                      <span className="text-[#e07a5f] font-medium">{expo.price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/[0.05] flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white/30" />
              </div>
              <h3 className="font-serif text-2xl text-white/70 mb-3">Aucune exposition trouvée</h3>
              <p className="text-white/40 mb-6">
                Aucune exposition dans un rayon de {selectedDistance >= 1 ? `${selectedDistance} km` : `${selectedDistance * 1000} m`}
              </p>
              <button
                onClick={() => setSelectedDistance(null)}
                className="px-6 py-3 bg-[#e07a5f]/10 text-[#e07a5f] rounded-full hover:bg-[#e07a5f]/20 transition-all"
              >
                Voir toutes les expositions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] to-[#0f0f0f]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e07a5f]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Ne ratez plus<br />
            <em className="text-[#e07a5f]">aucune expo</em>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Activez les notifications pour être alerté des derniers jours des expositions qui vous intéressent.
          </p>
          <button className="px-10 py-5 bg-[#e07a5f] text-[#0c0c0c] font-medium text-lg rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-xl shadow-[#e07a5f]/20">
            Activer les alertes
          </button>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap');

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        .animate-on-scroll {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ExpositionsPage;
