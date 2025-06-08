import { Component } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-demo-display',
  templateUrl: './demo-display.component.html',
  styleUrls: ['./demo-display.component.css'],
  providers: [ComponentService] // ComponentService is provided at the component level
})
export class DemoDisplayComponent {

  constructor(private rootService: RootService, 
    private componentService: ComponentService) { }

  get rootServiceResult(): string {
    return this.rootService.result;
  }

  get componentServiceResult(): string {
    return this.componentService.result;
  }
}
