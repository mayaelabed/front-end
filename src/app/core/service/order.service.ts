import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private baseUrl = 'http://localhost:3001/api/';

    constructor(private http: HttpClient) { }
  
    placeOrder(orderDetails: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/orders`, orderDetails);
    }


    

  createOrder(orderData: any): Observable<any> {
    const url = `${this.baseUrl}/orders`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, orderData, { headers }).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
