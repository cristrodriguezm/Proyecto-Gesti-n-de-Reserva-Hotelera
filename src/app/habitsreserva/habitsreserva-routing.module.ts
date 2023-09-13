import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitsreservaPage } from './habitsreserva.page';

const routes: Routes = [
  {
    path: '',
    component: HabitsreservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitsreservaPageRoutingModule {}
