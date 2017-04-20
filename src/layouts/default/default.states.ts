import { AuthGuard } from '../../helpers/auth/guards/auth.guard';
import { DefaultComponent } from './default.component';
import { NavBarComponent } from '../../components/navbar/navbar.component';

export let DEFAULT_STATES: any[] = [
  {
    name: 'main.default',
    resolve: [ AuthGuard.login ],
    abstract: true,
    views: {
      '$default@main': { component: DefaultComponent },
      'navbar': { component: NavBarComponent }
    },
  }
];
