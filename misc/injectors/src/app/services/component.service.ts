import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ComponentService {
  result: string;

  constructor() {
    this.result = 'Component Service Initialized - ' + uuidv4();
   }
}
