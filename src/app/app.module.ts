import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { globalReducers } from '@app/store/reducers';
import { AppFacade } from './app.facade';

import { TranslocoBrowserModule } from './browser/transloco-browser.module';
import { AppBrowserModule } from './browser/app-browser.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

import { environment } from '@environment';

export const REDUCER_TOKEN = new InjectionToken('Registered Reducers');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBrowserModule,
    BrowserAnimationsModule,
    TranslocoBrowserModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    CoreModule
  ],
  providers: [
    AppFacade,
    {
      provide: REDUCER_TOKEN,
      useValue: globalReducers,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
