import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  ElementRef,
  afterRenderEffect,
  inject,
  input,
  model,
  viewChild,
} from '@angular/core';
import { I18n } from '../../core/i18n/i18n';
import { Icon } from '../../shared/icon/icon';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { NavLink } from '../nav-link.model';

/**
 * Menú de pantalla completa para celulares.
 * Usa <dialog> nativo: mantiene el foco adentro, cierra con Esc
 * y deja inerte el resto de la página mientras está abierto.
 */
@Component({
  selector: 'app-mobile-menu',
  imports: [Icon, LanguageSwitcher],
  templateUrl: './mobile-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenu {
  private readonly document = inject(DOCUMENT);
  protected readonly t = inject(I18n).t;

  readonly open = model(false);
  readonly links = input.required<NavLink[]>();
  readonly active = input('');

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  /** Sección a la que se mueve el foco al cerrar tras elegir un enlace. */
  private pendingFocus: string | null = null;

  constructor() {
    // Sincroniza el estado `open` con el <dialog> nativo.
    afterRenderEffect({
      write: () => {
        const dialog = this.dialog().nativeElement;
        if (this.open() && !dialog.open) dialog.showModal();
        if (!this.open() && dialog.open) dialog.close();
      },
    });
  }

  protected close(): void {
    this.open.set(false);
  }

  protected goTo(id: string): void {
    this.pendingFocus = id;
    this.close();
  }

  /** Evento nativo `close` (también al presionar Esc). */
  protected onClosed(): void {
    this.open.set(false);
    if (!this.pendingFocus) return;
    // Lleva el foco a la sección elegida para que el teclado siga desde ahí.
    const target = this.document.getElementById(this.pendingFocus);
    this.pendingFocus = null;
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}
