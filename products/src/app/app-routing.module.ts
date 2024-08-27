import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponent } from './features/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
    // loadComponent: () =>
    //   import('./features/product-list/product-list.component').then(
    //     (mod) => mod.ProductListComponent
    //   ),
    outlet: 'products',
  },
  {
    path: 'product-details',
    loadComponent: () =>
      import('./features/product-details/product-details.component').then(
        (mod) => mod.ProductDetailsComponent
      ),
    outlet: 'products',
  },
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule],
})
export class AppRoutingModule {}
