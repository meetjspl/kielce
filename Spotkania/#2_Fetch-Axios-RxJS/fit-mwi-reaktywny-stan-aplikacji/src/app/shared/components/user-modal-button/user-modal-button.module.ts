import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModalModule } from '@shared/containers/user-modal/user-modal.module';
import { UserModalButtonComponent } from './user-modal-button.component';

@NgModule({
  declarations: [UserModalButtonComponent],
  imports: [CommonModule, UserModalModule],
  exports: [UserModalButtonComponent],
  providers: []
})
export class UserModalButtonModule {}
