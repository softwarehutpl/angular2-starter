import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from './notification/notification.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [
    NgbModule.forRoot(),
  ],
  declarations: [
    NotificationComponent,
  ],
  entryComponents: [
    NotificationComponent
  ],
  providers: [
    ModalService,
  ],
})

/**
 * Modal Module
 */
export class ModalModule {
}
