import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateBrowserModule } from './browser/translate-browser.module';
import { TranslatePipe } from './pages/pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateBrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
