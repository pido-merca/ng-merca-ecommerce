import { ListProducts } from './products.interface';

export interface CartShopping {
  id: number;
  name: string;
  img: string;
  products: ListProducts[];
}
