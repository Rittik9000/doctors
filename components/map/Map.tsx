// components/Map.tsx
import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
// import RoomIcon from '@mui/icons-material/Room';
const MapComponent: FC = () => {
  const center: LatLngTuple = [22.575745137748182, 88.42706867421583]; 
  
  return (
    <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%', borderRadius:'13px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
       <Marker position={center} icon={L.divIcon({
        className: 'custom-icon',
        html: `<div style="background-color: red; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9C5 10.83 6.02 12.5 7.5 13.6C7.68 13.74 7.91 13.85 8.15 13.97C8.64 14.2 9.18 14.35 9.75 14.46C10.35 14.58 10.98 14.6 11.65 14.54C12.68 14.46 13.68 14.25 14.64 13.93C15.39 13.71 16.03 13.32 16.5 12.8C17.28 12.03 18 10.93 18 9C18 5.13 14.87 2 12 2ZM12 15.5C9.79 15.5 8 13.71 8 11.5C8 9.29 9.79 7.5 12 7.5C14.21 7.5 16 9.29 16 11.5C16 13.71 14.21 15.5 12 15.5ZM12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11C14 9.9 13.1 9 12 9Z" fill="white"/></svg></div>`,
        iconSize: [24, 24]
      })}>
        <Popup>
          Our hospital here
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
