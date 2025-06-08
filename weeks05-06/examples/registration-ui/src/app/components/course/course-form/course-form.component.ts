import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  isEditMode = false;
  courseId?: number;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required]],
      code: ['', [Validators.required]],
      credits: ['', [
        Validators.required, 
        Validators.min(0.5),
        Validators.max(25)
      ]],
    });

    // Check if route has an 'id' parameter
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEditMode = true;
        this.courseId = +idParam;
        this.loadCourse(this.courseId);
      }
    });
  }

  loadCourse(id: number): void {
    this.courseService.findById(id).subscribe({
      next: (course: Course) => this.courseForm.patchValue(course),
      error: () => this.errorMessage = 'Error loading course'
    });
  }

  onSubmit(): void {
    if (this.courseForm.invalid) {
      return;
    }

    const courseData: Course = {
      title: this.courseForm.value.title,
      code: this.courseForm.value.code,
      credits: this.courseForm.value.credits,
    };

    if (this.isEditMode && this.courseId != null) {
      // Update existing
      courseData.id = this.courseId; // Ensure ID is set for update
      this.courseService.update(this.courseId, courseData).subscribe({
        next: () => this.router.navigate(['/courses']),
        error: () => this.errorMessage = 'Error updating course'
      });
    } else {
      // Create new
      this.courseService.create(courseData).subscribe({
        next: () => this.router.navigate(['/courses']),
        error: () => this.errorMessage = 'Error creating course'
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }
}
