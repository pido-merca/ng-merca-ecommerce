import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from '@home/components/home-container/home-container.container';
import { HomeItemComponent } from './components/home-item/home-item.component';

export const homeRootRoute = '/';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
  {
    path: ':category',
    component: HomeItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
