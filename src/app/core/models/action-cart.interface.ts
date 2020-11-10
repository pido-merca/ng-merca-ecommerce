import { ListProducts } from './products.interface';

export interface ActionCart {
  product: ListProducts;
  action: string;
}
