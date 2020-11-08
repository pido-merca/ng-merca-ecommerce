import { categoriesDataReducer as listCategories } from '@home/store/reducers/categories.reducer';
import { productsDataReducer as listProducts } from '@home/store/reducers/products.reducer';
import { combineReducers } from '@ngrx/store';

export const homeRootReducer = combineReducers({
  listCategories,
  listProducts
});
