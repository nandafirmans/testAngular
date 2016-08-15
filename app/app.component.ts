import {Component, ViewEncapsulation} from "@angular/core";
import { TimelineComponent } from './tutorial/timeline/timeline.component';
import { NavbarComponent } from './tutorial/navbar/navbar.component';
import { Observable } from 'rxjs'; 
import "rxjs/add/operator/map";

@Component({
  selector : "myApp",
  styleUrls : ["../assets/css/bootstrap.min.css"],
  template : `
  <navbar [viewValue]="mode"></navbar>
  <div class="container">
    <div class="row" [ngSwitch]="mode">
      <template [ngSwitchCase]="'timeline'">
        <timeline></timeline>
      </template>
      <template [ngSwitchCase]="'profile'">
        <h3 class="text-center"> This should be profile page</h3>
      </template>
    </div>
  </div>
  `,
  encapsulation : ViewEncapsulation.None,
  directives : [TimelineComponent, NavbarComponent]
})
export class AppComponent{
    mode = 'timeline';

    ViewMode($event){
        console.log($event);
        
    }
 }
