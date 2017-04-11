import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { StateService } from 'ui-router-ng2';
import { Person } from '../person';

@Component({
    selector: 'add_person',
    templateUrl: 'app/modules/people/templates/person-add.template.html'
})
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
        console.log('model', this.model);
        this.peopleService.addPerson(this.model).subscribe(
            (response) => this.stateService.go('people') );
    }
}
