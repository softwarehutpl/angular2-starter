import { AuthGuard } from '../../helpers/auth/guards/auth.guard';
import { AnonymousComponent } from './anonymous.component';
import { NavBarDefaultComponent } from '../../components/navbar-default/navbar-default.component';

export let ANONYMOUS_STATES: any[] = [
  {
    name: 'main.anonymous',
    resolve: [ AuthGuard.loggedin ],
    abstract: true,
    views: {
      '$default@main': { component: AnonymousComponent },
      'navbar': { component: NavBarDefaultComponent }
    },
  }
];
