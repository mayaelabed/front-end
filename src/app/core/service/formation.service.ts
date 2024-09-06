import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from 'src/app/model/formation.model';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private baseURL = "http://localhost:8090/formation";

  constructor(private httpClient: HttpClient) { }
  
  goToFormationList(): Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(`${this.baseURL}`);
  }

  createFormation(formation: Formation): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, formation);
  }

  getFormationById(id: string): Observable<Formation>{
    return this.httpClient.get<Formation>(`${this.baseURL}/${id}`);
  }

  updateFormation(id: string, formation: Formation): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, formation);
  }

  deleteFormation(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}