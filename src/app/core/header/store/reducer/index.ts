import { combineReducers } from '@ngrx/store';

import { headerStyleReducer as headerStyle } from '@header/store/reducer/header.reducer';

export const headerRootReducer = combineReducers({
  headerStyle,
});
