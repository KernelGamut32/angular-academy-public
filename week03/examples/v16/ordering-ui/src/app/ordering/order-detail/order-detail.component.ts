import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderDetail } from './order-detail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  standalone: true,
})
export class OrderDetailComponent implements OnInit {
  @Input() orderDetail?: OrderDetail;

  constructor() { }

  ngOnInit(): void {
  }
}
