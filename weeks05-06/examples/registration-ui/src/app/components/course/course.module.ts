import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [CourseListComponent, CourseFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CourseModule {}
