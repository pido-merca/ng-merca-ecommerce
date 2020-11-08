import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListProducts } from '@app/core/models/products.interface';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductsComponent {

  @Input() product: ListProducts;
  constructor() {}
}
