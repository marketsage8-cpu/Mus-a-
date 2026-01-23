/**
 * CabinetBackground - Arrière-plan décoratif "Cabinet de curiosités"
 *
 * Effet de révélation progressive de l'image PNG
 * L'image se dessine de gauche à droite au chargement
 */

const CabinetBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Fond de base sombre */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#0a0d1a',
        }}
      />

      {/* Image PNG avec effet de révélation progressive */}
      <div
        className="absolute inset-0 reveal-mask"
        style={{
          backgroundImage: 'url(/museum-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Vignette gradient pour profondeur atmosphérique */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 50% 50%, transparent 0%, rgba(10, 13, 26, 0.35) 100%),
            linear-gradient(to bottom, rgba(10, 13, 26, 0.15) 0%, transparent 20%, transparent 80%, rgba(10, 13, 26, 0.25) 100%)
          `,
        }}
      />
    </div>
  );
};

export default CabinetBackground;
