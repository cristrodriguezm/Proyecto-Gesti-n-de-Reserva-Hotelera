import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoclientecuentaPageRoutingModule } from './nuevoclientecuenta-routing.module';

import { NuevoclientecuentaPage } from './nuevoclientecuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoclientecuentaPageRoutingModule
  ],
  declarations: [NuevoclientecuentaPage]
})
export class NuevoclientecuentaPageModule {}
