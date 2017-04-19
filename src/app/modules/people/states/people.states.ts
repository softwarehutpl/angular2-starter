import { PeopleComponent } from '../components/people.component';
import { PersonDetailComponent } from '../components/person-detail.component';
import { PersonAddComponent } from '../components/person-add.component';

/** The top level state(s) */
export let PEOPLE_STATES: any[] = [
  {
    name: 'main.layouts.people',
    url: '/people',
    views: {
      $default: { component: PeopleComponent }
    },
  },
  {
    name: 'main.layouts.people.person',
    url: '/:id',
    views: {
      '$default@main.layouts': { component: PersonDetailComponent }
    },
  },
  {
    name: 'main.layouts.people.add_person',
    url: '/add',
    views: {
      '$default@main.layouts': { component: PersonAddComponent }
    },
  },
];
