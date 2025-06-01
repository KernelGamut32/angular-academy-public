import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = `${environment.apiUrl}/courses`;

  constructor(private http: HttpClient) {}

  // GET /api/courses
  findAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  // GET /api/courses/{id}
  findById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  // POST /api/courses
  create(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }

  // PUT /api/courses/{id}
  update(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/${id}`, course);
  }

  // DELETE /api/courses/{id}
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
