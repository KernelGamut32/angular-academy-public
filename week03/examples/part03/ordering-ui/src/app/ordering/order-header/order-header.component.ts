import { Component, OnInit, input, output } from '@angular/core';
import { OrderHeader } from './order-header.model';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {
  // https://blog.angular-university.io/angular-signal-components/
  readonly orderHeader = input<OrderHeader>();
  readonly shipped = output<OrderHeader>();

  constructor() { }

  ngOnInit(): void {
  }
}
