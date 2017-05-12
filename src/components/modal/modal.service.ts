import { Injectable } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
/**
 * Modal Service
 */
export class ModalService {

  constructor(
    private modalService: NgbModal
  ) {
  }

  public notification(title: string, message: string) {
    const modalNotification = this.modalService.open(NotificationComponent);
    modalNotification.componentInstance.title = title;
    modalNotification.componentInstance.message = message;
    return modalNotification;
  }
}
