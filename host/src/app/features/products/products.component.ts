import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsComponent {}
