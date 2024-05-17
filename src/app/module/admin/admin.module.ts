import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {MainComponent} from './main/main.component';
import { PanelComponent } from './panel/panel.component';
import {DataTablesModule} from "angular-datatables";

import {ChartModule} from "angular-highcharts";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './user-managment/add-user/add-user.component';
import { ShowUserComponent } from './user-managment/show-user/show-user.component';
import { UpdateUserComponent } from './user-managment/update-user/update-user.component';
import { ShowCategoryComponent } from './category-managment/show-category/show-category.component';
import { UserDetailsComponent } from '../admin/user-details/user-details.component';
import { AddCategoryComponent } from './category-managment/add-category/add-category.component';
import { UpdateCategoryComponent } from './category-managment/update-category/update-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AddProductComponent } from './product-managment/add-product/add-product.component';
import { ShowProductComponent } from './product-managment/show-product/show-product.component';
import { UpdateProductComponent } from './product-managment/update-product/update-product.component';
import { ShowOrderComponent } from './order-managment/show-order/show-order.component';

@NgModule({
  declarations: [
    MainComponent,
    PanelComponent,
    AddUserComponent,
    ShowUserComponent,
    UpdateUserComponent,
    ShowCategoryComponent,
    UserDetailsComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    CategoryDetailsComponent,
    AddProductComponent,
    ShowProductComponent,
    UpdateProductComponent,
    ShowOrderComponent
    
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        ChartModule
    ]
})
export class AdminModule { }
