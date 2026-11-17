import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Collection } from '../../sections/collection/collection';
import { Cta } from '../../sections/cta/cta';
import { Hero } from '../../sections/hero/hero';
import { Highlights } from '../../sections/highlights/highlights';

// Página inicial: só junta as seções na ordem
@Component({
  selector: 'app-home',
  imports: [Hero, Highlights, Collection, About, Cta],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
