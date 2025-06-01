import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CourseListComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CourseModule {}
