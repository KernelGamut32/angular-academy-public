import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Attendee } from '../../models/attendee';
import { ConferenceSession } from '../../models/conference-session';
import { Presenter } from '../../models/presenter';
import { AttendeeService } from '../../services/attendee.service';
import { ConferenceSessionService } from '../../services/conference-session.service';
import { PresenterService } from '../../services/presenter.service';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-session-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './session-detail.component.html',
})
export class SessionDetailComponent implements OnInit {
  session!: ConferenceSession;
  allAttendees: Attendee[] = [];
  allPresenters: Presenter[] = [];
  selectedAttendee!: number;
  selectedPresenter!: number;

  constructor(
    private route: ActivatedRoute,
    private svc: ConferenceSessionService,
    private aSvc: AttendeeService,
    private pSvc: PresenterService,
    public router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.load(id);
    this.aSvc.getAll().subscribe((a) => (this.allAttendees = a));
    this.pSvc.getAll().subscribe((p) => (this.allPresenters = p));
  }

  load(id: number) {
    this.svc.get(id).subscribe((s) => (this.session = s));
  }

  addAttendee() {
    if (this.selectedAttendee) {
      this.svc
        .registerAttendee(this.session.id!, this.selectedAttendee)
        .subscribe((s) => (this.session = s));
    }
  }

  addPresenter() {
    if (this.selectedPresenter) {
      this.svc
        .assignPresenter(this.session.id!, this.selectedPresenter)
        .subscribe((s) => (this.session = s));
    }
  }
}
