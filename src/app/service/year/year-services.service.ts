import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Year } from './Year';

@Injectable({
  providedIn: 'root'
})
export class YearServicesService {

  private baseURL = "http://localhost:8080/api/year/";

  constructor(private httpClient: HttpClient) { }
  
  getYearList(): Observable<Year[]>{
    return this.httpClient.get<Year[]>(`${this.baseURL}`);
  }
  
  createYear(year: Year): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, year);
  }

  getEYearById(id: number): Observable<Year>{
    return this.httpClient.get<Year>(`${this.baseURL}${id}`);
  }

  updateYear(id: number, year : Year): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${id}`, year);
  }

  deleteYear(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
}
}
