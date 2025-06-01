import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  errorMessage = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.findAll().subscribe({
      next: (data) => (this.students = data),
      error: () => (this.errorMessage = 'Error loading students'),
    });
  }

  addStudent(): void {
    this.router.navigate(['/students/new']);
  }

  editStudent(student: Student): void {
    if (student.id != null) {
      this.router.navigate(['/students', student.id, 'edit']);
    }
  }

  deleteStudent(student: Student): void {
    if (student.id == null) {
      return;
    }
    if (
      confirm(
        `Are you sure you want to delete student "${student.firstName} ${student.lastName}"?`
      )
    ) {
      this.studentService.delete(student.id).subscribe({
        next: () => this.loadStudents(),
        error: () => (this.errorMessage = 'Error deleting student'),
      });
    }
  }

  trackByStudentId(index: number, student: Student): number {
    return student.id ? student.id : index;
  }
}
