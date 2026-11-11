import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BAND, GALLERY } from '../../core/band.data';
import { I18n } from '../../core/i18n/i18n';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { Lightbox } from './lightbox/lightbox';

@Component({
  selector: 'app-gallery',
  imports: [Icon, Lightbox, Reveal, SectionHeading],
  templateUrl: './gallery.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;
  protected readonly images = GALLERY;
  protected readonly photosUrl = BAND.social.facebookPhotos;

  protected readonly openIndex = signal<number | null>(null);
}
