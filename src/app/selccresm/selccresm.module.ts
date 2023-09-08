import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelccresmPageRoutingModule } from './selccresm-routing.module';

import { SelccresmPage } from './selccresm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelccresmPageRoutingModule
  ],
  declarations: [SelccresmPage]
})
export class SelccresmPageModule {}
