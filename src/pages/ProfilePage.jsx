import { useState, useEffect, useRef } from 'react';
import { User, MapPin, Heart, Award, Clock, Settings, ChevronRight, Lock, Star, Trophy, Sparkles, TrendingUp, Calendar, Crown } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { places } from '../data/places';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import ProfileBackground from '../components/backgrounds/ProfileBackground';

/**
 * Composant de compteur animé
 */
const AnimatedCounter = ({ value, duration = 1500, className = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const target = parseInt(value) || 0;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (target - startValue) * easeOut);

      setCount(current);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      }
    };

    countRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(countRef.current);
  }, [value, duration]);

  return <span className={className}>{count}</span>;
};

/**
 * Composant de carte statistique avec effet glassmorphism
 */
const StatCard = ({ icon: Icon, label, value, color, delay = 0 }) => {
  const colorClasses = {
    gold: 'from-gold-400/20 to-gold-600/10 border-gold-500/30 text-gold-400',
    turquoise: 'from-turquoise-400/20 to-turquoise-600/10 border-turquoise-500/30 text-turquoise-400',
    terracotta: 'from-terracotta-400/20 to-terracotta-600/10 border-terracotta-500/30 text-terracotta-400',
    purple: 'from-purple-400/20 to-purple-600/10 border-purple-500/30 text-purple-400',
  };

  return (
    <div
      className={`
        relative overflow-hidden p-6 rounded-2xl
        bg-gradient-to-br ${colorClasses[color]}
        border backdrop-blur-xl
        transform hover:scale-105 hover:-translate-y-1
        transition-all duration-500 ease-out
        group cursor-default
        animate-slide-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${colorClasses[color]} blur-xl`} />

      {/* Icon background */}
      <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${colorClasses[color]} opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700`} />

      <div className="relative z-10">
        <Icon className={`w-8 h-8 mb-3 ${colorClasses[color].split(' ').pop()}`} />
        <p className="text-4xl font-bold text-sand-100 mb-1">
          <AnimatedCounter value={value} />
        </p>
        <p className="text-sm text-sand-300/70">{label}</p>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

/**
 * Composant de badge avec effets
 */
const BadgeCard = ({ badge, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative p-5 rounded-2xl text-center transition-all duration-500 ease-out
        transform hover:scale-105 hover:-translate-y-2
        animate-slide-up
        ${badge.unlocked
          ? 'bg-gradient-to-br from-gold-500/15 via-gold-600/10 to-amber-700/5 border border-gold-500/40 shadow-lg shadow-gold-500/10'
          : 'bg-night-800/50 border border-night-700/50 opacity-50 grayscale'
        }
      `}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Lock icon for locked badges */}
      {!badge.unlocked && (
        <div className="absolute top-3 right-3 p-1.5 rounded-full bg-night-700/80">
          <Lock className="w-3 h-3 text-night-400" />
        </div>
      )}

      {/* Glow ring for unlocked badges */}
      {badge.unlocked && (
        <div className="absolute inset-0 rounded-2xl">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/20 to-transparent opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-500`} />
          <div className={`absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-gold-400/50 via-gold-500/30 to-gold-600/20 opacity-0 ${isHovered ? 'opacity-100 animate-pulse' : ''} transition-opacity duration-500 blur-sm`} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className={`
          text-5xl mb-3 transition-transform duration-500
          ${badge.unlocked && isHovered ? 'scale-110 animate-bounce-slow' : ''}
        `}>
          {badge.icon}
        </div>
        <p className={`font-semibold text-sm mb-1 ${badge.unlocked ? 'text-sand-100' : 'text-night-500'}`}>
          {badge.name}
        </p>
        <p className={`text-xs ${badge.unlocked ? 'text-sand-300/60' : 'text-night-600'}`}>
          {badge.condition}
        </p>

        {/* Sparkle effect for unlocked */}
        {badge.unlocked && isHovered && (
          <Sparkles className="absolute top-2 left-2 w-4 h-4 text-gold-400 animate-pulse" />
        )}
      </div>
    </div>
  );
};

/**
 * Composant de carte de visite
 */
const VisitCard = ({ visit, onClick, index }) => {
  const { place, visitedAt } = visit;

  return (
    <div
      onClick={onClick}
      className="
        flex-shrink-0 w-72 group cursor-pointer
        bg-gradient-to-br from-night-800/80 to-night-900/80
        border border-night-700/50 hover:border-gold-500/50
        rounded-2xl overflow-hidden
        transform hover:scale-[1.02] hover:-translate-y-1
        transition-all duration-500 ease-out
        backdrop-blur-sm
        animate-slide-up
      "
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/50 to-transparent" />

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-night-900/80 backdrop-blur-sm border border-night-700/50 text-sand-200">
            {place.type}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-night-900/80 backdrop-blur-sm">
          <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
          <span className="text-xs font-medium text-sand-100">{place.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-display font-semibold text-sand-100 mb-1 group-hover:text-gold-400 transition-colors">
          {place.name}
        </h4>
        <p className="text-sm text-sand-400 flex items-center gap-1 mb-2">
          <MapPin className="w-3 h-3" />
          {place.location}
        </p>
        <div className="flex items-center gap-2 text-xs text-sand-500">
          <Calendar className="w-3 h-3" />
          Visité le {new Date(visitedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
        </div>
      </div>

      {/* Hover shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </div>
  );
};

/**
 * Page de profil utilisateur avec stats, badges et historique
 */
const ProfilePage = () => {
  const { userData, stats, userBadges, recentVisits, setUserData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Stats par type
  const typeStats = [
    { type: 'musée', label: 'Musées', icon: '🏛️', count: stats.byCategory['musée'] || 0, color: 'turquoise' },
    { type: 'château', label: 'Châteaux', icon: '🏰', count: stats.byCategory['château'] || 0, color: 'gold' },
    { type: 'monument', label: 'Monuments', icon: '⛪', count: stats.byCategory['monument'] || 0, color: 'terracotta' },
    { type: 'exposition', label: 'Expositions', icon: '🎨', count: stats.byCategory['exposition'] || 0, color: 'purple' }
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

  const unlockedBadgesCount = userBadges.filter(b => b.unlocked).length;
  const totalBadges = userBadges.length;
  const progressPercentage = (unlockedBadgesCount / totalBadges) * 100;

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <ProfileBackground />

      {/* Content */}
      <div className="relative z-10 pb-24 md:pb-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-transparent" />

          <div className="max-w-6xl mx-auto px-4 pt-8 pb-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Avatar Section */}
              <div className="relative group animate-fade-in">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 animate-spin-slow opacity-75 blur-sm scale-105" style={{ animationDuration: '8s' }} />

                {/* Avatar container */}
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-2xl shadow-gold-500/30 transform group-hover:scale-105 transition-transform duration-500">
                  <span className="text-6xl lg:text-7xl font-display font-bold text-night-950">
                    {userData.name.charAt(0)}
                  </span>

                  {/* Crown for high achievers */}
                  {unlockedBadgesCount >= 3 && (
                    <div className="absolute -top-3 -right-3 p-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg animate-bounce-slow">
                      <Crown className="w-5 h-5 text-night-950" />
                    </div>
                  )}
                </div>

                {/* Settings button */}
                <button className="absolute -bottom-2 -right-2 p-3 bg-night-800/90 backdrop-blur-sm border border-night-700/50 rounded-xl text-sand-400 hover:text-gold-400 hover:bg-night-700/90 hover:border-gold-500/50 transition-all duration-300 shadow-lg">
                  <Settings className="w-5 h-5" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center lg:text-left animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-sand-100 mb-2">
                  {userData.name}
                </h1>
                <p className="text-sand-400 text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  Explorateur culturel depuis janvier 2026
                </p>

                {/* Level / Progress Bar */}
                <div className="max-w-md mx-auto lg:mx-0 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-sand-300">Niveau Explorateur</span>
                    <span className="text-sm font-medium text-gold-400">{unlockedBadgesCount}/{totalBadges} badges</span>
                  </div>
                  <div className="h-3 bg-night-800/80 rounded-full overflow-hidden border border-night-700/50">
                    <div
                      className="h-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      {/* Shine animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>

                {/* Quick Stats Cards */}
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                  <StatCard
                    icon={MapPin}
                    label="Visites"
                    value={stats.totalVisits}
                    color="turquoise"
                    delay={200}
                  />
                  <StatCard
                    icon={Heart}
                    label="Favoris"
                    value={stats.totalFavorites}
                    color="terracotta"
                    delay={300}
                  />
                  <StatCard
                    icon={Trophy}
                    label="Badges"
                    value={unlockedBadgesCount}
                    color="gold"
                    delay={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats by Category */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30">
              <TrendingUp className="w-5 h-5 text-gold-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-sand-100">
              Statistiques par catégorie
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {typeStats.map(({ type, label, icon, count, color }, index) => (
              <div
                key={type}
                className={`
                  relative overflow-hidden p-6 rounded-2xl
                  bg-gradient-to-br from-night-800/80 to-night-900/60
                  border border-night-700/50 hover:border-gold-500/30
                  backdrop-blur-sm
                  transform hover:scale-[1.02] hover:-translate-y-1
                  transition-all duration-500 ease-out
                  group cursor-default
                  animate-slide-up
                `}
                style={{ animationDelay: `${index * 100 + 500}ms` }}
              >
                {/* Background glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-${color === 'gold' ? 'gold' : color === 'turquoise' ? 'turquoise' : color === 'terracotta' ? 'terracotta' : 'purple'}-400/10 blur-2xl group-hover:scale-150 transition-transform duration-700`} />

                <div className="relative z-10 text-center">
                  <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
                  <p className="text-3xl font-bold text-sand-100 mb-1">
                    <AnimatedCounter value={count} duration={1500 + index * 200} />
                  </p>
                  <p className="text-sm text-sand-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Badges Section */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30">
                <Award className="w-5 h-5 text-gold-400" />
              </div>
              <h2 className="font-display text-2xl font-bold text-sand-100">
                Collection de badges
              </h2>
            </div>
            <span className="text-sm text-sand-400 bg-night-800/50 px-3 py-1 rounded-full border border-night-700/50">
              {unlockedBadgesCount} débloqués
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {userBadges.map((badge, index) => (
              <BadgeCard key={badge.id} badge={badge} index={index} />
            ))}
          </div>
        </section>

        {/* Recent Visits */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30">
                <Clock className="w-5 h-5 text-gold-400" />
              </div>
              <h2 className="font-display text-2xl font-bold text-sand-100">
                Visites récentes
              </h2>
            </div>
            {recentVisits.length > 0 && (
              <button className="flex items-center gap-1 text-sm text-gold-400 hover:text-gold-300 transition-colors">
                Voir tout
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {recentVisits.length > 0 ? (
            <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
              {recentVisits.map((visit, index) => (
                <VisitCard
                  key={visit.placeId}
                  visit={visit}
                  onClick={() => setSelectedPlace(visit.place)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-night-800/80 to-night-900/60 border border-night-700/50 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-night-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-sand-200 mb-2">
                Aucune visite enregistrée
              </h3>
              <p className="text-sand-500 max-w-md mx-auto">
                Commencez à explorer les lieux culturels pour voir apparaître votre historique ici.
              </p>
            </div>
          )}
        </section>

        {/* Preferences */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30">
              <Heart className="w-5 h-5 text-gold-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-sand-100">
              Mes préférences artistiques
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {allPreferences.map((pref, index) => (
              <button
                key={pref}
                onClick={() => togglePreference(pref)}
                className={`
                  relative px-5 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-300 ease-out
                  transform hover:scale-105
                  animate-slide-up
                  ${userData.preferences.includes(pref)
                    ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/50 text-gold-400 shadow-lg shadow-gold-500/10'
                    : 'bg-night-800/50 border border-night-700/50 text-sand-400 hover:border-night-600/80 hover:text-sand-300'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {pref}
                {userData.preferences.includes(pref) && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                )}
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
