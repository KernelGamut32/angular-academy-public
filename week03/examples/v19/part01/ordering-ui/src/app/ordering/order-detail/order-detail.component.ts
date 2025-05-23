import { Component, OnInit } from '@angular/core';
import { OrderDetail } from './order-detail.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-detail',
  imports: [FormsModule],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderDetail?: OrderDetail;

  constructor() { }

  ngOnInit(): void {
    this.orderDetail = {
      id: 1,
      orderHeaderId: 1,
      productNumber: 'AAA33200',
      quantity: 25,
      total: 199.99
    };
  }
}
