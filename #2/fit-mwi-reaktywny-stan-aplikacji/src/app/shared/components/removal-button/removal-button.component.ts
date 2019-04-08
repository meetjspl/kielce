import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemovalModalComponent } from '../removal-modal/removal-modal.component';

@Component({
  selector: 'fit-removal-button',
  templateUrl: './removal-button.component.html'
})
export class RemovalButtonComponent implements OnInit {
  @Input() sId: any;
  @Output() confirmEvent: EventEmitter<void>;
  @Output() cancelEvent: EventEmitter<void>;

  constructor(private ngbModal: NgbModal) {
    this.confirmEvent = new EventEmitter();
    this.cancelEvent = new EventEmitter();
  }

  ngOnInit(): void {}

  onButtonClick() {
    const modalRef = this.ngbModal.open(RemovalModalComponent);
    modalRef.componentInstance.id = this.sId;
    modalRef.result.then(() => this.confirmEvent.next(), () => this.cancelEvent.next());
  }
}
