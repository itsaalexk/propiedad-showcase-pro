import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Property } from "@/data/properties";

const icon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Props {
  properties: Property[];
  theme: string;
}

export const PropertyMap = ({ properties, theme }: Props) => {
  const withCoords = properties.filter((p) => p.coords);
  const center: [number, number] = withCoords.length
    ? [
        withCoords.reduce((s, p) => s + p.coords[0], 0) / withCoords.length,
        withCoords.reduce((s, p) => s + p.coords[1], 0) / withCoords.length,
      ]
    : [40.4168, -3.7038];

  return (
    <div className="rounded-card overflow-hidden border border-border shadow-card" style={{ height: 480 }}>
      <MapContainer center={center} zoom={6} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {withCoords.map((p) => (
          <Marker key={p.id} position={p.coords} icon={icon}>
            <Popup>
              <div className="w-52">
                <img src={p.image} alt={p.title} className="w-full h-24 object-cover rounded-md" />
                <div className="mt-2 font-semibold text-sm text-foreground">{p.title}</div>
                <div className="text-xs text-muted-foreground">{p.city} · {p.type}</div>
                <Link
                  to={`/${theme}/inversion/${p.slug}`}
                  className="mt-2 inline-flex items-center justify-center w-full rounded-pill bg-accent text-accent-foreground px-3 py-1.5 text-xs font-semibold"
                >
                  Ver más
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
