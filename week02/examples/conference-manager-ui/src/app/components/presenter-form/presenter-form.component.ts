import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Presenter } from '../../models/presenter';
import { PresenterService } from '../../services/presenter.service';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-presenter-form',
  imports: [FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './presenter-form.component.html',
  styleUrl: './presenter-form.component.css',
})
export class PresenterFormComponent implements OnInit {
  presenter: Presenter = { name: '', bio: '' };
  isEdit = false;
  constructor(
    private route: ActivatedRoute,
    private svc: PresenterService,
    public router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.params['id'];
    if (idParam) {
      this.isEdit = true;
      this.svc.get(+idParam).subscribe((a) => (this.presenter = a));
    }
  }

  save() {
    if (this.isEdit) {
      this.svc
        .update(this.presenter.id!, this.presenter)
        .subscribe(() => this.router.navigate(['/presenters']));
    } else {
      this.svc
        .create(this.presenter)
        .subscribe(() => this.router.navigate(['/presenters']));
    }
  }
}
