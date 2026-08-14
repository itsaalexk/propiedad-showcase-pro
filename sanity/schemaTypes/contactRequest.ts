import { defineField, defineType } from "sanity";

/**
 * SOLICITUD DE CONTACTO
 * Cada envío del formulario de contacto de la web se guarda aquí.
 * Documento de solo lectura (se crea automáticamente desde el frontal).
 */
export const contactRequest = defineType({
  name: "contactRequest",
  title: "Solicitud de contacto",
  type: "document",
  readOnly: true,
  fields: [
    defineField({ name: "name", title: "Nombre", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Teléfono", type: "string" }),
    defineField({ name: "subject", title: "Asunto", type: "string" }),
    defineField({ name: "investmentRange", title: "Rango de inversión", type: "string" }),
    defineField({ name: "message", title: "Mensaje", type: "text", rows: 6 }),
    defineField({ name: "source", title: "Origen", type: "string" }),
    defineField({ name: "createdAt", title: "Fecha", type: "datetime" }),
  ],
  orderings: [
    {
      title: "Más recientes",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "subject" },
  },
});
