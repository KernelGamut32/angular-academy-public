import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { PresenterFormComponent } from './presenter-form.component';

describe('PresenterFormComponent', () => {
  let component: PresenterFormComponent;
  let fixture: ComponentFixture<PresenterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenterFormComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
