import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagomediosPage } from './pagomedios.page';

const routes: Routes = [
  {
    path: '',
    component: PagomediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagomediosPageRoutingModule {}
