import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Heart, Settings, User, Bookmark,
  Globe, ChevronRight, Bell, Shield, Moon, Users,
  Camera, Mail, Check, Edit3, X, Save, Upload
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Tag/Chip sélectionnable - Style pill
 */
const SelectableTag = ({ label, isSelected, onClick, isPrimary = false }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
      border
      ${isSelected
        ? isPrimary
          ? 'bg-[#2D3748] text-white border-[#2D3748]'
          : 'bg-[#3182CE] text-white border-[#3182CE]'
        : 'bg-white text-gray-600 border-gray-200 hover:border-[#3182CE] hover:text-[#3182CE]'
      }
    `}
  >
    {label}
    {isPrimary && isSelected && (
      <span className="ml-1 text-xs opacity-75">(principale)</span>
    )}
  </button>
);

/**
 * Bouton toggle pour style de visite - Radio style
 */
const VisitStyleButton = ({ label, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200
      ${isSelected
        ? 'bg-[#2D3748] text-white shadow-md'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }
    `}
  >
    {label}
  </button>
);

/**
 * Section de profil avec titre, icône et bouton édition optionnel
 */
const ProfileSection = ({ icon: Icon, title, children, onEdit, isEditing }) => (
  <div className="py-5 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-[#3182CE]" />
        <h3 className="text-gray-800 font-semibold">{title}</h3>
      </div>
      {onEdit && !isEditing && (
        <button
          onClick={onEdit}
          className="p-1.5 text-gray-400 hover:text-[#3182CE] hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Edit3 className="w-4 h-4" />
        </button>
      )}
    </div>
    {children}
  </div>
);

/**
 * Option de paramètre
 */
