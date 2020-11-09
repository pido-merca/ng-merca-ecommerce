import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-bottom',
  templateUrl: './cart-bottom.component.html',
  styleUrls: ['./cart-bottom.component.scss']
})
export class CartBottomComponent implements OnInit {

  @Output() clickOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
