import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})

export class ProfileFormComponent implements OnInit {
  profile!:Profile
  form =new FormGroup({
    fullName : new FormControl('',[Validators.required]),
    descripion :new FormControl('',[Validators.required]),
    position : new FormControl('',[Validators.required]),
    image :new FormControl('',[Validators.required])
  });


  imageChangedEvent: any = '';
  croppedImage: any = '';
 
  constructor() { 
  }
  ngOnInit(): void {
  }
  uploadImage(event:any){
      this.imageChangedEvent=event ; 
  }
  imageCropped(event:ImageCroppedEvent){
    this.croppedImage=event.base64
    this.form.get('image')?.setValue(event.base64)
    console.log(event)
  }
  imageLoaded(){

  }
  onFormSubmit(){
    console.log(this.form.value)
    this.profile.actualPosition=this.form.get('position')?.value
    this.profile.fullName=this.form.get('fullName')?.value
    this.profile.actualPosition=this.form.get('position')?.value
    this.profile.imageUrl=this.form.get('image')?.value
  }
}


