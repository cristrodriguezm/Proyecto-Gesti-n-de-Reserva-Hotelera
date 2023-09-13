import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechasreservaPage } from './fechasreserva.page';

const routes: Routes = [
  {
    path: '',
    component: FechasreservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechasreservaPageRoutingModule {}
