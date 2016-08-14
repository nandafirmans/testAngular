import { Injectable } from '@angular/core';

export class TimelineModel{
    id : number;
    title : string;
    dsc : string;
    img : string;
    num : {
        likes : number,
        votes : number
    }
}

export const arrTimeLineModel : TimelineModel[] = [
    {
        id : 1,
        title : "this is title for post 1",
        dsc : "Lorem ipsum dolor sit amet dancok matamu ah matamu ah matamu ah",
        img : "http://lorempixel.com/300/250/people?1",
        num :{
            likes : 12,
            votes : 2
        }
    },
    {
        id : 2,
        title : "this is title for post 2",
        dsc : "Lorem ipsum dolor sit amet dancok matamu ah matamu ah matamu ah",
        img : "http://lorempixel.com/300/250/people?2",
        num :{
            likes : 5,
            votes : 89
        }
    },
    {
        id : 3,
        title : "this is title for post 3",
        dsc : "Lorem ipsum dolor sit amet dancok matamu ah matamu ah matamu ah",
        img : "http://lorempixel.com/300/250/people?3",
        num :{
            likes : 23,
            votes : 9
        }
    },
    {
        id : 4,
        title : "this is title for post 4",
        dsc : "Lorem ipsum dolor sit amet dancok matamu ah matamu ah matamu ah",
        img : "http://lorempixel.com/300/250/people?4",
        num :{
            likes : 17,
            votes : 23
        }
    }
]

@Injectable()
export class TimelineService{
    getData(){
        return arrTimeLineModel;
    }
}