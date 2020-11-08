import { categoriesDataReducer as listCategories } from '@home/store/reducers/categories.reducer';
import { combineReducers } from '@ngrx/store';

export const homeRootReducer = combineReducers({
  listCategories
});
