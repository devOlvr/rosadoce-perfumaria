import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Faixa de chamada no final da página inicial
@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class Cta {}
