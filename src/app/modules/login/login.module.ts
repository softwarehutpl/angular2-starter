import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { LOGIN_STATES } from './states/login.states';
import { LoginComponent } from './components/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
      UIRouterModule.forChild({
        states: LOGIN_STATES
    })
  ],
  declarations: [
    LoginComponent,
  ],
})

/**
 * Login Module
 * imports FormsModule for angular forms support and login component with form
 */
export class LoginModule {
}
