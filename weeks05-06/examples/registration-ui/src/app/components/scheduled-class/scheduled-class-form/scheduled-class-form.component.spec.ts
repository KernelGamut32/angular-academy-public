import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledClassFormComponent } from './scheduled-class-form.component';

describe('ScheduledClassFormComponent', () => {
  let component: ScheduledClassFormComponent;
  let fixture: ComponentFixture<ScheduledClassFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledClassFormComponent]
    });
    fixture = TestBed.createComponent(ScheduledClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
