import { useState, useEffect, useRef } from 'react';
import {
  MapPin, Heart, Award, Settings, Lock,
  Trophy, Sparkles, Calendar, Crown, Mail,
  Globe, ArrowUpRight, Instagram,
  Twitter, Linkedin, GraduationCap
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { places } from '../data/places';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';
import ProfileBackground from '../components/backgrounds/ProfileBackground';

/**
 * Composant de compteur animé avec effet élégant
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
 * Séparateur élégant avec ligne fine dorée
 */
const ElegantDivider = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/40" />
    <div className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/40" />
  </div>
);

/**
 * Section titre avec typographie marquée
 */
const SectionTitle = ({ icon: Icon, title, subtitle, align = 'center' }) => (
  <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {Icon && (
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-500/15 to-gold-600/5 border border-gold-500/20 mb-4`}>
        <Icon className="w-5 h-5 text-gold-400" />
      </div>
    )}
    <h2 className="font-display text-2xl md:text-3xl font-semibold text-sand-100 tracking-wide mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="font-serif-italic text-sand-400/80 text-base">
        {subtitle}
      </p>
    )}
  </div>
);

/**
 * Carte de statistique minimaliste
 */
const MinimalStatCard = ({ value, label, icon: Icon, delay = 0 }) => (
  <div
    className="group text-center animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="relative inline-flex items-center justify-center w-16 h-16 mb-3">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-night-800/60 to-night-900/40 border border-night-700/40 group-hover:border-gold-500/30 transition-colors duration-500" />
      <Icon className="w-6 h-6 text-gold-400/80 relative z-10" />
    </div>
    <p className="font-display text-3xl font-bold text-sand-100 mb-1">
      <AnimatedCounter value={value} />
    </p>
    <p className="text-sm text-sand-500 tracking-wide uppercase">{label}</p>
  </div>
);

/**
 * Badge de compétence élégant
 */
const SkillBadge = ({ skill, level, index }) => {
  const levelColors = {
    expert: 'from-gold-500/25 to-gold-600/10 border-gold-500/40 text-gold-400',
    avancé: 'from-turquoise-500/20 to-turquoise-600/10 border-turquoise-500/30 text-turquoise-400',
    intermédiaire: 'from-sand-500/15 to-sand-600/5 border-sand-500/25 text-sand-300',
  };

  return (
    <div
      className={`
        px-5 py-3 rounded-xl
        bg-gradient-to-br ${levelColors[level]}
        border backdrop-blur-sm
        transform hover:scale-105 hover:-translate-y-0.5
        transition-all duration-300 ease-out
        animate-fade-in
      `}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <span className="text-sm font-medium">{skill}</span>
    </div>
  );
};

/**
 * Lien social élégant
 */
const SocialLink = ({ icon: Icon, label, href, index }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group flex items-center gap-3 px-5 py-3.5 rounded-xl
      bg-gradient-to-br from-night-800/50 to-night-900/30
      border border-night-700/40 hover:border-gold-500/40
      backdrop-blur-sm
      transform hover:scale-[1.02] hover:-translate-y-0.5
      transition-all duration-300 ease-out
      animate-fade-in
    "
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="p-2 rounded-lg bg-night-800/60 group-hover:bg-gold-500/15 transition-colors duration-300">
      <Icon className="w-4 h-4 text-sand-400 group-hover:text-gold-400 transition-colors duration-300" />
    </div>
    <span className="text-sm font-medium text-sand-300 group-hover:text-sand-100 transition-colors duration-300">
      {label}
    </span>
    <ArrowUpRight className="w-4 h-4 ml-auto text-sand-600 group-hover:text-gold-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
  </a>
);

/**
 * Tag de centre d'intérêt
 */
const InterestTag = ({ interest, index }) => (
  <span
    className="
      inline-flex items-center gap-2 px-4 py-2 rounded-full
      bg-night-800/40 border border-night-700/30
      text-sand-300 text-sm
      hover:border-gold-500/30 hover:text-gold-400
      transition-all duration-300
      animate-fade-in
    "
    style={{ animationDelay: `${index * 40}ms` }}
  >
    <span className="text-base">{interest.icon}</span>
    {interest.name}
  </span>
);

/**
 * Carte de badge avec effet premium
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
      {!badge.unlocked && (
        <div className="absolute top-3 right-3 p-1.5 rounded-full bg-night-700/80">
          <Lock className="w-3 h-3 text-night-400" />
        </div>
      )}

      {badge.unlocked && (
        <div className="absolute inset-0 rounded-2xl">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/20 to-transparent opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-500`} />
          <div className={`absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-gold-400/50 via-gold-500/30 to-gold-600/20 opacity-0 ${isHovered ? 'opacity-100 animate-pulse' : ''} transition-opacity duration-500 blur-sm`} />
        </div>
      )}

      <div className="relative z-10">
        <div className={`text-4xl mb-3 transition-transform duration-500 ${badge.unlocked && isHovered ? 'scale-110 animate-bounce-slow' : ''}`}>
          {badge.icon}
        </div>
        <p className={`font-semibold text-sm mb-1 ${badge.unlocked ? 'text-sand-100' : 'text-night-500'}`}>
          {badge.name}
        </p>
        <p className={`text-xs ${badge.unlocked ? 'text-sand-300/60' : 'text-night-600'}`}>
          {badge.condition}
        </p>

        {badge.unlocked && isHovered && (
          <Sparkles className="absolute top-2 left-2 w-4 h-4 text-gold-400 animate-pulse" />
        )}
      </div>
    </div>
  );
};

/**
 * Page de profil - Design élégant et minimaliste
 */
const ProfilePage = () => {
  const { userData, stats, userBadges, recentVisits, setUserData } = useUser();
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Données du profil utilisateur (bio, parcours, etc.)
  const userProfile = {
    bio: "Passionné d'art et d'histoire, je parcours les musées et monuments de France à la découverte de notre patrimoine culturel. Chaque visite est une nouvelle aventure intellectuelle.",
    location: "Paris, France",
    memberSince: "Janvier 2026",
    skills: [
      { name: 'Art Renaissance', level: 'expert' },
      { name: 'Architecture Gothique', level: 'avancé' },
      { name: 'Histoire Médiévale', level: 'expert' },
      { name: 'Art Contemporain', level: 'intermédiaire' },
      { name: 'Impressionnisme', level: 'avancé' },
      { name: 'Antiquité Grecque', level: 'intermédiaire' },
    ],
    interests: [
      { name: 'Renaissance', icon: '🎨' },
      { name: 'Architecture', icon: '🏛️' },
      { name: 'Photographie', icon: '📷' },
      { name: 'Histoire', icon: '📚' },
      { name: 'Jardins', icon: '🌿' },
      { name: 'Musique classique', icon: '🎵' },
    ],
    socialLinks: [
      { icon: Mail, label: 'Contact', href: 'mailto:contact@example.com' },
      { icon: Instagram, label: 'Instagram', href: '#' },
      { icon: Twitter, label: 'Twitter', href: '#' },
      { icon: Linkedin, label: 'LinkedIn', href: '#' },
    ],
  };

  const unlockedBadgesCount = userBadges.filter(b => b.unlocked).length;
  const totalBadges = userBadges.length;
  const progressPercentage = (unlockedBadgesCount / totalBadges) * 100;

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
    <div className="relative min-h-screen">
      {/* Background animé */}
      <ProfileBackground />

      {/* Contenu principal - Axe vertical fluide */}
      <div className="relative z-10 pb-24 md:pb-8">

        {/* ═══════════════════════════════════════════════════════════════
            SECTION HERO - Photo, Nom, Titre, Bio
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden">
          {/* Overlay gradient subtil */}
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-transparent" />

          <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
            {/* Contenu centré - Axe vertical */}
            <div className="flex flex-col items-center text-center">

              {/* Photo de profil - Mise en valeur sobre */}
              <div className="relative group mb-8 animate-fade-in">
                {/* Anneau animé subtil */}
                <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-gold-400/60 via-gold-500/40 to-gold-600/60 animate-spin-slow opacity-60" style={{ animationDuration: '12s' }} />

                {/* Container photo */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-night-900 shadow-2xl shadow-gold-500/20">
                  <div className="w-full h-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="text-6xl md:text-7xl font-display font-bold text-night-950">
                      {userData.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Badge premium pour achievers */}
                {unlockedBadgesCount >= 3 && (
                  <div className="absolute -bottom-1 -right-1 p-2.5 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg border-2 border-night-900 animate-pulse">
                    <Crown className="w-4 h-4 text-night-950" />
                  </div>
                )}

                {/* Bouton settings discret */}
                <button className="absolute -bottom-1 -left-1 p-2.5 bg-night-800/90 backdrop-blur-sm border border-night-700/50 rounded-full text-sand-400 hover:text-gold-400 hover:border-gold-500/50 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100">
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              {/* Nom - Typographie marquée */}
              <h1 className="font-display text-4xl md:text-5xl font-bold text-sand-100 tracking-wide mb-3 animate-slide-up" style={{ animationDelay: '100ms' }}>
                {userData.name}
              </h1>

              {/* Titre / Rôle */}
              <p className="flex items-center gap-2 text-gold-400/90 text-lg font-medium mb-4 animate-slide-up" style={{ animationDelay: '150ms' }}>
                <Sparkles className="w-4 h-4" />
                Explorateur Culturel
              </p>

              {/* Localisation & Date */}
              <div className="flex items-center gap-4 text-sand-500 text-sm mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {userProfile.location}
                </span>
                <span className="w-1 h-1 rounded-full bg-sand-600" />
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Membre depuis {userProfile.memberSince}
                </span>
              </div>

              {/* Bio - Courte description élégante */}
              <div className="max-w-2xl animate-slide-up" style={{ animationDelay: '250ms' }}>
                <p className="font-serif-italic text-sand-300/90 text-lg leading-relaxed">
                  "{userProfile.bio}"
                </p>
              </div>

              {/* Statistiques minimalistes */}
              <div className="flex items-center justify-center gap-12 md:gap-16 mt-12 animate-fade-in" style={{ animationDelay: '350ms' }}>
                <MinimalStatCard icon={MapPin} value={stats.totalVisits} label="Visites" delay={400} />
                <MinimalStatCard icon={Heart} value={stats.totalFavorites} label="Favoris" delay={450} />
                <MinimalStatCard icon={Trophy} value={unlockedBadgesCount} label="Badges" delay={500} />
              </div>
            </div>
          </div>
        </section>

        <ElegantDivider />

        {/* ═══════════════════════════════════════════════════════════════
            SECTION COMPÉTENCES CULTURELLES
        ═══════════════════════════════════════════════════════════════ */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <SectionTitle
            icon={GraduationCap}
            title="Expertises Culturelles"
            subtitle="Domaines de connaissance et centres d'intérêt"
          />

          <div className="flex flex-wrap justify-center gap-3">
            {userProfile.skills.map((skill, index) => (
              <SkillBadge
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </section>

        <ElegantDivider />

        {/* ═══════════════════════════════════════════════════════════════
            SECTION BADGES
        ═══════════════════════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <SectionTitle
            icon={Award}
            title="Collection de Badges"
            subtitle={`${unlockedBadgesCount} sur ${totalBadges} débloqués`}
          />

          {/* Barre de progression élégante */}
          <div className="max-w-md mx-auto mb-10">
            <div className="h-2 bg-night-800/60 rounded-full overflow-hidden border border-night-700/40">
              <div
                className="h-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {userBadges.map((badge, index) => (
              <BadgeCard key={badge.id} badge={badge} index={index} />
            ))}
          </div>
        </section>

        <ElegantDivider />

        {/* ═══════════════════════════════════════════════════════════════
            SECTION CENTRES D'INTÉRÊT
        ═══════════════════════════════════════════════════════════════ */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <SectionTitle
            icon={Heart}
            title="Centres d'Intérêt"
            subtitle="Ce qui nourrit ma curiosité culturelle"
          />

          <div className="flex flex-wrap justify-center gap-3">
            {userProfile.interests.map((interest, index) => (
              <InterestTag key={interest.name} interest={interest} index={index} />
            ))}
          </div>

          {/* Préférences artistiques interactives */}
          <div className="mt-12">
            <h3 className="text-center text-sand-400 text-sm uppercase tracking-widest mb-6">
              Préférences artistiques
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allPreferences.map((pref, index) => (
                <button
                  key={pref}
                  onClick={() => togglePreference(pref)}
                  className={`
                    relative px-5 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-300 ease-out
                    transform hover:scale-105
                    animate-fade-in
                    ${userData.preferences.includes(pref)
                      ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/50 text-gold-400 shadow-lg shadow-gold-500/10'
                      : 'bg-night-800/40 border border-night-700/40 text-sand-400 hover:border-gold-500/30 hover:text-sand-300'
                    }
                  `}
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  {pref}
                  {userData.preferences.includes(pref) && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        <ElegantDivider />

        {/* ═══════════════════════════════════════════════════════════════
            SECTION CONTACT / LIENS EXTERNES
        ═══════════════════════════════════════════════════════════════ */}
        <section className="max-w-2xl mx-auto px-6 py-8 pb-16">
          <SectionTitle
            icon={Globe}
            title="Me Contacter"
            subtitle="Restons connectés"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {userProfile.socialLinks.map((link, index) => (
              <SocialLink
                key={link.label}
                icon={link.icon}
                label={link.label}
                href={link.href}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Modal de détail de lieu */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default ProfilePage;
