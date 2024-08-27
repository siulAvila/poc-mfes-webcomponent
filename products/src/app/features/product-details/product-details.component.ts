import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product-list/product-list.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product!: Product;

  constructor(private readonly router: Router) {
    this.product = this.router.getCurrentNavigation()?.extras.state as Product;
  }

  back(): void {
    this.router.navigate([{ outlets: { products: 'product-list' } }]);
  }

  addToCart(product: Product): void {
    const newEvent = new CustomEvent('addToCart', { detail: product });
    document.dispatchEvent(newEvent);
  }
}
