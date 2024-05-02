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

const routes: Routes = [
  {
    path: 'dashboard',
    component: PanelComponent,
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
      //login
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
