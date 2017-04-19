import { HomeComponent } from '../components/home.component';
import { AuthGuard } from '../../../../helpers/auth/guards/auth.guard';
import { NavBarComponent } from '../../../../components/navbar/navbar.component';
import {
  NavBarDefaultComponent
} from '../../../../components/navbar-default/navbar-default.component';

export let HOME_STATES: any[] = [
  {
    name: 'main.home',
    url: '',
    resolve: [ AuthGuard.home ],
    views: {
      '$default@main': { component: HomeComponent },
      'navbar': { component: NavBarComponent }
    }
  }, {
    name: 'main.home_public',
    url: '',
    views: {
      '$default@main': { component: HomeComponent },
      'navbar': { component: NavBarDefaultComponent }
    },
  }
];
