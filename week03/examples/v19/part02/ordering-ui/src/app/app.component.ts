import { Component } from '@angular/core';
import { OrderComponent } from './ordering/order/order.component';

@Component({
  selector: 'app-root',
  imports: [OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ordering-ui';
}
