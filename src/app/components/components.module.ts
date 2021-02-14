import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
