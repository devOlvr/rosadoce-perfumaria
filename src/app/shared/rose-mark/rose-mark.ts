import { Component, input } from '@angular/core';

// Desenho da rosa usado no logo e em algumas seções
@Component({
  selector: 'app-rose-mark',
  templateUrl: './rose-mark.html',
  styleUrl: './rose-mark.scss',
  host: { 'aria-hidden': 'true' },
})
export class RoseMark {
  stroke = input(1.3);
}
