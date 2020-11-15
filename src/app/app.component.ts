import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IS_BROWSER } from '@core/tokens/app.tokens';
import { routeAnimations } from '@pages/ux/animations/routing-animation';
import { DomManipulateService } from '@core/services/dom-manipulate.service';
import { CartService } from '@core/services/cart.service';
import { CartShopping } from '@core/models/cart.interface';
import { ActionCart } from '@core/models/action-cart.interface';
import { MobileService } from '@core/services/mobile.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { homeRootRoute } from '@home/home-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: routeAnimations,
})
export class AppComponent implements OnInit {

  public isOpen: boolean;
  public isShowCart: boolean;

  constructor(
    @Inject(IS_BROWSER) public isBrowser: boolean,
    private mobileDeviceService: MobileService,
    private domManipulateService: DomManipulateService,
    private cartService: CartService,
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

  get isMobile$(): Observable<boolean> {
    return this.mobileDeviceService.isMobileDevice$.pipe(
      map((isMobileDevice) => isMobileDevice)
    );
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
    const value =
    event.product.categories === 'Carnes' || event.product.categories === 'Granos'
      ? 0.5
      : 1;
    this.cartService.actionCart(event.product, event.action, value);
  }

  public cleanCart(event: boolean): void {
    this.cartService.clearCart();
  }

  public showCart(show: boolean): void {
    console.log(show);
    this.isShowCart = show;
  }
}
