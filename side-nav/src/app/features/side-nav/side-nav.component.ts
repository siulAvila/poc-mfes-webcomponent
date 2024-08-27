import { Component } from '@angular/core';

@Component({
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  standalone: true,
})
export class SideNavComponent {
  constructor() {}

  redirect(route: string): void {
    const event = new CustomEvent('redirect', { detail: route });
    document.dispatchEvent(event);
  }
}
