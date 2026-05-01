import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { TemplateSwitcher } from "@/components/Shared";
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";

const Listings = () => {
  const { template } = useParams();
  const t = (Number(template) || 1) as 1 | 2 | 3;
  const isDark = t === 3;

  const [q, setQ] = useState("");
  const [city, setCity] = useState("all");
  const [type, setType] = useState("all");
  const [beds, setBeds] = useState("all");

  const cities = useMemo(() => Array.from(new Set(properties.map((p) => p.city))), []);
  const types = useMemo(() => Array.from(new Set(properties.map((p) => p.type))), []);

  const filtered = properties.filter((p) => {
    if (q && !`${p.title} ${p.location}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (city !== "all" && p.city !== city) return false;
    if (type !== "all" && p.type !== type) return false;
    if (beds !== "all" && p.beds < Number(beds)) return false;
    return true;
  });

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0e0c0a] text-white" : "bg-background text-foreground"}`}>
      {/* NAV */}
      <header className={`border-b ${isDark ? "border-white/10" : "border-border"}`}>
        <div className="container mx-auto py-5 flex items-center justify-between">
          <Link to={`/template/${t}`} className="flex items-center gap-2">
            <div className={`h-8 w-8 rounded-lg ${isDark ? "bg-accent" : "gradient-warm"}`} />
            <span className="font-display text-2xl font-semibold">Walsadua</span>
          </Link>
          <Link to={`/template/${t}`} className="inline-flex items-center gap-2 text-sm hover:text-accent transition-smooth">
            <ArrowLeft className="h-4 w-4" /> Volver al inicio
          </Link>
        </div>
      </header>

      <section className="container mx-auto py-14">
        <span className={`text-xs uppercase tracking-[0.3em] ${isDark ? "text-accent" : "text-muted-foreground"}`}>
          Catálogo Walsadua
        </span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 mb-3 text-balance">Todas las viviendas</h1>
        <p className={`max-w-xl ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
          Filtra por ciudad, tipo o tamaño y descubre la propiedad publicada directamente por su propietario.
        </p>
      </section>

      {/* FILTERS */}
      <section className="container mx-auto pb-10">
        <div className={`rounded-2xl p-4 grid grid-cols-1 md:grid-cols-5 gap-3 ${isDark ? "bg-white/5 border border-white/10" : "bg-secondary"}`}>
          <div className={`md:col-span-2 flex items-center gap-2 px-4 rounded-xl ${isDark ? "bg-white/5" : "bg-background"}`}>
            <Search className={`h-4 w-4 ${isDark ? "text-white/60" : "text-muted-foreground"}`} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por nombre o dirección..."
              className="flex-1 bg-transparent outline-none py-3 text-sm"
            />
          </div>
          <select value={city} onChange={(e) => setCity(e.target.value)} className={`px-4 py-3 rounded-xl text-sm outline-none ${isDark ? "bg-white/5" : "bg-background"}`}>
            <option value="all">Todas las ciudades</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className={`px-4 py-3 rounded-xl text-sm outline-none ${isDark ? "bg-white/5" : "bg-background"}`}>
            <option value="all">Cualquier tipo</option>
            {types.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={beds} onChange={(e) => setBeds(e.target.value)} className={`px-4 py-3 rounded-xl text-sm outline-none ${isDark ? "bg-white/5" : "bg-background"}`}>
            <option value="all">Cualquier nº habitaciones</option>
            {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}+ habitaciones</option>)}
          </select>
        </div>
        <div className={`mt-4 flex items-center gap-2 text-sm ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
          <SlidersHorizontal className="h-4 w-4" />
          <span>{filtered.length} viviendas encontradas</span>
        </div>
      </section>

      {/* GRID */}
      <section className="container mx-auto pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-24 opacity-60">No hay viviendas que coincidan con tu búsqueda.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} template={t} variant={isDark ? "dark" : "light"} />
            ))}
          </div>
        )}
      </section>

      <TemplateSwitcher current={t} />
    </div>
  );
};

export default Listings;
