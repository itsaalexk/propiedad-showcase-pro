import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import heroDark from "@/assets/hero-dark.jpg";

const templates = [
  {
    n: 1,
    name: "Esencial",
    tagline: "Claridad mediterránea",
    description: "Diseño limpio y luminoso. Pensado para destacar la vivienda con tipografía editorial y mucha respiración.",
    img: heroVilla,
  },
  {
    n: 2,
    name: "Editorial",
    tagline: "Revista de arquitectura",
    description: "Maquetación tipo magazine, con grandes titulares, columnas y un slider horizontal de propiedades destacadas.",
    img: heroInterior,
  },
  {
    n: 3,
    name: "Premium",
    tagline: "Boutique nocturno",
    description: "Estética oscura y sofisticada. Para propietarios que quieren transmitir exclusividad y carácter.",
    img: heroDark,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-warm" />
            <span className="font-display text-2xl font-semibold">Walsadua</span>
          </div>
          <span className="text-sm text-muted-foreground hidden sm:inline">
            Selector de plantillas · Demo cliente
          </span>
        </div>
      </header>

      <section className="container mx-auto py-20 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Portal inmobiliario para propietarios
        </span>
        <h1 className="font-display text-5xl md:text-7xl mb-6 text-balance">
          Tres plantillas. <em className="text-accent not-italic">Una visión.</em>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Hemos preparado tres direcciones de diseño para Walsadua. Explora cada una y elige la que mejor refleje el espíritu del proyecto.
        </p>
      </section>

      <section className="container mx-auto pb-24 grid md:grid-cols-3 gap-6">
        {templates.map((t) => (
          <Link
            key={t.n}
            to={`/template/${t.n}`}
            className="group block overflow-hidden rounded-3xl bg-card border border-border hover-lift"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-6 left-6 text-white text-xs uppercase tracking-[0.3em] opacity-90">
                Plantilla 0{t.n}
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm opacity-80 mb-1">{t.tagline}</p>
                <h2 className="font-display text-3xl">{t.name}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-6">{t.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-smooth">
                Ver plantilla <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Walsadua · Demo de presentación
      </footer>
    </div>
  );
};

export default Index;
