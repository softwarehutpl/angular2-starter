import { LoginComponent } from './modules/login/components/login.component';
import { AuthGuard } from '../helpers/auth/guards/auth.guard';
import { AppComponent } from './app.component';
import { LayoutsComponent } from '../layouts/layouts.component';

/**
 * Initial States
 * Array that contains objects with application states
 */
export let INITIAL_STATES: any[] = [
  {
    name: 'main',
    component: AppComponent,
    abstract: true,
  }, {
    name: 'main.layouts',
    component: LayoutsComponent,
    resolve: [ AuthGuard ],
    abstract: true,
  }, {
    name: 'main.login',
    url: '/login',
    views: {
        $default: { component: LoginComponent }
    },
  }
];
