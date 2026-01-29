import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Star, MapPin, Clock, ChevronRight, Calendar, Globe, Award, Sparkles, BookOpen } from 'lucide-react';
import { GuidesMockup } from '../components/mockups/PhoneMockup';

/**
 * Données fictives des guides
 */
const guides = [
  {
    id: 1,
    name: 'Marie Dubois',
    specialty: "Histoire de l'Art",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    rating: 4.9,
    reviews: 127,
    languages: ['Français', 'Anglais'],
    price: 89,
    verified: true
  },
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    specialty: 'Art Contemporain',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 5.0,
    reviews: 89,
    languages: ['Français', 'Espagnol'],
    price: 95,
    verified: true
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    specialty: 'Renaissance & Classique',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    rating: 4.8,
    reviews: 156,
    languages: ['Français', 'Italien', 'Anglais'],
    price: 85,
    verified: true
  },
  {
    id: 4,
    name: 'Antoine Moreau',
    specialty: 'Impressionnisme',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 4.7,
    reviews: 98,
    languages: ['Français', 'Allemand'],
    price: 80,
    verified: false
  },
  {
    id: 5,
    name: 'Claire Fontaine',
    specialty: 'Art Moderne',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    rating: 4.9,
    reviews: 112,
    languages: ['Français', 'Anglais', 'Japonais'],
    price: 90,
    verified: true
  },
  {
    id: 6,
    name: 'Lucas Bernard',
    specialty: 'Patrimoine Français',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    rating: 4.8,
    reviews: 134,
    languages: ['Français', 'Anglais'],
    price: 88,
    verified: true
  }
];

/**
 * Page Guides - Style HomePage
 */
const GuidePage = () => {
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
                <span className="text-white/60 text-sm">Guides certifiés & passionnés</span>
              </div>

              <h1 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-5xl md:text-6xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Vivez l'Art avec<br />
                <em className="text-[#e07a5f] font-normal">nos Experts</em>
              </h1>

              <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/60 text-lg md:text-xl max-w-lg mb-6 font-light leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Découvrez les plus grands musées accompagné par des conférenciers d'exception. Des visites privées et personnalisées.
              </p>

              <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4 mb-10 text-sm text-white/50" style={{ transitionDelay: '300ms' }}>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#e07a5f]" />
                  Guides certifiés
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#e07a5f]" />
                  Multilingue
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#e07a5f]" />
                  4.9/5 en moyenne
                </span>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4" style={{ transitionDelay: '400ms' }}>
                <button
                  onClick={() => document.getElementById('guides').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#e07a5f] text-[#0c0c0c] font-medium rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-lg shadow-[#e07a5f]/20"
                >
                  Trouver un guide
                </button>
                <button
                  onClick={() => document.getElementById('decouvrir').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all"
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Mockup */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] scale-95 hidden md:block" style={{ transitionDelay: '300ms' }}>
              <GuidesMockup />
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
              Réservez votre<br />
              <em className="text-[#e07a5f]">visite guidée</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Choisissez",
                desc: "Sélectionnez le musée ou monument que vous souhaitez visiter",
                delay: '200ms'
              },
              {
                icon: Users,
                title: "Réservez",
                desc: "Trouvez le guide idéal et réservez votre créneau en quelques clics",
                delay: '300ms'
              },
              {
                icon: Sparkles,
                title: "Profitez",
                desc: "Vivez une expérience culturelle unique et enrichissante",
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

      {/* Section 02 - Nos guides */}
      <section id="guides" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0f0f0f] to-[#0c0c0c]" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-[20px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Nos experts</span>
            <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-6" style={{ transitionDelay: '100ms' }}>
              Guides<br />
              <em className="text-[#e07a5f]">passionnés</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <div
                key={guide.id}
                className="animate-on-scroll opacity-0 translate-y-[30px] group p-6 bg-white/[0.02] border border-white/[0.08] rounded-2xl hover:border-[#e07a5f]/30 transition-all"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#e07a5f]/30"
                    />
                    {guide.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#e07a5f] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#0c0c0c]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white group-hover:text-[#e07a5f] transition-colors">{guide.name}</h4>
                    <p className="text-[#e07a5f] text-sm italic">{guide.specialty}</p>
                    <div className="flex items-center gap-1 text-[#e07a5f] text-sm mt-1">
                      <Star className="w-3 h-3 fill-current" />
                      {guide.rating}
                      <span className="text-white/40 ml-1">({guide.reviews} avis)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
                  <Globe className="w-4 h-4" />
                  <span>{guide.languages.join(', ')}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <div>
                    <span className="text-2xl font-bold text-[#e07a5f]">{guide.price}€</span>
                    <span className="text-white/40 text-sm"> / personne</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#e07a5f]/10 text-[#e07a5f] rounded-full hover:bg-[#e07a5f]/20 transition-colors text-sm">
                    Réserver
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 - Avantages */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenu texte */}
            <div>
              <span className="animate-on-scroll opacity-0 translate-y-[20px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Pourquoi nous choisir</span>
              <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-5xl font-light mb-8" style={{ transitionDelay: '100ms' }}>
                Une expérience<br />
                <em className="text-[#e07a5f]">inoubliable</em>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Guides certifiés",
                    desc: "Tous nos guides sont des conférenciers diplômés et passionnés"
                  },
                  {
                    icon: Clock,
                    title: "Flexibilité totale",
                    desc: "Choisissez votre horaire et la durée de votre visite"
                  },
                  {
                    icon: BookOpen,
                    title: "Contenu personnalisé",
                    desc: "Visites adaptées à vos centres d'intérêt et votre niveau"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="animate-on-scroll opacity-0 translate-y-[20px] flex gap-4"
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#e07a5f]/10 flex items-center justify-center flex-shrink-0 border border-[#e07a5f]/20">
                      <item.icon className="w-5 h-5 text-[#e07a5f]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] grid grid-cols-2 gap-6" style={{ transitionDelay: '300ms' }}>
              {[
                { value: "150+", label: "Guides experts" },
                { value: "50k+", label: "Visites réalisées" },
                { value: "4.9/5", label: "Note moyenne" },
                { value: "98%", label: "Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                  <div className="text-3xl md:text-4xl font-serif text-[#e07a5f] mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
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
            Prêt pour une visite<br />
            <em className="text-[#e07a5f]">extraordinaire ?</em>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/55 text-lg mb-10 max-w-xl mx-auto" style={{ transitionDelay: '100ms' }}>
            Réservez dès maintenant et vivez l'art comme jamais avec nos guides passionnés.
          </p>
          <button
            onClick={() => document.getElementById('guides').scrollIntoView({ behavior: 'smooth' })}
            className="animate-on-scroll opacity-0 translate-y-[30px] px-10 py-5 bg-[#e07a5f] text-[#0c0c0c] font-medium text-lg rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-xl shadow-[#e07a5f]/20"
            style={{ transitionDelay: '200ms' }}
          >
            Trouver mon guide
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

export default GuidePage;
