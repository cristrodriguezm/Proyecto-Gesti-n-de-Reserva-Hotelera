import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientcuentasPage } from './clientcuentas.page';

const routes: Routes = [
  {
    path: '',
    component: ClientcuentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientcuentasPageRoutingModule {}
