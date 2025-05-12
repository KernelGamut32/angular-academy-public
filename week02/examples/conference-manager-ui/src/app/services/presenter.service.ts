import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presenter } from '../models/presenter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PresenterService {
  private apiUrl = `${environment.apiUrl}/presenters`;
  constructor(private http: HttpClient) {}
  getAll(): Observable<Presenter[]> {
    return this.http.get<Presenter[]>(this.apiUrl);
  }
  get(id: number): Observable<Presenter> {
    return this.http.get<Presenter>(`${this.apiUrl}/${id}`);
  }
  create(p: Presenter): Observable<Presenter> {
    return this.http.post<Presenter>(this.apiUrl, p);
  }
  update(id: number, p: Presenter): Observable<Presenter> {
    return this.http.put<Presenter>(`${this.apiUrl}/${id}`, p);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
