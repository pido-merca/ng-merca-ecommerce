import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IS_BROWSER } from '@core/tokens/app.tokens';
import { routeAnimations } from '@pages/ux/animations/routing-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: routeAnimations
})
export class AppComponent {
  constructor(
    @Inject(IS_BROWSER) public isBrowser: boolean
  ) { }

  get isAnimated(): boolean {
    return this.isBrowser;
  }

  public animation(outlet: RouterOutlet): boolean {
    return this.isAnimated && outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
