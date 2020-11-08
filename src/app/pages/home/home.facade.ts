import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '@app/store/state/state';

import { homeRootSelector } from '@home/store/selectors/home.selectors';
import { loadCategoriesDataAction, loadProductsDataAction } from '@home/store/actions';
import { ListCategories } from '@app/core/models/categories.interface';
import { ListProducts } from '@app/core/models/products.interface';


@Injectable()
export class HomeFacade {

  constructor(private store: Store<State>) {}

  public categoriesData$: Observable<ListCategories[]> = this.store.pipe(
    select(homeRootSelector),
    map((state) => state.listCategories)
  );

  public productsData$: Observable<ListProducts[]> = this.store.pipe(
    select(homeRootSelector),
    map((state) => state.listProducts)
  );

  public fetchAllCategories(): void {
    this.store.dispatch(loadCategoriesDataAction());
  }

  public fetchAllProducts(): void {
    this.store.dispatch(loadProductsDataAction());
  }
}
