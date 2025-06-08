import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentStatus } from 'src/app/models/student-status';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  isEditMode = false;
  studentId?: number;
  errorMessage = '';
  studentStatus = StudentStatus;
  statusEnumKeys = Object.keys(this.studentStatus) as Array<keyof typeof StudentStatus>;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: [''],
      dateOfBirth: ['', [Validators.required]],
      status: [null, [Validators.required]],
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEditMode = true;
        this.studentId = +idParam;
        this.loadStudent(this.studentId);
      }
    });
  }

  loadStudent(id: number): void {
    this.studentService.findById(id).subscribe({
      next: (student: Student) => this.studentForm.patchValue(student),
      error: () => this.errorMessage = 'Error loading student'
    });
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      return;
    }

    const studentData: Student = {
      firstName: this.studentForm.value.firstName,
      lastName: this.studentForm.value.lastName,
      phoneNumber: this.studentForm.value.phoneNumber,
      dateOfBirth: this.studentForm.value.dateOfBirth,
      status: this.studentForm.value.status,
    };

    if (this.isEditMode && this.studentId != null) {
      studentData.id = this.studentId; // Ensure the ID is set for updates
      this.studentService.update(this.studentId, studentData).subscribe({
        next: () => this.router.navigate(['/students']),
        error: () => this.errorMessage = 'Error updating student'
      });
    } else {
      this.studentService.create(studentData).subscribe({
        next: () => this.router.navigate(['/students']),
        error: () => this.errorMessage = 'Error creating student'
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }
}
