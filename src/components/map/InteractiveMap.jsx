import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle, useMapEvents } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import { getTypeBadgeColor } from '../../data/places';
import { fetchWikipediaImage } from '../../services/liveDataService';

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
    'église': '#f43f5e',
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
 * Icône pour la position de l'utilisateur - Plus visible
 */
const createUserLocationIcon = () => {
  return L.divIcon({
    className: 'user-location-marker',
    html: `
      <div style="
        position: relative;
        width: 24px;
        height: 24px;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
        "></div>
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border: 4px solid white;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4), 0 4px 12px rgba(0,0,0,0.4);
        "></div>
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

/**
 * Composant pour géolocalisation automatique au chargement
 */
const AutoLocate = ({ onLocationFound, onLocationError, autoLocate = false }) => {
  const map = useMap();
  const [hasLocated, setHasLocated] = useState(false);

  useEffect(() => {
    if (!autoLocate || hasLocated) return;

    if (!navigator.geolocation) {
      onLocationError?.('La géolocalisation n\'est pas supportée par votre navigateur');
      return;
    }

    // Demander automatiquement la position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const userLocation = { lat: latitude, lng: longitude, accuracy };
        onLocationFound?.(userLocation);
        map.flyTo([latitude, longitude], 13, { duration: 1.5 });
        setHasLocated(true);
      },
      (error) => {
        let message = 'Impossible d\'obtenir votre position';
        if (error.code === 1) message = 'Accès à la position refusé';
        if (error.code === 2) message = 'Position indisponible';
        if (error.code === 3) message = 'Délai d\'attente dépassé';
        onLocationError?.(message);
        setHasLocated(true);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }, [autoLocate, hasLocated, map, onLocationFound, onLocationError]);

  return null;
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
          className="bg-stone-800 hover:bg-stone-700 text-white p-2.5 rounded-lg shadow-lg border border-stone-600 transition-all disabled:opacity-50"
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
 * Composant pour centrer la carte sur les marqueurs (une seule fois)
 */
const FitBounds = ({ places }) => {
  const map = useMap();
  const hasFitted = useRef(false);

  useEffect(() => {
    if (places.length > 0 && !hasFitted.current) {
      hasFitted.current = true;
      const bounds = L.latLngBounds(
        places.slice(0, 500).map(p => [p.coordinates.lat, p.coordinates.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [places, map]);

  return null;
};

/**
 * Composant qui surveille les changements de vue et déclenche le chargement
 * Mode "live": charge les données à la demande selon la zone visible
 */
const BoundsWatcher = ({ onBoundsChange, debounceMs = 500 }) => {
  const map = useMap();
  const debounceTimer = useRef(null);
  const lastBounds = useRef(null);

  const handleBoundsChange = useCallback(() => {
    // Debounce pour éviter trop d'appels
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      const bounds = map.getBounds();
      const newBounds = {
        latMin: bounds.getSouth(),
        latMax: bounds.getNorth(),
        lonMin: bounds.getWest(),
        lonMax: bounds.getEast()
      };

      // Ne déclencher que si les bounds ont vraiment changé
      const lastStr = lastBounds.current ? JSON.stringify(lastBounds.current) : '';
      const newStr = JSON.stringify(newBounds);

      if (lastStr !== newStr) {
        lastBounds.current = newBounds;
        onBoundsChange?.(newBounds);
      }
    }, debounceMs);
  }, [map, onBoundsChange, debounceMs]);

  // Écouter les événements de la carte
  useMapEvents({
    moveend: handleBoundsChange,
    zoomend: handleBoundsChange,
    load: handleBoundsChange
  });

  // Charger au montage initial
  useEffect(() => {
    // Petit délai pour que la carte soit prête
    const timer = setTimeout(handleBoundsChange, 100);
    return () => {
      clearTimeout(timer);
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [handleBoundsChange]);

  return null;
};

/**
 * Indicateur de chargement sur la carte
 */
const LoadingIndicator = ({ loading, count }) => {
  if (!loading && count === 0) return null;

  return (
    <div className="absolute top-2 left-2 z-[1000] flex items-center gap-2 bg-night-800/90 text-sand-100 px-3 py-1.5 rounded-lg text-xs shadow-lg backdrop-blur-sm border border-gold-400/30">
      {loading ? (
        <>
          <svg className="w-4 h-4 animate-spin text-gold-400" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Chargement...</span>
        </>
      ) : (
        <>
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          <span>{count} lieux</span>
        </>
      )}
    </div>
  );
};

/**
 * Carte interactive Leaflet avec markers cliquables
 *
 * @param {Array} places - Liste des lieux à afficher (mode statique)
 * @param {Function} onPlaceClick - Callback au clic sur un marqueur
 * @param {Function} onBoundsChange - Callback quand la zone visible change (mode live)
 * @param {boolean} liveMode - Active le chargement dynamique à la demande
 * @param {boolean} loading - Indicateur de chargement (mode live)
 * @param {Function} onLoadImage - Callback pour charger une image (lazy loading)
 */
const InteractiveMap = ({
  places,
  onPlaceClick,
  onBoundsChange,
  liveMode = false,
  loading = false,
  onLoadImage,
  className = '',
  height = '256px',
  center = [46.603354, 1.888334], // Centre de la France
  zoom = 5,
  showUserLocation = true,
  autoLocate = false // Nouvelle prop pour géolocalisation automatique
}) => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [hoveredPlace, setHoveredPlace] = useState(null);

  const handleLocationFound = (location) => {
    setUserLocation(location);
    setLocationError(null);
  };

  const handleLocationError = (error) => {
    setLocationError(error);
    setTimeout(() => setLocationError(null), 3000);
  };

  return (
    <div className={`relative ${className}`} style={{ height }}>
      {/* Message d'erreur */}
      {locationError && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[1000] bg-red-900/90 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
          {locationError}
        </div>
      )}

      {/* Indicateur de chargement (mode live) */}
      {liveMode && <LoadingIndicator loading={loading} count={places.length} />}

      {/* Indicateur de position active */}
      {userLocation && (
        <div className="absolute bottom-20 left-2 z-[1000] flex items-center gap-2 bg-blue-600/90 text-white px-3 py-1.5 rounded-lg text-xs shadow-lg backdrop-blur-sm">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Position active
        </div>
      )}

      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        {/* Tuiles style sombre */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Géolocalisation automatique */}
        {showUserLocation && autoLocate && (
          <AutoLocate
            onLocationFound={handleLocationFound}
            onLocationError={handleLocationError}
            autoLocate={autoLocate}
          />
        )}

        {/* Contrôle de géolocalisation manuel */}
        {showUserLocation && (
          <LocationControl
            onLocationFound={handleLocationFound}
            onLocationError={handleLocationError}
          />
        )}

        {/* Surveillance des bounds pour chargement dynamique (mode live) */}
        {liveMode && onBoundsChange && (
          <BoundsWatcher onBoundsChange={onBoundsChange} debounceMs={500} />
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

        {/* Marqueurs avec clustering pour performance */}
        <MarkerClusterGroup
          key={places.length}
          chunkedLoading
          maxClusterRadius={60}
          spiderfyOnMaxZoom
          showCoverageOnHover={false}
          iconCreateFunction={(cluster) => {
            const count = cluster.getChildCount();
            let size = 'small';
            let dim = 36;
            if (count >= 100) { size = 'large'; dim = 50; }
            else if (count >= 10) { size = 'medium'; dim = 42; }

            return L.divIcon({
              html: `<div style="
                width: ${dim}px;
                height: ${dim}px;
                background: linear-gradient(135deg, #d4a437, #b8860b);
                border: 3px solid rgba(255,255,255,0.8);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: ${count >= 1000 ? '11' : '13'}px;
                box-shadow: 0 3px 12px rgba(0,0,0,0.4);
              ">${count >= 1000 ? Math.round(count / 1000) + 'k' : count}</div>`,
              className: `marker-cluster marker-cluster-${size}`,
              iconSize: L.point(dim, dim),
            });
          }}
        >
          {places.map((place) => (
            <Marker
              key={place.id}
              position={[place.coordinates.lat, place.coordinates.lng]}
              icon={createCustomIcon(place.type)}
              eventHandlers={{
                click: () => onPlaceClick?.(place),
                // Lazy loading de l'image au survol
                mouseover: async () => {
                  if (!place.image && onLoadImage) {
                    const image = await onLoadImage(place.id);
                    // L'image sera mise à jour via le state parent
                  }
                }
              }}
            >
              <Popup className="custom-popup" maxWidth={320}>
                <div className="p-2 max-w-[280px]">
                  {/* Nom du musée */}
                  <h4 className="font-semibold text-sand-100 mb-1 text-sm leading-tight">{place.name}</h4>

                  {/* Ville / Commune */}
                  <p className="text-xs text-stone-300 mb-1">
                    {place.city || place.location}
                    {place.postcode && ` (${place.postcode})`}
                  </p>

                  {/* Adresse complète si disponible */}
                  {place.address && (
                    <p className="text-xs text-stone-400 mb-1">{place.address}</p>
                  )}

                  {/* Thèmes / Spécialité */}
                  {place.themes && (
                    <p className="text-xs text-gold-400 mb-1 italic">{place.themes}</p>
                  )}

                  {/* Prix */}
                  <p className="text-xs text-gold-500 font-medium mt-1">{place.price}</p>

                  {/* Lien vers le site web */}
                  {place.url && (
                    <a
                      href={place.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-blue-400 hover:text-blue-300 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visiter le site web
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
