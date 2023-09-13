import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadocuentaPageRoutingModule } from './empleadocuenta-routing.module';

import { EmpleadocuentaPage } from './empleadocuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadocuentaPageRoutingModule
  ],
  declarations: [EmpleadocuentaPage]
})
export class EmpleadocuentaPageModule {}
