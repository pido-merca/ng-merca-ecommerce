import { ListCategories } from '@app/core/models/categories.interface';
import { ListProducts } from '@app/core/models/products.interface';

export const homeFeatureName = 'homeModuleState';

export type HomeState = Readonly<{
  listCategories: ListCategories[],
  listProducts: ListProducts[],
}>;
