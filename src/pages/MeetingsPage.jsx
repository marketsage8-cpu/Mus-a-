import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, MessageCircle, Heart, MapPin, Calendar, Clock, Star, ChevronRight, Search, Coffee, Sparkles } from 'lucide-react';

/**
 * Photos de musées et expositions
 */
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=600&q=80",
    title: "Galerie des impressionnistes",
    location: "Musée d'Orsay"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1594654842514-5e2c5d5f5b7b?w=600&q=80",
    title: "Art contemporain",
    location: "Centre Pompidou"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
    title: "Grande galerie",
    location: "Musée du Louvre"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?w=600&q=80",
    title: "Sculptures antiques",
    location: "Musée du Louvre"
  }
];

/**
 * Données fictives des utilisateurs
 */
const meetupUsers = [
  {
    id: 1,
    name: "Marie Dupont",
    age: 28,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    bio: "Passionnée d'art impressionniste et d'histoire.",
    interests: ["Impressionnisme", "Art moderne", "Histoire"],
    visitCount: 45,
    rating: 4.8,
    verified: true
  },
  {
    id: 2,
    name: "Thomas Bernard",
    age: 34,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    bio: "Guide amateur, je connais Paris comme ma poche.",
    interests: ["Architecture", "Renaissance", "Châteaux"],
    visitCount: 120,
    rating: 4.9,
    verified: true
  },
  {
    id: 3,
    name: "Sophie Martin",
    age: 25,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    bio: "Étudiante en histoire de l'art.",
    interests: ["Art contemporain", "Photographie", "Sculpture"],
    visitCount: 32,
    rating: 4.7,
    verified: true
  },
  {
    id: 4,
    name: "Lucas Petit",
    age: 31,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    bio: "Photographe amateur passionné de musées.",
    interests: ["Photographie", "Art classique", "Antiquités"],
    visitCount: 67,
    rating: 4.6,
    verified: false
  },
  {
    id: 5,
    name: "Emma Rousseau",
    age: 29,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    bio: "Je redécouvre le patrimoine français.",
    interests: ["Patrimoine", "Châteaux", "Jardins"],
    visitCount: 23,
    rating: 4.9,
    verified: true
  },
  {
    id: 6,
    name: "Antoine Leroy",
    age: 42,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    bio: "Professeur d'histoire passionné.",
    interests: ["Histoire", "Moyen-Âge", "Révolution"],
    visitCount: 89,
    rating: 5.0,
    verified: true
  }
];

/**
 * Page Rencontres - Style HomePage
 */
