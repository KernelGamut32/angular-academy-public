import { OrderDetail } from "../order-detail/order-detail.model";

export interface OrderHeader {
  id: number;
  orderNumber: string;
  description: string;
  total: number;
  orderDetails: Array<OrderDetail>;
}
