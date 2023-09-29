import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientereservaspanelPage } from './clientereservaspanel.page';

const routes: Routes = [
  {
    path: '',
    component: ClientereservaspanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientereservaspanelPageRoutingModule {}
