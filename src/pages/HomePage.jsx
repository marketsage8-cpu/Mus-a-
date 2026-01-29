import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, Star, Users, Headphones, Award, Bell, Heart, Filter, Navigation, ChevronRight } from 'lucide-react';

/**
 * Landing Page Immersive - Style Muzea
 * Design luxueux noir/or avec animations au scroll
 */
const HomePage = () => {
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
      { rootMargin: '-15% 0px', threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white overflow-x-hidden pt-16">
      {/* Hero Section - Texte à gauche, Image plein écran à droite */}
      <section className="min-h-[90vh] relative flex items-center overflow-hidden">
        {/* Image de fond - prend tout le côté droit */}
        <div
          className="absolute top-0 right-0 w-[60%] h-full bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80')`
          }}
        />

        {/* Dégradé de transition au milieu - du fond noir vers l'image */}
        <div className="absolute top-0 right-[30%] w-[35%] h-full bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/70 to-transparent z-10 hidden md:block" />

        {/* Contenu texte à gauche */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-8">
              <span className="w-2 h-2 bg-[#c9a962] rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Culture Nearby</span>
            </div>

            {/* Titre principal */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
              Toute la culture<br />
              <em className="text-[#c9a962] font-normal">autour de vous</em>
            </h1>

            {/* Sous-titre */}
            <p className="text-white/55 text-lg md:text-xl max-w-lg mb-10 font-light">
              Découvrez les musées, expositions et trésors culturels qui vous entourent.
              Une expérience immersive pour les amoureux de l'art et du patrimoine.
            </p>

            {/* CTA */}
            <button
              onClick={() => navigate('/explore')}
              className="px-8 py-4 bg-[#c9a962] text-[#0c0c0c] font-medium rounded-full hover:bg-[#d4b370] transition-all hover:scale-105 shadow-lg shadow-[#c9a962]/20"
            >
              Commencer l'exploration
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-20">
          <span className="text-xs tracking-widest">DÉFILER</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Section 01 - Carte Interactive */}
      <section id="carte" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contenu texte */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out relative">
              <span className="text-[120px] font-serif font-light text-white/[0.03] absolute -top-10 -left-4 select-none">01</span>
              <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">Carte Interactive</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
                Découvrez les trésors<br />
                <em className="text-[#c9a962]">qui vous entourent</em>
              </h2>
              <p className="text-white/55 text-lg mb-8 leading-relaxed">
                Une carte vivante qui révèle en temps réel tous les musées,
                châteaux et lieux culturels à proximité de votre position.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Géolocalisation en temps réel
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Filter className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Filtres par type et distance
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Avis et recommandations
                </li>
              </ul>
              <button
                onClick={() => navigate('/explore')}
                className="flex items-center gap-4 text-[#c9a962] group"
              >
                <span className="w-12 h-px bg-[#c9a962] group-hover:w-16 transition-all" />
                Explorer la carte
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visuel */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 delay-200 ease-out relative">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10" />
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden">
                <div className="aspect-[4/3] bg-[#0f0f0f] rounded-xl relative overflow-hidden">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <rect fill="#151515" width="400" height="300"/>
                    <path d="M0 150 L400 150" stroke="#252525" strokeWidth="3"/>
                    <path d="M200 0 L200 300" stroke="#252525" strokeWidth="3"/>
                    <path d="M0 75 L400 225" stroke="#1f1f1f" strokeWidth="2"/>
                    <circle cx="120" cy="100" r="8" fill="#c9a962"/>
                    <circle cx="280" cy="180" r="8" fill="#c9a962"/>
                    <circle cx="200" cy="150" r="12" fill="#c9a962"/>
                    <circle cx="200" cy="150" r="20" fill="#c9a962" opacity="0.2"/>
                    <circle cx="320" cy="80" r="6" fill="#c9a962" opacity="0.6"/>
                    <circle cx="80" cy="220" r="6" fill="#c9a962" opacity="0.6"/>
                    <circle cx="200" cy="150" r="6" fill="#fff"/>
                  </svg>
                  <div className="absolute top-4 right-4 bg-[#1a1a1a] rounded-lg p-3 border border-white/10 w-48">
                    <div className="text-sm font-medium mb-1">Musée d'Orsay</div>
                    <div className="text-xs text-white/50 flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> 350m • 5 min
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Muzea Now (inversée) */}
      <section id="muzea-now" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visuel (à gauche) */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 delay-200 ease-out relative order-2 md:order-1">
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10" />
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/[0.08]">
                <div className="space-y-4">
                  {[
                    { name: 'Musée du Louvre', time: '12 min', status: 'OUVERT', rating: 4.9 },
                    { name: "Musée d'Orsay", time: '8 min', status: 'OUVERT', rating: 4.8 },
                    { name: 'Centre Pompidou', time: '15 min', status: 'OUVERT', rating: 4.7 },
                  ].map((museum, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#0f0f0f] rounded-xl border border-white/[0.05]">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 rounded-lg flex items-center justify-center text-2xl">
                        🏛️
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{museum.name}</span>
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] rounded-full">
                            {museum.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/50">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {museum.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-[#c9a962]" /> {museum.rating}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu texte (à droite) */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 ease-out order-1 md:order-2 relative">
              <span className="text-[120px] font-serif font-light text-white/[0.03] absolute -top-10 -right-4 select-none">02</span>
              <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">Muzea Now</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
                Que visiter<br />
                <em className="text-[#c9a962]">maintenant ?</em>
              </h2>
              <p className="text-white/55 text-lg mb-8 leading-relaxed">
                Notre algorithme intelligent analyse vos préférences, les horaires d'ouverture
                et l'affluence pour vous suggérer le lieu parfait à visiter tout de suite.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Horaires en temps réel
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Temps de trajet calculé
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Niveau d'affluence
                </li>
              </ul>
              <button
                onClick={() => navigate('/explore')}
                className="flex items-center gap-4 text-[#c9a962] group"
              >
                <span className="w-12 h-px bg-[#c9a962] group-hover:w-16 transition-all" />
                Voir mes suggestions
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Expositions */}
      <section id="expositions" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contenu texte */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out relative">
              <span className="text-[120px] font-serif font-light text-white/[0.03] absolute -top-10 -left-4 select-none">03</span>
              <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">Éphémères</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
                Les expositions<br />
                <em className="text-[#c9a962]">à ne pas louper</em>
              </h2>
              <p className="text-white/55 text-lg mb-8 leading-relaxed">
                Restez informé des expositions temporaires avant qu'il ne soit trop tard.
                Recevez des alertes personnalisées selon vos goûts artistiques.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Alertes personnalisées
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Dates de fin signalées
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Sauvegardez vos favoris
                </li>
              </ul>
              <button
                onClick={() => navigate('/events')}
                className="flex items-center gap-4 text-[#c9a962] group"
              >
                <span className="w-12 h-px bg-[#c9a962] group-hover:w-16 transition-all" />
                Voir les expositions
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visuel */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 delay-200 ease-out relative">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Monet - Nymphéas', place: 'Musée de l\'Orangerie', color: 'from-blue-500/20 to-cyan-500/20', end: '15 Mars' },
                  { title: 'Picasso Bleu et Rose', place: 'Musée d\'Orsay', color: 'from-pink-500/20 to-rose-500/20', end: '28 Fév' },
                  { title: 'Van Gogh Immersif', place: 'Atelier des Lumières', color: 'from-yellow-500/20 to-orange-500/20', end: '1 Avril' },
                  { title: 'Égypte des Pharaons', place: 'Institut du Monde Arabe', color: 'from-amber-500/20 to-yellow-500/20', end: '10 Mars' },
                ].map((expo, i) => (
                  <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${expo.color} border border-white/[0.08] hover:scale-105 transition-transform cursor-pointer`}>
                    <span className="px-2 py-1 bg-[#c9a962]/20 text-[#c9a962] text-[10px] rounded-full mb-3 inline-block">
                      ÉPHÉMÈRE
                    </span>
                    <h4 className="font-medium text-sm mb-1">{expo.title}</h4>
                    <p className="text-white/50 text-xs mb-2">{expo.place}</p>
                    <p className="text-[#c9a962] text-xs">Jusqu'au {expo.end}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - Guides (inversée) */}
      <section id="guides" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visuel (à gauche) */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 delay-200 ease-out relative order-2 md:order-1">
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10" />
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/[0.08]">
                <div className="h-40 bg-gradient-to-br from-[#c9a962]/30 to-[#c9a962]/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">🎨</div>
                </div>
                <div className="p-6">
                  <span className="px-2 py-1 bg-[#c9a962]/20 text-[#c9a962] text-xs rounded-full">PARCOURS THÉMATIQUE</span>
                  <h4 className="font-serif text-xl mt-3 mb-2">L'Impressionnisme à Paris</h4>
                  <p className="text-white/50 text-sm mb-4">Un voyage à travers les chefs-d'œuvre de Monet, Renoir et Degas</p>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span>5 lieux</span>
                    <span>•</span>
                    <span>2 jours</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[#c9a962]" /> 4.9</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-[#c9a962] rounded-full" />
                  </div>
                  <p className="text-xs text-white/40 mt-2">3/5 lieux visités</p>
                </div>
              </div>
            </div>

            {/* Contenu texte (à droite) */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 ease-out order-1 md:order-2 relative">
              <span className="text-[120px] font-serif font-light text-white/[0.03] absolute -top-10 -right-4 select-none">04</span>
              <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">Guides Culturels</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
                Des parcours<br />
                <em className="text-[#c9a962]">sur mesure</em>
              </h2>
              <p className="text-white/55 text-lg mb-8 leading-relaxed">
                Explorez des itinéraires thématiques créés par des passionnés et des experts.
                De l'Impressionnisme à l'Art Contemporain, trouvez le parcours fait pour vous.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Parcours thématiques
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Audio-guides intégrés
                </li>
                <li className="flex items-center gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  Badges de progression
                </li>
              </ul>
              <button
                onClick={() => navigate('/guide')}
                className="flex items-center gap-4 text-[#c9a962] group"
              >
                <span className="w-12 h-px bg-[#c9a962] group-hover:w-16 transition-all" />
                Découvrir les guides
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a962]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6">
            Prêt à explorer<br />
            <em className="text-[#c9a962]">la culture ?</em>
          </h2>
          <p className="text-white/55 text-lg mb-10">
            Rejoignez des milliers de passionnés qui découvrent chaque jour
            de nouveaux trésors culturels près de chez eux.
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="px-10 py-5 bg-[#c9a962] text-[#0c0c0c] font-medium text-lg rounded-full hover:bg-[#d4b370] transition-all hover:scale-105 shadow-xl shadow-[#c9a962]/20"
          >
            Commencer gratuitement
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[#c9a962] text-xl tracking-[0.3em] font-light">MUZEA</div>
            <div className="flex items-center gap-8 text-white/40 text-sm">
              <a href="#" className="hover:text-[#c9a962] transition-colors">À propos</a>
              <a href="#" className="hover:text-[#c9a962] transition-colors">Contact</a>
              <a href="#" className="hover:text-[#c9a962] transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-[#c9a962] transition-colors">CGU</a>
            </div>
            <p className="text-white/30 text-sm">© 2026 Muzea. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* CSS pour les animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        .animate-on-scroll {
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
