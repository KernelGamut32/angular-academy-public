import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountListComponent
  },
  {
    path: 'accounts/:id',
    component: AccountDetailComponent
  },
  { path: '', redirectTo: '/accounts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
