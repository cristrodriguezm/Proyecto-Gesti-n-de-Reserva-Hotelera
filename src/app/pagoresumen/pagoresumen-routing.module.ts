import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoresumenPage } from './pagoresumen.page';

const routes: Routes = [
  {
    path: '',
    component: PagoresumenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoresumenPageRoutingModule {}
