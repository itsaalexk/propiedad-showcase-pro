import { defineField, defineType } from "sanity";

/**
 * AJUSTES DEL SITIO (singleton)
 * Teléfono, WhatsApp, email, oficina y redes sociales (con interruptor
 * para activar / desactivar cada una en el footer).
 *
 * Crea un ÚNICO documento de este tipo.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Ajustes del sitio",
  type: "document",
  groups: [
    { name: "contact", title: "Contacto", default: true },
    { name: "office", title: "Oficina" },
    { name: "social", title: "Redes sociales" },
    { name: "legal", title: "Términos y condiciones" },
  ],

  fields: [
    defineField({
      name: "brandName",
      title: "Nombre de la marca",
      type: "string",
      group: "contact",
      initialValue: "inmoinversión",
    }),
    defineField({
      name: "phone",
      title: "Teléfono",
      type: "string",
      group: "contact",
      description: "Ej: +34 675 83 29 94",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      group: "contact",
      description: "Solo dígitos con prefijo. Ej: +34675832994",
    }),
    defineField({ name: "email", title: "Correo electrónico", type: "string", group: "contact" }),
    defineField({
      name: "openingHours",
      title: "Horario de atención",
      type: "string",
      group: "contact",
      initialValue: "Lun a Vie · 9h–19h",
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "contact",
      description: "Se muestra en la cabecera y en el pie de página. Recomendado: PNG/SVG con fondo transparente.",
      options: { hotspot: true },
    }),

    defineField({
      name: "favicon",
      title: "Favicon (icono de la pestaña)",
      type: "image",
      group: "contact",
      description: "Imagen cuadrada (PNG o SVG), idealmente 512x512. Si no se sube, se usa el logo.",
    }),


    defineField({
      name: "office",
      title: "Oficina",
      type: "object",
      group: "office",
      fields: [
        defineField({ name: "street", title: "Dirección", type: "string" }),
        defineField({ name: "postalCode", title: "Código postal", type: "string" }),
        defineField({ name: "city", title: "Ciudad", type: "string" }),
        defineField({ name: "note", title: "Nota", type: "string", description: "Ej: Visitas con cita previa" }),
      ],
    }),

    defineField({
      name: "social",
      title: "Redes sociales",
      type: "object",
      group: "social",
      description: "Activa o desactiva cada red y pega su enlace.",
      fields: [
        ...["instagram", "facebook", "youtube", "linkedin"].map((key) =>
          defineField({
            name: key,
            title: key.charAt(0).toUpperCase() + key.slice(1),
            type: "object",
            fields: [
              defineField({ name: "enabled", title: "Mostrar en la web", type: "boolean", initialValue: false }),
              defineField({ name: "url", title: "Enlace", type: "url" }),
            ],
            options: { collapsible: true, collapsed: false },
          })
        ),
      ],
    }),

    defineField({
      name: "termsTitle",
      title: "Título de la página",
      type: "string",
      group: "legal",
      initialValue: "Términos y condiciones",
    }),
    defineField({
      name: "termsUpdatedAt",
      title: "Última actualización",
      type: "date",
      group: "legal",
      options: { dateFormat: "DD/MM/YYYY" },
    }),
    defineField({
      name: "terms",
      title: "Términos y condiciones",
      type: "array",
      group: "legal",
      description: "Texto enriquecido: negrita, cursiva, títulos, listas y enlaces.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Título", value: "h2" },
            { title: "Subtítulo", value: "h3" },
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
                type: "object",
                title: "Enlace",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
      ],
    }),
  ],

  preview: { prepare: () => ({ title: "Ajustes del sitio" }) },
});
