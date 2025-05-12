import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Attendee } from '../../models/attendee';
import { AttendeeService } from '../../services/attendee.service';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-attendee-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ...MATERIAL_IMPORTS],
  templateUrl: './attendee-form.component.html',
})
export class AttendeeFormComponent implements OnInit {
  attendee: Attendee = { name: '', email: '' };
  isEdit = false;
  constructor(
    private route: ActivatedRoute,
    private svc: AttendeeService,
    public router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.params['id'];
    if (idParam) {
      this.isEdit = true;
      this.svc.get(+idParam).subscribe((a) => (this.attendee = a));
    }
  }

  save() {
    if (this.isEdit) {
      this.svc
        .update(this.attendee.id!, this.attendee)
        .subscribe(() => this.router.navigate(['/attendees']));
    } else {
      this.svc
        .create(this.attendee)
        .subscribe(() => this.router.navigate(['/attendees']));
    }
  }
}
