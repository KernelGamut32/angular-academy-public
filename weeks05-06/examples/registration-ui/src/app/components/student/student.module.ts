import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [StudentListComponent, StudentFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class StudentModule {}
