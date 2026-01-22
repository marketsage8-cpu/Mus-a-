import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Bell, User, Menu, X, Heart, Calendar, MapPin } from 'lucide-react';
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
    { path: '/explore', label: 'Explorer', icon: MapPin },
    { path: '/favorites', label: 'Favoris', icon: Heart },
    { path: '/events', label: 'Événements', icon: Calendar },
    { path: '/profile', label: 'Profil', icon: User }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-lg border-b border-stone-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-xl font-semibold text-amber-50 hidden sm:block">
              Culture Explorer
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
                    ? 'text-amber-400 bg-amber-600/10'
                    : 'text-stone-400 hover:text-amber-50 hover:bg-stone-800/50'
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
                className="relative p-2 text-stone-400 hover:text-amber-50 hover:bg-stone-800/50 rounded-lg transition-all"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <NotificationBadge count={unreadCount} />
              </button>

              {/* Dropdown notifications */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-stone-900 border border-stone-700/50 rounded-xl shadow-xl overflow-hidden">
                  <div className="p-3 border-b border-stone-700/50">
                    <h3 className="font-semibold text-amber-50">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3 border-b border-stone-800/50 hover:bg-stone-800/30 transition-colors ${!notif.read ? 'bg-amber-600/5' : ''}`}
                      >
                        <p className="text-sm text-amber-50">{notif.message}</p>
                        <p className="text-xs text-stone-500 mt-1">{notif.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile link desktop */}
            <Link
              to="/profile"
              className="hidden md:flex items-center gap-2 px-3 py-2 bg-stone-800/50 border border-stone-700/50 rounded-lg hover:bg-stone-700/50 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-sm font-bold">
                E
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-amber-50">Explorateur</p>
                <p className="text-xs text-stone-400">{stats.totalVisits} visites</p>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-400 hover:text-amber-50 hover:bg-stone-800/50 rounded-lg transition-all"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-800/50 animate-fade-in">
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
                    ? 'text-amber-400 bg-amber-600/10'
                    : 'text-stone-400 hover:text-amber-50 hover:bg-stone-800/50'
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
