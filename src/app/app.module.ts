import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const frontEnd1Element = createCustomElement(AppComponent, {injector});
    customElements.define('front-end1', frontEnd1Element);
  }

  ngDoBootstrap() {
  }
}
