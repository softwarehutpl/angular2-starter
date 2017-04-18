import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { INITIAL_STATES } from './app.states';
import { AppComponent } from './app.component';
import { LayoutsComponent } from '../layouts/layouts.component';
import { PeopleModule } from './modules/people/people.module';
import { LoginModule } from './modules/login/login.module';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { StateService, trace, Category, UIView } from 'ui-router-ng2';
import { AuthService } from '../helpers/auth/services/auth.service';


trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

@NgModule({
  imports: [
      BrowserModule,
      CommonModule,
      UIRouterModule.forRoot({
          states: INITIAL_STATES,
          otherwise: { state: 'main', params: {} },
          useHash: true,
      }),
      PeopleModule,
      LoginModule,
      HttpModule,
      FormsModule
  ],
  declarations: [
      AppComponent,
      LayoutsComponent,
      NavBarComponent,
  ],
  providers: [
      AuthService,
  ],
  bootstrap: [ UIView ]
})

/**
 * App Module
 * Main module where are imported other modules
 * and application components
 * also application routes are initiate here
 * class contain state error handler which is redirecting to login
 */
export class AppModule {
    constructor(state: StateService) {
      state.defaultErrorHandler((error) => {
        console.log('%c error ', 'background: #F00; color: #FFF', error);
        state.go('main.login');
      });
    }
}
