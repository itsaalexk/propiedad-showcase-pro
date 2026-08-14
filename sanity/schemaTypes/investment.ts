import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * INVERSIÓN
 * Documento principal: cada oportunidad de inversión publicada en la web.
 *
 * Campos: título, slug, categoría, ubicación + coordenadas del mapa,
 * imagen principal + galería, descripción en texto enriquecido,
 * vídeos de YouTube y precio (opcional).
 */
export const investment = defineType({
  name: "investment",
  title: "Inversión",
  type: "document",
  groups: [
    { name: "main", title: "Información principal", default: true },
    { name: "media", title: "Imágenes y vídeos" },
    { name: "location", title: "Ubicación y mapa" },
  ],
  fields: [
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
      name: "category",
      title: "Tipo de inversión",
      type: "string",
      group: "main",
      validation: (r) => r.required(),
      options: {
        layout: "radio",
        list: [
          { title: "Participaciones", value: "participaciones" },
          { title: "Alquiler", value: "alquiler" },
          { title: "Flipping", value: "flipping" },
          { title: "Otros proyectos", value: "otros" },
        ],
      },
    }),
    defineField({
      name: "price",
      title: "Precio (opcional)",
      type: "string",
      group: "main",
      description: "Opcional. Puedes dejarlo vacío. Ej: 150.000 € o «Desde 25.000 €».",
    }),
    defineField({
      name: "description",
      title: "Descripción (texto enriquecido)",
      type: "array",
      group: "main",
      description:
        "Escribe libremente: negrita, cursiva, listas, títulos, enlaces e incluso vídeos de YouTube insertados dentro del texto.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Párrafo", value: "normal" },
            { title: "Título 2", value: "h2" },
            { title: "Título 3", value: "h3" },
            { title: "Cita", value: "blockquote" },
          ],
          lists: [
            { title: "Viñetas", value: "bullet" },
            { title: "Numerada", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Negrita", value: "strong" },
              { title: "Cursiva", value: "em" },
              { title: "Subrayado", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                title: "Enlace",
                type: "object",
                fields: [{ name: "href", title: "URL", type: "url" }],
              },
            ],
          },
        }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
        defineArrayMember({
          name: "youtube",
          title: "Vídeo de YouTube",
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "Enlace de YouTube",
              type: "url",
              validation: (r) => r.required(),
            }),
            defineField({ name: "caption", title: "Pie de vídeo", type: "string" }),
          ],
          preview: { select: { title: "url", subtitle: "caption" } },
        }),
      ],
    }),
    defineField({
      name: "featured",
      title: "Destacada en la home",
      type: "boolean",
      group: "main",
      initialValue: false,
    }),

    // ---------- IMÁGENES Y VÍDEOS ----------
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      group: "media",
      options: { hotspot: true },
      validation: (r) => r.required(),
      fields: [defineField({ name: "alt", title: "Texto alternativo", type: "string" })],
    }),
    defineField({
      name: "gallery",
      title: "Galería de imágenes",
      type: "array",
      group: "media",
      description: "Sube todas las imágenes que quieras (de 1 a las que necesites).",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Texto alternativo", type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "videos",
      title: "Vídeos de YouTube",
      type: "array",
      group: "media",
      description: "Pega los enlaces completos. Ej: https://www.youtube.com/watch?v=XXXX",
      of: [
        defineArrayMember({
          name: "video",
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "Enlace de YouTube",
              type: "url",
              validation: (r) => r.required(),
            }),
            defineField({ name: "caption", title: "Título del vídeo", type: "string" }),
          ],
          preview: { select: { title: "caption", subtitle: "url" } },
        }),
      ],
    }),

    // ---------- UBICACIÓN Y MAPA ----------
    defineField({
      name: "location",
      title: "Dónde se encuentra",
      type: "string",
      group: "location",
      description: "Texto que se muestra bajo el título. Ej: Calle Mayor 12, Madrid",
    }),
    defineField({ name: "city", title: "Ciudad", type: "string", group: "location" }),
    defineField({ name: "province", title: "Provincia", type: "string", group: "location" }),
    defineField({
      name: "coords",
      title: "Coordenadas del mapa",
      type: "object",
      group: "location",
      description: "Necesarias para que la inversión aparezca en el mapa (OpenStreetMap).",
      fields: [
        defineField({ name: "lat", title: "Latitud", type: "number" }),
        defineField({ name: "lng", title: "Longitud", type: "number" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "city", media: "mainImage" },
  },
});
