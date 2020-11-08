import { createSelector } from '@ngrx/store';

import { headerSelector } from '@header/store/selects/header-feature.selector';
import { HeaderState } from '@header/store/state/header.state';

export const fetchHeaderStyle = createSelector(
  headerSelector,
  (state: HeaderState) => state.headerStyle
);
