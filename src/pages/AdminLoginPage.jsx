import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, User, AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

/**
 * Page de connexion administrateur
 */
const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAdmin();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Rediriger si déjà connecté
  if (isAuthenticated) {
    navigate('/admin/dashboard');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(username, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Identifiants incorrects');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d1a] via-[#1a1a2e] to-[#0f0f1a] flex items-center justify-center p-4">
      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              backgroundColor: '#d4a574',
              opacity: 0.1 + Math.random() * 0.2,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo et titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4a574] to-[#c49464] shadow-lg shadow-[#d4a574]/20 mb-4">
            <Shield className="w-10 h-10 text-[#1a1a2e]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Administration</h1>
          <p className="text-gray-400">Connectez-vous pour accéder au panneau d'administration Muzea</p>
        </div>

        {/* Formulaire */}
        <div className="bg-[#1a1a2e]/80 backdrop-blur-xl border border-[#d4a574]/20 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Message d'erreur */}
            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Champ utilisateur */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Nom d'utilisateur
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full py-4 px-12 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 transition-all"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Champ mot de passe */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full py-4 px-12 bg-[#0a0d1a] border border-[#d4a574]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20 transition-all"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              disabled={isLoading || !username || !password}
              className="w-full py-4 bg-gradient-to-r from-[#d4a574] to-[#c49464] hover:from-[#c49464] hover:to-[#b48454] text-[#1a1a2e] font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Connexion en cours...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Se connecter
                </>
              )}
            </button>
          </form>

          {/* Info de démo */}
          <div className="mt-6 p-4 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-xl">
            <p className="text-[#d4a574] text-sm text-center">
              <strong>Identifiants de démonstration :</strong><br />
              Utilisateur : <code className="bg-[#0a0d1a] px-2 py-0.5 rounded">admin</code><br />
              Mot de passe : <code className="bg-[#0a0d1a] px-2 py-0.5 rounded">muzea2024</code>
            </p>
          </div>
        </div>

        {/* Lien retour */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-[#d4a574] transition-colors text-sm"
          >
            &larr; Retour au site
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
