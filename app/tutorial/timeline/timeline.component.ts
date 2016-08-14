import { Component } from '@angular/core';
import { TimelineService } from './timeline.service';
import { LikesComponent } from '../likes/likes.component';
import { VoteComponent } from '../vote/vote.component';

@Component({
    selector : 'timeline',
    moduleId: module.id,
    // templateUrl : './timeline.html',
    template : `
        <div *ngFor="let i of data" class="col-md-3">
            <div class="card card-blog">
                <div class="card-image">
                    <a href="#pablo">
                        <img class="img" src="{{i.img}}">
                        <div class="card-title">
                            {{i.title}}
                        </div>
                    </a>
                    <div class="ripple-container"></div>
                </div>
                <div class="content">
                    <likeComp [likeNum]="i.num.likes"></likeComp>
                    <div class="row">
                        <p class="card-description col-xs-10">
                            {{i.dsc}}
                        </p>
                        <voteComp 
                            class="col-xs-2" [vote-value]="i.num.votes" 
                            (onchange)="onVoteChange($event)">
                        </voteComp>
                    </div>
                </div>
            </div>
        </div>
    `,
    providers : [TimelineService],
    directives : [LikesComponent, VoteComponent],
    styles : [`
        voteComp{
            padding:0;
        }
    `]
})
export class TimelineComponent{
    data;
    
    constructor(private service : TimelineService){
        this.data = service.getData();
    }

    onVoteChange($event){
        console.log($event);
    }
}