import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  MapPin,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Calendar,
  Star,
  ChevronRight,
  BarChart3,
  PieChart,
  Activity,
  Bell,
  Menu,
  X,
  Check,
  AlertTriangle,
  Image,
  Save,
  RefreshCw
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { places } from '../data/places';
import { frenchMuseums } from '../data/frenchMuseums';

/**
 * Tableau de bord administrateur
 */
const AdminDashboard = () => {
  const navigate = useNavigate();
  const { adminUser, logout, isAuthenticated } = useAdmin();

  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Données mockées pour la démo
  const [stats] = useState({
    totalPlaces: places.length + frenchMuseums.length,
    totalUsers: 1247,
    totalVisits: 45892,
    activeConversations: 89,
    monthlyGrowth: 12.5,
    avgRating: 4.7
  });

  const [recentActivities] = useState([
    { id: 1, type: 'user', message: 'Nouvel utilisateur inscrit: Marie D.', time: 'Il y a 5 min' },
    { id: 2, type: 'place', message: 'Nouveau lieu ajouté: Musée Picasso', time: 'Il y a 15 min' },
    { id: 3, type: 'meeting', message: 'Nouvelle rencontre organisée au Louvre', time: 'Il y a 30 min' },
    { id: 4, type: 'review', message: 'Nouvel avis 5 étoiles sur le Château de Versailles', time: 'Il y a 1h' },
    { id: 5, type: 'user', message: 'Badge "Explorateur" débloqué par Jean P.', time: 'Il y a 2h' },
  ]);

  const [pendingReviews] = useState([
    { id: 1, user: 'Sophie L.', place: 'Musée d\'Orsay', rating: 4, comment: 'Magnifique collection impressionniste!', date: '2026-01-23' },
    { id: 2, user: 'Pierre M.', place: 'Château de Chambord', rating: 5, comment: 'Architecture exceptionnelle', date: '2026-01-22' },
    { id: 3, user: 'Claire B.', place: 'Mont-Saint-Michel', rating: 5, comment: 'Incontournable !', date: '2026-01-22' },
  ]);

  // Rediriger si non authentifié
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const menuItems = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: LayoutDashboard },
    { id: 'places', label: 'Lieux culturels', icon: MapPin },
    { id: 'users', label: 'Utilisateurs', icon: Users },
    { id: 'meetings', label: 'Rencontres', icon: MessageSquare },
    { id: 'reviews', label: 'Avis & Notes', icon: Star },
    { id: 'analytics', label: 'Statistiques', icon: BarChart3 },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d1a] flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#1a1a2e] border-r border-[#d4a574]/20 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-[#d4a574]/20 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-[#d4a574]">Muzea Admin</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5 text-gray-400" /> : <Menu className="w-5 h-5 text-gray-400" />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeSection === item.id
                    ? 'bg-[#d4a574] text-[#1a1a2e]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* User info & Logout */}
        <div className="p-4 border-t border-[#d4a574]/20">
          {sidebarOpen && adminUser && (
            <div className="flex items-center gap-3 mb-4">
              <img
                src={adminUser.avatar}
                alt={adminUser.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{adminUser.name}</p>
                <p className="text-gray-500 text-xs">{adminUser.role}</p>
              </div>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Déconnexion</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-[#1a1a2e]/50 backdrop-blur-sm border-b border-[#d4a574]/20 p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {menuItems.find(m => m.id === activeSection)?.label}
              </h2>
              <p className="text-gray-400 text-sm">Bienvenue, {adminUser?.name}</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#d4a574]"
                />
              </div>
              {/* Notifications */}
              <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {activeSection === 'overview' && (
            <OverviewSection stats={stats} recentActivities={recentActivities} pendingReviews={pendingReviews} />
          )}
          {activeSection === 'places' && <PlacesSection searchQuery={searchQuery} />}
          {activeSection === 'users' && <UsersSection searchQuery={searchQuery} />}
          {activeSection === 'meetings' && <MeetingsSection />}
          {activeSection === 'reviews' && <ReviewsSection pendingReviews={pendingReviews} />}
          {activeSection === 'analytics' && <AnalyticsSection stats={stats} />}
          {activeSection === 'settings' && <SettingsSection />}
        </div>
      </main>
    </div>
  );
};

/**
 * Section Vue d'ensemble
 */
const OverviewSection = ({ stats, recentActivities, pendingReviews }) => {
  const statCards = [
    { label: 'Lieux culturels', value: stats.totalPlaces, icon: MapPin, color: 'from-blue-500 to-blue-600', change: '+12' },
    { label: 'Utilisateurs', value: stats.totalUsers.toLocaleString(), icon: Users, color: 'from-green-500 to-green-600', change: '+58' },
    { label: 'Visites totales', value: stats.totalVisits.toLocaleString(), icon: Eye, color: 'from-purple-500 to-purple-600', change: '+1.2k' },
    { label: 'Conversations actives', value: stats.activeConversations, icon: MessageSquare, color: 'from-orange-500 to-orange-600', change: '+15' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity chart placeholder */}
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Activité mensuelle</h3>
            <Activity className="w-5 h-5 text-[#d4a574]" />
          </div>
          <div className="h-48 flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-[#d4a574] to-[#d4a574]/50 rounded-t-lg transition-all hover:from-[#c49464]" style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
            <span>Juil</span><span>Août</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Déc</span>
          </div>
        </div>

        {/* Categories breakdown */}
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Répartition par type</h3>
            <PieChart className="w-5 h-5 text-[#d4a574]" />
          </div>
          <div className="space-y-4">
            {[
              { label: 'Musées', count: 85, color: 'bg-blue-500' },
              { label: 'Châteaux', count: 67, color: 'bg-green-500' },
              { label: 'Monuments', count: 45, color: 'bg-purple-500' },
              { label: 'Expositions', count: 23, color: 'bg-orange-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-gray-300 flex-1">{item.label}</span>
                <span className="text-white font-medium">{item.count}</span>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: `${(item.count / 85) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent activity & Pending reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent activity */}
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Activité récente</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'user' ? 'bg-green-500/20 text-green-400' :
                  activity.type === 'place' ? 'bg-blue-500/20 text-blue-400' :
                  activity.type === 'meeting' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-orange-500/20 text-orange-400'
                }`}>
                  {activity.type === 'user' && <Users className="w-4 h-4" />}
                  {activity.type === 'place' && <MapPin className="w-4 h-4" />}
                  {activity.type === 'meeting' && <MessageSquare className="w-4 h-4" />}
                  {activity.type === 'review' && <Star className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.message}</p>
                  <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending reviews */}
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Avis en attente</h3>
            <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">{pendingReviews.length} à valider</span>
          </div>
          <div className="space-y-3">
            {pendingReviews.map((review) => (
              <div key={review.id} className="p-4 bg-white/5 rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-medium">{review.user}</p>
                    <p className="text-gray-400 text-sm">{review.place}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-[#d4a574] fill-current' : 'text-gray-600'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">"{review.comment}"</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" /> Approuver
                  </button>
                  <button className="flex-1 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2">
                    <X className="w-4 h-4" /> Rejeter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Section Gestion des lieux
 */
const PlacesSection = ({ searchQuery }) => {
  const allPlaces = [...places, ...frenchMuseums.slice(0, 50)];
  const [editingPlace, setEditingPlace] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredPlaces = searchQuery
    ? allPlaces.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : allPlaces.slice(0, 20);

  return (
    <div className="space-y-6">
      {/* Header actions */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">{allPlaces.length} lieux au total</p>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#d4a574] text-[#1a1a2e] rounded-xl font-medium hover:bg-[#c49464] transition-colors"
        >
          <Plus className="w-5 h-5" /> Ajouter un lieu
        </button>
      </div>

      {/* Places table */}
      <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-4 text-gray-400 font-medium">Lieu</th>
              <th className="text-left p-4 text-gray-400 font-medium">Type</th>
              <th className="text-left p-4 text-gray-400 font-medium">Localisation</th>
              <th className="text-left p-4 text-gray-400 font-medium">Note</th>
              <th className="text-right p-4 text-gray-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlaces.map((place) => (
              <tr key={place.id} className="border-t border-white/5 hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={place.image} alt={place.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="text-white font-medium">{place.name}</p>
                      <p className="text-gray-500 text-sm">{place.description?.slice(0, 50)}...</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#d4a574] rounded-full text-sm capitalize">
                    {place.type}
                  </span>
                </td>
                <td className="p-4 text-gray-300">{place.location || place.city}</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#d4a574] fill-current" />
                    <span className="text-white">{place.rating || '4.5'}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Voir">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                    <button
                      onClick={() => setEditingPlace(place)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      title="Modifier"
                    >
                      <Edit className="w-4 h-4 text-blue-400" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Supprimer">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingPlace) && (
        <PlaceModal
          place={editingPlace}
          onClose={() => { setShowAddModal(false); setEditingPlace(null); }}
        />
      )}
    </div>
  );
};

/**
 * Modal d'ajout/édition de lieu
 */
const PlaceModal = ({ place, onClose }) => {
  const [formData, setFormData] = useState(place || {
    name: '',
    type: 'musée',
    location: '',
    description: '',
    price: '',
    hours: '',
    image: ''
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">
            {place ? 'Modifier le lieu' : 'Ajouter un lieu'}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Nom</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574]"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574]"
              >
                <option value="musée">Musée</option>
                <option value="château">Château</option>
                <option value="monument">Monument</option>
                <option value="exposition">Exposition</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Localisation</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574]"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574] resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Tarif</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="ex: 15€"
                className="w-full p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574]"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Horaires</label>
              <input
                type="text"
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                placeholder="ex: 9h-18h"
                className="w-full p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574]"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">URL de l'image</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://..."
                className="flex-1 p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574]"
              />
              <button className="px-4 py-3 bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors">
                <Image className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-white/10 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-3 text-gray-400 hover:text-white transition-colors">
            Annuler
          </button>
          <button className="px-6 py-3 bg-[#d4a574] text-[#1a1a2e] rounded-xl font-medium hover:bg-[#c49464] transition-colors flex items-center gap-2">
            <Save className="w-5 h-5" />
            {place ? 'Enregistrer' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Section Gestion des utilisateurs
 */
const UsersSection = ({ searchQuery }) => {
  const mockUsers = [
    { id: 1, name: 'Marie Dupont', email: 'marie.d@email.com', visits: 24, joinDate: '2025-12-01', status: 'active' },
    { id: 2, name: 'Jean Martin', email: 'jean.m@email.com', visits: 18, joinDate: '2025-11-15', status: 'active' },
    { id: 3, name: 'Sophie Bernard', email: 'sophie.b@email.com', visits: 42, joinDate: '2025-10-20', status: 'active' },
    { id: 4, name: 'Pierre Lefebvre', email: 'pierre.l@email.com', visits: 8, joinDate: '2026-01-05', status: 'inactive' },
    { id: 5, name: 'Claire Moreau', email: 'claire.m@email.com', visits: 31, joinDate: '2025-09-10', status: 'active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-400">1,247 utilisateurs au total</p>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
          <RefreshCw className="w-5 h-5" /> Actualiser
        </button>
      </div>

      <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-4 text-gray-400 font-medium">Utilisateur</th>
              <th className="text-left p-4 text-gray-400 font-medium">Email</th>
              <th className="text-left p-4 text-gray-400 font-medium">Visites</th>
              <th className="text-left p-4 text-gray-400 font-medium">Inscription</th>
              <th className="text-left p-4 text-gray-400 font-medium">Statut</th>
              <th className="text-right p-4 text-gray-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr key={user.id} className="border-t border-white/5 hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a574] to-[#c49464] flex items-center justify-center text-[#1a1a2e] font-bold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-white font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-300">{user.email}</td>
                <td className="p-4 text-white">{user.visits}</td>
                <td className="p-4 text-gray-300">{user.joinDate}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {user.status === 'active' ? 'Actif' : 'Inactif'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Edit className="w-4 h-4 text-blue-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * Section Rencontres
 */
const MeetingsSection = () => {
  const mockMeetings = [
    { id: 1, place: 'Musée du Louvre', participants: 3, date: '2026-01-25', status: 'upcoming' },
    { id: 2, place: 'Château de Versailles', participants: 2, date: '2026-01-24', status: 'upcoming' },
    { id: 3, place: 'Musée d\'Orsay', participants: 4, date: '2026-01-20', status: 'completed' },
    { id: 4, place: 'Centre Pompidou', participants: 2, date: '2026-01-18', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Rencontres ce mois</p>
          <p className="text-3xl font-bold text-white">47</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">À venir</p>
          <p className="text-3xl font-bold text-green-400">12</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Participants actifs</p>
          <p className="text-3xl font-bold text-[#d4a574]">89</p>
        </div>
      </div>

      <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Rencontres récentes</h3>
        <div className="space-y-3">
          {mockMeetings.map((meeting) => (
            <div key={meeting.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#d4a574]/20 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#d4a574]" />
                </div>
                <div>
                  <p className="text-white font-medium">{meeting.place}</p>
                  <p className="text-gray-400 text-sm">{meeting.participants} participants • {meeting.date}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                meeting.status === 'upcoming' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
              }`}>
                {meeting.status === 'upcoming' ? 'À venir' : 'Terminée'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Section Avis
 */
const ReviewsSection = ({ pendingReviews }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Note moyenne</p>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold text-white">4.7</p>
            <Star className="w-6 h-6 text-[#d4a574] fill-current" />
          </div>
        </div>
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Total des avis</p>
          <p className="text-3xl font-bold text-white">2,847</p>
        </div>
        <div className="bg-[#1a1a2e] border border-orange-500/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">En attente</p>
          <p className="text-3xl font-bold text-orange-400">{pendingReviews.length}</p>
        </div>
      </div>

      <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Avis en attente de modération</h3>
        <div className="space-y-4">
          {pendingReviews.map((review) => (
            <div key={review.id} className="p-4 bg-white/5 rounded-xl">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-medium">{review.user}</p>
                  <p className="text-gray-400 text-sm">{review.place} • {review.date}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-[#d4a574] fill-current' : 'text-gray-600'}`} />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{review.comment}"</p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" /> Approuver
                </button>
                <button className="flex-1 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2">
                  <X className="w-4 h-4" /> Rejeter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Section Statistiques
 */
const AnalyticsSection = ({ stats }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Croissance mensuelle</p>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-green-400">+{stats.monthlyGrowth}%</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Visites/jour (moy.)</p>
            <Eye className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-white">1,530</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Taux de conversion</p>
            <Activity className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">24%</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Note moyenne</p>
            <Star className="w-5 h-5 text-[#d4a574]" />
          </div>
          <p className="text-3xl font-bold text-white">{stats.avgRating}</p>
        </div>
      </div>

      <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Évolution des visites</h3>
        <div className="h-64 flex items-end justify-between gap-1">
          {[...Array(30)].map((_, i) => {
            const height = 30 + Math.random() * 70;
            return (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-[#d4a574] to-[#d4a574]/30 rounded-t transition-all hover:from-[#c49464]"
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
        <p className="text-gray-500 text-sm text-center mt-4">30 derniers jours</p>
      </div>
    </div>
  );
};

/**
 * Section Paramètres
 */
const SettingsSection = () => {
  const [settings, setSettings] = useState({
    siteName: 'Muzea',
    maintenanceMode: false,
    allowRegistrations: true,
    requireEmailVerification: true,
    maxUploadSize: 5,
    defaultLanguage: 'fr'
  });

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Paramètres généraux</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Nom du site</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574]"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Langue par défaut</label>
            <select
              value={settings.defaultLanguage}
              onChange={(e) => setSettings({ ...settings, defaultLanguage: e.target.value })}
              className="w-full p-3 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white focus:outline-none focus:border-[#d4a574]"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a2e] border border-[#d4a574]/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Options</h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-white">Mode maintenance</p>
              <p className="text-gray-500 text-sm">Désactive l'accès public au site</p>
            </div>
            <div className={`w-12 h-6 rounded-full transition-colors ${settings.maintenanceMode ? 'bg-[#d4a574]' : 'bg-gray-600'}`}>
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform mt-0.5 ${settings.maintenanceMode ? 'translate-x-6 ml-0.5' : 'translate-x-0.5'}`}
                onClick={() => setSettings({ ...settings, maintenanceMode: !settings.maintenanceMode })}
              />
            </div>
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-white">Autoriser les inscriptions</p>
              <p className="text-gray-500 text-sm">Permet aux nouveaux utilisateurs de s'inscrire</p>
            </div>
            <div className={`w-12 h-6 rounded-full transition-colors ${settings.allowRegistrations ? 'bg-[#d4a574]' : 'bg-gray-600'}`}>
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform mt-0.5 ${settings.allowRegistrations ? 'translate-x-6 ml-0.5' : 'translate-x-0.5'}`}
                onClick={() => setSettings({ ...settings, allowRegistrations: !settings.allowRegistrations })}
              />
            </div>
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-white">Vérification email obligatoire</p>
              <p className="text-gray-500 text-sm">Les utilisateurs doivent vérifier leur email</p>
            </div>
            <div className={`w-12 h-6 rounded-full transition-colors ${settings.requireEmailVerification ? 'bg-[#d4a574]' : 'bg-gray-600'}`}>
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform mt-0.5 ${settings.requireEmailVerification ? 'translate-x-6 ml-0.5' : 'translate-x-0.5'}`}
                onClick={() => setSettings({ ...settings, requireEmailVerification: !settings.requireEmailVerification })}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-3 bg-[#d4a574] text-[#1a1a2e] rounded-xl font-medium hover:bg-[#c49464] transition-colors flex items-center gap-2">
          <Save className="w-5 h-5" /> Enregistrer les paramètres
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
