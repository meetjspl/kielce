import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fit-removal-modal',
  templateUrl: './removal-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemovalModalComponent implements OnInit {
  @Input() id: any;

  constructor(private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {}

  onConfirmClick(): void {
    this.ngbActiveModal.close();
  }

  onCancelClick(): void {
    this.ngbActiveModal.dismiss();
  }
}
