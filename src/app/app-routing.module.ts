import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  {
    path: 'portada',
    loadChildren: () => import('./portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'selccresm',
    loadChildren: () => import('./selccresm/selccresm.module').then( m => m.SelccresmPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verif',
    loadChildren: () => import('./verif/verif.module').then( m => m.VerifPageModule)
  },
  {
    path: 'fechasreserva',
    loadChildren: () => import('./fechasreserva/fechasreserva.module').then( m => m.FechasreservaPageModule)
  },
  {
    path: 'habitsreserva',
    loadChildren: () => import('./habitsreserva/habitsreserva.module').then( m => m.HabitsreservaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
