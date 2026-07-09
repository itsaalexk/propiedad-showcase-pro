import { SiteLayout, useTheme, ContactButtons, CONTACT_WHATSAPP, CONTACT_EMAIL } from "@/components/Site";
import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeEuro, Clock, ShieldCheck, Handshake, FileCheck, Banknote } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";

const REASONS = [
  { icon: Banknote, t: "Compramos directamente", d: "Somos los compradores. Sin intermediarios ni cadenas de venta interminables." },
  { icon: Clock, t: "Cierre rápido", d: "Valoramos tu inmueble y te hacemos una oferta en cuestión de días, no meses." },
  { icon: ShieldCheck, t: "Sin comisiones", d: "Al vendernos directamente, te ahorras las comisiones de una venta tradicional." },
];

const STEPS = [
  { icon: FileCheck, n: "1", t: "Cuéntanos tu propiedad", d: "Nos envías los datos básicos del inmueble y tu situación." },
  { icon: BadgeEuro, n: "2", t: "Valoración y oferta", d: "Estudiamos el activo y te presentamos una oferta clara y sin compromiso." },
  { icon: Handshake, n: "3", t: "Cerramos la compra", d: "Nos encargamos de los trámites y firmamos. Tú recibes tu dinero." },
];

const Sell = () => {
  const theme = useTheme();
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroInterior} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />
        </div>
        <div className="relative container mx-auto py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Vende tu propiedad</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] tracking-tight">
              ¿Quieres vender?<br />
              <span className="text-accent italic font-normal">Nosotros compramos.</span>
            </h1>
            <p className="mt-8 text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Estamos activamente buscando inmuebles para invertir. Si tienes una propiedad que quieres vender, ponte en contacto con nosotros: te hacemos una oferta directa, ágil y sin complicaciones.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to={`/${theme}/contacto`} className="inline-flex items-center gap-3 rounded-pill bg-accent text-accent-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-spring">
                Solicitar oferta <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ VENDERNOS */}
      <section className="container mx-auto py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">Ventajas</span>
          <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
            Vender nunca fue <span className="italic text-accent font-normal">tan simple</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.t} className="corner-frame p-8 border border-border rounded-card">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-card border border-accent/40 text-accent mb-6">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight">{r.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-surface border-y border-border py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">El proceso</span>
            <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
              Tres pasos para <span className="italic text-accent font-normal">vender</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center md:text-left">
                <div className="corner-frame inline-flex h-16 w-16 items-center justify-center rounded-card border border-accent/40 text-accent">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
                  <span className="flex h-7 w-7 items-center justify-center rounded-pill bg-accent text-accent-foreground text-xs font-bold">{s.n}</span>
                  <h3 className="font-display text-lg uppercase tracking-tight leading-tight">{s.t}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CONTACTO */}
      <section className="container mx-auto py-24">
        <div className="rounded-card overflow-hidden relative bg-primary text-primary-foreground p-12 md:p-20 corner-frame">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent deco-dot">Contacto</span>
            <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 leading-none">
              Cuéntanos sobre tu <span className="italic text-accent font-normal">propiedad</span>
            </h2>
            <p className="text-primary-foreground/75 mt-6 text-lg">
              Escríbenos por WhatsApp o correo y estudiaremos tu inmueble para hacerte una oferta.
            </p>
            <div className="mt-10 max-w-md">
              <ContactButtons
                whatsapp={CONTACT_WHATSAPP}
                email={CONTACT_EMAIL}
                title="venta de mi propiedad"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Sell;