const SettingOption = ({ icon: Icon, label, description, hasToggle, isEnabled, onToggle, onClick }) => (
  <button
    onClick={onClick || onToggle}
    className="w-full flex items-center gap-4 p-4 bg-white hover:bg-gray-50 border border-gray-100 rounded-xl transition-all group"
  >
    <div className="p-2.5 rounded-xl bg-[#3182CE]/10">
      <Icon className="w-5 h-5 text-[#3182CE]" />
    </div>
    <div className="flex-1 text-left">
      <h4 className="text-gray-800 font-medium">{label}</h4>
      {description && <p className="text-gray-500 text-sm">{description}</p>}
    </div>
    {hasToggle ? (
      <div
        className={`w-12 h-6 rounded-full transition-all ${isEnabled ? 'bg-[#3182CE]' : 'bg-gray-300'}`}
        onClick={(e) => { e.stopPropagation(); onToggle?.(); }}
      >
        <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${isEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
      </div>
    ) : (
      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#3182CE] transition-colors" />
    )}
  </button>
);

/**
 * Page de profil - Design Culturio avec fonctionnalités d'édition complètes
 */
const ProfilePage = () => {
  const { userData, stats, setUserData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeTab, setActiveTab] = useState('profil');
  const [showUnderline, setShowUnderline] = useState(true);
  const [selectedSetting, setSelectedSetting] = useState(null);

  // Refs pour les inputs file
  const coverInputRef = useRef(null);
  const avatarInputRef = useRef(null);

  // États du profil avec persistance localStorage
  const [coverImage, setCoverImage] = useState(() =>
    localStorage.getItem('culturio_cover') || 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80'
  );
  const [avatarImage, setAvatarImage] = useState(() =>
    localStorage.getItem('culturio_avatar') || null
  );
  const [bio, setBio] = useState(() =>
    localStorage.getItem('culturio_bio') || "Passionné d'art et d'histoire, je parcours les musées et monuments de France."
  );
  const [city, setCity] = useState(() =>
    localStorage.getItem('culturio_city') || "Paris"
  );
  const [selectedInterests, setSelectedInterests] = useState(() => {
    const saved = localStorage.getItem('culturio_interests');
    return saved ? JSON.parse(saved) : ['Art', 'Histoire', 'Architecture'];
  });
  const [selectedLanguages, setSelectedLanguages] = useState(() => {
    const saved = localStorage.getItem('culturio_languages');
    return saved ? JSON.parse(saved) : ['Français'];
  });
  const [primaryLanguage, setPrimaryLanguage] = useState(() =>
    localStorage.getItem('culturio_primary_language') || 'Français'
  );
  const [visitStyle, setVisitStyle] = useState(() =>
    localStorage.getItem('culturio_visit_style') || 'Visite tranquille'
  );

  // États d'édition
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingCity, setIsEditingCity] = useState(false);
  const [tempBio, setTempBio] = useState(bio);
  const [tempCity, setTempCity] = useState(city);

  // Paramètres toggles
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  // Message de sauvegarde
  const [showSaveMessage, setShowSaveMessage] = useState(false);

  // Centres d'intérêt disponibles
  const interests = ['Art', 'Histoire', 'Science', 'Architecture', 'Photographie', 'Art moderne', 'Antiquité', 'Nature', 'Musique', 'Littérature'];

  // Langues disponibles
  const languages = ['Français', 'English', 'Español', 'Deutsch', 'Italiano', '中文'];

  // Styles de visite
  const visitStyles = ['Visite tranquille', 'Visite approfondie', 'Visite rapide', 'Flexible'];

  // Sauvegarder dans localStorage
  useEffect(() => {
    localStorage.setItem('culturio_cover', coverImage);
    localStorage.setItem('culturio_avatar', avatarImage || '');
    localStorage.setItem('culturio_bio', bio);
    localStorage.setItem('culturio_city', city);
    localStorage.setItem('culturio_interests', JSON.stringify(selectedInterests));
    localStorage.setItem('culturio_languages', JSON.stringify(selectedLanguages));
    localStorage.setItem('culturio_primary_language', primaryLanguage);
    localStorage.setItem('culturio_visit_style', visitStyle);
  }, [coverImage, avatarImage, bio, city, selectedInterests, selectedLanguages, primaryLanguage, visitStyle]);

  // Gérer la barre sous les onglets
  useEffect(() => {
    if (activeTab === 'parametres') {
      setShowUnderline(false);
    } else {
      setShowUnderline(true);
    }
  }, [activeTab]);

  const handleSettingClick = (settingId) => {
    setSelectedSetting(settingId === selectedSetting ? null : settingId);
    setShowUnderline(true);
  };

  // Gestion des images
  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImage(event.target.result);
        showSaved();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarImage(event.target.result);
        showSaved();
      };
      reader.readAsDataURL(file);
    }
  };

  // Afficher message de sauvegarde
  const showSaved = () => {
    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 2000);
  };

  // Sauvegarder bio
  const saveBio = () => {
    setBio(tempBio);
    setIsEditingBio(false);
    showSaved();
  };

  // Sauvegarder ville
  const saveCity = () => {
    setCity(tempCity);
    setIsEditingCity(false);
    showSaved();
  };

  // Toggle intérêt
  const toggleInterest = (interest) => {
    setSelectedInterests(prev => {
      const newInterests = prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest];
      return newInterests;
    });
    showSaved();
  };

  // Toggle langue
  const toggleLanguage = (language) => {
    setSelectedLanguages(prev => {
      if (prev.includes(language)) {
        // Si c'est la seule langue, ne pas la retirer
        if (prev.length === 1) return prev;
        // Si c'est la langue principale, changer la principale
        if (language === primaryLanguage && prev.length > 1) {
          const newPrimary = prev.find(l => l !== language);
          setPrimaryLanguage(newPrimary);
        }
        return prev.filter(l => l !== language);
      } else {
        return [...prev, language];
      }
    });
    showSaved();
  };

  // Définir langue principale (double-clic)
  const setPrimary = (language) => {
    if (selectedLanguages.includes(language)) {
      setPrimaryLanguage(language);
      showSaved();
    }
  };

  // Changer style de visite
  const changeVisitStyle = (style) => {
    setVisitStyle(style);
    showSaved();
  };

  const tabs = [
    { id: 'profil', label: 'Profil' },
    { id: 'favoris', label: 'Favoris' },
    { id: 'parametres', label: 'Paramètres' }
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {/* Input file cachés */}
      <input
        ref={coverInputRef}
        type="file"
        accept="image/*"
        onChange={handleCoverChange}
        className="hidden"
      />
      <input
        ref={avatarInputRef}
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
        className="hidden"
      />

      {/* Message de sauvegarde */}
      {showSaveMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">Sauvegardé</span>
          </div>
        </div>
      )}

      {/* Bannière de couverture */}
      <div className="relative h-48 md:h-56 group">
        <img
          src={coverImage}
          alt="Couverture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        {/* Bouton modifier couverture */}
        <button
          onClick={() => coverInputRef.current?.click()}
          className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Camera className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Modifier</span>
        </button>
      </div>

      {/* Avatar et infos */}
      <div className="relative max-w-2xl mx-auto px-4">
        {/* Avatar circulaire */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-[#3182CE] to-[#2B6CB0]">
              {avatarImage ? (
                <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {userData.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={() => avatarInputRef.current?.click()}
              className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors group-hover:scale-110"
            >
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Nom et email */}
        <div className="pt-20 pb-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
          <p className="text-gray-500 flex items-center justify-center gap-1 mt-1">
            <Mail className="w-4 h-4" />
            {userData.name.toLowerCase().replace(' ', '.')}@email.com
          </p>
        </div>

        {/* Onglets */}
        <div className="relative">
          <div className="flex items-center justify-center gap-1 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedSetting(null);
                }}
                className={`
                  px-6 py-3 font-medium text-sm transition-all relative
                  ${activeTab === tab.id
                    ? 'text-[#3182CE]'
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3182CE]" />
                )}
              </button>
            ))}
          </div>
          {/* Barre animée qui disparaît/réapparaît */}
          <div
            className={`
              absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3182CE]/50 to-transparent
              transition-all duration-500 ease-in-out
              ${showUnderline ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </div>
      </div>

      {/* Contenu des onglets */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* ONGLET PROFIL */}
        {activeTab === 'profil' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {/* À propos de moi */}
            <ProfileSection
              icon={User}
              title="À propos de moi"
              onEdit={() => {
                setTempBio(bio);
                setIsEditingBio(true);
              }}
              isEditing={isEditingBio}
            >
              {isEditingBio ? (
                <div className="space-y-3">
                  <textarea
                    value={tempBio}
                    onChange={(e) => setTempBio(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:border-[#3182CE] focus:ring-2 focus:ring-[#3182CE]/20 resize-none"
                    rows={4}
                    placeholder="Décrivez-vous en quelques mots..."
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={saveBio}
                      className="flex items-center gap-1 px-4 py-2 bg-[#3182CE] text-white rounded-lg hover:bg-[#2B6CB0] transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Enregistrer
                    </button>
                    <button
                      onClick={() => setIsEditingBio(false)}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Annuler
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 leading-relaxed">
                  {bio || <span className="text-gray-400 italic">Aucune description pour le moment.</span>}
                </p>
              )}
            </ProfileSection>

            {/* Ville */}
            <ProfileSection
              icon={MapPin}
              title="Ville"
              onEdit={() => {
                setTempCity(city);
                setIsEditingCity(true);
              }}
              isEditing={isEditingCity}
            >
              {isEditingCity ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={tempCity}
                    onChange={(e) => setTempCity(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:border-[#3182CE] focus:ring-2 focus:ring-[#3182CE]/20"
                    placeholder="Votre ville..."
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={saveCity}
                      className="flex items-center gap-1 px-4 py-2 bg-[#3182CE] text-white rounded-lg hover:bg-[#2B6CB0] transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Enregistrer
                    </button>
                    <button
                      onClick={() => setIsEditingCity(false)}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Annuler
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">
                  {city || <span className="text-gray-400 italic">Non renseignée</span>}
                </p>
              )}
            </ProfileSection>

            {/* Centres d'intérêt */}
            <ProfileSection icon={Heart} title="Centres d'intérêt">
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <SelectableTag
                    key={interest}
                    label={interest}
                    isSelected={selectedInterests.includes(interest)}
                    onClick={() => toggleInterest(interest)}
                  />
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3">
                Cliquez pour sélectionner/désélectionner
              </p>
            </ProfileSection>

            {/* Langues */}
            <ProfileSection icon={Globe} title="Langues">
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <SelectableTag
                    key={language}
                    label={language}
                    isSelected={selectedLanguages.includes(language)}
                    onClick={() => toggleLanguage(language)}
                    isPrimary={language === primaryLanguage && selectedLanguages.includes(language)}
                  />
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3">
                Double-cliquez sur une langue pour la définir comme principale
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedLanguages.filter(l => l !== primaryLanguage).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setPrimary(lang)}
                    className="text-xs text-[#3182CE] hover:underline"
                  >
                    Définir {lang} comme principale
                  </button>
                ))}
              </div>
            </ProfileSection>

            {/* Style de visite préféré */}
            <div className="py-5">
              <h3 className="text-gray-800 font-semibold mb-4">Style de visite préféré</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {visitStyles.map((style) => (
                  <VisitStyleButton
                    key={style}
                    label={style}
                    isSelected={visitStyle === style}
                    onClick={() => changeVisitStyle(style)}
                  />
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3">
                Un seul style peut être sélectionné
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-100">
              <Link
                to="/events"
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-semibold rounded-xl transition-colors shadow-lg shadow-[#3182CE]/25"
              >
                <Users className="w-5 h-5" />
                Créer mon profil de rencontre
              </Link>
            </div>
          </div>
        )}

        {/* ONGLET FAVORIS */}
        {activeTab === 'favoris' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#3182CE]/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#3182CE]" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Mes Favoris</h2>
              <p className="text-gray-500 mb-6">
                Vous avez {stats.totalFavorites} lieu{stats.totalFavorites > 1 ? 'x' : ''} en favoris.
              </p>
              <Link
                to="/favoris"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-semibold rounded-xl transition-colors"
              >
                <Bookmark className="w-5 h-5" />
                Voir tous mes favoris
              </Link>
            </div>
          </div>
        )}

        {/* ONGLET PARAMÈTRES */}
        {activeTab === 'parametres' && (
          <div className="space-y-4">
            {/* Section Compte */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-semibold">Compte</h3>
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-semibold">Préférences</h3>
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
                  icon={MapPin}
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
              <div className="flex items-center justify-center gap-2 py-3 bg-green-50 text-green-600 rounded-xl animate-fade-in">
                <Check className="w-4 h-4" />
                <span className="text-sm font-medium">Paramètre modifié</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Padding pour navigation mobile */}
      <div className="pb-24 md:pb-8" />

      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default ProfilePage;
