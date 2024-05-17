import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PanelComponent} from "./panel/panel.component";
import { ShowUserComponent } from './user-managment/show-user/show-user.component';
import { AddUserComponent } from './user-managment/add-user/add-user.component';
import { UpdateUserComponent } from './user-managment/update-user/update-user.component';
import { LoginComponent } from '../client/auth/login/login.component';
import { ShowCategoryComponent } from './category-managment/show-category/show-category.component';
import { UserDetailsComponent } from '../admin/user-details/user-details.component';
import { AddCategoryComponent } from './category-managment/add-category/add-category.component';
import { UpdateCategoryComponent } from './category-managment/update-category/update-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AddProductComponent } from './product-managment/add-product/add-product.component';
import { ShowProductComponent } from './product-managment/show-product/show-product.component';
import { UpdateProductComponent } from './product-managment/update-product/update-product.component';
import { AuthGuard } from 'src/app/core/service/auth.guard';
import { ShowOrderComponent } from './order-managment/show-order/show-order.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PanelComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'main', component: MainComponent },
      //user
      { path: 'show-user', component: ShowUserComponent },
      { path: 'add-user', component: AddUserComponent},
      { path: 'update-user/:id', component: UpdateUserComponent  },
      {path: 'user-details/:id', component: UserDetailsComponent},
      //category
      { path: 'show-category', component: ShowCategoryComponent },
      { path: 'add-category', component: AddCategoryComponent},
      { path: 'update-category/:id', component: UpdateCategoryComponent  },
      {path: 'category-details/:id', component: CategoryDetailsComponent},
       //product
       { path: 'show-product', component: ShowProductComponent },
       { path: 'add-product', component: AddProductComponent},
       { path: 'update-product/:id', component: UpdateProductComponent  },
       {path: 'category-product/:id', component: CategoryDetailsComponent},

       //order
       { path: 'show-order', component: ShowOrderComponent },
      //login ShowOrderComponent
      {path: 'login', component: LoginComponent},


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
