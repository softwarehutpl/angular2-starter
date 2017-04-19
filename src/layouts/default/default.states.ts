import { LoginComponent } from '../../app/modules/login/components/login.component';
import { AuthGuard } from '../../helpers/auth/guards/auth.guard';
import { LayoutsComponent } from '../layouts.component';

export let DEFAULT_STATES: any[] = [
  {
    name: 'main.layouts',
    component: LayoutsComponent,
    resolve: [ AuthGuard ],
    abstract: true,
  }, {
    name: 'main.login',
    url: '/login',
    views: {
        $default: { component: LoginComponent }
    },
  }
];
