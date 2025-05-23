import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHeaderComponent } from './order-header.component';
import { OrderHeader } from './order-header.model';

describe('OrderHeaderComponent', () => {
  let component: OrderHeaderComponent;
  let fixture: ComponentFixture<OrderHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render any markup when no orderHeader is provided', () => {
    component.orderHeader = undefined;
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('p');
    expect(p).toBeNull();
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeNull();
  });

  it('should display order number and description when orderHeader input is set', () => {
    const order: OrderHeader = {
      id: 42,
      orderNumber: 'TEST-042',
      description: 'Test order desc',
      total: 100,
      orderDetails: []
    };
    component.orderHeader = order;
    fixture.detectChanges();

    const texts = Array.from<HTMLElement>(fixture.nativeElement.querySelectorAll('p'))
      .map((p) => p.textContent!.trim());
    expect(texts).toContain(`Order Number is ${order.orderNumber}`);
    expect(texts).toContain(`Description: ${order.description}`);
  });

  it('should emit the shipped event when "Ship It!" button is clicked', () => {
    const order: OrderHeader = {
      id: 7,
      orderNumber: 'SHIP-007',
      description: 'James Bond order',
      total: 7,
      orderDetails: []
    };
    component.orderHeader = order;
    fixture.detectChanges();

    spyOn(component.shipped, 'emit');
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    btn.click();
    expect(component.shipped.emit).toHaveBeenCalledWith(order);
  });
});
