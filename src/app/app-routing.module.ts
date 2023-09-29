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
  {
    path: 'pagomedioselcc',
    loadChildren: () => import('./pagomedioselcc/pagomedioselcc.module').then( m => m.PagomedioselccPageModule)
  },
  {
    path: 'pagoresumen',
    loadChildren: () => import('./pagoresumen/pagoresumen.module').then( m => m.PagoresumenPageModule)
  },
  {
    path: 'hotel-admn',
    loadChildren: () => import('./hotel-admn/hotel-admn.module').then( m => m.HotelAdmnPageModule)
  },
  {
    path: 'habitsgestor',
    loadChildren: () => import('./habitsgestor/habitsgestor.module').then( m => m.HabitsgestorPageModule)
  },
  {
    path: 'turstahabitsgestor',
    loadChildren: () => import('./turstahabitsgestor/turstahabitsgestor.module').then( m => m.TurstahabitsgestorPageModule)
  },
  {
    path: 'premumhabitsgestor',
    loadChildren: () => import('./premumhabitsgestor/premumhabitsgestor.module').then( m => m.PremumhabitsgestorPageModule)
  },
  {
    path: 'infrgenerador',
    loadChildren: () => import('./infrgenerador/infrgenerador.module').then( m => m.InfrgeneradorPageModule)
  },
  {
    path: 'clientcuentas',
    loadChildren: () => import('./clientcuentas/clientcuentas.module').then( m => m.ClientcuentasPageModule)
  },
  {
    path: 'nuevempleadocuenta',
    loadChildren: () => import('./nuevempleadocuenta/nuevempleadocuenta.module').then( m => m.NuevempleadocuentaPageModule)
  },
  {
    path: 'empleadocuenta',
    loadChildren: () => import('./empleadocuenta/empleadocuenta.module').then( m => m.EmpleadocuentaPageModule)
  },
  {
    path: 'nuevoclientecuenta',
    loadChildren: () => import('./nuevoclientecuenta/nuevoclientecuenta.module').then( m => m.NuevoclientecuentaPageModule)
  },
  {
    path: 'habitacion',
    loadChildren: () => import('./habitacion/habitacion.module').then( m => m.HabitacionPageModule)
  },
  {
    path: 'habtcnescatalogo',
    loadChildren: () => import('./habtcnescatalogo/habtcnescatalogo.module').then( m => m.HabtcnescatalogoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
