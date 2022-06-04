import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  url="https://material.angular.io/assets/img/examples/shiba2.jpg"
  description="desc"
  constructor() {}

  ngOnInit(): void {
  }

}
