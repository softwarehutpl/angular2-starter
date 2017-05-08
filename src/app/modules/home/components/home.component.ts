import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: require('../templates/home.template.html')
})

/**
 * Home Component
 */
export class HomeComponent {
  public pageTitle: string = 'Home Page';
}
