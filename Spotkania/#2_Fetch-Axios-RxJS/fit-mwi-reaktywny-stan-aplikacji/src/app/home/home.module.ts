import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [],
  providers: []
})
export class HomeModule {}
