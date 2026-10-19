import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Icon } from '../../shared/icon';
import { Logo } from '../../shared/logo';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  imports: [Logo, Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.scrolled]': 'scrolled()',
    '[class.menu-open]': 'menuOpen()',
    '(window:scroll)': 'onScroll()',
    '(window:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  protected readonly links: readonly NavLink[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Coleção', href: '#colecao' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
