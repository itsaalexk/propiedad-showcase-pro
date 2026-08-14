export const CONTACT_PHONE = "+34 675 83 29 94";
export const CONTACT_WHATSAPP = "+34675832994";
export const CONTACT_EMAIL = "info@inmoinversion.com";

export const buildWhatsappLink = (phone: string, title: string) =>
  `https://wa.me/${(phone || CONTACT_WHATSAPP).replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, me interesa la inversión "${title}" que he visto en inmoinversión.`
  )}`;

export const buildEmailLink = (email: string, title: string) =>
  `mailto:${email || CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Interés en ${title}`
  )}&body=${encodeURIComponent(
    `Buenos días, me gustaría recibir más información sobre la inversión "${title}". Quedo a la espera de su respuesta. Gracias.`
  )}`;
