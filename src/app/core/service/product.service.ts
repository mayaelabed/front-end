import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { ProductModel } from 'src/app/model/Product.model';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3001/product';
  loggedUserId = this.authService.getUserDetails("id");
  constructor(private http: HttpClient, private authService:AuthService) { }



  getAll() {
    // return this.http.get<UserDetails>(this.baseUrl);
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
  

  findById(idProduct: string | undefined) {
    return this.http.get<ProductModel>(`${this.baseUrl}/${idProduct}`);
  }

  createProduct(ProductForm: any) {
    return this.http.post<ProductModel>(`${this.baseUrl}/create`, ProductForm);
  }

  updateProduct(idProduct: any ,ProductForm: any) {
    return this.http.put<ProductModel>(`${this.baseUrl}/update/${idProduct}`, ProductForm);

  }
  
  deleteProductById(id: string | undefined) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }


  
}
