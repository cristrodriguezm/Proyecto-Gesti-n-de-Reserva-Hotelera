import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadoscuentasPageRoutingModule } from './empleadoscuentas-routing.module';

import { EmpleadoscuentasPage } from './empleadoscuentas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadoscuentasPageRoutingModule
  ],
  declarations: [EmpleadoscuentasPage]
})
export class EmpleadoscuentasPageModule {}
