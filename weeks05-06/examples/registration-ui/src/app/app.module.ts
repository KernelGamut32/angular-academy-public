import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './components/course/course.module';
import { StudentModule } from './components/student/student.module';
import { ScheduledClassModule } from './components/scheduled-class/scheduled-class.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CourseModule,
    StudentModule,
    ScheduledClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
