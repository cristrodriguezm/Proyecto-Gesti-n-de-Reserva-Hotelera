import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitsgestorPage } from './habitsgestor.page';

const routes: Routes = [
  {
    path: '',
    component: HabitsgestorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitsgestorPageRoutingModule {}
