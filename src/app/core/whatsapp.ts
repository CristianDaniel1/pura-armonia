import { BAND } from './band.data';

/** Arma el enlace de WhatsApp de la banda, con un mensaje opcional ya escrito. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${BAND.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
