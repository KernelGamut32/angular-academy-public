import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { AttendeeFormComponent } from './attendee-form.component';

describe('AttendeeFormComponent', () => {
  let component: AttendeeFormComponent;
  let fixture: ComponentFixture<AttendeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendeeFormComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
