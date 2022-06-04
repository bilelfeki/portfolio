import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/services';
@Component({
  selector: 'app-toolbar-view',
  templateUrl: './toolbar-view.component.html',
  styleUrls: ['./toolbar-view.component.scss']
})
export class ToolbarViewComponent implements OnInit {
  public isNotLogged:boolean;
  public menuItem:string[]=["logout","profile","experience","erojects","skills","contact"]
  constructor(private toolbarService : ToolbarService) { 
    this.isNotLogged=!this.toolbarService.isauth() 
  }

  ngOnInit(): void {
    this.toolbarService.isauth
  }

}
