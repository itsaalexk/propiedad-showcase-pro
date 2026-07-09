import { defineField, defineType } from "sanity";

/**
 * PROPIEDAD / VIVIENDA
 * Contiene toda la información editable que se muestra en la web:
 * datos básicos, características, galería de imágenes, vídeo de YouTube,
 * coordenadas del mapa y datos de contacto del propietario.
 *
 * Copia este archivo en tu proyecto de Sanity (p. ej. schemaTypes/property.ts)
 * y añádelo a schemaTypes/index.ts.
 */
export const property = defineType({
  name: "property",
  title: "Propiedad",
  type: "document",
  groups: [
    { name: "main", title: "Información principal", default: true },
    { name: "specs", title: "Características" },
    { name: "media", title: "Imágenes y vídeo" },
    { name: "location", title: "Ubicación y mapa" },
    { name: "owner", title: "Propietario" },
  ],
  fields: [
    // ---------- INFORMACIÓN PRINCIPAL ----------
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      group: "main",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      group: "main",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "ref",
      title: "Referencia",
      type: "string",
      description: "Ej: INM-001",
      group: "main",
    }),
    defineField({
      name: "type",
      title: "Tipo de vivienda",
      type: "string",
      group: "main",
      options: {
        list: [
          "Apartamento",
          "Villa",
          "Adosado",
          "Ático",
          "Casa",
          "Casa rural",
          "Estudio",
          "Piso",
        ],
      },
    }),
    defineField({
      name: "status",
      title: "Estado",
      type: "string",
      group: "main",
      initialValue: "disponible",
      options: {
        list: [
          { title: "Disponible", value: "disponible" },
          { title: "Próximamente", value: "proximamente" },
          { title: "Reservada", value: "reservada" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "availableFrom",
      title: "Disponible desde",
      type: "string",
      description: "Solo si el estado es 'Próximamente'. Ej: 01/03/2026",
      group: "main",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 5,
      group: "main",
    }),
    defineField({
      name: "featured",
      title: "Destacada en la home",
      type: "boolean",
      group: "main",
      initialValue: false,
    }),

    // ---------- CARACTERÍSTICAS ----------
    defineField({ name: "beds", title: "Dormitorios", type: "number", group: "specs" }),
    defineField({ name: "baths", title: "Baños", type: "number", group: "specs" }),
    defineField({ name: "sqft", title: "Superficie (m²)", type: "number", group: "specs" }),
    defineField({ name: "year", title: "Año de construcción", type: "number", group: "specs" }),
    defineField({ name: "furnished", title: "Amueblada", type: "boolean", group: "specs", initialValue: false }),
    defineField({
      name: "energyRating",
      title: "Certificación energética",
      type: "string",
      group: "specs",
      options: { list: ["A", "B", "C", "D", "E", "F", "G"], layout: "dropdown" },
    }),
    defineField({
      name: "features",
      title: "Características (lista)",
      type: "array",
      of: [{ type: "string" }],
      group: "specs",
      description: "Ej: Piscina privada, Garaje, Ascensor...",
    }),
    defineField({
      name: "highlights",
      title: "Puntos destacados",
      type: "array",
      of: [{ type: "string" }],
      group: "specs",
    }),

    // ---------- IMÁGENES Y VÍDEO ----------
    defineField({
      name: "image",
      title: "Imagen principal",
      type: "image",
      group: "media",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galería de imágenes",
      type: "array",
      group: "media",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "youtubeUrl",
      title: "Vídeo de YouTube",
      type: "url",
      group: "media",
      description: "Pega el enlace completo del vídeo de YouTube. Ej: https://www.youtube.com/watch?v=XXXX",
    }),

    // ---------- UBICACIÓN Y MAPA ----------
    defineField({ name: "location", title: "Dirección", type: "string", group: "location" }),
    defineField({ name: "city", title: "Ciudad", type: "string", group: "location" }),
    defineField({ name: "province", title: "Provincia", type: "string", group: "location" }),
    defineField({
      name: "coords",
      title: "Coordenadas (mapa)",
      type: "object",
      group: "location",
      description: "Coordenadas para situar la propiedad en el mapa (OpenStreetMap).",
      fields: [
        defineField({ name: "lat", title: "Latitud", type: "number" }),
        defineField({ name: "lng", title: "Longitud", type: "number" }),
      ],
    }),

    // ---------- PROPIETARIO ----------
    defineField({
      name: "owner",
      title: "Datos del propietario",
      type: "object",
      group: "owner",
      fields: [
        defineField({ name: "name", title: "Nombre", type: "string" }),
        defineField({ name: "whatsapp", title: "WhatsApp", type: "string", description: "Ej: +34600000001" }),
        defineField({ name: "email", title: "Email", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "city", media: "image" },
  },
});
