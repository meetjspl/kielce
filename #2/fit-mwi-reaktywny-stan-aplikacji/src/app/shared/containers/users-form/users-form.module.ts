import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersFormComponent } from './users-form.component';

@NgModule({
  declarations: [UsersFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [UsersFormComponent],
  providers: []
})
export class UsersFormModule {}
