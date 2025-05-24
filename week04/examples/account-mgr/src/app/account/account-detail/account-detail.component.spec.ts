import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailComponent } from './account-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountService } from '../account.service';

import { 
  HttpClientTestingModule, 
  HttpTestingController 
} from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AccountDetailComponent', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;
  let component: AccountDetailComponent;
  let fixture: ComponentFixture<AccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
      declarations: [ AccountDetailComponent ],
      providers: [AccountService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
