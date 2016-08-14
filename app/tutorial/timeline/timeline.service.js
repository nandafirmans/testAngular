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
var TimelineModel = (function () {
    function TimelineModel() {
    }
    return TimelineModel;
}());
exports.TimelineModel = TimelineModel;
exports.arrTimeLineModel = [
    {
        id: 1,
        title: "this is title for post 1",
        dsc: "Lorem ipsum dolor sit amet dancok matamu ah matamu ah matamu ah",
        img: "http://lorempixel.com/300/250/people?1",
        num: {
            likes: 12,
            votes: 2
        }
    },
    {
        id: 2,
        title: "this is title for post 2",
        dsc: "Lorem ipsum dolor sit amet dancok matamu ah matamu ah matamu ah",
        img: "http://lorempixel.com/300/250/people?2",
        num: {
            likes: 5,
            votes: 89
        }
    },
    {
        id: 3,
        title: "this is title for post 3",
        dsc: "Lorem ipsum dolor sit amet dancok matamu ah matamu ah matamu ah",
        img: "http://lorempixel.com/300/250/people?3",
        num: {
            likes: 23,
            votes: 9
        }
    },
    {
        id: 4,
        title: "this is title for post 4",
        dsc: "Lorem ipsum dolor sit amet dancok matamu ah matamu ah matamu ah",
        img: "http://lorempixel.com/300/250/people?4",
        num: {
            likes: 17,
            votes: 23
        }
    }
];
var TimelineService = (function () {
    function TimelineService() {
    }
    TimelineService.prototype.getData = function () {
        return exports.arrTimeLineModel;
    };
    TimelineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimelineService);
    return TimelineService;
}());
exports.TimelineService = TimelineService;
//# sourceMappingURL=timeline.service.js.map