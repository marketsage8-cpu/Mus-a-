import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Bell, User, Menu, X, Heart, Calendar, MapPin, Search } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { NotificationBadge } from '../ui/Badge';

/**
 * Navigation principale (header sticky)
 * Adaptative desktop/mobile avec menu hamburger
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();
  const { notifications, stats } = useUser();

  const unreadCount = notifications.filter(n => !n.read).length;

  const navLinks = [
    { path: '/', label: 'Accueil', icon: Compass },
    { path: '/search', label: 'Recherche', icon: Search },
    { path: '/explore', label: 'Explorer', icon: MapPin },
    { path: '/favorites', label: 'Favoris', icon: Heart },
    { path: '/events', label: 'Expéditions', icon: Calendar },
    { path: '/profile', label: 'Profil', icon: User }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-night-950/90 backdrop-blur-lg border-b border-night-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-900/30 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-night-950" />
            </div>


       
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`
                  px-4 py-2
                  text-sm font-medium
                  rounded-lg
                  transition-all duration-300
                  ${isActive(path)
                    ? 'text-gold-400 bg-gold-500/10'
                    : 'text-night-400 hover:text-sand-100 hover:bg-night-800/50'
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 text-night-400 hover:text-sand-100 hover:bg-night-800/50 rounded-lg transition-all"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <NotificationBadge count={unreadCount} />
              </button>

              {/* Dropdown notifications */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-night-900 border border-gold-500/20 rounded-xl shadow-xl overflow-hidden">
                  <div className="p-3 border-b border-night-700/50">
                    <h3 className="font-semibold text-sand-100">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3 border-b border-night-800/50 hover:bg-night-800/30 transition-colors ${!notif.read ? 'bg-gold-500/5' : ''}`}
                      >
                        <p className="text-sm text-sand-100">{notif.message}</p>
                        <p className="text-xs text-night-400 mt-1">{notif.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile link desktop */}
            <Link
              to="/profile"
              className="hidden md:flex items-center gap-2 px-3 py-2 bg-night-800/50 border border-gold-500/20 rounded-lg hover:bg-night-700/50 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-night-950 text-sm font-bold">
                E
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-sand-100">Explorateur</p>
                <p className="text-xs text-night-400">{stats.totalVisits} découvertes</p>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-night-400 hover:text-sand-100 hover:bg-night-800/50 rounded-lg transition-all"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-night-800/50 animate-fade-in">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center gap-3
                  px-4 py-3
                  rounded-lg
                  transition-all
                  ${isActive(path)
                    ? 'text-gold-400 bg-gold-500/10'
                    : 'text-night-400 hover:text-sand-100 hover:bg-night-800/50'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
