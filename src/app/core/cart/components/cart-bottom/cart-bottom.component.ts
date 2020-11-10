import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartShopping } from '@app/core/models/cart.interface';
import { ListProducts } from '@app/core/models/products.interface';

@Component({
  selector: 'app-cart-bottom',
  templateUrl: './cart-bottom.component.html',
  styleUrls: ['./cart-bottom.component.scss'],
})
export class CartBottomComponent implements OnInit {

  @Output() clickOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() total: number;
  constructor() {}

  ngOnInit(): void {
    console.log(this.total);
  }
}
