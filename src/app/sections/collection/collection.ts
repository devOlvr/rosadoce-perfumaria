import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Product } from '../../core/product';
import { ProductService } from '../../core/product.service';
import { ProductCard } from './product-card';
import { ProductModal } from './product-modal';

@Component({
  selector: 'app-collection',
  imports: [ProductCard, ProductModal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="colecao" class="collection" aria-labelledby="colecao-title">
      <header class="head">
        <p class="eyebrow">Nossa coleção</p>
        <h2 id="colecao-title" class="section-title">Encontre sua fragrância perfeita</h2>
        <p class="sub">Uma seleção especial para realçar sua personalidade em cada momento.</p>
        <span class="rule" aria-hidden="true"></span>
      </header>

      <ul class="grid">
        @for (product of products(); track product.id) {
          <li>
            <app-product-card [product]="product" (details)="selected.set($event)" />
          </li>
        }
      </ul>
    </section>

    @if (selected(); as product) {
      <app-product-modal [product]="product" (closed)="selected.set(null)" />
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .collection {
      padding: 6.25rem 1.5rem 7rem;
    }
    .head {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .head .eyebrow {
      font-size: 0.625rem;
      font-weight: 500;
    }
    .section-title {
      margin-block-start: 1.2rem;
    }
    .sub {
      margin-block-start: 1.4rem;
      font-size: 0.75rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--text);
    }
    .rule {
      inline-size: 3rem;
      block-size: 2px;
      margin-block-start: 1.6rem;
      background: var(--gold);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;
      max-inline-size: 70.5rem;
      margin: 3.1rem auto 0;
      padding: 0;
      list-style: none;
    }
    @media (max-width: 960px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }
    }
    @media (max-width: 600px) {
      .collection {
        padding-block: 4.5rem 5rem;
      }
      .grid {
        grid-template-columns: minmax(0, 24rem);
        justify-content: center;
      }
    }
  `,
})
export class Collection {
  protected readonly products = inject(ProductService).products;
  protected readonly selected = signal<Product | null>(null);
}
