import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() { }


  ngOnInit(): void {
  }
  uploadImage(event:Event){
      this.imageChangedEvent=event ; 
      console.log(event) ; 
  }
}
