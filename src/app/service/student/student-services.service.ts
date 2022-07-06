import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {
  private baseURL = "http://localhost:8080/api/student/";

  constructor(private httpClient: HttpClient) { }
  
  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }
  
  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, student);
  }

  getEStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}${id}`);
  }

  updateStudent(id: number, student:Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
}
}
