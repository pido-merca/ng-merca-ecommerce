import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '@app/store/state/state';

import { homeRootSelector } from '@home/store/selectors/home.selectors';
import { loadCategoriesDataAction } from '@home/store/actions';
import { ListCategories } from '@app/core/models/categories.interface';


@Injectable()
export class HomeFacade {

  constructor(private store: Store<State>) {}

  public categoriesData$: Observable<ListCategories[]> = this.store.pipe(
    select(homeRootSelector),
    map((state) => state.listCategories)
  );

  public fetchAllCategories(): void {
    this.store.dispatch(loadCategoriesDataAction());
  }
}
