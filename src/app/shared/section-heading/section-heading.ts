import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Reveal } from '../reveal';

/** Título de sección: texto normal seguido de una parte destacada en itálica dorada. */
export interface SectionTitle {
  text: string;
  highlight: string;
}

/** Encabezado de sección: etiqueta, título y bajada opcional. */
@Component({
  selector: 'app-section-heading',
  imports: [Reveal],
  templateUrl: './section-heading.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<SectionTitle>();
  readonly lead = input<string>();
  readonly center = input(false);
}
