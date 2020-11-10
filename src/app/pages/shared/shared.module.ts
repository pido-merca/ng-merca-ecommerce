import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { SlideCategoriesComponent } from '@shared/components/slide-categories/slide-categories.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { CalculateTotalPipe } from './pipes/calculate-total.pipe';

@NgModule({
  declarations: [
    SlideCategoriesComponent,
    CardProductsComponent,
    CalculateTotalPipe,
  ],
  imports: [CommonModule, TranslocoModule],
  exports: [
    SlideCategoriesComponent,
    CardProductsComponent,
    TranslocoModule,
    CalculateTotalPipe,
  ],
})
export class SharedModule {}
