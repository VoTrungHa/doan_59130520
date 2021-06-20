import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/share/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class LoginmodalService {
  private isOpen = false;
  constructor(private modalService: NgbModal) {}

  open(): NgbModalRef {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef = this.modalService.open(LoginComponent, {
      size:'sm',
      centered: true,
      backdrop: 'static',
    });
    modalRef.result.then(
      (result) => {
        this.isOpen = false;
      },
      (reason) => {
        this.isOpen = false;
      }
    );
    return modalRef;
  }
}
