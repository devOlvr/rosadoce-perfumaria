import { Produto } from './produto';

// Cada linha do carrinho: o produto e quantas unidades a pessoa quer
export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}
