import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { PeopleInterface } from '../people.interface';

@Injectable()
export class PeopleService {
    public _peopleUrl = 'http://localhost:3000/people';
    constructor(
        private _http: Http
    ) { }

    public getPeople(): Observable<PeopleInterface[]> {
        return this._http.get(this._peopleUrl)
            .map((response: Response) => response.json());
    }

    public getPerson(id: number): Observable<any> {
        return this._http.get(this._peopleUrl + '/' + id)
        .map((response: Response) => response.json());
    }

    public addPerson(data: any): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._peopleUrl, JSON.stringify(data), { headers })
            .map((res) => res.json());
    }

}
