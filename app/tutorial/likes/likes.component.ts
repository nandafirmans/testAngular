import {Component, Input} from "@angular/core";

@Component({
    selector : "likeComp",
    template : `
    <p (click)="liked()" >
      <span class="glyphicon glyphicon-heart" [style.color]="active ? '#ccc' : 'deepPink'"></span>
      <span>{{valLiked}}</span>
    <p>`,
    styles : [`
        p{
        cursor : pointer;
        }
    `]
})
export class LikesComponent{
    active = true;
    @Input("likeNum") valLiked = 0;

    liked(){
        this.active = !this.active;
        this.valLiked = this.active ? this.valLiked - 1 : this.valLiked + 1;
    }
}