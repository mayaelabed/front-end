import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3001/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private baseUrl = 'http://localhost:3001/auth/';

  private isLogin!: boolean;
  constructor(private http: HttpClient) {
  }

 

  /*authenticate(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);

  }*/
  login(email: string, password: string): Observable<any> {
    this.isLogin = true;
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  isAuthenticated(): boolean {
    const userDetails = localStorage.getItem('userDetails');
    
    if(userDetails !=null && localStorage.getItem("token")){
      this.isLogin = true;
    }
    
    return this.isLogin;
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
  getDetails(){
    const userDetail = localStorage.getItem('userDetails');
    if(userDetail !==null)
    return JSON.parse(userDetail).other._id;
  }

  getDetailsname(){
    const userDetail = localStorage.getItem('userDetails');
    if(userDetail !==null)
    return JSON.parse(userDetail).other.fullname;
  }

  /*logout() {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('token');
  }*/
    logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }



  

  isLoggedIn() {
    const userDetails = localStorage.getItem('userDetails');
    return userDetails != null;
  }


  register(fullname: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        fullname,
        email,
        password,
      },
      httpOptions
    );
  }






  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
  

  setUserId(userId: string): void {
    localStorage.setItem('userId', userId);
  }

  // Méthode pour enregistrer le token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}


