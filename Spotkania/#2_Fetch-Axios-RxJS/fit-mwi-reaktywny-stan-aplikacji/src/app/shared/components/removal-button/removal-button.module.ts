import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RemovalModalModule } from '../removal-modal/removal-modal.module';
import { RemovalButtonComponent } from './removal-button.component';

@NgModule({
  declarations: [RemovalButtonComponent],
  imports: [CommonModule, RemovalModalModule],
  exports: [RemovalButtonComponent],
  providers: []
})
export class RemovalButtonModule {}
