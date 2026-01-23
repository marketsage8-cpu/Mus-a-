import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navigation from './components/layout/Navigation';
import MobileNav from './components/layout/MobileNav';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import FavoritesPage from './pages/FavoritesPage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';

/**
 * Application principale Muzea
 * Plateforme immersive pour découvrir le patrimoine culturel
 */
function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen font-body text-amber-50 relative" style={{ zIndex: 1 }}>
          {/* Header navigation */}
          <Navigation />

          {/* Main content */}
          <main className="pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>

          {/* Mobile bottom navigation */}
          <MobileNav />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
