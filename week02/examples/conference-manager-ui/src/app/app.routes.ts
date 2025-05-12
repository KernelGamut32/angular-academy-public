import { Routes } from '@angular/router';
import { AttendeeDetailComponent } from './components/attendee-detail/attendee-detail.component';
import { AttendeeFormComponent } from './components/attendee-form/attendee-form.component';
import { AttendeeListComponent } from './components/attendee-list/attendee-list.component';
import { SessionDetailComponent } from './components/session-detail/session-detail.component';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { PresenterListComponent } from './components/presenter-list/presenter-list.component';
import { PresenterFormComponent } from './components/presenter-form/presenter-form.component';
import { PresenterDetailComponent } from './components/presenter-detail/presenter-detail.component';

export const routes: Routes = [
  // Attendee routes
  { path: 'attendees', component: AttendeeListComponent },
  { path: 'attendees/new', component: AttendeeFormComponent },
  { path: 'attendees/:id', component: AttendeeDetailComponent },
  { path: 'attendees/:id/edit', component: AttendeeFormComponent },
  // Presenter routes
  { path: 'presenters', component: PresenterListComponent },
  { path: 'presenters/new', component: PresenterFormComponent },
  { path: 'presenters/:id', component: PresenterDetailComponent },
  { path: 'presenters/:id/edit', component: PresenterFormComponent },
  // Session routes
  { path: 'sessions', component: SessionListComponent },
  { path: 'sessions/new', component: SessionFormComponent },
  { path: 'sessions/:id', component: SessionDetailComponent },
  { path: 'sessions/:id/edit', component: SessionFormComponent },
  // Default route
  { path: '', redirectTo: 'attendees', pathMatch: 'full' },
];
