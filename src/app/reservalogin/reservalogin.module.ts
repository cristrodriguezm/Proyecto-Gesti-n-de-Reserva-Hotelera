import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaloginPageRoutingModule } from './reservalogin-routing.module';

import { ReservaloginPage } from './reservalogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaloginPageRoutingModule
  ],
  declarations: [ReservaloginPage]
})
export class ReservaloginPageModule {}
