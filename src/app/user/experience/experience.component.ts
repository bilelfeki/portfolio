import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/interfaces/experience';
import { ExperienceServiceService } from 'src/app/services/experience-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  name="bilelfeki"
  experiences:Experience[]=[];
  exp!:Experience
  constructor(private expService:ExperienceServiceService) { }

  ngOnInit(): void {
    this.getExperience()
  }
  onEdit(){
    console.log("ok")
  }
  performAction(action:string,id:number){
    console.log(action,id)
  }

  getExperience(){
    this.expService.getExperience().subscribe(
      (data) => data.body?.forEach(exp=>this.experiences.push(exp))
    )}
  }
