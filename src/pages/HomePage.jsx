import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, Star, Users, Headphones, Award, Bell, Heart, Filter, Navigation, ChevronRight, Compass, Sparkles, TrendingUp, Eye, MessageCircle, Image, Share2, Coffee } from 'lucide-react';
import { MapMockup, RecommendationsMockup, SocialMockup, GuidesMockup } from '../components/mockups/PhoneMockup';

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
    <div className="min-h-screen bg-[#0c0c0c] text-white overflow-x-hidden">
      {/* Hero Section - Texte à gauche, Image plein écran à droite */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        {/* Image de fond - prend 70% côté droit */}
        <div
          className="absolute top-0 right-0 w-[70%] h-full bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1600&q=80')`
          }}
        />

        {/* Dégradé de transition intense - fondu progressif */}
        <div className="absolute top-0 right-[20%] w-[55%] h-full bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c] to-transparent z-10 hidden md:block" />

        {/* Contenu texte à gauche */}
        <div className="pl-8 md:pl-16 lg:pl-24 pr-6 w-full relative z-20">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="animate-on-scroll opacity-0 translate-y-[20px] inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-8">
              <span className="w-2 h-2 bg-[#e07a5f] rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">+40 000 lieux culturels en France</span>
            </div>

            {/* Titre principal */}
            <h1 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
              Toute la culture<br />
              <em className="text-[#e07a5f] font-normal">autour de vous</em>
            </h1>

            {/* Sous-titre enrichi */}
            <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/60 text-lg md:text-xl max-w-lg mb-6 font-light leading-relaxed" style={{ transitionDelay: '200ms' }}>
              Découvrez les musées, expositions et trésors culturels qui vous entourent.
              Une expérience immersive pour les amoureux de l'art et du patrimoine.
            </p>

            {/* Points clés */}
            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4 mb-10 text-sm text-white/50" style={{ transitionDelay: '300ms' }}>
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#e07a5f]" />
                Géolocalisation
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#e07a5f]" />
                Horaires en direct
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#e07a5f]" />
                Avis vérifiés
              </span>
            </div>

            {/* CTAs */}
            <div className="animate-on-scroll opacity-0 translate-y-[30px] flex flex-wrap gap-4" style={{ transitionDelay: '400ms' }}>
              <button
                onClick={() => navigate('/explore')}
                className="px-8 py-4 bg-[#e07a5f] text-[#0c0c0c] font-medium rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-lg shadow-[#e07a5f]/20"
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
                <div className="text-3xl font-serif text-[#e07a5f]">40k+</div>
                <div className="text-sm text-white/40">Lieux culturels</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-[#e07a5f]">500+</div>
                <div className="text-sm text-white/40">Expositions</div>
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

      {/* Section 01 - Carte Interactive */}
      <section id="carte" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenu texte à gauche */}
            <div className="relative">
            <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -left-8 select-none">01</span>

            <span className="animate-on-scroll opacity-0 translate-x-[-30px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Carte Interactive</span>

            <h2 className="animate-on-scroll opacity-0 translate-x-[-30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
              Découvrez les trésors<br />
              <em className="text-[#e07a5f]">qui vous entourent</em>
            </h2>

            <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
              Une carte vivante qui révèle en temps réel tous les musées, châteaux, monuments et lieux culturels à proximité de votre position.
            </p>

            <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
              Zoomez, explorez et découvrez des pépites cachées que vous n'auriez jamais trouvées autrement. Chaque point sur la carte est une nouvelle aventure culturelle qui vous attend.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Navigation className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Géolocalisation précise</div>
                  <div className="text-sm text-white/40">Trouvez les lieux autour de vous en un instant</div>
                </div>
              </li>
              <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Filter className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Filtres intelligents</div>
                  <div className="text-sm text-white/40">Par type, distance, note ou accessibilité</div>
                </div>
              </li>
              <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Eye className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Vue satellite et plan</div>
                  <div className="text-sm text-white/40">Basculez selon vos préférences</div>
                </div>
              </li>
            </ul>

            <button
              onClick={() => navigate('/explore')}
              className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#e07a5f] group" style={{ transitionDelay: '600ms' }}
            >
              <span className="w-12 h-px bg-[#e07a5f] group-hover:w-16 transition-all" />
              Explorer la carte
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

            {/* Mockup téléphone à droite */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] scale-95 hidden md:block" style={{ transitionDelay: '300ms' }}>
              <MapMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Muzea Now (inversée - mockup à gauche) */}
      <section id="muzea-now" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mockup téléphone à gauche */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] scale-95 hidden md:block order-2 md:order-1" style={{ transitionDelay: '300ms' }}>
              <RecommendationsMockup />
            </div>

            {/* Contenu texte à droite */}
            <div className="relative order-1 md:order-2">
              <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -right-8 select-none">02</span>

              <span className="animate-on-scroll opacity-0 translate-x-[30px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Muzea Now</span>

              <h2 className="animate-on-scroll opacity-0 translate-x-[30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Que visiter<br />
                <em className="text-[#e07a5f]">maintenant ?</em>
              </h2>

              <p className="animate-on-scroll opacity-0 translate-x-[30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Notre algorithme intelligent analyse en temps réel les horaires d'ouverture, l'affluence actuelle et vos préférences pour vous suggérer le lieu parfait à visiter tout de suite.
              </p>

              <p className="animate-on-scroll opacity-0 translate-x-[30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
                Fini les files d'attente interminables et les musées fermés à l'improviste. Muzea Now vous guide vers les meilleures expériences culturelles disponibles à l'instant T.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                    <Clock className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <div>
                    <div className="font-medium">Horaires en temps réel</div>
                    <div className="text-sm text-white/40">Toujours à jour, même les jours fériés</div>
                </div>
              </li>
              <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Users className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Niveau d'affluence</div>
                  <div className="text-sm text-white/40">Évitez la foule, profitez en toute sérénité</div>
                </div>
              </li>
              <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <TrendingUp className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Recommandations personnalisées</div>
                  <div className="text-sm text-white/40">Basées sur vos goûts et votre historique</div>
                </div>
              </li>
            </ul>

            <button
              onClick={() => navigate('/muzea-now')}
              className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#e07a5f] group" style={{ transitionDelay: '600ms' }}
            >
              <span className="w-12 h-px bg-[#e07a5f] group-hover:w-16 transition-all" />
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

              <span className="animate-on-scroll opacity-0 translate-x-[-30px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Expositions Éphémères</span>

              <h2 className="animate-on-scroll opacity-0 translate-x-[-30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Les expositions<br />
                <em className="text-[#e07a5f]">à ne pas louper</em>
              </h2>

              <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Les expositions temporaires passent vite. Trop vite. Ne ratez plus jamais celle dont tout le monde parle grâce à nos alertes personnalisées.
              </p>

              <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
                Recevez des notifications avant la fin des expositions qui correspondent à vos centres d'intérêt. Impressionnisme, art contemporain, photographie... Vous ne manquerez plus rien.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                    <Bell className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <div>
                    <div className="font-medium">Alertes personnalisées</div>
                    <div className="text-sm text-white/40">Soyez prévenu selon vos goûts artistiques</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                    <Calendar className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <div>
                    <div className="font-medium">Compte à rebours</div>
                    <div className="text-sm text-white/40">Visualisez les jours restants d'un coup d'oeil</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                    <Heart className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <div>
                    <div className="font-medium">Liste d'envies</div>
                    <div className="text-sm text-white/40">Sauvegardez et organisez vos futures visites</div>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => navigate('/events')}
                className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#e07a5f] group" style={{ transitionDelay: '600ms' }}
              >
                <span className="w-12 h-px bg-[#e07a5f] group-hover:w-16 transition-all" />
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
                    className="animate-on-scroll opacity-0 translate-y-[30px] relative rounded-xl overflow-hidden border border-white/[0.08] hover:scale-105 hover:border-[#e07a5f]/30 transition-all duration-300 cursor-pointer group"
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <img src={expo.image} alt={expo.title} className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="px-2 py-1 bg-[#e07a5f]/20 text-[#e07a5f] text-[10px] rounded-full mb-2 inline-block">
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

      {/* Section 04 - Guides (mockup à gauche) */}
      <section id="guides" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mockup téléphone à gauche */}
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] scale-95 hidden md:block order-2 md:order-1" style={{ transitionDelay: '300ms' }}>
              <GuidesMockup />
            </div>

            {/* Contenu texte à droite */}
            <div className="relative order-1 md:order-2">
            <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -right-8 select-none">04</span>

            <span className="animate-on-scroll opacity-0 translate-x-[30px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Guides Culturels</span>

            <h2 className="animate-on-scroll opacity-0 translate-x-[30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
              Des parcours<br />
              <em className="text-[#e07a5f]">sur mesure</em>
            </h2>

            <p className="animate-on-scroll opacity-0 translate-x-[30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
              Explorez des itinéraires thématiques créés par des passionnés et des experts du patrimoine. Chaque parcours est une histoire qui vous emmène de lieu en lieu.
            </p>

            <p className="animate-on-scroll opacity-0 translate-x-[30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
              De l'Impressionnisme à l'Art Contemporain, de l'architecture médiévale aux créations modernes, trouvez le parcours qui correspond à vos envies et votre temps disponible.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Sparkles className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Parcours thématiques</div>
                  <div className="text-sm text-white/40">Art, histoire, architecture, street art...</div>
                </div>
              </li>
              <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Headphones className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Audio-guides intégrés</div>
                  <div className="text-sm text-white/40">Écoutez les histoires de chaque lieu</div>
                </div>
              </li>
              <li className="animate-on-scroll opacity-0 translate-x-[30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Award className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Badges et progression</div>
                  <div className="text-sm text-white/40">Collectionnez vos découvertes culturelles</div>
                </div>
              </li>
            </ul>

            <button
              onClick={() => navigate('/guide')}
              className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#e07a5f] group" style={{ transitionDelay: '600ms' }}
            >
              <span className="w-12 h-px bg-[#e07a5f] group-hover:w-16 transition-all" />
              Découvrir les guides
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* Section 05 - Rencontres (mockup à droite) */}
      <section id="rencontres" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenu texte à gauche */}
            <div className="relative">
            <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -left-8 select-none">05</span>

            <span className="animate-on-scroll opacity-0 translate-x-[-30px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Rencontres</span>

            <h2 className="animate-on-scroll opacity-0 translate-x-[-30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
              Partagez votre<br />
              <em className="text-[#e07a5f]">passion</em>
            </h2>

            <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
              La culture se vit mieux à plusieurs. Rencontrez d'autres passionnés d'art près de chez vous et partagez des moments uniques devant vos œuvres préférées.
            </p>

            <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
              Participez à des visites de groupe, des cafés-musées, des discussions thématiques ou créez vos propres événements. Une communauté bienveillante vous attend.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <MessageCircle className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Discussions passionnées</div>
                  <div className="text-sm text-white/40">Échangez avec des amateurs éclairés</div>
                </div>
              </li>
              <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Users className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Visites de groupe</div>
                  <div className="text-sm text-white/40">Explorez ensemble les expositions</div>
                </div>
              </li>
              <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                  <Coffee className="w-5 h-5 text-[#e07a5f]" />
                </div>
                <div>
                  <div className="font-medium">Cafés-musées</div>
                  <div className="text-sm text-white/40">Débriefez autour d'un verre après la visite</div>
                </div>
              </li>
            </ul>

            <button
              onClick={() => navigate('/rencontres')}
              className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#e07a5f] group" style={{ transitionDelay: '600ms' }}
            >
              <span className="w-12 h-px bg-[#e07a5f] group-hover:w-16 transition-all" />
              Rejoindre la communauté
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

            {/* Mockup téléphone à droite */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] scale-95 hidden md:block" style={{ transitionDelay: '300ms' }}>
              <SocialMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 - Œuvre du jour */}
      <section id="oeuvre-du-jour" className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0a0a0a] to-[#0c0c0c]" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contenu texte */}
            <div className="relative">
              <span className="animate-on-scroll opacity-0 scale-50 text-[150px] font-serif font-light text-white/[0.03] absolute -top-16 -left-8 select-none">06</span>

              <span className="animate-on-scroll opacity-0 translate-x-[-30px] text-[#e07a5f] text-xs tracking-[0.3em] uppercase mb-4 block">Œuvre du Jour</span>

              <h2 className="animate-on-scroll opacity-0 translate-x-[-30px] font-serif text-4xl md:text-5xl font-light mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
                Votre dose quotidienne<br />
                <em className="text-[#e07a5f]">de beauté</em>
              </h2>

              <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/55 text-lg mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
                Chaque jour, découvrez une œuvre d'art sélectionnée par notre équipe. Une invitation à la contemplation, à l'émerveillement et à la découverte.
              </p>

              <p className="animate-on-scroll opacity-0 translate-x-[-30px] text-white/40 text-base mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
                Des chefs-d'œuvre classiques aux créations contemporaines, élargissez votre culture artistique en quelques minutes par jour. Chaque œuvre est accompagnée de son histoire et de son contexte.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '300ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                    <Image className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <div>
                    <div className="font-medium">Sélection quotidienne</div>
                    <div className="text-sm text-white/40">Une nouvelle œuvre chaque matin à 8h</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '400ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                    <Sparkles className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <div>
                    <div className="font-medium">Analyse détaillée</div>
                    <div className="text-sm text-white/40">Histoire, technique et anecdotes</div>
                  </div>
                </li>
                <li className="animate-on-scroll opacity-0 translate-x-[-30px] flex items-center gap-4 text-white/70" style={{ transitionDelay: '500ms' }}>
                  <div className="w-12 h-12 rounded-full bg-[#e07a5f]/10 flex items-center justify-center border border-[#e07a5f]/20">
                    <Share2 className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <div>
                    <div className="font-medium">Partagez vos coups de cœur</div>
                    <div className="text-sm text-white/40">Inspirez votre entourage</div>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => navigate('/artwork-of-the-day')}
                className="animate-on-scroll opacity-0 translate-y-[20px] flex items-center gap-4 text-[#e07a5f] group" style={{ transitionDelay: '600ms' }}
              >
                <span className="w-12 h-px bg-[#e07a5f] group-hover:w-16 transition-all" />
                Voir l'œuvre du jour
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visuel - Œuvre du jour */}
            <div className="animate-on-scroll opacity-0 translate-x-[50px] scale-95 transition-all duration-1000 ease-out relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#e07a5f]/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative">
                {/* Frame effect */}
                <div className="absolute -inset-3 border-2 border-[#e07a5f]/30 rounded-sm" />
                <div className="absolute -inset-6 border border-[#e07a5f]/10 rounded-sm" />

                <div className="relative rounded-sm overflow-hidden border border-white/20 shadow-2xl bg-[#1a1a1a]">
                  <img
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80"
                    alt="Œuvre du jour"
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />

                  {/* Artwork info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0c0c0c] to-transparent">
                    <span className="px-3 py-1 bg-[#e07a5f] text-[#0c0c0c] text-xs font-medium rounded-full mb-3 inline-block">
                      ŒUVRE DU JOUR
                    </span>
                    <h4 className="font-serif text-2xl mb-1">La Nuit étoilée</h4>
                    <p className="text-white/60 text-sm mb-2">Vincent van Gogh, 1889</p>
                    <p className="text-white/40 text-xs">Museum of Modern Art, New York</p>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -right-4 top-1/4 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <Heart className="w-4 h-4 text-[#e07a5f]" />
                    <span>2.4k</span>
                  </div>
                </div>
              </div>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e07a5f]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="animate-on-scroll opacity-0 translate-y-[30px] font-serif text-4xl md:text-6xl font-light mb-6">
            Prêt à explorer<br />
            <em className="text-[#e07a5f]">la culture ?</em>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-[30px] text-white/55 text-lg mb-10 max-w-xl mx-auto" style={{ transitionDelay: '100ms' }}>
            Rejoignez des milliers de passionnés qui découvrent chaque jour
            de nouveaux trésors culturels près de chez eux. C'est gratuit, pour toujours.
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="animate-on-scroll opacity-0 translate-y-[30px] px-10 py-5 bg-[#e07a5f] text-[#0c0c0c] font-medium text-lg rounded-full hover:bg-[#e8968a] transition-all hover:scale-105 shadow-xl shadow-[#e07a5f]/20"
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
            <div className="text-[#e07a5f] text-xl tracking-[0.3em] font-light">MUZEA</div>
            <div className="flex items-center gap-8 text-white/40 text-sm">
              <a href="#" className="hover:text-[#e07a5f] transition-colors">À propos</a>
              <a href="#" className="hover:text-[#e07a5f] transition-colors">Contact</a>
              <a href="#" className="hover:text-[#e07a5f] transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-[#e07a5f] transition-colors">CGU</a>
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
