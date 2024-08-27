import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  constructor(private router: Router) {}
  ngOnDestroy(): void {
    // this.router.ngOnDestroy();
  }

  ngOnInit(): void {
    console.log(this.router);
    this.router.initialNavigation();
    this.router.navigate([{ outlets: { products: 'product-list' } }]);
  }
}
