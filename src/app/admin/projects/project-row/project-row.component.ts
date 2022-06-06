import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss']
})
export class ProjectRowComponent implements OnInit {

  
    @Output() action=new EventEmitter<string>()
    @Output() editEmitter =new EventEmitter()
    @Input() name:string="" ; 
    @Input() description="" ;
    @Input() progress=0 ;
    @Input() githubLink="";
    constructor() { }
  
    ngOnInit(): void {
    }
    public edit():void{
      this.editEmitter.emit()
    }
    onAction(event:string){
      this.action.emit(event)
    }
    delegateAction(action:string){
      this.action.emit(action)
    }

}
