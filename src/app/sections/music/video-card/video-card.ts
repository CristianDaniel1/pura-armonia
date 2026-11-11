import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Video } from '../../../core/band.data';
import { I18n } from '../../../core/i18n/i18n';
import { youtubeThumbnail, youtubeWatchUrl } from '../../../core/youtube';
import { Icon } from '../../../shared/icon/icon';

/** Tarjeta de un video: abre el video en YouTube. */
@Component({
  selector: 'app-video-card',
  imports: [Icon],
  templateUrl: './video-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCard {
  protected readonly t = inject(I18n).t;

  readonly video = input.required<Video>();

  protected readonly url = computed(() => youtubeWatchUrl(this.video().id));
  protected readonly thumbnail = computed(() => youtubeThumbnail(this.video().id));
  protected readonly subtitle = computed(() => {
    const { note, credit } = this.video();
    const label = note ? this.t().music.notes[note] : '';
    return credit ? `${label} ${credit}` : label;
  });
}
