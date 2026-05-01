import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

export const buildWhatsappLink = (phone: string, title: string) =>
  `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, estoy interesado/a en la vivienda "${title}" publicada en Walsadua.`
  )}`;

export const buildEmailLink = (email: string, title: string) =>
  `mailto:${email}?subject=${encodeURIComponent(
    `Interesado en ${title}`
  )}&body=${encodeURIComponent(`Hola, me gustaría recibir más información sobre "${title}".`)}`;

interface Props {
  whatsapp: string;
  email: string;
  title: string;
  variant?: "default" | "dark";
}

export const ContactButtons = ({ whatsapp, email, title, variant = "default" }: Props) => {
  const wa = buildWhatsappLink(whatsapp, title);
  const mail = buildEmailLink(email, title);
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-medium hover:opacity-90 transition-smooth shadow-soft"
      >
        <MessageCircle className="h-5 w-5" />
        Contactar por WhatsApp
      </a>
      <a
        href={mail}
        className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-smooth ${
          isDark
            ? "bg-accent text-accent-foreground hover:opacity-90"
            : "bg-primary text-primary-foreground hover:opacity-90"
        }`}
      >
        <Mail className="h-5 w-5" />
        Enviar correo
      </a>
    </div>
  );
};

export const TemplateSwitcher = ({ current }: { current: 1 | 2 | 3 }) => {
  const items = [
    { n: 1, label: "Esencial" },
    { n: 2, label: "Editorial" },
    { n: 3, label: "Premium" },
  ];
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-background/90 backdrop-blur-md border border-border rounded-full shadow-elegant px-2 py-2 flex items-center gap-1">
      <span className="text-xs text-muted-foreground px-3 hidden sm:inline">Plantilla</span>
      {items.map((it) => (
        <Link
          key={it.n}
          to={`/template/${it.n}`}
          className={`text-xs px-4 py-2 rounded-full transition-smooth ${
            current === it.n
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted"
          }`}
        >
          {it.n}. {it.label}
        </Link>
      ))}
      <Link
        to="/"
        className="text-xs px-4 py-2 rounded-full text-muted-foreground hover:bg-muted transition-smooth"
      >
        Inicio
      </Link>
    </div>
  );
};
