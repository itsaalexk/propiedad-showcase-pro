import { Link } from "react-router-dom";
import { Property } from "@/data/properties";
import { BedDouble, Bath, Maximize, MapPin } from "lucide-react";

interface Props {
  property: Property;
  template: 1 | 2 | 3;
  variant?: "light" | "dark";
}

export const PropertyCard = ({ property, template, variant = "light" }: Props) => {
  const isDark = variant === "dark";
  return (
    <Link
      to={`/template/${template}/property/${property.slug}`}
      className={`group block overflow-hidden rounded-2xl hover-lift ${
        isDark ? "bg-card/5 border border-white/10" : "bg-card border border-border"
      }`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
            {property.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`font-display text-xl mb-2 ${isDark ? "text-white" : "text-foreground"}`}>
          {property.title}
        </h3>
        <p className={`flex items-center gap-1 text-sm mb-4 ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
          <MapPin className="h-3.5 w-3.5" /> {property.location}
        </p>
        <div className={`flex items-center gap-4 text-sm pt-4 border-t ${isDark ? "border-white/10 text-white/70" : "border-border text-muted-foreground"}`}>
          <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4" /> {property.beds}</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> {property.baths}</span>
          <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4" /> {property.sqft}m²</span>
        </div>
      </div>
    </Link>
  );
};
