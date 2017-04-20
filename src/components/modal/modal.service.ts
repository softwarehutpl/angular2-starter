import { Injectable } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    return new Promise((resolve, reject) => {
      const modalNotification = this.modalService.open(NotificationComponent);
      modalNotification.componentInstance.title = title;
      modalNotification.componentInstance.message = message;
      resolve();
    });
  }
}
