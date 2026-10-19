import { Injectable, signal } from '@angular/core';
import { Product } from './product';

const SIGNATURE = 'Uma essência que revela sua personalidade e torna cada momento especial.';

const PRODUCTS: readonly Product[] = [
  {
    id: 'rosa-imperial',
    name: 'Rosa Imperial',
    type: 'Eau de Parfum',
    badge: 'Mais amado',
    shortDescription: 'A elegância das rosas em uma essência inesquecível.',
    description: `A elegância das rosas em uma essência inesquecível. ${SIGNATURE}`,
    notes: ['Rosas', 'Peônia', 'Musk'],
    price: 189.9,
    image: 'images/rosa-imperial.jpg',
  },
  {
    id: 'doce-encanto',
    name: 'Doce Encanto',
    type: 'Eau de Parfum',
    badge: 'Floral doce',
    shortDescription: 'Delicadeza e doçura que envolvem os sentidos.',
    description: `Delicadeza e doçura que envolvem os sentidos. ${SIGNATURE}`,
    notes: ['Baunilha', 'Jasmim', 'Pêra'],
    price: 159.9,
    image: 'images/doce-encanto.jpg',
  },
  {
    id: 'flor-de-amour',
    name: 'Flor de Amour',
    type: 'Eau de Parfum',
    badge: 'Sofisticado',
    shortDescription: 'Um bouquet sofisticado para momentos especiais.',
    description: `Um bouquet sofisticado para momentos especiais. ${SIGNATURE}`,
    notes: ['Flor de laranjeira', 'Rosa', 'Âmbar'],
    price: 219.9,
    image: 'images/flor-de-amour.jpg',
  },
  {
    id: 'essencia-rose',
    name: 'Essência Rosé',
    type: 'Eau de Parfum',
    badge: 'Delicado',
    shortDescription: 'Leveza floral com um toque de personalidade.',
    description: `Leveza floral com um toque de personalidade. ${SIGNATURE}`,
    notes: ['Lichia', 'Rosa', 'Sândalo'],
    price: 179.9,
    image: 'images/essencia-rose.jpg',
  },
  {
    id: 'jardim-secreto',
    name: 'Jardim Secreto',
    type: 'Eau de Parfum',
    badge: 'Floral fresco',
    shortDescription: 'O frescor de um jardim, o mistério de uma essência.',
    description: `O frescor de um jardim, o mistério de uma essência. ${SIGNATURE}`,
    notes: ['Bergamota', 'Folhas verdes', 'Musk'],
    price: 199.9,
    image: 'images/jardim-secreto.jpg',
  },
  {
    id: 'lumiere-gold',
    name: 'Lumière Gold',
    type: 'Eau de Parfum',
    badge: 'Exclusivo',
    shortDescription: 'Uma fragrância luminosa, intensa e envolvente.',
    description: `Uma fragrância luminosa, intensa e envolvente. ${SIGNATURE}`,
    notes: ['Âmbar', 'Baunilha', 'Sândalo'],
    price: 249.9,
    image: 'images/lumiere-gold.jpg',
  },
];

@Injectable({ providedIn: 'root' })
export class ProductService {
  readonly products = signal<readonly Product[]>(PRODUCTS).asReadonly();
}
