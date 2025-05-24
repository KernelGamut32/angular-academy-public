import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'api/accounts';

  constructor(private http: HttpClient) { }

  retrieveAllAccounts(): Observable<Array<Account>> {
    return this.http.get<Array<Account>>(this.url);
  }

  retrieveAccountById(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.url}/${id}`);
  }

  openNewAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.url}/open`, account);
  }

  applyDeposit(id: number, amount: number) {
    return this.http.put<Account>(`${this.url}/${id}/deposit/${amount}`, {});
  }

  applyWithdrawal(id: number, amount: number) {
    return this.http.put<Account>(`${this.url}/${id}/withdraw/${amount}`, {});
  }

  closeAccount(id: number): Observable<any> {
    return this.http.delete<Account>(`${this.url}/${id}/close`);
  }
}
