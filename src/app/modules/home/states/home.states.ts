import { HomeComponent } from '../components/home.component';

export let HOME_STATES: any[] = [
  {
    name: 'home',
    parent: 'main.default',
    url: '/home',
    views: {
      '$default@main': { component: HomeComponent },
    }
  }, {
    name: 'main.anonymous.home',
    url: '/',
    views: {
      '$default@main': { component: HomeComponent },
    },
  }
];
