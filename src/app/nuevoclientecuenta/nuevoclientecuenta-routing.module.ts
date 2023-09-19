import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoclientecuentaPage } from './nuevoclientecuenta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoclientecuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoclientecuentaPageRoutingModule {}
