import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelAdmnPageRoutingModule } from './hotel-admn-routing.module';

import { HotelAdmnPage } from './hotel-admn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelAdmnPageRoutingModule
  ],
  declarations: [HotelAdmnPage]
})
export class HotelAdmnPageModule {}
