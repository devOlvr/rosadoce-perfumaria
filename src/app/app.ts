import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './sections/about/about';
import { Collection } from './sections/collection/collection';
import { Cta } from './sections/cta/cta';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Highlights } from './sections/highlights/highlights';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Highlights, Collection, About, Cta, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-highlights />
      <app-collection />
      <app-about />
      <app-cta />
    </main>
    <app-footer />
  `,
})
export class App {}
