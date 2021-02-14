import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { OrganizacionComponent } from './organizacion.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [OrganizacionComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    OrganizacionRoutingModule
  ]
})
export class OrganizacionModule { }
