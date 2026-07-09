import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { getProperty, properties } from "@/data/properties";
import { ContactButtons, SiteLayout, useTheme } from "@/components/Site";
import { PropertyCard } from "@/components/PropertyCard";
import {
  ArrowLeft, BedDouble, Bath, Maximize, Calendar, MapPin,
  CheckCircle2, Sofa, Zap, Home, Hash, ChevronLeft, ChevronRight,
} from "lucide-react";

const PropertyDetail = () => {
  const { slug } = useParams();
  const theme = useTheme();
  const property = slug ? getProperty(slug) : undefined;
  const [active, setActive] = useState(0);

  if (!property) return <Navigate to={`/${theme}`} replace />;

  const next = () => setActive((i) => (i + 1) % property.gallery.length);
  const prev = () => setActive((i) => (i - 1 + property.gallery.length) % property.gallery.length);

  const otherProps = properties.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <SiteLayout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="container mx-auto py-3 flex items-center gap-2 text-sm">
          <Link to={`/${theme}`} className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-smooth">
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al listado
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground truncate">{property.title}</span>
          <span className="ml-auto font-mono text-xs text-muted-foreground">Ref. {property.ref}</span>
        </div>
      </div>

      {/* GALERÍA */}
      <section className="container mx-auto pt-6">
        <div className="grid md:grid-cols-12 gap-3">
          <div className="md:col-span-9 relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
            <img src={property.gallery[active]} alt={property.title} className="w-full h-full object-cover" />
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-smooth">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-smooth">
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 right-3 text-xs px-2.5 py-1 rounded bg-foreground/80 text-background">
              {active + 1} / {property.gallery.length}
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-4 md:grid-cols-1 gap-3">
            {property.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`aspect-[4/3] rounded-md overflow-hidden border-2 transition-smooth ${active === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"}`}
              >
                <img src={g} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CABECERA INFO */}
      <section className="container mx-auto py-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-available text-white uppercase tracking-wider">
                {property.status === "disponible" ? "Disponible" : property.status === "proximamente" ? "Próximamente" : "Reservada"}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded bg-secondary text-foreground/80">
                {property.type}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance">{property.title}</h1>
            <p className="flex items-center gap-2 text-muted-foreground mt-3">
              <MapPin className="h-4 w-4" /> {property.location}
            </p>
          </div>

          {/* DATOS PRINCIPALES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: BedDouble, l: "Habitaciones", v: property.beds },
              { icon: Bath, l: "Baños", v: property.baths },
              { icon: Maximize, l: "Superficie", v: `${property.sqft} m²` },
              { icon: Calendar, l: "Año", v: property.year },
            ].map((s, i) => (
              <div key={i} className="bg-surface border border-border rounded-lg p-4">
                <s.icon className="h-5 w-5 text-primary mb-3" />
                <div className="text-xs text-muted-foreground">{s.l}</div>
                <div className="font-medium mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>

          {/* DESCRIPCIÓN */}
          <div>
            <h2 className="font-display text-2xl mb-4">Descripción</h2>
            <p className="text-foreground/80 leading-relaxed">{property.description}</p>
          </div>

          {/* DESTACADOS */}
          <div>
            <h2 className="font-display text-2xl mb-4">Lo que destaca de esta vivienda</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {property.highlights.map((h, i) => (
                <div key={i} className="bg-surface border border-border rounded-lg p-4 text-sm font-medium">
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* CARACTERÍSTICAS */}
          <div>
            <h2 className="font-display text-2xl mb-4">Características</h2>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {property.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* INFO TÉCNICA */}
          <div>
            <h2 className="font-display text-2xl mb-4">Información técnica</h2>
            <div className="border border-border rounded-lg overflow-hidden">
              {[
                { icon: Hash, l: "Referencia", v: property.ref },
                { icon: Home, l: "Tipo", v: property.type },
                { icon: MapPin, l: "Ubicación", v: `${property.city}, ${property.province}` },
                { icon: Calendar, l: "Año de construcción", v: property.year },
                { icon: Sofa, l: "Amueblada", v: property.furnished ? "Sí" : "No" },
                { icon: Zap, l: "Certificado energético", v: property.energyRating },
              ].map((row, i) => (
                <div key={i} className={`flex items-center gap-3 px-4 py-3 ${i % 2 === 0 ? "bg-surface" : "bg-background"}`}>
                  <row.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground flex-1">{row.l}</span>
                  <span className="text-sm font-medium">{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR CONTACTO */}
        <aside>
          <div className="sticky top-20 space-y-4">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-border">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-lg">
                  {property.owner.name[0]}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Gestionado por</div>
                  <div className="font-medium">inmoinversión · {property.owner.name}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                ¿Te interesa esta vivienda? Contáctanos y te responderemos en menos de 24h.
              </p>
              <ContactButtons
                whatsapp={property.owner.whatsapp}
                email={property.owner.email}
                title={property.title}
                size="lg"
              />
              <p className="text-xs text-center text-muted-foreground mt-4">
                Atención de Lun a Vie · 9h–19h
              </p>
            </div>

            <div className="bg-surface border border-border rounded-lg p-5">
              <h3 className="font-display text-base mb-2">¿Eres propietario?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Descubre cómo inmoinversión puede gestionar tu vivienda.
              </p>
              <Link to={`/${theme}/propietarios`} className="text-sm text-primary font-medium hover:underline">
                Conoce nuestro servicio →
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {/* OTRAS VIVIENDAS */}
      <section className="container mx-auto py-12 border-t border-border mt-8">
        <h2 className="font-display text-2xl md:text-3xl mb-8">Otras viviendas que pueden interesarte</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProps.map((p) => (
            <PropertyCard key={p.id} property={p} theme={theme} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default PropertyDetail;
