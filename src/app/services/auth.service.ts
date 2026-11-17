import { Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario';

// IMPORTANTE: login apenas para fins acadêmicos.
// Os usuários ficam salvos no localStorage do navegador. Num sistema de verdade,
// isso seria feito por uma API no back-end e a senha nunca ficaria no front-end.
@Injectable({ providedIn: 'root' })
export class AuthService {
  usuarioLogado = signal<Usuario | null>(this.carregarSessao());

  cadastrar(nome: string, email: string, senha: string): boolean {
    const usuarios = this.listarUsuarios();

    // Não deixa cadastrar o mesmo e-mail duas vezes
    if (usuarios.some((u) => u.email === email.toLowerCase())) {
      return false;
    }

    const novoUsuario: Usuario = { nome: nome, email: email.toLowerCase(), senha: senha };
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Já entra logado depois de cadastrar
    this.iniciarSessao(novoUsuario);
    return true;
  }

  entrar(email: string, senha: string): boolean {
    const usuario = this.listarUsuarios().find(
      (u) => u.email === email.toLowerCase() && u.senha === senha,
    );

    if (!usuario) {
      return false;
    }

    this.iniciarSessao(usuario);
    return true;
  }

  sair() {
    this.usuarioLogado.set(null);
    localStorage.removeItem('usuarioLogado');
  }

  estaLogado(): boolean {
    return this.usuarioLogado() !== null;
  }

  primeiroNome(): string {
    const usuario = this.usuarioLogado();
    return usuario ? usuario.nome.split(' ')[0] : '';
  }

  private iniciarSessao(usuario: Usuario) {
    this.usuarioLogado.set(usuario);
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
  }

  private listarUsuarios(): Usuario[] {
    try {
      return JSON.parse(localStorage.getItem('usuarios') || '[]');
    } catch {
      return [];
    }
  }

  private carregarSessao(): Usuario | null {
    try {
      return JSON.parse(localStorage.getItem('usuarioLogado') || 'null');
    } catch {
      return null;
    }
  }
}
