import { createAction, props } from '@ngrx/store';
import { type } from '@app/utils/util';
import { ListCategories } from '@core/models/categories.interface';
import { ListProducts } from '@app/core/models/products.interface';

export const loadCategoriesDataAction = createAction(
  type('[Global/API] Load categories data')
);
export const loadCategoriesDataSuccess = createAction(
  type('[Global/API] Load categories data success'),
  props<{ categories: ListCategories[] }>()
);

export const loadProductsDataAction = createAction(
  type('[Global/API] Load products data')
);
export const loadProductsDataSuccess = createAction(
  type('[Global/API] Load products data success'),
  props<{ products: ListProducts[] }>()
);