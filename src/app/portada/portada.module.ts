import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortadaPageRoutingModule } from './portada-routing.module';

import { PortadaPage } from './portada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortadaPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [PortadaPage]
})
export class PortadaPageModule {}
