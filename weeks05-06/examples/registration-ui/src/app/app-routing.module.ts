import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { ScheduledClassListComponent } from './components/scheduled-class/scheduled-class-list/scheduled-class-list.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { StudentFormComponent } from './components/student/student-form/student-form.component';
import { ScheduledClassFormComponent } from './components/scheduled-class/scheduled-class-form/scheduled-class-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'courses/:id/edit', component: CourseFormComponent },
  
  { path: 'students', component: StudentListComponent },
  { path: 'students/new', component: StudentFormComponent },
  { path: 'students/:id/edit', component: StudentFormComponent },

  { path: 'classes', component: ScheduledClassListComponent },
  { path: 'classes/new', component: ScheduledClassFormComponent },
  { path: 'classes/:id/edit', component: ScheduledClassFormComponent },

  // Wildcard route: redirect to courses
  { path: '**', redirectTo: '/courses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
