import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'side-nav';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.initialNavigation();
    this.router.navigate([{ outlets: { sideNav: 'side-nav' } }]);
  }
}
