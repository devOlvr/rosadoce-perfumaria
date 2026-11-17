import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

// Modal pequeno que aparece depois de finalizar a compra.
// Como é curto, deixei o HTML e o CSS aqui dentro mesmo.
@Component({
  selector: 'app-order-confirmation',
  imports: [CurrencyPipe, RouterLink],
  template: `
    <div class="fundo">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="titulo-pedido">
        <div class="icone">✔</div>
        <h2 id="titulo-pedido">Pedido realizado!</h2>
        <p>Número do pedido: <strong>#{{ numero() }}</strong></p>
        <p>Total: <strong>{{ total() | currency: 'BRL' }}</strong></p>
        <p class="obs">Você vai receber os detalhes por e-mail.</p>
        <a class="btn btn-primario" routerLink="/" (click)="fechar.emit()">Voltar para a loja</a>
      </div>
    </div>
  `,
  styles: `
    .fundo {
      position: fixed;
      inset: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.5);
    }
    .modal {
      width: 100%;
      max-width: 380px;
      padding: 32px;
      border-radius: var(--raio);
      background: var(--branco);
      text-align: center;
    }
    .icone {
      width: 60px;
      height: 60px;
      margin: 0 auto 12px;
      border-radius: 50%;
      background: var(--sucesso);
      color: var(--branco);
      font-size: 30px;
      line-height: 60px;
    }
    h2 {
      margin-bottom: 12px;
      color: var(--magenta);
    }
    .obs {
      margin: 10px 0 20px;
      font-size: 14px;
      color: var(--texto-claro);
    }
    .btn {
      width: 100%;
    }
  `,
})
export class OrderConfirmation {
  numero = input.required<number>();
  total = input.required<number>();
  fechar = output<void>();
}
