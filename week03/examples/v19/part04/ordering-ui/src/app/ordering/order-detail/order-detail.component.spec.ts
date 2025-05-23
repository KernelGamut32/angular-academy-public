import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OrderDetailComponent } from './order-detail.component';
import { OrderDetail } from './order-detail.model';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render anything when no orderDetail is provided', () => {
    component.orderDetail = undefined;
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('p');
    expect(p).toBeNull();
    const input = fixture.nativeElement.querySelector('input');
    expect(input).toBeNull();
  });

  it('should display product number, quantity, and total when input is set', () => {
    const detail: OrderDetail = {
      id: 8,
      orderHeaderId: 1,
      productNumber: 'PN-008',
      quantity: 8,
      total: 64
    };
    component.orderDetail = detail;
    fixture.detectChanges();

    const ps = fixture.nativeElement.querySelectorAll('p');
    expect(ps[0].textContent).toContain(detail.productNumber);
    expect(ps[1].textContent).toContain(detail.quantity.toString());
    expect(ps[2].textContent).toContain(detail.total.toString());
  });

  it('should update the orderDetail.quantity property when the input value changes', () => {
    const detail: OrderDetail = {
      id: 9,
      orderHeaderId: 1,
      productNumber: 'PN-009',
      quantity: 1,
      total: 9
    };
    component.orderDetail = detail;
    fixture.detectChanges();

    const inputDe = fixture.debugElement.query(By.css('input'));
    const inputEl: HTMLInputElement = inputDe.nativeElement;

    // simulate user changing the input to 5
    inputEl.value = '5';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.orderDetail!.quantity).toBe(5);
    // also reflected back in the <p> if you re-render
    const quantityP = fixture.nativeElement.querySelectorAll('p')[1];
    expect(quantityP.textContent).toContain('5');
  });
});
