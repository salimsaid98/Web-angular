import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from './Subject';


@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  private baseURL = "http://localhost:8080/api/subject/";

  constructor(private httpClient: HttpClient) { }
  
  getSubjectList(): Observable <Subject[]>{
    return this.httpClient.get<Subject[]>(`${this.baseURL}`);
  }
  
  createSubject(subject : Subject): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, subject);
  }

  getESubjectById(id: number): Observable<Subject>{
    return this.httpClient.get<Subject>(`${this.baseURL}${id}`);
  }

  updateSubject(id: number, subject:Subject): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${id}`, subject);
  }

  deleteSubject(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
}
}
