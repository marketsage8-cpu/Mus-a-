import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet';
import L from 'leaflet';
import { getTypeBadgeColor } from '../../data/places';

// Correction des icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

/**
 * Crée une icône personnalisée selon le type de lieu
 */
const createCustomIcon = (type) => {
  const colors = {
    'musée': '#3b82f6',
    'château': '#d97706',
    'monument': '#059669',
    'exposition': '#8b5cf6'
  };

  const color = colors[type] || '#a8a29e';

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 32px;
        height: 32px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

/**
 * Icône pour la position de l'utilisateur
 */
const createUserLocationIcon = () => {
  return L.divIcon({
    className: 'user-location-marker',
    html: `
      <div style="
        width: 20px;
        height: 20px;
        background: #3b82f6;
        border: 4px solid white;
        border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3), 0 2px 8px rgba(0,0,0,0.3);
        animation: pulse 2s infinite;
      "></div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

/**
 * Composant de contrôle de géolocalisation
 */
const LocationControl = ({ onLocationFound, onLocationError }) => {
  const map = useMap();
  const [isLocating, setIsLocating] = useState(false);

  const handleLocateClick = () => {
    setIsLocating(true);

    if (!navigator.geolocation) {
      onLocationError?.('La géolocalisation n\'est pas supportée par votre navigateur');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const userLocation = { lat: latitude, lng: longitude, accuracy };
        onLocationFound?.(userLocation);
        map.flyTo([latitude, longitude], 13, { duration: 1.5 });
        setIsLocating(false);
      },
      (error) => {
        let message = 'Impossible d\'obtenir votre position';
        if (error.code === 1) message = 'Accès à la position refusé';
        if (error.code === 2) message = 'Position indisponible';
        if (error.code === 3) message = 'Délai d\'attente dépassé';
        onLocationError?.(message);
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  return (
    <div className="leaflet-top leaflet-right" style={{ marginTop: '10px', marginRight: '10px' }}>
      <div className="leaflet-control">
        <button
          onClick={handleLocateClick}
          disabled={isLocating}
          className="bg-stone-800 hover:bg-stone-700 text-white p-2 rounded-lg shadow-lg border border-stone-600 transition-all disabled:opacity-50"
          title="Ma position"
        >
          {isLocating ? (
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 6a4 4 0 110 8 4 4 0 010-8z" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

/**
 * Composant pour centrer la carte sur les marqueurs
 */
const FitBounds = ({ places }) => {
  const map = useMap();

  useEffect(() => {
    if (places.length > 0) {
      const bounds = L.latLngBounds(
        places.map(p => [p.coordinates.lat, p.coordinates.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [places, map]);

  return null;
};

/**
 * Carte interactive Leaflet avec markers cliquables
 */
const InteractiveMap = ({
  places,
  onPlaceClick,
  className = '',
  height = '256px',
  center = [46.603354, 1.888334], // Centre de la France
  zoom = 5,
  showUserLocation = true
}) => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const handleLocationFound = (location) => {
    setUserLocation(location);
    setLocationError(null);
  };

  const handleLocationError = (error) => {
    setLocationError(error);
    setTimeout(() => setLocationError(null), 3000);
  };

  return (
    <div className={`rounded-xl overflow-hidden border border-stone-700/30 relative ${className}`}>
      {/* Message d'erreur */}
      {locationError && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[1000] bg-red-900/90 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
          {locationError}
        </div>
      )}

      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height, width: '100%' }}
        className="z-0"
      >
        {/* Tuiles style sombre */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Contrôle de géolocalisation */}
        {showUserLocation && (
          <LocationControl
            onLocationFound={handleLocationFound}
            onLocationError={handleLocationError}
          />
        )}

        {/* Marqueur position utilisateur */}
        {userLocation && (
          <>
            <Circle
              center={[userLocation.lat, userLocation.lng]}
              radius={userLocation.accuracy}
              pathOptions={{
                color: '#3b82f6',
                fillColor: '#3b82f6',
                fillOpacity: 0.1,
                weight: 1
              }}
            />
            <Marker
              position={[userLocation.lat, userLocation.lng]}
              icon={createUserLocationIcon()}
            >
              <Popup>
                <div className="p-1 text-center">
                  <p className="font-semibold text-stone-900">Vous êtes ici</p>
                  <p className="text-xs text-stone-500">Précision: ~{Math.round(userLocation.accuracy)}m</p>
                </div>
              </Popup>
            </Marker>
          </>
        )}

        {/* Ajuste les bounds aux marqueurs */}
        {places.length > 0 && <FitBounds places={places} />}

        {/* Marqueurs */}
        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.coordinates.lat, place.coordinates.lng]}
            icon={createCustomIcon(place.type)}
            eventHandlers={{
              click: () => onPlaceClick?.(place)
            }}
          >
            <Popup className="custom-popup">
              <div className="p-1">
                <h4 className="font-semibold text-stone-900 mb-1">{place.name}</h4>
                <p className="text-xs text-stone-600">{place.location}</p>
                <p className="text-xs text-amber-600 font-medium mt-1">{place.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
