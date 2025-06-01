import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  errorMessage = '';

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.findAll().subscribe({
      next: (data) => (this.courses = data),
      error: (err) => (this.errorMessage = 'Error loading courses'),
    });
  }

  addCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  editCourse(course: Course): void {
    this.router.navigate(['/courses', course.id, 'edit']);
  }

  deleteCourse(course: Course): void {
    if (course.id == null) {
      return;
    }
    if (confirm(`Are you sure you want to delete course "${course.title}"?`)) {
      this.courseService.delete(course.id).subscribe({
        next: () => this.loadCourses(),
        error: () => (this.errorMessage = 'Error deleting course'),
      });
    }
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id ? course.id : index;
  }
}
