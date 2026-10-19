import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon, IconName } from '../../shared/icon';

@Component({
  selector: 'app-highlights',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="list">
      @for (item of items; track item.label) {
        <li>
          <app-icon [name]="item.icon" [size]="19" [stroke]="1.4" />
          {{ item.label }}
        </li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
      background: #fdedf4;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem 5.5rem;
      margin: 0;
      padding: 2.1rem 1.5rem;
      list-style: none;
    }
    li {
      display: flex;
      align-items: center;
      gap: 1.1rem;
      font-size: 0.6875rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: var(--text);
    }
    app-icon {
      color: var(--magenta);
    }
    @media (max-width: 760px) {
      .list {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  `,
})
export class Highlights {
  protected readonly items: readonly { icon: IconName; label: string }[] = [
    { icon: 'flower', label: 'Fragrâncias exclusivas' },
    { icon: 'diamond', label: 'Sofisticação em cada nota' },
    { icon: 'heart', label: 'Feito para encantar' },
  ];
}
