import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduledClassListComponent } from './scheduled-class-list/scheduled-class-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduledClassFormComponent } from './scheduled-class-form/scheduled-class-form.component';

@NgModule({
  declarations: [ScheduledClassListComponent, ScheduledClassFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ScheduledClassModule {}
