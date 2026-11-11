import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/band.data';
import { I18n } from '../../core/i18n/i18n';
import { Icon } from '../icon/icon';

/** Fila de botones redondos con las redes sociales de la banda. */
@Component({
  selector: 'app-social-links',
  imports: [Icon],
  templateUrl: './social-links.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinks {
  protected readonly t = inject(I18n).t;
  protected readonly links = SOCIAL_LINKS;
}
