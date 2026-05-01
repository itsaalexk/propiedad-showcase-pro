import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { getProperty } from "@/data/properties";
import { ContactButtons, TemplateSwitcher } from "@/components/Shared";
import { ArrowLeft, BedDouble, Bath, Maximize, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const PropertyDetail = () => {
  const { template, slug } = useParams();
  const t = (Number(template) || 1) as 1 | 2 | 3;
  const isDark = t === 3;
  const property = slug ? getProperty(slug) : undefined;
  const [active, setActive] = useState(0);

  if (!property) return <Navigate to={`/template/${t}/listings`} replace />;

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0e0c0a] text-white" : "bg-background text-foreground"}`}>
      {/* NAV */}
      <header className={`border-b ${isDark ? "border-white/10" : "border-border"}`}>
        <div className="container mx-auto py-5 flex items-center justify-between">
          <Link to={`/template/${t}`} className="flex items-center gap-2">
            <div className={`h-8 w-8 rounded-lg ${isDark ? "bg-accent" : "gradient-warm"}`} />
            <span className="font-display text-2xl font-semibold">Walsadua</span>
          </Link>
          <Link to={`/template/${t}/listings`} className="inline-flex items-center gap-2 text-sm hover:text-accent transition-smooth">
            <ArrowLeft className="h-4 w-4" /> Volver al catálogo
          </Link>
        </div>
      </header>

      {/* GALLERY */}
      <section className="container mx-auto py-8">
        <div className="grid md:grid-cols-4 gap-3">
          <div className="md:col-span-3 aspect-[16/10] rounded-2xl overflow-hidden">
            <img src={property.gallery[active]} alt={property.title} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 md:grid-cols-1 gap-3">
            {property.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border-2 transition-smooth ${
                  active === i ? "border-accent" : isDark ? "border-white/10" : "border-transparent"
                }`}
              >
                <img src={g} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="container mx-auto py-8 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground mb-4">
            {property.type}
          </span>
          <h1 className="font-display text-4xl md:text-5xl mb-3 text-balance">{property.title}</h1>
          <p className={`flex items-center gap-2 mb-8 ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
            <MapPin className="h-4 w-4" /> {property.location}
          </p>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 p-5 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-secondary"}`}>
            {[
              { icon: BedDouble, l: "Habitaciones", v: property.beds },
              { icon: Bath, l: "Baños", v: property.baths },
              { icon: Maximize, l: "Superficie", v: `${property.sqft} m²` },
              { icon: Calendar, l: "Año", v: property.year },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-accent" />
                <div>
                  <div className={`text-xs ${isDark ? "text-white/50" : "text-muted-foreground"}`}>{s.l}</div>
                  <div className="font-medium">{s.v}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl mb-4">Descripción</h2>
            <p className={`leading-relaxed ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
              {property.description}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl mb-4">Características</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {property.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR CONTACT */}
        <aside className="lg:col-span-1">
          <div className={`sticky top-6 rounded-2xl p-6 ${isDark ? "bg-white/5 border border-white/10" : "bg-card border border-border shadow-soft"}`}>
            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-current/10">
              <div className="h-12 w-12 rounded-full gradient-warm flex items-center justify-center text-white font-display text-lg">
                {property.owner.name[0]}
              </div>
              <div>
                <div className={`text-xs ${isDark ? "text-white/50" : "text-muted-foreground"}`}>Propietario/a</div>
                <div className="font-medium">{property.owner.name}</div>
              </div>
            </div>
            <p className={`text-sm mb-5 ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
              ¿Te interesa esta vivienda? Contacta directamente con el propietario, sin intermediarios.
            </p>
            <ContactButtons
              whatsapp={property.owner.whatsapp}
              email={property.owner.email}
              title={property.title}
              variant={isDark ? "dark" : "default"}
            />
            <p className={`text-xs mt-4 text-center ${isDark ? "text-white/40" : "text-muted-foreground"}`}>
              Respuesta habitual en menos de 24h
            </p>
          </div>
        </aside>
      </section>

      <TemplateSwitcher current={t} />
    </div>
  );
};

export default PropertyDetail;
