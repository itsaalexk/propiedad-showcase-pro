import { SiteLayout } from "@/components/Site";
import { Award, Heart, Target } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";

const About = () => {
  return (
    <SiteLayout>
      <section className="container mx-auto py-16">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sobre nosotros</span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl text-balance">
          Una inmobiliaria con criterio, no con catálogo.
        </h1>
      </section>

      <section className="container mx-auto pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <img src={heroVilla} alt="Equipo inmoinversión" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl mb-5">Nuestra historia</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            inmoinversión nace de la convicción de que una vivienda merece más que un anuncio. Llevamos más de quince años acompañando a propietarios particulares que buscan una gestión cuidada, transparente y profesional de su patrimonio.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Hoy gestionamos un catálogo seleccionado de viviendas en toda España, con un equipo pequeño y comprometido que trata cada propiedad como si fuera la suya.
          </p>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-16">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl text-center mb-12">Nuestros valores</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Heart, t: "Trato humano", d: "Cada propietario tiene un interlocutor único. Sin call centers, sin departamentos." },
              { icon: Award, t: "Selección rigurosa", d: "No aceptamos cualquier vivienda ni cualquier candidato. La calidad importa." },
              { icon: Target, t: "Resultados claros", d: "Informes mensuales, transparencia total. Sabes exactamente qué está pasando." },
            ].map((v, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-7 text-center">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20 text-center">
        <p className="font-display text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed italic text-balance">
          "No vendemos casas. Acompañamos decisiones importantes."
        </p>
        <div className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">— Equipo inmoinversión</div>
      </section>
    </SiteLayout>
  );
};

export default About;
