import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile :Profile={
    imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg",
    firstName:"First Name",
    lastName:"Last Name ",
    description:"This is a fake description"
  }
  url="https://material.angular.io/assets/img/examples/shiba2.jpg"
  description="desc"
  constructor() {}

  ngOnInit(): void {
  }

}
