import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { ContactButtons, SiteLayout, useTheme } from "@/components/Site";
import { PropertyCard } from "@/components/PropertyCard";
import { RichText, YouTubeEmbed } from "@/components/RichText";
import { useInvestment, useInvestments, useSiteSettings } from "@/hooks/useContent";
import { ArrowLeft, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const PropertyDetail = () => {
  const { slug } = useParams();
  const theme = useTheme();
  const settings = useSiteSettings();
  const { investment: property, loading } = useInvestment(slug);
  const { investments } = useInvestments();
  const [active, setActive] = useState(0);

  if (loading) {
    return (
      <SiteLayout>
        <div className="container mx-auto py-24 text-center text-muted-foreground">Cargando inversión…</div>
      </SiteLayout>
    );
  }

  if (!property) return <Navigate to={`/${theme}`} replace />;

  const gallery = property.gallery?.length ? property.gallery : [property.image].filter(Boolean);
  const next = () => setActive((i) => (i + 1) % gallery.length);
  const prev = () => setActive((i) => (i - 1 + gallery.length) % gallery.length);

  const otherProps = investments.filter((p) => p.id !== property.id).slice(0, 3);
  const brand = settings.brandName || "inmoinversión";

  return (
    <SiteLayout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="container mx-auto py-3 flex items-center gap-2 text-sm">
          <Link to={`/${theme}/inversiones`} className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-smooth">
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al listado
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground truncate">{property.title}</span>
        </div>
      </div>

      {/* GALERÍA */}
      {gallery.length > 0 && (
        <section className="container mx-auto pt-6">
          <div className="grid md:grid-cols-12 gap-3">
            <div className="md:col-span-9 relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
              <img src={gallery[active]} alt={property.title} className="w-full h-full object-cover" />
              {gallery.length > 1 && (
                <>
                  <button onClick={prev} aria-label="Anterior" className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-smooth">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={next} aria-label="Siguiente" className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition-smooth">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 right-3 text-xs px-2.5 py-1 rounded bg-foreground/80 text-background">
                    {active + 1} / {gallery.length}
                  </div>
                </>
              )}
            </div>
            <div className="md:col-span-3 grid grid-cols-4 md:grid-cols-1 gap-3">
              {gallery.slice(0, 4).map((g, i) => (
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
      )}

      {/* CONTENIDO */}
      <section className="container mx-auto py-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance">{property.title}</h1>
            {property.location && (
              <p className="flex items-center gap-2 text-muted-foreground mt-3">
                <MapPin className="h-4 w-4" /> {property.location}
              </p>
            )}
            {property.price && (
              <p className="mt-3 font-display text-2xl text-primary">{property.price}</p>
            )}
          </div>

          {/* DESCRIPCIÓN (texto enriquecido) */}
          <div>
            {property.body ? (
              <RichText value={property.body} />
            ) : (
              <p className="text-foreground/80 leading-relaxed">{property.description}</p>
            )}
          </div>

          {/* VÍDEOS DE YOUTUBE */}
          {property.videos?.map((v, i) => (
            <YouTubeEmbed key={i} url={v.url} caption={v.caption} />
          ))}
        </div>

        {/* SIDEBAR CONTACTO */}
        <aside>
          <div className="sticky top-20 space-y-4">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-border">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-lg">
                  II
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Gestionada por</div>
                  <div className="font-medium">{brand}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                ¿Te interesa esta inversión? Contáctanos y te responderemos en menos de 24h.
              </p>
              <ContactButtons title={property.title} size="lg" />
              <p className="text-xs text-center text-muted-foreground mt-4">
                Atención de {settings.openingHours || "Lun a Vie · 9h–19h"}
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* OTRAS INVERSIONES */}
      {otherProps.length > 0 && (
        <section className="container mx-auto py-12 border-t border-border mt-8">
          <h2 className="font-display text-2xl md:text-3xl mb-8">Otras inversiones que pueden interesarte</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProps.map((p) => (
              <PropertyCard key={p.id} property={p} theme={theme} />
            ))}
          </div>
        </section>
      )}
    </SiteLayout>
  );
};

export default PropertyDetail;
