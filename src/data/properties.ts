import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  id: string;
  slug: string;
  ref: string;
  title: string;
  type: string;
  status: "disponible" | "proximamente" | "reservada";
  availableFrom?: string;
  location: string;
  city: string;
  province: string;
  beds: number;
  baths: number;
  sqft: number;
  year: number;
  furnished: boolean;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  highlights: string[];
  energyRating: "A" | "B" | "C" | "D" | "E";
  coords: [number, number];
  owner: { name: string; whatsapp: string; email: string };
};

export const properties: Property[] = [
  {
    id: "1",
    slug: "loft-luminoso-centro-madrid",
    ref: "WAL-001",
    title: "Loft Luminoso en el Centro",
    type: "Apartamento",
    status: "disponible",
    location: "Calle Mayor 12, Madrid Centro",
    city: "Madrid",
    province: "Madrid",
    beds: 2,
    baths: 1,
    sqft: 95,
    year: 2021,
    furnished: true,
    image: p1,
    gallery: [p1, p4, p2, p6],
    description:
      "Loft contemporáneo bañado por luz natural durante todo el día. Acabados de autor, suelo de madera de roble y ventanales con vistas a un patio interior arbolado. Una vivienda diseñada para quienes valoran el detalle y la tranquilidad en pleno corazón de Madrid.",
    features: ["Cocina equipada", "Calefacción central", "Ascensor", "Patio interior", "Suelo de madera", "Doble ventana"],
    highlights: ["Luz natural todo el día", "Edificio rehabilitado 2021", "A 5 min del metro Sol"],
    energyRating: "B",
    coords: [40.4168, -3.7038],
    owner: { name: "María L.", whatsapp: "+34600000001", email: "maria@inmoinversion.com" },
  },
  {
    id: "2",
    slug: "villa-mediterranea-piscina-marbella",
    ref: "WAL-002",
    title: "Villa Mediterránea con Piscina",
    type: "Villa",
    status: "disponible",
    location: "Camino del Mar 7, Marbella",
    city: "Marbella",
    province: "Málaga",
    beds: 4,
    baths: 3,
    sqft: 280,
    year: 2019,
    furnished: false,
    image: p2,
    gallery: [p2, p6, p1, p4],
    description:
      "Villa de estilo mediterráneo con piscina privada, jardín maduro y zonas chill-out. Amplios espacios diáfanos, suite principal con vestidor y cocina office abierta al jardín. Ideal para familias que buscan vivir el clima del sur durante todo el año.",
    features: ["Piscina privada", "Jardín 400m²", "Garaje 2 coches", "Aire acondicionado", "Domótica", "Trastero"],
    highlights: ["Parcela de 600m²", "A 10 min de la playa", "Urbanización privada"],
    energyRating: "A",
    coords: [36.5101, -4.8824],
    owner: { name: "Javier M.", whatsapp: "+34600000002", email: "javier@inmoinversion.com" },
  },
  {
    id: "3",
    slug: "townhouse-jardin-barcelona",
    ref: "WAL-003",
    title: "Townhouse con Jardín Urbano",
    type: "Adosado",
    status: "proximamente",
    availableFrom: "01/03/2026",
    location: "Av. del Parque 33, Barcelona",
    city: "Barcelona",
    province: "Barcelona",
    beds: 3,
    baths: 2,
    sqft: 160,
    year: 2020,
    furnished: false,
    image: p3,
    gallery: [p3, p1, p5, p4],
    description:
      "Adosado de obra reciente con jardín privado, fachada de ladrillo visto y diseño contemporáneo. Distribución en tres plantas, certificación energética A. La tranquilidad de un barrio residencial sin renunciar a la vida urbana.",
    features: ["Jardín privado", "3 plantas", "Trastero", "Plaza aparcamiento", "Aerotermia", "Domótica básica"],
    highlights: ["Obra de 2020", "Eficiencia energética A", "Barrio residencial"],
    energyRating: "A",
    coords: [41.3874, 2.1686],
    owner: { name: "Lucía F.", whatsapp: "+34600000003", email: "lucia@inmoinversion.com" },
  },
  {
    id: "4",
    slug: "atico-vistas-skyline-valencia",
    ref: "WAL-004",
    title: "Ático con Vistas al Skyline",
    type: "Ático",
    status: "disponible",
    location: "Torre Alta 21, Valencia",
    city: "Valencia",
    province: "Valencia",
    beds: 3,
    baths: 2,
    sqft: 145,
    year: 2022,
    furnished: true,
    image: p4,
    gallery: [p4, p1, p2, p6],
    description:
      "Ático en planta 21 con ventanales de suelo a techo y terraza envolvente de 40m². Vistas espectaculares al skyline de Valencia. Edificio con conserje 24h, piscina y gimnasio. Una vivienda para quienes buscan vivir en altura.",
    features: ["Terraza 40m²", "Vistas panorámicas", "Conserje 24h", "Piscina comunitaria", "Gimnasio", "Aire acondicionado"],
    highlights: ["Planta 21", "Terraza envolvente", "Servicios premium"],
    energyRating: "A",
    coords: [39.4699, -0.3763],
    owner: { name: "Andrés R.", whatsapp: "+34600000004", email: "andres@inmoinversion.com" },
  },
  {
    id: "5",
    slug: "casa-piedra-vinedos-rioja",
    ref: "WAL-005",
    title: "Casa de Piedra entre Viñedos",
    type: "Casa rural",
    status: "disponible",
    location: "Camino del Valle s/n, La Rioja",
    city: "Haro",
    province: "La Rioja",
    beds: 4,
    baths: 2,
    sqft: 220,
    year: 1890,
    furnished: true,
    image: p5,
    gallery: [p5, p3, p2, p1],
    description:
      "Casa rural rehabilitada respetando los materiales originales: paredes de piedra, vigas de madera y suelos de barro cocido. 1.500m² de terreno con huerto, bodega y piscina ecológica. Una escapada para reconectar con la naturaleza y la enología.",
    features: ["Chimenea", "Huerto", "Bodega", "1.500m² terreno", "Piscina ecológica", "Vigas de madera"],
    highlights: ["Rehabilitación integral", "Entre viñedos", "1.500m² de terreno"],
    energyRating: "C",
    coords: [42.5772, -2.8467],
    owner: { name: "Elena V.", whatsapp: "+34600000005", email: "elena@inmoinversion.com" },
  },
  {
    id: "6",
    slug: "casa-frente-mar-cadiz",
    ref: "WAL-006",
    title: "Casa Frente al Mar",
    type: "Casa",
    status: "reservada",
    location: "Paseo Marítimo 5, Cádiz",
    city: "Cádiz",
    province: "Cádiz",
    beds: 5,
    baths: 4,
    sqft: 320,
    year: 2023,
    furnished: false,
    image: p6,
    gallery: [p6, p2, p4, p1],
    description:
      "Arquitectura contemporánea en primera línea de playa. Ventanales a piso completo orientados al océano, piscina infinita y acceso directo a la arena. Domótica integral, suite principal con vestidor y baño de mármol. Una propiedad excepcional.",
    features: ["Primera línea de playa", "Piscina infinita", "Domótica integral", "Garaje 3 coches", "Suite principal", "Baño de mármol"],
    highlights: ["Primera línea", "Obra nueva 2023", "Acceso directo a la arena"],
    energyRating: "A",
    coords: [36.5271, -6.2886],
    owner: { name: "Carlos B.", whatsapp: "+34600000006", email: "carlos@inmoinversion.com" },
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
