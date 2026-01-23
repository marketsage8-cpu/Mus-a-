import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, User } from 'lucide-react';

/**
 * Navigation principale avec design transparent fusionnant avec le hero
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/explore', label: 'Carte' },
    { path: '/guides', label: 'Guides' },
    { path: '/decouverte', label: 'Découverte' },
    { path: '/events', label: 'Rencontres' }
  ];

  const isActive = (path) => location.pathname === path;

  // Update indicator position when route changes
  useEffect(() => {
    const activeLink = linkRefs.current[location.pathname];
    if (activeLink && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicatorStyle({
        left: linkRect.left - navRect.left + 16,
        width: linkRect.width - 32
      });
    }
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Fond bleu marine très foncé solide */}
      <div className="absolute inset-0 bg-[#0f0f1a]" />
      {/* Dégradé de transition vers l'image hero - effet bavure style Culturio */}
      <div
        className="absolute inset-x-0 top-full h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            #0f0f1a 0%,
            rgba(15, 15, 26, 0.9) 25%,
            rgba(15, 15, 26, 0.6) 50%,
            rgba(15, 15, 26, 0.3) 75%,
            transparent 100%)`
        }}
      />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo-muzea.svg"
              alt="Muzea - Culture Nearby"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
              style={{
                filter: 'brightness(0) invert(1)'
              }}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-1 relative"
          >
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                ref={(el) => (linkRefs.current[path] = el)}
                className={`
                  relative px-4 py-2
                  text-sm font-medium
                  transition-colors duration-300
                  ${isActive(path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                  }
                `}
              >
                {label}
              </Link>
            ))}
            {/* Animated underline indicator */}
            <span
              className="absolute bottom-0 h-0.5 bg-[#d4a574] rounded-full transition-all duration-500 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                transform: 'translateX(0)'
              }}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Changer de thème"
            >
              {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Profile Button */}
            <Link
              to="/profile"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium transition-all"
            >
              <User className="w-4 h-4" />
              Mon profil
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-all"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  block px-4 py-3
                  transition-all
                  ${isActive(path)
                    ? 'text-[#d4a574] border-l-2 border-[#d4a574] bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3 mt-2 text-white border-t border-white/10"
            >
              <User className="w-5 h-5" />
              Mon profil
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
