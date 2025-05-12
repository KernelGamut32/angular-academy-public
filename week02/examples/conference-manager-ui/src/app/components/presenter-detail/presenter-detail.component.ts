import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Presenter } from '../../models/presenter';
import { PresenterService } from '../../services/presenter.service';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-presenter-detail',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './presenter-detail.component.html',
  styleUrl: './presenter-detail.component.css',
})
export class PresenterDetailComponent implements OnInit {
  presenter?: Presenter;
  constructor(
    private route: ActivatedRoute,
    private svc: PresenterService,
    public router: Router
  ) {}
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.svc.get(id).subscribe((a) => (this.presenter = a));
  }
}
