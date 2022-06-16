import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private api="http://localhost:3000/projects"
  
  constructor(private http:HttpClient) { }
}
