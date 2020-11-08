import { createAction, props } from '@ngrx/store';
import { ListCategories } from '@core/models/categories.interface';
import { type } from '@app/utils/util';

export const loadCategoriesDataAction = createAction(
  type('[Global/API] Load categories dat')
);
export const loadCategoriesDataSuccess = createAction(
  type('[Global/API] Load categories dat success'),
  props<{ categories: ListCategories[] }>()
);
