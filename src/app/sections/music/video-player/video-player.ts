import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { youtubeEmbedUrl, youtubeThumbnail } from '../../../core/youtube';
import { Icon } from '../../../shared/icon/icon';

/**
 * Reproductor liviano: muestra la miniatura y solo carga el iframe de
 * YouTube cuando el usuario hace clic (la página carga más rápido).
 */
@Component({
  selector: 'app-video-player',
  imports: [Icon],
  templateUrl: './video-player.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayer {
  private readonly sanitizer = inject(DomSanitizer);

  readonly videoId = input.required<string>();
  readonly title = input.required<string>();
  readonly playLabel = input('Play');

  protected readonly playing = signal(false);
  protected readonly thumbnail = computed(() => youtubeThumbnail(this.videoId(), 'maxresdefault'));
  protected readonly embedUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedUrl(this.videoId())),
  );

  protected play(): void {
    this.playing.set(true);
  }
}
