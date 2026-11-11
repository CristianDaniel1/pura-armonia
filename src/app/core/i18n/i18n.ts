import {
  DOCUMENT,
  Injectable,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Dict, es } from './es';
import { pt } from './pt';

export type Lang = 'es' | 'pt';

const DICTS: Record<Lang, Dict> = { es, pt };
const STORAGE_KEY = 'pa-lang';

/** Idioma elegido antes por el visitante o, si no hay, el del navegador. */
function preferredLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'pt') return saved;
  } catch {
    /* almacenamiento no disponible */
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'es';
}

/**
 * Traducciones ES/PT con signals.
 * El HTML pre-renderizado sale en español; en el navegador, después del
 * primer render, se cambia al idioma preferido del visitante.
 */
@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>('es');
  readonly t = computed(() => DICTS[this.lang()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.lang() === 'pt' ? 'pt-BR' : 'es';
    });
    afterNextRender(() => this.lang.set(preferredLang()));
  }

  /** Cambia el idioma y lo recuerda para la próxima visita. */
  use(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* almacenamiento no disponible */
    }
  }
}
