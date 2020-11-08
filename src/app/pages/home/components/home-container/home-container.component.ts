import { Component, Inject, OnInit } from '@angular/core';
import { ListCategories } from '@app/core/models/categories.interface';
import { IS_MOBILE } from '@core/tokens/app.tokens';
import { Observable } from 'rxjs';
import { HomeFacade } from '@home/home.facade';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  constructor(
    @Inject(IS_MOBILE) public isMobile: boolean,
    private homeFacade: HomeFacade
  ) {}

  ngOnInit(): void {
    this.homeFacade.fetchAllCategories();
  }

  get allCategories$(): Observable<ListCategories[]> {
    return this.homeFacade.categoriesData$;
  }
}
