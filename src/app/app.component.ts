import { Component, OnInit } from '@angular/core';
import { AuthService } from '../helpers/auth/services/auth.service';

@Component({
    selector: 'starter-app',
    templateUrl: 'app/app.template.html',
})

export class AppComponent implements OnInit {
    public isAuthorized: boolean = true;
    constructor(
        private authService: AuthService
    ) {
    }

    public ngOnInit(): void {
        this.isAuthorized = this.authService.authStatus();
    }
}
