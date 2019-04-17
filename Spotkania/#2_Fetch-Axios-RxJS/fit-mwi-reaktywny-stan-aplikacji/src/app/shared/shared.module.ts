import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RemovalButtonModule } from './components/removal-button/removal-button.module';
import { UserModalButtonModule } from './components/user-modal-button/user-modal-button.module';
import { UsersFormModule } from './containers/users-form/users-form.module';
import { UsersGridModule } from './containers/users-grid/users-grid.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModule, RemovalButtonModule, UserModalButtonModule, UsersFormModule, UsersGridModule],
  exports: [RemovalButtonModule, UserModalButtonModule, UsersFormModule, UsersGridModule],
  providers: []
})
export class SharedModule {}
