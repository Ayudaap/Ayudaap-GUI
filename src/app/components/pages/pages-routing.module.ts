import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'proyecto',
    loadChildren: () => import('./proyecto/proyecto.module').then(m=>m.ProyectoModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
