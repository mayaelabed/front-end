import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { contact } from 'src/app/model/contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL = "http://localhost:8090/contact";

  constructor(private httpClient: HttpClient) { }
  
  goToContactList(): Observable<contact[]>{
    return this.httpClient.get<contact[]>(`${this.baseURL}`);
  }

  createcontact(contact: contact): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, contact);
  }

  getcontactById(id: string): Observable<contact>{
    return this.httpClient.get<contact>(`${this.baseURL}/${id}`);
  }

  updatecontact(id: string, contact: contact): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, contact);
  }

  deletecontact(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}