import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../core/product';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let p = product();
    <article class="card">
      <div class="media">
        <img [src]="p.image" [alt]="'Frasco do perfume ' + p.name" width="340" height="340" loading="lazy" />
        <span class="badge">{{ p.badge }}</span>
      </div>
      <div class="body">
        <h3 class="name">{{ p.name }}</h3>
        <p class="type">{{ p.type }}</p>
        <p class="desc">{{ p.shortDescription }}</p>
        <p class="price">{{ p.price | currency: 'BRL' : 'symbol' : '1.2-2' }}</p>
        <button type="button" class="btn btn-outline details" (click)="details.emit(p)">
          Ver detalhes
          <app-icon name="arrow-right" [size]="15" />
          <span class="sr-only">de {{ p.name }}</span>
        </button>
      </div>
    </article>
  `,
  styles: `
    :host {
      display: block;
    }
    .card {
      display: flex;
      flex-direction: column;
      block-size: 100%;
      background: var(--card);
      border-radius: var(--radius);
      box-shadow: var(--shadow-card);
      overflow: hidden;
    }
    .media {
      position: relative;
      aspect-ratio: 1;
      background: #f0d7d2;
      overflow: hidden;
    }
    .media img {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      transition: transform 0.8s var(--ease);
    }
    .card:hover .media img {
      transform: scale(1.04);
    }
    .badge {
      position: absolute;
      inset-block-start: 0.9rem;
      inset-inline-start: 0.9rem;
      padding: 0.45rem 0.7rem;
      border-radius: 3px;
      background: rgb(255 255 255 / 0.92);
      font-size: 0.5625rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      line-height: 1;
      text-transform: uppercase;
      color: var(--text);
    }
    .body {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      padding: 2.1rem 1.6rem 1.6rem;
      text-align: center;
    }
    .name {
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: var(--plum);
    }
    .type {
      margin-block-start: 1rem;
      font-size: 0.5625rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-soft);
    }
    .desc {
      margin-block-start: 1.1rem;
      max-inline-size: 17rem;
      font-size: 0.6875rem;
      line-height: 1.75;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--text);
    }
    .price {
      margin-block: auto 1.4rem;
      padding-block-start: 1.4rem;
      font-size: 1.45rem;
      font-weight: 600;
      color: var(--magenta);
    }
    .details {
      inline-size: 100%;
      min-block-size: 2.9rem;
      font-size: 0.6875rem;
    }
  `,
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly details = output<Product>();
}
