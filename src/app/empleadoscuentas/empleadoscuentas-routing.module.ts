import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoscuentasPage } from './empleadoscuentas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadoscuentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadoscuentasPageRoutingModule {}
