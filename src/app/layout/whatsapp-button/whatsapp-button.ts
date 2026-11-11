import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n/i18n';
import { whatsappUrl } from '../../core/whatsapp';
import { Icon } from '../../shared/icon/icon';

/** Botón flotante de WhatsApp, siempre visible. */
@Component({
  selector: 'app-whatsapp-button',
  imports: [Icon],
  templateUrl: './whatsapp-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButton {
  protected readonly t = inject(I18n).t;
  protected readonly url = whatsappUrl();
}
