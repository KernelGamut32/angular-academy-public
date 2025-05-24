import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

    // The InMemoryWebApiModule intercepts HTTP requests
    // and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {
        dataEncapsulation: false,
        delay: 500    // simulate latency (ms)
      }
    ),
    
    AccountModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
