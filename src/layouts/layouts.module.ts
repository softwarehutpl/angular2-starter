import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { DEFAULT_STATES } from './default/default.states';
import { LayoutsComponent } from './layouts.component';
import { NavBarComponent } from '../components/navbar/navbar.component';

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: DEFAULT_STATES
    })
  ],
  declarations: [
    LayoutsComponent,
    NavBarComponent
  ]
})

/**
 * Layouts Module
 */
export class LayoutsModule {
}
