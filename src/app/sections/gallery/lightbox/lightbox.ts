import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterRenderEffect,
  computed,
  inject,
  input,
  model,
  viewChild,
} from '@angular/core';
import { GalleryImage } from '../../../core/band.data';
import { I18n } from '../../../core/i18n/i18n';
import { Icon } from '../../../shared/icon/icon';

/**
 * Visor de fotos a pantalla completa.
 * Usa <dialog> nativo: atrapa el foco, cierra con Esc y devuelve
 * el foco a la foto que se abrió.
 */
@Component({
  selector: 'app-lightbox',
  imports: [Icon],
  templateUrl: './lightbox.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lightbox {
  private readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;

  readonly images = input.required<GalleryImage[]>();
  /** Índice de la foto abierta; null = cerrado. */
  readonly index = model<number | null>(null);

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly current = computed(() => {
    const i = this.index();
    return i === null ? null : this.images()[i];
  });
  protected readonly alt = computed(() => this.current()?.alt[this.i18n.lang()] ?? '');

  constructor() {
    // Sincroniza el índice con el <dialog> nativo.
    afterRenderEffect({
      write: () => {
        const dialog = this.dialog().nativeElement;
        const isOpen = this.index() !== null;
        if (isOpen && !dialog.open) dialog.showModal();
        if (!isOpen && dialog.open) dialog.close();
      },
    });
  }

  protected close(): void {
    this.index.set(null);
  }

  protected step(delta: number): void {
    const total = this.images().length;
    this.index.update((i) => (i === null ? null : (i + delta + total) % total));
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.step(1);
    if (event.key === 'ArrowLeft') this.step(-1);
  }

  /** Cierra al hacer clic en el fondo (fuera de la foto y los botones). */
  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }
}
