import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor, youtubeId } from "@/lib/sanity";

export const YouTubeEmbed = ({ url, caption }: { url: string; caption?: string }) => {
  const id = youtubeId(url);
  if (!id) return null;
  return (
    <figure className="my-6">
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={caption || "Vídeo de la inversión"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      </div>
      {caption && <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-foreground/80 leading-relaxed mb-4">{children}</p>,
    h2: ({ children }) => <h2 className="font-display text-2xl mt-8 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="font-display text-xl mt-6 mb-2">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/70 my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 space-y-1.5 mb-4 text-foreground/80">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 space-y-1.5 mb-4 text-foreground/80">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noreferrer" className="text-primary underline hover:opacity-80">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const src = urlFor(value);
      if (!src) return null;
      return <img src={src} alt={value?.alt || ""} loading="lazy" className="rounded-lg my-6 w-full" />;
    },
    youtube: ({ value }) => <YouTubeEmbed url={value?.url} caption={value?.caption} />,
  },
};

export const RichText = ({ value }: { value?: unknown }) => {
  if (!value || !Array.isArray(value) || value.length === 0) return null;
  return <PortableText value={value as never} components={components} />;
};
