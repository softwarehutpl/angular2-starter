import { LoginComponent } from '../components/login.component';

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
