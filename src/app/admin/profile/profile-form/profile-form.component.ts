import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

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
  uploadImage(event:any){
      this.imageChangedEvent=event ; 
  }
  imageCropped(event:ImageCroppedEvent){
    this.croppedImage=event.base64
    console.log(event)
  }
}
