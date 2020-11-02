import { Component, Inject, OnInit } from '@angular/core';
import { IS_MOBILE } from '@app/core/tokens/app.tokens';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {

  constructor(@Inject(IS_MOBILE) public isMobile: boolean) {}

  ngOnInit(): void {}
}
