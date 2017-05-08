import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar-default',
  templateUrl: require('./templates/navbar-default.template.html')
})

/**
 * Nav Bar Default Component
 * component for unauthorized session
 */
export class NavBarDefaultComponent {
  public pageTitle: string = 'Angular 2 starter';
}
