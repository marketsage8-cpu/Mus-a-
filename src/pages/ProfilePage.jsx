import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Heart, Settings, User, Bookmark, Camera, Edit3, Check, X,
  Trophy, Sparkles, Calendar, Bell, Shield, Globe, Moon, ChevronRight,
  Languages, Compass, Clock, Zap, Coffee, Footprints, Map
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import ProfileBackground from '../components/backgrounds/ProfileBackground';
import InteractiveMap from '../components/map/InteractiveMap';
import { places } from '../data/places';

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
 * Tag sélectionnable pour les intérêts/langues
 */
const SelectableTag = ({ label, isSelected, onClick, isPrimary = false }) => (
  <button
    onClick={onClick}
    className={`
      relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
      ${isSelected
        ? isPrimary
          ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-night-950 shadow-lg shadow-gold-500/30'
          : 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/50 text-gold-400'
        : 'bg-night-800/50 border border-night-700/40 text-sand-400 hover:border-gold-500/30'
      }
    `}
  >
    {label}
    {isSelected && !isPrimary && (
      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-gold-400 rounded-full" />
    )}
    {isPrimary && (
      <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-gold-400 text-night-950 text-[10px] font-bold rounded-full">
        1
      </span>
    )}
  </button>
);

/**
 * Option de style de visite (radio button visuel)
 */
