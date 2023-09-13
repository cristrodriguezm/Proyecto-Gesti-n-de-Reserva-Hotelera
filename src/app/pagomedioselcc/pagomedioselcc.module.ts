import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagomedioselccPageRoutingModule } from './pagomedioselcc-routing.module';

import { PagomedioselccPage } from './pagomedioselcc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagomedioselccPageRoutingModule
  ],
  declarations: [PagomedioselccPage]
})
export class PagomedioselccPageModule {}
