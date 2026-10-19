import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'arrow-right'
  | 'arrow-down'
  | 'bag'
  | 'sparkles'
  | 'flower'
  | 'diamond'
  | 'heart'
  | 'instagram'
  | 'whatsapp'
  | 'close';

/** Ícones em traço, desenhados para combinar com o logo. Herdam a cor do texto (currentColor). */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true', '[style.--icon-size]': 'size() + "px"' },
  styles: `
    :host {
      display: inline-flex;
      inline-size: var(--icon-size);
      block-size: var(--icon-size);
      flex: none;
    }
    svg {
      inline-size: 100%;
      block-size: 100%;
    }
  `,
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="stroke()"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      @switch (name()) {
        @case ('arrow-right') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('arrow-down') {
          <path d="M12 5v14M6 13l6 6 6-6" />
        }
        @case ('bag') {
          <path d="M5 7h14l-1 13H6L5 7Z" />
          <path d="M9 10V6a3 3 0 0 1 6 0v4" />
          <path d="M9 13c.8 1.6 1.8 2.4 3 2.4s2.2-.8 3-2.4" />
        }
        @case ('sparkles') {
          <path d="M10 3l1.6 4.4L16 9l-4.4 1.6L10 15l-1.6-4.4L4 9l4.4-1.6L10 3Z" />
          <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
        }
        @case ('flower') {
          <circle cx="12" cy="8" r="2.2" />
          <path d="M12 5.8c0-2 1-3 2-3s1.6 1.6 0 3.2M12 5.8c0-2-1-3-2-3s-1.6 1.6 0 3.2" />
          <path d="M14.2 8c2 0 3 1 3 2s-1.6 1.6-3.2 0M9.8 8c-2 0-3 1-3 2s1.6 1.6 3.2 0" />
          <path d="M12 10.2V21M12 16c-2 0-3.5-1-4-2.5 2 0 3.5.8 4 2.5ZM12 18c2 0 3.5-1 4-2.5-2 0-3.5.8-4 2.5Z" />
        }
        @case ('diamond') {
          <path d="M6.5 4h11L21 9l-9 11L3 9l3.5-5Z" />
          <path d="M3 9h18M9.5 4 8 9l4 11 4-11-1.5-5" />
        }
        @case ('heart') {
          <path
            d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"
          />
        }
        @case ('instagram') {
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="3.8" />
          <circle cx="17" cy="7" r=".6" fill="currentColor" />
        }
        @case ('whatsapp') {
          <path
            d="M4 20l1.2-3.9A8.2 8.2 0 1 1 8 18.9L4 20Z"
          />
          <path
            d="M9.2 8.6c.2-.4.5-.5.8-.5h.4c.2 0 .4.1.5.4l.6 1.4c.1.3 0 .5-.1.7l-.4.5c.6 1.1 1.4 1.9 2.5 2.5l.5-.4c.2-.2.5-.2.7-.1l1.4.6c.3.1.4.3.4.5v.4c0 .3-.1.6-.5.8-.6.4-1.5.5-2.4.1a8.2 8.2 0 0 1-4.3-4.3c-.4-.9-.3-1.8.1-2.4Z"
          />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(16);
  readonly stroke = input(1.6);
}
