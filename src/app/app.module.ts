import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { INITIAL_STATES } from './app.states';
import { AppComponent } from './app.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { HomeModule } from './modules/home/home.module';
import { PeopleModule } from './modules/people/people.module';
import { LoginModule } from './modules/login/login.module';
import { StateService, trace, Category, UIView } from 'ui-router-ng2';
import { AuthService } from '../helpers/auth/services/auth.service';

trace.enable(Category.TRANSITION, Category.VIEWCONFIG);
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
    }),
    LayoutsModule,
    HomeModule,
    PeopleModule,
    LoginModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
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
    constructor(stateService: StateService) {
      stateService.defaultErrorHandler((error) => {
        console.log('%c error ', 'background: #F00; color: #FFF', error);
        if (error === 'unauthorized_home') {
          stateService.go('main.home_public');
        } else {
          stateService.go('main.login');
        }
      });
    }
}
