import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon, IconName } from '../../shared/icon';
import { Logo } from '../../shared/logo';

interface FooterLink {
  label: string;
  href: string;
  icon?: IconName;
  external?: boolean;
}

@Component({
  selector: 'app-footer',
  imports: [Logo, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer id="contato" class="footer">
      <div class="container">
        <div class="top">
          <div class="brand">
            <app-logo [compact]="true" />
            <p class="tagline">Fragrâncias que encantam. Essências que marcam.</p>
          </div>

          <nav aria-label="Links do rodapé">
            <ul class="links">
              @for (link of links; track link.label) {
                <li>
                  <a
                    [href]="link.href"
                    [attr.target]="link.external ? '_blank' : null"
                    [attr.rel]="link.external ? 'noopener noreferrer' : null"
                  >
                    @if (link.icon) {
                      <app-icon [name]="link.icon" [size]="15" [stroke]="1.5" />
                    }
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>
        </div>

        <p class="copy">© {{ year }} Rosa Doce. Todos os direitos reservados.</p>
      </div>
    </footer>
  `,
  styles: `
    :host {
      display: block;
    }
    .footer {
      padding-block: 3.4rem 1.6rem;
      background: var(--white);
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      padding-block-end: 2.2rem;
      border-block-end: 1px solid var(--line);
    }
    .tagline {
      margin-block-start: 1.2rem;
      font-size: 0.5625rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: var(--text-soft);
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem 2.1rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .links a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.625rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--text);
      transition: color 0.2s ease;
    }
    .links a:hover {
      color: var(--magenta);
    }
    .links app-icon {
      color: var(--plum);
    }
    .copy {
      margin-block-start: 1.6rem;
      font-size: 0.5625rem;
      letter-spacing: 0.03em;
      text-align: center;
      text-transform: uppercase;
      color: var(--text-soft);
    }
    @media (max-width: 760px) {
      .top {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `,
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  // Troque pelos perfis reais da loja.
  protected readonly links: readonly FooterLink[] = [
    { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram', external: true },
    { label: 'WhatsApp', href: 'https://wa.me/', icon: 'whatsapp', external: true },
    { label: 'Início', href: '#inicio' },
    { label: 'Coleção', href: '#colecao' },
  ];
}
