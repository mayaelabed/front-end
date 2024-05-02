import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RegisterComponent} from './auth/register/register.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CarouselModule} from "ngx-owl-carousel-o";
import {NgbAccordionButton, NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule,
    CarouselModule,
    NgbModule
  ]
})
export class ClientModule {
}
