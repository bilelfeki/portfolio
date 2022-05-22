import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() {localStorage.setItem("isauth","true") }
  isauth():boolean{
    this.setFakeIsAuth(true)
    console.log(localStorage.getItem("isauth"))
    return localStorage.getItem("isauth") ==="true"
  }
  private setFakeIsAuth(isauth :boolean): void{
    let isauthToString=String(isauth)
    if(isauthToString===("false" || "false")){
      localStorage.setItem("isauth",isauthToString) 
    }
  }
}
