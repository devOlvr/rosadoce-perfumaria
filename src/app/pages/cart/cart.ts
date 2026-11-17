import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Icon } from '../../shared/icon/icon';
import { OrderConfirmation } from './order-confirmation/order-confirmation';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink, Icon, OrderConfirmation],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  carrinho = inject(CarrinhoService);
  auth = inject(AuthService);
  router = inject(Router);

  // Dados do pedido finalizado (para mostrar no modal de confirmação)
  pedidoFinalizado = false;
  numeroPedido = 0;
  totalPedido = 0;

  finalizarCompra() {
    // Só pode finalizar quem está logado
    if (!this.auth.estaLogado()) {
      alert('Faça login para finalizar a compra.');
      this.router.navigate(['/login'], { queryParams: { voltarPara: '/carrinho' } });
      return;
    }

    // Simulação do pedido (ainda não temos back-end nem pagamento)
    this.numeroPedido = Math.floor(Math.random() * 90000) + 10000;
    this.totalPedido = this.carrinho.total();
    this.pedidoFinalizado = true;
    this.carrinho.limpar();
  }
}
