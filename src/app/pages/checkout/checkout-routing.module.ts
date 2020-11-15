import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { CheckCheckoutComponent } from './components/check-checkout/check-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: CartCheckoutComponent
  },
  {
    path: 'check',
    component: CheckCheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
