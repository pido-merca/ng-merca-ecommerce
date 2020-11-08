import { ListCategories } from '@app/core/models/categories.interface';

export const homeFeatureName = 'homeModuleState';

export type HomeState = Readonly<{
  listCategories: ListCategories[],
}>;
