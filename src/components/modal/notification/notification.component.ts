import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: require('./notification.template.html')
})

export class NotificationComponent {
  @Input() public title;
  @Input() public message;

  constructor(public activeModal: NgbActiveModal) {}
}
