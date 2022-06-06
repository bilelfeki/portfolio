import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-choises',
  templateUrl: './experience-choises.component.html',
  styleUrls: ['./experience-choises.component.scss']
})
export class ExperienceChoisesComponent implements OnInit {
  @Output() action = new EventEmitter<string>()
  choises=["delete","duplicate"]
  constructor() { }

  ngOnInit(): void {
  }
  choiceMethod(action:string){
    this.action.emit(action)
  }
}
