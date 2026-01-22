import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Sparkles, MapPin, Calendar, Users, Star, Compass } from 'lucide-react';
import { places } from '../data/places';
import { routes } from '../data/routes';
import PlaceCard from '../components/cards/PlaceCard';
import RouteCard from '../components/cards/RouteCard';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import { QuickFilterChips } from '../components/ui/FilterTabs';

/**
 * Page d'accueil avec hero, recherche, lieux recommandés et parcours
 */
const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeQuickFilters, setActiveQuickFilters] = useState([]);

  const quickFilters = ['Pyramides', 'Temples', 'Égypte', 'Grèce', 'Pharaons', 'Mythologie'];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleQuickFilter = (filter) => {
    setActiveQuickFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // Lieux recommandés (6 premiers)
  const recommendedPlaces = places.slice(0, 6);

  // Stats
  const stats = [
    { icon: MapPin, value: '500+', label: 'Sites antiques' },
    { icon: Calendar, value: '3000+', label: 'Ans d\'histoire' },
    { icon: Users, value: '25k+', label: 'Explorateurs' },
    { icon: Compass, value: '7', label: 'Merveilles' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1920&q=80"
            alt="Pyramides de Gizeh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night-950/80 via-night-950/60 to-night-950" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Notification badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-600/20 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4" />
            <span>Nouvelle expédition : Le Tombeau de Toutânkhamon</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <span className="text-sand-100">Explorez les </span>
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Mystères Antiques
            </span>
          </h1>

          <p className="text-xl text-sand-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Partez à la découverte des pyramides, temples et trésors des civilisations égyptiennes et grecques.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-night-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un temple, une pyramide, un pharaon..."
              className="
                w-full
                py-4 px-6 pl-14 pr-32
                bg-night-800/50
                border border-night-700/50
                rounded-2xl
                text-lg text-sand-100
                placeholder-night-400
                focus:outline-none
                focus:border-gold-500/50
                focus:ring-2 focus:ring-gold-500/20
                transition-all
              "
            />
            <button
              type="submit"
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                px-6 py-2.5
                bg-gradient-to-r from-gold-500 to-gold-600
                text-night-950 font-semibold
                rounded-xl
                shadow-lg shadow-gold-900/30
                hover:from-gold-400 hover:to-gold-500
                transition-all
              "
            >
              Explorer
            </button>
          </form>

          {/* Quick filters */}
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <QuickFilterChips
              filters={quickFilters}
              activeFilters={activeQuickFilters}
              onToggle={toggleQuickFilter}
              className="justify-center"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-gold-500/50" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-night-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className="text-center p-6 bg-night-800/20 rounded-2xl border border-gold-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-sand-100 font-display">{value}</p>
                <p className="text-night-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Places */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-sand-100 mb-2">
                Sites Légendaires
              </h2>
              <p className="text-night-400">
                Les trésors archéologiques les plus fascinants
              </p>
            </div>
            <button
              onClick={() => navigate('/explore')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              Voir tout
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </button>
          </div>

          {/* Grid avec premier élément featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedPlaces.map((place, index) => (
              <PlaceCard
                key={place.id}
                place={place}
                featured={index === 0}
                onClick={setSelectedPlace}
              />
            ))}
          </div>

          {/* Mobile voir tout */}
          <button
            onClick={() => navigate('/explore')}
            className="sm:hidden w-full mt-6 py-3 text-gold-400 hover:text-gold-300 border border-gold-500/30 rounded-xl transition-colors"
          >
            Voir tous les sites
          </button>
        </div>
      </section>

      {/* Thematic Routes */}
      <section className="py-16 bg-night-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-sand-100 mb-2">
              Expéditions Thématiques
            </h2>
            <p className="text-night-400 max-w-2xl mx-auto">
              Des parcours soigneusement élaborés pour une immersion totale dans l'Antiquité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <RouteCard
                key={route.id}
                route={route}
                onClick={() => navigate('/explore')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-sand-100 mb-4">
            Prêt pour l'aventure ?
          </h2>
          <p className="text-xl text-night-400 mb-8">
            Rejoignez les explorateurs et percez les secrets des civilisations anciennes.
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="
              px-8 py-4
              bg-gradient-to-r from-gold-500 to-gold-600
              text-night-950 text-lg font-semibold
              rounded-xl
              shadow-lg shadow-gold-900/30
              hover:from-gold-400 hover:to-gold-500
              hover:scale-105
              transition-all duration-300
            "
          >
            Commencer l'expédition
          </button>
        </div>
      </section>

      {/* Detail Modal */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default HomePage;
