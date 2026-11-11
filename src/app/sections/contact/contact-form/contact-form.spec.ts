import { TestBed } from '@angular/core/testing';
import { ContactForm } from './contact-form';

describe('ContactForm', () => {
  let open: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    open = vi.spyOn(window, 'open').mockReturnValue(null);
  });

  afterEach(() => {
    open.mockRestore();
  });

  async function setup() {
    const fixture = TestBed.createComponent(ContactForm);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const submit = async () => {
      el.querySelector<HTMLButtonElement>('button[type=submit]')!.click();
      await fixture.whenStable();
    };
    const type = (selector: string, value: string) => {
      const field = el.querySelector<HTMLInputElement | HTMLSelectElement>(selector)!;
      field.value = value;
      // Igual que el navegador: 'input' y luego 'change'.
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.dispatchEvent(new Event('change', { bubbles: true }));
    };
    return { fixture, el, submit, type };
  }

  it('no abre WhatsApp si faltan campos obligatorios y marca los errores', async () => {
    const { el, submit } = await setup();

    await submit();

    expect(open).not.toHaveBeenCalled();
    const name = el.querySelector('#contact-name')!;
    expect(name.getAttribute('aria-invalid')).toBe('true');
    expect(name.getAttribute('aria-describedby')).toBe('contact-name-error');
    expect(el.querySelector('#contact-name-error')?.textContent).toContain('Completa este campo.');
    expect(el.querySelector('#contact-type-error')).not.toBeNull();
    expect(document.activeElement?.id).toBe('contact-name');
  });

  it('abre WhatsApp con el mensaje armado cuando el formulario es válido', async () => {
    const { el, fixture, submit, type } = await setup();

    type('#contact-name', 'Franz');
    type('#contact-type', 'Boda');
    type('#contact-place', 'Guarulhos');
    await fixture.whenStable();
    await submit();

    expect(open).toHaveBeenCalledTimes(1);
    const url = decodeURIComponent(String(open.mock.calls[0][0]));
    expect(url).toContain('https://wa.me/5511967737231?text=');
    expect(url).toContain('Me llamo Franz.');
    expect(url).toContain('• Tipo: Boda');
    expect(url).toContain('• Lugar: Guarulhos');
    expect(el.querySelector('app-field-error p')).toBeNull();
  });
});
