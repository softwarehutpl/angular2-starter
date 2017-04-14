import { LoginComponent } from './app/modules/login/components/login.component';
import { AuthGuard } from './helpers/auth/guards/auth.guard';

/**
 * Initial States
 * Array that contains objects with application states
 */
export let INITIAL_STATES: any[] = [
  {
    name: 'home',
    url: '/',
    resolve: [ AuthGuard ]
  },
  {
    name: 'login',
    url: '/login',
    component: LoginComponent
  }
];
