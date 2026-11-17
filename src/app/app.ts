import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(scroller: ViewportScroller) {
    // O cabeçalho fica fixo no topo, então ao rolar até uma seção
    // deixamos 72px de espaço para ele não cobrir o título
    scroller.setOffset([0, 72]);
  }
}
