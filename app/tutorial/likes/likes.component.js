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
var LikesComponent = (function () {
    function LikesComponent() {
        this.active = true;
        this.valLiked = 0;
    }
    LikesComponent.prototype.liked = function () {
        this.active = !this.active;
        this.valLiked = this.active ? this.valLiked - 1 : this.valLiked + 1;
    };
    __decorate([
        core_1.Input("likeNum"), 
        __metadata('design:type', Object)
    ], LikesComponent.prototype, "valLiked", void 0);
    LikesComponent = __decorate([
        core_1.Component({
            selector: "likeComp",
            template: "\n    <p (click)=\"liked()\" >\n      <span class=\"glyphicon glyphicon-heart\" [style.color]=\"active ? '#ccc' : 'deepPink'\"></span>\n      <span>{{valLiked}}</span>\n    <p>",
            styles: ["\n        p{\n        cursor : pointer;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LikesComponent);
    return LikesComponent;
}());
exports.LikesComponent = LikesComponent;
//# sourceMappingURL=likes.component.js.map