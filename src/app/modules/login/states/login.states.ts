import { LoginComponent } from '../components/login.component';

export let LOGIN_STATES: any[] = [
  {
    name: 'main.login',
    url: '/login',
    views: {
        $default: { component: LoginComponent }
    },
  }
];
