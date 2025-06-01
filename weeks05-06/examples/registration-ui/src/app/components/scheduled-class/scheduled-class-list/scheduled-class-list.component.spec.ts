import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledClassListComponent } from './scheduled-class-list.component';

describe('ScheduledClassListComponent', () => {
  let component: ScheduledClassListComponent;
  let fixture: ComponentFixture<ScheduledClassListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledClassListComponent],
    });
    fixture = TestBed.createComponent(ScheduledClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
