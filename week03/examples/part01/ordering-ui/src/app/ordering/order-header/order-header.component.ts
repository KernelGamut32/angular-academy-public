import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../order-detail/order-detail.model';
import { OrderHeader } from './order-header.model';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {
  orderHeader?: OrderHeader;

  constructor() { }

  ngOnInit(): void {
    this.orderHeader = {
      id: 1,
      orderNumber: 'ABC-123',
      description: 'This is order ABC-123',
      total: 0,
      orderDetails: new Array<OrderDetail>()
    };
  }
}
