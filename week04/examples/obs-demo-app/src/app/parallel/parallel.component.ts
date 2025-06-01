import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Subscription } from 'rxjs';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.css']
})
export class ParallelComponent implements OnInit, OnDestroy {

  taskOneInput!: string;
  taskOneDuration!: number;
  taskTwoInput!: string;
  taskTwoDuration!: number;
  taskThreeInput!: string;
  taskThreeDuration!: number;

  result1!: string;
  result2!: string;
  result3!: string;

  subscription!: Subscription;

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  doWork(): void {
    this.workerService.doWork(this.taskOneInput, this.taskOneDuration).subscribe(result => this.result1 = result);
    this.workerService.doWork(this.taskTwoInput, this.taskTwoDuration).subscribe(result => this.result2 = result);
    this.workerService.doWork(this.taskThreeInput, this.taskThreeDuration).subscribe(result => this.result3 = result);
  }

}
