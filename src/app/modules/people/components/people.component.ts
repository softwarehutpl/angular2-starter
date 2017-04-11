
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { PeopleInterface } from '../people.interface';

@Component({
    selector: 'people',
    templateUrl: 'app/modules/people/templates/people.template.html'
})
export class PeopleComponent implements OnInit {
    public pageTitle: string = 'People List';
    public people: PeopleInterface[];
    public errorMessage: string;

    constructor(private _peopleService: PeopleService) {

    }
    public ngOnInit(): void {
        this._peopleService.getPeople()
            .subscribe((people) => this.people = people,
                (error) => this.errorMessage = error);
    }
}
