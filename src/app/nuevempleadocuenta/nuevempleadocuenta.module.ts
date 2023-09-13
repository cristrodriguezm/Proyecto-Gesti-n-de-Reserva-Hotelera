import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevempleadocuentaPageRoutingModule } from './nuevempleadocuenta-routing.module';

import { NuevempleadocuentaPage } from './nuevempleadocuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevempleadocuentaPageRoutingModule
  ],
  declarations: [NuevempleadocuentaPage]
})
export class NuevempleadocuentaPageModule {}
