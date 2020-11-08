import { ListCategories } from '@app/core/models/categories.interface';
import { homeFeatureName, HomeState } from '@app/pages/home/store/state/home.state';
import { headerFeatureName } from '@header/constants/header-constants';
import { HeaderState } from '@header/store/state/header.state';

export type State = Readonly<{
  [homeFeatureName]: HomeState;
  [headerFeatureName]: HeaderState;
}>;
