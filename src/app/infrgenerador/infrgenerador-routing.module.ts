import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfrgeneradorPage } from './infrgenerador.page';

const routes: Routes = [
  {
    path: '',
    component: InfrgeneradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfrgeneradorPageRoutingModule {}
