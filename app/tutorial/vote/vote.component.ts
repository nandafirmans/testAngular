import {Component , Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector : "voteComp",
    template : `
        <div class="wrap">
            <i class="glyphicon glyphicon-menu-up" 
            (click)="plus()"
            [style.color]="myVote == 1 ? 'red' : '#999'"></i>
            <span>{{voteVal + myVote}}</span>
            <i class="glyphicon glyphicon-menu-down" 
            (click)="minus()"
            [style.color]="myVote == -1 ? 'red' : '#999'"></i>
        </div>
    `,
    styles : [`
        .wrap{
            display:block;
            text-align:center;
        } 
        .wrap span, .wrap i{
            display:block;
            width:100%;
            font-size:20px;
        }
        .wrap i{
            cursor:pointer;
        }
    `]
})
export class VoteComponent{
    @Input("vote-value") voteVal = 0;
    @Input("my-vote") myVote = 0;
    @Output() onchange = new EventEmitter();


    plus(){
        if (this.myVote == 1) {
            return false;
        }
        this.myVote++;
        this.onchange.emit({newValue : this.myVote});
    }
    minus(){
        if (this.myVote == -1) {
            return false;
        }
        this.myVote--;
        this.onchange.emit({newValue : this.myVote});
    }
}