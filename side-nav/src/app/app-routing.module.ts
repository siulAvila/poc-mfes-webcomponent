import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SideNavComponent } from './features/side-nav/side-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: 'side-nav',
    component: SideNavComponent,
    outlet: 'sideNav',
  },
  {
    path: '**',
    redirectTo: 'side-nav',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule],
})
export class AppRoutingModule {}
