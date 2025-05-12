import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Attendee } from '../../models/attendee';
import { AttendeeService } from '../../services/attendee.service';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-attendee-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ...MATERIAL_IMPORTS],
  templateUrl: './attendee-detail.component.html',
})
export class AttendeeDetailComponent implements OnInit {
  attendee?: Attendee;
  constructor(
    private route: ActivatedRoute,
    private svc: AttendeeService,
    public router: Router
  ) {}
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.svc.get(id).subscribe((a) => (this.attendee = a));
  }
}
