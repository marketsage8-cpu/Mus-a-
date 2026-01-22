import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Sparkles, MapPin, Calendar, Users, Star } from 'lucide-react';
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

  const quickFilters = ['Musées', 'Châteaux', 'Paris', 'Médiéval', 'Renaissance', 'Gratuit'];

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
    { icon: MapPin, value: '2500+', label: 'Lieux culturels' },
    { icon: Calendar, value: '150+', label: 'Expositions' },
    { icon: Users, value: '50k+', label: 'Explorateurs' },
    { icon: Star, value: '4.9', label: 'Note moyenne' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551410224-699683e15636?w=1920&q=80"
            alt="Château de Versailles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Notification badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 border border-amber-600/30 rounded-full text-amber-400 text-sm mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4" />
            <span>Nouvelle exposition Van Gogh disponible</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <span className="text-amber-50">Explorez le </span>
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              patrimoine culturel
            </span>
            <span className="text-amber-50"> français</span>
          </h1>

          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Découvrez musées, châteaux, monuments et expositions à travers une expérience immersive et personnalisée.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un lieu, une période, une région..."
              className="
                w-full
                py-4 px-6 pl-14 pr-32
                bg-stone-800/50
                border border-stone-700/50
                rounded-2xl
                text-lg text-amber-50
                placeholder-stone-500
                focus:outline-none
                focus:border-amber-600/50
                focus:ring-2 focus:ring-amber-600/20
                transition-all
              "
            />
            <button
              type="submit"
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                px-6 py-2.5
                bg-gradient-to-r from-amber-600 to-amber-700
                text-white font-medium
                rounded-xl
                shadow-lg shadow-amber-900/30
                hover:from-amber-500 hover:to-amber-600
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
          <ChevronDown className="w-8 h-8 text-amber-400/50" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className="text-center p-6 bg-stone-800/20 rounded-2xl border border-stone-700/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-amber-50 font-display">{value}</p>
                <p className="text-stone-400 text-sm">{label}</p>
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
              <h2 className="font-display text-3xl font-bold text-amber-50 mb-2">
                Lieux à découvrir
              </h2>
              <p className="text-stone-400">
                Notre sélection de sites culturels incontournables
              </p>
            </div>
            <button
              onClick={() => navigate('/explore')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-amber-400 hover:text-amber-300 transition-colors"
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
            className="sm:hidden w-full mt-6 py-3 text-amber-400 hover:text-amber-300 border border-amber-600/30 rounded-xl transition-colors"
          >
            Voir tous les lieux
          </button>
        </div>
      </section>

      {/* Thematic Routes */}
      <section className="py-16 bg-stone-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-amber-50 mb-2">
              Parcours thématiques
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Des itinéraires soigneusement élaborés pour une immersion culturelle complète
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
          <h2 className="font-display text-4xl font-bold text-amber-50 mb-4">
            Prêt à explorer ?
          </h2>
          <p className="text-xl text-stone-400 mb-8">
            Créez votre profil et commencez à collecter des badges tout en découvrant le patrimoine français.
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="
              px-8 py-4
              bg-gradient-to-r from-amber-600 to-amber-700
              text-white text-lg font-medium
              rounded-xl
              shadow-lg shadow-amber-900/30
              hover:from-amber-500 hover:to-amber-600
              hover:scale-105
              transition-all duration-300
            "
          >
            Commencer l'aventure
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
