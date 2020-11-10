import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-cart-bottom',
  templateUrl: './cart-bottom.component.html',
  styleUrls: ['./cart-bottom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartBottomComponent {

  @Output() clickOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() total: number;
  constructor() {}
}
