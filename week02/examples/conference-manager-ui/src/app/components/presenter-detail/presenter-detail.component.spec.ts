import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { PresenterDetailComponent } from './presenter-detail.component';

describe('PresenterDetailComponent', () => {
  let component: PresenterDetailComponent;
  let fixture: ComponentFixture<PresenterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenterDetailComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
