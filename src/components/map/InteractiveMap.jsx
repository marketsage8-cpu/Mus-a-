import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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
  zoom = 5
}) => {
  return (
    <div className={`rounded-xl overflow-hidden border border-stone-700/30 ${className}`}>
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
