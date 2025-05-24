import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountDetailComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AccountModule { }
