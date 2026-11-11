import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../../core/i18n/i18n';
import { Icon } from '../../../shared/icon/icon';
import { Reveal } from '../../../shared/reveal';

/** Pasos para contratar a la banda. */
@Component({
  selector: 'app-hiring-steps',
  imports: [Icon, Reveal],
  templateUrl: './hiring-steps.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HiringSteps {
  protected readonly t = inject(I18n).t;
}
