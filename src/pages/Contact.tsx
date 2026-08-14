import { useEffect, useMemo, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/Site";
import { useSiteSettings } from "@/hooks/useContent";
import { submitContactRequest } from "@/lib/sanity";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from "@/lib/contact";
import { toast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";

const SUBJECTS = [
  "Información sobre una inversión",
  "Soy propietario y quiero saber más",
  "Otra consulta",
];

const INVESTMENT_RANGES = [
  "Desde 1.000 € hasta 49.999 €",
  "Desde 50.000 € hasta 100.000 €",
  "Más de 100.000 €",
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const settings = useSiteSettings();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState(SUBJECTS[0]);

  const isOwnerSubject = subject === "Soy propietario y quiero saber más";

  useEffect(() => {
    const param = searchParams.get("asunto");
    if (param === "propietario") {
      setSubject("Soy propietario y quiero saber más");
    }
  }, [searchParams]);

  const phone = settings.phone || CONTACT_PHONE;
  const whatsapp = (settings.whatsapp || CONTACT_WHATSAPP).replace(/\D/g, "");
  const email = settings.email || CONTACT_EMAIL;
  const office = settings.office;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim().slice(0, 120),
      email: String(data.get("email") || "").trim().slice(0, 200),
      phone: String(data.get("phone") || "").trim().slice(0, 40),
      subject: String(data.get("subject") || ""),
      investmentRange: isOwnerSubject ? "" : String(data.get("investmentRange") || ""),
      message: String(data.get("message") || "").trim().slice(0, 2000),
      source: "web-contacto",
    };

    setSending(true);
    try {
      const saved = await submitContactRequest(payload);
      if (saved) {
        setSent(true);
        form.reset();
        setSubject(SUBJECTS[0]);
        toast({ title: "Mensaje enviado", description: "Te responderemos en menos de 24h." });
      } else {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          payload.subject
        )}&body=${encodeURIComponent(
          `${payload.message}\n\n---\n${payload.name} · ${payload.email} · ${payload.phone}\nRango: ${payload.investmentRange}`
        )}`;
      }
    } catch {
      toast({ title: "No se pudo enviar", description: "Inténtalo de nuevo o escríbenos por WhatsApp.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Contacto</span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 max-w-3xl text-balance">
            Hablemos de tu próxima inversión inmobiliaria.
          </h1>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl">
            Nuestro equipo te asesora de lunes a viernes. Elige el canal que prefieras: te respondemos en menos de 24h.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 grid lg:grid-cols-3 gap-8">
        {/* INFO */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6 shadow-card">
            <Phone className="h-7 w-7 text-primary mb-3" />
            <h3 className="font-display text-lg mb-1">Teléfono</h3>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-foreground hover:text-primary transition-smooth">{phone}</a>
            <p className="text-xs text-muted-foreground mt-2">{settings.openingHours}</p>
          </div>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="block bg-card border border-border rounded-lg p-6 shadow-card hover-lift">
            <MessageCircle className="h-7 w-7 text-[#25D366] mb-3" />
            <h3 className="font-display text-lg mb-1">WhatsApp directo</h3>
            <p className="text-foreground">{phone}</p>
            <p className="text-xs text-muted-foreground mt-2">Respuesta inmediata en horario comercial</p>
          </a>
          <a href={`mailto:${email}`} className="block bg-card border border-border rounded-lg p-6 shadow-card hover-lift">
            <Mail className="h-7 w-7 text-primary mb-3" />
            <h3 className="font-display text-lg mb-1">Correo electrónico</h3>
            <p className="text-foreground">{email}</p>
            <p className="text-xs text-muted-foreground mt-2">Respuesta en menos de 24h</p>
          </a>
          {office?.street && (
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <MapPin className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-display text-lg mb-1">Oficina</h3>
              <p className="text-foreground">{office.street}</p>
              <p className="text-foreground">{[office.postalCode, office.city].filter(Boolean).join(" ")}</p>
              {office.note && (
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {office.note}</p>
              )}
            </div>
          )}
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-card border border-border rounded-lg p-8 md:p-10 shadow-card space-y-5"
        >
          <div>
            <h2 className="font-display text-2xl">Escríbenos</h2>
            <p className="text-sm text-muted-foreground mt-1">Cuéntanos qué buscas y nos pondremos en contacto contigo.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nombre completo *</label>
              <input name="name" required maxLength={120} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email *</label>
              <input name="email" required type="email" maxLength={200} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Teléfono</label>
              <input name="phone" type="tel" maxLength={40} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Asunto *</label>
              <select name="subject" required className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth">
                <option>Información sobre una inversión</option>
                <option>Soy propietario y quiero saber más</option>
                <option>Otra consulta</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rango de inversión *</label>
              <select name="investmentRange" required className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth">
                <option>Desde 1.000 € hasta 49.999 €</option>
                <option>Desde 50.000 € hasta 100.000 €</option>
                <option>Más de 100.000 €</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mensaje *</label>
            <textarea name="message" required rows={6} maxLength={2000} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth resize-none" />
          </div>

          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <input type="checkbox" required className="mt-0.5" />
            <span>He leído y acepto la política de privacidad de inmoinversión.</span>
          </label>

          <button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:opacity-90 transition-smooth disabled:opacity-60">
            <Send className="h-4 w-4" /> {sending ? "Enviando…" : "Enviar mensaje"}
          </button>
          {sent && <p className="text-sm text-primary">¡Gracias! Hemos recibido tu mensaje.</p>}
        </form>
      </section>
    </SiteLayout>
  );
};

export default Contact;
