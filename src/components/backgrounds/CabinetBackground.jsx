/**
 * CabinetBackground - Arrière-plan décoratif "Cabinet de curiosités"
 *
 * Utilise l'image PNG avec gravures dorées style musée
 */

const CabinetBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Image de fond avec gravures dorées */}
      <div
        className="absolute inset-0"
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
