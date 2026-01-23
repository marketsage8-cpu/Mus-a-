import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Heart, Settings, User, Bookmark,
  Globe, ChevronRight, Bell, Shield, Moon, Users,
  Camera, Mail, Check
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
 * Section de profil avec titre et icône
 */
const ProfileSection = ({ icon: Icon, title, children }) => (
  <div className="py-5 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-5 h-5 text-[#3182CE]" />
      <h3 className="text-gray-800 font-semibold">{title}</h3>
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
 * Page de profil - Design Culturio
 * Refonte complète selon les spécifications du design
 */
const ProfilePage = () => {
  const { userData, stats, setUserData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeTab, setActiveTab] = useState('profil');
  const [showUnderline, setShowUnderline] = useState(true);
  const [selectedSetting, setSelectedSetting] = useState(null);

  // États du profil
  const [bio, setBio] = useState("Passionné d'art et d'histoire, je parcours les musées et monuments de France.");
  const [city, setCity] = useState("Paris");
  const [selectedInterests, setSelectedInterests] = useState(['Art', 'Histoire', 'Architecture']);
  const [selectedLanguages, setSelectedLanguages] = useState(['Français']);
  const [visitStyle, setVisitStyle] = useState('Visite tranquille');

  // Paramètres toggles
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  // Centres d'intérêt disponibles
  const interests = ['Art', 'Histoire', 'Science', 'Architecture', 'Photographie', 'Art moderne', 'Antiquité', 'Nature', 'Musique', 'Littérature'];

  // Langues disponibles
  const languages = ['Français', 'English', 'Español', 'Deutsch', 'Italiano', '中文'];

  // Styles de visite
  const visitStyles = ['Visite tranquille', 'Visite approfondie', 'Visite rapide', 'Flexible'];

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

  const toggleInterest = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const toggleLanguage = (language) => {
    setSelectedLanguages(prev =>
      prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const tabs = [
    { id: 'profil', label: 'Profil' },
    { id: 'favoris', label: 'Favoris' },
    { id: 'parametres', label: 'Paramètres' }
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {/* Bannière de couverture */}
      <div className="relative h-48 md:h-56">
        <img
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80"
          alt="Couverture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        {/* Bouton modifier couverture */}
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
          <Camera className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Avatar et infos */}
      <div className="relative max-w-2xl mx-auto px-4">
        {/* Avatar circulaire */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-[#3182CE] to-[#2B6CB0]">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {userData.name.charAt(0)}
                </span>
              </div>
            </div>
            <button className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Nom et email */}
        <div className="pt-20 pb-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
          <p className="text-gray-500 flex items-center justify-center gap-1 mt-1">
            <Mail className="w-4 h-4" />
            tim.sample@email.com
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
            <ProfileSection icon={User} title="À propos de moi">
              {bio ? (
                <p className="text-gray-600 leading-relaxed">{bio}</p>
              ) : (
                <p className="text-gray-400 italic">Aucune description pour le moment.</p>
              )}
            </ProfileSection>

            {/* Ville */}
            <ProfileSection icon={MapPin} title="Ville">
              {city ? (
                <p className="text-gray-600">{city}</p>
              ) : (
                <p className="text-gray-400 italic">Non renseignée</p>
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
                    isPrimary={language === 'Français' && selectedLanguages.includes(language)}
                  />
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
                    onClick={() => setVisitStyle(style)}
                  />
                ))}
              </div>
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
