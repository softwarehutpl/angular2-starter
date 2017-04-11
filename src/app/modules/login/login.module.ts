
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { FormsModule } from '@angular/forms';

/**
 * Login Module
 * imports FormsModule for angular forms support and login component with form
 */
@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        LoginComponent,
    ]
})

export class LoginModule {
}
