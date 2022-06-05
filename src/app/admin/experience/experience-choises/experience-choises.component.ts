import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-choises',
  templateUrl: './experience-choises.component.html',
  styleUrls: ['./experience-choises.component.scss']
})
export class ExperienceChoisesComponent implements OnInit {
  choises=["delete","duplicate"]
  constructor() { }

  ngOnInit(): void {
  }

}
