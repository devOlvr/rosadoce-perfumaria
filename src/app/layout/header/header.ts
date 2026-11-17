import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Icon } from '../../shared/icon/icon';
import { Logo } from '../../shared/logo/logo';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  auth = inject(AuthService);
  carrinho = inject(CarrinhoService);
  router = inject(Router);

  // Controla o menu no celular
  menuAberto = false;

  // Links do menu (cada um leva para uma seção da home)
  links = [
    { texto: 'Início', secao: 'inicio' },
    { texto: 'Coleção', secao: 'colecao' },
    { texto: 'Sobre nós', secao: 'sobre' },
    { texto: 'Contato', secao: 'contato' },
  ];

  abrirFecharMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }

  sair() {
    this.auth.sair();
    this.fecharMenu();
    this.router.navigate(['/']);
  }
}
