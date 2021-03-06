import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'components/modal/notification/notification.template.html'
})

export class NotificationComponent {
  @Input() public title;
  @Input() public message;

  constructor(public activeModal: NgbActiveModal) {}
}
