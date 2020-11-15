import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionCart } from '@app/core/models/action-cart.interface';
import { ListProducts } from '@app/core/models/products.interface';
import { CartShopping } from '@core/models/cart.interface';
import { actions } from '@cart/constants/cart.constants';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartModalComponent {

  public addCart = actions.add;
  public removeCart = actions.remove;

  @Input() isOpen: boolean;
  @Input() isMobile: boolean;
  @Input() cartShopping: CartShopping;
  @Input() total: number;
  @Input() show: boolean;
  @Output() clickOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cleanCart: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionCart: EventEmitter<ActionCart> = new EventEmitter<
    ActionCart
  >();

  constructor() {}

  public toggleModal(): void {
    this.clickOpen.emit(!this.isOpen);
  }

  public sendActionCart(product: ListProducts, action: string): void {
    this.actionCart.emit({ product, action });
  }
}
