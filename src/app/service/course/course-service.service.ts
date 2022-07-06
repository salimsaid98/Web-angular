import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private baseURL = "http://localhost:8080/api/course/";

  constructor(private httpClient: HttpClient) { }
  
  getCourseList(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}`);
  }
  
  createCourse(course: Course): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, course);
  }

  getECourseById(id: number): Observable<Course>{
    return this.httpClient.get<Course>(`${this.baseURL}${id}`);
  }

  updateCourse(id: number, course: Course): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${id}`, course);
  }

  deleteCourse(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
}
}
