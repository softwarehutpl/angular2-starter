
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './components/people.component';
import { PersonDetailComponent } from './components/person-detail.component';
import { PersonAddComponent } from './components/person-add.component';
import { PeopleService } from './services/people.service';
import { UIRouterModule } from 'ui-router-ng2';
import { FormsModule } from '@angular/forms';
import { PEOPLE_STATES } from './states/people.states';
import { DatePickerComponent } from '../../../components/datepicker/datepicker.component';

@NgModule({
  imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      UIRouterModule.forChild({
        states: PEOPLE_STATES
      })
  ],
  declarations: [
      PeopleComponent,
      PersonDetailComponent,
      PersonAddComponent,
      DatePickerComponent
  ],
  providers: [
      PeopleService,
  ]
})

export class PeopleModule {
}
