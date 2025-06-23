import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { ScheduledClassListComponent } from './components/scheduled-class/scheduled-class-list/scheduled-class-list.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { StudentFormComponent } from './components/student/student-form/student-form.component';
import { ScheduledClassFormComponent } from './components/scheduled-class/scheduled-class-form/scheduled-class-form.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},

  // Protected routes
  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'courses/new', component: CourseFormComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id/edit', component: CourseFormComponent, canActivate: [AuthGuard] },

  { path: 'students', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'students/new', component: StudentFormComponent, canActivate: [AuthGuard] },
  { path: 'students/:id/edit', component: StudentFormComponent, canActivate: [AuthGuard] },

  { path: 'classes', component: ScheduledClassListComponent, canActivate: [AuthGuard] },
  { path: 'classes/new', component: ScheduledClassFormComponent, canActivate: [AuthGuard] },
  { path: 'classes/:id/edit', component: ScheduledClassFormComponent, canActivate: [AuthGuard] },

  // Wildcard route: redirect to courses
  { path: '**', redirectTo: '/courses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
