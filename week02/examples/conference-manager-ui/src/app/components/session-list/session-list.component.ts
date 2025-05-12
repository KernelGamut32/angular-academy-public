import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ConferenceSession } from '../../models/conference-session';
import { ConferenceSessionService } from '../../services/conference-session.service';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ...MATERIAL_IMPORTS],
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit {
  sessions: ConferenceSession[] = [];
  constructor(private svc: ConferenceSessionService, public router: Router) {}
  ngOnInit() {
    this.load();
  }
  load() {
    this.svc.getAll().subscribe((s) => (this.sessions = s));
  }
  delete(id: number) {
    this.svc.delete(id).subscribe(() => this.load());
  }
}
