import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '@header/header.module';
import { CartModule } from '@cart/cart.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    CartModule
  ],
  exports: [
    HeaderModule,
    CartModule
  ]
})
export class CoreModule { }
