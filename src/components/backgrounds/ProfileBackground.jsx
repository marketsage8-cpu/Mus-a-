import { useEffect, useRef } from 'react';

/**
 * Background animé pour la page profil avec éléments culturels flottants
 * Style: Éléments dorés abstraits évoquant l'art et la culture
 */
const ProfileBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Créer des particules dorées
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        const pulseOpacity = this.opacity * (0.5 + 0.5 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${pulseOpacity})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${pulseOpacity * 0.3})`;
        ctx.fill();
      }
    }

    // Initialiser les particules
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Canvas pour les particules */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-950 via-night-900/95 to-night-950" />

      {/* Cercles décoratifs flottants */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-turquoise-400/5 rounded-full blur-3xl animate-drift" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/3 rounded-full blur-3xl animate-scale-pulse" />

      {/* Lignes décoratives */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Lignes horizontales */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-shimmer" />
        <line x1="0" y1="40%" x2="100%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-shimmer" style={{ animationDelay: '0.5s' }} />
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-shimmer" style={{ animationDelay: '1s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-shimmer" style={{ animationDelay: '1.5s' }} />

        {/* Cadres décoratifs stylisés */}
        <rect x="5%" y="15%" width="15%" height="20%" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.2" rx="4" />
        <rect x="80%" y="60%" width="12%" height="25%" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.15" rx="4" />
        <rect x="60%" y="10%" width="8%" height="12%" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.1" rx="4" />
      </svg>

      {/* Motif de points dorés */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default ProfileBackground;
