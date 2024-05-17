import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:3001/order';

  loggedUserId = this.authService.getUserDetails("id");
  constructor(private http: HttpClient, private authService:AuthService) { }



  getAll() {
    // return this.http.get<UserDetails>(this.baseUrl);
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

    
//   deleteProductById(id: string | undefined) {
//     return this.http.delete(`${this.baseUrl}/delete/${id}`);
//   }


  
}
