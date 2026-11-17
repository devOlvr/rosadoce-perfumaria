import { Injectable, signal } from '@angular/core';
import { ItemCarrinho } from '../models/item-carrinho';
import { Produto } from '../models/produto';

// Regras de frete da loja
const FRETE_GRATIS_A_PARTIR_DE = 299;
const VALOR_FRETE = 19.9;

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  // Usamos signal para que o cabeçalho (contador) e a página do carrinho
  // atualizem sozinhos quando a lista mudar
  itens = signal<ItemCarrinho[]>(this.carregar());

  adicionar(produto: Produto, quantidade = 1) {
    const lista = [...this.itens()];
    const itemExistente = lista.find((item) => item.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      lista.push({ produto: produto, quantidade: quantidade });
    }

    this.itens.set(lista);
    this.salvar();
  }

  aumentar(item: ItemCarrinho) {
    item.quantidade++;
    this.itens.set([...this.itens()]);
    this.salvar();
  }

  diminuir(item: ItemCarrinho) {
    // Se tiver só 1, diminuir remove o item
    if (item.quantidade <= 1) {
      this.remover(item);
      return;
    }
    item.quantidade--;
    this.itens.set([...this.itens()]);
    this.salvar();
  }

  remover(item: ItemCarrinho) {
    this.itens.set(this.itens().filter((i) => i.produto.id !== item.produto.id));
    this.salvar();
  }

  limpar() {
    this.itens.set([]);
    this.salvar();
  }

  // Quantidade de um produto específico no carrinho (usado no card)
  quantidadeDoProduto(produto: Produto): number {
    const item = this.itens().find((i) => i.produto.id === produto.id);
    return item ? item.quantidade : 0;
  }

  quantidadeTotal(): number {
    let total = 0;
    for (const item of this.itens()) {
      total += item.quantidade;
    }
    return total;
  }

  subtotal(): number {
    let soma = 0;
    for (const item of this.itens()) {
      soma += item.produto.preco * item.quantidade;
    }
    return soma;
  }

  frete(): number {
    if (this.subtotal() === 0 || this.subtotal() >= FRETE_GRATIS_A_PARTIR_DE) {
      return 0;
    }
    return VALOR_FRETE;
  }

  total(): number {
    return this.subtotal() + this.frete();
  }

  faltaParaFreteGratis(): number {
    return Math.max(0, FRETE_GRATIS_A_PARTIR_DE - this.subtotal());
  }

  // ---- localStorage: assim o carrinho não some ao recarregar a página ----

  private salvar() {
    localStorage.setItem('carrinho', JSON.stringify(this.itens()));
  }

  private carregar(): ItemCarrinho[] {
    try {
      return JSON.parse(localStorage.getItem('carrinho') || '[]');
    } catch {
      return [];
    }
  }
}
