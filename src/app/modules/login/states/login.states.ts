import { LoginComponent } from '../components/login.component';
import {
  NavBarDefaultComponent
} from '../../../../components/navbar-default/navbar-default.component';

export let LOGIN_STATES: any[] = [
  {
    name: 'login',
    parent: 'main.anonymous',
    url: '/login',
    views: {
      $default: { component: LoginComponent },
    },
  }
];
