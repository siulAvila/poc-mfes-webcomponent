import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./features/products/products.component').then(
            (mod) => mod.ProductsComponent
          ),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./features/about-us/about-us.component').then(
            (mod) => mod.AboutUsComponent
          ),
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
