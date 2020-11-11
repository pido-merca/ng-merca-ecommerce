import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCategories } from '@app/core/models/categories.interface';
import { ListProducts } from '@app/core/models/products.interface';
import { MobileService } from '@core/services/mobile.service';
import { HomeFacade } from '@home/home.facade';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss'],
})
export class HomeItemComponent implements OnInit, OnDestroy {
  public nameCategory: string;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private homeFacade: HomeFacade,
    private mobileDeviceService: MobileService,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe(
        (param) => {
          this.nameCategory = param.category;
          this.homeFacade.fetchAllProductsByCategory(this.nameCategory);
        }
      )
    );
    this.homeFacade.fetchAllCategories();
  }

  get allCategories$(): Observable<ListCategories[]> {
    return this.homeFacade.categoriesData$;
  }

  get allProducts$(): Observable<ListProducts[]> {
    return this.homeFacade.productsData$;
  }

  get isMobile$(): Observable<boolean> {
    return this.mobileDeviceService.isMobileDevice$.pipe(
      map((isMobileDevice) => isMobileDevice)
    );
  }
}
