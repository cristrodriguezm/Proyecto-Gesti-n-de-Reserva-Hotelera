import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelccresmPage } from './selccresm.page';

const routes: Routes = [
  {
    path: '',
    component: SelccresmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelccresmPageRoutingModule {}
