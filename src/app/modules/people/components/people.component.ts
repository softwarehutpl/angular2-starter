import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'people',
  templateUrl: 'app/modules/people/templates/people.template.html'
})

/**
 * People Component
 * on init gets data using peopleService and set it to people array
 */
export class PeopleComponent implements OnInit {
  public pageTitle: string = 'People List';
  public people: any[];
  public errorMessage: string;

  constructor(private peopleService: PeopleService) {

  }
  public ngOnInit(): void {
    this.peopleService.getPeople()
      .subscribe((people) => this.people = people,
        (error) => this.errorMessage = error);
  }
}
