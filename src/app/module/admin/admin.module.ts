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


@NgModule({
  declarations: [
    MainComponent,
    PanelComponent,
    AddUserComponent,
    ShowUserComponent,
    UpdateUserComponent
    
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
