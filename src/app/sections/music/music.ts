import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BAND, FEATURED_VIDEO_ID, VIDEOS } from '../../core/band.data';
import { I18n } from '../../core/i18n/i18n';
import { youtubeWatchUrl } from '../../core/youtube';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { VideoCard } from './video-card/video-card';
import { VideoFilter, VideoFilters } from './video-filters/video-filters';
import { VideoPlayer } from './video-player/video-player';

@Component({
  selector: 'app-music',
  imports: [Icon, Reveal, SectionHeading, VideoCard, VideoFilters, VideoPlayer],
  templateUrl: './music.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Music {
  protected readonly t = inject(I18n).t;
  protected readonly social = BAND.social;

  protected readonly featured = VIDEOS.find((v) => v.id === FEATURED_VIDEO_ID) ?? VIDEOS[0];
  protected readonly featuredUrl = youtubeWatchUrl(this.featured.id);

  protected readonly filter = signal<VideoFilter>('all');
  protected readonly showAll = signal(false);

  private readonly filtered = computed(() => {
    const filter = this.filter();
    return filter === 'all' ? VIDEOS : VIDEOS.filter((v) => v.category === filter);
  });
  protected readonly videos = computed(() =>
    this.showAll() ? this.filtered() : this.filtered().slice(0, INITIAL_COUNT),
  );
  protected readonly hasMore = computed(() => this.filtered().length > INITIAL_COUNT);

  protected selectFilter(filter: VideoFilter): void {
    this.filter.set(filter);
    this.showAll.set(false);
  }
}

/** Cantidad de videos visibles antes de "Ver más". */
const INITIAL_COUNT = 6;
