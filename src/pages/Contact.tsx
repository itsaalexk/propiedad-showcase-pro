import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/Site";

const Contact = () => {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Contacto</span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 max-w-3xl text-balance">
            Hablemos de tu próximo hogar.
          </h1>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl">
            Nuestro equipo te atiende de lunes a viernes. Elige el canal que prefieras: te respondemos en menos de 24h.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 grid lg:grid-cols-3 gap-8">
        {/* INFO */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6 shadow-card">
            <Phone className="h-7 w-7 text-primary mb-3" />
            <h3 className="font-display text-lg mb-1">Teléfono</h3>
            <a href="tel:+34675832994" className="text-foreground hover:text-primary transition-smooth">+34 675 83 29 94</a>
            <p className="text-xs text-muted-foreground mt-2">Lun a Vie · 9h–19h</p>
          </div>
          <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer" className="block bg-card border border-border rounded-lg p-6 shadow-card hover-lift">
            <MessageCircle className="h-7 w-7 text-[#25D366] mb-3" />
            <h3 className="font-display text-lg mb-1">WhatsApp directo</h3>
            <p className="text-foreground">+34 675 83 29 94</p>
            <p className="text-xs text-muted-foreground mt-2">Respuesta inmediata en horario comercial</p>
          </a>
          <a href="mailto:info@inmoinversion.com" className="block bg-card border border-border rounded-lg p-6 shadow-card hover-lift">
            <Mail className="h-7 w-7 text-primary mb-3" />
            <h3 className="font-display text-lg mb-1">Correo electrónico</h3>
            <p className="text-foreground">info@inmoinversion.com</p>
            <p className="text-xs text-muted-foreground mt-2">Respuesta en menos de 24h</p>
          </a>
          <div className="bg-card border border-border rounded-lg p-6 shadow-card">
            <MapPin className="h-7 w-7 text-primary mb-3" />
            <h3 className="font-display text-lg mb-1">Oficina</h3>
            <p className="text-foreground">Calle Mayor 12, 3º</p>
            <p className="text-foreground">28013 Madrid</p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Visitas con cita previa</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:info@inmoinversion.com"; }}
          className="lg:col-span-2 bg-card border border-border rounded-lg p-8 md:p-10 shadow-card space-y-5"
        >
          <div>
            <h2 className="font-display text-2xl">Escríbenos</h2>
            <p className="text-sm text-muted-foreground mt-1">Cuéntanos qué buscas y nos pondremos en contacto contigo.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nombre completo *</label>
              <input required className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email *</label>
              <input required type="email" className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Teléfono</label>
              <input type="tel" className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Asunto *</label>
              <select required className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth">
                <option>Información sobre una vivienda</option>
                <option>Soy propietario y quiero saber más</option>
                <option>Concertar una visita</option>
                <option>Otra consulta</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mensaje *</label>
            <textarea required rows={6} className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary transition-smooth resize-none" />
          </div>

          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <input type="checkbox" required className="mt-0.5" />
            <span>He leído y acepto la política de privacidad de inmoinversión.</span>
          </label>

          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:opacity-90 transition-smooth">
            <Send className="h-4 w-4" /> Enviar mensaje
          </button>
        </form>
      </section>
    </SiteLayout>
  );
};

export default Contact;
