import { Component, OnInit } from '@angular/core';
import { ListCategories } from '@app/core/models/categories.interface';
import { Observable } from 'rxjs';
import { HomeFacade } from '@home/home.facade';
import { MobileService } from '@app/core/services/mobile.service';
import { map } from 'rxjs/operators';
import { ListProducts } from '@app/core/models/products.interface';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.container.html',
  styleUrls: ['./home-container.container.scss'],
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private homeFacade: HomeFacade,
    private mobileDeviceService: MobileService
  ) {}

  ngOnInit(): void {
    this.homeFacade.fetchAllCategories();
    this.homeFacade.fetchAllProducts();
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
