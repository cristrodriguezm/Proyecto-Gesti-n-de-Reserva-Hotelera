import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitsreservaPageRoutingModule } from './habitsreserva-routing.module';

import { HabitsreservaPage } from './habitsreserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitsreservaPageRoutingModule
  ],
  declarations: [HabitsreservaPage]
})
export class HabitsreservaPageModule {}
