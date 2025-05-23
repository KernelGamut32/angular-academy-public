import { Component, OnInit } from '@angular/core';
import { OrderHeaderComponent } from '../order-header/order-header.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-order',
  imports: [OrderHeaderComponent, OrderDetailComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
