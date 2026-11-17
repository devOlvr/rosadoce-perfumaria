import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Produto } from '../../../models/produto';
import { CarrinhoService } from '../../../services/carrinho.service';

// Card de um perfume na lista da coleção
@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  carrinho = inject(CarrinhoService);

  produto = input.required<Produto>();
  verDetalhes = output<Produto>();

  adicionarAoCarrinho() {
    this.carrinho.adicionar(this.produto());
  }
}
