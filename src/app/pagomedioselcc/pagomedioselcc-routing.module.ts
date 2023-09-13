import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagomedioselccPage } from './pagomedioselcc.page';

const routes: Routes = [
  {
    path: '',
    component: PagomedioselccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagomedioselccPageRoutingModule {}
