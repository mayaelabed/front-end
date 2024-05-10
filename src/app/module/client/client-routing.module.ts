import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full',},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Handle other routes
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
