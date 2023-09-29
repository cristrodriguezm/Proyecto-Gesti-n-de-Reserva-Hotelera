import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabtcnescatalogoPageRoutingModule } from './habtcnescatalogo-routing.module';

import { HabtcnescatalogoPage } from './habtcnescatalogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabtcnescatalogoPageRoutingModule
  ],
  declarations: [HabtcnescatalogoPage]
})
export class HabtcnescatalogoPageModule {}
