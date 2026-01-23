import { useState, useEffect } from 'react';
import { places } from '../data/places';
import InteractiveMap from '../components/map/InteractiveMap';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Page d'exploration avec carte en plein écran
 * Affiche uniquement la carte interactive
 */
const ExplorePage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapHeight, setMapHeight] = useState('calc(100vh - 72px)');

  // Calculate map height based on viewport
  useEffect(() => {
    const updateHeight = () => {
      const navHeight = 72; // Approximate nav height
      setMapHeight(`calc(100vh - ${navHeight}px)`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="relative w-full" style={{ height: mapHeight }}>
      {/* Map - Full screen */}
      <InteractiveMap
        places={places}
        onPlaceClick={setSelectedPlace}
        height={mapHeight}
        autoLocate={true}
        showUserLocation={true}
        className="w-full h-full"
      />

      {/* Detail Modal */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default ExplorePage;
