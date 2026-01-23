import { Navigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { Loader2 } from 'lucide-react';

/**
 * Composant de route protégée pour l'administration
 * Redirige vers la page de connexion si non authentifié
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAdmin();

  // Afficher un loader pendant la vérification
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0d1a] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#d4a574] animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Vérification de l'authentification...</p>
        </div>
      </div>
    );
  }

  // Rediriger vers la page de connexion si non authentifié
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  // Afficher le contenu protégé
  return children;
};

export default ProtectedRoute;
