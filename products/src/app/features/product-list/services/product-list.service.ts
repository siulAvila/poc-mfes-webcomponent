import { Injectable } from '@angular/core';

@Injectable()
export class ProductListService {
  id: number;
  constructor() {
    setInterval(() => {
      console.log('chamou serviço');
    }, 1000);
    this.id = new Date().getTime();
  }

  hello(): void {
    console.log('a', this.id);
  }
}
