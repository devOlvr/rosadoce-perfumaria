import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Rosa em traço usada no logo, na seção "universo" e na faixa de chamada. */
@Component({
  selector: 'app-rose-mark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  styles: `
    :host {
      display: inline-flex;
      flex: none;
    }
    svg {
      inline-size: 100%;
      block-size: 100%;
      overflow: visible;
    }
  `,
  template: `
    <svg
      viewBox="0 0 32 44"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="stroke()"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7.5 14.5C7 23 25 23 24.5 14.5" />
      <path d="M7.5 14.5C5.5 8.5 10.5 3.5 16 4.6c5.5-1.1 10.5 3.9 8.5 9.9" />
      <path d="M16 9.4c-2.8-.3-4.3 2.4-2.5 4.4 1.9 2 5.6.6 5.2-2.6-.5-3.9-6.6-4.7-8.7-.8" />
      <path d="M10 10.5c-.8 3.4.8 6.6 4.2 7.6 3.6 1 7.5-1 8-4.8" />
      <path d="M16 21.6V38" />
      <path d="M16 28.5c-2.6-1.6-5.5-1.4-7.3.6 2.6 1.4 5.3 1.2 7.3-.6Z" />
      <path d="M16 32.2c2.6-1.6 5.5-1.4 7.3.6-2.6 1.4-5.3 1.2-7.3-.6Z" />
      @if (accent()) {
        <path d="M13.5 40.2h5" stroke="var(--gold)" stroke-width="1.6" />
      }
    </svg>
  `,
})
export class RoseMark {
  readonly stroke = input(1.3);
  readonly accent = input(false);
}
