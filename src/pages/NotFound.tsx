import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Compass, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/Site";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: ruta inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-24 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Error 404</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 text-balance">
            Esta página no está disponible
          </h1>
          <p className="mt-5 text-primary-foreground/75 max-w-xl mx-auto">
            El enlace que has seguido puede haber cambiado o la inversión ya no está publicada.
            Te ayudamos a encontrar la oportunidad que buscas.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/t3/inversiones"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-smooth"
            >
              <Compass className="h-4 w-4" /> Ver inversiones
            </Link>
            <Link
              to="/t3/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-primary-foreground/25 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-smooth"
            >
              <MessageCircle className="h-4 w-4" /> Hablar con nosotros
            </Link>
            <Link
              to="/t3"
              className="inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-sm font-semibold text-primary-foreground/70 hover:text-accent transition-smooth"
            >
              <ArrowLeft className="h-4 w-4" /> Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
