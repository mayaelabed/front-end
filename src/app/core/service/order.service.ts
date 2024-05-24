import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  private apiUrl = 'http://localhost:3001/order'; // URL de votre API

  constructor(private http: HttpClient) {}

  passerCommande(userId: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/make`, { userId });
  }

  getOrderDetails(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/order/${orderId}`);
  }

}