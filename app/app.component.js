"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var timeline_component_1 = require('./tutorial/timeline/timeline.component');
var navbar_component_1 = require('./tutorial/navbar/navbar.component');
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent() {
        this.ViewMode = "timeline";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "myApp",
            styleUrls: ["../assets/css/bootstrap.min.css", "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"],
            template: "\n  <navbar></navbar>\n  <div class=\"container\">\n    <div class=\"row\" [ngSwitch]=\"ViewMode\">\n      <template [ngSwitchCase]=\"'timeline'\">\n        <timeline></timeline>\n      </template>\n      <template [ngSwitchCase]=\"'profile'\">\n        <h3 class=\"text-center\"> This should be profile page</h3>\n      </template>\n    </div>\n  </div>\n  ",
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [timeline_component_1.TimelineComponent, navbar_component_1.NavbarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map