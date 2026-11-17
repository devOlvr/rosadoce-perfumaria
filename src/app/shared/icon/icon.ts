import { Component, input } from '@angular/core';

// Nomes dos ícones disponíveis (cada um é desenhado no icon.html)
export type IconName =
  | 'arrow-right'
  | 'arrow-left'
  | 'bag'
  | 'sparkles'
  | 'flower'
  | 'diamond'
  | 'heart'
  | 'instagram'
  | 'whatsapp'
  | 'close'
  | 'user'
  | 'plus'
  | 'minus'
  | 'trash'
  | 'check'
  | 'eye'
  | 'eye-off'
  | 'truck';

// Componente de ícone em SVG. A cor vem do texto em volta (currentColor).
// Uso: <app-icon name="bag" [size]="20" />
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  host: { 'aria-hidden': 'true' },
})
export class Icon {
  name = input.required<IconName>();
  size = input(16);
  stroke = input(1.6);
}