const VisitStyleOption = ({ icon: Icon, label, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 flex-1 min-w-[100px]
      ${isSelected
        ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border-2 border-gold-500 text-gold-400'
        : 'bg-night-800/30 border border-night-700/40 text-sand-400 hover:border-gold-500/30'
      }
    `}
  >
    <Icon className={`w-6 h-6 ${isSelected ? 'text-gold-400' : 'text-sand-500'}`} />
    <span className="text-xs font-medium text-center">{label}</span>
  </button>
);

/**
 * Page de profil - Design avec bannière, avatar et onglets
 */
const ProfilePage = () => {
  const { userData, stats, userBadges, setUserData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeTab, setActiveTab] = useState('profil');
  const [showUnderline, setShowUnderline] = useState(true);
  const [selectedSetting, setSelectedSetting] = useState(null);

  // États d'édition
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [aboutText, setAboutText] = useState(userData.about || "Passionné d'art et d'histoire, je parcours les musées et monuments de France à la découverte de notre patrimoine culturel.");
  const [isEditingCity, setIsEditingCity] = useState(false);
  const [cityText, setCityText] = useState(userData.city || "Paris, France");

  // Références pour les uploads
  const coverInputRef = useRef(null);
  const avatarInputRef = useRef(null);

  // Paramètres toggles
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  // Données du profil avec valeurs par défaut
  const [coverImage, setCoverImage] = useState(userData.coverImage || '/images/MBA_2022_39.jpg');
  const [avatarImage, setAvatarImage] = useState(userData.avatarImage || null);

  // Centres d'intérêt disponibles
  const availableInterests = [
    'Art', 'Histoire', 'Science', 'Architecture', 'Photographie',
    'Art moderne', 'Antiquité', 'Nature', 'Musique', 'Littérature'
  ];
  const [selectedInterests, setSelectedInterests] = useState(
    userData.interests || ['Art', 'Histoire', 'Architecture']
  );

  // Langues disponibles
  const availableLanguages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' },
    { code: 'zh', label: '中文' }
  ];
  const [selectedLanguages, setSelectedLanguages] = useState(
    userData.languages || ['fr', 'en']
  );
  const [primaryLanguage, setPrimaryLanguage] = useState(
    userData.primaryLanguage || 'fr'
  );

  // Style de visite
  const visitStyles = [
    { id: 'tranquille', label: 'Visite tranquille', icon: Coffee },
    { id: 'approfondie', label: 'Visite approfondie', icon: Compass },
    { id: 'rapide', label: 'Visite rapide', icon: Zap },
    { id: 'flexible', label: 'Flexible', icon: Clock }
  ];
  const [selectedVisitStyle, setSelectedVisitStyle] = useState(
    userData.visitStyle || 'tranquille'
  );

  // Gérer la barre sous les onglets
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

  // Gestion des uploads d'image
  const handleCoverUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
        setUserData(prev => ({ ...prev, coverImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
        setUserData(prev => ({ ...prev, avatarImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle intérêt
  const toggleInterest = (interest) => {
    setSelectedInterests(prev => {
      const newInterests = prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest];
      setUserData(prevData => ({ ...prevData, interests: newInterests }));
      return newInterests;
    });
  };

  // Toggle langue
  const toggleLanguage = (langCode) => {
    setSelectedLanguages(prev => {
      let newLanguages;
      if (prev.includes(langCode)) {
        newLanguages = prev.filter(l => l !== langCode);
        // Si on enlève la langue principale, mettre la première comme principale
        if (primaryLanguage === langCode && newLanguages.length > 0) {
          setPrimaryLanguage(newLanguages[0]);
          setUserData(prevData => ({ ...prevData, primaryLanguage: newLanguages[0] }));
        }
      } else {
        newLanguages = [...prev, langCode];
      }
      setUserData(prevData => ({ ...prevData, languages: newLanguages }));
      return newLanguages;
    });
  };

  // Définir langue principale
  const setAsPrimaryLanguage = (langCode) => {
    if (selectedLanguages.includes(langCode)) {
      setPrimaryLanguage(langCode);
      setUserData(prev => ({ ...prev, primaryLanguage: langCode }));
    }
  };

  // Sauvegarder le texte "À propos"
  const saveAboutText = () => {
    setUserData(prev => ({ ...prev, about: aboutText }));
    setIsEditingAbout(false);
  };

  // Sauvegarder la ville
  const saveCity = () => {
    setUserData(prev => ({ ...prev, city: cityText }));
    setIsEditingCity(false);
  };

  // Changer le style de visite
  const changeVisitStyle = (styleId) => {
    setSelectedVisitStyle(styleId);
    setUserData(prev => ({ ...prev, visitStyle: styleId }));
  };

  const unlockedBadgesCount = userBadges.filter(b => b.unlocked).length;

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
        {/* ============================================
            BANNIÈRE DE COUVERTURE
            ============================================ */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={coverImage}
            alt="Couverture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night-950/30 via-transparent to-night-950" />

          {/* Bouton changer la couverture */}
          <button
            onClick={() => coverInputRef.current?.click()}
            className="absolute top-4 right-4 p-2.5 bg-night-900/70 backdrop-blur-sm border border-night-700/50 rounded-xl text-sand-300 hover:text-gold-400 hover:border-gold-500/50 transition-all group"
          >
            <Camera className="w-5 h-5" />
          </button>
          <input
            ref={coverInputRef}
            type="file"
            accept="image/*"
            onChange={handleCoverUpload}
            className="hidden"
          />
        </div>

        {/* ============================================
            AVATAR + IDENTITÉ
            ============================================ */}
        <div className="relative max-w-2xl mx-auto px-6 -mt-16 sm:-mt-20">
          <div className="flex flex-col items-center">
            {/* Avatar qui chevauche la bannière */}
            <div className="relative group">
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-gold-400/60 to-gold-600/60 animate-spin-slow opacity-80" style={{ animationDuration: '15s' }} />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-night-950 shadow-2xl">
                {avatarImage ? (
                  <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl font-display font-bold text-night-950">
                      {userData.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              {/* Bouton changer l'avatar */}
              <button
                onClick={() => avatarInputRef.current?.click()}
                className="absolute -bottom-1 -right-1 p-2.5 bg-night-900/90 backdrop-blur-sm border border-night-700/60 rounded-full text-sand-400 hover:text-gold-400 hover:border-gold-500/50 transition-all shadow-lg"
              >
                <Camera className="w-4 h-4" />
              </button>
              <input
                ref={avatarInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
              />
            </div>

            {/* Nom et email */}
            <div className="text-center mt-4">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-sand-100 tracking-wide">
                {userData.name}
              </h1>
              <p className="text-sand-500 text-sm mt-1">
                {userData.email || 'explorateur@muzea.fr'}
              </p>
            </div>
          </div>
        </div>

        {/* ============================================
            ONGLETS DE NAVIGATION
            ============================================ */}
        <div className="sticky top-16 z-20 bg-night-950/80 backdrop-blur-xl border-b border-night-800/50 mt-6">
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

        {/* ============================================
            CONTENU ONGLET PROFIL
            ============================================ */}
        {activeTab === 'profil' && (
          <div className="max-w-2xl mx-auto px-6 pt-8">
            <div className="bg-gradient-to-br from-night-800/70 to-night-900/50 backdrop-blur-xl border border-night-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">

              {/* Section: À propos de moi */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sand-300 text-sm uppercase tracking-widest flex items-center gap-2">
                    <User className="w-4 h-4 text-gold-400" />
                    À propos de moi
                  </h3>
                  {!isEditingAbout && (
                    <button
                      onClick={() => setIsEditingAbout(true)}
                      className="p-1.5 text-sand-500 hover:text-gold-400 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {isEditingAbout ? (
                  <div className="space-y-3">
                    <textarea
                      value={aboutText}
                      onChange={(e) => setAboutText(e.target.value)}
                      className="w-full h-24 p-3 bg-night-900/50 border border-night-700/50 rounded-xl text-sand-200 placeholder-sand-600 focus:outline-none focus:border-gold-500/50 resize-none"
                      placeholder="Décrivez-vous en quelques mots..."
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setIsEditingAbout(false)}
                        className="p-2 text-sand-500 hover:text-red-400 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <button
                        onClick={saveAboutText}
                        className="p-2 text-sand-500 hover:text-green-400 transition-colors"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sand-300/90 leading-relaxed">
                    {aboutText}
                  </p>
                )}
              </div>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-transparent via-night-700/50 to-transparent" />

              {/* Section: Ville */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sand-300 text-sm uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    Ville
                  </h3>
                  {!isEditingCity && (
                    <button
                      onClick={() => setIsEditingCity(true)}
                      className="p-1.5 text-sand-500 hover:text-gold-400 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {isEditingCity ? (
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={cityText}
                      onChange={(e) => setCityText(e.target.value)}
                      className="flex-1 p-3 bg-night-900/50 border border-night-700/50 rounded-xl text-sand-200 placeholder-sand-600 focus:outline-none focus:border-gold-500/50"
                      placeholder="Votre ville..."
                    />
                    <button
                      onClick={() => setIsEditingCity(false)}
                      className="p-2 text-sand-500 hover:text-red-400 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <button
                      onClick={saveCity}
                      className="p-2 text-sand-500 hover:text-green-400 transition-colors"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <p className="text-sand-300/90 flex items-center gap-2">
                    <span className="text-gold-400/70">📍</span>
                    {cityText}
                  </p>
                )}
              </div>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-transparent via-night-700/50 to-transparent" />

              {/* Section: Centres d'intérêt */}
              <div>
                <h3 className="text-sand-300 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-gold-400" />
                  Centres d'intérêt
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableInterests.map((interest) => (
                    <SelectableTag
                      key={interest}
                      label={interest}
                      isSelected={selectedInterests.includes(interest)}
                      onClick={() => toggleInterest(interest)}
                    />
                  ))}
                </div>
              </div>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-transparent via-night-700/50 to-transparent" />

              {/* Section: Langues */}
              <div>
                <h3 className="text-sand-300 text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-gold-400" />
                  Langues
                </h3>
                <p className="text-sand-500 text-xs mb-4">
                  Cliquez deux fois pour définir votre langue principale
                </p>
                <div className="flex flex-wrap gap-2">
                  {availableLanguages.map((lang) => {
                    const isSelected = selectedLanguages.includes(lang.code);
                    const isPrimary = primaryLanguage === lang.code;
                    return (
                      <SelectableTag
                        key={lang.code}
                        label={lang.label}
                        isSelected={isSelected}
                        isPrimary={isPrimary}
                        onClick={() => {
                          if (isSelected && !isPrimary) {
                            setAsPrimaryLanguage(lang.code);
                          } else {
                            toggleLanguage(lang.code);
                          }
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-transparent via-night-700/50 to-transparent" />

              {/* Section: Style de visite préféré */}
              <div>
                <h3 className="text-sand-300 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-gold-400" />
                  Style de visite préféré
                </h3>
                <div className="flex flex-wrap gap-3">
                  {visitStyles.map((style) => (
                    <VisitStyleOption
                      key={style.id}
                      icon={style.icon}
                      label={style.label}
                      isSelected={selectedVisitStyle === style.id}
                      onClick={() => changeVisitStyle(style.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-transparent via-night-700/50 to-transparent" />

              {/* Bouton CTA */}
              <Link
                to="/events"
                className="block w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-night-950 rounded-xl font-semibold text-center hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Créer mon profil de rencontre
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* ============================================
            ONGLET FAVORIS
            ============================================ */}
        {activeTab === 'favoris' && (
          <div className="max-w-2xl mx-auto px-6 pt-8">
            <div className="bg-gradient-to-br from-night-800/70 to-night-900/50 backdrop-blur-xl border border-night-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Header avec icône et titre */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="relative px-6 py-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-gold-500/20 rounded-lg" />
                    <div className="absolute inset-0 border border-gold-500/40 rounded-lg" />
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500 rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500 rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-500 rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-500 rounded-br-lg" />
                    <p className="relative text-sm uppercase tracking-[0.2em] text-gold-400 font-semibold flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Collection
                    </p>
                  </div>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-sand-100 mb-2">
                  Mes Favoris
                </h2>
                <p className="text-sand-400 text-sm">
                  Vos lieux culturels préférés
                </p>
              </div>

              {/* Séparateur décoratif */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

              {/* Statistiques */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-night-800/40 rounded-xl border border-night-700/30">
                  <div className="text-2xl font-bold text-gold-400">{stats.totalFavorites}</div>
                  <div className="text-xs text-sand-500 mt-1">Favoris</div>
                </div>
                <div className="text-center p-4 bg-night-800/40 rounded-xl border border-night-700/30">
                  <div className="text-2xl font-bold text-turquoise-400">{stats.totalVisited || 0}</div>
                  <div className="text-xs text-sand-500 mt-1">Visités</div>
                </div>
                <div className="text-center p-4 bg-night-800/40 rounded-xl border border-night-700/30">
                  <div className="text-2xl font-bold text-purple-400">{unlockedBadgesCount}</div>
                  <div className="text-xs text-sand-500 mt-1">Badges</div>
                </div>
              </div>

              {/* Séparateur décoratif */}
              <div className="h-px bg-gradient-to-r from-transparent via-night-700/50 to-transparent" />

              {/* Message et CTA */}
              <div className="text-center space-y-4">
                <p className="text-sand-300">
                  {stats.totalFavorites > 0
                    ? `Vous avez ${stats.totalFavorites} lieu${stats.totalFavorites > 1 ? 'x' : ''} en favoris.`
                    : "Vous n'avez pas encore de favoris. Explorez la carte pour en ajouter !"
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/favoris"
                    className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-night-950 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    Voir mes favoris
                  </Link>
                  <Link
                    to="/explore"
                    className="px-6 py-3 bg-night-800/60 text-sand-200 rounded-xl font-semibold hover:bg-night-700/60 transition-all border border-night-700/50 hover:border-gold-500/30 flex items-center justify-center gap-2"
                  >
                    <Compass className="w-5 h-5" />
                    Explorer la carte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================
            ONGLET PARAMÈTRES
            ============================================ */}
        {activeTab === 'parametres' && (
          <div className="max-w-2xl mx-auto px-6 pt-8 pb-8">
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

              {/* Section Carte - Cadre Tableau 18ème siècle */}
              <div className="bg-gradient-to-br from-night-800/50 to-night-900/30 backdrop-blur-lg border border-night-700/40 rounded-2xl p-6">
                <h3 className="text-sand-300 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Map className="w-4 h-4 text-gold-400" />
                  Ma Position
                </h3>

                {/* Cadre de tableau 18ème siècle - Style baroque/rococo */}
                <div className="relative">
                  {/* Cadre extérieur avec ornements */}
                  <div className="relative p-3 sm:p-4 rounded-lg"
                    style={{
                      background: 'linear-gradient(135deg, #8B7355 0%, #6B5344 20%, #8B7355 40%, #A08060 50%, #8B7355 60%, #6B5344 80%, #8B7355 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.5)'
                    }}
                  >
                    {/* Ornements des coins - Style rococo */}
                    <div className="absolute top-1 left-1 w-8 h-8 sm:w-12 sm:h-12">
                      <svg viewBox="0 0 50 50" className="w-full h-full text-[#d4a574] opacity-80">
                        <path d="M5,5 Q15,5 20,15 Q15,20 5,20 Q5,15 5,5" fill="currentColor" />
                        <path d="M5,5 Q25,0 25,25 Q0,25 5,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.6" />
                      </svg>
                    </div>
                    <div className="absolute top-1 right-1 w-8 h-8 sm:w-12 sm:h-12 transform scale-x-[-1]">
                      <svg viewBox="0 0 50 50" className="w-full h-full text-[#d4a574] opacity-80">
                        <path d="M5,5 Q15,5 20,15 Q15,20 5,20 Q5,15 5,5" fill="currentColor" />
                        <path d="M5,5 Q25,0 25,25 Q0,25 5,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.6" />
                      </svg>
                    </div>
                    <div className="absolute bottom-1 left-1 w-8 h-8 sm:w-12 sm:h-12 transform scale-y-[-1]">
                      <svg viewBox="0 0 50 50" className="w-full h-full text-[#d4a574] opacity-80">
                        <path d="M5,5 Q15,5 20,15 Q15,20 5,20 Q5,15 5,5" fill="currentColor" />
                        <path d="M5,5 Q25,0 25,25 Q0,25 5,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.6" />
                      </svg>
                    </div>
                    <div className="absolute bottom-1 right-1 w-8 h-8 sm:w-12 sm:h-12 transform scale-[-1]">
                      <svg viewBox="0 0 50 50" className="w-full h-full text-[#d4a574] opacity-80">
                        <path d="M5,5 Q15,5 20,15 Q15,20 5,20 Q5,15 5,5" fill="currentColor" />
                        <path d="M5,5 Q25,0 25,25 Q0,25 5,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.6" />
                      </svg>
                    </div>

                    {/* Bordure intérieure dorée avec moulures */}
                    <div className="relative p-1.5 sm:p-2 rounded"
                      style={{
                        background: 'linear-gradient(135deg, #d4a574 0%, #c9956c 25%, #e8c9a0 50%, #c9956c 75%, #d4a574 100%)',
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.5), inset 0 -1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {/* Ligne de moulure */}
                      <div className="absolute inset-2 border border-[#8B7355]/50 rounded pointer-events-none" />

                      {/* Cadre intérieur sombre */}
                      <div className="relative p-1 rounded"
                        style={{
                          background: 'linear-gradient(135deg, #4a3f35 0%, #3d342c 50%, #4a3f35 100%)',
                          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                        }}
                      >
                        {/* La carte elle-même */}
                        <div className="relative rounded overflow-hidden"
                          style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)' }}
                        >
                          <InteractiveMap
                            places={places.slice(0, 10)}
                            height="250px"
                            center={[46.603354, 1.888334]}
                            zoom={5}
                            showUserLocation={true}
                            autoLocate={true}
                          />

                          {/* Effet vieilli/patine sur la carte */}
                          <div className="absolute inset-0 pointer-events-none"
                            style={{
                              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(139,115,85,0.15) 100%)',
                              mixBlendMode: 'multiply'
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Plaque décorative en bas du cadre */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-4 py-1 rounded-sm"
                      style={{
                        background: 'linear-gradient(180deg, #d4a574 0%, #b8956a 50%, #c9956c 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)'
                      }}
                    >
                      <span className="text-[10px] sm:text-xs font-serif text-[#3d342c] tracking-wider uppercase">
                        Carte de France
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sand-500 text-xs text-center mt-4">
                  Activez la géolocalisation pour voir les lieux culturels près de chez vous
                </p>
              </div>
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
