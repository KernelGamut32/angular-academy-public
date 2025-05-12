import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { AttendeeListComponent } from './attendee-list.component';

describe('AttendeeListComponent', () => {
  let component: AttendeeListComponent;
  let fixture: ComponentFixture<AttendeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendeeListComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