const MeetingsPage = () => {
  const navigate = useNavigate();

  // Observer pour les animations au scroll
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
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenu texte */}
            <div className="relative">
              <div className="animate-on-scroll opacity-0 translate-y-[20px] inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-8">
                <span className="w-2 h-2 bg-[#e07a5f] rounded-full animate-pulse" />
                <span className="text-white/60 text-sm">Communauté de passionnés</span>
              </div>

              <h1 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-5xl md:text-6xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Partagez votre<br />
                <em className="text-[#e07a5f] font-normal">passion culturelle</em>
              </h1>

              <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/60 text-lg md:text-xl max-w-lg mb-6 font-light leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Ne visitez plus jamais seul. Rencontrez des passionnés d'art et de culture près de chez vous pour des expériences partagées inoubliables.
              </p>

              <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4 mb-10 text-sm text-white/50" style={{ transitionDelay: '300ms' }}>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#e07a5f]" />
                  +2000 membres actifs
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#e07a5f]" />
                  Profils vérifiés
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#e07a5f]" />
                  Affinités culturelles
                </span>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4" style={{ transitionDelay: '400ms' }}>
                <button
                  onClick={() => navigate('/profile')}
                  className="px-8 py-4 bg-[#e07a5f] text-[#0c0c0c] font-medium rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-lg shadow-[#e07a5f]/20"
                >
                  Créer mon profil
                </button>
                <button
                  onClick={() => document.getElementById('decouvrir').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all"
                >
                  Découvrir
                </button>
              </div>
            </div>

            {/* Image musée */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] scale-95 hidden md:block" style={{ transitionDelay: '300ms' }}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1565060169194-19fabf63012c?w=800&q=80"
                  alt="Visiteurs dans un musée"
                  className="rounded-3xl shadow-2xl shadow-black/50 w-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0c0c0c]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80" className="w-10 h-10 rounded-full border-2 border-[#0c0c0c]" alt="" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80" className="w-10 h-10 rounded-full border-2 border-[#0c0c0c]" alt="" />
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80" className="w-10 h-10 rounded-full border-2 border-[#0c0c0c]" alt="" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Rejoignez la visite</p>
                      <p className="text-white/60 text-xs">3 passionnés vous attendent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01 - Comment ça marche */}
      <section id="decouvrir" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-[20px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Comment ça marche</span>
            <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-6" style={{ transitionDelay: '100ms' }}>
              Trois étapes pour<br />
              <em className="text-[#e07a5f]">rencontrer</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Trouvez",
                desc: "Recherchez un musée ou une exposition qui vous intéresse",
                image: "https://images.unsplash.com/photo-1594654842514-5e2c5d5f5b7b?w=400&q=80",
                delay: '200ms'
              },
              {
                icon: Users,
                title: "Connectez",
                desc: "Découvrez les passionnés disponibles pour une visite commune",
                image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=400&q=80",
                delay: '300ms'
              },
              {
                icon: Coffee,
                title: "Partagez",
                desc: "Visitez ensemble et prolongez autour d'un café culturel",
                image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400&q=80",
                delay: '400ms'
              }
            ].map((step, i) => (
              <div
                key={i}
                className="animate-on-scroll opacity-0 translate-y-[30px] group overflow-hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:border-[#e07a5f]/30 transition-all"
                style={{ transitionDelay: step.delay }}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20 -mt-10 relative bg-[#0c0c0c]">
                    <step.icon className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                  <p className="text-white/50">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Galerie - Photos de musées */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-[20px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Lieux de rencontre</span>
            <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-6" style={{ transitionDelay: '100ms' }}>
              Des musées<br />
              <em className="text-[#e07a5f]">d'exception</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.id}
                className={`animate-on-scroll opacity-0 translate-y-[30px] group relative overflow-hidden rounded-2xl ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${i === 0 ? 'h-full min-h-[400px]' : 'h-48 md:h-56'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-medium">{img.title}</h4>
                  <p className="text-white/60 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {img.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02 - Profils en vedette */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0f0f0f] to-[#0c0c0c]" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-[20px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Communauté</span>
            <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-6" style={{ transitionDelay: '100ms' }}>
              Nos passionnés<br />
              <em className="text-[#e07a5f]">de culture</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetupUsers.map((user, i) => (
              <div
                key={user.id}
                className="animate-on-scroll opacity-0 translate-y-[30px] group p-6 bg-white/[0.02] border border-white/[0.08] rounded-2xl hover:border-[#e07a5f]/30 transition-all"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#e07a5f]/30"
                    />
                    {user.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#e07a5f] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#0c0c0c]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white group-hover:text-[#e07a5f] transition-colors">{user.name}, {user.age} ans</h4>
                    <div className="flex items-center gap-1 text-[#e07a5f] text-sm">
                      <Star className="w-3 h-3 fill-current" />
                      {user.rating}
                    </div>
                  </div>
                </div>

                <p className="text-white/50 text-sm mb-4 line-clamp-2">{user.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {user.interests.slice(0, 3).map((interest, idx) => (
                    <span key={idx} className="px-2 py-1 bg-[#e07a5f]/10 text-[#e07a5f] text-xs rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-white/40">
                  <span>{user.visitCount} visites</span>
                  <button className="flex items-center gap-2 text-[#e07a5f] hover:text-[#e8968a] transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Contacter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA avec image de fond */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1920&q=80"
            alt="Musée"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-[#0c0c0c]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-6">
            Prêt à rencontrer<br />
            <em className="text-[#e07a5f]">des passionnés ?</em>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/55 text-lg mb-10 max-w-xl mx-auto" style={{ transitionDelay: '100ms' }}>
            Rejoignez notre communauté et partagez votre amour de la culture avec des personnes qui vous ressemblent.
          </p>
          <button
            onClick={() => navigate('/profile')}
            className="animate-on-scroll opacity-0 translate-y-[30px] px-10 py-5 bg-[#e07a5f] text-[#0c0c0c] font-medium text-lg rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-xl shadow-[#e07a5f]/20"
            style={{ transitionDelay: '200ms' }}
          >
            Créer mon profil gratuitement
          </button>
        </div>
      </section>

      {/* CSS pour les animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        .animate-on-scroll {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1 !important;
          transform: translateX(0) translateY(0) scale(1) !important;
        }
      `}</style>
    </div>
  );
};

export default MeetingsPage;
