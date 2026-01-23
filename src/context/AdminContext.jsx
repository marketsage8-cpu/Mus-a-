import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext(null);

const ADMIN_STORAGE_KEY = 'muzea-admin-auth';

/**
 * Identifiants admin par défaut (à remplacer par une vraie authentification en production)
 */
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'muzea2024'
};

/**
 * Provider pour l'authentification administrateur
 */
export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminUser, setAdminUser] = useState(null);

  // Vérifier l'authentification au chargement
  useEffect(() => {
    try {
      const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
      if (stored) {
        const { token, user, expiry } = JSON.parse(stored);
        // Vérifier si le token n'a pas expiré (24h)
        if (token && expiry && new Date().getTime() < expiry) {
          setIsAuthenticated(true);
          setAdminUser(user);
        } else {
          // Token expiré, nettoyer
          localStorage.removeItem(ADMIN_STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error('Erreur chargement auth admin:', error);
      localStorage.removeItem(ADMIN_STORAGE_KEY);
    }
    setIsLoading(false);
  }, []);

  /**
   * Connexion admin
   */
  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      // Simuler un délai réseau
      setTimeout(() => {
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
          const user = {
            id: 'admin-1',
            username: username,
            role: 'super_admin',
            name: 'Administrateur Muzea',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
          };

          const authData = {
            token: `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            user,
            expiry: new Date().getTime() + (24 * 60 * 60 * 1000) // 24 heures
          };

          localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(authData));
          setIsAuthenticated(true);
          setAdminUser(user);
          resolve({ success: true, user });
        } else {
          reject({ success: false, message: 'Identifiants incorrects' });
        }
      }, 500);
    });
  };

  /**
   * Déconnexion admin
   */
  const logout = () => {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    setIsAuthenticated(false);
    setAdminUser(null);
  };

  /**
   * Vérifier les permissions
   */
  const hasPermission = (permission) => {
    if (!isAuthenticated || !adminUser) return false;
    // Le super_admin a toutes les permissions
    if (adminUser.role === 'super_admin') return true;
    // Sinon vérifier les permissions spécifiques
    return adminUser.permissions?.includes(permission);
  };

  const value = {
    isAuthenticated,
    isLoading,
    adminUser,
    login,
    logout,
    hasPermission
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

/**
 * Hook pour accéder au contexte admin
 */
export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export default AdminContext;
