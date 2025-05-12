import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Attendee } from '../../models/attendee';
import { AttendeeService } from '../../services/attendee.service';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-attendee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ...MATERIAL_IMPORTS],
  templateUrl: './attendee-list.component.html',
})
export class AttendeeListComponent implements OnInit {
  attendees: Attendee[] = [];
  constructor(private svc: AttendeeService, public router: Router) {}
  ngOnInit() {
    this.load();
  }
  load() {
    this.svc.getAll().subscribe((a) => (this.attendees = a));
  }
  delete(id: number) {
    this.svc.delete(id).subscribe(() => this.load());
  }
}
