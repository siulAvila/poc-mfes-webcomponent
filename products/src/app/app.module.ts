import { NgModule, Injector, DoBootstrap, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './features/product-list/product-list.component';

registerLocaleData(localePt, 'pt');
declare var __webpack_public_path__: any;

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductListComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: APP_BASE_HREF, useValue: 'http://localhost:4500/' },
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow usage of custom elements
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    __webpack_public_path__ = 'http://localhost:4500/';
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('mf-products', myElement); // Register the custom element
  }

  ngDoBootstrap() {} // Prevent Angular from bootstrapping automatically
}
