import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { I18n } from '../../core/i18n/i18n';
import { ScrollSpy } from '../../core/scroll-spy';
import { Icon } from '../../shared/icon/icon';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { NavLink } from '../nav-link.model';

const SECTIONS = ['home', 'about', 'music', 'events', 'gallery', 'contact'] as const;

@Component({
  selector: 'app-header',
  imports: [Icon, LanguageSwitcher, MobileMenu],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly spy = inject(ScrollSpy);
  protected readonly t = inject(I18n).t;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = this.spy.active;
  protected readonly solid = computed(() => this.scrolled() || this.menuOpen());

  protected readonly links = computed<NavLink[]>(() => {
    const nav = this.t().nav;
    return SECTIONS.map((id) => ({ id, label: nav[id] }));
  });

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      // Listener nativo y pasivo: solo actualiza el signal (sin detección de cambios por cada evento).
      const update = () => this.scrolled.set(window.scrollY > 24);
      update();
      window.addEventListener('scroll', update, { passive: true });
      destroyRef.onDestroy(() => window.removeEventListener('scroll', update));

      this.spy.watch(SECTIONS);
    });
  }

  protected openMenu(): void {
    this.menuOpen.set(true);
  }
}
