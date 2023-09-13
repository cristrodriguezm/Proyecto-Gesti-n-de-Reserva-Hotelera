import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientcuentasPageRoutingModule } from './clientcuentas-routing.module';

import { ClientcuentasPage } from './clientcuentas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientcuentasPageRoutingModule
  ],
  declarations: [ClientcuentasPage]
})
export class ClientcuentasPageModule {}
