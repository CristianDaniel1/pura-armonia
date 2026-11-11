import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BAND, SOCIAL_LINKS } from '../../../core/band.data';
import { I18n } from '../../../core/i18n/i18n';
import { whatsappUrl } from '../../../core/whatsapp';
import { Icon } from '../../../shared/icon/icon';

/** Canales de contacto directo: WhatsApp, ubicación y redes. */
@Component({
  selector: 'app-contact-channels',
  imports: [Icon],
  templateUrl: './contact-channels.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactChannels {
  protected readonly t = inject(I18n).t;
  protected readonly band = BAND;
  protected readonly socials = SOCIAL_LINKS;
  protected readonly whatsappUrl = whatsappUrl();
}
