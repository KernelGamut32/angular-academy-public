import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  result: string;

  constructor() {
    this.result = 'Root Service Initialized - ' + uuidv4();
   }
}
