import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  iconArray=["call","mail","location_on","in"]; 
  ListContact:any=[] ; 
  constructor(private serv:ContactService) { }

  ngOnInit(): void {
    this.getContact();
  }
  getContact(){
    this.serv.getContact().subscribe(contact=>{
      this.ListContact.push(contact.phoneNumber);
      this.ListContact.push(contact.email) ; 
      this.ListContact.push(contact.location);
    })
  }

}
