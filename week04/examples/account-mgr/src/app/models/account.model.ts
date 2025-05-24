import { Customer } from "./customer.model";

export interface Account {
  id: number;
  account_number: string;
  customer: Customer;
  current_balance: number;
}
