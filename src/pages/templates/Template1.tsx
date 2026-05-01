import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, Home, Users, Sparkles, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { TemplateSwitcher } from "@/components/Shared";
import heroVilla from "@/assets/hero-villa.jpg";

const Template1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container mx-auto py-6 flex items-center justify-between">
          <Link to="/template/1" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-warm" />
            <span className="font-display text-2xl font-semibold text-white drop-shadow">Walsadua</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
            <Link to="/template/1" className="hover:text-accent transition-smooth">Inicio</Link>
            <Link to="/template/1/listings" className="hover:text-accent transition-smooth">Viviendas</Link>
            <Link to="/template/1/contact" className="hover:text-accent transition-smooth">Contacto</Link>
          </nav>
          <Link
            to="/template/1/listings"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-smooth"
          >
            Publicar mi vivienda
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img src={heroVilla} alt="Villa moderna" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative container mx-auto h-full flex flex-col justify-center text-white">
          <span className="text-xs uppercase tracking-[0.4em] mb-6 animate-fade-up">Para propietarios</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Tu vivienda merece <em className="text-accent not-italic">su propia historia.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Publica tu propiedad en Walsadua y conecta directamente con personas que buscan un lugar al que llamar hogar. Sin intermediarios. Sin ruido.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-12 max-w-3xl bg-white/95 backdrop-blur rounded-2xl p-2 shadow-elegant flex flex-col md:flex-row gap-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex-1 flex items-center gap-2 px-4 py-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <input placeholder="Ciudad o barrio" className="flex-1 bg-transparent outline-none text-foreground text-sm" />
            </div>
            <div className="hidden md:block w-px bg-border" />
            <div className="flex-1 flex items-center gap-2 px-4 py-3">
              <Home className="h-4 w-4 text-muted-foreground" />
              <select className="flex-1 bg-transparent outline-none text-foreground text-sm">
                <option>Cualquier tipo</option>
                <option>Apartamento</option>
                <option>Villa</option>
                <option>Casa rural</option>
              </select>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition-smooth">
              <Search className="h-4 w-4" /> Buscar
            </button>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Nuestra misión</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-balance">
              Devolver a los propietarios el control de su vivienda.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Walsadua nace para que cada propietario pueda contar la historia de su casa con sus propias palabras, sus propias fotos y sin perder el contacto humano.
            </p>
            <Link to="/template/1/listings" className="mt-8 inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-smooth">
              Explorar viviendas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Home, n: "+1.200", l: "Viviendas publicadas" },
              { icon: Users, n: "+8.500", l: "Propietarios activos" },
              { icon: MapPin, n: "+90", l: "Ciudades" },
              { icon: Sparkles, n: "4.9/5", l: "Valoración media" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-secondary p-6">
                <s.icon className="h-6 w-6 text-accent mb-4" />
                <div className="font-display text-3xl">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES SLIDER */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selección destacada</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">Viviendas que enamoran</h2>
            </div>
            <Link to="/template/1/listings" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-smooth">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4 scroll-smooth">
            {properties.map((p) => (
              <div key={p.id} className="min-w-[320px] md:min-w-[380px] snap-start">
                <PropertyCard property={p} template={1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto">
        <div className="rounded-3xl gradient-ink text-white p-12 md:p-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto text-balance">
            ¿Tienes una vivienda? Cuéntanos su historia.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Publicar es gratis. Sin comisiones ocultas. Tú eliges con quién hablar.
          </p>
          <Link
            to="/template/1/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-medium hover:opacity-90 transition-smooth"
          >
            Empezar ahora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-warm" />
              <span className="font-display text-2xl">Walsadua</span>
            </div>
            <p className="text-background/60 text-sm">El portal inmobiliario hecho por y para propietarios.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link to="/template/1" className="hover:text-accent">Inicio</Link></li>
              <li><Link to="/template/1/listings" className="hover:text-accent">Viviendas</Link></li>
              <li><Link to="/template/1/contact" className="hover:text-accent">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>hola@walsadua.com</li>
              <li>+34 600 000 000</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Ic, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-6 border-t border-background/10 text-xs text-background/40">
          © {new Date().getFullYear()} Walsadua. Todos los derechos reservados.
        </div>
      </footer>

      <TemplateSwitcher current={1} />
    </div>
  );
};

export default Template1;
