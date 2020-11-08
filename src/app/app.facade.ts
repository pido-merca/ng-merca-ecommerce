import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '@app/store/state/state';

import { ListCategories } from '@core/models/categories.interface';
import { loadCategoriesDataAction } from '@app/store/actions';


@Injectable()
export class AppFacade {

  constructor(private store: Store<State>) {}
}
