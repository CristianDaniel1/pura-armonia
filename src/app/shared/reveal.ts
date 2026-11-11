import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * Muestra el elemento con una animación suave cuando entra en pantalla.
 *
 * Solo actúa en el navegador y solo oculta lo que está debajo de la
 * pantalla: el HTML pre-renderizado (y lo que ya se ve) nunca queda invisible.
 */
@Directive({
  selector: '[appReveal]',
  host: { '[style.--reveal-delay]': 'delay() + "ms"' },
})
export class Reveal {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly delay = input(0, { alias: 'appReveal', transform: (v: unknown) => Number(v) || 0 });

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const node = this.el.nativeElement;
      const belowFold = node.getBoundingClientRect().top > window.innerHeight;
      if (!belowFold || typeof IntersectionObserver === 'undefined') return;

      node.classList.add('reveal-pending');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          node.classList.add('is-visible');
          observer.disconnect();
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      observer.observe(node);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
