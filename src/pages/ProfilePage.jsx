import { useState, useEffect } from 'react';
import {
  MapPin, Heart, Settings, User, Bookmark,
  Trophy, Sparkles, Calendar, Bell, Shield, Globe, Moon, ChevronRight
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import ProfileBackground from '../components/backgrounds/ProfileBackground';

/**
 * Séparateur élégant minimaliste
 */
const ElegantDivider = () => (
  <div className="flex items-center justify-center py-6">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
  </div>
);

/**
 * Statistique inline sobre
 */
const StatItem = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-2 text-sand-400">
    <Icon className="w-4 h-4 text-gold-400/70" />
    <span className="font-display text-sand-200 font-semibold">{value}</span>
    <span className="text-sm">{label}</span>
  </div>
);

/**
 * Tag d'intérêt compact
 */
const InterestTag = ({ interest }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-night-800/50 border border-night-700/40 text-sand-300 text-sm hover:border-gold-500/30 transition-colors">
    <span>{interest.icon}</span>
    {interest.name}
  </span>
);

/**
 * Option de paramètre avec toggle ou chevron
 */
const SettingOption = ({ icon: Icon, label, description, hasToggle, isEnabled, onToggle, onClick }) => (
  <button
    onClick={onClick || onToggle}
    className="w-full flex items-center gap-4 p-4 bg-night-800/30 hover:bg-night-800/50 border border-night-700/30 rounded-xl transition-all group"
  >
    <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20">
      <Icon className="w-5 h-5 text-gold-400" />
    </div>
    <div className="flex-1 text-left">
      <h4 className="text-sand-200 font-medium">{label}</h4>
      {description && <p className="text-sand-500 text-sm">{description}</p>}
    </div>
    {hasToggle ? (
      <div
        className={`w-12 h-6 rounded-full transition-all ${isEnabled ? 'bg-gold-500' : 'bg-night-700'}`}
        onClick={(e) => { e.stopPropagation(); onToggle?.(); }}
      >
        <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${isEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
      </div>
    ) : (
      <ChevronRight className="w-5 h-5 text-sand-500 group-hover:text-gold-400 transition-colors" />
    )}
  </button>
);

/**
 * Page de profil - Design condensé et élégant
 * Présentation sobre pour permettre aux visiteurs de voir l'essentiel rapidement
 */
const ProfilePage = () => {
  const { userData, stats, userBadges, setUserData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeTab, setActiveTab] = useState('profil'); // 'profil', 'favoris', 'parametres'
  const [showUnderline, setShowUnderline] = useState(true);
  const [selectedSetting, setSelectedSetting] = useState(null);

  // Paramètres toggles
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  // Gérer la barre sous les onglets - disparaît dans paramètres, réapparaît sur sélection
  useEffect(() => {
    if (activeTab === 'parametres') {
      setShowUnderline(false);
    } else {
      setShowUnderline(true);
    }
  }, [activeTab]);

  // Quand on sélectionne un paramètre, la barre réapparaît
  const handleSettingClick = (settingId) => {
    setSelectedSetting(settingId === selectedSetting ? null : settingId);
    setShowUnderline(true);
  };

  // Données du profil
  const userProfile = {
    bio: "Passionné d'art et d'histoire, je parcours les musées et monuments de France à la découverte de notre patrimoine culturel.",
    location: "Paris, France",
    memberSince: "Janvier 2026",
    interests: [
      { name: 'Renaissance', icon: '🎨' },
      { name: 'Architecture', icon: '🏛️' },
      { name: 'Histoire', icon: '📚' },
      { name: 'Jardins', icon: '🌿' },
    ],
  };

  const unlockedBadgesCount = userBadges.filter(b => b.unlocked).length;

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

  // Onglets disponibles
  const tabs = [
    { id: 'profil', label: 'Profil', icon: User },
    { id: 'favoris', label: 'Favoris', icon: Bookmark },
    { id: 'parametres', label: 'Paramètres', icon: Settings }
  ];

  return (
    <div className="relative min-h-screen">
      <ProfileBackground />

      <div className="relative z-10 pb-24 md:pb-8">
        {/* Onglets avec barre animée */}
        <div className="sticky top-16 z-20 bg-night-950/80 backdrop-blur-xl border-b border-night-800/50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="flex items-center justify-center gap-2 py-3 relative">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setSelectedSetting(null);
                    }}
                    className={`
                      flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm
                      transition-all duration-300
                      ${isActive
                        ? 'text-gold-400'
                        : 'text-sand-400 hover:text-sand-200'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* Barre sous les onglets - disparaît/réapparaît */}
            <div
              className={`
                h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent
                transition-all duration-500 ease-in-out
                ${showUnderline ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
              `}
            />
          </div>
        </div>

        {/* Contenu selon l'onglet actif */}
        {activeTab === 'profil' && (
        <div className="max-w-2xl mx-auto px-6 pt-10">
          <div className="bg-gradient-to-br from-night-800/70 to-night-900/50 backdrop-blur-xl border border-night-700/50 rounded-3xl p-8 shadow-2xl">

            {/* En-tête avec photo et infos essentielles */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              {/* Photo de profil */}
              <div className="relative group shrink-0">
                <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-gold-400/50 to-gold-600/50 animate-spin-slow opacity-70" style={{ animationDuration: '15s' }} />
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-3 border-night-900 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-night-950">
                      {userData.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <button className="absolute -bottom-1 -right-1 p-2 bg-night-800/90 backdrop-blur-sm border border-night-700/60 rounded-full text-sand-400 hover:text-gold-400 hover:border-gold-500/50 transition-all shadow-lg opacity-0 group-hover:opacity-100">
                  <Settings className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Nom et titre */}
              <div className="text-center sm:text-left flex-1">
                <h1 className="font-display text-3xl font-bold text-sand-100 tracking-wide mb-1">
                  {userData.name}
                </h1>
                <p className="flex items-center justify-center sm:justify-start gap-1.5 text-gold-400/90 font-medium mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Explorateur Culturel
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-sand-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {userProfile.location}
                  </span>
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-sand-600" />
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {userProfile.memberSince}
                  </span>
                </div>
              </div>
            </div>

            <ElegantDivider />

            {/* Bio */}
            <p className="font-serif-italic text-sand-300/90 text-center leading-relaxed mb-6">
              "{userProfile.bio}"
            </p>

            {/* Statistiques en ligne */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 py-4 px-4 bg-night-900/40 rounded-2xl border border-night-700/30">
              <StatItem icon={MapPin} value={stats.totalVisits} label="visites" />
              <div className="w-px h-8 bg-night-700/50" />
              <StatItem icon={Heart} value={stats.totalFavorites} label="favoris" />
              <div className="w-px h-8 bg-night-700/50" />
              <StatItem icon={Trophy} value={unlockedBadgesCount} label="badges" />
            </div>
          </div>
        </div>

        {/* Section Centres d'intérêt */}
        <div className="max-w-2xl mx-auto px-6 mt-8">
          <div className="bg-gradient-to-br from-night-800/50 to-night-900/30 backdrop-blur-lg border border-night-700/40 rounded-2xl p-6">
            <h2 className="text-center text-sand-300 text-sm uppercase tracking-widest mb-5">
              Centres d'intérêt
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {userProfile.interests.map((interest) => (
                <InterestTag key={interest.name} interest={interest} />
              ))}
            </div>
          </div>
        </div>

        {/* Section Préférences artistiques */}
        <div className="max-w-2xl mx-auto px-6 mt-6 pb-8">
          <div className="bg-gradient-to-br from-night-800/50 to-night-900/30 backdrop-blur-lg border border-night-700/40 rounded-2xl p-6">
            <h2 className="text-center text-sand-300 text-sm uppercase tracking-widest mb-5">
              Préférences artistiques
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {allPreferences.map((pref) => (
                <button
                  key={pref}
                  onClick={() => togglePreference(pref)}
                  className={`
                    relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${userData.preferences.includes(pref)
                      ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/50 text-gold-400'
                      : 'bg-night-800/50 border border-night-700/40 text-sand-400 hover:border-gold-500/30'
                    }
                  `}
                >
                  {pref}
                  {userData.preferences.includes(pref) && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-gold-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* Onglet Favoris */}
        {activeTab === 'favoris' && (
          <div className="max-w-2xl mx-auto px-6 pt-10">
            <div className="bg-gradient-to-br from-night-800/70 to-night-900/50 backdrop-blur-xl border border-night-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-gold-400" />
                <h2 className="font-display text-2xl font-bold text-sand-100">Mes Favoris</h2>
              </div>
              <p className="text-center text-sand-400 mb-6">
                Vous avez {stats.totalFavorites} lieu{stats.totalFavorites > 1 ? 'x' : ''} en favoris.
              </p>
              <div className="flex justify-center">
                <a
                  href="/favoris"
                  className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-night-950 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all"
                >
                  Voir tous mes favoris
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Paramètres */}
        {activeTab === 'parametres' && (
          <div className="max-w-2xl mx-auto px-6 pt-10 pb-8">
            <div className="space-y-4">
              {/* Section Compte */}
              <div className="bg-gradient-to-br from-night-800/50 to-night-900/30 backdrop-blur-lg border border-night-700/40 rounded-2xl p-6">
                <h3 className="text-sand-300 text-sm uppercase tracking-widest mb-4">Compte</h3>
                <div className="space-y-3">
                  <SettingOption
                    icon={User}
                    label="Modifier le profil"
                    description="Nom, photo, bio"
                    onClick={() => handleSettingClick('profile')}
                  />
                  <SettingOption
                    icon={Shield}
                    label="Confidentialité"
                    description="Gérer vos données"
                    onClick={() => handleSettingClick('privacy')}
                  />
                </div>
              </div>

              {/* Section Préférences */}
              <div className="bg-gradient-to-br from-night-800/50 to-night-900/30 backdrop-blur-lg border border-night-700/40 rounded-2xl p-6">
                <h3 className="text-sand-300 text-sm uppercase tracking-widest mb-4">Préférences</h3>
                <div className="space-y-3">
                  <SettingOption
                    icon={Bell}
                    label="Notifications"
                    description="Alertes et rappels"
                    hasToggle
                    isEnabled={notifications}
                    onToggle={() => {
                      setNotifications(!notifications);
                      handleSettingClick('notifications');
                    }}
                  />
                  <SettingOption
                    icon={Moon}
                    label="Mode sombre"
                    description="Apparence de l'application"
                    hasToggle
                    isEnabled={darkMode}
                    onToggle={() => {
                      setDarkMode(!darkMode);
                      handleSettingClick('darkmode');
                    }}
                  />
                  <SettingOption
                    icon={Globe}
                    label="Géolocalisation"
                    description="Lieux à proximité"
                    hasToggle
                    isEnabled={locationEnabled}
                    onToggle={() => {
                      setLocationEnabled(!locationEnabled);
                      handleSettingClick('location');
                    }}
                  />
                </div>
              </div>

              {/* Indicateur de sélection */}
              {selectedSetting && (
                <div className="text-center py-4 animate-fade-in">
                  <p className="text-gold-400 text-sm">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Paramètre "{selectedSetting}" sélectionné
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default ProfilePage;
