import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Account } from 'src/app/models/account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['accountNumber', 'customer', 'balance', 'actions'];
  loading: boolean = true;
  accounts$ = new Observable<Array<Account>>();
  private subscription = new Subscription();

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  trackAccountsById(_: number, account: Account): number {
    return account.id;
  }

  getFullCustomerName(account: Account) {
    return `${account.customer.last_name}, ${account.customer.first_name}`;
  }

  closeAccount(id: number): void {
    if (confirm('Are you sure you want to close this account?')) {
      this.subscription = this.accountService.closeAccount(id).subscribe(_ => {
        this.getAllAccounts();
      })
    }
  }

  openNewAccount(): void {
    this.router.navigate(['/accounts', 0]);
  }

  private getAllAccounts(): void {
    this.accounts$ = this.accountService.retrieveAllAccounts();
    this.loading = false;
  }

}
