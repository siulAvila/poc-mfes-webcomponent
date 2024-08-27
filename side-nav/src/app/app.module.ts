import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './features/side-nav/side-nav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SideNavComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('mf-side-nav', myElement); // Register the custom element
  }

  ngDoBootstrap() {} // Prevent Angular from bootstrapping automatically
}
