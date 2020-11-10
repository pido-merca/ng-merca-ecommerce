import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { SlideCategoriesComponent } from '@shared/components/slide-categories/slide-categories.component';
import { CardProductsComponent } from '@shared/components/card-products/card-products.component';

@NgModule({
  declarations: [
    SlideCategoriesComponent,
    CardProductsComponent
  ],
  imports: [CommonModule, TranslocoModule],
  exports: [
    SlideCategoriesComponent,
    CardProductsComponent,
    TranslocoModule
  ],
})
export class SharedModule {}
