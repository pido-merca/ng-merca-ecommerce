import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HEADER_STYLE, HEADER_TITLES } from '@header/constants/header-constants';

export const homeRootAnimation = 'Home';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    data: {
      animation: homeRootAnimation,
      header_style: {
        style: HEADER_STYLE.BANNER,
        title: HEADER_TITLES.HOME,
        showTitle: false
      }
    },
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
