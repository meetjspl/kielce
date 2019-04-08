import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RemovalModalComponent } from './removal-modal.component';

@NgModule({
  declarations: [RemovalModalComponent],
  imports: [CommonModule],
  exports: [RemovalModalComponent],
  entryComponents: [RemovalModalComponent],
  providers: []
})
export class RemovalModalModule {}
