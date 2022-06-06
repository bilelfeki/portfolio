import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences:Project[]=[
    {
      id:1,
      progress:20,
      githubLink:"github.com/bilelfeki" ,
      name:"portfolio",
      description:"this my new project"
  
  },
  {
    id:1,
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
}
