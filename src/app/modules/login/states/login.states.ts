import { LoginComponent } from '../components/login.component';
import {
  NavBarDefaultComponent
} from '../../../../components/navbar-default/navbar-default.component';

export let LOGIN_STATES: any[] = [
  {
    name: 'main.login',
    url: '/login',
    views: {
      $default: { component: LoginComponent },
      navbar: { component: NavBarDefaultComponent }
    },
  }
];
