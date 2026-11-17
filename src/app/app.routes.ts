import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Cart } from './pages/cart/cart';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Rosa Doce Perfumaria' },
  { path: 'carrinho', component: Cart, title: 'Carrinho | Rosa Doce' },
  { path: 'login', component: Login, title: 'Login | Rosa Doce' },
  { path: 'cadastro', component: Register, title: 'Cadastro | Rosa Doce' },
  // Qualquer rota que não existe volta para a home
  { path: '**', redirectTo: '' },
];
