import { createAction, props } from '@ngrx/store';
import { HeaderSelection } from '@header/components/interfaces/header.interface';
import { type } from '@app/utils/util';

export const setHeaderStyleAction = createAction(
  type('[Header/Data] Set Header Style'),
  props<{ selection: HeaderSelection }>()
);

export const headerActions = {
  setHeaderStyleAction,
};
