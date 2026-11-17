import { CurrencyPipe } from '@angular/common';
import { Component, HostListener, inject, input, OnDestroy, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto } from '../../../models/produto';
import { CarrinhoService } from '../../../services/carrinho.service';
import { Icon } from '../../../shared/icon/icon';

// Modal que mostra os detalhes de um perfume
@Component({
  selector: 'app-product-modal',
  imports: [CurrencyPipe, RouterLink, Icon],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.scss',
})
export class ProductModal implements OnInit, OnDestroy {
  carrinho = inject(CarrinhoService);

  produto = input.required<Produto>();
  fechar = output<void>();

  quantidade = 1;
  adicionado = false;

  ngOnInit() {
    // Trava a rolagem da página enquanto o modal está aberto
    document.body.classList.add('sem-scroll');
  }

  ngOnDestroy() {
    document.body.classList.remove('sem-scroll');
  }

  // Fecha o modal ao apertar ESC
  @HostListener('document:keydown.escape')
  aoApertarEsc() {
    this.fechar.emit();
  }

  // Fecha só se clicar no fundo escuro (e não dentro da caixa)
  clicouNoFundo(evento: MouseEvent) {
    if (evento.target === evento.currentTarget) {
      this.fechar.emit();
    }
  }

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    this.carrinho.adicionar(this.produto(), this.quantidade);
    this.adicionado = true;
  }
}
