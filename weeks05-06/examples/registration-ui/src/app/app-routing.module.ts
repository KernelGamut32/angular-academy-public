import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { ScheduledClassListComponent } from './components/scheduled-class/scheduled-class-list/scheduled-class-list.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },

  { path: 'students', component: StudentListComponent },

  { path: 'classes', component: ScheduledClassListComponent },

  // Wildcard route: redirect to courses
  { path: '**', redirectTo: '/courses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
