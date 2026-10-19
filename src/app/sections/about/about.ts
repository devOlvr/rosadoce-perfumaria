import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoseMark } from '../../shared/rose-mark';

@Component({
  selector: 'app-about',
  imports: [RoseMark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="sobre" class="about" aria-labelledby="sobre-title">
      <div class="inner">
        <figure class="media">
          <img
            src="images/universo.jpg"
            alt="Frasco Rosa Doce sobre pedestal de mármore cercado de rosas"
            width="437"
            height="437"
            loading="lazy"
          />
        </figure>

        <div class="text">
          <p class="eyebrow">O universo Rosa Doce</p>
          <h2 id="sobre-title" class="section-title">
            Mais do que perfumes,<br />
            experiências.
          </h2>
          <p class="body">
            Na Rosa Doce, acreditamos que cada fragrância conta uma história. Nossa missão é
            transformar pequenos momentos em experiências inesquecíveis, por meio de essências que
            expressam sua personalidade.
          </p>
          <p class="motto">
            <app-rose-mark class="mark" [stroke]="1.4" />
            Feita para encantar. Criada para marcar.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
      background: var(--blush);
    }
    .about {
      padding: 5.1rem 1.5rem;
    }
    .inner {
      display: grid;
      grid-template-columns: minmax(0, 33rem) minmax(0, 33rem);
      align-items: center;
      justify-content: center;
      gap: 5.5rem;
    }
    .media {
      margin: 0;
      aspect-ratio: 1;
      border-radius: 6px;
      overflow: hidden;
      background: #ead1cd;
    }
    .media img {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }
    .text .eyebrow {
      font-size: 0.625rem;
      font-weight: 500;
    }
    .section-title {
      margin-block-start: 1.6rem;
    }
    .body {
      margin-block-start: 2rem;
      font-size: 0.7rem;
      line-height: 2.15;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--text);
    }
    .motto {
      display: flex;
      align-items: center;
      gap: 1.3rem;
      margin-block-start: 2rem;
      padding-block-start: 1.9rem;
      border-block-start: 1px solid #f0d6e1;
      font-size: 0.625rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: var(--text);
    }
    .mark {
      inline-size: 1.3rem;
      block-size: 1.8rem;
      color: var(--pink);
    }
    @media (max-width: 900px) {
      .inner {
        grid-template-columns: minmax(0, 33rem);
        gap: 3rem;
      }
      .section-title br {
        display: none;
      }
    }
  `,
})
export class About {}
