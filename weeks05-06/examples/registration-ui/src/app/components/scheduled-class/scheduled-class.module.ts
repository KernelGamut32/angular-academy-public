import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduledClassListComponent } from './scheduled-class-list/scheduled-class-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScheduledClassListComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ScheduledClassModule {}
