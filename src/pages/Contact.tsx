import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { TemplateSwitcher } from "@/components/Shared";

const Contact = () => {
  const { template } = useParams();
  const t = (Number(template) || 1) as 1 | 2 | 3;
  const isDark = t === 3;

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0e0c0a] text-white" : "bg-background text-foreground"}`}>
      <header className={`border-b ${isDark ? "border-white/10" : "border-border"}`}>
        <div className="container mx-auto py-5 flex items-center justify-between">
          <Link to={`/template/${t}`} className="flex items-center gap-2">
            <div className={`h-8 w-8 rounded-lg ${isDark ? "bg-accent" : "gradient-warm"}`} />
            <span className="font-display text-2xl font-semibold">Walsadua</span>
          </Link>
          <Link to={`/template/${t}`} className="inline-flex items-center gap-2 text-sm hover:text-accent transition-smooth">
            <ArrowLeft className="h-4 w-4" /> Volver
          </Link>
        </div>
      </header>

      <section className="container mx-auto py-20">
        <div className="max-w-3xl">
          <span className={`text-xs uppercase tracking-[0.3em] ${isDark ? "text-accent" : "text-muted-foreground"}`}>Contacto</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 mb-6 text-balance">
            Hablemos de tu <em className="text-accent not-italic">vivienda.</em>
          </h1>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
            Somos un equipo pequeño y atento. Si eres propietario y quieres publicar tu vivienda, o si tienes cualquier duda, escríbenos. Respondemos en menos de 24h.
          </p>
        </div>
      </section>

      <section className="container mx-auto pb-24 grid lg:grid-cols-2 gap-10">
        {/* FORM */}
        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:hola@walsadua.com"; }}
          className={`rounded-3xl p-8 md:p-10 space-y-5 ${isDark ? "bg-white/5 border border-white/10" : "bg-card border border-border shadow-soft"}`}
        >
          <h2 className="font-display text-2xl mb-2">Envíanos un mensaje</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider opacity-70">Nombre</label>
              <input required className={`mt-2 w-full rounded-xl px-4 py-3 outline-none ${isDark ? "bg-white/5 border border-white/10" : "bg-background border border-border"}`} />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider opacity-70">Email</label>
              <input required type="email" className={`mt-2 w-full rounded-xl px-4 py-3 outline-none ${isDark ? "bg-white/5 border border-white/10" : "bg-background border border-border"}`} />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider opacity-70">Asunto</label>
            <select className={`mt-2 w-full rounded-xl px-4 py-3 outline-none ${isDark ? "bg-white/5 border border-white/10" : "bg-background border border-border"}`}>
              <option>Quiero publicar mi vivienda</option>
              <option>Información general</option>
              <option>Soporte técnico</option>
              <option>Prensa y colaboraciones</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider opacity-70">Mensaje</label>
            <textarea rows={5} className={`mt-2 w-full rounded-xl px-4 py-3 outline-none resize-none ${isDark ? "bg-white/5 border border-white/10" : "bg-background border border-border"}`} />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-4 font-medium hover:opacity-90 transition-smooth">
            Enviar mensaje
          </button>
        </form>

        {/* INFO */}
        <div className="space-y-6">
          <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer" className={`block rounded-2xl p-6 hover-lift ${isDark ? "bg-white/5 border border-white/10" : "bg-card border border-border"}`}>
            <MessageCircle className="h-7 w-7 text-[#25D366] mb-3" />
            <h3 className="font-display text-xl mb-1">WhatsApp directo</h3>
            <p className={`text-sm ${isDark ? "text-white/60" : "text-muted-foreground"}`}>+34 600 000 000 — Lun a Vie, 9h–19h</p>
          </a>
          <a href="mailto:hola@walsadua.com" className={`block rounded-2xl p-6 hover-lift ${isDark ? "bg-white/5 border border-white/10" : "bg-card border border-border"}`}>
            <Mail className="h-7 w-7 text-accent mb-3" />
            <h3 className="font-display text-xl mb-1">Correo electrónico</h3>
            <p className={`text-sm ${isDark ? "text-white/60" : "text-muted-foreground"}`}>hola@walsadua.com</p>
          </a>
          <div className={`rounded-2xl p-6 ${isDark ? "bg-white/5 border border-white/10" : "bg-card border border-border"}`}>
            <MapPin className="h-7 w-7 text-accent mb-3" />
            <h3 className="font-display text-xl mb-1">Oficina</h3>
            <p className={`text-sm ${isDark ? "text-white/60" : "text-muted-foreground"}`}>Calle Imaginaria 12, 3º · 28013 Madrid</p>
          </div>
          <div className={`rounded-2xl p-6 ${isDark ? "bg-white/5 border border-white/10" : "bg-card border border-border"}`}>
            <h3 className="font-display text-xl mb-4">Síguenos</h3>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Ic, i) => (
                <a key={i} href="#" className={`h-11 w-11 rounded-full flex items-center justify-center transition-smooth ${isDark ? "border border-white/20 hover:bg-accent hover:border-accent hover:text-accent-foreground" : "border border-border hover:bg-primary hover:text-primary-foreground"}`}>
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TemplateSwitcher current={t} />
    </div>
  );
};

export default Contact;
