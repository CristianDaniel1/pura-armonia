import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { VideoCategory } from '../../../core/band.data';
import { I18n } from '../../../core/i18n/i18n';

export type VideoFilter = VideoCategory | 'all';

const FILTERS: VideoFilter[] = ['all', 'official', 'live', 'session'];

/** Botones para filtrar los videos por categoría. */
@Component({
  selector: 'app-video-filters',
  templateUrl: './video-filters.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoFilters {
  private readonly t = inject(I18n).t;

  readonly active = input.required<VideoFilter>();
  readonly changed = output<VideoFilter>();

  protected readonly label = computed(() => this.t().music.filterLabel);
  protected readonly options = computed(() =>
    FILTERS.map((id) => ({ id, label: this.t().music.filters[id] })),
  );
}
