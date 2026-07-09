import { defineField, defineType } from "sanity";

/**
 * AJUSTES DEL SITIO (singleton)
 * Información global editable: teléfono, WhatsApp, email, dirección de
 * la oficina y redes sociales. Estos datos aparecen en la cabecera,
 * el pie de página y las páginas de contacto.
 *
 * Recomendación: crea un único documento de este tipo.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Ajustes del sitio",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Nombre de la marca",
      type: "string",
      initialValue: "inmoinversión",
    }),
    defineField({ name: "phone", title: "Teléfono", type: "string", description: "Ej: +34 675 83 29 94" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string", description: "Ej: +34675832994" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "address",
      title: "Dirección de la oficina",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Calle", type: "string" }),
        defineField({ name: "postalCode", title: "Código postal", type: "string" }),
        defineField({ name: "city", title: "Ciudad", type: "string" }),
      ],
    }),
    defineField({
      name: "openingHours",
      title: "Horario",
      type: "string",
      description: "Ej: Lun a Vie · 9h–19h",
    }),
    defineField({
      name: "social",
      title: "Redes sociales",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram (URL)", type: "url" }),
        defineField({ name: "facebook", title: "Facebook (URL)", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn (URL)", type: "url" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Ajustes del sitio" }),
  },
});
