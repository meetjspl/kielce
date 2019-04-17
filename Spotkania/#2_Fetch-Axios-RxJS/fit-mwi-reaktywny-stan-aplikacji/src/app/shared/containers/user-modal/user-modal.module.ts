import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModalComponent } from './user-modal.component';

@NgModule({
  declarations: [UserModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserModalComponent],
  entryComponents: [UserModalComponent],
  providers: []
})
export class UserModalModule {}
