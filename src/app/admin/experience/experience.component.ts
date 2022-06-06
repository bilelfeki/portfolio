import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/interfaces/experience';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences:Experience[]=[
    {
      id:1,
      companyName:"vermeg", 
      dateDeb:"04-01-2018" ,
      dateFin:"05-602020" 
  
  },
  {
    id:1,
    companyName:"vermeg", 
    dateDeb:"04-01-2018" ,
    dateFin:"05-602020" 

}
  ]; 
  constructor() { }

  ngOnInit(): void {
  }
  onEdit(){
    console.log("ok")
  }
  performAction(action:string,id:number){
    console.log(action,id)
  }
}
