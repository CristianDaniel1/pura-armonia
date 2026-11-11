import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n/i18n';
import { Icon } from '../../shared/icon/icon';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [Icon, SocialLinks],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly t = inject(I18n).t;
  protected readonly year = new Date().getFullYear();
}
