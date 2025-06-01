import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) {}

  // GET /api/students
  findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  // GET /api/students/{id}
  findById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  // POST /api/students
  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }

  // PUT /api/students/{id}
  update(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/${id}`, student);
  }

  // DELETE /api/students/{id}
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
