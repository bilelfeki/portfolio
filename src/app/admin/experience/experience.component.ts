import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences=["vermeg","be-softylis"]; 
  constructor() { }

  ngOnInit(): void {
  }
  onEdit(){
    console.log("ok")
  }
}
