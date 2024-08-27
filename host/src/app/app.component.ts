import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'host-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host';

  constructor(private readonly router: Router) {
    document.addEventListener('redirect', ($event) => {
      const event = $event as CustomEvent;
      console.log(event.detail);

      this.router.navigate([event.detail]);
    });
  }
}
