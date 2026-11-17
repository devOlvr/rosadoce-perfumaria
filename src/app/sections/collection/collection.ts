import { Component, inject } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';
import { ProductCard } from './product-card/product-card';
import { ProductModal } from './product-modal/product-modal';

// Seção com a lista de perfumes
@Component({
  selector: 'app-collection',
  imports: [ProductCard, ProductModal],
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection {
  produtos: Produto[] = inject(ProdutoService).listarTodos();

  // Produto que está aberto no modal de detalhes (null = modal fechado)
  produtoSelecionado: Produto | null = null;

  abrirDetalhes(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  fecharDetalhes() {
    this.produtoSelecionado = null;
  }
}
