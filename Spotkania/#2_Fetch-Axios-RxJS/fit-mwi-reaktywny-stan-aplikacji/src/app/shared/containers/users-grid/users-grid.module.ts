import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RemovalButtonModule } from '@shared/components/removal-button/removal-button.module';
import { UserModalButtonModule } from '@shared/components/user-modal-button/user-modal-button.module';
import { UsersGridComponent } from './users-grid.component';

@NgModule({
  declarations: [UsersGridComponent],
  imports: [CommonModule, RemovalButtonModule, UserModalButtonModule],
  exports: [UsersGridComponent],
  providers: []
})
export class UsersGridModule {}
