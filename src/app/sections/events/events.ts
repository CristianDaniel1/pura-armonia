import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n/i18n';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { EventCard } from './event-card/event-card';
import { HiringSteps } from './hiring-steps/hiring-steps';

@Component({
  selector: 'app-events',
  imports: [EventCard, HiringSteps, Reveal, SectionHeading],
  templateUrl: './events.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Events {
  protected readonly t = inject(I18n).t;
}
