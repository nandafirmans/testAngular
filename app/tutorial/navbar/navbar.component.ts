import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : "navbar",
    templateUrl : "./navbar.html"
    //template : ``
})
export class NavbarComponent{
    @Input() viewValue : string;
    @Output() onMenuChange = new EventEmitter();

    viewMode(value){
        this.viewValue = value;
        this.onMenuChange.emit({mode : value});
    }
}