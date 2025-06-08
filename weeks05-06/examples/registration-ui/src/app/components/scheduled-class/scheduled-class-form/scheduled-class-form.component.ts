import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { ScheduledClass } from 'src/app/models/scheduled-class';
import { Student } from 'src/app/models/student';
import { CourseService } from 'src/app/services/course.service';
import { ScheduledClassService } from 'src/app/services/scheduled-class.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-scheduled-class-form',
  templateUrl: './scheduled-class-form.component.html',
  styleUrls: ['./scheduled-class-form.component.css']
})
export class ScheduledClassFormComponent implements OnInit {
  classForm!: FormGroup;
  allCourses: Course[] = [];
  allStudents: Student[] = [];

  registeredStudents: Student[] = [];
  isEditMode = false;
  classId?: number;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private classService: ScheduledClassService,
    private courseService: CourseService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.classForm = this.fb.group({
      courseId: [null, Validators.required],
      sectionName: ['', [Validators.required]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.courseService.findAll().subscribe({
      next: (courses) => this.allCourses = courses,
      error: () => this.errorMessage = 'Error loading courses'
    });
    this.studentService.findAll().subscribe({
      next: (students) => this.allStudents = students,
      error: () => this.errorMessage = 'Error loading students'
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEditMode = true;
        this.classId = +idParam;
        this.loadScheduledClass(this.classId);
      }
    });
  }

  loadScheduledClass(id: number): void {
    this.classService.findById(id).subscribe({
      next: (sclass: ScheduledClass) => {
        // Patch form fields
        this.classForm.patchValue({
          courseId: sclass.course.id,
          sectionName: sclass.sectionName,
          startDate: sclass.startDate,
          endDate: sclass.endDate
        });
        // Keep track of registered students
        this.registeredStudents = sclass.students || [];
      },
      error: () => this.errorMessage = 'Error loading scheduled class'
    });
  }

  onSubmit(): void {
    if (this.classForm.invalid) {
      return;
    }

    const formValues = this.classForm.value;
    const sclassData: ScheduledClass = {
      course: { id: formValues.courseId } as Course,
      sectionName: formValues.sectionName,
      startDate: formValues.startDate,
      endDate: formValues.endDate
    };

    if (this.isEditMode && this.classId != null) {
      sclassData.id = this.classId; // Ensure the ID is set for updates
      this.classService.update(this.classId, sclassData).subscribe({
        next: () => this.router.navigate(['/classes']),
        error: () => this.errorMessage = 'Error updating scheduled class'
      });
    } else {
      // Create new
      this.classService.create(sclassData).subscribe({
        next: () => this.router.navigate(['/classes']),
        error: () => this.errorMessage = 'Error creating scheduled class'
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/classes']);
  }

  // REGISTER a student (only in edit mode)
  register(studentId: number): void {
    if (!this.classId) return;
    this.classService.registerStudent(this.classId, studentId).subscribe({
      next: (updatedClass) => {
        this.registeredStudents = updatedClass.students || [];
      },
      error: () => this.errorMessage = 'Error registering student'
    });
  }

  drop(studentId: number): void {
    if (!this.classId) return;
    this.classService.dropStudent(this.classId, studentId).subscribe({
      next: (updatedClass) => {
        this.registeredStudents = updatedClass.students || [];
      },
      error: () => this.errorMessage = 'Error dropping student'
    });
  }

  isRegistered(student: Student): boolean {
    return this.registeredStudents.some(s => s.id === student.id);
  }
}
