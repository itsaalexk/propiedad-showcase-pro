import { Link } from "react-router-dom";
import { SiteLayout, useTheme } from "@/components/Site";
import { Shield, Sparkles, Users, ChartLine, Camera, Handshake, ArrowRight } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";

const Owners = () => {
  const theme = useTheme();
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroInterior} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />
        <div className="relative container mx-auto py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Servicio para propietarios</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 max-w-3xl text-balance">
            Tu vivienda, en las mejores manos.
          </h1>
          <p className="mt-5 text-primary-foreground/80 max-w-2xl text-lg">
            Walsadua se ocupa de todo: desde la presentación profesional de tu propiedad hasta la selección de inquilinos o compradores. Tú solo recibes los resultados.
          </p>
          <Link to={`/${theme}/contacto`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-smooth">
            Solicitar valoración gratuita <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto py-20">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Cómo trabajamos</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Un servicio integral, un único interlocutor.</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            { icon: Camera, t: "01. Presentación profesional", d: "Reportaje fotográfico, redacción cuidada y plano de la vivienda incluidos." },
            { icon: Users, t: "02. Selección de candidatos", d: "Filtramos y verificamos cada interesado antes de que llegue a tu puerta." },
            { icon: Handshake, t: "03. Gestión y cierre", d: "Negociación, contratos y trámites. Tú firmas tranquilo." },
          ].map((s, i) => (
            <div key={i} className="bg-surface border border-border rounded-lg p-7">
              <s.icon className="h-7 w-7 text-primary mb-5" />
              <h3 className="font-display text-xl mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Por qué Walsadua</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 mb-6 text-balance">
              Una inmobiliaria pensada para propietarios exigentes.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Trabajamos con un número limitado de viviendas para ofrecer atención personal a cada propietario. No publicamos por publicar: seleccionamos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, n: "100%", l: "Verificación de candidatos" },
              { icon: Sparkles, n: "+15 años", l: "De experiencia en el sector" },
              { icon: ChartLine, n: "92%", l: "De viviendas gestionadas en <60 días" },
              { icon: Users, n: "+450", l: "Propietarios confían en nosotros" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <s.icon className="h-5 w-5 text-accent mb-3" />
                <div className="font-display text-2xl text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20">
        <div className="bg-primary text-primary-foreground rounded-xl p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl max-w-2xl mx-auto text-balance">
            ¿Quieres saber qué podemos hacer por tu vivienda?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Concierta una visita sin compromiso. Te explicamos nuestro servicio en persona.
          </p>
          <Link to={`/${theme}/contacto`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-smooth">
            Hablar con el equipo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Owners;
