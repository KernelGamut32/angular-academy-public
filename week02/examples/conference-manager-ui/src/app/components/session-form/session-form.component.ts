import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ConferenceSession } from '../../models/conference-session';
import { ConferenceSessionService } from '../../services/conference-session.service';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-session-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ...MATERIAL_IMPORTS],
  templateUrl: './session-form.component.html',
})
export class SessionFormComponent implements OnInit {
  session: ConferenceSession = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
  };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private svc: ConferenceSessionService,
    public router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.params['id'];
    if (idParam) {
      this.isEdit = true;
      this.svc.get(+idParam).subscribe((s) => (this.session = s));
    }
  }

  save() {
    this.session.startTime = new Date(this.session.startTime).toISOString();
    this.session.endTime = new Date(this.session.endTime).toISOString();
    if (this.isEdit) {
      this.svc
        .update(this.session.id!, this.session)
        .subscribe(() => this.router.navigate(['/sessions']));
    } else {
      this.svc
        .create(this.session)
        .subscribe(() => this.router.navigate(['/sessions']));
    }
  }
}
