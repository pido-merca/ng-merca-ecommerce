import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { SlideCategoriesComponent } from '@shared/components/slide-categories/slide-categories.component';



@NgModule({
  declarations: [SlideCategoriesComponent],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    SlideCategoriesComponent,
    TranslocoModule
  ]
})
export class SharedModule { }
