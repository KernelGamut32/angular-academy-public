import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: true,
})
export class ParentComponent implements OnInit {
  animals = ['Koala', 'Anaconda', 'Giant Otter', 'Gorilla'];
  profile = {
    username: 'Kernel32',
    favoriteColor: 'red',
    numberOfReesesCupsEatenIn30Minutes: 0
  };
  newAnimal: string = undefined!;

  constructor() { }

  ngOnInit(): void {
  }

  addNewAnimal(): void {
    // Non-immutable approach
    this.animals.push(this.newAnimal);

    // Immutable approach
    // this.animals = [...this.animals, this.newAnimal];
  }

  updateProfile(): void {
    // Non-immutable approach
    this.profile.favoriteColor = 'green';
    this.profile.numberOfReesesCupsEatenIn30Minutes = 21;

    // Immutable approach
    // this.profile = {
    //   ...this.profile,
    //   favoriteColor: 'green',
    //   numberOfReesesCupsEatenIn30Minutes: 21
    // };
  }
}
