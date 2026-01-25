import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Star, Calendar, MapPin, Clock, Quote } from 'lucide-react';

/**
 * Landing Page Muzea - Guides Conférenciers de Luxe
 * Design Pixel Perfect - Prestigieux & Culturel
 */
const GuidePage = () => {
  const [activeFilter, setActiveFilter] = useState('Tout');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedDate, setSelectedDate] = useState(15);

  const filters = ['Tout', 'Art Moderne', 'Histoire', 'Famille', 'Impressionnisme'];

  const experts = [
    {
      name: 'Marie Dubois',
      specialty: "Histoire de l'Art",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      rating: 4.9
    },
    {
      name: 'Jean-Pierre Martin',
      specialty: 'Art Contemporain',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      rating: 5.0
    },
    {
      name: 'Sophie Laurent',
      specialty: 'Renaissance Italienne',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      rating: 4.8
    }
  ];

  const museums = [
    {
      id: 1,
      name: 'Musée du Louvre',
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1499426600726-ac36e0dde9d9?w=600&h=400&fit=crop',
      price: '89',
      duration: '2h30'
    },
    {
      id: 2,
      name: "Musée d'Orsay",
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=600&h=400&fit=crop',
      price: '75',
      duration: '2h'
    },
    {
      id: 3,
      name: 'Centre Pompidou',
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1574246915327-271ee70f0df5?w=600&h=400&fit=crop',
      price: '65',
      duration: '1h45'
    },
    {
      id: 4,
      name: 'Château de Versailles',
      location: 'Versailles, France',
      image: 'https://images.unsplash.com/photo-1551410224-699683e15636?w=600&h=400&fit=crop',
      price: '120',
      duration: '3h'
    }
  ];

  const testimonials = [
    {
      name: 'Caroline M.',
      text: "Une expérience inoubliable au Louvre. Notre guide Marie a su captiver toute la famille avec ses anecdotes passionnantes. Je recommande vivement !",
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      museum: 'Musée du Louvre'
    },
    {
      name: 'Thomas B.',
      text: "Jean-Pierre est un véritable puits de science. Sa visite du Centre Pompidou m'a ouvert les yeux sur l'art contemporain. Magistral.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      museum: 'Centre Pompidou'
    },
    {
      name: 'Émilie R.',
      text: "Versailles comme je ne l'avais jamais vu. Les secrets et histoires de la cour nous ont transportés dans le temps. Merci Sophie !",
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      museum: 'Château de Versailles'
    }
  ];

  // Calendrier
  const currentMonth = 'Février 2026';
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const calendarDays = [
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, null, null]
  ];
  const availableDates = [5, 6, 12, 13, 14, 15, 19, 20, 21, 26, 27, 28];

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');

        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gold-gradient {
          background: linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%);
        }

        .text-gold {
          color: #D4AF37;
        }

        .bg-gold {
          background-color: #D4AF37;
        }

        .border-gold {
          border-color: #D4AF37;
        }

        .hover-gold:hover {
          background-color: #B8960C;
        }

        .card-shadow {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }

        .testimonial-shadow {
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(30, 42, 66, 0.8) 0%, rgba(11, 14, 20, 0.95) 70%),
            url('https://images.unsplash.com/photo-1574246915327-271ee70f0df5?w=1920&h=1080&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="/" className="font-serif-display text-2xl font-bold text-gold tracking-wide">
                Muzea
              </a>

              {/* Nav Links - Desktop */}
              <div className="hidden md:flex items-center gap-8">
                <a href="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  Home
                </a>
                <a href="/explore" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  Museum
                </a>
                <a href="/guides" className="text-gold text-sm font-medium">
                  Guides
                </a>
              </div>

              {/* CTA Button */}
              <button className="gold-gradient text-[#0B0E14] px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Réserver
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-32">
          {/* Badge */}
          <div className="glass-effect px-4 py-2 rounded-full mb-8">
            <span className="text-gold text-sm font-medium">Guides certifiés & passionnés</span>
          </div>

          {/* Title */}
          <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl text-white text-center max-w-5xl leading-tight mb-6">
            Vivez l'Art avec nos{' '}
            <span className="text-gold italic">Guides Experts</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl text-center max-w-2xl mb-12">
            Découvrez les plus grands musées du monde accompagné par des conférenciers d'exception
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl mb-8">
            <div className="glass-effect rounded-2xl p-2 flex items-center">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Rechercher un musée, une exposition, un guide..."
                  className="w-full bg-transparent text-white placeholder-white/40 outline-none py-3 text-base"
                />
              </div>
              <button className="gold-gradient text-[#0B0E14] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Rechercher</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'gold-gradient text-[#0B0E14]'
                    : 'glass-effect text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* ===== EXPERTS SECTION ===== */}
      <section
        className="relative py-24 px-4"
        style={{
          background: 'linear-gradient(180deg, #0B0E14 0%, #1a1f2e 30%, #F9F8F4 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-3xl md:text-4xl text-white mb-4">
              Nos <span className="text-gold italic">Experts Passionnés</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Des guides conférenciers triés sur le volet pour des expériences uniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 hover:bg-white/10 glass-effect"
              >
                <div className="relative mb-6">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-gold/50 group-hover:border-gold transition-colors"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 gold-gradient px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#0B0E14] text-[#0B0E14]" />
                    <span className="text-[#0B0E14] text-xs font-bold">{expert.rating}</span>
                  </div>
                </div>
                <h3 className="font-serif-display text-xl text-white mb-1">{expert.name}</h3>
                <p className="text-gold text-sm">{expert.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MUSEUMS + CALENDAR SECTION ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F9F8F4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#0B0E14] mb-4">
              Lieux <span className="text-gold italic">Populaires</span>
            </h2>
            <p className="text-[#0B0E14]/60 max-w-xl mx-auto">
              Les destinations les plus prisées par nos visiteurs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Museums Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {museums.map((museum) => (
                <div
                  key={museum.id}
                  className="group relative rounded-3xl overflow-hidden card-shadow bg-white"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={museum.image}
                      alt={museum.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 gold-gradient px-3 py-1.5 rounded-full">
                      <span className="text-[#0B0E14] font-bold text-sm">À partir de {museum.price}€</span>
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif-display text-xl text-white mb-1">{museum.name}</h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {museum.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {museum.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gold/20 border-2 border-white" />
                        ))}
                      </div>
                      <span className="text-[#0B0E14]/60 text-xs">+12 guides</span>
                    </div>
                    <button className="gold-gradient text-[#0B0E14] px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                      Réserver
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Widget */}
            <div className="bg-white rounded-3xl p-6 card-shadow h-fit sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-5 h-5 text-gold" />
                <h3 className="font-serif-display text-lg text-[#0B0E14]">Prochaines Disponibilités</h3>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 hover:bg-[#F9F8F4] rounded-full transition-colors">
                  <ChevronLeft className="w-4 h-4 text-[#0B0E14]/60" />
                </button>
                <span className="font-medium text-[#0B0E14]">{currentMonth}</span>
                <button className="p-2 hover:bg-[#F9F8F4] rounded-full transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#0B0E14]/60" />
                </button>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day, i) => (
                  <div key={i} className="text-center text-xs font-medium text-[#0B0E14]/40 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.flat().map((day, i) => (
                  <button
                    key={i}
                    onClick={() => day && availableDates.includes(day) && setSelectedDate(day)}
                    disabled={!day || !availableDates.includes(day)}
                    className={`
                      aspect-square rounded-full flex items-center justify-center text-sm transition-all
                      ${!day ? 'invisible' : ''}
                      ${day && !availableDates.includes(day) ? 'text-[#0B0E14]/20 cursor-not-allowed' : ''}
                      ${day && availableDates.includes(day) && day !== selectedDate ? 'text-[#0B0E14] hover:bg-gold/20 cursor-pointer' : ''}
                      ${day === selectedDate ? 'gold-gradient text-[#0B0E14] font-bold' : ''}
                    `}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#0B0E14]/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full gold-gradient" />
                  <span className="text-xs text-[#0B0E14]/60">Disponible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0B0E14]/10" />
                  <span className="text-xs text-[#0B0E14]/60">Complet</span>
                </div>
              </div>

              {/* Selected Date Info */}
              {selectedDate && (
                <div className="mt-4 p-4 bg-[#F9F8F4] rounded-xl">
                  <p className="text-sm text-[#0B0E14]/60 mb-2">Date sélectionnée :</p>
                  <p className="font-serif-display text-[#0B0E14]">{selectedDate} Février 2026</p>
                  <button className="w-full gold-gradient text-[#0B0E14] py-3 rounded-xl font-semibold mt-4 hover:opacity-90 transition-opacity">
                    Voir les créneaux
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F9F8F4' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#0B0E14] mb-4">
              Ce qu'ils en <span className="text-gold italic">disent</span>
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 testimonial-shadow">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-gold/20" />

            <div className="relative z-10">
              <p className="font-serif-display text-xl md:text-2xl text-[#0B0E14]/80 italic text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gold/30 mb-4"
                />
                <p className="font-semibold text-[#0B0E14]">{testimonials[currentTestimonial].name}</p>
                <p className="text-gold text-sm">{testimonials[currentTestimonial].museum}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-3 rounded-full bg-[#F9F8F4] hover:bg-gold/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#0B0E14]" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentTestimonial ? 'w-6 gold-gradient' : 'bg-[#0B0E14]/20'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 rounded-full bg-[#F9F8F4] hover:bg-gold/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#0B0E14]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="py-24 px-4"
        style={{
          background: 'linear-gradient(180deg, #F9F8F4 0%, #0B0E14 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-3xl md:text-5xl text-[#0B0E14] mb-6">
            Prêt à vivre une expérience <span className="text-gold italic">inoubliable</span> ?
          </h2>
          <p className="text-[#0B0E14]/60 text-lg mb-10 max-w-2xl mx-auto">
            Réservez dès maintenant votre visite guidée et découvrez l'art sous un nouveau jour
          </p>
          <button className="gold-gradient text-[#0B0E14] px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-xl">
            Réserver un guide
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-4" style={{ backgroundColor: '#0B0E14' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="font-serif-display text-2xl font-bold text-gold">
              Muzea
            </a>
            <div className="flex items-center gap-8">
              <a href="/" className="text-white/60 hover:text-white transition-colors text-sm">Home</a>
              <a href="/explore" className="text-white/60 hover:text-white transition-colors text-sm">Museum</a>
              <a href="/guides" className="text-white/60 hover:text-white transition-colors text-sm">Guides</a>
              <a href="/profile" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a>
            </div>
            <p className="text-white/40 text-sm">© 2026 Muzea. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuidePage;
