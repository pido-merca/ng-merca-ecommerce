import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionCart } from '@app/core/models/action-cart.interface';
import { ListProducts } from '@app/core/models/products.interface';
import { CartShopping } from '@core/models/cart.interface';
import { actions } from '../../constants/cart.constants';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {

  public addCart = actions.add;
  public removeCart = actions.remove;

  @Input() isOpen: boolean;
  @Input() cartShopping: CartShopping;
  @Output() clickOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionCart: EventEmitter<ActionCart> = new EventEmitter<
    ActionCart
  >();

  constructor() {}

  ngOnInit(): void {}

  public toggleModal(): void {
    this.clickOpen.emit(!this.isOpen);
  }

  public sendActionCart(product: ListProducts, action: string): void {
    this.actionCart.emit({ product, action });
  }
}
