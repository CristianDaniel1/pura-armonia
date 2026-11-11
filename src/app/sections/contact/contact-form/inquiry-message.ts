import { Dict } from '../../../core/i18n/es';

export interface Inquiry {
  name: string;
  type: string;
  date: string;
  place: string;
  message: string;
}

/** Arma el texto de la consulta que se envía por WhatsApp. */
export function buildInquiryMessage(inquiry: Inquiry, texts: Dict['contact']): string {
  const { name, type, date, place, message } = inquiry;
  const lines = [
    `${texts.greeting} ${name.trim()}.`,
    texts.want,
    `• ${texts.labels.type}: ${type}`,
  ];
  if (date) lines.push(`• ${texts.labels.date}: ${formatDate(date)}`);
  if (place.trim()) lines.push(`• ${texts.labels.place}: ${place.trim()}`);
  if (message.trim()) lines.push('', message.trim());
  return lines.join('\n');
}

/** Convierte 2026-12-31 en 31/12/2026. */
function formatDate(value: string): string {
  const [y, m, d] = value.split('-');
  return d && m && y ? `${d}/${m}/${y}` : value;
}
