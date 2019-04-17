import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '@shared/containers/user-modal/user-modal.component';

@Component({
  selector: 'fit-user-modal-button',
  templateUrl: './user-modal-button.component.html'
})
export class UserModalButtonComponent implements OnInit {
  @Input() sId?: number;
  @Output() confirmEvent: EventEmitter<void>;
  @Output() cancelEvent: EventEmitter<void>;

  constructor(private ngbModal: NgbModal) {
    this.confirmEvent = new EventEmitter();
    this.cancelEvent = new EventEmitter();
  }

  ngOnInit(): void {}

  onButtonClick() {
    const modalRef = this.ngbModal.open(UserModalComponent);
    modalRef.componentInstance.id = this.sId;
    modalRef.result.then(() => this.confirmEvent.next(), () => this.cancelEvent.next());
  }
}
