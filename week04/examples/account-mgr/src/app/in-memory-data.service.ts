import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions,
} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Account } from './models/account.model';
import { HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts: Account[] = [
      {
        id: 1,
        account_number: 'ACC-1001',
        customer: {
          id: 1,
          first_name: 'Alice',
          last_name: 'Smith',
          address: {
            id: 1,
            address: '123 Main St',
            city: 'Metropolis',
            state: 'NY',
            zip_code: '10001',
          },
          email_address: 'alice.smith@example.com',
        },
        current_balance: 2500,
      },
      {
        id: 2,
        account_number: 'ACC-1002',
        customer: {
          id: 2,
          first_name: 'Bob',
          last_name: 'Jones',
          address: {
            id: 2,
            address: '456 Oak Ave',
            city: 'Gotham',
            state: 'NJ',
            zip_code: '07850',
          },
          email_address: 'bob.jones@example.com',
        },
        current_balance: 1800,
      },
    ];
    return { accounts };
  }

  /**
   * genId returns a new unique ID for an account.
   */
  genId(accounts: Account[]): number {
    return accounts.length > 0
      ? Math.max(...accounts.map((acc) => acc.id)) + 1
      : 1;
  }

  post(reqInfo: RequestInfo): Observable<any> | undefined {
    // match only POSTs to the accounts collection:
    if (reqInfo.collectionName === 'accounts') {
      // pull the JSON body (the new account data)
      const newAccount = reqInfo.utils.getJsonBody(reqInfo.req) as Account;
      // assign a new ID
      newAccount.id = this.genId(reqInfo.collection as Account[]);
      // add to our in-memory collection
      (reqInfo.collection as Account[]).push(newAccount);

      const options: ResponseOptions = {
        status: HttpStatusCode.Created,
        headers: reqInfo.headers,
        url: reqInfo.url,
        body: this.clone(newAccount)
      };
      return reqInfo.utils.createResponse$(() => options);
    }

    // let the default POST fallback handle any other collection
    return undefined;
  }

  put(reqInfo: RequestInfo): Observable<any> | undefined {
    const url = reqInfo.req.url;
    const { collection } = reqInfo;

    // /api/accounts/:id/deposit/:amount
    const depositMatch = url.match(/api\/accounts\/(\d+)\/deposit\/(\d+(?:\.\d{1,2})?)$/);
    if (depositMatch) {
      const id = +depositMatch[1];
      const amount = +depositMatch[2];
      return this.modifyBalance(reqInfo, id, amount, true);
    }

    // /api/accounts/:id/withdraw/:amount
    const withdrawMatch = url.match(/api\/accounts\/(\d+)\/withdraw\/(\d+(?:\.\d{1,2})?)$/);
    if (withdrawMatch) {
      const id = +withdrawMatch[1];
      const amount = +withdrawMatch[2];
      return this.modifyBalance(reqInfo, id, amount, false);
    }

    // /api/accounts/:id/close
    const closeMatch = url.match(/api\/accounts\/(\d+)\/close/);
    if (closeMatch) {
      const id = +closeMatch[1];
      const idx = (collection as Account[]).findIndex((acc) => acc.id === id);
      if (idx > -1) {
        (collection as Account[]).splice(idx, 1);
        const options: ResponseOptions = {
          status: HttpStatusCode.Ok,
          body: {},
        };
        return reqInfo.utils.createResponse$(() => options);
      }
    }

    // fallback to default PUT (update entire account object)
    return undefined;
  }

  // helper to add/subtract balance
  private modifyBalance(
    reqInfo: RequestInfo,
    id: number,
    amount: number,
    isDeposit: boolean
  ): Observable<any> {
    const accounts = reqInfo.collection as Account[];
    const acc = accounts.find((a) => a.id === id);
    if (!acc) {
      const options: ResponseOptions = {
        status: HttpStatusCode.NotFound,
        body: { error: `Account with id=${id} not found` },
      };
      return reqInfo.utils.createResponse$(() => options);
    }
    acc.current_balance += isDeposit ? amount : -amount;
    const options: ResponseOptions = {
      status: HttpStatusCode.Ok,
      body: this.clone(acc),
    };
    return reqInfo.utils.createResponse$(() => options);
  }

  // ensure we don’t hold references
  private clone<T>(data: T): T {
    return JSON.parse(JSON.stringify(data)) as T;
  }
}
