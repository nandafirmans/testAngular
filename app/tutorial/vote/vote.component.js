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
var VoteComponent = (function () {
    function VoteComponent() {
        this.voteVal = 0;
        this.myVote = 0;
        this.onchange = new core_1.EventEmitter();
    }
    VoteComponent.prototype.plus = function () {
        if (this.myVote == 1) {
            return false;
        }
        this.myVote++;
        this.onchange.emit({ newValue: this.myVote });
    };
    VoteComponent.prototype.minus = function () {
        if (this.myVote == -1) {
            return false;
        }
        this.myVote--;
        this.onchange.emit({ newValue: this.myVote });
    };
    __decorate([
        core_1.Input("vote-value"), 
        __metadata('design:type', Object)
    ], VoteComponent.prototype, "voteVal", void 0);
    __decorate([
        core_1.Input("my-vote"), 
        __metadata('design:type', Object)
    ], VoteComponent.prototype, "myVote", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VoteComponent.prototype, "onchange", void 0);
    VoteComponent = __decorate([
        core_1.Component({
            selector: "voteComp",
            template: "\n        <div class=\"wrap\">\n            <i class=\"glyphicon glyphicon-menu-up\" \n            (click)=\"plus()\"\n            [style.color]=\"myVote == 1 ? 'red' : '#999'\"></i>\n            <span>{{voteVal + myVote}}</span>\n            <i class=\"glyphicon glyphicon-menu-down\" \n            (click)=\"minus()\"\n            [style.color]=\"myVote == -1 ? 'red' : '#999'\"></i>\n        </div>\n    ",
            styles: ["\n        .wrap{\n            display:block;\n            text-align:center;\n        } \n        .wrap span, .wrap i{\n            display:block;\n            width:100%;\n            font-size:20px;\n        }\n        .wrap i{\n            cursor:pointer;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], VoteComponent);
    return VoteComponent;
}());
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map