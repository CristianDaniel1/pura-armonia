import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n/i18n';
import { Icon } from '../../shared/icon/icon';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-hero',
  imports: [Icon, SocialLinks],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly t = inject(I18n).t;
}
