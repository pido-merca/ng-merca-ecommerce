import { createFeatureSelector } from '@ngrx/store';

import { headerFeatureName } from '@header/constants/header-constants';
import { HeaderState } from '@header/store/state/header.state';

export const headerSelector = createFeatureSelector<HeaderState>(
  headerFeatureName
);
