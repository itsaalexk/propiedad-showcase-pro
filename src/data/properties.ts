import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  id: string;
  slug: string;
  title: string;
  type: string;
  location: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  year: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  owner: { name: string; whatsapp: string; email: string };
};

export const properties: Property[] = [
  {
    id: "1",
    slug: "loft-luminoso-centro",
    title: "Loft Luminoso en el Centro",
    type: "Apartamento",
    location: "Calle Mayor 12, Madrid",
    city: "Madrid",
    beds: 2,
    baths: 1,
    sqft: 95,
    year: 2021,
    image: p1,
    gallery: [p1, p4, p2, p6],
    description:
      "Un loft contemporáneo bañado por la luz natural, con acabados de autor y vistas a un patio interior arbolado. Ideal para quien busca un hogar tranquilo en el corazón de la ciudad.",
    features: ["Luz natural todo el día", "Cocina equipada", "Calefacción central", "Ascensor", "Patio interior", "Suelo de madera"],
    owner: { name: "María", whatsapp: "+34600000001", email: "maria@walsadua.com" },
  },
  {
    id: "2",
    slug: "villa-mediterranea-piscina",
    title: "Villa Mediterránea con Piscina",
    type: "Villa",
    location: "Camino del Mar 7, Marbella",
    city: "Marbella",
    beds: 4,
    baths: 3,
    sqft: 280,
    year: 2019,
    image: p2,
    gallery: [p2, p6, p1, p4],
    description:
      "Villa de estilo mediterráneo con piscina privada, jardín maduro y zonas chill-out. Perfecta para familias que buscan vivir el clima del sur durante todo el año.",
    features: ["Piscina privada", "Jardín 400m²", "Garaje 2 coches", "Aire acondicionado", "Domótica", "Trastero"],
    owner: { name: "Javier", whatsapp: "+34600000002", email: "javier@walsadua.com" },
  },
  {
    id: "3",
    slug: "townhouse-jardin-urbano",
    title: "Townhouse con Jardín Urbano",
    type: "Adosado",
    location: "Av. del Parque 33, Barcelona",
    city: "Barcelona",
    beds: 3,
    baths: 2,
    sqft: 160,
    year: 2020,
    image: p3,
    gallery: [p3, p1, p5, p4],
    description:
      "Adosado de obra reciente con jardín privado, fachada de ladrillo y diseño contemporáneo. Tranquilidad de barrio sin renunciar a la vida urbana.",
    features: ["Jardín privado", "3 plantas", "Trastero", "Plaza de aparcamiento", "Eficiencia energética A"],
    owner: { name: "Lucía", whatsapp: "+34600000003", email: "lucia@walsadua.com" },
  },
  {
    id: "4",
    slug: "atico-vistas-skyline",
    title: "Ático con Vistas al Skyline",
    type: "Ático",
    location: "Torre Alta 21, Valencia",
    city: "Valencia",
    beds: 3,
    baths: 2,
    sqft: 145,
    year: 2022,
    image: p4,
    gallery: [p4, p1, p2, p6],
    description:
      "Ático en planta 21 con ventanales de suelo a techo y terraza envolvente. Vistas espectaculares al amanecer y atardecer.",
    features: ["Terraza 40m²", "Vistas panorámicas", "Conserje 24h", "Piscina comunitaria", "Gimnasio"],
    owner: { name: "Andrés", whatsapp: "+34600000004", email: "andres@walsadua.com" },
  },
  {
    id: "5",
    slug: "casa-piedra-vinedos",
    title: "Casa de Piedra entre Viñedos",
    type: "Casa rural",
    location: "Camino del Valle s/n, La Rioja",
    city: "La Rioja",
    beds: 4,
    baths: 2,
    sqft: 220,
    year: 1890,
    image: p5,
    gallery: [p5, p3, p2, p1],
    description:
      "Casa rural rehabilitada con paredes de piedra original, vigas de madera y vistas a viñedos. Una escapada para reconectar con la naturaleza.",
    features: ["Chimenea", "Huerto", "Bodega", "1.500m² de terreno", "Piscina ecológica"],
    owner: { name: "Elena", whatsapp: "+34600000005", email: "elena@walsadua.com" },
  },
  {
    id: "6",
    slug: "casa-frente-al-mar",
    title: "Casa Frente al Mar",
    type: "Casa",
    location: "Paseo Marítimo 5, Cádiz",
    city: "Cádiz",
    beds: 5,
    baths: 4,
    sqft: 320,
    year: 2023,
    image: p6,
    gallery: [p6, p2, p4, p1],
    description:
      "Arquitectura contemporánea en primera línea de playa. Ventanales a piso completo, piscina infinita y acceso directo a la arena.",
    features: ["Primera línea de playa", "Piscina infinita", "Domótica", "Garaje 3 coches", "Suite principal"],
    owner: { name: "Carlos", whatsapp: "+34600000006", email: "carlos@walsadua.com" },
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
