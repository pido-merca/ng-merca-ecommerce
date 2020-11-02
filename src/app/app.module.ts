import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBrowserModule } from './browser/app-browser.module';
import { TranslocoBrowserModule } from './browser/transloco-browser.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBrowserModule,
    BrowserAnimationsModule,
    TranslocoBrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
