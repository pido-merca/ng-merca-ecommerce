import { Action, createReducer, on } from '@ngrx/store';
import { loadProductsDataSuccess } from '@home/store/actions';
import { ListProducts } from '@app/core/models/products.interface';

export const initialState: ListProducts[] = [];

const featureReducer = createReducer(
  initialState,
  on(loadProductsDataSuccess, (state, { products }) => {
    return products;
  })
);

export const productsDataReducer = (
  state: ListProducts[],
  action: Action
): ListProducts[] => {
  return featureReducer(state, action);
};
