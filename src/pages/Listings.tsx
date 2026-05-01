import { useMemo, useState } from "react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteLayout, useTheme } from "@/components/Site";
import { Search, MapPin, Home, BedDouble, X, SlidersHorizontal } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";

const Listings = () => {
  const theme = useTheme();
  const [q, setQ] = useState("");
  const [city, setCity] = useState("all");
  const [type, setType] = useState("all");
  const [beds, setBeds] = useState("all");
  const [status, setStatus] = useState("all");
  const [furnished, setFurnished] = useState("all");
  const [minSqft, setMinSqft] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(true);

  const cities = useMemo(() => Array.from(new Set(properties.map((p) => p.city))).sort(), []);
  const types = useMemo(() => Array.from(new Set(properties.map((p) => p.type))).sort(), []);

  const filtered = properties.filter((p) => {
    if (q && !`${p.title} ${p.location} ${p.ref}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (city !== "all" && p.city !== city) return false;
    if (type !== "all" && p.type !== type) return false;
    if (beds !== "all" && p.beds < Number(beds)) return false;
    if (status !== "all" && p.status !== status) return false;
    if (furnished !== "all" && String(p.furnished) !== furnished) return false;
    if (minSqft && p.sqft < Number(minSqft)) return false;
    return true;
  });

  const reset = () => {
    setQ(""); setCity("all"); setType("all"); setBeds("all");
    setStatus("all"); setFurnished("all"); setMinSqft("");
  };

  const activeCount = [
    q, city !== "all", type !== "all", beds !== "all",
    status !== "all", furnished !== "all", minSqft
  ].filter(Boolean).length;

  return (
    <SiteLayout>
      {/* HERO COMPACTO + buscador rápido */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={heroVilla} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        <div className="relative container mx-auto py-16 md:py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Inmobiliaria Walsadua</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 max-w-3xl text-balance">
            Viviendas seleccionadas, propietarios atendidos.
          </h1>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl">
            Gestionamos en exclusiva propiedades de particulares en toda España. Encuentra tu próxima vivienda y contacta directamente con nuestro equipo.
          </p>

          <div className="mt-8 bg-background rounded-lg p-2 shadow-elegant flex flex-col md:flex-row gap-2 max-w-4xl">
            <div className="flex-1 flex items-center gap-2 px-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <select value={city} onChange={(e) => setCity(e.target.value)} className="flex-1 bg-transparent outline-none text-foreground text-sm py-3">
                <option value="all">Todas las ubicaciones</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="hidden md:block w-px bg-border" />
            <div className="flex-1 flex items-center gap-2 px-3">
              <Home className="h-4 w-4 text-muted-foreground" />
              <select value={type} onChange={(e) => setType(e.target.value)} className="flex-1 bg-transparent outline-none text-foreground text-sm py-3">
                <option value="all">Cualquier tipo</option>
                {types.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="hidden md:block w-px bg-border" />
            <div className="flex-1 flex items-center gap-2 px-3">
              <BedDouble className="h-4 w-4 text-muted-foreground" />
              <select value={beds} onChange={(e) => setBeds(e.target.value)} className="flex-1 bg-transparent outline-none text-foreground text-sm py-3">
                <option value="all">Habitaciones</option>
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}+ habitaciones</option>)}
              </select>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-smooth">
              <Search className="h-4 w-4" /> Buscar
            </button>
          </div>
        </div>
      </section>

      {/* LISTADO con sidebar */}
      <section className="container mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* SIDEBAR FILTROS */}
          <aside className={`lg:w-72 shrink-0 ${filtersOpen ? "block" : "hidden lg:block"}`}>
            <div className="bg-surface border border-border rounded-lg p-5 sticky top-20">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-lg flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" /> Filtros
                </h2>
                {activeCount > 0 && (
                  <button onClick={reset} className="text-xs text-primary hover:underline flex items-center gap-1">
                    <X className="h-3 w-3" /> Limpiar ({activeCount})
                  </button>
                )}
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Búsqueda</label>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Nombre, ref. o dirección"
                    className="mt-2 w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm outline-none focus:border-primary transition-smooth"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estado</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)} className="mt-2 w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm outline-none focus:border-primary transition-smooth">
                    <option value="all">Todos</option>
                    <option value="disponible">Disponible</option>
                    <option value="proximamente">Próximamente</option>
                    <option value="reservada">Reservada</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ciudad</label>
                  <select value={city} onChange={(e) => setCity(e.target.value)} className="mt-2 w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm outline-none focus:border-primary transition-smooth">
                    <option value="all">Todas</option>
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tipo</label>
                  <select value={type} onChange={(e) => setType(e.target.value)} className="mt-2 w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm outline-none focus:border-primary transition-smooth">
                    <option value="all">Cualquiera</option>
                    {types.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Habitaciones</label>
                  <div className="mt-2 grid grid-cols-5 gap-1">
                    {["all", "1", "2", "3", "4"].map((n) => (
                      <button
                        key={n}
                        onClick={() => setBeds(n)}
                        className={`text-xs py-2 rounded-md border transition-smooth ${
                          beds === n
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-border hover:border-primary"
                        }`}
                      >
                        {n === "all" ? "Todas" : `${n}+`}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Amueblada</label>
                  <select value={furnished} onChange={(e) => setFurnished(e.target.value)} className="mt-2 w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm outline-none focus:border-primary transition-smooth">
                    <option value="all">Indiferente</option>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Superficie mínima (m²)</label>
                  <input
                    type="number"
                    value={minSqft}
                    onChange={(e) => setMinSqft(e.target.value)}
                    placeholder="Ej. 80"
                    className="mt-2 w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm outline-none focus:border-primary transition-smooth"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* RESULTADOS */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl">
                  {filtered.length} vivienda{filtered.length !== 1 && "s"}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Selección actualizada por el equipo de Walsadua</p>
              </div>
              <button
                onClick={() => setFiltersOpen((v) => !v)}
                className="lg:hidden inline-flex items-center gap-2 text-sm border border-border rounded-md px-3 py-2"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filtros
              </button>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 bg-surface rounded-lg">
                <p className="text-muted-foreground">No hay viviendas que coincidan con tu búsqueda.</p>
                <button onClick={reset} className="mt-4 text-sm text-primary font-medium hover:underline">
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} theme={theme} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Listings;
