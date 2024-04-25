import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3001/auth';

 
  constructor(private http: HttpClient) {
  }

  authenticate(data: any) {
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
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  isLoggedIn() {
    const userDetails = localStorage.getItem('userDetails');
    return userDetails != null;
  }
}

