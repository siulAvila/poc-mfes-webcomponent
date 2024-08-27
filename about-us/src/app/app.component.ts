import { Component } from '@angular/core';
import { ProductListService } from './services/product-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly productListService: ProductListService) {
    this.productListService.hello();
  }
  title = 'about-us';
}
