import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDisplayComponent } from './demo-display.component';

describe('DemoDisplayComponent', () => {
  let component: DemoDisplayComponent;
  let fixture: ComponentFixture<DemoDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoDisplayComponent]
    });
    fixture = TestBed.createComponent(DemoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
