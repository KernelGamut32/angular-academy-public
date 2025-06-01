import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduledClass } from '../../../models/scheduled-class';
import { ScheduledClassService } from '../../../services/scheduled-class.service';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-scheduled-class-list',
  templateUrl: './scheduled-class-list.component.html',
  styleUrls: ['./scheduled-class-list.component.css'],
})
export class ScheduledClassListComponent implements OnInit {
  scheduledClasses: ScheduledClass[] = [];
  errorMessage = '';

  constructor(
    private classService: ScheduledClassService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(): void {
    this.classService.findAll().subscribe({
      next: (data) => (this.scheduledClasses = data),
      error: () => (this.errorMessage = 'Error loading scheduled classes'),
    });
  }

  addClass(): void {
    this.router.navigate(['/classes/new']);
  }

  editClass(scheduledClass: ScheduledClass): void {
    if (scheduledClass.id != null) {
      this.router.navigate(['/classes', scheduledClass.id, 'edit']);
    }
  }

  deleteClass(scheduledClass: ScheduledClass): void {
    if (scheduledClass.id == null) {
      return;
    }
    if (
      confirm(
        `Delete scheduled class for course "${
          scheduledClass.course.title
        }"?`
      )
    ) {
      this.classService.delete(scheduledClass.id).subscribe({
        next: () => this.loadClasses(),
        error: () => (this.errorMessage = 'Error deleting class'),
      });
    }
  }

  manageStudents(scheduledClass: ScheduledClass): void {
    if (scheduledClass.id != null) {
      this.router.navigate(['/classes', scheduledClass.id, 'edit']);
    }
  }

  trackByScheduledClassId(index: number, scheduledClass: ScheduledClass): number {
    return scheduledClass.id ? scheduledClass.id : index;
  }
}
