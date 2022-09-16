import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  isAuth:boolean=false
  Sign_In_Out:string='sign in'
  constructor() { }

  ngOnInit(): void {
  }

}
