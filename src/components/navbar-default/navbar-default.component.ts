import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar-default',
  templateUrl: 'components/navbar-default/templates/navbar-default.template.html'
})

/**
 * Nav Bar Default Component
 * component for unauthorized session
 */
export class NavBarDefaultComponent {
  public pageTitle: string = 'Angular 2 starter';
}
