import {Component, ViewEncapsulation} from "@angular/core";
import { TimelineComponent } from './tutorial/timeline/timeline.component';
import { NavbarComponent } from './tutorial/navbar/navbar.component';
import { Observable } from 'rxjs'; 
import "rxjs/add/operator/map";

@Component({
  selector : "myApp",
  styleUrls : ["../assets/css/bootstrap.min.css", "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"],
  template : `
  <navbar></navbar>
  <div class="container">
    <div class="row" [ngSwitch]="ViewMode">
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
    ViewMode = "timeline"
 }
