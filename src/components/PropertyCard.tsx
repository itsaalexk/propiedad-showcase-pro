import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { BedDouble, Bath, Maximize, MapPin, Calendar } from "lucide-react";

interface Props {
  property: Property;
  theme: string;
}

const STATUS_LABEL: Record<Property["status"], { label: string; className: string }> = {
  disponible: { label: "Disponible", className: "bg-available text-white" },
  proximamente: { label: "Próximamente", className: "bg-soon text-white" },
  reservada: { label: "Reservada", className: "bg-muted text-muted-foreground" },
};

export const PropertyCard = ({ property, theme }: Props) => {
  const status = STATUS_LABEL[property.status];

  return (
    <Link
      to={`/${theme}/vivienda/${property.slug}`}
      className="group block bg-card border border-border rounded-lg overflow-hidden hover-lift"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-smooth group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded uppercase tracking-wider ${status.className}`}>
            {status.label}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-background/90 backdrop-blur text-foreground">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-foreground/80 text-background">
            Ref. {property.ref}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-smooth line-clamp-1">
          {property.title}
        </h3>
        <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1.5 line-clamp-1">
          <MapPin className="h-3.5 w-3.5 shrink-0" /> {property.location}
        </p>

        {property.status === "proximamente" && property.availableFrom && (
          <p className="flex items-center gap-1.5 text-xs text-soon font-medium mt-3">
            <Calendar className="h-3.5 w-3.5" /> Disponible desde {property.availableFrom}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-foreground/70 mt-4 pt-4 border-t border-border">
          <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-primary/70" /> {property.beds} hab.</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-primary/70" /> {property.baths} baños</span>
          <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-primary/70" /> {property.sqft} m²</span>
        </div>
      </div>
    </Link>
  );
};
