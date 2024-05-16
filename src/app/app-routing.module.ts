import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ProduitComponent } from './produit/produit.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { CommanderComponent } from './commander/commander.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: 'admin',
    loadChildren: () => import('./module/admin/admin-routing.module')
      .then(m => m.AdminRoutingModule) },
  /*{ path: 'user',
    loadChildren: () => import('./module/client/client-routing.module')
      .then(m => m.ClientRoutingModule) },
*/

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {path: 'produit' , component: ProduitComponent},
  {path: 'cart' , component: CartComponent},

  {path: 'category' , component: CategoryComponent},
 {path: "cmd" , component:CommanderComponent},
 {path:"check" , component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
