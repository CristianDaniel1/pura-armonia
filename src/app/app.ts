import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n } from './core/i18n/i18n';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { WhatsappButton } from './layout/whatsapp-button/whatsapp-button';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Events } from './sections/events/events';
import { Gallery } from './sections/gallery/gallery';
import { Hero } from './sections/hero/hero';
import { Music } from './sections/music/music';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Music, Events, Gallery, Contact, Footer, WhatsappButton],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly t = inject(I18n).t;
}
