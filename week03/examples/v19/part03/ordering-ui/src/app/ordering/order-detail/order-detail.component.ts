import { Component, OnInit, input, model } from '@angular/core';
import { OrderDetail } from './order-detail.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-detail',
  imports: [FormsModule],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  // https://blog.angular-university.io/angular-signal-components/
  readonly orderDetail = input<OrderDetail>();

  constructor() { }

  ngOnInit(): void {
  }
}
