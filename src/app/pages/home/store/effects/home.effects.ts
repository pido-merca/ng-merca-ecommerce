import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadCategoriesDataAction,
  loadCategoriesDataSuccess,
} from '@home/store/actions';
import { CategoriesService } from '@app/core/services/categories.service';

@Injectable()
export class HomeEffects {
  constructor(
    private action$: Actions,
    private categoriesService: CategoriesService
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
}
