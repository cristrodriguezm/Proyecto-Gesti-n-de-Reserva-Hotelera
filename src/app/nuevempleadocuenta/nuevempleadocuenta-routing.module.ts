import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevempleadocuentaPage } from './nuevempleadocuenta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevempleadocuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevempleadocuentaPageRoutingModule {}
