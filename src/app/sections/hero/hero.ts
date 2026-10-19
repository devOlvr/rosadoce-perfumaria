import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
