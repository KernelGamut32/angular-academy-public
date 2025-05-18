import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() listOfThings: string[] = [];
  @Input() theObject: { username: string, favoriteColor: string } = { username: '', favoriteColor: '' };

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.cd.detectChanges();
    // }, 5000);
  }

  refresh(): void {
    // this.cd.detectChanges();
  }
}
