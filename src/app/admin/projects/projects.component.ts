import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  experiences:Project[]=[
    {
      id:1,
      progress:20,
      githubLink:"github.com/bilelfeki" ,
      name:"portfolio",
      description:"this my new project"
  
  },
  {
    id:2,
    progress:80,
    githubLink:"github.com/bilelfeki" ,
    name:"drive 2.0",
    description:"this my new project"
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
