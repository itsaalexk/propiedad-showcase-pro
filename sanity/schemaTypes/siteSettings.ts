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
  ],
  preview: { prepare: () => ({ title: "Ajustes del sitio" }) },
});
