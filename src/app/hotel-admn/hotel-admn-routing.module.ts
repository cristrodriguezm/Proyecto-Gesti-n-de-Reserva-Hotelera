import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelAdmnPage } from './hotel-admn.page';

const routes: Routes = [
  {
    path: '',
    component: HotelAdmnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelAdmnPageRoutingModule {}
