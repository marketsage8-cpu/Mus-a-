import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Heart, Palette, User } from 'lucide-react';

/**
 * Navigation mobile fixe en bas de l'écran
 * Visible uniquement sur mobile (md:hidden)
 */
const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/explore', label: 'Carte', icon: MapPin },
    { path: '/decouverte', label: 'Découverte', icon: Palette },
    { path: '/favorites', label: 'Favoris', icon: Heart },
    { path: '/profile', label: 'Profil', icon: User }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-lg border-t border-stone-800/50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`
              flex flex-col items-center justify-center
              flex-1
              py-2
              rounded-lg
              transition-all duration-300
              ${isActive(path)
                ? 'text-amber-400'
                : 'text-stone-500 hover:text-stone-300'
              }
            `}
          >
            <Icon className={`w-5 h-5 ${isActive(path) ? 'scale-110' : ''} transition-transform`} />
            <span className="text-[10px] mt-1 font-medium">{label}</span>
            {isActive(path) && (
              <span className="absolute bottom-1 w-1 h-1 bg-amber-400 rounded-full" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
