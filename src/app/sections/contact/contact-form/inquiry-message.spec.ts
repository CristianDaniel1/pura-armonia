import { es } from '../../../core/i18n/es';
import { pt } from '../../../core/i18n/pt';
import { whatsappUrl } from '../../../core/whatsapp';
import { Inquiry, buildInquiryMessage } from './inquiry-message';

const base: Inquiry = { name: 'Franz', type: 'Boda', date: '', place: '', message: '' };

describe('buildInquiryMessage', () => {
  it('arma el mensaje mínimo con nombre y tipo de evento', () => {
    expect(buildInquiryMessage(base, es.contact)).toBe(
      '¡Hola, Pura Armonía! Me llamo Franz.\n' +
        'Quisiera consultar disponibilidad para un evento:\n' +
        '• Tipo: Boda',
    );
  });

  it('incluye fecha (dd/mm/aaaa), lugar y mensaje cuando existen', () => {
    const text = buildInquiryMessage(
      { ...base, date: '2026-12-31', place: ' Guarulhos ', message: ' 150 invitados ' },
      es.contact,
    );
    expect(text).toContain('• Fecha: 31/12/2026');
    expect(text).toContain('• Lugar: Guarulhos');
    expect(text.endsWith('\n\n150 invitados')).toBe(true);
  });

  it('omite lugar y mensaje vacíos o con solo espacios', () => {
    const text = buildInquiryMessage({ ...base, place: '   ', message: '  ' }, es.contact);
    expect(text).not.toContain('Lugar');
    expect(text.split('\n')).toHaveLength(3);
  });

  it('usa los textos en portugués', () => {
    const text = buildInquiryMessage({ ...base, type: 'Casamento' }, pt.contact);
    expect(text).toContain('Olá, Pura Armonía! Meu nome é Franz.');
    expect(text).toContain('• Tipo: Casamento');
  });
});

describe('whatsappUrl', () => {
  it('apunta al número de la banda y codifica el texto', () => {
    expect(whatsappUrl()).toBe('https://wa.me/5511967737231');
    expect(whatsappUrl('Hola & chau\n')).toBe(
      'https://wa.me/5511967737231?text=Hola%20%26%20chau%0A',
    );
  });
});
