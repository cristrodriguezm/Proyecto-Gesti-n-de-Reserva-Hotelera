import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremumhabitsgestorPageRoutingModule } from './premumhabitsgestor-routing.module';

import { PremumhabitsgestorPage } from './premumhabitsgestor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremumhabitsgestorPageRoutingModule
  ],
  declarations: [PremumhabitsgestorPage]
})
export class PremumhabitsgestorPageModule {}
