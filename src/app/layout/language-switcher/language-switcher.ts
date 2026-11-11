import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n, Lang } from '../../core/i18n/i18n';

/** Selector de idioma ES/PT. */
@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcher {
  protected readonly i18n = inject(I18n);
  protected readonly options: { lang: Lang; label: string; name: string }[] = [
    { lang: 'es', label: 'ES', name: 'Español' },
    { lang: 'pt', label: 'PT', name: 'Português' },
  ];
}
