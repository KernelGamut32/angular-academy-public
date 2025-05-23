import { Component } from '@angular/core';
import { OrderComponent } from './ordering/order/order.component';

@Component({
  selector: 'app-root',
  imports: [OrderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'ordering-ui';
}
