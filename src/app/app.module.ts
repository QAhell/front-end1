import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent], // Insert  here for local development
})
export class AppModule {
  constructor(injector: Injector) {
    const frontEnd1Element = createCustomElement(AppComponent, {injector});
    customElements.define('front-end1', frontEnd1Element);
  }

  ngDoBootstrap() {
  }
}
