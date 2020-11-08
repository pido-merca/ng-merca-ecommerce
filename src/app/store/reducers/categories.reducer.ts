import { Action, createReducer, on } from '@ngrx/store';
import { ListCategories } from '@core/models/categories.interface';
import { loadCategoriesDataSuccess } from '@app/store/actions';

export const initialState: ListCategories[] = [];

const featureReducer = createReducer(
  initialState,
  on(loadCategoriesDataSuccess, (state, { categories }) => {
    return categories;
  })
);

export const categoriesDataReducer = (
  state: ListCategories[],
  action: Action
): ListCategories[] => {
  return featureReducer(state, action);
};
