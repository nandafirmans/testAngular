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
var core_1 = require('@angular/core');
var timeline_service_1 = require('./timeline.service');
var likes_component_1 = require('../likes/likes.component');
var vote_component_1 = require('../vote/vote.component');
var TimelineComponent = (function () {
    function TimelineComponent(service) {
        this.service = service;
        this.data = service.getData();
    }
    TimelineComponent.prototype.onVoteChange = function ($event) {
        console.log($event);
    };
    TimelineComponent = __decorate([
        core_1.Component({
            selector: 'timeline',
            moduleId: module.id,
            // templateUrl : './timeline.html',
            template: "\n        <div *ngFor=\"let i of data\" class=\"col-md-3\">\n            <div class=\"card card-blog\">\n                <div class=\"card-image\">\n                    <a href=\"#pablo\">\n                        <img class=\"img\" src=\"{{i.img}}\">\n                        <div class=\"card-title\">\n                            {{i.title}}\n                        </div>\n                    </a>\n                    <div class=\"ripple-container\"></div>\n                </div>\n                <div class=\"content\">\n                    <likeComp [likeNum]=\"i.num.likes\"></likeComp>\n                    <div class=\"row\">\n                        <p class=\"card-description col-xs-10\">\n                            {{i.dsc}}\n                        </p>\n                        <voteComp \n                            class=\"col-xs-2\" [vote-value]=\"i.num.votes\" \n                            (onchange)=\"onVoteChange($event)\">\n                        </voteComp>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            providers: [timeline_service_1.TimelineService],
            directives: [likes_component_1.LikesComponent, vote_component_1.VoteComponent],
            styles: ["\n        voteComp{\n            padding:0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [timeline_service_1.TimelineService])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map