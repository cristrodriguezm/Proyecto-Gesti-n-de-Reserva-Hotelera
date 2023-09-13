import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoresumenPageRoutingModule } from './pagoresumen-routing.module';

import { PagoresumenPage } from './pagoresumen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoresumenPageRoutingModule
  ],
  declarations: [PagoresumenPage]
})
export class PagoresumenPageModule {}
