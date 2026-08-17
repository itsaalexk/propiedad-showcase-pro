import { SiteLayout } from "@/components/Site";
import { RichText } from "@/components/RichText";
import { useSiteSettings } from "@/hooks/useContent";

const Terms = () => {
  const settings = useSiteSettings();
  const title = settings.termsTitle || "Términos y condiciones";
  const hasTerms = Array.isArray(settings.terms) && settings.terms.length > 0;

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 max-w-3xl text-balance">{title}</h1>
          {settings.termsUpdatedAt && (
            <p className="mt-4 text-primary-foreground/70 text-sm">
              Última actualización: {new Date(settings.termsUpdatedAt).toLocaleDateString("es-ES")}
            </p>
          )}
        </div>
      </section>

      <section className="container mx-auto py-16">
        <article className="max-w-3xl bg-card border border-border rounded-lg p-8 md:p-10 shadow-card">
          {hasTerms ? (
            <RichText value={settings.terms} />
          ) : (
            <p className="text-muted-foreground">
              Los términos y condiciones se publicarán próximamente. Si necesitas información legal,
              ponte en contacto con nosotros.
            </p>
          )}
        </article>
      </section>
    </SiteLayout>
  );
};

export default Terms;
