import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
} from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { IS_BROWSER } from '@app/core/tokens/app.tokens';
import { HeaderFacade } from '@header/header.facade';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Header } from '@header/components/interfaces/header.interface';
import { HEADER_STYLE } from '@header/constants/header-constants';
import { homeRootRoute } from '@home/home-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {

  public headerAnimation = false;
  private scrollTopAnimation = 190;
  public isHome: boolean;
  public showTooltip: boolean;

  constructor(
    private router: Router,
    private facade: HeaderFacade,
    private changeDetector: ChangeDetectorRef,
    @Inject(IS_BROWSER) public isBrowser: boolean
  ) {}

  @HostListener('window:scroll', ['$event']) onWindowScroll(
    event: Event
  ): void {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.headerAnimation = offset >= this.scrollTopAnimation;
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.router.events
        .pipe(
          filter(
            (event) =>
              event instanceof ActivationEnd || event instanceof NavigationEnd
          )
        )
        .subscribe((router: ActivationEnd | NavigationEnd) => {
          if (router instanceof ActivationEnd) {
            if (router.snapshot.data.header_style) {
              this.facade.setHeaderStyle(router.snapshot.data.header_style);
            }
          }
          if (router instanceof NavigationEnd) {
            this.isHome = this.IsRootHome;
          }
        });
    }
  }

  get headerStyle$(): Observable<Header> {
    return this.facade.headerStyle$;
  }

  get headerTypeBanner(): string {
    return HEADER_STYLE.BANNER;
  }

  get currentRoute(): string {
    return this.router.url.split('?')[0];
  }

  get IsRootHome(): boolean {
    return this.currentRoute === homeRootRoute;
  }

  public typeHeaderBanner(typeHeader: string): boolean {
    return typeHeader === this.headerTypeBanner;
  }

  public goHome(): void {
    this.router.navigate([homeRootRoute]);
  }

  public toggleTooltip(value: boolean): void {
    this.showTooltip = value;
  }
}
