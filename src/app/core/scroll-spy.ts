import { DOCUMENT, Injectable, OnDestroy, inject, signal } from '@angular/core';

/** Indica qué sección de la página está visible para resaltarla en el menú. */
@Injectable({ providedIn: 'root' })
export class ScrollSpy implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;

  readonly active = signal<string>('');

  watch(ids: readonly string[]): void {
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.active.set(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ids) {
      const el = this.document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
