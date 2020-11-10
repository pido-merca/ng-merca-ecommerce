import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBottomComponent } from '@cart/components/cart-bottom/cart-bottom.component';
import { CartModalComponent } from '@cart/components/cart-modal/cart-modal.component';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [CartBottomComponent, CartModalComponent],
  imports: [CommonModule, TranslocoModule, SharedModule],
  exports: [CartBottomComponent, CartModalComponent],
})
export class CartModule {}
