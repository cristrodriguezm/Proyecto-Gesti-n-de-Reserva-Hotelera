import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurstahabitsgestorPageRoutingModule } from './turstahabitsgestor-routing.module';

import { TurstahabitsgestorPage } from './turstahabitsgestor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurstahabitsgestorPageRoutingModule
  ],
  declarations: [TurstahabitsgestorPage]
})
export class TurstahabitsgestorPageModule {}
