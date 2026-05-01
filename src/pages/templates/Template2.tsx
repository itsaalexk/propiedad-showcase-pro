import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Facebook, Twitter } from "lucide-react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { TemplateSwitcher } from "@/components/Shared";
import heroInterior from "@/assets/hero-interior.jpg";
import p2 from "@/assets/property-2.jpg";

const Template2 = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-foreground">
      {/* NAV */}
      <header className="border-b border-foreground/10">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <Link to="/template/2" className="font-display text-3xl tracking-tight">Walsadua<span className="text-accent">.</span></Link>
          <nav className="hidden md:flex items-center gap-10 text-sm">
            <Link to="/template/2" className="hover:text-accent">Inicio</Link>
            <Link to="/template/2/listings" className="hover:text-accent">Catálogo</Link>
            <Link to="/template/2/contact" className="hover:text-accent">Contacto</Link>
            <Link to="/template/2/contact" className="hover:text-accent">Propietarios</Link>
          </nav>
          <Link to="/template/2/contact" className="text-sm font-medium border-b-2 border-accent pb-0.5">Publicar →</Link>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="border-b border-foreground/10 py-3 overflow-hidden">
        <div className="marquee flex whitespace-nowrap gap-12 text-xs uppercase tracking-[0.3em]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              <span>Publica gratis</span><span>·</span>
              <span>Sin intermediarios</span><span>·</span>
              <span>Hecho para propietarios</span><span>·</span>
              <span>Tu casa, tu historia</span><span>·</span>
              <span>Comunidad activa</span><span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO EDITORIAL */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Edición 01 · 2025</span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mt-6 text-balance">
              Casas con <em className="text-accent not-italic">alma.</em><br />
              Propietarios con <em className="not-italic underline decoration-accent decoration-4 underline-offset-8">voz.</em>
            </h1>
          </div>
          <div className="md:col-span-5 md:pb-4">
            <p className="text-lg leading-relaxed">
              Walsadua es el lugar donde los propietarios cuentan, en primera persona, lo que hace única a su vivienda. Una conversación honesta entre quien la habita y quien la busca.
            </p>
            <Link to="/template/2/listings" className="mt-6 inline-flex items-center gap-2 font-medium border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-smooth">
              Explorar el catálogo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 aspect-[16/10] overflow-hidden rounded-lg">
            <img src={heroInterior} alt="Interior" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg">
            <img src={p2} alt="Villa" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* INDEX SECTION */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.4em] text-background/50">Índice</span>
            <h2 className="font-display text-5xl mt-4">Sobre nosotros</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {[
              { n: "01", t: "Tu casa, tu narrativa", d: "Cada vivienda tiene una historia. Te ayudamos a contarla con honestidad." },
              { n: "02", t: "Conexión directa", d: "Sin intermediarios. Las personas interesadas hablan contigo, propietario." },
              { n: "03", t: "Curaduría editorial", d: "Cada anuncio se presenta con cuidado, como en una revista de arquitectura." },
            ].map((item) => (
              <div key={item.n} className="grid grid-cols-12 gap-6 pb-10 border-b border-background/15">
                <div className="col-span-2 md:col-span-1 font-display text-2xl">{item.n}.</div>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="font-display text-3xl mb-3">{item.t}</h3>
                  <p className="text-background/70 max-w-xl">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG SLIDER */}
      <section className="py-20 container mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Catálogo</span>
            <h2 className="font-display text-5xl mt-3">Recientes</h2>
          </div>
          <Link to="/template/2/listings" className="hidden md:inline-flex items-center gap-2 font-medium border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-smooth">
            Ver todas <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4 scroll-smooth">
          {properties.map((p) => (
            <div key={p.id} className="min-w-[320px] md:min-w-[400px] snap-start">
              <PropertyCard property={p} template={2} />
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 container mx-auto text-center">
        <p className="font-display text-3xl md:text-5xl max-w-4xl mx-auto leading-tight text-balance italic">
          "Walsadua entendió que mi piso no es un anuncio: es donde mis hijos crecieron. Lo contaron así."
        </p>
        <div className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">— Marta R., propietaria en Sevilla</div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-foreground/10 py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 items-end">
          <div>
            <div className="font-display text-3xl mb-3">Walsadua<span className="text-accent">.</span></div>
            <p className="text-sm text-muted-foreground">Edición 01 · {new Date().getFullYear()}</p>
          </div>
          <div className="text-sm space-y-2">
            <div><Link to="/template/2/listings" className="hover:text-accent">Catálogo</Link></div>
            <div><Link to="/template/2/contact" className="hover:text-accent">Contacto</Link></div>
            <div><Link to="/template/2/contact" className="hover:text-accent">Publicar mi vivienda</Link></div>
          </div>
          <div className="flex md:justify-end gap-3">
            {[Instagram, Facebook, Twitter].map((Ic, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-smooth">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      <TemplateSwitcher current={2} />
    </div>
  );
};

export default Template2;
