import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon, IconName } from '../../../shared/icon/icon';

/** Tarjeta de un tipo de evento (bodas, quinceañeros, etc.). */
@Component({
  selector: 'app-event-card',
  imports: [Icon],
  templateUrl: './event-card.html',
  host: { class: 'block h-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCard {
  readonly icon = input.required<IconName>();
  readonly title = input.required<string>();
  readonly text = input.required<string>();
}
