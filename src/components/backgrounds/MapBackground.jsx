/**
 * Background animé pour la page carte/exploration
 * Style: Lignes géographiques abstraites avec effet de boussole
 */
const MapBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-950 via-night-900 to-night-950" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-turquoise-500/5 rounded-full blur-3xl animate-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-3xl animate-scale-pulse" />
      </div>

      {/* Compass rose SVG */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] animate-gentle-rotate"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="85" fill="none" stroke="#d4af37" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="#d4af37" strokeWidth="0.2" />

        {/* Cardinal directions */}
        <path d="M100 5 L105 100 L100 15 L95 100 Z" fill="#d4af37" opacity="0.8" />
        <path d="M195 100 L100 105 L185 100 L100 95 Z" fill="#d4af37" opacity="0.4" />
        <path d="M100 195 L95 100 L100 185 L105 100 Z" fill="#d4af37" opacity="0.4" />
        <path d="M5 100 L100 95 L15 100 L100 105 Z" fill="#d4af37" opacity="0.4" />

        {/* Diagonal directions */}
        <path d="M32 32 L100 100 L40 40 Z" fill="#d4af37" opacity="0.3" />
        <path d="M168 32 L100 100 L160 40 Z" fill="#d4af37" opacity="0.3" />
        <path d="M168 168 L100 100 L160 160 Z" fill="#d4af37" opacity="0.3" />
        <path d="M32 168 L100 100 L40 160 Z" fill="#d4af37" opacity="0.3" />

        {/* Center circle */}
        <circle cx="100" cy="100" r="8" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="3" fill="#d4af37" opacity="0.5" />

        {/* Degree marks */}
        {[...Array(36)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="10"
            x2="100"
            y2={i % 3 === 0 ? "18" : "14"}
            stroke="#d4af37"
            strokeWidth={i % 3 === 0 ? "0.5" : "0.3"}
            transform={`rotate(${i * 10} 100 100)`}
            opacity={i % 3 === 0 ? 0.6 : 0.3}
          />
        ))}
      </svg>

      {/* Geographic grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#d4af37" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="fadeGrid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="30%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#fadeGrid)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
      </svg>

      {/* Latitude/Longitude curved lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Curved latitude lines */}
        <path d="M 0 20% Q 50% 15%, 100% 20%" fill="none" stroke="#d4af37" strokeWidth="1" />
        <path d="M 0 40% Q 50% 35%, 100% 40%" fill="none" stroke="#d4af37" strokeWidth="1" />
        <path d="M 0 60% Q 50% 65%, 100% 60%" fill="none" stroke="#d4af37" strokeWidth="1" />
        <path d="M 0 80% Q 50% 85%, 100% 80%" fill="none" stroke="#d4af37" strokeWidth="1" />

        {/* Curved longitude lines */}
        <path d="M 20% 0 Q 15% 50%, 20% 100%" fill="none" stroke="#d4af37" strokeWidth="1" />
        <path d="M 40% 0 Q 45% 50%, 40% 100%" fill="none" stroke="#d4af37" strokeWidth="1" />
        <path d="M 60% 0 Q 55% 50%, 60% 100%" fill="none" stroke="#d4af37" strokeWidth="1" />
        <path d="M 80% 0 Q 85% 50%, 80% 100%" fill="none" stroke="#d4af37" strokeWidth="1" />
      </svg>

      {/* Floating location markers */}
      <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-turquoise-400/20 animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[35%] right-[25%] w-2 h-2 rounded-full bg-gold-400/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[30%] left-[15%] w-2.5 h-2.5 rounded-full bg-purple-400/20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[20%] right-[30%] w-2 h-2 rounded-full bg-terracotta-400/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 rounded-full bg-gold-400/15 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Decorative route lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 10% 80% Q 30% 60%, 50% 65% T 90% 30%"
          fill="none"
          stroke="#d4af37"
          strokeWidth="2"
          strokeDasharray="10,5"
          className="animate-dash"
        />
        <path
          d="M 5% 20% Q 25% 40%, 45% 35% T 85% 70%"
          fill="none"
          stroke="#40e0d0"
          strokeWidth="1.5"
          strokeDasharray="8,4"
          className="animate-dash"
          style={{ animationDelay: '1s' }}
        />
      </svg>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default MapBackground;
