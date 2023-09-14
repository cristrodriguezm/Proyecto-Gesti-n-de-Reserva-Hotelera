import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FechasreservaPageRoutingModule } from './fechasreserva-routing.module';

import { FechasreservaPage } from './fechasreserva.page';
import { CalendarioService } from '../calendario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FechasreservaPageRoutingModule
  ],
  declarations: [FechasreservaPage],
  providers: [CalendarioService]  
})
export class FechasreservaPageModule {}
