import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConferenceSession } from '../models/conference-session';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConferenceSessionService {
  private apiUrl = `${environment.apiUrl}/sessions`;
  constructor(private http: HttpClient) {}
  getAll(): Observable<ConferenceSession[]> {
    return this.http.get<ConferenceSession[]>(this.apiUrl);
  }
  get(id: number): Observable<ConferenceSession> {
    return this.http.get<ConferenceSession>(`${this.apiUrl}/${id}`);
  }
  create(s: ConferenceSession): Observable<ConferenceSession> {
    return this.http.post<ConferenceSession>(this.apiUrl, s);
  }
  update(id: number, s: ConferenceSession): Observable<ConferenceSession> {
    return this.http.put<ConferenceSession>(`${this.apiUrl}/${id}`, s);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  registerAttendee(
    sessionId: number,
    attendeeId: number
  ): Observable<ConferenceSession> {
    return this.http.post<ConferenceSession>(
      `${this.apiUrl}/${sessionId}/attendees/${attendeeId}`,
      null
    );
  }
  assignPresenter(
    sessionId: number,
    presenterId: number
  ): Observable<ConferenceSession> {
    return this.http.post<ConferenceSession>(
      `${this.apiUrl}/${sessionId}/presenters/${presenterId}`,
      null
    );
  }
  getByAttendee(attendeeId: number): Observable<ConferenceSession[]> {
    return this.http.get<ConferenceSession[]>(
      `${this.apiUrl}/attendee/${attendeeId}`
    );
  }
  getByPresenter(presenterId: number): Observable<ConferenceSession[]> {
    return this.http.get<ConferenceSession[]>(
      `${this.apiUrl}/presenter/${presenterId}`
    );
  }
}
