import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { SharedModule } from '../shared/shared.module';
import { SlideCarouselComponent } from './components/slide-carousel/slide-carousel.component';

@NgModule({
  declarations: [HomeContainerComponent, SlideCarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
