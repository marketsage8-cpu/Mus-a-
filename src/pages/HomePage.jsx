import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, Star, Users, Headphones, Award, Bell, Heart, Filter, Navigation, ChevronRight, Compass, Sparkles, TrendingUp, Eye } from 'lucide-react';

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
      { rootMargin: '-10% 0px', threshold: 0.1 }
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
          className="absolute top-0 right-0 w-[55%] h-full bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1400&q=80')`
          }}
        />

        {/* Dégradé de transition au milieu */}
        <div className="absolute top-0 right-[25%] w-[35%] h-full bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent z-10 hidden md:block" />

        {/* Contenu texte à gauche */}
        <div className="pl-8 md:pl-16 lg:pl-24 pr-6 w-full relative z-20">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="animate-on-scroll opacity-0 translate-y-[20px] inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-8">
              <span className="w-2 h-2 bg-[#c9a962] rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">+40 000 lieux culturels en France</span>
            </div>

            {/* Titre principal */}
            <h1 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
              Toute la culture<br />
              <em className="text-[#c9a962] font-normal">autour de vous</em>
            </h1>

            {/* Sous-titre enrichi */}
            <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/60 text-lg md:text-xl max-w-lg mb-6 font-light leading-relaxed" style={{ transitionDelay: '200ms' }}>
              Découvrez les musées, expositions et trésors culturels qui vous entourent.
              Une expérience immersive pour les amoureux de l'art et du patrimoine.
            </p>

            {/* Points clés */}
            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4 mb-10 text-sm text-white/50" style={{ transitionDelay: '300ms' }}>
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#c9a962]" />
                Géolocalisation
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c9a962]" />
                Horaires en direct
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#c9a962]" />
                Avis vérifiés
              </span>
            </div>

            {/* CTAs */}
            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4" style={{ transitionDelay: '400ms' }}>
              <button
                onClick={() => navigate('/explore')}
                className="px-8 py-4 bg-[#c9a962] text-[#0c0c0c] font-medium rounded-full hover:bg-[#d4b370] transition-all hover:scale-105 shadow-lg shadow-[#c9a962]/20"
              >
                Commencer l'exploration
              </button>
              <button
                onClick={() => document.getElementById('carte').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all"
              >
                En savoir plus
              </button>
            </div>

            {/* Stats */}
            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex gap-8 mt-12 pt-8 border-t border-white/10" style={{ transitionDelay: '500ms' }}>
              <div>
                <div className="text-3xl font-serif text-[#c9a962]">40k+</div>
                <div className="text-sm text-white/40">Lieux culturels</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#c9a962]">500+</div>
                <div className="text-sm text-white/40">Expositions</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#c9a962]">100%</div>
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

      {/* Section 01 - Carte Interactive */}
      <section id="carte" className="py-32 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contenu texte */}
            <div className="relative">
              <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -left-8 select-none">01</span>

              <span className="animate-on-scroll opacity-0 translate-x-[-30px] text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">Carte Interactive</span>

              <h2 className="animate-on-scroll opacity-0 translate-x-[-30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Découvrez les trésors<br />
                <em className="text-[#c9a962]">qui vous entourent</em>
              </h2>

              <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Une carte vivante qui révèle en temps réel tous les musées, châteaux, monuments et lieux culturels à proximité de votre position.
              </p>

              <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
                Zoomez, explorez et découvrez des pépites cachées que vous n'auriez jamais trouvées autrement. Chaque point sur la carte est une nouvelle aventure culturelle qui vous attend.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Navigation className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Géolocalisation précise</div>
                    <div className="text-sm text-white/40">Trouvez les lieux autour de vous en un instant</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Filter className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Filtres intelligents</div>
                    <div className="text-sm text-white/40">Par type, distance, note ou accessibilité</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Eye className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Vue satellite et plan</div>
                    <div className="text-sm text-white/40">Basculez selon vos préférences</div>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => navigate('/explore')}
                className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#c9a962] group" style={{ transitionDelay: '600ms' }}
              >
                <span className="w-12 h-px bg-[#c9a962] group-hover:w-16 transition-all" />
                Explorer la carte
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visuel - Image réelle */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] scale-95 transition-all duration-1000 ease-out relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#c9a962]/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=800&q=80"
                  alt="Carte interactive des musées"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#c9a962] rounded-full animate-pulse" />
                    <div>
                      <div className="text-sm font-medium">12 lieux à moins de 1km</div>
                      <div className="text-xs text-white/50">Paris 1er arrondissement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Muzea Now (inversée) */}
      <section id="muzea-now" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visuel (à gauche) */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] scale-95 transition-all duration-1000 ease-out relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-l from-[#c9a962]/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80"
                  alt="Intérieur d'un musée"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent" />

                {/* Cards overlay */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  {[
                    { name: 'Musée du Louvre', time: '12 min', status: 'Peu fréquenté', color: 'text-green-400' },
                    { name: "Musée d'Orsay", time: '8 min', status: 'Affluence moyenne', color: 'text-yellow-400' },
                  ].map((museum, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#c9a962]/30 to-[#c9a962]/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{museum.name}</div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-white/50">{museum.time}</span>
                          <span className={museum.color}>{museum.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu texte (à droite) */}
            <div className="order-1 md:order-2 relative">
              <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -right-8 select-none">02</span>

              <span className="animate-on-scroll opacity-0 translate-x-[30px] text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">Muzea Now</span>

              <h2 className="animate-on-scroll opacity-0 translate-x-[30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Que visiter<br />
                <em className="text-[#c9a962]">maintenant ?</em>
              </h2>

              <p className="animate-on-scroll opacity-0 translate-x-[30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Notre algorithme intelligent analyse en temps réel les horaires d'ouverture, l'affluence actuelle et vos préférences pour vous suggérer le lieu parfait à visiter tout de suite.
              </p>

              <p className="animate-on-scroll opacity-0 translate-x-[30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
                Fini les files d'attente interminables et les musées fermés à l'improviste. Muzea Now vous guide vers les meilleures expériences culturelles disponibles à l'instant T.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Clock className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Horaires en temps réel</div>
                    <div className="text-sm text-white/40">Toujours à jour, même les jours fériés</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Users className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Niveau d'affluence</div>
                    <div className="text-sm text-white/40">Évitez la foule, profitez en toute sérénité</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <TrendingUp className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Recommandations personnalisées</div>
                    <div className="text-sm text-white/40">Basées sur vos goûts et votre historique</div>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => navigate('/explore')}
                className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#c9a962] group" style={{ transitionDelay: '600ms' }}
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
      <section id="expositions" className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0f0f0f] to-[#0c0c0c]" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contenu texte */}
            <div className="relative">
              <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -left-8 select-none">03</span>

              <span className="animate-on-scroll opacity-0 translate-x-[-30px] text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">Expositions Éphémères</span>

              <h2 className="animate-on-scroll opacity-0 translate-x-[-30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Les expositions<br />
                <em className="text-[#c9a962]">à ne pas louper</em>
              </h2>

              <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Les expositions temporaires passent vite. Trop vite. Ne ratez plus jamais celle dont tout le monde parle grâce à nos alertes personnalisées.
              </p>

              <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
                Recevez des notifications avant la fin des expositions qui correspondent à vos centres d'intérêt. Impressionnisme, art contemporain, photographie... Vous ne manquerez plus rien.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Bell className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Alertes personnalisées</div>
                    <div className="text-sm text-white/40">Soyez prévenu selon vos goûts artistiques</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Calendar className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Compte à rebours</div>
                    <div className="text-sm text-white/40">Visualisez les jours restants d'un coup d'oeil</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Heart className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Liste d'envies</div>
                    <div className="text-sm text-white/40">Sauvegardez et organisez vos futures visites</div>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => navigate('/events')}
                className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#c9a962] group" style={{ transitionDelay: '600ms' }}
              >
                <span className="w-12 h-px bg-[#c9a962] group-hover:w-16 transition-all" />
                Voir les expositions
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visuel - Grille d'expositions avec vraies images */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] scale-95 transition-all duration-1000 ease-out relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: 'Monet - Nymphéas',
                    place: "Musée de l'Orangerie",
                    end: '15 Mars',
                    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=400&q=80'
                  },
                  {
                    title: 'Picasso Bleu et Rose',
                    place: "Musée d'Orsay",
                    end: '28 Fév',
                    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80'
                  },
                  {
                    title: 'Van Gogh Immersif',
                    place: 'Atelier des Lumières',
                    end: '1 Avril',
                    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80'
                  },
                  {
                    title: 'Égypte des Pharaons',
                    place: 'Institut du Monde Arabe',
                    end: '10 Mars',
                    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80'
                  },
                ].map((expo, i) => (
                  <div
                    key={i}
                    className="animate-on-scroll opacity-0 translate-y-[30px] relative rounded-xl overflow-hidden border border-white/[0.08] hover:scale-105 hover:border-[#c9a962]/30 transition-all duration-300 cursor-pointer group"
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <img src={expo.image} alt={expo.title} className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="px-2 py-1 bg-[#c9a962]/20 text-[#c9a962] text-[10px] rounded-full mb-2 inline-block">
                        J-{Math.floor(Math.random() * 30 + 10)}
                      </span>
                      <h4 className="font-medium text-sm mb-1">{expo.title}</h4>
                      <p className="text-white/50 text-xs">{expo.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - Guides (inversée) */}
      <section id="guides" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visuel (à gauche) */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] scale-95 transition-all duration-1000 ease-out relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-l from-[#c9a962]/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80"
                  alt="Parcours culturel"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />

                {/* Guide card overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#c9a962]/20 text-[#c9a962] text-xs rounded-full">PARCOURS</span>
                    <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">2 jours</span>
                  </div>
                  <h4 className="font-serif text-lg mb-2">L'Impressionnisme à Paris</h4>
                  <p className="text-white/50 text-sm mb-3">Monet, Renoir, Degas... Un voyage dans le temps</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-white/60">
                      <Star className="w-4 h-4 text-[#c9a962]" /> 4.9 • 5 lieux
                    </div>
                    <div className="h-2 w-24 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-[#c9a962] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu texte (à droite) */}
            <div className="order-1 md:order-2 relative">
              <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -right-8 select-none">04</span>

              <span className="animate-on-scroll opacity-0 translate-x-[30px] text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4 block">Guides Culturels</span>

              <h2 className="animate-on-scroll opacity-0 translate-x-[30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Des parcours<br />
                <em className="text-[#c9a962]">sur mesure</em>
              </h2>

              <p className="animate-on-scroll opacity-0 translate-x-[30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Explorez des itinéraires thématiques créés par des passionnés et des experts du patrimoine. Chaque parcours est une histoire qui vous emmène de lieu en lieu.
              </p>

              <p className="animate-on-scroll opacity-0 translate-x-[30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
                De l'Impressionnisme à l'Art Contemporain, de l'architecture médiévale aux créations modernes, trouvez le parcours qui correspond à vos envies et votre temps disponible.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Sparkles className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Parcours thématiques</div>
                    <div className="text-sm text-white/40">Art, histoire, architecture, street art...</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Headphones className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Audio-guides intégrés</div>
                    <div className="text-sm text-white/40">Écoutez les histoires de chaque lieu</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/10 flex items-center justify-center border border-[#c9a962]/20">
                    <Award className="w-5 h-5 text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="font-medium">Badges et progression</div>
                    <div className="text-sm text-white/40">Collectionnez vos découvertes culturelles</div>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => navigate('/guide')}
                className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#c9a962] group" style={{ transitionDelay: '600ms' }}
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
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=1400&q=80"
            alt="Musée"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/90 to-[#0c0c0c]" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-6xl font-light mb-6">
            Prêt à explorer<br />
            <em className="text-[#c9a962]">la culture ?</em>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/55 text-lg mb-10 max-w-xl mx-auto" style={{ transitionDelay: '100ms' }}>
            Rejoignez des milliers de passionnés qui découvrent chaque jour
            de nouveaux trésors culturels près de chez eux. C'est gratuit, pour toujours.
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="animate-on-scroll opacity-0 translate-y-[30px] px-10 py-5 bg-[#c9a962] text-[#0c0c0c] font-medium text-lg rounded-full hover:bg-[#d4b370] transition-all hover:scale-105 shadow-xl shadow-[#c9a962]/20"
            style={{ transitionDelay: '200ms' }}
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

export default HomePage;
