import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, MessageCircle, Heart, MapPin, Calendar, Clock, Star, ChevronRight, Search, Coffee, Sparkles } from 'lucide-react';

/**
 * Données fictives des utilisateurs
 */
const meetupUsers = [
  {
    id: 1,
    name: "Marie Dupont",
    age: 28,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    artImage: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=400&q=80",
    artTitle: "Nymphéas - Monet",
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
    artImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80",
    artTitle: "La Nuit Étoilée - Van Gogh",
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
    artImage: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80",
    artTitle: "Picasso - Bleu et Rose",
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
    artImage: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80",
    artTitle: "Égypte des Pharaons",
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
    artImage: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=400&q=80",
    artTitle: "Les Nymphéas - Orangerie",
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
    artImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80",
    artTitle: "Galerie Art Moderne",
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
      {/* Hero Section - Style HomePage avec image de fond */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        {/* Image de fond - prend 70% côté droit */}
        <div
          className="absolute top-0 right-0 w-[70%] h-full bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600&q=80')`
          }}
        />

        {/* Dégradé de transition intense - fondu progressif */}
        <div className="absolute top-0 right-[20%] w-[55%] h-full bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c] to-transparent z-10 hidden md:block" />

        {/* Contenu texte à gauche */}
        <div className="pl-8 md:pl-16 lg:pl-24 pr-6 w-full relative z-20">
          <div className="max-w-xl">
            <div className="animate-on-scroll opacity-0 translate-y-[20px] inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-8">
              <span className="w-2 h-2 bg-[#e07a5f] rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Communauté de passionnés</span>
            </div>

            <h1 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
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

            {/* Stats */}
            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex gap-8 mt-12 pt-8 border-t border-white/10" style={{ transitionDelay: '500ms' }}>
              <div>
                <div className="text-3xl font-serif text-[#e07a5f]">2k+</div>
                <div className="text-sm text-white/40">Membres actifs</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#e07a5f]">500+</div>
                <div className="text-sm text-white/40">Rencontres</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#e07a5f]">100%</div>
                <div className="text-sm text-white/40">Gratuit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-20">
          <span className="text-xs tracking-widest">DÉFILER</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
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
                delay: '200ms'
              },
              {
                icon: Users,
                title: "Connectez",
                desc: "Découvrez les passionnés disponibles pour une visite commune",
                delay: '300ms'
              },
              {
                icon: Coffee,
                title: "Partagez",
                desc: "Visitez ensemble et prolongez autour d'un café culturel",
                delay: '400ms'
              }
            ].map((step, i) => (
              <div
                key={i}
                className="animate-on-scroll opacity-0 translate-y-[30px] text-center p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:border-[#e07a5f]/30 transition-all"
                style={{ transitionDelay: step.delay }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <step.icon className="w-7 h-7 text-[#e07a5f]" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                <p className="text-white/50">{step.desc}</p>
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
                className="animate-on-scroll opacity-0 translate-y-[30px] group bg-white/[0.02] border border-white/[0.08] rounded-2xl hover:border-[#e07a5f]/30 transition-all overflow-hidden"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Image artistique favorite */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={user.artImage}
                    alt={user.artTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-xs text-white/60 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {user.artTitle}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#e07a5f]/30"
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

                  <div className="flex items-center justify-between text-sm text-white/40 pt-3 border-t border-white/[0.08]">
                    <span>{user.visitCount} visites</span>
                    <button className="flex items-center gap-2 text-[#e07a5f] hover:text-[#e8968a] transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Contacter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e07a5f]/10 rounded-full blur-3xl" />
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
