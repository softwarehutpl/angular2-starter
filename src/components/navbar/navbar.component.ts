import { Component } from '@angular/core';
import { StateService } from 'ui-router-ng2';
import { AuthService } from '../../helpers/auth/services/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'components/navbar/templates/navbar.template.html'
})

export class NavBarComponent {
    public pageTitle: string = 'Angular 2 starter';
    public isAuthorized: boolean = false;
    constructor(
        private stateService: StateService,
        private authService: AuthService
    ) {
        this.isAuthorized = this.authService.authStatus();

    }
    public logout() {
        this.authService.logout()
            .then(() => {
                this.stateService.go('login');
            });
    }
}
