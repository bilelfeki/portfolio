import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-choises',
  templateUrl: './project-choises.component.html',
  styleUrls: ['./project-choises.component.scss']
})
export class ProjectChoisesComponent implements OnInit {

  @Output() action = new EventEmitter<string>()
  choises=["delete","duplicate"]
  constructor() { }

  ngOnInit(): void {
  }
  choiceMethod(action:string){
    this.action.emit(action)
  }

}
