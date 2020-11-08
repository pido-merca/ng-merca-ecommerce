import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCategories } from '@app/core/models/categories.interface';
import { ListProducts } from '@app/core/models/products.interface';
import { MobileService } from '@core/services/mobile.service';
import { HomeFacade } from '@home/home.facade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss'],
})
export class HomeItemComponent implements OnInit {
  public nameCategory: string;

  constructor(
    private homeFacade: HomeFacade,
    private mobileDeviceService: MobileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.nameCategory = param.category;
    });
    this.homeFacade.fetchAllCategories();
    this.homeFacade.fetchAllProducts();
    console.log(this.nameCategory);
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
