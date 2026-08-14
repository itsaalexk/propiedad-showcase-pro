import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Property } from "@/data/properties";

/**
 * Integración con Sanity mediante variables de entorno (.env / .env.local):
 *
 *   VITE_SANITY_PROJECT_ID=xxxxxxx
 *   VITE_SANITY_DATASET=production
 *   VITE_SANITY_API_VERSION=2024-01-01        (opcional)
 *   VITE_SANITY_USE_CDN=true                  (opcional)
 *   VITE_SANITY_WRITE_TOKEN=sk...             (opcional, solo para guardar
 *                                              las solicitudes de contacto)
 *
 * Si no hay PROJECT_ID configurado, la web usa los datos de ejemplo locales.
 */
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string) || "production";
const apiVersion = (import.meta.env.VITE_SANITY_API_VERSION as string) || "2024-01-01";
const writeToken = import.meta.env.VITE_SANITY_WRITE_TOKEN as string | undefined;

export const isSanityEnabled = Boolean(projectId);

export const sanityClient: SanityClient | null = isSanityEnabled
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: import.meta.env.VITE_SANITY_USE_CDN !== "false",
      perspective: "published",
    })
  : null;

const writeClient: SanityClient | null =
  isSanityEnabled && writeToken
    ? createClient({ projectId: projectId!, dataset, apiVersion, useCdn: false, token: writeToken })
    : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export const urlFor = (source: unknown, width = 1600) => {
  if (!builder || !source) return "";
  try {
    return builder.image(source as never).width(width).auto("format").url();
  } catch {
    return "";
  }
};

/** Extrae el ID de un enlace de YouTube (watch, youtu.be, shorts o embed). */
export const youtubeId = (url?: string) => {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
};

export type SanityVideo = { url: string; caption?: string };

export type Investment = Property & {
  /** Descripción en texto enriquecido (Portable Text) */
  body?: unknown[];
  videos?: SanityVideo[];
  price?: string;
};

const INVESTMENT_FIELDS = `
  "id": _id,
  "slug": slug.current,
  title,
  category,
  price,
  "body": description,
  videos,
  location,
  city,
  province,
  featured,
  "mainImage": mainImage,
  "gallery": gallery,
  coords
`;

const mapInvestment = (doc: Record<string, unknown>): Investment => {
  const main = urlFor(doc.mainImage);
  const gallery = Array.isArray(doc.gallery)
    ? (doc.gallery as unknown[]).map((g) => urlFor(g)).filter(Boolean)
    : [];
  const coords = doc.coords as { lat?: number; lng?: number } | undefined;
  return {
    id: String(doc.id ?? ""),
    slug: String(doc.slug ?? ""),
    ref: "",
    title: String(doc.title ?? ""),
    type: "",
    category: (doc.category as Investment["category"]) ?? "otros",
    status: "disponible",
    location: (doc.location as string) ?? "",
    city: (doc.city as string) ?? "",
    province: (doc.province as string) ?? "",
    beds: 0,
    baths: 0,
    sqft: 0,
    year: 0,
    furnished: false,
    image: main,
    gallery: gallery.length ? gallery : main ? [main] : [],
    description: "",
    features: [],
    highlights: [],
    energyRating: "A",
    coords:
      coords && typeof coords.lat === "number" && typeof coords.lng === "number"
        ? [coords.lat, coords.lng]
        : undefined,
    owner: { name: "", whatsapp: "", email: "" },
    body: (doc.body as unknown[]) ?? undefined,
    videos: (doc.videos as SanityVideo[]) ?? undefined,
    price: (doc.price as string) ?? undefined,
  };
};

export const fetchInvestments = async (): Promise<Investment[]> => {
  if (!sanityClient) return [];
  const docs = await sanityClient.fetch<Record<string, unknown>[]>(
    `*[_type == "investment" && defined(slug.current)] | order(_createdAt desc){${INVESTMENT_FIELDS}}`
  );
  return docs.map(mapInvestment);
};

export const fetchInvestment = async (slug: string): Promise<Investment | null> => {
  if (!sanityClient) return null;
  const doc = await sanityClient.fetch<Record<string, unknown> | null>(
    `*[_type == "investment" && slug.current == $slug][0]{${INVESTMENT_FIELDS}}`,
    { slug }
  );
  return doc ? mapInvestment(doc) : null;
};

export type SocialLink = { enabled?: boolean; url?: string };
export type SiteSettings = {
  brandName?: string;
  logoUrl?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  openingHours?: string;
  office?: { street?: string; postalCode?: string; city?: string; note?: string };
  social?: Partial<Record<"instagram" | "facebook" | "youtube" | "linkedin", SocialLink>>;
};

export const fetchSiteSettings = async (): Promise<SiteSettings | null> => {
  if (!sanityClient) return null;
  const doc = await sanityClient.fetch<(SiteSettings & { logo?: unknown }) | null>(
    `*[_type == "siteSettings"][0]`
  );
  if (!doc) return null;
  const logoUrl = doc.logo ? urlFor(doc.logo, 400) : undefined;
  return { ...doc, logoUrl: logoUrl || undefined };
};

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  investmentRange: string;
  message: string;
  source?: string;
};

/** Guarda la solicitud de contacto en Sanity. Devuelve true si se ha guardado. */
export const submitContactRequest = async (payload: ContactPayload) => {
  if (!writeClient) return false;
  await writeClient.create({
    _type: "contactRequest",
    ...payload,
    createdAt: new Date().toISOString(),
  });
  return true;
};
