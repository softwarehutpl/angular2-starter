import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: require('../templates/home.template.html')
})

/**
 * Home Component
 */
export class HomeComponent {
  public pageTitle: string = 'Home Page';
}
