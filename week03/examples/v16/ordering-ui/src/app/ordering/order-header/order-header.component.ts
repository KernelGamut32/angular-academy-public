import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderHeader } from './order-header.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-header',
  imports: [CommonModule],
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css'],
  standalone: true,
})
export class OrderHeaderComponent implements OnInit {
  @Input() orderHeader?: OrderHeader;
  @Output() shipped = new EventEmitter<OrderHeader>();

  constructor() { }

  ngOnInit(): void {
  }
}
