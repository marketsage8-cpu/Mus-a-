import { useState } from 'react';
import { User, MapPin, Heart, Award, Clock, Settings, ChevronRight, Lock } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { places } from '../data/places';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Page de profil utilisateur avec stats, badges et historique
 */
const ProfilePage = () => {
  const { userData, stats, userBadges, recentVisits, setUserData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Stats par type
  const typeStats = [
    { type: 'musée', label: 'Musées', icon: '🏛️', count: stats.byCategory['musée'] || 0 },
    { type: 'château', label: 'Châteaux', icon: '🏰', count: stats.byCategory['château'] || 0 },
    { type: 'monument', label: 'Monuments', icon: '⛪', count: stats.byCategory['monument'] || 0 },
    { type: 'exposition', label: 'Expositions', icon: '🎨', count: stats.byCategory['exposition'] || 0 }
  ];

  // Préférences disponibles
  const allPreferences = ['Renaissance', 'Médiéval', 'Baroque', 'Gothique', 'Impressionnisme', 'Art moderne', 'Antiquité', 'Contemporain'];

  const togglePreference = (pref) => {
    setUserData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(pref)
        ? prev.preferences.filter(p => p !== pref)
        : [...prev.preferences, pref]
    }));
  };

  return (
    <div className="animate-fade-in pb-20 md:pb-0">
      {/* Header Profile */}
      <div className="bg-gradient-to-b from-amber-900/20 to-stone-950 border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-4xl font-bold font-display shadow-xl shadow-amber-900/30">
                E
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 bg-stone-800 border border-stone-700 rounded-xl text-stone-400 hover:text-amber-50 hover:bg-stone-700 transition-all">
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1">
              <h1 className="font-display text-3xl font-bold text-amber-50 mb-2">
                {userData.name}
              </h1>
              <p className="text-stone-400 mb-4">
                Explorateur culturel depuis janvier 2026
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-400">{stats.totalVisits}</p>
                  <p className="text-sm text-stone-500">Visites</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-400">{stats.totalFavorites}</p>
                  <p className="text-sm text-stone-500">Favoris</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">
                    {userBadges.filter(b => b.unlocked).length}
                  </p>
                  <p className="text-sm text-stone-500">Badges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Stats par type */}
        <section>
          <h2 className="font-display text-xl font-bold text-amber-50 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            Statistiques par catégorie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {typeStats.map(({ type, label, icon, count }) => (
              <div
                key={type}
                className="p-4 bg-stone-800/30 border border-stone-700/30 rounded-xl text-center hover:border-amber-800/30 transition-all"
              >
                <span className="text-3xl mb-2 block">{icon}</span>
                <p className="text-2xl font-bold text-amber-50">{count}</p>
                <p className="text-sm text-stone-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="font-display text-xl font-bold text-amber-50 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            Badges
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {userBadges.map((badge) => (
              <div
                key={badge.id}
                className={`
                  relative p-4 rounded-xl text-center transition-all
                  ${badge.unlocked
                    ? 'bg-amber-600/10 border border-amber-600/30'
                    : 'bg-stone-800/30 border border-stone-700/30 opacity-60'
                  }
                `}
              >
                {!badge.unlocked && (
                  <div className="absolute top-2 right-2">
                    <Lock className="w-4 h-4 text-stone-500" />
                  </div>
                )}
                <span className="text-4xl mb-2 block filter grayscale-0" style={{ filter: badge.unlocked ? 'none' : 'grayscale(1)' }}>
                  {badge.icon}
                </span>
                <p className={`font-semibold text-sm mb-1 ${badge.unlocked ? 'text-amber-50' : 'text-stone-500'}`}>
                  {badge.name}
                </p>
                <p className="text-xs text-stone-500">{badge.condition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visites récentes */}
        <section>
          <h2 className="font-display text-xl font-bold text-amber-50 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            Visites récentes
          </h2>

          {recentVisits.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {recentVisits.map(({ placeId, visitedAt, place }) => (
                <div
                  key={placeId}
                  onClick={() => setSelectedPlace(place)}
                  className="
                    flex-shrink-0 w-64
                    bg-stone-800/30 border border-stone-700/30
                    rounded-xl overflow-hidden
                    hover:border-amber-800/30
                    transition-all cursor-pointer
                    group
                  "
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-amber-50 text-sm mb-1 group-hover:text-amber-400 transition-colors">
                      {place.name}
                    </h4>
                    <p className="text-xs text-stone-500">
                      Visité le {new Date(visitedAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-stone-400 text-center py-8">
              Aucune visite enregistrée pour le moment.
            </p>
          )}
        </section>

        {/* Préférences */}
        <section>
          <h2 className="font-display text-xl font-bold text-amber-50 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-amber-400" />
            Mes préférences
          </h2>
          <div className="flex flex-wrap gap-2">
            {allPreferences.map((pref) => (
              <button
                key={pref}
                onClick={() => togglePreference(pref)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${userData.preferences.includes(pref)
                    ? 'bg-amber-600/20 border border-amber-600/50 text-amber-400'
                    : 'bg-stone-800/50 border border-stone-700/50 text-stone-400 hover:border-stone-600'
                  }
                `}
              >
                {pref}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Detail Modal */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default ProfilePage;
