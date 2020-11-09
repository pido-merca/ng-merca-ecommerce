import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@core/header/components/header/header.component';
import { TranslocoModule } from '@ngneat/transloco';
import { HeaderState } from '@header/store/state/header.state';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { headerFeatureName } from '@header/constants/header-constants';
import { HeaderFacade } from '@header/header.facade';
import { headerRootReducer } from '@header/store/reducer';


export const HEADER_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<HeaderState>
  >('Feature Header Reducers');

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    StoreModule.forFeature(headerFeatureName, HEADER_REDUCER_TOKEN),
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    HeaderFacade,
    {
      provide: HEADER_REDUCER_TOKEN,
      useValue: headerRootReducer
    }
  ]
})
export class HeaderModule { }
