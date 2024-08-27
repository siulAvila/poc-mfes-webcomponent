import { NgModule, Injector, DoBootstrap, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],

  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow usage of custom elements
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('app-about-us', myElement); // Register the custom element
  }

  ngDoBootstrap() {} // Prevent Angular from bootstrapping automatically
}
