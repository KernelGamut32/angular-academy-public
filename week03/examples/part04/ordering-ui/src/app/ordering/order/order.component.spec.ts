import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OrderComponent } from './order.component';
import { OrderHeaderComponent } from '../order-header/order-header.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize orderHeader with correct default values on init', () => {
    expect(component.orderHeader).toBeDefined();
    expect(component.orderHeader!.id).toBe(1);
    expect(component.orderHeader!.orderNumber).toBe('ABC-123');
    expect(component.orderHeader!.description).toBe('This is order ABC-123');
    expect(component.orderHeader!.orderDetails.length).toBe(1);

    const detail = component.orderHeader!.orderDetails[0];
    expect(detail).toEqual(jasmine.objectContaining({
      productNumber: 'AAA33200',
      quantity: 25,
      total: 199.99
    }));
  });

  it('should render the OrderHeaderComponent with the orderHeader input', () => {
    const headerDE = fixture.debugElement.query(By.directive(OrderHeaderComponent));
    expect(headerDE).toBeTruthy();

    const headerCmp = headerDE.componentInstance as OrderHeaderComponent;
    expect(headerCmp.orderHeader).toBe(component.orderHeader);
  });

  it('should render one OrderDetailComponent per orderDetail', () => {
    const detailDEs = fixture.debugElement.queryAll(By.directive(OrderDetailComponent));
    expect(detailDEs.length).toBe(1);

    const detailCmp = detailDEs[0].componentInstance as OrderDetailComponent;
    expect(detailCmp.orderDetail).toEqual(component.orderHeader!.orderDetails[0]);
  });

  it('should log the shipped order via console.log when onShipped is called', () => {
    spyOn(console, 'log');
    component.onShipped(component.orderHeader!);
    expect(console.log).toHaveBeenCalledWith('Order shipped:', component.orderHeader);
  });
});
