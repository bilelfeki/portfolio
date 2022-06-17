import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[]; 
  constructor(private serv:ProjectService) { }

  ngOnInit(): void {
    this.getProjects() ;
  }
  onEdit(){
    console.log("ok")
  }
  performAction(action:string,id:number){
    console.log(action,id)
  }
  getProjects():void{
    this.serv.getProjects().subscribe(res=>{
      res.body?.forEach(project=>this.projects.unshift(project))
    }); 
  }

}