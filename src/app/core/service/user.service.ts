import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserModel} from "../../model/User.model";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:3001/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3001/user';
  loggedUserId = this.authService.getUserDetails("id");
  constructor(private http: HttpClient, private authService:AuthService) { }


  getAll(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  

  findById(idUser: string | undefined) {
    return this.http.get<UserModel>(`${this.baseUrl}/${idUser}`);
  }

  createUser(UserForm: any) {
    return this.http.post<UserModel>(`${this.baseUrl}/create`, UserForm);
  }

  updateUser(idUser: any ,UserForm: any) {
    return this.http.put<UserModel>(`${this.baseUrl}/${idUser}`, UserForm);

  }
  
  deleteUserById(id: string | undefined) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
}
