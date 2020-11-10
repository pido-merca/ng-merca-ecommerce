import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IS_BROWSER } from '@core/tokens/app.tokens';
import { routeAnimations } from '@pages/ux/animations/routing-animation';
import { DomManipulateService } from '@core/services/dom-manipulate.service';
import { CartService } from '@core/services/cart.service';
import { CartShopping } from '@core/models/cart.interface';
import { Observable } from 'rxjs';
import { ActionCart } from './core/models/action-cart.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: routeAnimations,
})
export class AppComponent implements OnInit {

  public isOpen: boolean;

  constructor(
    @Inject(IS_BROWSER) public isBrowser: boolean,
    private domManipulateService: DomManipulateService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.init();
  }

  get isAnimated(): boolean {
    return this.isBrowser;
  }

  get total$(): Observable<number> {
    return this.cartService.total$;
  }

  get cartShopping$(): Observable<CartShopping> {
    return this.cartService.cartShopping$;
  }

  public animation(outlet: RouterOutlet): boolean {
    return (
      this.isAnimated &&
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animation
    );
  }

  public openCartModal(open: boolean): void {
    this.isOpen = open;
    this.domManipulateService.setBodyScroll(!open);
  }

  public actionCart(event: ActionCart): void {
    this.cartService.actionCart(event.product, event.action);
  }
}
