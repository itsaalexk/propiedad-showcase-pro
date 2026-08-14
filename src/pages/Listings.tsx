import { useState } from "react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteLayout, useTheme } from "@/components/Site";
import { PropertyMap } from "@/components/PropertyMap";
import heroVilla from "@/assets/hero-villa.jpg";

const CATEGORIES = [
  { value: "all", label: "Todas" },
  { value: "participaciones", label: "Participaciones" },
  { value: "alquiler", label: "Alquiler" },
  { value: "flipping", label: "Flipping" },
  { value: "otros", label: "Otros proyectos" },
] as const;

const Listings = () => {
  const theme = useTheme();
  const [category, setCategory] = useState<string>("all");

  const filtered = properties.filter((p) => category === "all" || p.category === category);

  return (
    <SiteLayout>
      {/* HERO COMPACTO + filtro por modalidad */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={heroVilla} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        <div className="relative container mx-auto py-16 md:py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Inmobiliaria inmoinversión</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 max-w-3xl text-balance">
            Inversiones seleccionadas, propietarios atendidos.
          </h1>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl">
            Gestionamos en exclusiva oportunidades de inversión en toda España. Encuentra tu próxima inversión y contacta directamente con nuestro equipo.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`rounded-pill px-6 py-3 text-sm font-bold uppercase tracking-wider border transition-smooth ${
                  category === c.value
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="container mx-auto py-12">
        <div className="mb-6">
          <h2 className="font-display text-2xl">
            {filtered.length} inversión{filtered.length !== 1 && "es"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Selección actualizada por el equipo de inmoinversión</p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 bg-surface rounded-lg">
            <p className="text-muted-foreground">No hay inversiones en esta modalidad por el momento.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} theme={theme} />
            ))}
          </div>
        )}
      </section>

      {/* MAPA de propiedades (OpenStreetMap) */}
      <section className="container mx-auto pb-16">
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Ubicaciones</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2">Encuentra las inversiones en el mapa</h2>
          <p className="text-sm text-muted-foreground mt-1">Haz clic en un marcador para ver la propiedad y acceder a sus detalles.</p>
        </div>
        <PropertyMap properties={filtered} theme={theme} />
      </section>
    </SiteLayout>
  );
};

export default Listings;
