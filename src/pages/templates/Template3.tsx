import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Award, Shield, Instagram, Facebook, Youtube } from "lucide-react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { TemplateSwitcher } from "@/components/Shared";
import heroDark from "@/assets/hero-dark.jpg";

const Template3 = () => {
  return (
    <div className="min-h-screen bg-[#0e0c0a] text-white">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container mx-auto py-6 flex items-center justify-between">
          <Link to="/template/3" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-accent" />
            <span className="font-display text-2xl">Walsadua</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <Link to="/template/3" className="hover:text-accent">Inicio</Link>
            <Link to="/template/3/listings" className="hover:text-accent">Colección</Link>
            <Link to="/template/3/contact" className="hover:text-accent">Contacto</Link>
          </nav>
          <Link to="/template/3/contact" className="text-sm font-medium rounded-full border border-accent text-accent px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition-smooth">
            Acceso propietarios
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <img src={heroDark} alt="Penthouse nocturno" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0e0c0a]" />
        <div className="relative container mx-auto h-full flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.5em] text-accent mb-6 animate-fade-up">Walsadua · Premium</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl max-w-5xl text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Viviendas con <em className="text-accent not-italic">carácter,</em><br />
            propietarios con <em className="not-italic">criterio.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/70 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Una colección curada de propiedades excepcionales, presentadas directamente por sus propietarios.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/template/3/listings" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-medium hover:opacity-90 transition-smooth shadow-gold">
              Ver colección <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/template/3/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-medium hover:bg-white/10 transition-smooth">
              Publicar mi vivienda
            </Link>
          </div>
        </div>
        {/* Stats overlay */}
        <div className="absolute bottom-12 right-8 hidden lg:flex gap-4">
          {[
            { n: "1.2k", l: "Viviendas" },
            { n: "98%", l: "Satisfacción" },
            { n: "24h", l: "Respuesta" },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-32">
              <div className="font-display text-3xl text-accent">{s.n}</div>
              <div className="text-xs text-white/60 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 container mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Sparkles, t: "Curaduría exclusiva", d: "Cada vivienda es revisada para mantener un estándar editorial y visual." },
            { icon: Award, t: "Hecho por propietarios", d: "Tu propiedad, tu narrativa, tu voz. Sin filtros corporativos." },
            { icon: Shield, t: "Contacto directo", d: "Conecta sin intermediarios con quien realmente está interesado." },
          ].map((v, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-accent/40 transition-smooth">
              <v.icon className="h-8 w-8 text-accent mb-6" />
              <h3 className="font-display text-2xl mb-3">{v.t}</h3>
              <p className="text-white/60">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION SLIDER */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-accent">Colección</span>
              <h2 className="font-display text-5xl md:text-6xl mt-3">Propiedades destacadas</h2>
            </div>
            <Link to="/template/3/listings" className="hidden md:inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-smooth">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4 scroll-smooth">
            {properties.map((p) => (
              <div key={p.id} className="min-w-[320px] md:min-w-[400px] snap-start">
                <PropertyCard property={p} template={3} variant="dark" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 container mx-auto">
        <div className="rounded-3xl border border-accent/30 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-warm opacity-10" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.4em] text-accent">Únete a Walsadua</span>
            <h2 className="font-display text-5xl md:text-6xl mt-6 max-w-3xl mx-auto text-balance">
              ¿Tu vivienda merece estar aquí?
            </h2>
            <p className="mt-6 text-white/70 max-w-xl mx-auto">
              Solicita una valoración editorial gratuita. Te ayudamos a presentar tu propiedad como se merece.
            </p>
            <Link to="/template/3/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-medium hover:opacity-90 transition-smooth shadow-gold">
              Solicitar acceso <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-accent" />
              <span className="font-display text-2xl">Walsadua</span>
            </div>
            <p className="text-white/50 max-w-sm">El portal premium hecho para propietarios con criterio.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-accent">Explorar</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/template/3/listings" className="hover:text-white">Colección</Link></li>
              <li><Link to="/template/3/contact" className="hover:text-white">Contacto</Link></li>
              <li><Link to="/template/3/contact" className="hover:text-white">Publicar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-accent">Redes</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Ic, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-smooth">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-6 border-t border-white/10 text-xs text-white/40">
          © {new Date().getFullYear()} Walsadua. Edición Premium.
        </div>
      </footer>

      <TemplateSwitcher current={3} />
    </div>
  );
};

export default Template3;
