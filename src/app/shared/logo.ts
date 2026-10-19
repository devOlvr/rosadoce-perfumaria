import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RoseMark } from './rose-mark';

@Component({
  selector: 'app-logo',
  imports: [RoseMark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.compact]': 'compact()' },
  template: `
    <a class="logo" href="#inicio" aria-label="Rosa Doce Perfumaria — voltar ao início">
      <app-rose-mark class="mark" [accent]="true" />
      <span class="words">
        <span class="name">Rosa Doce</span>
        <span class="tag">Perfumaria</span>
      </span>
    </a>
  `,
  styles: `
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 0.85rem;
      color: var(--magenta);
      text-decoration: none;
    }
    .mark {
      inline-size: 2.3rem;
      block-size: 3.15rem;
      color: var(--magenta);
      transition:
        inline-size 0.3s ease,
        block-size 0.3s ease;
    }
    .words {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      line-height: 1;
    }
    .name {
      font-size: 1.75rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      white-space: nowrap;
      transition: font-size 0.3s ease;
    }
    .tag {
      font-size: 0.625rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--pink);
    }
    :host(.compact) .name {
      font-size: 1.45rem;
    }
    :host(.compact) .mark {
      inline-size: 1.95rem;
      block-size: 2.65rem;
    }
    @media (max-width: 520px) {
      .name,
      :host(.compact) .name {
        font-size: 1.3rem;
      }
      .mark,
      :host(.compact) .mark {
        inline-size: 1.7rem;
        block-size: 2.3rem;
      }
    }
  `,
})
export class Logo {
  readonly compact = input(false);
}
