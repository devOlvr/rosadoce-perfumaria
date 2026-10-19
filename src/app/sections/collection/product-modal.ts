import { CurrencyPipe, DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { Product } from '../../core/product';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-product-modal',
  imports: [CurrencyPipe, Icon],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closed.emit()',
    '(keydown.tab)': 'trapFocus($event)',
    '(keydown.shift.tab)': 'trapFocus($event)',
  },
})
export class ProductModal {
  readonly product = input.required<Product>();
  readonly closed = output<void>();

  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly closeButton = viewChild.required<ElementRef<HTMLButtonElement>>('closeButton');
  private readonly previousFocus = this.document.activeElement as HTMLElement | null;

  constructor() {
    this.document.body.classList.add('no-scroll');
    afterNextRender(() => this.closeButton().nativeElement.focus());
    inject(DestroyRef).onDestroy(() => {
      this.document.body.classList.remove('no-scroll');
      this.previousFocus?.focus();
    });
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closed.emit();
    }
  }

  protected trapFocus(event: Event): void {
    const focusable = this.host.nativeElement.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) {
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = this.document.activeElement;
    const backwards = (event as KeyboardEvent).shiftKey;

    if (backwards && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!backwards && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
