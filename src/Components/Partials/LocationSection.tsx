import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function LocationSection() {
  const position = [-6.5691, 107.7588];

  return (
    <div className="container mx-auto px-1 mt-3">
      <h2 id="location" className="text-center text-indigo-100 text-4xl font-bold">
        Lokasi
      </h2>
      <div className="mt-2">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Inertia Cell</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
