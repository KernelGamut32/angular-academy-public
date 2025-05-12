import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Presenter } from '../../models/presenter';
import { PresenterService } from '../../services/presenter.service';
import { MATERIAL_IMPORTS } from '../../material';

@Component({
  selector: 'app-presenter-list',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './presenter-list.component.html',
  styleUrl: './presenter-list.component.css',
})
export class PresenterListComponent implements OnInit {
  presenters: Presenter[] = [];
  constructor(private svc: PresenterService, public router: Router) {}
  ngOnInit() {
    this.load();
  }
  load() {
    this.svc.getAll().subscribe((a) => (this.presenters = a));
  }
  delete(id: number) {
    this.svc.delete(id).subscribe(() => this.load());
  }
}
