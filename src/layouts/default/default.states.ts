import { AuthGuard } from '../../helpers/auth/guards/auth.guard';
import { LayoutsComponent } from '../layouts.component';
import { NavBarComponent } from '../../components/navbar/navbar.component';

export let DEFAULT_STATES: any[] = [
  {
    name: 'main.layouts',
    resolve: [ AuthGuard.login ],
    abstract: true,
    views: {
      '$default@main': { component: LayoutsComponent },
      'navbar': { component: NavBarComponent }
    },
  }
];
