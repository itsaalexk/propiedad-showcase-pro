import { Link } from "react-router-dom";
import { useRef } from "react";
import { SiteLayout, useTheme } from "@/components/Site";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import {
  ArrowUpRight, ChevronLeft, ChevronRight,
  Sparkles, Shield, Heart, Award, Phone,
  SearchCheck, Hammer, Users, Coins,
  KeyRound, Wrench, PieChart,
} from "lucide-react";
import heroBedroom from "@/assets/hero-bedroom.jpg";

const STEPS = [
  { icon: SearchCheck, n: "1", t: "Encontramos oportunidades", d: "Analizamos el mercado para encontrar inmuebles con alto potencial de rentabilidad." },
  { icon: Hammer, n: "2", t: "Reformamos y optimizamos", d: "Reformamos, decoramos y dividimos el inmueble para maximizar su rentabilidad." },
  { icon: Users, n: "3", t: "Gestionamos el activo", d: "Nos encargamos de todo: inquilinos, mantenimiento, limpieza, cobros y más." },
  { icon: Coins, n: "4", t: "Tú cobras la rentabilidad", d: "Recibes tus ingresos todos los meses de forma pasiva y con total tranquilidad." },
];

const PRODUCTS = [
  { icon: KeyRound, t: "Inversión llave en mano para alquiler", d: "Adquirimos, reformamos y gestionamos el inmueble por ti. Tú recibes una rentabilidad por alquiler de forma totalmente pasiva." },
  { icon: Wrench, t: "Comprar, reformar y vender", d: "Detectamos oportunidades, las reformamos con criterio y las vendemos con plusvalía. Una inversión con horizonte definido." },
  { icon: PieChart, t: "Participaciones en proyectos", d: "Participa en proyectos inmobiliarios concretos con una entrada accesible y comparte los beneficios de cada operación." },
];

const Home = () => {
  const theme = useTheme();
  const featured = properties.filter((p) => p.status !== "reservada").slice(0, 6);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "l" | "r") => {
    if (!sliderRef.current) return;
    const w = sliderRef.current.clientWidth * 0.8;
    sliderRef.current.scrollBy({ left: dir === "l" ? -w : w, behavior: "smooth" });
  };

  return (
    <SiteLayout>
      {/* HERO premium full-bleed dramático */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroBedroom} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary" />
        </div>
        <div className="relative container mx-auto pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tight">
              Inversión<br />
              <span className="text-accent italic font-normal">llave en mano</span>
            </h1>
            <p className="mt-10 text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Una colección reducida de viviendas únicas, gestionadas con el detalle que su propietario merece.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to={`/${theme}/viviendas`} className="inline-flex items-center gap-3 rounded-pill bg-accent text-accent-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-spring">
                Encuentra tu oportunidad <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link to={`/${theme}/vender`} className="inline-flex items-center gap-3 rounded-pill border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-smooth">
                Quiero vender
              </Link>
            </div>
          </div>
        </div>

        {/* Banda de stats */}
        <div className="relative border-t border-primary-foreground/10">
          <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { v: "+15", l: "Años" },
              { v: "+450", l: "Propietarios" },
              { v: "98%", l: "Satisfacción" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-accent">{s.v}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVERSIÓN LLAVE EN MANO */}
      <section className="bg-surface border-b border-border py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">Cómo funciona</span>
            <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
              Inversión inmobiliaria <span className="italic text-accent font-normal">llave en mano</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative text-center md:text-left">
                <div className="flex md:block items-center gap-4 justify-center">
                  <div className="corner-frame inline-flex h-16 w-16 items-center justify-center rounded-card border border-accent/40 text-accent">
                    <s.icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
                  <span className="flex h-7 w-7 items-center justify-center rounded-pill bg-accent text-accent-foreground text-xs font-bold">
                    {s.n}
                  </span>
                  <h3 className="font-display text-lg uppercase tracking-tight leading-tight">{s.t}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
                {i < STEPS.length - 1 && (
                  <ArrowUpRight className="hidden md:block absolute -right-5 top-5 h-5 w-5 text-accent/40 rotate-45" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS / MODALIDADES DE INVERSIÓN */}
      <section className="container mx-auto py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">Modalidades</span>
          <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
            Formas de <span className="italic text-accent font-normal">invertir</span> con nosotros
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Tres modelos pensados para adaptarse a tu perfil y a tus objetivos de rentabilidad.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <div key={p.t} className="corner-frame relative p-8 border border-border rounded-card bg-surface flex flex-col">
              <span className="absolute top-6 right-6 font-display text-5xl text-accent/15">0{i + 1}</span>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-card border border-accent/40 text-accent mb-6">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight leading-tight">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{p.d}</p>
              <Link to={`/${theme}/contacto`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:gap-3 transition-all">
                Más información <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SLIDER premium — viviendas destacadas */}
      <section className="container mx-auto py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">La colección</span>
            <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
              Inversiones <span className="italic text-accent font-normal">destacadas</span>
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
            Encuentra tu oportunidad <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SOBRE NOSOTROS premium */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">Inmoinversión</span>
            <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
              Construimos<br />
              <span className="italic text-accent font-normal">inversiones de éxito.</span>
            </h2>
            <p className="text-primary-foreground/75 mt-8 text-lg leading-relaxed">
              Con Inmoinversión cuentas con un equipo que analiza, selecciona, reforma y gestiona cada proyecto como si fuese propio, porque una buena inversión no depende de la suerte, sino de estar asesorado.
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
              Tu inversión no debería ser <span className="italic text-accent font-normal">una preocupación</span>.
            </h2>
            <p className="text-primary-foreground/75 mt-6 text-lg">
              Te guiamos en cada paso para que inviertas tomando la decisión correcta. Con Inmoinversión cuentas con un equipo que analiza, selecciona, reforma y gestiona cada proyecto como si fuese propio, porque una buena inversión no depende de la suerte, sino de estar asesorado.
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
};

export default Home;
