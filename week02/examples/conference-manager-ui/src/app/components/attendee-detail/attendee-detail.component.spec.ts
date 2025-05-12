import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { AttendeeDetailComponent } from './attendee-detail.component';

describe('AttendeeDetailComponent', () => {
  let component: AttendeeDetailComponent;
  let fixture: ComponentFixture<AttendeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendeeDetailComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
