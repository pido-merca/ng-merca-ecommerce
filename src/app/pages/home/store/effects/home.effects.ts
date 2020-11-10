import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadCategoriesDataAction,
  loadCategoriesDataSuccess,
  loadProductsDataAction,
  loadProductsDataSuccess,
} from '@home/store/actions';
import { CategoriesService } from '@app/core/services/categories.service';
import { ProductsService } from '@app/core/services/products.service';

@Injectable()
export class HomeEffects {
  constructor(
    private action$: Actions,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
  ) {}

  fetchCategoriesData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(loadCategoriesDataAction),
      switchMap(() => this.categoriesService.fetchAllCategories()),
      map((response) => loadCategoriesDataSuccess({ categories: response })),
      catchError(() => {
        return EMPTY;
      })
    )
  );

  fetchProductsData$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(loadProductsDataAction),
      switchMap(() => this.productsService.fetchAllProducts()),
      map((response) => {
        response.map((product) => {
          product.hasCart = false;
          product.quantity = 0;
        });
        return loadProductsDataSuccess({ products: response });
      }),
      catchError(() => {
        return EMPTY;
      })
    )
  );
}
