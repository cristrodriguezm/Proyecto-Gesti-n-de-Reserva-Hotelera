import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitsgestorPageRoutingModule } from './habitsgestor-routing.module';

import { HabitsgestorPage } from './habitsgestor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitsgestorPageRoutingModule
  ],
  declarations: [HabitsgestorPage]
})
export class HabitsgestorPageModule {}
