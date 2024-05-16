import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private baseUrl = 'http://localhost:3001/statistics';

  constructor(private http: HttpClient) { }

  countNumberProduct(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/number-product');
  }

  countNumberUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/number-user');
  }

  countNumberCategory(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/number-category');
  }

  countNumberOrder(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/number-order');
  }

  countNumberCart(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/number-cart');
  }
 
}