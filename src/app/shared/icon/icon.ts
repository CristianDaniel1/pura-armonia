import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'youtube'
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'whatsapp'
  | 'play'
  | 'arrow'
  | 'external'
  | 'pin'
  | 'menu'
  | 'close'
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-up'
  | 'rings'
  | 'crown'
  | 'flag'
  | 'cake'
  | 'building'
  | 'mic';

/** Ícono SVG en línea. El tamaño se controla con clases (ej. size-5). */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  host: { class: 'inline-flex shrink-0', 'aria-hidden': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();
}
