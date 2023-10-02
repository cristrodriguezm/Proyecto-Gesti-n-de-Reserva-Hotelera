import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagomediosPageRoutingModule } from './pagomedios-routing.module';

import { PagomediosPage } from './pagomedios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagomediosPageRoutingModule
  ],
  declarations: [PagomediosPage]
})
export class PagomediosPageModule {}
