import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { StateService } from 'ui-router-ng2';
import { Person } from '../person';

@Component({
    selector: 'add_person',
    templateUrl: 'app/modules/people/templates/person-add.template.html'
})

/**
 * Person Add Component
 * defines person data model for form, on submit data are send to backend
 */
export class PersonAddComponent {

    public model = new Person('', '', '', '', null);
    public submitted = false;

    constructor(
        private peopleService: PeopleService,
        private stateService: StateService
    ) {
    }
    public onSubmit() {
        this.submitted = true;
        this.peopleService.addPerson(this.model).subscribe(
            (response) => this.stateService.go('people') );
    }
}
