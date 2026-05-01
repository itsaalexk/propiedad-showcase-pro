import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { BedDouble, Bath, Maximize, MapPin, Calendar, ArrowUpRight, Zap } from "lucide-react";

interface Props {
  property: Property;
  theme: string;
  variant?: "default" | "compact" | "wide";
}

const STATUS_LABEL: Record<Property["status"], { label: string; className: string }> = {
  disponible: { label: "Disponible", className: "bg-available text-white" },
  proximamente: { label: "Próximamente", className: "bg-soon text-white" },
  reservada: { label: "Reservada", className: "bg-muted text-muted-foreground" },
};

export const PropertyCard = ({ property, theme }: Props) => {
  const status = STATUS_LABEL[property.status];

  // ============== TEMA 2 — EDITORIAL (cards rectas, ficha-revista) ==============
  if (theme === "t2") {
    return (
      <Link
        to={`/${theme}/vivienda/${property.slug}`}
        className="group block bg-card border border-border overflow-hidden hover:shadow-card transition-smooth"
      >
        <div className="relative overflow-hidden aspect-[4/3] bg-muted">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-spring group-hover:scale-[1.06]"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className={`text-[10px] font-semibold px-2.5 py-1 uppercase tracking-[0.15em] ${status.className}`}>
              {status.label}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-foreground/80 to-transparent">
            <span className="text-[10px] font-mono text-background/90 uppercase tracking-wider">
              Ref. {property.ref} · {property.type}
            </span>
          </div>
        </div>
        <div className="p-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent deco-rule">{property.city}</span>
          <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-smooth mt-2 leading-tight">
            {property.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 italic">{property.location}</p>
          <div className="flex items-center gap-5 text-sm text-foreground/70 mt-5 pt-4 border-t border-border">
            <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4" /> {property.beds}</span>
            <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> {property.baths}</span>
            <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4" /> {property.sqft} m²</span>
            <span className="ml-auto text-xs font-semibold text-primary">Leer más →</span>
          </div>
        </div>
      </Link>
    );
  }

  // ============== TEMA 3 — PREMIUM (cards muy redondeadas, glow, foto grande) ==============
  if (theme === "t3") {
    return (
      <Link
        to={`/${theme}/vivienda/${property.slug}`}
        className="group block bg-card rounded-card overflow-hidden shadow-card hover:shadow-glow transition-spring relative"
      >
        <div className="relative overflow-hidden aspect-[4/5] bg-muted">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-spring group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={`text-[10px] font-semibold px-3 py-1.5 rounded-pill uppercase tracking-wider ${status.className}`}>
              {status.label}
            </span>
            <span className="text-[10px] font-semibold px-3 py-1.5 rounded-pill uppercase tracking-wider bg-accent/90 text-accent-foreground">
              {property.type}
            </span>
          </div>

          <div className="absolute top-4 right-4 h-10 w-10 rounded-pill bg-background/20 backdrop-blur-md flex items-center justify-center border border-background/30 group-hover:bg-accent group-hover:border-accent transition-smooth">
            <ArrowUpRight className="h-5 w-5 text-background group-hover:text-accent-foreground transition-smooth" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">
              Ref. {property.ref} · {property.city}
            </span>
            <h3 className="font-display text-2xl mt-2 leading-tight uppercase">
              {property.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/80 mt-4 pt-4 border-t border-primary-foreground/20">
              <span className="flex items-center gap-1.5"><BedDouble className="h-3.5 w-3.5 text-accent" /> {property.beds} hab</span>
              <span className="flex items-center gap-1.5"><Bath className="h-3.5 w-3.5 text-accent" /> {property.baths}</span>
              <span className="flex items-center gap-1.5"><Maximize className="h-3.5 w-3.5 text-accent" /> {property.sqft}m²</span>
              <span className="ml-auto flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-accent" /> {property.energyRating}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // ============== TEMA 1 — ESENCIAL MODERNO (default, redondeado generoso) ==============
  return (
    <Link
      to={`/${theme}/vivienda/${property.slug}`}
      className="group block bg-card border border-border rounded-card overflow-hidden hover-lift"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-spring group-hover:scale-[1.05]"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`text-[11px] font-semibold px-3 py-1 rounded-pill uppercase tracking-wider ${status.className}`}>
            {status.label}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="text-[11px] font-semibold px-3 py-1 rounded-pill bg-background/90 backdrop-blur text-foreground">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-pill bg-foreground/80 text-background">
            Ref. {property.ref}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-smooth line-clamp-1">
          {property.title}
        </h3>
        <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1.5 line-clamp-1">
          <MapPin className="h-3.5 w-3.5 shrink-0" /> {property.location}
        </p>

        {property.status === "proximamente" && property.availableFrom && (
          <p className="flex items-center gap-1.5 text-xs text-soon font-semibold mt-3">
            <Calendar className="h-3.5 w-3.5" /> Disponible desde {property.availableFrom}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-foreground/70 mt-5 pt-5 border-t border-border">
          <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-primary/70" /> {property.beds}</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-primary/70" /> {property.baths}</span>
          <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-primary/70" /> {property.sqft} m²</span>
        </div>
      </div>
    </Link>
  );
};
