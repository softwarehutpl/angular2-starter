import { AuthGuard } from '../../../../helpers/auth/guards/auth.guard';
import { PersonAddComponent } from '../components/person-add.component';
import { PeopleComponent } from '../components/people.component';
import { PersonDetailComponent } from '../components/person-detail.component';

/** The top level state(s) */
export let PEOPLE_STATES: any[] = [
    {
        name: 'people',
        url: '/people',
        component: PeopleComponent,
        resolve: [ AuthGuard ],
    },
    {
        name: 'person',
        url: '/people/:id',
        component: PersonDetailComponent,
        resolve: [ AuthGuard ],
    },
    {
        name: 'add_person',
        url: '/people/add',
        component: PersonAddComponent,
        resolve: [ AuthGuard ],
    },
];
