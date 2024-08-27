import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductListService } from './services/product-list.service';
export interface Product {
  name: string;
  image: string;
  description: string;
  price: number;
}
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductListService],
})
export class ProductListComponent {
  data: Product[];
  title = 'products';

  constructor(
    private readonly router: Router,
    private readonly productListService: ProductListService
  ) {
    this.data = [
      {
        name: 'Wireless Mouse',
        image:
          'https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m171/gallery/m171-mouse-top-view-grey.png',
        description:
          'A sleek and comfortable wireless mouse with ergonomic design.',
        price: 29.99,
      },
      {
        name: 'Bluetooth Headphones',
        image:
          'https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/JBLT770NCPTO_PRD/JBLT770NCPTO_PRD_447_1.jpeg',
        description:
          'High-quality Bluetooth headphones with noise-cancellation feature.',
        price: 89.99,
      },
      {
        name: 'Smartphone Stand',
        image:
          'https://m.media-amazon.com/images/I/410keNlvUOL._AC_SL1100_.jpg',
        description: 'Adjustable smartphone stand for hands-free viewing.',
        price: 15.99,
      },
      {
        name: 'Portable Charger',
        image:
          'https://m.media-amazon.com/images/I/51L3GFbMQHS._AC_SL1500_.jpg',
        description:
          'Compact and powerful portable charger with fast charging capability.',
        price: 39.99,
      },
      {
        name: 'USB-C Hub',
        image:
          'https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/I4UCA11CPO_PRD/I4UCA11CPO_PRD_1500_1.jpeg',
        description:
          'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.',
        price: 49.99,
      },
    ];
    this.productListService.hello();
  }

  addToCart(product: Product): void {
    const newEvent = new CustomEvent('addToCart', { detail: product });
    document.dispatchEvent(newEvent);
  }

  goToProductDetails(product: Product): void {
    this.router.navigate([{ outlets: { products: 'product-details' } }], {
      state: product,
    });
  }
}
