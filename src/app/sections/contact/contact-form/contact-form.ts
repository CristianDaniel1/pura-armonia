import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FieldTree, FormField, FormRoot, form, maxLength, required } from '@angular/forms/signals';
import { I18n } from '../../../core/i18n/i18n';
import { whatsappUrl } from '../../../core/whatsapp';
import { FieldError } from '../../../shared/field-error/field-error';
import { Icon } from '../../../shared/icon/icon';
import { buildInquiryMessage } from './inquiry-message';

/**
 * Formulario de consulta (Signal Forms). No necesita servidor:
 * arma el mensaje y abre WhatsApp con el texto listo para enviar.
 */
@Component({
  selector: 'app-contact-form',
  imports: [FieldError, FormField, FormRoot, Icon],
  templateUrl: './contact-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactForm {
  protected readonly t = inject(I18n).t;

  private readonly model = signal({ name: '', type: '', date: '', place: '', message: '' });

  protected readonly contactForm = form(
    this.model,
    (path) => {
      required(path.name);
      maxLength(path.name, 80);
      required(path.type);
      maxLength(path.place, 120);
      maxLength(path.message, 800);
    },
    {
      submission: {
        action: async () => {
          const text = buildInquiryMessage(this.model(), this.t().contact);
          window.open(whatsappUrl(text), '_blank', 'noopener');
        },
        // Lleva el foco al primer campo con error (el lector de pantalla lee el mensaje).
        onInvalid: (field) => field().errorSummary()[0]?.fieldTree().focusBoundControl(),
      },
    },
  );

  /** `true` cuando hay que mostrar el error del campo (para aria-invalid / aria-describedby). */
  protected hasError(field: FieldTree<string>): boolean {
    const state = field();
    return state.touched() && state.invalid();
  }
}
