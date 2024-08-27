import { Component } from '@angular/core';
interface Product {
  name: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'header';
  items: Product[];

  constructor() {
    this.items = [];
    document.addEventListener('addToCart', (event: Event) => {
      this.items.push((event as CustomEvent).detail);
    });
  }
}
