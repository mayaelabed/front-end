import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private baseUrl = 'http://localhost:3001/api/';

    constructor(private http: HttpClient) { }
  
    placeOrder(orderDetails: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/orders`, orderDetails);
    }
}
