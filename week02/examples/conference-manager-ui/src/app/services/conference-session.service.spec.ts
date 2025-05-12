import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ConferenceSessionService } from './conference-session.service';

describe('ConferenceSessionService', () => {
  let service: ConferenceSessionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    service = TestBed.inject(ConferenceSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
