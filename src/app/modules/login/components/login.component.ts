import { Component } from '@angular/core';
import { StateService } from 'ui-router-ng2';
import { AuthService } from '../../../../helpers/auth/services/auth.service';
import { Login } from '../login';

@Component({
    selector: 'login',
    templateUrl: 'app/modules/login/templates/login.template.html'
})

/**
 * Login Component
 * Form with vatidation, on submit with correct credentials
 * redirects to home state
 */
export class LoginComponent {
    public pageTitle: string = 'Login Page';
    public model = new Login('', '');
    public submitted = false;

    constructor(
        private stateService: StateService,
        private authService: AuthService
    ) {
    }

    public onSubmit() {
        this.submitted = true;
        this.authService.login(this.model.username, this.model.password)
            .then(() => {
                this.stateService.go('main.layouts.people');
            })
            .catch(() => {
                this.stateService.go('main.login');
            });
    }
}
