import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CategoryModel} from "../../model/Category.model";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:3001/category';
  loggedCategoryId = this.authService.getUserDetails("id");
  constructor(private http: HttpClient, private authService:AuthService) { }



  getAll() {
    // return this.http.get<CategoryDetails>(this.baseUrl);
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  

  findById(idCategory: string | undefined) {
    return this.http.get<CategoryModel>(`${this.baseUrl}/${idCategory}`);
  }

  createCategory(CategoryForm: any) {
    return this.http.post<CategoryModel>(`${this.baseUrl}/create`, CategoryForm);
  }

  updateCategory(idCategory: any ,CategoryForm: any) {
    return this.http.put<CategoryModel>(`${this.baseUrl}/update/${idCategory}`, CategoryForm);

  }
  
  deleteCategoryById(id: string | undefined) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  
}
