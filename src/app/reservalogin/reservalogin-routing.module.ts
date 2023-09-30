import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaloginPage } from './reservalogin.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaloginPageRoutingModule {}
