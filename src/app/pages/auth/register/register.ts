import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Icon } from '../../../shared/icon/icon';

// Validação personalizada: confere se "senha" e "confirmar senha" são iguais
function senhasIguais(form: AbstractControl): ValidationErrors | null {
  const senha = form.get('senha')?.value;
  const confirmarSenha = form.get('confirmarSenha')?.value;

  if (confirmarSenha && senha !== confirmarSenha) {
    return { senhasDiferentes: true };
  }
  return null;
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, Icon],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  auth = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  formulario = new FormGroup(
    {
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarSenha: new FormControl('', [Validators.required]),
      aceitoTermos: new FormControl(false, [Validators.requiredTrue]),
    },
    { validators: senhasIguais },
  );

  mostrarSenha = false;
  mostrarConfirmacao = false;
  mensagemErro = '';

  ngOnInit() {
    if (this.auth.estaLogado()) {
      this.router.navigate(['/']);
    }
  }

  campoInvalido(nome: string): boolean {
    const campo = this.formulario.get(nome);
    return !!campo && campo.invalid && campo.touched;
  }

  senhasDiferentes(): boolean {
    const confirmar = this.formulario.get('confirmarSenha');
    return this.formulario.hasError('senhasDiferentes') && !!confirmar?.touched;
  }

  cadastrar() {
    this.mensagemErro = '';

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { nome, email, senha } = this.formulario.value;
    const deuCerto = this.auth.cadastrar(nome ?? '', email ?? '', senha ?? '');

    if (deuCerto) {
      alert('Conta criada com sucesso!');
      const voltarPara = this.route.snapshot.queryParamMap.get('voltarPara') || '/';
      this.router.navigateByUrl(voltarPara);
    } else {
      this.mensagemErro = 'Já existe uma conta com este e-mail.';
    }
  }
}
