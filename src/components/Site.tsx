import { Link, useLocation } from "react-router-dom";
import { Mail, MessageCircle, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

export type ThemeKey = "t3";

// El proyecto usa un único diseño (Premium).
export const useTheme = (): ThemeKey => "t3";

export const CONTACT_PHONE = "+34 675 83 29 94";
export const CONTACT_WHATSAPP = "+34675832994";
export const CONTACT_EMAIL = "info@inmoinversion.com";

export const buildWhatsappLink = (phone: string, title: string) =>
  `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, me interesa la vivienda "${title}" que he visto en inmoinversión.`
  )}`;

export const buildEmailLink = (email: string, title: string) =>
  `mailto:${email}?subject=${encodeURIComponent(
    `Interés en ${title}`
  )}&body=${encodeURIComponent(`Buenos días, me gustaría recibir más información sobre la vivienda "${title}". Quedo a la espera de su respuesta. Gracias.`)}`;

interface CBProps {
  whatsapp: string;
  email: string;
  title: string;
  size?: "md" | "lg";
}

export const ContactButtons = ({ whatsapp, email, title, size = "md" }: CBProps) => {
  const padding = size === "lg" ? "px-6 py-3.5" : "px-5 py-3";
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <a
        href={buildWhatsappLink(whatsapp, title)}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-1 inline-flex items-center justify-center gap-2 rounded-pill bg-[#25D366] text-white ${padding} text-sm font-semibold hover:opacity-90 transition-smooth`}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <a
        href={buildEmailLink(email, title)}
        className={`flex-1 inline-flex items-center justify-center gap-2 rounded-pill bg-primary text-primary-foreground ${padding} text-sm font-semibold hover:opacity-90 transition-smooth`}
      >
        <Mail className="h-4 w-4" />
        Enviar correo
      </a>
    </div>
  );
};

export const SiteHeader = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const base = `/${theme}`;
  const links = [
    { to: `${base}`, label: "Inicio" },
    { to: `${base}/viviendas`, label: "Viviendas" },
    
    { to: `${base}/vender`, label: "Vender" },
    { to: `${base}/sobre-nosotros`, label: "Sobre nosotros" },
    { to: `${base}/contacto`, label: "Contacto" },
  ];

  const Logo = () => (
    <Link to={base} className="flex items-center gap-2.5">
      <div className="h-9 w-9 rounded-pill bg-primary flex items-center justify-center ring-1 ring-accent/40">
        <span className="text-accent font-display text-base leading-none">II</span>
      </div>
      <span className="font-display text-xl text-foreground tracking-tight lowercase">inmoinversión</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto h-18 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 text-sm font-medium rounded-pill transition-smooth ${
                  active ? "text-primary bg-secondary" : "text-foreground/70 hover:text-primary hover:bg-secondary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+34675832994" className="hidden lg:inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-smooth">
            <Phone className="h-4 w-4" /> 675 83 29 94
          </a>
          <Link
            to={`${base}/contacto`}
            className="inline-flex items-center gap-2 rounded-pill bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-smooth"
          >
            Solicitar info
          </Link>
        </div>
      </div>
    </header>
  );
};

export const SiteFooter = () => {
  const theme = useTheme();
  const base = `/${theme}`;
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display text-lg leading-none">W</span>
            </div>
            <span className="font-display text-xl">inmoinversión</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Inmobiliaria especializada en gestión y promoción de viviendas para propietarios particulares.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-accent">Navegación</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to={`${base}/viviendas`} className="hover:text-accent transition-smooth">Viviendas disponibles</Link></li>
            
            <li><Link to={`${base}/vender`} className="hover:text-accent transition-smooth">Vender tu propiedad</Link></li>
            <li><Link to={`${base}/sobre-nosotros`} className="hover:text-accent transition-smooth">Sobre nosotros</Link></li>
            <li><Link to={`${base}/contacto`} className="hover:text-accent transition-smooth">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-accent">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Calle Mayor 12, 28013 Madrid</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +34 675 83 29 94</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@inmoinversion.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-accent">Síguenos</h4>
          <div className="flex gap-2">
            {[Instagram, Facebook, Linkedin].map((Ic, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-md border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto py-5 text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} inmoinversión Inmobiliaria. Todos los derechos reservados.</span>
          <span>Aviso legal · Política de privacidad · Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export const WhatsAppFab = () => (
  <a
    href={`https://wa.me/${CONTACT_WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(
      "Hola, me gustaría recibir más información sobre inmoinversión."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-pill bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-105 transition-spring"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

interface LayoutProps {
  children: React.ReactNode;
}
export const SiteLayout = ({ children }: LayoutProps) => {
  const theme = useTheme();
  return (
    <div data-theme={theme} className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
};
