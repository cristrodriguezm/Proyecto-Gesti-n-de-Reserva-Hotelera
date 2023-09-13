import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfrgeneradorPageRoutingModule } from './infrgenerador-routing.module';

import { InfrgeneradorPage } from './infrgenerador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfrgeneradorPageRoutingModule
  ],
  declarations: [InfrgeneradorPage]
})
export class InfrgeneradorPageModule {}
