import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientereservaspanelPageRoutingModule } from './clientereservaspanel-routing.module';

import { ClientereservaspanelPage } from './clientereservaspanel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientereservaspanelPageRoutingModule
  ],
  declarations: [ClientereservaspanelPage]
})
export class ClientereservaspanelPageModule {}
