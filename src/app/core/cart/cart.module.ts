import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBottomComponent } from '@cart/components/cart-bottom/cart-bottom.component';
import { CartModalComponent } from '@cart/components/cart-modal/cart-modal.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [CartBottomComponent, CartModalComponent],
  imports: [CommonModule, TranslocoModule],
  exports: [CartBottomComponent, CartModalComponent],
})
export class CartModule {}
