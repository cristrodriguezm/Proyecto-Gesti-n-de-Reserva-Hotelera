import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremumhabitsgestorPage } from './premumhabitsgestor.page';

const routes: Routes = [
  {
    path: '',
    component: PremumhabitsgestorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremumhabitsgestorPageRoutingModule {}
