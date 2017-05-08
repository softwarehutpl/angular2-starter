import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Transition } from 'ui-router-ng2';

@Component({
  templateUrl: require('../templates/person-detail.template.html')
})
export class PersonDetailComponent implements OnInit {
  public pageTitle: string = 'Person detail';
  private person: any;

  constructor(
    private _peopleService: PeopleService,
    private trans: Transition
  ) {
  }

  public ngOnInit(): void {
    this._peopleService.getPerson(this.trans.params().id).subscribe((data) => {
      this.person = data;
    });
  }

  public getPerson(id: number) {
    this._peopleService.getPerson(id).subscribe(
        (person) => this.person = person);
  }

}
