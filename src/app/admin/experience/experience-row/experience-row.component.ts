import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-row',
  templateUrl: './experience-row.component.html',
  styleUrls: ['./experience-row.component.scss']
})
export class ExperienceRowComponent implements OnInit {
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

}
