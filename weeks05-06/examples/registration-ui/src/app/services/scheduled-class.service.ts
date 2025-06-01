import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduledClass } from '../models/scheduled-class';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScheduledClassService {
  private baseUrl = `${environment.apiUrl}/classes`;

  constructor(private http: HttpClient) {}

  // GET /api/scheduled-classes
  findAll(): Observable<ScheduledClass[]> {
    return this.http.get<ScheduledClass[]>(this.baseUrl);
  }

  // GET /api/scheduled-classes/{id}
  findById(id: number): Observable<ScheduledClass> {
    return this.http.get<ScheduledClass>(`${this.baseUrl}/${id}`);
  }

  // POST /api/scheduled-classes
  create(scheduledClass: ScheduledClass): Observable<ScheduledClass> {
    return this.http.post<ScheduledClass>(this.baseUrl, scheduledClass);
  }

  // PUT /api/scheduled-classes/{id}
  update(
    id: number,
    scheduledClass: ScheduledClass
  ): Observable<ScheduledClass> {
    return this.http.put<ScheduledClass>(
      `${this.baseUrl}/${id}`,
      scheduledClass
    );
  }

  // DELETE /api/scheduled-classes/{id}
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // POST /api/scheduled-classes/{scheduledClassId}/register/{studentId}
  registerStudent(
    scheduledClassId: number,
    studentId: number
  ): Observable<ScheduledClass> {
    return this.http.post<ScheduledClass>(
      `${this.baseUrl}/${scheduledClassId}/register/${studentId}`,
      {}
    );
  }

  // POST /api/scheduled-classes/{scheduledClassId}/drop/{studentId}
  dropStudent(
    scheduledClassId: number,
    studentId: number
  ): Observable<ScheduledClass> {
    return this.http.post<ScheduledClass>(
      `${this.baseUrl}/${scheduledClassId}/drop/${studentId}`,
      {}
    );
  }
}
