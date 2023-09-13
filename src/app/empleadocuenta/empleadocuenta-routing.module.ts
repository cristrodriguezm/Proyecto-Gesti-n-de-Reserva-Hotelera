import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadocuentaPage } from './empleadocuenta.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadocuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadocuentaPageRoutingModule {}
