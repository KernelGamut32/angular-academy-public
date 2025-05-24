import { formatCurrency } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, LOCALE_ID } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Account } from 'src/app/models/account.model';
import { Address } from 'src/app/models/address.model';
import { Customer } from 'src/app/models/customer.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  accountForm: FormGroup = this.fb.group({
    id: [0],
    customerId: [0],
    addressId: [0],
    accountNumber: ['', [Validators.required]],
    customerFirstName: ['', [Validators.required]],
    customerLastName: ['', [Validators.required]],
    customerEmailAddress: ['', [Validators.required, Validators.email]],
    customerAddress: ['', [Validators.required]],
    customerCity: ['', [Validators.required]],
    customerState: ['', [Validators.required]],
    customerZipCode: ['', [Validators.required]],
    accountBalance: [0, [Validators.required]],
    amount: [0],
  });
  id = this.accountForm.controls['id'] as FormControl;
  customerId = this.accountForm.controls['customerId'] as FormControl;
  addressId = this.accountForm.controls['addressId'] as FormControl;
  accountNumber = this.accountForm.controls['accountNumber'] as FormControl;
  customerFirstName = this.accountForm.controls[
    'customerFirstName'
  ] as FormControl;
  customerLastName = this.accountForm.controls[
    'customerLastName'
  ] as FormControl;
  customerEmailAddress = this.accountForm.controls[
    'customerEmailAddress'
  ] as FormControl;
  customerAddress = this.accountForm.controls['customerAddress'] as FormControl;
  customerCity = this.accountForm.controls['customerCity'] as FormControl;
  customerState = this.accountForm.controls['customerState'] as FormControl;
  customerZipCode = this.accountForm.controls['customerZipCode'] as FormControl;
  accountBalance = this.accountForm.controls['accountBalance'] as FormControl;
  amount = this.accountForm.controls['amount'] as FormControl;

  private routeSubscription = new Subscription();
  private commitSubscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
  ) {}

  ngOnInit(): void {
    this.populateForm();
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.commitSubscription?.unsubscribe();
  }

  commitChanges(): void {
    if (this.id.value === 0) {
      const address = this.buildAddressObject();
      const customer = this.buildCustomerObject(address);
      const account = this.buildAccountObject(customer);
      this.commitSubscription = this.accountService
        .openNewAccount(account)
        .subscribe((results) => {
          if ((results as any)['message']) {
            alert((results as any)['message']);
          } else {
            this.navigateToListView();
          }
        });
    }
  }

  cancel(): void {
    this.navigateToListView();
  }

  private populateForm(): void {
    this.routeSubscription = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const idVal = params.get('id');
          const id = idVal !== null ? +idVal : 0;
          if (id > 0) {
            this.accountNumber.disable();
            this.customerFirstName.disable();
            this.customerLastName.disable();
            this.customerEmailAddress.disable();
            this.customerAddress.disable();
            this.customerCity.disable();
            this.customerState.disable();
            this.customerZipCode.disable();
            this.accountBalance.disable();
            return this.accountService.retrieveAccountById(id);
          } else {
            return of({
              id: 0,
              account_number: '',
              customer: {
                id: 0,
                first_name: '',
                last_name: '',
                address: {
                  id: 0,
                  address: '',
                  city: '',
                  state: '',
                  zip_code: '',
                } as Address,
                email_address: '',
              } as Customer,
              current_balance: 0,
            } as Account);
          }
        }),
        map((account: Account) =>
          this.accountForm.setValue({
            id: account.id,
            customerId: account.customer.id,
            addressId: account.customer.address.id,
            accountNumber: account.account_number,
            customerFirstName: account.customer.first_name,
            customerLastName: account.customer.last_name,
            customerEmailAddress: account.customer.email_address,
            customerAddress: account.customer.address.address,
            customerCity: account.customer.address.city,
            customerState: account.customer.address.state,
            customerZipCode: account.customer.address.zip_code,
            accountBalance: account.current_balance,
            amount: 0,
          })
        )
      )
      .subscribe({
        next: () => {
          this.loading = false;
        },
      });
  }

  private navigateToListView(): void {
    this.router.navigate(['/']);
  }

  private buildAddressObject(): Address {
    return {
      id: this.addressId.value,
      address: this.customerAddress.value,
      city: this.customerCity.value,
      state: this.customerState.value,
      zip_code: this.customerZipCode.value,
    } as Address;
  }

  private buildCustomerObject(address: Address): Customer {
    return {
      id: this.customerId.value,
      first_name: this.customerFirstName.value,
      last_name: this.customerLastName.value,
      address: address,
      email_address: this.customerEmailAddress.value,
    } as Customer;
  }

  private buildAccountObject(customer: Customer): Account {
    return {
      id: this.id.value,
      account_number: this.accountNumber.value,
      customer: customer,
      current_balance: this.accountBalance.value,
    } as Account;
  }

  getMode(): string {
    return this.id.value > 0 ? 'edit' : 'open';
  }

  applyDeposit(): void {
    const address = this.buildAddressObject();
    const customer = this.buildCustomerObject(address);
    const account = this.buildAccountObject(customer);
    this.commitSubscription = this.accountService
      .applyDeposit(account.id, this.amount.value)
      .subscribe((results) => {
        if ((results as any)['message']) {
          alert((results as any)['message']);
        }
        this.populateForm();
      });
  }

  applyWithdrawal(): void {
    const address = this.buildAddressObject();
    const customer = this.buildCustomerObject(address);
    const account = this.buildAccountObject(customer);
    this.commitSubscription = this.accountService
      .applyWithdrawal(account.id, this.amount.value)
      .subscribe((results) => {
        if ((results as any)['message']) {
          alert((results as any)['message']);
        }
        this.populateForm();
      });
  }
}
