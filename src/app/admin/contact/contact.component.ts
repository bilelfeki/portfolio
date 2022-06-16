import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  iconArray=["call","mail","location_on"]
  ListContact=["+216 21033247","bilel.feki.92@gmail.com","Tunis",]
  constructor() { }

  ngOnInit(): void {
  }

}
