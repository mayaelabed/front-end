import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdminModule} from "./module/admin/admin.module";

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {DataTablesModule} from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestInterceptor } from './core/service/interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { CartComponent } from './cart/cart.component';

import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { CommanderComponent } from './commander/commander.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProduitComponent,
    OrderComponent,
    CategoryComponent,
    CommanderComponent,
    CheckoutComponent,

   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    RouterModule,
    DataTablesModule,
    NgbModule
    // RoutesauthorizeAdmin

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
