import { Link } from "react-router-dom";
import { useRef } from "react";
import { SiteLayout, useTheme } from "@/components/Site";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import {
  ArrowRight, ArrowUpRight, Search, MapPin, ChevronLeft, ChevronRight,
  Sparkles, Shield, Heart, Award, Phone, Mail, Star,
} from "lucide-react";
import heroModern from "@/assets/hero-modern.jpg";
import heroEditorial from "@/assets/hero-editorial.jpg";
import heroPremium from "@/assets/hero-premium.jpg";
import heroVilla from "@/assets/hero-villa.jpg";
import heroInterior from "@/assets/hero-interior.jpg";

const Home = () => {
  const theme = useTheme();
  const featured = properties.filter((p) => p.status !== "reservada").slice(0, 6);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "l" | "r") => {
    if (!sliderRef.current) return;
    const w = sliderRef.current.clientWidth * 0.8;
    sliderRef.current.scrollBy({ left: dir === "l" ? -w : w, behavior: "smooth" });
  };

  /* ============================================================
     TEMA 2 — EDITORIAL (revista, asimétrico, serif elegante)
     ============================================================ */
  if (theme === "t2") {
    return (
      <SiteLayout>
        {/* HERO editorial */}
        <section className="relative bg-surface overflow-hidden">
          <div className="container mx-auto py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 md:order-1 order-2">
              <span className="text-[11px] uppercase tracking-[0.35em] text-accent deco-rule">Volumen XII · Primavera</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-6 leading-[1.02]">
                Viviendas con <em>alma</em>,<br />propietarios con <em>criterio</em>.
              </h1>
              <p className="mt-6 text-foreground/70 text-lg leading-relaxed max-w-lg">
                Una selección curada de propiedades únicas en toda España. Cada vivienda es presentada con el cuidado que merece su historia.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to={`/${theme}/viviendas`} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-smooth">
                  Ver el catálogo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to={`/${theme}/propietarios`} className="inline-flex items-center gap-2 border-b-2 border-foreground text-foreground px-2 py-4 text-sm font-semibold uppercase tracking-wider hover:text-accent hover:border-accent transition-smooth">
                  Soy propietario
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 md:order-2 order-1 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={heroEditorial} alt="Interior editorial" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-5 max-w-[240px] hidden md:block">
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent">№ 042</div>
                <p className="font-display text-base mt-2 italic leading-snug">"La elegancia es el único valor que jamás envejece."</p>
              </div>
            </div>
          </div>
        </section>

        {/* INDICE editorial */}
        <section className="border-y border-border bg-background">
          <div className="container mx-auto py-6 grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { n: "01", l: "Propiedades únicas", v: `${properties.length} viviendas` },
              { n: "02", l: "Ciudades", v: "6 destinos" },
              { n: "03", l: "Experiencia", v: "+15 años" },
              { n: "04", l: "Propietarios", v: "+450 confían" },
            ].map((s) => (
              <div key={s.n} className="px-6 py-5 flex items-baseline gap-4">
                <span className="font-display italic text-3xl text-accent">{s.n}</span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  <div className="font-display text-lg mt-0.5">{s.v}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SLIDER editorial — destacadas */}
        <section className="container mx-auto py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-accent deco-rule">La selección</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-2xl leading-tight">
                Viviendas que pueden <em>interesarte</em>.
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => scroll("l")} className="h-12 w-12 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth flex items-center justify-center">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => scroll("r")} className="h-12 w-12 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth flex items-center justify-center">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div ref={sliderRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4">
            {featured.map((p) => (
              <div key={p.id} className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[42%] lg:w-[32%]">
                <PropertyCard property={p} theme={theme} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={`/${theme}/viviendas`} className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold border-b-2 border-foreground hover:text-accent hover:border-accent transition-smooth pb-1">
              Ver todas las viviendas →
            </Link>
          </div>
        </section>

        {/* SOBRE NOSOTROS editorial — dos columnas con tipografía */}
        <section className="bg-surface border-y border-border py-24">
          <div className="container mx-auto grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.35em] text-accent deco-rule">Editorial</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
                Una inmobiliaria con <em>criterio</em>, no con catálogo.
              </h2>
            </div>
            <div className="md:col-span-7 md:columns-2 gap-8 text-foreground/75 leading-relaxed text-base">
              <p className="mb-4 first-letter:font-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-primary">
                inmoinversión nace de la convicción de que una vivienda merece más que un anuncio. Llevamos más de quince años acompañando a propietarios particulares con una gestión cuidada, transparente y profesional.
              </p>
              <p className="mb-4">
                Hoy presentamos un catálogo seleccionado de viviendas en toda España, con un equipo pequeño y comprometido que trata cada propiedad como si fuera la suya.
              </p>
              <Link to={`/${theme}/sobre-nosotros`} className="inline-flex items-center gap-1 text-sm uppercase tracking-wider font-semibold text-primary hover:text-accent transition-smooth border-b border-current pb-0.5 mt-2">
                Conoce nuestra historia →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA propietarios editorial */}
        <section className="container mx-auto py-24">
          <div className="grid md:grid-cols-2 gap-0 border border-border">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img src={heroInterior} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-10 md:p-14 bg-card flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.35em] text-accent deco-rule">Para propietarios</span>
              <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
                ¿Tu vivienda merece estar aquí?
              </h2>
              <p className="text-foreground/70 mt-4 leading-relaxed">
                Si valoras una gestión profesional y discreta, hablemos. Estudiamos cada propuesta con atención.
              </p>
              <Link to={`/${theme}/contacto`} className="mt-8 inline-flex items-center gap-2 self-start bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-smooth">
                Solicitar valoración <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </SiteLayout>
    );
  }

  /* ============================================================
     TEMA 3 — PREMIUM (audaz, gran tipografía, fondos oscuros, dorado)
     ============================================================ */
  if (theme === "t3") {
    return (
      <SiteLayout>
        {/* HERO premium full-bleed dramático */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0">
            <img src={heroPremium} alt="" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary" />
          </div>
          <div className="relative container mx-auto pt-24 pb-32 md:pt-32 md:pb-40">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-accent" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent">inmoinversión · Estd. 2009</span>
              </div>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tight">
                Propiedades<br />
                <span className="text-accent italic font-normal">excepcionales</span>
              </h1>
              <p className="mt-10 text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                Una colección reducida de viviendas únicas, gestionadas con el detalle que su propietario merece.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to={`/${theme}/viviendas`} className="inline-flex items-center gap-3 rounded-pill bg-accent text-accent-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-spring">
                  Explorar la colección <ArrowUpRight className="h-5 w-5" />
                </Link>
                <Link to={`/${theme}/propietarios`} className="inline-flex items-center gap-3 rounded-pill border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-smooth">
                  Soy propietario
                </Link>
              </div>
            </div>
          </div>

          {/* Banda de stats */}
          <div className="relative border-t border-primary-foreground/10">
            <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { v: "+15", l: "Años" },
                { v: "+450", l: "Propietarios" },
                { v: "98%", l: "Satisfacción" },
                { v: "24h", l: "Respuesta" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-accent">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLIDER premium */}
        <section className="container mx-auto py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">La colección</span>
              <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
                Viviendas <span className="italic text-accent font-normal">destacadas</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => scroll("l")} className="h-14 w-14 rounded-pill border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth flex items-center justify-center">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => scroll("r")} className="h-14 w-14 rounded-pill border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth flex items-center justify-center">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div ref={sliderRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 -mx-4 px-4">
            {featured.map((p) => (
              <div key={p.id} className="snap-start shrink-0 w-[85%] sm:w-[55%] md:w-[40%] lg:w-[30%]">
                <PropertyCard property={p} theme={theme} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to={`/${theme}/viviendas`} className="inline-flex items-center gap-2 rounded-pill border-2 border-primary text-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-smooth">
              Ver toda la colección <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* SOBRE NOSOTROS premium */}
        <section className="bg-primary text-primary-foreground py-24">
          <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">inmoinversión</span>
              <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
                No vendemos casas.<br />
                <span className="italic text-accent font-normal">Cuidamos legados.</span>
              </h2>
              <p className="text-primary-foreground/75 mt-8 text-lg leading-relaxed">
                Trabajamos con un número limitado de propiedades para ofrecer una atención verdaderamente personal a cada propietario y a cada visitante.
              </p>
              <Link to={`/${theme}/sobre-nosotros`} className="mt-10 inline-flex items-center gap-2 rounded-pill bg-accent text-accent-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-spring">
                Conoce el equipo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, t: "Selección", d: "Solo propiedades excepcionales" },
                { icon: Shield, t: "Discreción", d: "Trato confidencial garantizado" },
                { icon: Sparkles, t: "Detalle", d: "Cada vivienda es única" },
                { icon: Heart, t: "Compromiso", d: "Equipo dedicado por completo" },
              ].map((c) => (
                <div key={c.t} className="corner-frame p-6 border border-primary-foreground/15 rounded-card">
                  <c.icon className="h-6 w-6 text-accent mb-4" />
                  <div className="font-display text-xl uppercase">{c.t}</div>
                  <p className="text-primary-foreground/60 text-sm mt-2">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final premium */}
        <section className="container mx-auto py-24">
          <div className="rounded-card overflow-hidden relative bg-primary text-primary-foreground p-12 md:p-20 corner-frame">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">Hablemos</span>
              <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
                Tu vivienda merece <span className="italic text-accent font-normal">distinción</span>.
              </h2>
              <p className="text-primary-foreground/75 mt-6 text-lg">
                Concierta una conversación sin compromiso. Te explicamos en persona cómo trabajamos.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to={`/${theme}/contacto`} className="inline-flex items-center gap-2 rounded-pill bg-accent text-accent-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-spring">
                  Solicitar conversación <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="tel:+34675832994" className="inline-flex items-center gap-2 rounded-pill border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-smooth">
                  <Phone className="h-4 w-4" /> Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    );
  }

  /* ============================================================
     TEMA 1 — ESENCIAL MODERNO (limpio, geométrico, generoso)
     ============================================================ */
  return (
    <SiteLayout>
      {/* HERO con buscador integrado */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30">
          <img src={heroModern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/90" />
        <div className="relative container mx-auto pt-20 pb-24 md:pt-28 md:pb-32">
          <span className="chip bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">
            <Star className="h-3 w-3 fill-accent text-accent" /> Inmobiliaria especializada
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-6 max-w-4xl leading-[1.05] text-balance">
            Encuentra tu próximo hogar entre nuestra <span className="text-accent">selección curada</span>.
          </h1>
          <p className="mt-6 text-primary-foreground/80 max-w-2xl text-lg md:text-xl">
            inmoinversión presenta viviendas únicas de propietarios particulares en toda España. Profesionales, cercanos y siempre disponibles.
          </p>

          {/* BUSCADOR rápido */}
          <div className="mt-10 bg-background rounded-card p-2 shadow-elegant flex flex-col md:flex-row gap-2 max-w-3xl">
            <div className="flex-1 flex items-center gap-3 px-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <input placeholder="¿Dónde quieres vivir?" className="flex-1 bg-transparent outline-none text-foreground py-3.5 placeholder:text-muted-foreground" />
            </div>
            <Link to={`/${theme}/viviendas`} className="inline-flex items-center justify-center gap-2 rounded-card bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-smooth">
              <Search className="h-4 w-4" /> Buscar vivienda
            </Link>
          </div>

          {/* mini-stats */}
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {[
              { v: `${properties.length}`, l: "Propiedades activas" },
              { v: "+15", l: "Años de experiencia" },
              { v: "98%", l: "Clientes satisfechos" },
            ].map((s) => (
              <div key={s.l} className="flex items-baseline gap-2">
                <span className="font-display text-3xl text-accent">{s.v}</span>
                <span className="text-primary-foreground/70">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDER viviendas destacadas */}
      <section className="container mx-auto py-20">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <span className="chip"><Sparkles className="h-3 w-3 text-accent" /> Selección actual</span>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight max-w-2xl text-balance">
              Viviendas que pueden interesarte
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Explora nuestra selección actualizada. Cada propiedad está cuidadosamente preparada para presentar lo mejor de sí.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll("l")} className="h-12 w-12 rounded-pill border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth flex items-center justify-center">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll("r")} className="h-12 w-12 rounded-pill border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth flex items-center justify-center">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={sliderRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4">
          {featured.map((p) => (
            <div key={p.id} className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[42%] lg:w-[31%]">
              <PropertyCard property={p} theme={theme} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={`/${theme}/viviendas`} className="inline-flex items-center gap-2 rounded-pill bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition-smooth">
            Ver todas las viviendas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="bg-surface py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-card overflow-hidden order-2 md:order-1">
            <img src={heroVilla} alt="Sobre inmoinversión" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <span className="chip"><Heart className="h-3 w-3 text-accent" /> Sobre nosotros</span>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight text-balance">
              Una inmobiliaria pensada para propietarios exigentes.
            </h2>
            <p className="text-foreground/75 mt-5 leading-relaxed text-lg">
              Llevamos más de quince años acompañando a propietarios particulares con una gestión cuidada, transparente y profesional. Trabajamos con un catálogo limitado para ofrecer atención personal a cada vivienda.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Shield, t: "Trato cercano" },
                { icon: Award, t: "Selección rigurosa" },
                { icon: Sparkles, t: "Resultados claros" },
                { icon: Heart, t: "Equipo humano" },
              ].map((v) => (
                <div key={v.t} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-pill bg-primary/10 flex items-center justify-center">
                    <v.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold">{v.t}</span>
                </div>
              ))}
            </div>
            <Link to={`/${theme}/sobre-nosotros`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-smooth">
              Conoce nuestra historia <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA propietarios */}
      <section className="container mx-auto py-24">
        <div className="relative overflow-hidden rounded-card bg-primary text-primary-foreground p-10 md:p-16">
          <div className="absolute inset-0 opacity-20">
            <img src={heroInterior} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40" />
          <div className="relative max-w-2xl">
            <span className="chip bg-accent text-accent-foreground"><Sparkles className="h-3 w-3" /> Para propietarios</span>
            <h2 className="font-display text-3xl md:text-5xl mt-5 leading-tight text-balance">
              ¿Tienes una vivienda? Cuéntanos sobre ella.
            </h2>
            <p className="text-primary-foreground/75 mt-5 text-lg">
              Estudiamos cada propuesta personalmente. Si encaja con nuestra selección, te ofrecemos una gestión integral con resultados claros.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`/${theme}/contacto`} className="inline-flex items-center gap-2 rounded-pill bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-smooth">
                Solicitar valoración <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="mailto:info@inmoinversion.com" className="inline-flex items-center gap-2 rounded-pill border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-smooth">
                <Mail className="h-4 w-4" /> Escríbenos
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Home;
