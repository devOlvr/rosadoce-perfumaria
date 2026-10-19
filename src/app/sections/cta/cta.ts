import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon';
import { RoseMark } from '../../shared/rose-mark';

@Component({
  selector: 'app-cta',
  imports: [Icon, RoseMark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta" aria-labelledby="cta-title">
      <app-rose-mark class="rose rose-left" [stroke]="0.9" />
      <app-rose-mark class="rose rose-right" [stroke]="0.9" />

      <h2 id="cta-title" class="title">Um toque de doçura em cada detalhe.</h2>
      <p class="sub">Escolha o perfume que combina com a sua essência.</p>
      <a class="btn btn-light" href="#colecao">
        Explorar coleção
        <app-icon name="arrow-right" [size]="15" />
      </a>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    .cta {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5.6rem 1.5rem 5.4rem;
      background: var(--magenta);
      color: var(--white);
      text-align: center;
      overflow: hidden;
    }
    .title {
      font-size: clamp(1.5rem, 1rem + 1.6vw, 2.15rem);
      font-weight: 700;
      line-height: 1.2;
      text-transform: uppercase;
    }
    .sub {
      margin-block-start: 1.15rem;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .btn {
      margin-block-start: 2rem;
      min-block-size: 3.1rem;
      padding-inline: 1.5rem;
      font-size: 0.6875rem;
    }
    .rose {
      position: absolute;
      inline-size: 8rem;
      block-size: 11rem;
      color: rgb(255 255 255 / 0.28);
      pointer-events: none;
    }
    .rose-left {
      inset-block-start: 1.6rem;
      inset-inline-start: -1.6rem;
      transform: rotate(-28deg);
    }
    .rose-right {
      inset-block-start: 1.6rem;
      inset-inline-end: -1.6rem;
      transform: rotate(28deg) scaleX(-1);
    }
    @media (max-width: 700px) {
      .rose {
        inline-size: 5rem;
        block-size: 7rem;
        opacity: 0.6;
      }
    }
  `,
})
export class Cta {}
