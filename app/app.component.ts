import {Component, ViewEncapsulation} from "@angular/core";
import { TimelineComponent } from './tutorial/timeline/timeline.component';
import { Observable } from 'rxjs'; 
import "rxjs/add/operator/map";

@Component({
  selector : "myApp",
  styleUrls : ["../assets/css/bootstrap.min.css"],
  template : `
  <br>
  <div class="container">
    <div class="row">
      <br>
        <timeline></timeline>
    </div>
  </div>
  `,
  encapsulation : ViewEncapsulation.None,
  directives : [TimelineComponent]
})
export class AppComponent{ }
