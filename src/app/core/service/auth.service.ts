import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3001/auth';
  private isLogin: boolean = false;
 
  constructor(private http: HttpClient) {
  }

  authenticate(data: any) {
      //this.isLogin = true;
      return this.http.post(`${this.baseUrl}/login`, data);
  }

  getUserByEmail(email: string) {
    return this.http.get(`${this.baseUrl}/show-user-by-email/${email}`)
  }

  saveUserDetails(user: any) {
    localStorage.setItem('userDetails', JSON.stringify(user));
    localStorage.setItem('token', user.token);
  }

  getUserDetails(param: string) {
    const userDetails = localStorage.getItem('userDetails');

    if (userDetails) {
      const userDetailsParsed = JSON.parse(userDetails);
      if (param == "id") {
        return userDetailsParsed.id;
      } else if (param == "fullname") {
        return userDetailsParsed.fullname;
      } else if (param == "email") {
        return userDetailsParsed.email;
      } else if (param == "all") {
        return userDetailsParsed;
      } else {
        return "specify required details : id, fullname, email, all";
      }
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('token');
    this.isLogin = false;
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  isLoggedIn() {
    const userDetails = localStorage.getItem('userDetails');
    return userDetails != null;
  }

  isAuthenticated(): boolean {
    const userDetails = localStorage.getItem('userDetails');
    
    if(userDetails !=null && localStorage.getItem("token") && JSON.parse(userDetails).other.role==="ADMIN_ROLE"){
      this.isLogin = true;
    }
    
    return this.isLogin;
  }
}

