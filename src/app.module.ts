import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { INITIAL_STATES } from './app.states';
import { AppComponent } from './app/app.component';
import { PeopleModule } from './app/modules/people/people.module';
import { LoginModule } from './app/modules/login/login.module';
import { NavBarComponent } from './components/navbar/navbar.component';
import { StateService } from 'ui-router-ng2';
import { AuthService } from './helpers/auth/services/auth.service';

@NgModule({
  imports: [
      BrowserModule,
      CommonModule,
      UIRouterModule.forRoot({
          states: INITIAL_STATES,
          otherwise: { state: 'home', params: {} },
          useHash: true,
      }),
      PeopleModule,
      LoginModule,
      HttpModule,
      FormsModule
  ],
  declarations: [
      AppComponent,
      NavBarComponent,
  ],
  providers: [
      AuthService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor(state: StateService) {
      state.defaultErrorHandler((error) => {
        console.log('%c error ', 'background: #F00; color: #FFF', error);
        state.go('login');
      });

    }
}
