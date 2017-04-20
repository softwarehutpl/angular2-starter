import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { DEFAULT_STATES } from './default/default.states';
import { ANONYMOUS_STATES } from './anonymous/anonymous.states';
import { DefaultComponent } from './default/default.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { NavBarComponent } from '../components/navbar/navbar.component';

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: [ ...DEFAULT_STATES, ...ANONYMOUS_STATES]
    })
  ],
  declarations: [
    DefaultComponent,
    AnonymousComponent,
    NavBarComponent
  ]
})

/**
 * Layouts Module
 */
export class LayoutsModule {
}
