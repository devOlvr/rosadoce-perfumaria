import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, Icon],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  auth = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  mostrarSenha = false;
  mensagemErro = '';

  ngOnInit() {
    // Se já estiver logado, não faz sentido ver a tela de login
    if (this.auth.estaLogado()) {
      this.router.navigate(['/']);
    }
  }

  // Usado no HTML para saber se mostra a mensagem de erro do campo
  campoInvalido(nome: string): boolean {
    const campo = this.formulario.get(nome);
    return !!campo && campo.invalid && campo.touched;
  }

  entrar() {
    this.mensagemErro = '';

    if (this.formulario.invalid) {
      // Marca todos os campos para as mensagens de erro aparecerem
      this.formulario.markAllAsTouched();
      return;
    }

    const email = this.formulario.value.email ?? '';
    const senha = this.formulario.value.senha ?? '';

    if (this.auth.entrar(email, senha)) {
      // Volta para a página de onde veio (ex: carrinho) ou para a home
      const voltarPara = this.route.snapshot.queryParamMap.get('voltarPara') || '/';
      this.router.navigateByUrl(voltarPara);
    } else {
      this.mensagemErro = 'E-mail ou senha incorretos.';
    }
  }
}
