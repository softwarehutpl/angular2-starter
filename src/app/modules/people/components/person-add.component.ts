import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { StateService } from 'ui-router-ng2';
import { Person } from '../person';

@Component({
    selector: 'add_person',
    templateUrl: require('../templates/person-add.template.html')
})

/**
 * Person Add Component
 * defines person data model for form, on submit data are send to backend
 */
export class PersonAddComponent {
  public model = new Person('', '', '', '', null, '12/01/1972');
  public submitted = false;

  constructor(
    private peopleService: PeopleService,
    private stateService: StateService
  ) {
  }
  public onSubmit() {
    this.submitted = true;
    console.log('this.model ', this.model);
    this.peopleService.addPerson(this.model).subscribe(
        (response) => this.stateService.go('people') );
  }
}
