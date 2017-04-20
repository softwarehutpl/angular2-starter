import { PeopleComponent } from '../components/people.component';
import { PersonDetailComponent } from '../components/person-detail.component';
import { PersonAddComponent } from '../components/person-add.component';

/** The top level state(s) */
export let PEOPLE_STATES: any[] = [
  {
    name: 'people',
    parent: 'main.default',
    url: '/people',
    views: {
      $default: { component: PeopleComponent }
    },
  },
  {
    name: 'people.person',
    url: '/:id',
    views: {
      '$default@main': { component: PersonDetailComponent }
    },
  },
  {
    name: 'people.add_person',
    url: '/add',
    views: {
      '$default@main': { component: PersonAddComponent }
    },
  },
];
