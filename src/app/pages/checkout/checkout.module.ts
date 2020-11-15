import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { CheckCheckoutComponent } from './components/check-checkout/check-checkout.component';


@NgModule({
  declarations: [CartCheckoutComponent, CheckCheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
