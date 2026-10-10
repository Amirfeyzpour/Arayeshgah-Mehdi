import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [35.762621, 51.320257];

  return (
    <MapContainer
      center={position}
      zoom={16}
      className="w-full h-full mx-auto mb-5 rounded-2xl z-0 border border-gray-950"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>آرایشگاه مهدی</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
