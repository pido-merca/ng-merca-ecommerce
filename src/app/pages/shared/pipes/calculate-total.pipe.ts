import { Pipe, PipeTransform } from '@angular/core';
import { ListProducts } from '@app/core/models/products.interface';

@Pipe({
  name: 'calculateTotal',
})
export class CalculateTotalPipe implements PipeTransform {
  transform(products: ListProducts[]): number {
    const acum = 0;
    products.forEach((product) => acum + product.price);
    return acum;
  }
}
