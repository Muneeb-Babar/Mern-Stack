
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import mapMarker from '../../assets/map.png'

// function MapComponent  (props) {
//       // Destructure latitude and longitude from props.address
// const { latitude, longitude } = props.address;
//   // Log the received latitude and longitude to ensure they are correct
// console.log(latitude, longitude);

//   // Create position array from received latitude and longitude
// const position = [latitude, longitude];

//   // Define marker data
// const markers = [
//     { id: 1, position: position, popupContent: 'Marker Popup Content' },
// ];

//   // Create custom icon
// const customIcon = new L.Icon({
//     iconUrl: mapMarker,
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32],
// });

// return (
//     <div className='map-container'>
//     <MapContainer className='map' center={position} zoom={15}>
//         {/* Tile layer */}
//         <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {/* Markers with Popup */}
//         {markers.map((marker) => (
//         <Marker key={marker.id} position={marker.position} icon={customIcon}>
//             <Popup>{marker.popupContent}</Popup>
//         </Marker>
//         ))}
//     </MapContainer>
//     </div>
// );
// };

// export default MapComponent;
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([address.latitude, address.longitude], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(mapRef.current);

      L.marker([address.latitude, address.longitude]).addTo(mapRef.current)
        .bindPopup('Your location')
        .openPopup();
    } else {
      mapRef.current.setView([address.latitude, address.longitude]);
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          layer.setLatLng([address.latitude, address.longitude]);
        }
      });
    }
  }, [address.latitude, address.longitude]);

  return <div id="map" style={{ height: '400px' }} />;
};

export default MapComponent;