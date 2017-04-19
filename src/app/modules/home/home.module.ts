import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { HOME_STATES } from './states/home.states';
import { HomeComponent } from './components/home.component';
import { FormsModule } from '@angular/forms';
import {
  NavBarDefaultComponent
} from '../../../components/navbar-default/navbar-default.component';

@NgModule({
  imports: [
    FormsModule,
    UIRouterModule.forChild({
        states: HOME_STATES
    })
  ],
  declarations: [
    HomeComponent,
    NavBarDefaultComponent,
  ]
})

/**
 * Home Module
 */
export class HomeModule {
}
