import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Heart, Settings, User, Bookmark, Camera, Edit3, Check, X,
  Trophy, Sparkles, Calendar, Bell, Shield, Globe, Moon, ChevronRight,
  Languages, Compass, Clock, Zap, Coffee, Footprints, Map,
  Download, FileJson, FileSpreadsheet, Package
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import InteractiveMap from '../components/map/InteractiveMap';
import { places } from '../data/places';
import { exportPlacesJSON, exportPlacesCSV, exportUserDataJSON, exportAllJSON } from '../utils/exportData';

/**
 * Option de paramètre avec toggle ou chevron
 */
const SettingOption = ({ icon: Icon, label, description, hasToggle, isEnabled, onToggle, onClick }) => (
  <button
    onClick={onClick || onToggle}
    className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
  >
    <div className="p-2.5 rounded-xl bg-[#e07a5f]/20 border border-[#e07a5f]/30">
      <Icon className="w-5 h-5 text-[#e07a5f]" />
    </div>
    <div className="flex-1 text-left">
      <h4 className="text-white font-medium">{label}</h4>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
    </div>
    {hasToggle ? (
      <div
        className={`w-12 h-6 rounded-full transition-all ${isEnabled ? 'bg-[#e07a5f]' : 'bg-white/10'}`}
        onClick={(e) => { e.stopPropagation(); onToggle?.(); }}
      >
        <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${isEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
      </div>
    ) : (
      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#e07a5f] transition-colors" />
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
          ? 'bg-[#e07a5f] text-[#0c0c0c] shadow-lg shadow-[#e07a5f]/30'
          : 'bg-[#e07a5f]/20 border border-[#e07a5f]/50 text-[#e07a5f]'
        : 'bg-white/5 border border-white/10 text-gray-400 hover:border-[#e07a5f]/30'
      }
    `}
  >
    {label}
    {isSelected && !isPrimary && (
      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#e07a5f] rounded-full" />
    )}
    {isPrimary && (
      <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-[#e07a5f] text-[#0c0c0c] text-[10px] font-bold rounded-full">
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
        ? 'bg-[#e07a5f]/20 border-2 border-[#e07a5f] text-[#e07a5f]'
        : 'bg-white/5 border border-white/10 text-gray-400 hover:border-[#e07a5f]/30'
      }
    `}
  >
    <Icon className={`w-6 h-6 ${isSelected ? 'text-[#e07a5f]' : 'text-gray-500'}`} />
    <span className="text-xs font-medium text-center">{label}</span>
  </button>
);

/**
 * Page de profil - Style DailyArtPage
 */
const ProfilePage = () => {
  const { userData, stats, userBadges, setUserData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeTab, setActiveTab] = useState('profil');

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

  // Fonds artistiques pour la photo de profil
  const artStyleBackgrounds = [
    { id: 'impressionism', name: 'Impressionnisme', image: '/images/art/impressionism.jpg', color: '#6B8E9F' },
    { id: 'renaissance', name: 'Renaissance', image: '/images/art/renaissance.jpg', color: '#8B7355' },
    { id: 'romanticism', name: 'Romantisme', image: '/images/art/romanticism.jpg', color: '#8B4513' },
    { id: 'postimpressionism', name: 'Post-impressionnisme', image: '/images/art/postimpressionism.jpg', color: '#1E3A5F' },
    { id: 'baroque', name: 'Baroque', image: '/images/art/baroque.jpg', color: '#2F4F4F' },
    { id: 'ukiyoe', name: 'Ukiyo-e', image: '/images/art/ukiyoe.jpg', color: '#4682B4' },
    { id: 'modern', name: 'Art moderne', image: '/images/art/modern.jpg', color: '#191970' },
    { id: 'abstract', name: 'Abstrait', image: '/images/art/abstract.jpg', color: '#DAA520' },
  ];
  const [selectedArtStyle, setSelectedArtStyle] = useState(userData.artStyle || 'impressionism');
  const [showArtStyleSelector, setShowArtStyleSelector] = useState(false);

  const currentArtStyle = artStyleBackgrounds.find(s => s.id === selectedArtStyle) || artStyleBackgrounds[0];

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

  // Changer le fond artistique
  const changeArtStyle = (styleId) => {
    setSelectedArtStyle(styleId);
    setUserData(prev => ({ ...prev, artStyle: styleId }));
    setShowArtStyleSelector(false);
  };

  const unlockedBadgesCount = userBadges.filter(b => b.unlocked).length;

  // Onglets disponibles
  const tabs = [
    { id: 'profil', label: 'Profil', icon: User },
    { id: 'favoris', label: 'Favoris', icon: Bookmark },
    { id: 'parametres', label: 'Paramètres', icon: Settings }
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8" style={{ backgroundColor: '#0c0c0c' }}>
      {/* Fond avec blur de l'image de couverture */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-3xl scale-110"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0c0c0c]/90 to-[#0c0c0c]" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Titre de la page */}
        <div className="text-center pt-6 pb-8">
          <h1 className="font-serif-italic text-3xl text-[#e07a5f]">
            Mon Profil
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Gérez votre compte et vos préférences
          </p>
        </div>

        {/* En-tête du profil avec avatar */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden mb-6">
          {/* Bannière */}
          <div className="relative h-32 sm:h-40">
            <img
              src={coverImage}
              alt="Couverture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
            <button
              onClick={() => coverInputRef.current?.click()}
              className="absolute top-3 right-3 p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all"
            >
              <Camera className="w-4 h-4" />
            </button>
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              onChange={handleCoverUpload}
              className="hidden"
            />
          </div>

          {/* Avatar et informations */}
          <div className="relative px-6 pb-6 -mt-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
              {/* Avatar avec fond artistique - Zone d'identité artistique */}
              <div className="relative group">
                {/* Fond artistique derrière l'avatar - Couleur avec motif */}
                <div
                  className="absolute -inset-4 rounded-2xl overflow-hidden shadow-xl"
                  style={{ backgroundColor: currentArtStyle.color }}
                >
                  {/* Motif décoratif */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 40%),
                                      radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 30%),
                                      linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)`
                  }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                  {/* Label du style artistique */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/50 backdrop-blur-sm rounded-full">
                    <span className="text-[10px] text-white/80 font-medium whitespace-nowrap">{currentArtStyle.name}</span>
                  </div>
                </div>
                {/* Avatar */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#0c0c0c] shadow-xl bg-[#e07a5f]">
                  {avatarImage ? (
                    <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#0c0c0c]">
                        {userData.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                {/* Bouton photo */}
                <button
                  onClick={() => avatarInputRef.current?.click()}
                  className="absolute -bottom-1 -right-1 p-2 bg-[#e07a5f] rounded-full text-[#0c0c0c] hover:bg-[#e8968a] transition-all shadow-lg z-10"
                >
                  <Camera className="w-3 h-3" />
                </button>
                <input
                  ref={avatarInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </div>

              {/* Bouton Modifier le style artistique - TRÈS VISIBLE et PROÉMINENT */}
              <button
                onClick={() => setShowArtStyleSelector(true)}
                className="mt-4 sm:mt-0 px-5 py-3 bg-gradient-to-r from-[#e07a5f] to-[#d4654a] text-white rounded-xl font-semibold text-sm hover:from-[#e8968a] hover:to-[#e07a5f] transition-all shadow-xl shadow-[#e07a5f]/40 flex items-center gap-2 border border-[#e07a5f]/50 animate-pulse hover:animate-none"
              >
                <Sparkles className="w-4 h-4" />
                Modifier mon identité artistique
              </button>

              {/* Nom et email */}
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-xl font-bold text-white">{userData.name}</h2>
                <p className="text-gray-400 text-sm">{userData.email || 'explorateur@muzea.fr'}</p>
              </div>

              {/* Statistiques rapides */}
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#e07a5f]">{stats.totalFavorites}</div>
                  <div className="text-xs text-gray-400">Favoris</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#e07a5f]">{stats.totalVisited || 0}</div>
                  <div className="text-xs text-gray-400">Visités</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#e07a5f]">{unlockedBadgesCount}</div>
                  <div className="text-xs text-gray-400">Badges</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets de navigation */}
        <div className="flex justify-center gap-2 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm
                  transition-all duration-300
                  ${isActive
                    ? 'bg-[#e07a5f] text-[#0c0c0c]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ============================================
            CONTENU ONGLET PROFIL
            ============================================ */}
        {activeTab === 'profil' && (
          <div className="space-y-6">
            {/* Section: À propos de moi */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider flex items-center gap-2">
                  <User className="w-4 h-4" />
                  À propos de moi
                </h3>
                {!isEditingAbout && (
                  <button
                    onClick={() => setIsEditingAbout(true)}
                    className="p-1.5 text-gray-500 hover:text-[#e07a5f] transition-colors"
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
                    className="w-full h-24 p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e07a5f]/50 resize-none"
                    placeholder="Décrivez-vous en quelques mots..."
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsEditingAbout(false)}
                      className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <button
                      onClick={saveAboutText}
                      className="p-2 text-gray-500 hover:text-green-400 transition-colors"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-300 leading-relaxed">
                  {aboutText}
                </p>
              )}
            </div>

            {/* Section: Ville */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Ville
                </h3>
                {!isEditingCity && (
                  <button
                    onClick={() => setIsEditingCity(true)}
                    className="p-1.5 text-gray-500 hover:text-[#e07a5f] transition-colors"
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
                    className="flex-1 p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e07a5f]/50"
                    placeholder="Votre ville..."
                  />
                  <button
                    onClick={() => setIsEditingCity(false)}
                    className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <button
                    onClick={saveCity}
                    className="p-2 text-gray-500 hover:text-green-400 transition-colors"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <p className="text-gray-300 flex items-center gap-2">
                  📍 {cityText}
                </p>
              )}
            </div>

            {/* Section: Centres d'intérêt */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4" />
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

            {/* Section: Langues */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <Languages className="w-4 h-4" />
                Langues
              </h3>
              <p className="text-gray-500 text-xs mb-4">
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

            {/* Section: Style de visite préféré */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Footprints className="w-4 h-4" />
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
          </div>
        )}

        {/* ============================================
            ONGLET FAVORIS
            ============================================ */}
        {activeTab === 'favoris' && (
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            {/* Header avec icône stylée */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="relative px-6 py-2">
                  <div className="absolute inset-0 bg-[#e07a5f]/20 rounded-lg" />
                  <div className="absolute inset-0 border border-[#e07a5f]/50 rounded-lg" />
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#e07a5f] rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#e07a5f] rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#e07a5f] rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#e07a5f] rounded-br-lg" />
                  <p className="relative text-sm uppercase tracking-[0.2em] text-[#e07a5f] font-semibold flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Collection
                  </p>
                </div>
              </div>
              <h2 className="font-serif-italic text-2xl text-white mb-2">
                Mes Favoris
              </h2>
              <p className="text-gray-400 text-sm">
                Vos lieux culturels préférés
              </p>
            </div>

            {/* Séparateur */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#e07a5f]/30 to-transparent mb-6" />

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#e07a5f]">{stats.totalFavorites}</div>
                <div className="text-xs text-gray-400 mt-1">Favoris</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-cyan-400">{stats.totalVisited || 0}</div>
                <div className="text-xs text-gray-400 mt-1">Visités</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-purple-400">{unlockedBadgesCount}</div>
                <div className="text-xs text-gray-400 mt-1">Badges</div>
              </div>
            </div>

            {/* Séparateur */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

            {/* Message et CTA */}
            <div className="text-center space-y-4">
              <p className="text-gray-300">
                {stats.totalFavorites > 0
                  ? `Vous avez ${stats.totalFavorites} lieu${stats.totalFavorites > 1 ? 'x' : ''} en favoris.`
                  : "Vous n'avez pas encore de favoris. Explorez la carte pour en ajouter !"
                }
              </p>
              <div className="flex justify-center">
                <Link
                  to="/explore"
                  className="px-8 py-3 bg-[#e07a5f] hover:bg-[#e8968a] text-[#0c0c0c] rounded-xl font-semibold transition-all shadow-lg shadow-[#e07a5f]/20 flex items-center justify-center gap-2"
                >
                  <Compass className="w-5 h-5" />
                  Explorer la carte
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ============================================
            ONGLET PARAMÈTRES
            ============================================ */}
        {activeTab === 'parametres' && (
          <div className="space-y-6">
            {/* Section Compte */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider mb-4">Compte</h3>
              <div className="space-y-3">
                <SettingOption
                  icon={User}
                  label="Modifier le profil"
                  description="Nom, photo, bio"
                />
                <SettingOption
                  icon={Shield}
                  label="Confidentialité"
                  description="Gérer vos données"
                />
              </div>
            </div>

            {/* Section Préférences */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider mb-4">Préférences</h3>
              <div className="space-y-3">
                <SettingOption
                  icon={Bell}
                  label="Notifications"
                  description="Alertes et rappels"
                  hasToggle
                  isEnabled={notifications}
                  onToggle={() => setNotifications(!notifications)}
                />
                <SettingOption
                  icon={Moon}
                  label="Mode sombre"
                  description="Apparence de l'application"
                  hasToggle
                  isEnabled={darkMode}
                  onToggle={() => setDarkMode(!darkMode)}
                />
                <SettingOption
                  icon={Globe}
                  label="Géolocalisation"
                  description="Lieux à proximité"
                  hasToggle
                  isEnabled={locationEnabled}
                  onToggle={() => setLocationEnabled(!locationEnabled)}
                />
              </div>
            </div>

            {/* Section Carte avec cadre doré */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Map className="w-4 h-4" />
                Ma Position
              </h3>

              {/* Cadre doré autour de la carte */}
              <div className="relative p-2 rounded-xl" style={{
                background: 'linear-gradient(135deg, #e07a5f 0%, #e8968a 50%, #e07a5f 100%)',
                boxShadow: '0 4px 20px rgba(212, 165, 116, 0.3)'
              }}>
                <div className="rounded-lg overflow-hidden">
                  <InteractiveMap
                    places={places.slice(0, 10)}
                    height="200px"
                    center={[46.603354, 1.888334]}
                    zoom={5}
                    showUserLocation={true}
                    autoLocate={true}
                  />
                </div>
              </div>

              <p className="text-gray-500 text-xs text-center mt-4">
                Activez la géolocalisation pour voir les lieux culturels près de chez vous
              </p>
            </div>

            {/* Section Export des données */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-[#e07a5f] font-medium text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Exporter mes données
              </h3>
              <p className="text-gray-500 text-xs mb-5">
                Récupérez toutes vos données pour les utiliser dans une autre application
              </p>

              <div className="space-y-3">
                {/* Export complet */}
                <button
                  onClick={() => exportAllJSON(userData, stats, userBadges)}
                  className="w-full flex items-center gap-4 p-4 bg-[#e07a5f]/10 hover:bg-[#e07a5f]/20 border border-[#e07a5f]/30 hover:border-[#e07a5f]/50 rounded-xl transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#e07a5f]/20 border border-[#e07a5f]/30">
                    <Package className="w-5 h-5 text-[#e07a5f]" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-white font-medium">Tout exporter (JSON)</h4>
                    <p className="text-gray-400 text-sm">Lieux, parcours, favoris, visites, profil</p>
                  </div>
                  <Download className="w-5 h-5 text-[#e07a5f] group-hover:translate-y-0.5 transition-transform" />
                </button>

                {/* Export lieux JSON */}
                <button
                  onClick={exportPlacesJSON}
                  className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                    <FileJson className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-white font-medium">Lieux culturels (JSON)</h4>
                    <p className="text-gray-400 text-sm">{places.length} musées, châteaux et expositions</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-y-0.5 transition-all" />
                </button>

                {/* Export lieux CSV */}
                <button
                  onClick={exportPlacesCSV}
                  className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-green-500/20 border border-green-500/30">
                    <FileSpreadsheet className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-white font-medium">Lieux culturels (CSV)</h4>
                    <p className="text-gray-400 text-sm">Compatible Excel, Google Sheets, etc.</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-500 group-hover:text-green-400 group-hover:translate-y-0.5 transition-all" />
                </button>

                {/* Export données perso */}
                <button
                  onClick={() => exportUserDataJSON(userData, stats, userBadges)}
                  className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/30">
                    <User className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-white font-medium">Mes données personnelles (JSON)</h4>
                    <p className="text-gray-400 text-sm">Profil, favoris, visites et badges</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-y-0.5 transition-all" />
                </button>
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

      {/* Modal sélection style artistique - AMÉLIORÉ */}
      {showArtStyleSelector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop avec animation */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={() => setShowArtStyleSelector(false)}
          />

          {/* Modal content - Plus grand et plus visible */}
          <div className="relative bg-gradient-to-b from-[#0c0c0c] to-[#141414] border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl shadow-[#e07a5f]/10 animate-modal-slide-up">
            {/* Header avec preview - Plus impactant */}
            <div className="relative p-6 pb-5 border-b border-white/10 bg-gradient-to-r from-[#e07a5f]/5 to-transparent">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e07a5f]/15 border border-[#e07a5f]/40 rounded-full mb-3 animate-pulse">
                    <Sparkles className="w-4 h-4 text-[#e07a5f]" />
                    <span className="text-[#e07a5f] text-sm font-semibold">Identité artistique</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white">Choisissez votre style</h3>
                  <p className="text-gray-400 text-sm mt-2 max-w-md">
                    Votre style artistique vous représente. Les autres utilisateurs vous reconnaîtront instantanément grâce à ce fond unique.
                  </p>
                </div>
                <button
                  onClick={() => setShowArtStyleSelector(false)}
                  className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Preview actuel - Plus grand et plus détaillé */}
              <div className="mt-5 flex items-center gap-5 p-4 bg-white/5 rounded-2xl border border-[#e07a5f]/20 shadow-inner">
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#e07a5f]/30 shadow-lg"
                    style={{ backgroundColor: currentArtStyle.color }}
                  >
                    <div className="absolute inset-0 opacity-40" style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%),
                                        linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)`
                    }} />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-3 border-[#0c0c0c] bg-[#e07a5f] flex items-center justify-center overflow-hidden shadow-lg">
                    {avatarImage ? (
                      <img src={avatarImage} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-sm font-bold text-[#0c0c0c]">{userData.name.charAt(0)}</span>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Votre style actuel</p>
                  <p className="text-[#e07a5f] text-xl font-serif font-medium">{currentArtStyle.name}</p>
                  <p className="text-white/40 text-xs mt-1">Cliquez sur une autre image pour changer</p>
                </div>
                <div className="w-10 h-10 bg-[#e07a5f]/20 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#e07a5f]" />
                </div>
              </div>
            </div>

            {/* Grille des styles - Plus grande avec meilleure visibilité */}
            <div className="p-6 overflow-y-auto max-h-[55vh]">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[#e07a5f] text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5" />
                  {artStyleBackgrounds.length} styles disponibles
                </p>
                <p className="text-gray-500 text-xs">Appuyez pour sélectionner</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {artStyleBackgrounds.map((style, index) => (
                  <button
                    key={style.id}
                    onClick={() => changeArtStyle(style.id)}
                    className={`relative group rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-300 ${
                      selectedArtStyle === style.id
                        ? 'ring-3 ring-[#e07a5f] ring-offset-3 ring-offset-[#0c0c0c] scale-[1.02] shadow-xl shadow-[#e07a5f]/30'
                        : 'hover:scale-[1.05] hover:ring-2 hover:ring-white/40 hover:shadow-lg'
                    }`}
                    style={{ backgroundColor: style.color, animationDelay: `${index * 50}ms` }}
                  >
                    {/* Motif décoratif */}
                    <div className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-50" style={{
                      backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0%, transparent 40%),
                                        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 30%),
                                        linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)`
                    }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-semibold text-sm drop-shadow-lg">{style.name}</p>
                      <p className="text-white/70 text-[11px] mt-0.5">
                        {style.id === 'impressionism' && 'Monet, Renoir, Degas...'}
                        {style.id === 'renaissance' && 'Da Vinci, Michel-Ange...'}
                        {style.id === 'romanticism' && 'Delacroix, Turner...'}
                        {style.id === 'postimpressionism' && 'Van Gogh, Cézanne...'}
                        {style.id === 'baroque' && 'Vermeer, Caravage...'}
                        {style.id === 'ukiyoe' && 'Hokusai, Hiroshige...'}
                        {style.id === 'modern' && 'Picasso, Dali...'}
                        {style.id === 'abstract' && 'Kandinsky, Mondrian...'}
                      </p>
                    </div>
                    {selectedArtStyle === style.id && (
                      <div className="absolute top-3 right-3 w-7 h-7 bg-[#e07a5f] rounded-full flex items-center justify-center shadow-lg animate-bounce-once">
                        <Check className="w-4 h-4 text-[#0c0c0c]" />
                      </div>
                    )}
                    {selectedArtStyle !== style.id && (
                      <div className="absolute top-3 right-3 w-7 h-7 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer - Plus informatif */}
            <div className="p-5 border-t border-white/10 bg-gradient-to-r from-[#e07a5f]/5 to-transparent">
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-xs flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#e07a5f]" />
                  Ce fond apparaîtra derrière votre photo de profil
                </p>
                <button
                  onClick={() => setShowArtStyleSelector(false)}
                  className="px-5 py-2 bg-[#e07a5f] text-[#0c0c0c] rounded-xl font-medium text-sm hover:bg-[#e8968a] transition-all shadow-lg"
                >
                  Terminé
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles pour les animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce-once {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-modal-slide-up { animation: modal-slide-up 0.3s ease-out; }
        .animate-bounce-once { animation: bounce-once 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default ProfilePage;
