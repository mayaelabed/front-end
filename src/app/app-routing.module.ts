import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'admin',
    loadChildren: () => import('./module/admin/admin-routing.module')
      .then(m => m.AdminRoutingModule) },
  { path: 'user',
    loadChildren: () => import('./module/client/client-routing.module')
      .then(m => m.ClientRoutingModule) },
  { path:'', redirectTo: 'user/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
