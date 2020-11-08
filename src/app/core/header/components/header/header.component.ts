import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { IS_BROWSER } from '@app/core/tokens/app.tokens';
import { HeaderFacade } from '@header/header.facade';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Header } from '@header/components/interfaces/header.interface';
import { HEADER_STYLE } from '@header/constants/header-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private facade: HeaderFacade,
    @Inject(IS_BROWSER) public isBrowser: boolean
  ) {}

  ngOnInit(): void {}

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
        });
    }
  }

  get headerStyle$(): Observable<Header> {
    return this.facade.headerStyle$;
  }

  get headerTypeBanner(): string {
    return HEADER_STYLE.BANNER;
  }

  public typeHeaderBanner(typeHeader: string): boolean {
    return typeHeader === this.headerTypeBanner;
  }
}
