import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';
import { I18n } from '../../core/i18n/i18n';

/**
 * Mensaje de error de un campo (Signal Forms).
 * Aparece cuando el campo fue tocado y es inválido. El `errorId` se usa en
 * `aria-describedby` del campo para que el lector de pantalla lo lea.
 */
@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldError {
  private readonly t = inject(I18n).t;

  readonly field = input.required<FieldTree<string>>();
  readonly errorId = input.required<string>();

  protected readonly visible = computed(() => {
    const state = this.field()();
    return state.touched() && state.invalid();
  });

  protected readonly message = computed(() => {
    const kind = this.field()().errors()[0]?.kind;
    const errors = this.t().errors;
    return kind === 'maxLength' ? errors.tooLong : errors.required;
  });
}
