import { Component, OnInit } from '@angular/core';
import { OrderHeaderComponent } from '../order-header/order-header.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { OrderHeader } from '../order-header/order-header.model';
import { OrderDetail } from '../order-detail/order-detail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [OrderHeaderComponent, OrderDetailComponent, CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  standalone: true,
})
export class OrderComponent implements OnInit {
  orderHeader?: OrderHeader;

  constructor() {}

  ngOnInit(): void {
    this.orderHeader = {
      id: 1,
      orderNumber: 'ABC-123',
      description: 'This is order ABC-123',
      total: 0,
      orderDetails: new Array<OrderDetail>(),
    };

    this.orderHeader.orderDetails.push({
      id: 1,
      orderHeaderId: 1,
      productNumber: 'AAA33200',
      quantity: 25,
      total: 199.99,
    });
  }

  onShipped(orderHeader: OrderHeader): void {
    console.log('Order shipped:', orderHeader);
  }

  trackByOrderDetailId(index: number, orderDetail: OrderDetail): number {
    return orderDetail.id;
  }
}
