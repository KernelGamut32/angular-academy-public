import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendee } from '../models/attendee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AttendeeService {
  private apiUrl = `${environment.apiUrl}/attendees`;
  constructor(private http: HttpClient) {}
  getAll(): Observable<Attendee[]> {
    return this.http.get<Attendee[]>(this.apiUrl);
  }
  get(id: number): Observable<Attendee> {
    return this.http.get<Attendee>(`${this.apiUrl}/${id}`);
  }
  create(a: Attendee): Observable<Attendee> {
    return this.http.post<Attendee>(this.apiUrl, a);
  }
  update(id: number, a: Attendee): Observable<Attendee> {
    return this.http.put<Attendee>(`${this.apiUrl}/${id}`, a);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
