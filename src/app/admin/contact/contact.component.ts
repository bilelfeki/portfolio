import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  iconArray=["location_on","mail","call"]
  ListContact=["tunis","bilel.feki.92@gmail.com","+216 21033247"]
  constructor() { }

  ngOnInit(): void {
  }

}
