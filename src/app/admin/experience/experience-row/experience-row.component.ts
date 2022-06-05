import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-row',
  templateUrl: './experience-row.component.html',
  styleUrls: ['./experience-row.component.scss']
})
export class ExperienceRowComponent implements OnInit {
  @Output() editEmitter =new EventEmitter()
  @Input() name:string="" ; 
  @Input() description="" ;
  @Input() progress=0 ;

  constructor() { }

  ngOnInit(): void {
  }
  public edit():void{
    this.editEmitter.emit()
  }
}
